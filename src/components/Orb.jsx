"use client";
import { useRef, useState } from "react";
export default function Orb(props) {
  const ref = useRef();
  return (
    <mesh {...props} ref={ref} castShadow>
      <pointLight
        color={"blue"}
        castShadow
        receiveShadow
        power={10000}
        decay={2}
        ref={ref}
      ></pointLight>

      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        castShadow
        emissive={"blue"}
        emissiveIntensity={1.3}
      ></meshStandardMaterial>
    </mesh>
  );
}
