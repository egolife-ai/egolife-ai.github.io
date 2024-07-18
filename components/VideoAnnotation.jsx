import { Html } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Tooltip, TooltipContent } from "./Tooltip";

const VideoAnnotation = ({ src, show }) => {
  const videoRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (!videoRef.current) return;

  //   if (show) {
  //     // videoRef.current.play();
  //     // setIsOpen(true);
  //   } else {
  //     videoRef.current.pause();
  //     // setIsOpen(false);
  //   }
  // }, [show]);

  return (
    // FIXME: Should hide the entire Html; performance reasons
    <>
      {show && (
        <Html
          style={{
            pointerEvents: "none",
          }}
        >
          {/* <motion.div
        className="bg-black px-2 py-2"
        style={{
          transform: "translate3d(calc(0% + 40px), 0, 0)",
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: show ? 1 : 0,
        }}
      >
        <div className="absolute left-[-40px] top-[25px] h-[1px] w-[40px] bg-black" />
        <div className="grid h-[200px] w-[300px] place-items-center">
          <video ref={videoRef} muted>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </motion.div> */}

          <AnimatePresence>
            {show && (
              <motion.div
                className="h-[150px] w-[250px] origin-top-left overflow-hidden rounded-lg border-2 shadow-xl"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  // opacity: show ? 1 : 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                }}
              >
                <video
                  ref={videoRef}
                  muted
                  autoPlay
                  className="h-full w-full object-cover"
                >
                  <source src={src} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </AnimatePresence>

          {/* <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipContent>
          <div className="grid h-[200px] w-[300px] place-items-center">
            <video ref={videoRef} muted>
              <source src={src} type="video/mp4" />
            </video>
          </div>
        </TooltipContent>
      </Tooltip> */}
        </Html>
      )}
    </>
  );
};

export default VideoAnnotation;
