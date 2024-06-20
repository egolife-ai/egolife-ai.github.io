import { Outlines } from "@react-three/drei";
import React from "react";

const ModelOutlines = (props) => {
  return <Outlines thickness={0.1} color="white" {...props} />;
};

export default ModelOutlines;
