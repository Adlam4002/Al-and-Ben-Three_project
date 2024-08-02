"use client";
import { useRef, useState } from "react";
import {
  RenderTexture,
  useHelper,
  Html,
  ScrollControls,
  useScroll,
  Scroll,
} from "@react-three/drei";
import { SpotLightHelper, Vector3 } from "three";
import { Shiba } from "./Shiba";
import { Dude } from "./Dude";
import { Tent } from "./Tent";
import { FlagBase } from "./FlagBase";
import { useFrame } from "@react-three/fiber";
import FlagScroll from "./FlagScroll";
import { LightWeightTent } from "./LightWeightTent";
import LWFClick from "./LWTClick";


const BenScene = () => {
  const spotRef = useRef();
  const spotLeftRef = useRef();
  const spotRightRef = useRef();

  // useHelper(spotRef, SpotLightHelper, "red");
  // useHelper(spotLeftRef, SpotLightHelper, "red");
  // useHelper(spotRightRef, SpotLightHelper, "red");

  const tentRef = useRef();
  const [tentAnimateIncrement, setTentAnimateIncrement] = useState(0.01);
  const tentMaxY = 2;
  const tentMinY = 0;

  //const flagLerpPos = parabolic(scroll.range(1/2,1/3));
  //console.log(flagLerpPos);
  // useFrame(({ state, delta }) => {
  //   if (
  //     tentRef.current.position.y < tentMaxY &&
  //     tentRef.current.position.y > tentMinY
  //   )
  //     tentRef.current.position.y += tentAnimateIncrement;
  // });
  return (
    <>
      <group receiveShadow scale={0.5} position={[0,-1,0]}>
        <spotLight ref={spotRef} power={30} position={[0, 4, 0]} castShadow />
        <spotLight
          ref={spotLeftRef}
          power={30}
          position={[4, 2, 2]}
          castShadow
        />
        <spotLight
          ref={spotRightRef}
          power={30}
          position={[-4, 2, 2]}
          castShadow
        />
        {/* <Shiba /> */}
        <mesh rotation={[-Math.PI / 2, 0, Math.PI]} position={[-0.5, 0, 0]}>
          <Dude />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
        {/* <mesh
          rotation={[-Math.PI / 2, 0, Math.PI]}
          position={[-0.5, 0, 0]}
          ref={tentRef}
          onClick={() => {
            console.log(tentRef.current.position.y.toFixed(0));
            if (tentRef.current.position.y.toFixed(0) == 0)
              tentRef.current.position.y += 0.02;
            if (tentRef.current.position.y.toFixed(0) == 2)
              tentRef.current.position.y -= 0.02;
            setTentAnimateIncrement(-tentAnimateIncrement);
          }}
        >
          <Tent />
        </mesh> */}

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[2, 0, 0]}>
          <FlagBase />
        </mesh>




        <ScrollControls pages={5}>
          <FlagScroll />
          <LWFClick />
        </ScrollControls>
      </group>

    </>
  );
};

export default BenScene;
