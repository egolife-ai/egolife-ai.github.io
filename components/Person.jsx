import { Billboard, Center, Text } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import VideoAnnotation from "./VideoAnnotation";
import { useState } from "react";
import Sight from "./Sight";
import ModelLabel from "./ModelLabel";

const Person = ({
  id,
  label,
  videoSrc,
  model: Model,
  showSight = false,
  visible = true,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <e.group theatreKey={`Persons / PersonGroup-${id}`} visible={visible}>
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
      <VideoAnnotation src={videoSrc} show={hovered} />
    </e.group>
  );
};

export default Person;
