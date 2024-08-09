import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext, useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ControlsContext, SceneContext } from "@/app/page";
import { Mouse, Pointer } from "lucide-react";
import { cn } from "@/lib/utils";

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
    setInteractiveSection,
    setShowAllVideos,
    setVideoTab,
    setShowLevel2Videos,
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
          setShowAllVideos(false);
          // setShowPersonVideos(false);
          setShowLevel2Videos(true);
        },
        onLeaveBack: () => {
          setHomeView("level-1");
          setVideoTab("egocentric");
          setShowAllVideos(true);
          // setShowPersonVideos(true);
          setShowLevel2Videos(false);
        },
      },
      {
        onEnter: () => {
          setHomeView("all");
          setShowAllVideos(false);
          setShowLevel2Videos(false);
          // setInteractiveSection(true);
        },
        onLeaveBack: () => {
          setHomeView("level-2");
          setShowAllVideos(false);
          setShowLevel2Videos(true);
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
          <p className="mb-5">Welcome to the EgoLife Project!</p>
          <p className="font-bold">
            Towards <span className="text-title-purple">Extremely Long</span>,{" "}
            <span className="text-title-yellow">Egocentric</span>,{" "}
            <span className="text-title-green">Interpersonal</span>,{" "}
            <span className="text-title-pink">Multi-view</span>,{" "}
            <span className="text-title-blue">Multi-modal</span>,{" "}
            <span className="text-title-brown">Daily Life</span>{" "}
            <span>AI Assistant</span>
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
          <TextHeader>
            <span className="text-title-purple">Extremely Long</span>,{" "}
            <span className="text-title-brown">Daily Life</span>
          </TextHeader>
          <p className="text-justify">
            EgoLife captures a week-long shared living experience of six
            volunteers planning a party. With 60 hours of footage per
            participant, this dataset enables analysis of long-term event
            connections spanning hours and days, advancing AI research in
            long-context understanding.
          </p>
        </Text>
        <Text>
          <TextHeader>
            <span className="text-title-yellow">Egocentric</span> &{" "}
            <span className="text-title-green">Interpersonal</span>
          </TextHeader>
          <p className="text-justify">
            The project documents six volunteers engaging in daily chores,
            collaborative activities, conversations, and social interactions.
            Their synchronized egocentric videos offer unique insights into
            individual perspectives and group dynamics within a shared living
            environment.
          </p>
          <InteractionPrompt>
            Hover on each character to see demo samples
          </InteractionPrompt>
        </Text>
        <Text>
          <TextHeader>
            <span className="text-title-blue">Multi-modal</span> &{" "}
            <span className="text-title-pink">Multi-view</span>
          </TextHeader>
          <p className="text-justify">
            Participants wear first-person view glasses recording video, gaze,
            and IMU data, synchronized with 15 strategically placed GoPro
            cameras. This multi-view, multi-modal system provides holistic
            environmental context. Additionally, companying with multi-view
            cameras, 3D scans of the house and participants support potential 3D
            applications within the EgoLife project.
          </p>
          <InteractionPrompt>
            Hover on each camera to see demo samples
          </InteractionPrompt>
        </Text>
        <Text>
          <TextHeader>
            <span>Extensive Annotation</span>
          </TextHeader>
          <p className="text-justify">
            The dataset includes extensive annotations: transcriptions, QA
            pairs, and dense captions. We provide a QA set for benchmarking
            long-term egocentric video tasks, focusing on questions requiring
            information spanning hours and days. These rich annotations support
            various analyses and are crucial for training our state-of- the-art
            EgoLLaVA and EgoGPT models.
          </p>
          {/* <InteractionPrompt>
            Now please scroll down and click to explore the EgoHouse to play
            with the EgoLife Project!
          </InteractionPrompt> */}
        </Text>
        <Text>
          <TextHeader className="text-xl">
            {/* Now please scroll down and click to explore the EgoHouse to play */}
            Now please scroll down and click on the <span className="text-teal-600">jumping button</span> to explore the EgoHouse to play
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

function TextHeader({ className, children }) {
  return (
    <h3 className={cn("mb-2 text-center text-3xl font-bold", className)}>
      {children}
    </h3>
  );
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
