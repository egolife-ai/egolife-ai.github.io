"use client";

import { Canvas } from "@react-three/fiber";
import Space from "./Space";
import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";
import { SheetProvider } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { getProject } from "@theatre/core";
import { Leva } from "leva";

const project = getProject("egolife");
const mainSheet = project.sheet("Main");

studio.initialize();
studio.extend(extension);

const Scene = () => {
  return (
    <>
      <div className="fixed inset-0">
        <LoadingScreen />
        <Canvas camera={{ position: [0, 0, 10] }}>
          <SheetProvider sheet={mainSheet}>
            <Suspense fallback={null}>
              <Space />
            </Suspense>
          </SheetProvider>
        </Canvas>
      </div>
      <div className="fixed right-0 bottom-0">
        <Leva fill hidden />
      </div>
    </>
  );
};

export default Scene;
