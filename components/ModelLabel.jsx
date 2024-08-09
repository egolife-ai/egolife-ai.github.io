import { Billboard, Text } from "@react-three/drei";
import React from "react";

const ModelLabel = ({ children, ...props }) => {
  return (
    <Billboard>
      <Text
        anchorY="bottom"
        fontSize={0.2}
        position={[0, 0.4, 0]}
        // position={[0, 0.6, 0]}
        outlineColor="white"
        outlineWidth={0.02}
        // depthOffset={-10}
        // renderOrder={-5}
        {...props}
      >
        {children}
        <meshBasicMaterial color="black" />
      </Text>
    </Billboard>
  );
};

export default ModelLabel;
