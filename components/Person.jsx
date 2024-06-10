import { Center } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import Duck from "./Duck";
import VideoAnnotation from "./VideoAnnotation";
import { useState } from "react";

const Person = ({ id, videoSrc }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <e.group theatreKey={`PersonGroup-${id}`}>
      <Center>
        <Duck
          onPointerEnter={() => {
            setShowVideo(true);
          }}
          onPointerLeave={() => {
            setShowVideo(false);
          }}
        />
      </Center>
      <e.mesh
        scale={0.5}
        theatreKey={`PersonSight-${id}`}
        position={[0, 0.06, 0.69]}
        rotation={[-1.46, 0, 0]}
        onPointerEnter={() => {
          setShowVideo(true);
        }}
        onPointerLeave={() => {
          setShowVideo(false);
        }}
      >
        <coneGeometry args={[1, 2, 4, 1, true]} />
        <meshStandardMaterial
          color="blue"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </e.mesh>
      <VideoAnnotation src={videoSrc} show={showVideo} />
    </e.group>
  );
};

export default Person;
