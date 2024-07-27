'use client'
import {useRef} from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Musca () {
    const meshRef = useRef();
    const gltf = useLoader(GLTFLoader, '/musca.gltf');
    return (
        <mesh ref={meshRef} castShadow={true}>
            <primitive object={gltf.scene}/>
        </mesh>
    )
}