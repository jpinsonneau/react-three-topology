import {
  BakeShadows,
  CubicBezierLine,
  Edges, Html,
  Line, MeshReflectorMaterial,
  OrbitControls, Text
} from '@react-three/drei';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import * as React from 'react';
import { Euler, Vector3 } from 'three';
import { Item, Edge, Options } from '../models';
import { flatten } from '../utils';

const NodeSpacer = 20;

export const TopologyCanvas: React.FC<{
  allNamespaces: string[];
  externals: Item[];
  services: Item[];
  nodes: Item[];
  edges: Edge[];
  options: Options;
}> = ({
  allNamespaces,
  externals,
  services,
  nodes,
  edges,
  options
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
        console.log("setParent", i, parent);
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
      console.log("getPosition", item.type, item);
      if (!item.type) {
        return externalPosition(externals.indexOf(item));
      } else {
        switch (item.type) {
          case 'Node':
            return nodePosition(nodesWithParents.indexOf(item)).add(new Vector3(0, 1, 0));
          case 'Namespace':
            const nNode = item.parent

            if (!nNode) {
              console.error("can't get position of namespace", item);
              return undefined;
            }

            return namespacePosition(nodesWithParents.indexOf(nNode!), item.name).add(new Vector3(0, -0.6, 0));
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

    function Ground() {
      return (
        <mesh receiveShadow castShadow rotation={new Euler(-Math.PI / 2)}>
          <planeGeometry args={[500, 500]} />
          <MeshReflectorMaterial
            blur={[0, 0]}
            mixBlur={1}
            mixStrength={1}
            mixContrast={1}
            resolution={1024}
            mirror={0}
            depthScale={0}
            minDepthThreshold={0.9}
            maxDepthThreshold={1}
            depthToBlurRatioBias={0.25}
            distortion={1}
            reflectorOffset={0.8}
          />
        </mesh>
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Item(props: any) {
      const ref = React.useRef<MeshProps>();
      const [hovered, hover] = React.useState(false);
      const [clicked, click] = React.useState(false);
      const isResource = !props.type || ['Pod', 'Service'].includes(props.type);
      const color = props.color || '#2b9af3';
      const params = getItemParams(props.type);

      useFrame(state => {
        if (clicked) {
          const pos = ref.current!.position as Vector3;
          const camPos = new Vector3(pos.x + 10, pos.y, pos.z);
          state.camera.lookAt(pos);
          state.camera.position.lerp(camPos, 0.01);
          state.camera.updateProjectionMatrix();
        }
        return null;
      });

      return (
        <mesh
          {...props}
          receiveShadow
          castShadow
          ref={ref}
          onClick={event => {
            click(!clicked);
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
          {props.type === 'Pod' ? (
            <icosahedronGeometry args={[params.size / 2]} />
          ) : props.type === 'Service' ? (
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
                  className="three-d-text-content"
                  style={{
                    background: hovered ? '#2b9af3' : '#202035',
                    marginLeft: `${params.marginLeft}em`
                  }}
                >
                  {props.name}
                </div>
              </Html>
            )
          ) : (
            <mesh
              position={[
                0,
                props.type === 'Node' ? 1.1 : 0.1,
                props.type === 'Node'
                  ? params.size / 2 - 2
                  : props.type === 'Namespace'
                    ? params.size / 2 - 0.5
                    : (params.size * 3) / 4
              ]}
              rotation={new Euler(-Math.PI / 2)}
            >
              <React.Suspense fallback={null}>
                <Text
                  scale={[params.textScale, params.textScale, params.textScale]}
                  color="black"
                  anchorX="center"
                  anchorY="middle"
                  key={undefined} attach={undefined} args={undefined} onUpdate={undefined} material={undefined} geometry={undefined} raycast={undefined} clear={undefined} id={undefined} visible={undefined} renderOrder={undefined} castShadow={undefined} type={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} receiveShadow={undefined} frustumCulled={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined}                >
                  {props.name}
                </Text>
              </React.Suspense>
            </mesh>
          )}

          <Edges visible={params.wireframe || hovered} renderOrder={1000}>
            <meshBasicMaterial transparent color="#333" depthTest={false} />
          </Edges>
        </mesh>
      );
    }

    return (
      <Canvas id="topology-canvas" shadows dpr={[1, 2]} camera={{ position: [50, allNamespaces.length / 2, 50] }}>
        <OrbitControls makeDefault rotateSpeed={2} minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} />

        <pointLight color="white" />
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
              color={'#bbb'}
              lineWidth={0.5}
              dashed={true}
              material={undefined} fog={undefined} geometry={undefined} clear={undefined} uniforms={undefined} transparent={undefined} wireframe={undefined} id={undefined} visible={undefined} renderOrder={undefined} castShadow={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} receiveShadow={undefined} frustumCulled={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} precision={undefined} alphaTest={undefined} blendDst={undefined} blendDstAlpha={undefined} blendEquation={undefined} blendEquationAlpha={undefined} blending={undefined} blendSrc={undefined} blendSrcAlpha={undefined} clipIntersection={undefined} clippingPlanes={undefined} clipShadows={undefined} colorWrite={undefined} defines={undefined} depthFunc={undefined} depthTest={undefined} depthWrite={undefined} stencilWrite={undefined} stencilFunc={undefined} stencilRef={undefined} stencilWriteMask={undefined} stencilFuncMask={undefined} stencilFail={undefined} stencilZFail={undefined} stencilZPass={undefined} isMaterial={undefined} needsUpdate={undefined} polygonOffset={undefined} polygonOffsetFactor={undefined} polygonOffsetUnits={undefined} premultipliedAlpha={undefined} dithering={undefined} side={undefined} shadowSide={undefined} toneMapped={undefined} version={undefined} onBeforeCompile={undefined} customProgramCacheKey={undefined} setValues={undefined} vertexShader={undefined} fragmentShader={undefined} wireframeLinewidth={undefined} lights={undefined} clipping={undefined} extensions={undefined} glslVersion={undefined} format={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} derivatives={undefined} defaultAttributeValues={undefined} index0AttributeName={undefined} uniformsNeedUpdate={undefined} isShaderMaterial={undefined} />
          );
        })}
        {items.map((item, i) => (
          <Item key={`item-${i}`} type={item.type} position={getPosition(item)} name={item.name} color={item.color} />
        ))}
        {options.edges &&
          edges.filter(e => e.from.position && e.to.position).map((e, o) => {
            const start = e.from.position!;
            const end = e.to.position!;
            const startParam = getItemParams(e.from.type);
            const endParam = getItemParams(e.to.type);
            const midA = new Vector3(0, start.y, 0);
            const midB = new Vector3(0, end.y, 0);
            const color = e.size >= maxSize / 2 ? 'red' : e.size >= maxSize / 3 ? 'orange' : 'black';
            if (Math.abs(start.x - end.x) <= 5 && Math.abs(start.z - end.z) <= 5) {
              midA.x = start.x - 10;
              midB.x = end.x + 10;
            }
            return (
              <CubicBezierLine
                key={`edge-${o}`}
                start={start.add(new Vector3(startParam.size / 2, -startParam.height / 2, startParam.size / 2))}
                end={end.add(new Vector3(endParam.size / 2, -endParam.height / 2, endParam.size / 2))}
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