import { CameraControls, Center, Sky, useGLTF } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import Duck from "./Duck";
import VideoAnnotation from "./VideoAnnotation";
import SecurityCamera from "./SecurityCamera";
import Person from "./Person";
import { SecurityCameraModel } from "./SecurityCameraModel";

const Space = () => {
  const model = useGLTF("models/egohouse.gltf");
  const securityCamera = useGLTF("models/security_camera.glb");

  return (
    <>
      <CameraControls />

      <Sky />

      {/* Lighting */}
      <ambientLight intensity={2} />
      <directionalLight intensity={2} />

      {/* House */}
      {/* TODO: How to optimize this? */}
      <primitive object={model.scene} />

      {/* Cameras */}
      {/* TODO: Outline */}
      <e.group theatreKey="SecurityCameraGroup">
        {/* <Center>
          <e.primitive
            theatreKey="SecurityCamera"
            editableType="mesh"
            object={securityCamera.scene}
            scale={0.1}
          />
        </Center> */}
        <SecurityCameraModel />
        <e.mesh scale={0.5} theatreKey="SecurityCameraSight">
          <coneGeometry args={[1, 2, 4, 1, true]} />
          <meshStandardMaterial
            color="green"
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </e.mesh>
        <VideoAnnotation />
      </e.group>

      <SecurityCamera id={1} videoSrc={"/videos/sample-video.mp4"} />

      {/* People */}
      <e.group theatreKey="PersonGroup">
        <Center>
          <Duck />
        </Center>
        <e.mesh scale={0.5} theatreKey="PersonSight">
          <coneGeometry args={[1, 2, 4, 1, true]} />
          <meshStandardMaterial
            color="blue"
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </e.mesh>
        <VideoAnnotation />
      </e.group>

      <Person id={1} videoSrc={"/videos/sample-video.mp4"} />
    </>
  );
};

export default Space;

useGLTF.preload("egohouse.gltf");
