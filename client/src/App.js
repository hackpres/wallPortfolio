import './App.css';
// import TriDCube from './components/3d/cube/3dCube';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Model as WallAnimation } from './components/3d/cube/WallAnimation';
import { Suspense } from 'react';
import { PerspectiveCamera } from 'three';
// import { OrbitControls } from '@react-three/drei';
// import Cylinder3d from './components/3d/Cylinder3d';
  
function CameraHelper() {
  const camera = new PerspectiveCamera(43, 1.77, 9, 16.7);
  return (
    <group position={[4.3, 3.73, 16.7]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}
function App() {
  const camera = new PerspectiveCamera(43, 1.77, 9, 20.7);
  camera.position.set(4.3, 3.37, 16.7);
  let forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion); 
  let lookat = new THREE.Vector3().copy(camera.position).add(forward);
  camera.lookAt(lookat);
  
  return (
    <>
      {/* <TriDCube /> */}
      <section className="App-header" >
        {/* Canvas 1 */}
        <Canvas className='canvas'
          camera={camera}
        >
          {<pointLight position={[10, 10, 10]} intensity={1} />}
          {<ambientLight color={'#404040'} intensity={2} />}
          <Suspense fallback={null}>
            <WallAnimation />
          </Suspense>
          {/* <CameraHelper /> */}
          {/* <OrbitControls /> */}
          {/* <Cylinder3d position={[0, 0, 0]} /> */}
        </Canvas>
      </section>
    </>
  );
}

export default App;
