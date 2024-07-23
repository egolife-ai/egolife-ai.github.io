import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    filter: "blur(0px)",
  },
  hidden: {
    opacity: 0,
    filter: "blur(4px)",
  },
};

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  console.log(progress)

  return (
    <motion.div
      variants={variants}
      initial="visible"
      animate={progress === 100 ? "hidden" : "visible"}
      transition={{
        duration: 1,
      }}
      className="grid place-items-center absolute inset-0"
      style={{
        backgroundColor: "#b8c6db",
        backgroundImage: "linear-gradient(0deg, #b8c6db 0%, #f5f7fa 74%)",
      }}
    >
      <div className="loading-screen__container w-44 flex flex-col gap-2">
        <div className="text-center animate-bounce">loading...</div>
        <div
          className="w-full h-4 relative overflow-hidden rounded"
          style={{
            backgroundColor: "rgb(102 106 113 / 42%)",
          }}
        >
          <div
            className="h-full transition-all"
            style={{ width: `${progress}%`, backgroundColor: "#1a202c" }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
