import * as RTTopology from '@jpinsonneau/react-three-topology';
import './App.css';
import { props } from './mocks/props';

function App() {
  const isDark = false;

  return (
    <div className={`root ${isDark ? 'dark' : 'light'}`}>
      <RTTopology.TopologyCanvas
        allNamespaces={props.allNamespaces}
        externals={props.externals}
        services={props.services}
        nodes={props.nodes}
        edges={props.edges}
        options={props.options}
        isDark={isDark}
        onClick={(i: RTTopology.Item) => console.log("Item clicked", i)}
      />
    </div>
  );
}

export default App;
