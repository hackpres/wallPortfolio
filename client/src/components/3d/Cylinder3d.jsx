import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";

function Cylinder3d(props) {
    const ref = useRef();
    const [hovered, setHover] = useState(false);
    const [clicked, setClick] = useState(false);
    
    const length = 1, width = 1;

    const shape = new THREE.Shape();
    shape.moveTo( 0,0 );
    shape.lineTo( 0, width );
    shape.lineTo( length, width );
    shape.lineTo( length, 0 );
    shape.lineTo(0, 0);
    
    const extrudeSettings = {
	steps: 1,
	depth: 1,
	bevelEnabled: true,
	bevelThickness: .5,
	bevelSize: .5,
	bevelOffset: 0,
	bevelSegments: 10
    };

    useFrame((state, delta) => (ref.current.rotation.x += 0.03));

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(e) => setClick(!clicked)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
        >
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshStandardMaterial
                wireframe={props.wireframe}
                color={hovered ? "rebeccapurple" : "teal"}
            />
        </mesh>
    );
}

export default Cylinder3d;