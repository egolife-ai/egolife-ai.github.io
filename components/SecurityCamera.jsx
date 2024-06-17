import { Center, useGLTF } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import VideoAnnotation from "./VideoAnnotation";
import { SecurityCameraModel } from "./SecurityCameraModel";
import { useState } from "react";

const SecurityCamera = ({
  groupId,
  id,
  videoSrc,
  showSight = false,
  visible = true,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <e.group
      theatreKey={`${groupId} / SecurityCameraGroup-${id}`}
      visible={visible}
    >
      <SecurityCameraModel
        onPointerEnter={(e) => {
          e.stopPropagation();
          setShowVideo(true);
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          setShowVideo(false);
        }}
      />
      <mesh
        scale={0.5}
        position={[0.32, -0.17, 0.81]}
        rotation={[0.48, -1.1, 1.6]}
        onPointerEnter={() => {
          setShowVideo(true);
        }}
        onPointerLeave={() => {
          setShowVideo(false);
        }}
        visible={showSight}
      >
        <coneGeometry args={[1, 2, 4, 1, true]} />
        <meshStandardMaterial
          color="green"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      <VideoAnnotation src={videoSrc} show={showVideo} />
    </e.group>
  );
};

export default SecurityCamera;
