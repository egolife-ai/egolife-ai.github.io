"use client";

import { Canvas } from "@react-three/fiber";
import Space from "./Space";
import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

const Scene = () => {
  return (
    <div className="fixed inset-0">
      <LoadingScreen />
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Space />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
