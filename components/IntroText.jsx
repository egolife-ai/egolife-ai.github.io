import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext, useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ControlsContext, SceneContext } from "@/app/page";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const textY = 100;

const IntroText = () => {
  const textContainer = useRef();
  const scrollContainer = useRef();

  const { setShowWalls, setHomeView, setShowSights, setShowControls } =
    useContext(ControlsContext);

  const tlProps = useMemo(() => {
    return [
      {
        onComplete: () => {
          setShowWalls(false);
        },
        onReverseComplete: () => {
          setShowWalls(true);
        },
      },
      {
        onComplete: () => {
          setHomeView("level-1");
        },
        onReverseComplete: () => {
          setHomeView("all");
        },
      },
      {
        onComplete: () => {
          setHomeView("level-2");
        },
        onReverseComplete: () => {
          setHomeView("level-1");
        },
      },
      {
        onComplete: () => {
          setHomeView("all");
        },
        onReverseComplete: () => {
          setHomeView("level-2");
        },
      },
      {
        onStart: () => {
          setShowControls(true);
        },
        onReverseComplete: () => {
          setShowControls(false);
        },
      },
    ];
  }, []);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray("div", textContainer.current);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer.current,
          start: "top top",
          endTrigger: scrollContainer.current,
          end: "bottom top",
          scrub: 1,
          // markers: true,
        },
      });

      targets.forEach((el, i) => {
        if (i !== 0) {
          tl.to(el, {
            opacity: 1,
            y: 0,
            filter: "blur(0)",
          });
        }

        tl.to(el, {
          opacity: 0,
          y: -textY,
          filter: "blur(4px)",
          delay: 1,
          ...tlProps[i],
        });
      });
    },
    { scope: textContainer },
  );

  return (
    <>
      <div ref={scrollContainer} id="intro" className="h-[500vh] w-full"></div>
      <div ref={textContainer} className="fixed top-[150px] w-full max-w-lg">
        <div className="mt-[50px] text-center text-2xl font-medium">
          A diverse, large-scale multi-modal, multi-view, continuous egocentric
          video dataset and benchmark collected over a month, capturing X hours
          of daily-life activity video.
        </div>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, odio illo magnam cumque facilis voluptatibus sed
          mollitia laudantium eaque ipsa tempore laboriosam optio dolorum
          adipisci non, minus nobis eum earum.
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, odio illo magnam cumque facilis voluptatibus sed
          mollitia laudantium eaque ipsa tempore laboriosam optio dolorum
          adipisci non, minus nobis eum earum.
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, odio illo magnam cumque facilis voluptatibus sed
          mollitia laudantium eaque ipsa tempore laboriosam optio dolorum
          adipisci non, minus nobis eum earum.
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, odio illo magnam cumque facilis voluptatibus sed
          mollitia laudantium eaque ipsa tempore laboriosam optio dolorum
          adipisci non, minus nobis eum earum.
        </Text>
      </div>
    </>
  );
};

function Text({ children }) {
  return (
    <motion.div
      className="absolute left-0 top-0 rounded bg-yellow-50/80 px-5 py-5 text-xl opacity-0"
      style={{
        filter: "blur(4px)",
        translateY: textY,
      }}
    >
      {children}
    </motion.div>
  );
}

export default IntroText;
