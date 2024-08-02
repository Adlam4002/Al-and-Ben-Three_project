"use client";

import { Flag } from "./Flag";
import { useRef, useState } from "react";
import {
    RenderTexture,
    useHelper,
    Html,
    ScrollControls,
    useScroll,
    Scroll,
  } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";


function parabolic(a) {
    return 1 - (2 * a - 1) * (2 * a - 1);
  }
  
const FlagScroll = ({ ...props }) => {
    const scroll = useScroll();
    const flagRef = useRef();
    const defaultFlagPos = new Vector3(2, 2, 0);
    const flagMoveToPos = new Vector3(2, 0, 0);

    useFrame(({ state, delta }) => {
        const camLookAtLerped = new Vector3(0, 0, 0);
        const flagLerpPos = parabolic(scroll.range(1 / 2, 1));
        //console.log(flagLerpPos)
        camLookAtLerped.lerpVectors(defaultFlagPos, flagMoveToPos, flagLerpPos);
        console.log(camLookAtLerped[0]);
        flagRef.current.position.copy(camLookAtLerped)
        // flagRef.current.position.x = camLookAtLerped.x;
        // flagRef.current.position.y = camLookAtLerped.y;
        // flagRef.current.position.z = camLookAtLerped.z;
    });

    return (
        <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={defaultFlagPos}
        ref={flagRef}
        >
        <Flag />
        </mesh>
    );
}
export default FlagScroll;