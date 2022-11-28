import * as RTTopology from '@jpinsonneau/react-three-topology';
import './App.css';

//change between imported props here
import { SmallCluster as p } from './mocks/props';

function App() {
  const isDark = false;

  return (
    <div className={`root ${isDark ? 'dark' : 'light'}`}>
      <RTTopology.TopologyCanvas
        allNamespaces={p.allNamespaces}
        externals={p.externals}
        services={p.services}
        nodes={p.nodes}
        edges={p.edges}
        options={p.options}
        isDark={isDark}
        onClick={(i: RTTopology.Item) => console.log("Item clicked", i)}
      />
    </div>
  );
}

export default App;
