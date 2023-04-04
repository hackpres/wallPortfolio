import './App.css';
// import TriDCube from './components/3d/cube/3dCube';
import { Canvas } from '@react-three/fiber';
import { Model as WallAnimation } from './components/3d/cube/WallAnimation';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
// import Cylinder3d from './components/3d/Cylinder3d';

function App() {
  return (
    <>
      {/* <TriDCube /> */}
      <section className="App-header">
        {/* Canvas 1 */}
        <Canvas
          camera={{ position: [5, 4, 60], fov: 10 }}
        >
          {<pointLight position={[10, 10, 10]} />}
          {<ambientLight />}
          <Suspense fallback={null}>
            <WallAnimation />
          </Suspense>
          <OrbitControls />
          {/* <Cylinder3d position={[0, 0, 0]} /> */}
        </Canvas>
      </section>
    </>
  );
}

export default App;
