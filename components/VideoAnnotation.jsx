import { Html } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const VideoAnnotation = ({ src, show }) => {
  const videoRef = useRef();

  useEffect(() => {
    if (!videoRef.current) return

    if (show) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [show]);

  return (
    <Html
      style={{
        pointerEvents: "none",
      }}
    >
      {/* <AnimatePresence> */}
      {/* {show && ( */}
      <motion.div
        className="px-2 py-2 bg-black"
        style={{
          transform: "translate3d(calc(0% + 40px), 0, 0)",
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: show ? 1 : 0,
        }}
        // exit={{
        //   opacity: 0,
        // }}
      >
        <div className="absolute top-[25px] left-[-40px] h-[1px] w-[40px] bg-black" />
        {/* hello world */}
        <div className="w-[300px] h-[200px] grid place-items-center">
          <video ref={videoRef} muted>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </motion.div>
      {/* )} */}
      {/* </AnimatePresence> */}
    </Html>
  );
};

export default VideoAnnotation;
