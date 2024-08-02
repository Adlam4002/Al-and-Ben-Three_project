"use client";

import { Flag } from "./Flag";
import { useRef, useState } from "react";
import { Line, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, CatmullRomCurve3, Vector3 } from "three";
import { LightWeightTent } from "./LightWeightTent";

function parabolic(a) {
    return 1 - (2 * a - 1) * (2 * a - 1);
}
  

const LWFClick = ({ ...props }) => {
    const scroll = useScroll();
    const lwtRef = useRef();
    const [isClicked, setIsClicked] = useState(false);
    const tentPathPoints =  [
        new Vector3(2,1,-3),
        new Vector3(2,1,-3),
        new Vector3(-0.5,4,0),
        new Vector3(-0.5,4,0),
        new Vector3(-0.5,0.2,0)
    ]

    const path = new CatmullRomCurve3(tentPathPoints);
    const pathGeometry = new BufferGeometry().setFromPoints(path.getPoints(50));
   
    useFrame(({state,delta}) => {

        const flagLerpPos = parabolic(scroll.range(1 / 2, 1));
        const pos = path.getPointAt(flagLerpPos);
        lwtRef.current.position.copy(pos);


    });
    return (
        <>
        <mesh ref={lwtRef} rotation={[-Math.PI / 2, 0, Math.PI]} position={[2, 0, 0]}>
            <LightWeightTent/>
        </mesh>
            <mesh>
                {/* <Line points={path.getPoints(50)} color={'red'}>
                    <bufferGeometry setFromPoints={path.getPoints(50)}/>
                    <lineBasicMaterial color={'red'}/>
                </Line> */}
            </mesh>
        </>
    );
}
export default LWFClick;