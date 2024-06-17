import { Center } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import VideoAnnotation from "./VideoAnnotation";
import { useState } from "react";

const Person = ({
  id,
  videoSrc,
  model: Model,
  showSight = false,
  visible = true,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <e.group theatreKey={`Persons / PersonGroup-${id}`} visible={visible}>
      <Center>
        <Model
          onPointerEnter={(e) => {
            e.stopPropagation();
            setShowVideo(true);
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            setShowVideo(false);
          }}
        />
      </Center>
      <mesh
        scale={0.5}
        position={[0, 0.06, 0.69]}
        rotation={[-1.46, 0, 0]}
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
          color="blue"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      <VideoAnnotation src={videoSrc} show={showVideo} />
    </e.group>
  );
};

export default Person;
