import { useGLTF } from "@react-three/drei";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { REVISION } from "three";

const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;

export default function useGltfKtx2(url, gl) {
  return useGLTF(url, false, false, (loader) => {
    const ktx2Loader = new KTX2Loader().setTranscoderPath(
      `${THREE_PATH}/examples/jsm/libs/basis/`
    );
    loader
      // .setCrossOrigin("anonymous")
      .setKTX2Loader(ktx2Loader.detectSupport(gl));
    // .setMeshoptDecoder(MeshoptDecoder);
  });
}
