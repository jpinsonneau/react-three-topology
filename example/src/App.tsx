import * as RTTopology from '@jpinsonneau/react-three-topology';
import './App.css';
import { props } from './mocks/props';



function App() {
  return (
    <div className="root">
      <RTTopology.TopologyCanvas
        allNamespaces={props.allNamespaces}
        externals={props.externals}
        services={props.services}
        nodes={props.nodes}
        edges={props.edges}
        options={props.options}
      />
    </div>
  );
}

export default App;
