import { Billboard, Center, Text } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import VideoAnnotation from "./VideoAnnotation";
import { useContext, useEffect, useState } from "react";
import Sight from "./Sight";
import ModelLabel from "./ModelLabel";
import { ControlsContext } from "@/app/page";

const Person = ({
  id,
  label,
  videoSrc,
  model: Model,
  position,
  rotation,
  showSight = false,
  visible = true,
  showVideo = false,
}) => {
  const [hovered, setHovered] = useState(false);

  const { setShowPersonVideos, homeView, interactiveSection } =
    useContext(ControlsContext);

  useEffect(() => {
    if (!interactiveSection && homeView === "level-1") {
      setShowPersonVideos(!hovered);
    }
  }, [hovered, homeView, interactiveSection]);

  return (
    // <e.group
    <group
      theatreKey={`Persons / PersonGroup-${id}`}
      visible={visible}
      position={position}
      rotation={rotation}
    >
      <Center>
        <Model
          onPointerEnter={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            setHovered(false);
          }}
        />
      </Center>
      <Sight
        scale={0.5}
        position={[0, 0.06, 0.69]}
        rotation={[-1.46, 0, 0]}
        show={showSight || hovered}
      />
      <ModelLabel>{label}</ModelLabel>
      <VideoAnnotation src={videoSrc} show={showVideo || hovered} />
      {/* </e.group> */}
    </group>
  );
};

export default Person;
