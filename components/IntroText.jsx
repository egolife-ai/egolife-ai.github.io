import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext, useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ControlsContext, SceneContext } from "@/app/page";
import { Mouse, Pointer } from "lucide-react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const textY = 100;

const IntroText = () => {
  const textContainer = useRef();

  const {
    setShowWalls,
    setHomeView,
    setShowSights,
    setShowControls,
    setShowToggleWalls,
    setShowPersonVideos,
    setShowLevel2Videos,
    setInteractiveSection,
    setShowAllVideos,
    setVideoTab,
  } = useContext(ControlsContext);

  const tlProps = useMemo(() => {
    return [
      {
        onEnter: () => {
          setShowWalls(false);
          setShowControls(true);
          // setShowToggleWalls(true)
        },
        onLeaveBack: () => {
          setShowWalls(true);
          setShowControls(false);
          // setShowToggleWalls(false)
        },
      },
      {
        onEnter: () => {
          setHomeView("level-1");
          setShowAllVideos(true);
          setVideoTab("egocentric");
          // setShowPersonVideos(true);
        },
        onLeaveBack: () => {
          setHomeView("all");
          setShowAllVideos(false);
          // setShowPersonVideos(false);
        },
      },
      {
        onEnter: () => {
          setHomeView("level-2");
          setVideoTab("level-2");
          // setShowPersonVideos(false);
          // setShowLevel2Videos(true);
        },
        onLeaveBack: () => {
          setHomeView("level-1");
          setVideoTab("egocentric");
          // setShowPersonVideos(true);
          // setShowLevel2Videos(false);
        },
      },
      {
        onEnter: () => {
          setHomeView("all");
          setShowAllVideos(false);
          // setShowLevel2Videos(false);
          // setInteractiveSection(true);
        },
        onLeaveBack: () => {
          setHomeView("level-2");
          setShowAllVideos(true);
          // setInteractiveSection(false);
        },
        onLeave: () => {
          // setShowControls(true);
        },
        onEnterBack: () => {
          // setShowControls(false);
        },
        end: "bottom top",
      },
    ];
  }, []);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(
        ".text-container",
        textContainer.current,
      );

      targets.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          ...tlProps[i],
        });
      });
    },
    { scope: textContainer },
  );

  return (
    <>
      {/* <div className="fixed top-[150px] w-full max-w-lg">
        <div className="mt-[25px] text-center text-2xl font-medium">
          <p className="mb-5 font-bold">Welcome to the EgoLife Project!</p>
          <p>
            An unprecedented 60h per video, interpersonal, multi-modal,
            multi-view, daily-life egocentric video dataset and benchmark.
            (scroll down for more info)
          </p>
        </div>
      </div> */}
      <div className="z-10 w-full max-w-xl">
        <div className="mt-[75px] rounded bg-yellow-50/80 px-5 py-5 text-center text-2xl font-medium">
          <p className="mb-5 font-bold">Welcome to the EgoLife Project!</p>
          <p>
            An unprecedented 60h per video, <strong>interpersonal</strong>,{" "}
            <strong>multi-modal</strong>, <strong>multi-view</strong>,{" "}
            <strong>daily-life egocentric</strong> video dataset and benchmark.
          </p>
          <div className="mt-5 flex animate-bounce flex-col items-center justify-center gap-2 text-stone-500">
            <Mouse className="" />
            <div className="text-xs uppercase">Scroll Down</div>
          </div>
        </div>
      </div>
      <div
        ref={textContainer}
        className="pointer-events-none relative z-10 mb-[50vh] mt-[100vh]"
      >
        <Text>
          {/* <TextHeader>Earth Day Event (April 15 – 22)</TextHeader> */}
          <TextHeader>Extremely Long, Daily Life</TextHeader>
          <p>
            The project invites 6 volunteers live together in the EgoHouse for 7
            days, from April 15 – 22, with a concrete mission of planning and
            hosting an Earth Day party. This goal drives them to organize,
            discuss, decorate, prepare, and survive the week.
          </p>
        </Text>
        <Text>
          {/* <TextHeader>6 Extremely Long Ego Videos</TextHeader> */}
          <TextHeader>Egocentric, Interpersonal</TextHeader>
          <p>
            6 volunteers each capture 60 hours of coherent egocentric video,
            showcasing extensively correlated daily-life content across
            interpersonal interactions and extended timelines.
          </p>
          <InteractionPrompt>
            Hover on each character to see demo samples
          </InteractionPrompt>
        </Text>
        <Text>
          {/* <TextHeader>15 Exo Cameras with Sync</TextHeader> */}
          <TextHeader>Multi-View with Synchronization</TextHeader>
          <p>
            Egocentric videos are synchronized with footage from 15 GoPro
            cameras strategically placed throughout the house, providing
            multi-view references.
          </p>
          <InteractionPrompt>
            Hover on each camera to see demo samples
          </InteractionPrompt>
        </Text>
        <Text>
          <TextHeader>The EgoLife Dataset</TextHeader>
          <p>
            The EgoLife dataset features extremely long-term temporal
            correlations and interpersonal interactions, with extensive
            annotations including transcriptions, Q&A pairs, and dense captions.
            We also provide an QA set to benchmark the extremely long ego video
            tasks. The dataset also support the training of our EgoLLaVA model.
          </p>
          {/* <InteractionPrompt>
            Now please scroll down and click to explore the EgoHouse to play
            with the EgoLife Project!
          </InteractionPrompt> */}
        </Text>
        <Text>
          <TextHeader>
            Now please scroll down and click to explore the EgoHouse to play
            with the EgoLife Project!
          </TextHeader>
        </Text>
      </div>
    </>
  );
};

function Text({ children }) {
  return (
    <div className="h-[100vh]">
      <motion.div
        // className="absolute left-0 top-0 rounded bg-yellow-50/80 px-5 py-5 text-xl opacity-0"
        className="text-container max-w-xl rounded bg-yellow-50/80 px-5 py-5 text-xl"
        // style={{
        //   filter: "blur(4px)",
        //   translateY: textY,
        // }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function TextHeader({ children }) {
  return <h3 className="mb-2 text-center font-bold">{children}</h3>;
}

function InteractionPrompt({ children }) {
  return (
    <div className="mx-auto mt-4 flex max-w-sm items-center justify-center gap-2 text-base text-stone-500">
      <Pointer className="size-6 flex-none animate-pulse" />
      {children}
    </div>
  );
}

export default IntroText;
