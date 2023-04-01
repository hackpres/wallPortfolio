import './App.css';
// import TriDCube from './components/3d/cube/3dCube';
import { Canvas } from '@react-three/fiber';
import Cylinder3d from './components/3d/Cylinder3d';

function App() {
  return (
    <>
      {/* <TriDCube /> */}
      <section className="App-header">
        {/* Canvas 1 */}
        <Canvas>
          {<pointLight position={[10, 10, 10]} />}
          {<ambientLight />}
          <Cylinder3d position={[0, 0, 0]} />
        </Canvas>
        {/* Canvas 2 */}
        {/* <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={0.5} />
          <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
          <Cylinder3d position={[1.2, 0, 0]} wireframe={true} />
        </Canvas> */}
 
        {/* Canvas 3 */}
        {/* <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight color={"darkgray"} />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas> */}
      </section>
    </>
  );
}

export default App;
