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
import projectState from "@/data/egolife.theatre-project-state.json";

const isProd = process.env.NODE_ENV === "production";
// const isProd = false

const project = getProject(
  "egolife",
  isProd ? { state: projectState } : undefined,
);
const mainSheet = project.sheet("Main");

if (!isProd) {
  studio.initialize();
  studio.extend(extension);
}

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
      <div className="fixed bottom-0 right-0">
        <Leva fill />
      </div>
    </>
  );
};

export default Scene;
