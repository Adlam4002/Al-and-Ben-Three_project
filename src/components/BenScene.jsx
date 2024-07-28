'use client'
import { useRef } from "react";
import Musca from "./musca";
import {RenderTexture, useHelper, Html } from '@react-three/drei'
import { SpotLightHelper, DoubleSide } from "three";
import { Shiba } from "./Shiba";

const BenScene = () => {
    const spotRef = useRef();
    const spotLeftRef = useRef();
    const spotRightRef = useRef();
    useHelper(spotRef, SpotLightHelper, "red");
    useHelper(spotLeftRef, SpotLightHelper, "red");
    useHelper(spotRightRef, SpotLightHelper, "red");
    return (
      <group receiveShadow>
        <spotLight
          ref={spotRef}
          power={10}
          position={[0, 2, 0]}
          castShadow
        />
        <spotLight
          ref={spotLeftRef}
          power={10}
          position={[2, 2, 0]}
          castShadow
        />
        <spotLight
          ref={spotRightRef}
          power={10}
          position={[-2, 2, 0]}
          castShadow
        />
        <Shiba />
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10, 15, 15]} receiveShadow  />
          <meshStandardMaterial receiveShadow side={DoubleSide} />
          <RenderTexture attach="map" />
        </mesh>

      </group>
    );
  };

export default BenScene