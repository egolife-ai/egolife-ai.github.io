import { useMotionValueEvent, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function useAnimateModelOpacity(opacity, scene) {
  const opacitySpring = useSpring(1);

  useEffect(() => {
    opacitySpring.set(opacity);
  }, [opacity]);

  useMotionValueEvent(opacitySpring, "change", (value) => {
    scene.traverse((n) => {
      if (n.isMesh) {
        n.material.transparent = true;
        n.material.opacity = value;
      }
    });
  });
}
