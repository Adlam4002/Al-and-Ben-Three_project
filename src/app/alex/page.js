"use client";
import Box from "@/components/Box";
import Controls from "@/components/Controls";
import Draggable from "@/components/Draggable";
import { DragControls, Plane } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <div id="canvas-container" className="h-screen w-screen">
      <Canvas
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <Plane color={"blue"} />
        <ambientLight intensity={1.1} />
        <directionalLight color="red" position={[0, 0, 5]} castShadow />
        <DragControls>
          <Box />
        </DragControls>
        <Controls />
      </Canvas>
    </div>
  );
}
