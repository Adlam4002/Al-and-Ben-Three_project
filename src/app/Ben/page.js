'use client'
import './ben.css'
import {Canvas} from "@react-three/fiber";
import Musca from './musca';
import { useRef } from 'react';
import { OrbitControls, RenderTexture, useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';

const Scene = () => {
    const flyRef = useRef()
    const spotRef = useRef()
    useHelper(spotRef,SpotLightHelper,'red')
    return(
        <group>
            <spotLight  ref={spotRef} intensity={100} power={200} position={[0,20,0]} lookAt={[0,0,0]} castShadow={true}/>
            <Musca ref={flyRef}/>
            <mesh rotation={[-Math.PI/2,0,0]} position={[0,-1,0]} receiveShadow={true}>
                <planeGeometry args={[30,30,15,15]}/>
                <meshStandardMaterial />
                    <RenderTexture attach="map" />
            </mesh>
        </group>
    )
}

export default function AppBen(){

    return(
        <main>
            <Canvas shadows={true}>
                <Scene/>
                <OrbitControls/>
            </Canvas>
        </main>
    )
}