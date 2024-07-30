"use client";
import "./ben.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, } from "@react-three/drei";
import { Suspense } from "react";

import BenScene from "@/components/BenScene";



export default function AppBen() {
  return (
    <main>
      <Canvas shadows>
      <Suspense fallback={null}>
        <BenScene />
        <OrbitControls />
        </Suspense>
      </Canvas>
    </main>
  );
}
