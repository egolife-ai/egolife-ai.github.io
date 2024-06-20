import { Edges } from "@react-three/drei";
import {
  useSpring,
  animate,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Sight = ({ show, ...props }) => {
  const ref = useRef();
  const t = useSpring(0, { bounce: 0.3 });

  const scale = props.scale ? props.scale : 1;

  useEffect(() => {
    if (show) {
      t.set(scale);
    } else {
      t.set(0);
    }
  }, [show, scale, t]);

  useMotionValueEvent(t, "change", (latest) => {
    if (latest <= 0) {
      ref.current.visible = false;
    } else {
      ref.current.visible = true;
    }

    ref.current.scale.set(latest, latest, latest);
  });

  return (
    <mesh ref={ref} {...props} scale={0} visible={false}>
      <coneGeometry args={[1, 2, 4, 1, true]} />
      <meshStandardMaterial
        color="green"
        transparent
        opacity={0.2}
        side={THREE.DoubleSide}
      />
      <Edges linewidth={2} scale={1} color="white" />
    </mesh>
  );
};

export default Sight;
