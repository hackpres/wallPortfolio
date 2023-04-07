import './App.css';
// import TriDCube from './components/3d/cube/3dCube';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Model as WallAnimation } from './components/3d/cube/WallAnimation';
import { Suspense, useState, useEffect } from 'react';
import { PerspectiveCamera } from 'three';
// import { OrbitControls } from '@react-three/drei';
// import Cylinder3d from './components/3d/Cylinder3d';
  
// function CameraHelper() {
//   const camera = new PerspectiveCamera(43, 1.77, 9, 16.7);
//   return (
//     <group position={[4.3, 3.73, 16.7]}>
//       <cameraHelper args={[camera]} />
//     </group>
//   );
// }
function App() {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
  }
  const { width } = useWindowDimensions();
  console.log(width);
  const mobileCamera = new PerspectiveCamera(36, 2.5, 9, 20.7);
  mobileCamera.position.set(8.8, 3.2, 16.7);
  let mobileForward = new THREE.Vector3(0, 0, -16.7);
  let mobileLookat = new THREE.Vector3().copy(mobileCamera.position).add(mobileForward);
  mobileCamera.lookAt(mobileLookat);
  
  const desktopCamera = new PerspectiveCamera(43, 1.77, 9, 20.7);
  desktopCamera.position.set(4.3, 3.37, 16.7);
  let desktopForward = new THREE.Vector3(0, 0, -16.7);
  let desktopLookat = new THREE.Vector3().copy(desktopCamera.position).add(desktopForward);
  desktopCamera.lookAt(desktopLookat);
  
  function isMobile(w) {
    if (w <= 500) {
      return true
    } else return false
  }
  return (
    <>
      {/* <TriDCube /> */}
      <section className="App-header" >
        {/* Canvas 1 */}
        <Canvas className='canvas'
          camera={isMobile(width) ? mobileCamera : desktopCamera}
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
