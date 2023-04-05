/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 wallAnimation.glb
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

const backWall = new THREE.MeshPhongMaterial();
backWall.color = new THREE.Color('#21353d');
const impactWall = new THREE.MeshLambertMaterial();
impactWall.color = new THREE.Color('#3ca4af');
const objectMat = new THREE.MeshPhongMaterial();
objectMat.color = new THREE.Color('#f6eed7');
const floorPlane = new THREE.MeshBasicMaterial();
floorPlane.color = new THREE.Color('#0f262e');

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/wallAnimation.glb')
  const { actions } = useAnimations(animations, group)
  console.log(materials['backWall'].color);

  useEffect(() => {
    console.log(actions['cube1']);
    actions['cube1'].setLoop(THREE.LoopOnce);
    actions['cube2'].setLoop(THREE.LoopOnce);
    actions['cube3'].setLoop(THREE.LoopOnce);
    actions['cube4'].setLoop(THREE.LoopOnce);
    actions['sphere1'].setLoop(THREE.LoopOnce);
    actions['sphere2'].setLoop(THREE.LoopOnce);
    actions['sphere3'].setLoop(THREE.LoopOnce);
    actions['sphere4'].setLoop(THREE.LoopOnce);
    actions['cube1'].clampWhenFinished = true;
    actions['cube2'].clampWhenFinished = true;
    actions['cube3'].clampWhenFinished = true;
    actions['cube4'].clampWhenFinished = true;
    actions['sphere1'].clampWhenFinished = true;
    actions['sphere2'].clampWhenFinished = true;
    actions['sphere3'].clampWhenFinished = true;
    actions['sphere4'].clampWhenFinished = true;
    actions['cube1'].play()
    actions['cube2'].play()
    actions['cube3'].play()
    actions['cube4'].play()
    actions['sphere1'].play()
    actions['sphere2'].play()
    actions['sphere3'].play()
    actions['sphere4'].play()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="backWall" geometry={nodes.backWall.geometry} material={backWall} position={[0, 5.3, 0]} scale={[11.12, 5.37, 0.14]} />
        <mesh name="floorPlane" geometry={nodes.floorPlane.geometry} material={floorPlane} position={[0, 0, 3.67]} scale={[11.15, 1, 3.88]} />
        <mesh name="impactWall" geometry={nodes.impactWall.geometry} material={impactWall} position={[11.16, 5.3, 3.74]} rotation={[0, -Math.PI / 2, 0]} scale={[3.86, 5.37, 0.14]} />
        <mesh name="bumper" geometry={nodes.bumper.geometry} material={floorPlane} position={[1.61, 0.02, 7.56]} rotation={[0, 0, -Math.PI]} scale={[-9.69, -0.07, -0.09]} />
        <mesh name="cube1" geometry={nodes.cube1.geometry} material={objectMat} position={[-8.43, 5.92, 3.89]} scale={0.3} />
        <mesh name="cube2" geometry={nodes.cube2.geometry} material={objectMat} position={[-9.41, 5.92, 5.25]} scale={0.3} />
        <mesh name="cube3" geometry={nodes.cube3.geometry} material={objectMat} position={[-12.2, 5.25, 1.79]} rotation={[-0.67, 0.34, -0.15]} scale={0.3} />
        <mesh name="cube4" geometry={nodes.cube4.geometry} material={objectMat} position={[-9.95, 3.7, 2.56]} rotation={[1.66, 0.6, 0.49]} scale={0.3} />
        <mesh name="sphere1" geometry={nodes.sphere1.geometry} material={objectMat} position={[-11.64, 4.59, 4.03]} scale={0.36} />
        <mesh name="sphere2" geometry={nodes.sphere2.geometry} material={objectMat} position={[-9.37, 3.11, 5.15]} scale={0.36} />
        <mesh name="sphere3" geometry={nodes.sphere3.geometry} material={objectMat} position={[-15.03, 2.26, 2.88]} rotation={[0.51, -0.49, 0.29]} scale={0.36} />
        <mesh name="sphere4" geometry={nodes.sphere4.geometry} material={objectMat} position={[-12.52, 3.2, 2.04]} rotation={[0.51, -0.49, 0.29]} scale={0.36} />
      </group>
    </group>
  )
}

useGLTF.preload('/wallAnimation.glb')
