"use client";
import "./ben.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RenderTexture } from "@react-three/drei";
import { Suspense } from "react";
import { DoubleSide } from "three";
import BenScene from "@/components/BenScene";



export default function AppBen() {
  return (
    <main>
      <Canvas shadows >
      <Suspense fallback={null}>
        <BenScene />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[10, 10, 15, 15]} receiveShadow />
          <meshStandardMaterial receiveShadow side={DoubleSide} />
          <RenderTexture attach="map" />
          </mesh>
        <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </main>
  );
}
