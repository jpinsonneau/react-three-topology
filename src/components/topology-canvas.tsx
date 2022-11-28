import {
  BakeShadows,
  CubicBezierLine,
  Edges, Html,
  Line, MeshReflectorMaterial,
  Text
} from '@react-three/drei';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, MeshProps, useThree, useFrame, ThreeEvent } from '@react-three/fiber';
import * as React from 'react';
import { Mesh, Euler, Vector3 } from 'three';
import { Item, Edge, Options } from '../models';
import { flatten } from '../utils';

const NodeSpacer = 20;

const CameraController = () => {
  const { camera, gl } = useThree();
  React.useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 200;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

export const TopologyCanvas: React.FC<{
  allNamespaces: string[];
  externals: Item[];
  services: Item[];
  nodes: Item[];
  edges: Edge[];
  options: Options;
  isDark?: boolean;
  onClick: (item: Item) => void;
}> = ({
  allNamespaces,
  externals,
  services,
  nodes,
  edges,
  options,
  isDark,
  onClick
}) => {
    const nodesWithParents = setParents(nodes);
    allNamespaces = allNamespaces.sort((a, b) => a.localeCompare(b));
    const nodeSqrt = Math.ceil(Math.sqrt(nodesWithParents.length));
    const maxSize = Math.max(...edges.map(e => e.size));
    const items = setPositions(flatten(nodesWithParents).concat(services).concat(externals)).filter(i => i.position);
    edges.forEach(e => {
      const from = items.find(i => i.name === e.from.name && i.namespace === e.from.namespace);
      if (from) {
        e.from = from;
      }

      const to = items.find(i => i.name === e.to.name && i.namespace === e.to.namespace);
      if (to) {
        e.to = to;
      }
    })

    function setParents(items: Item[], parent?: Item) {
      items.forEach((i: Item) => {
        i.parent = parent;
        i.children = i.children ? setParents(i.children, i) : [];
      });
      return items;
    }

    function setPositions(items: Item[]) {
      items.forEach((i: Item) => {
        i.position = getPosition(i);
      });
      return items;
    }

    function nodePosition(i: number) {
      return new Vector3(
        (i % nodeSqrt) * NodeSpacer - (nodeSqrt / 4) * NodeSpacer,
        0,
        Math.ceil((i + 1) / nodeSqrt) * NodeSpacer - (nodeSqrt * NodeSpacer * 3) / 4 + 2
      );
    }

    function namespacePosition(nodeIndex: number, namespace: string) {
      const namespaceIndex = allNamespaces.indexOf(namespace);
      const spacer = 3;
      const namespaceVector = new Vector3(0, (namespaceIndex + 1) * spacer, 0);
      if (nodeIndex >= 0) {
        return nodePosition(nodeIndex).add(namespaceVector);
      } else {
        return namespaceVector;
      }
    }

    function ownerPosition(nodeIndex: number, namespace: string, ownerIndex: number, ownerSqrt: number) {
      const spacer = 3.5;
      return namespacePosition(nodeIndex, namespace).add(
        new Vector3((ownerIndex % ownerSqrt) * spacer - 2.5, 0, Math.ceil((ownerIndex + 1) / ownerSqrt) * spacer - 5)
      );
    }

    function resourcePosition(
      nodeIndex: number,
      namespace: string,
      ownerIndex: number,
      ownerSqrt: number,
      resourceIndex: number,
      resourceSqrt: number
    ) {
      const spacer = 1;
      const transform = resourceSqrt > 1 ? resourceSqrt / 4 : 0;
      return ownerPosition(nodeIndex, namespace, ownerIndex, ownerSqrt).add(
        new Vector3(
          (resourceIndex % resourceSqrt) * spacer - transform,
          0.5,
          Math.ceil((resourceIndex + 1) / resourceSqrt) * spacer - resourceSqrt
        )
      );
    }

    function externalPosition(i: number) {
      return new Vector3(
        2 * nodeSqrt * NodeSpacer * Math.cos((2 * i * Math.PI) / externals.length),
        10,
        2 * nodeSqrt * NodeSpacer * Math.sin((2 * i * Math.PI) / externals.length)
      );
    }

    function servicePosition(service: Item) {
      const filteredServices = services.filter(svc => svc.namespace === service.namespace);
      const filteredSqrt = Math.ceil(Math.sqrt(filteredServices.length));
      const serviceIndex = filteredServices.indexOf(service);

      const spacer = 2;
      return namespacePosition(-1, service.namespace!).add(
        new Vector3((serviceIndex % filteredSqrt) * spacer, 0, Math.ceil((serviceIndex + 1) / filteredSqrt) * spacer)
      );
    }

    function getPosition(item: Item) {
      if (!item.type) {
        return externalPosition(externals.indexOf(item));
      } else {
        switch (item.type) {
          case 'Node':
            return new Vector3().copy(nodePosition(nodesWithParents.indexOf(item))).add(new Vector3(0, 1, 0));
          case 'Namespace':
            const nNode = item.parent

            if (!nNode) {
              console.error("can't get position of namespace", item);
              return undefined;
            }

            return new Vector3().copy(namespacePosition(nodesWithParents.indexOf(nNode!), item.name)).add(new Vector3(0, -0.6, 0));
          case 'Pod':
            const pNode = item.parent?.parent?.parent!;
            const pNamespace = item.parent?.parent;
            const pOwner = item.parent;

            if (!pNode || !pNamespace || !pOwner) {
              console.error("can't get position of pod", item);
              return undefined;
            }

            const pOwnerSqrt = Math.ceil(Math.sqrt(item.parent!.parent!.children.length));
            const pResourceSqrt = Math.ceil(Math.sqrt(item.parent!.children.length));
            return resourcePosition(
              nodesWithParents.indexOf(pNode),
              pNamespace.name,
              pNamespace.children.indexOf(pOwner),
              pOwnerSqrt,
              pOwner.children.indexOf(item),
              pResourceSqrt
            );
          case 'Service':
            return servicePosition(item);
          default:
            const oNode = item.parent?.parent
            const oNamespace = item.parent;

            if (!oNode || !oNamespace) {
              console.error("can't get position of owner", item);
              return undefined;
            }

            const oNodeIndex = nodesWithParents.indexOf(oNode);
            const ownerIndex = oNamespace!.children.indexOf(item);
            const ownerSqrt = Math.ceil(Math.sqrt(oNamespace!.children.length));
            return ownerPosition(oNodeIndex, oNamespace!.name, ownerIndex, ownerSqrt);
        }
      }
    }

    function getItemParams(type?: string) {
      const params = {
        size: 1,
        height: 1,
        opacity: 1,
        wireframe: false,
        distanceFactor: 25,
        marginLeft: 0,
        textScale: 2.5
      };

      switch (type) {
        case undefined:
        case 'Pod':
        case 'Service':
          //nothing to do there
          break;
        case 'Node':
          params.size = 15;
          params.height = 2;
          params.distanceFactor = 40;
          params.marginLeft = 15;
          params.textScale = 10;
          break;
        case 'Namespace':
          params.size = 10;
          params.height = 0.1;
          params.opacity = 0.7;
          params.textScale = 5;
          break;
        default:
          params.size = 3;
          params.height = 1;
          break;
      }

      return params;
    }

    const Ground = () => {
      const ground = React.useRef<Mesh>();

      return (
        <mesh ref={ground} receiveShadow castShadow rotation={new Euler(-Math.PI / 2)}>
          <planeGeometry args={[500, 500]} />
          <MeshReflectorMaterial
            blur={[10, 10]}
            mixBlur={1}
            mixStrength={1}
            mixContrast={1}
            metalness={1}
            resolution={1024}
            mirror={isDark ? 1 : 0}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            depthToBlurRatioBias={0.25}
            distortion={1} refractionRatio={undefined} alphaWrite={undefined} />
        </mesh>
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Item = (i: Item) => {
      const ref = React.useRef<MeshProps>();
      const [hovered, hover] = React.useState(false);
      const [clicked, click] = React.useState(false);
      const isResource = !i.type || ['Pod', 'Service'].includes(i.type);
      const color = i.color || '#2b9af3';
      const params = getItemParams(i.type);

      //TODO: animate view to move on clicked item
      /*useFrame(state => {
        if (clicked) {
          const pos = ref.current!.position as Vector3;
          const camPos = new Vector3(pos.x + 10, pos.y, pos.z);
          state.camera.lookAt(pos);
          state.camera.position.lerp(camPos, 0.01);
          state.camera.updateProjectionMatrix();
        }
        return null;
      });*/

      return (
        <mesh
          ref={ref}
          type={i.type}
          position={i.position}
          name={i.name}
          receiveShadow
          castShadow
          onClick={event => {
            //click(!clicked);
            onClick(i);
            event.stopPropagation();
          }}
          onPointerOver={event => {
            hover(true);
            event.stopPropagation();
          }}
          onPointerOut={event => {
            hover(false);
            event.stopPropagation();
          }}
        >
          {i.type === 'Pod' ? (
            <icosahedronGeometry args={[params.size / 2]} />
          ) : i.type === 'Service' ? (
            <sphereGeometry args={[params.size / 2]} />
          ) : (
            <boxGeometry args={[params.size, params.height, params.size]} />
          )}
          <meshStandardMaterial
            emissive={color}
            color={hovered ? 'blue' : color}
            transparent
            wireframe={params.wireframe}
            opacity={params.opacity}
          />
          {isResource ? (
            options.resourceHTML && (
              <Html distanceFactor={params.distanceFactor}>
                <div
                  onMouseEnter={event => hover(true)}
                  onMouseLeave={event => hover(false)}
                  className={`three-d-text-content ${isDark ? 'dark' : 'light'}`}
                  style={{
                    background: hovered ? '#2b9af3' : '#202035',
                    marginLeft: `${params.marginLeft}em`
                  }}
                >
                  {i.name}
                </div>
              </Html>
            )
          ) : (
            <mesh
              position={[
                0,
                i.type === 'Node' ? 1.1 :
                  i.type === "Namespace" ? 0.1 :
                    0,
                i.type === 'Node' ? params.size / 2 - 2 :
                  i.type === 'Namespace' ? params.size / 2 - 0.5 :
                    params.size / 2 + 0.1
              ]}
              rotation={new Euler(i.type && ["Node", "Namespace"].includes(i.type) ? -Math.PI / 2 : 0)}
            >
              <React.Suspense fallback={null}>
                <Text
                  scale={[params.textScale, params.textScale, params.textScale]}
                  color={isDark ? "white" : "black"}
                  anchorX="center"
                  anchorY="middle"
                  key={undefined} attach={undefined} args={undefined} onUpdate={undefined} material={undefined} geometry={undefined} raycast={undefined} clear={undefined} id={undefined} visible={undefined} renderOrder={undefined} castShadow={undefined} type={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} receiveShadow={undefined} frustumCulled={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined}                >
                  {i.name}
                </Text>
              </React.Suspense>
            </mesh>
          )}

          <Edges visible={params.wireframe || hovered} renderOrder={1000}>
            <meshBasicMaterial transparent color={isDark ? "#F0F0F0" : "#212427"} depthTest={false} />
          </Edges>
        </mesh>
      );
    }

    return (
      <Canvas id="topology-canvas" shadows dpr={[1, 2]} camera={{ position: [50, allNamespaces.length / 2, 50] }}>
        <fog attach="fog" color={isDark ? "black" : "white"} near={50} far={500} />

        <CameraController />

        <pointLight color={"white"} />
        <pointLight position={[0, (allNamespaces.length * 3) / 2, 0]} color="white" />
        <pointLight castShadow position={[-10, allNamespaces.length * 6, -5]} color="white" />
        <Ground />
        {allNamespaces.map((namespace, i) => {
          const pos = namespacePosition(-1, namespace);
          const halfWidth = (nodeSqrt * NodeSpacer) / 2;
          return (
            <Line
              key={`floor-${i}`}
              points={[
                new Vector3(pos.x + halfWidth, pos.y, pos.z + halfWidth),
                new Vector3(pos.x - halfWidth, pos.y, pos.z + halfWidth),
                new Vector3(pos.x - halfWidth, pos.y, pos.z - halfWidth),
                new Vector3(pos.x + halfWidth, pos.y, pos.z - halfWidth),
                new Vector3(pos.x + halfWidth, pos.y, pos.z + halfWidth)
              ]}
              color={isDark ? '#252525' : '#bbb'}
              lineWidth={0.5}
              dashed={true}
              material={undefined} fog={undefined} geometry={undefined} clear={undefined} uniforms={undefined} transparent={undefined} wireframe={undefined} id={undefined} visible={undefined} renderOrder={undefined} castShadow={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} receiveShadow={undefined} frustumCulled={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} precision={undefined} alphaTest={undefined} blendDst={undefined} blendDstAlpha={undefined} blendEquation={undefined} blendEquationAlpha={undefined} blending={undefined} blendSrc={undefined} blendSrcAlpha={undefined} clipIntersection={undefined} clippingPlanes={undefined} clipShadows={undefined} colorWrite={undefined} defines={undefined} depthFunc={undefined} depthTest={undefined} depthWrite={undefined} stencilWrite={undefined} stencilFunc={undefined} stencilRef={undefined} stencilWriteMask={undefined} stencilFuncMask={undefined} stencilFail={undefined} stencilZFail={undefined} stencilZPass={undefined} isMaterial={undefined} needsUpdate={undefined} polygonOffset={undefined} polygonOffsetFactor={undefined} polygonOffsetUnits={undefined} premultipliedAlpha={undefined} dithering={undefined} side={undefined} shadowSide={undefined} toneMapped={undefined} version={undefined} onBeforeCompile={undefined} customProgramCacheKey={undefined} setValues={undefined} vertexShader={undefined} fragmentShader={undefined} wireframeLinewidth={undefined} lights={undefined} clipping={undefined} extensions={undefined} glslVersion={undefined} format={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} derivatives={undefined} defaultAttributeValues={undefined} index0AttributeName={undefined} uniformsNeedUpdate={undefined} isShaderMaterial={undefined} />
          );
        })}
        {items.filter(i => i.position).map((item, i) => (
          <Item key={`item-${i}`} {...item} />
        ))}
        {options.edges &&
          edges.filter(e => e.from.position && e.to.position).map((e, o) => {
            const start = new Vector3().copy(e.from.position!);
            const end = new Vector3().copy(e.to.position!);
            const midA = new Vector3(0, start.y, 0);
            const midB = new Vector3(0, end.y, 0);
            const color = e.size >= maxSize / 2 ? 'red' : e.size >= maxSize / 3 ? 'orange' : isDark ? 'white' : 'black';
            if (Math.abs(start.x - end.x) <= 5 && Math.abs(start.z - end.z) <= 5) {
              midA.x = start.x - 10;
              midB.x = end.x + 10;
            }
            return (
              <CubicBezierLine
                key={`edge-${o}`}
                start={start}
                end={end}
                midA={midA}
                midB={midB}
                segments={20}
                color={color}
                lineWidth={(e.size * 4) / maxSize}
                dashed={false}
              />
            );
          })}
        <BakeShadows />
      </Canvas>
    );
  };

export default TopologyCanvas;