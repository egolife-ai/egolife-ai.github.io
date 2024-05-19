import { CameraControls, Sky, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Space = () => {
  const model = useGLTF("egohouse.gltf");

  return (
    <>
      {/* TODO: Use theatre.js */}

      <CameraControls />

      <Sky />
      <primitive object={model.scene} />
    </>
  );
};

export default Space;

useGLTF.preload("egohouse.gltf");
