"use client";

import { Canvas } from "@react-three/fiber";
import Space from "./Space";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Space />
        </Suspense>
      </Canvas>
      {/* <Loader /> */}
    </div>
  );
};

export default Scene;
