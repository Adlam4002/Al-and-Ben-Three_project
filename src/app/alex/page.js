"use client";
import Box from "@/components/Box";
import Controls from "@/components/Controls";
import Orb from "@/components/Orb";

import { DragControls, Plane } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { Scene, SphereGeometry } from "three";

export default function App() {
  return (
    <main>
      <Link href={"/"}>Home</Link>
      <div id="canvas-container" className="h-screen w-screen">
        <Canvas
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <Plane
            color={"blue"}
            rotation-x={-1.57079633}
            receiveShadow
            castShadow
            scale={[100, 100, 1]}
          />
          <ambientLight intensity={1.1} />

          <Controls />
          <DragControls>
            <Orb position={[-3, 12, 0]} />
          </DragControls>
          <DragControls>
            <Box position={[0, 10, 0]} castShadow receiveShadow />
          </DragControls>
          <DragControls>
            <Box position={[2, 10, 0]} castShadow receiveShadow />
          </DragControls>
        </Canvas>
      </div>
    </main>
  );
}
