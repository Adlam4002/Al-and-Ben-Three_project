"use client";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Box(props) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh {...props} ref={ref} recieveShadow={true}>
      <boxGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}
