'use client'
import {useRef} from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three';

export default function Musca () {
    const meshRef = useRef();
    const gltf = useLoader(GLTFLoader, '/scene.gltf');
    const text = useLoader(TextureLoader,'/textures/Musca_domestica_2.1001_diffuse.png')
    return (
        <mesh ref={meshRef} castShadow={true}>
            <primitive object={gltf.scene}/>
            <meshStandardMaterial map={text} />
        </mesh>
    )
}