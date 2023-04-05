import './App.css';
// import TriDCube from './components/3d/cube/3dCube';
import { Canvas } from '@react-three/fiber';
import { Model as WallAnimation } from './components/3d/cube/WallAnimation';
import { Suspense } from 'react';
// import { OrbitControls } from '@react-three/drei';
// import Cylinder3d from './components/3d/Cylinder3d';
console.log(window.innerWidth)
function App() {
  return (
    <>
      {/* <TriDCube /> */}
      <section className="App-header" width={window.innerWidth} >
        {/* Canvas 1 */}
        <Canvas
          camera={{ position: [0, 4,50], fov: 7.85, rotation: [-.025, -0.09, 0.006] }}
        >
          {<pointLight position={[10, 10, 10]} intensity={1} />}
          {<ambientLight color={'#404040'} intensity={2} />}
          <Suspense fallback={null}>
            <WallAnimation />
          </Suspense>
          {/* <OrbitControls /> */}
          {/* <Cylinder3d position={[0, 0, 0]} /> */}
        </Canvas>
      </section>
    </>
  );
}

export default App;
