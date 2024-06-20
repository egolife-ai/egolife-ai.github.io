import { Center, useGLTF } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import VideoAnnotation from "./VideoAnnotation";
import { SecurityCameraModel } from "./SecurityCameraModel";
import { useState } from "react";
import Sight from "./Sight";
import ModelLabel from "./ModelLabel";

const SecurityCamera = ({
  groupId,
  id,
  label,
  videoSrc,
  showSight = false,
  visible = true,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    // TODO: Outline
    <e.group
      theatreKey={`${groupId} / SecurityCameraGroup-${id}`}
      visible={visible}
    >
      <SecurityCameraModel
        onPointerEnter={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      />
      <Sight
        scale={0.5}
        position={[0.32, -0.17, 0.81]}
        rotation={[0.48, -1.1, 1.6]}
        show={showSight || hovered}
      />
      <ModelLabel position={[0, 0.1, 0]}>{label}</ModelLabel>
      <VideoAnnotation src={videoSrc} show={hovered} />
    </e.group>
  );
};

export default SecurityCamera;
