'use client'
import { useRef, useState } from "react";
import Musca from "./musca";
import {RenderTexture, useHelper, Html } from '@react-three/drei'
import { SpotLightHelper, DoubleSide } from "three";
import { Shiba } from "./Shiba";
import { Dude } from "./Dude";
import { Tent } from "./Tent";
import { FlagBase } from "./FlagBase";
import { Flag } from "./Flag";
import { useFrame } from "@react-three/fiber";

const BenScene = () => {
    const spotRef = useRef();
    const spotLeftRef = useRef();
    const spotRightRef = useRef();
    // useHelper(spotRef, SpotLightHelper, "red");
    // useHelper(spotLeftRef, SpotLightHelper, "red");
    // useHelper(spotRightRef, SpotLightHelper, "red");

    const tentRef = useRef();
    const [tentAnimateIncrement, setTentAnimateIncrement] = useState(0.01);
    const tentMaxY = 1;
    const tentMinY = -1;

    useFrame(({state,delta}) => {
        if(tentRef.current.position.y < tentMaxY && tentRef.current.position.y > tentMinY)
          tentRef.current.position.y +=tentAnimateIncrement;
    })
    return (
      <group receiveShadow>
        <spotLight
          ref={spotRef}
          power={30}
          position={[0, 4, 0]}
          castShadow
        />
        <spotLight
          ref={spotLeftRef}
          power={30}
          position={[4, 2, -2]}
          castShadow
        />
        <spotLight
          ref={spotRightRef}
          power={30}
          position={[-4, 2, -2]}
          castShadow
        />
        {/* <Shiba /> */}
        <mesh rotation={[-Math.PI / 2,0,0]}
          position={[-0.5,-1,0]}
        >
          <Dude />
          <meshStandardMaterial color={'hotpink'}/>
        </mesh>
        <mesh rotation={[-Math.PI / 2,0,0]}
          position={[-0.5,-1,0]}
          ref={tentRef}
          onClick={() => { 
            console.log(tentRef.current.position.y.toFixed(0));
            if(tentRef.current.position.y.toFixed(0) == -1)
              tentRef.current.position.y += 0.02;
            if(tentRef.current.position.y.toFixed(0) == 1)
              tentRef.current.position.y -= 0.02;
            setTentAnimateIncrement(-tentAnimateIncrement);
          }}
        >
          <Tent />
        </mesh>
        <mesh rotation={[-Math.PI / 2,0,0]}
          position={[2,-1,0]}
        >
          <FlagBase />
        </mesh>
        <mesh rotation={[-Math.PI / 2,0,0]}
          position={[2,-1,0]}
        >
          <Flag />
        </mesh>

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