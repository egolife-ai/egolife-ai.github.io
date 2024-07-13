"use client";

import Scene from "@/components/Scene";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import NavItem from "@/components/NavItem";
import { Pointer, X } from "lucide-react";
import Content from "@/components/Content";
import { createContext, useEffect, useState } from "react";
import Controls from "@/components/Controls";
import IntroText from "@/components/IntroText";
import { cn } from "@/lib/utils";
import VideosGrid from "@/components/VideosGrid";

// TODO: Aesthetic like Sims city
// TODO: Controls can look like a video game

export const ControlsContext = createContext();
// export const SceneContext = createContext();

export default function Home() {
  const [homeView, setHomeView] = useState("all");
  const [showControls, setShowControls] = useState(false);
  const [allowControl, setAllowControl] = useState(false);
  const [showSights, setShowSights] = useState(false);
  const [showWalls, setShowWalls] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  // const [showDemo, setShowDemo] = useState(false);
  const [showPersonVideos, setShowPersonVideos] = useState(false);
  const [showLevel2Videos, setShowLevel2Videos] = useState(false);
  const [showToggleWalls, setShowToggleWalls] = useState(false);
  const [showToggleSights, setShowToggleSights] = useState(false);
  const [interactiveSection, setInteractiveSection] = useState(false);
  const [videoDate, setVideoDate] = useState();
  const [showAllVideos, setShowAllVideos] = useState(false);

  // const [wallOpacity, setWallOpacity] = useState(1);
  // const [roofOpacity, setRoofOpacity] = useState(1);

  console.log(showLevel2Videos);

  useEffect(() => {
    if (allowControl) {
      setAutoRotate(false);
    } else {
      setAutoRotate(true);
    }
  }, [allowControl]);

  return (
    <ControlsContext.Provider
      value={{
        homeView,
        setHomeView,
        setAllowControl,
        allowControl,
        showSights,
        setShowSights,
        showWalls,
        setShowWalls,
        setShowControls,
        autoRotate,
        setShowToggleWalls,
        showToggleWalls,
        setShowToggleSights,
        showToggleSights,
        // setShowDemo,
        // showDemo,
        showPersonVideos,
        setShowPersonVideos,
        showLevel2Videos,
        setShowLevel2Videos,
        setInteractiveSection,
        interactiveSection,
        videoDate,
        setVideoDate,
        showAllVideos,
        setShowAllVideos,
      }}
    >
      {/* <SceneContext.Provider
        value={{
          wallOpacity,
          setWallOpacity,
          roofOpacity,
          setRoofOpacity,
        }}
      > */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Navbar */}
        <motion.div
          className="fixed top-0 z-20 flex w-full flex-col items-center justify-center"
          // initial={{ opacity: 0, filter: "blur(4px)" }}
          // animate={{ opacity: 1, filter: "blur(0)" }}
          // transition={{ duration: 2, type: "spring" }}
        >
          <nav className="grid w-full place-items-center border-b border-white backdrop-blur">
            <ul className="flex gap-8">
              <NavItem href="">Paper</NavItem>
              <NavItem href="">Blog</NavItem>
              <li>
                <h1>
                  <Image
                    src="/egolife.png"
                    width={130}
                    height={130}
                    alt="EgoLife logo"
                  />
                </h1>
              </li>
              <NavItem href="">Data</NavItem>
              <NavItem href="">Code</NavItem>
            </ul>
          </nav>

          {/* Headline */}
          {/* <div className="max-w-lg text-center text-2xl font-medium mt-5">
            A diverse, large-scale multi-modal, multi-view, continuous
            egocentric video dataset and benchmark collected over a month,
            capturing X hours of daily-life activity video.
          </div> */}
        </motion.div>

        {/* Control Panel */}
        <AnimatePresence mode="popLayout">
          {showControls && (
            <motion.div
              className="fixed left-10 top-40 z-20"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
            >
              <Controls />
              {showAllVideos && <VideosGrid />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click to allow control */}
        {/* <AnimatePresence mode="popLayout">
          {showControls && (
            <motion.button
              className={cn(
                "fixed left-1/2 top-24 z-20 -translate-x-3 translate-y-full animate-pulse rounded-full border bg-yellow-50 p-2 shadow",
                !allowControl ? "animate-pulse" : "",
              )}
              onClick={() => {
                setAllowControl(!allowControl);
              }}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
            >
              {allowControl ? (
                <X className="size-10" />
              ) : (
                <div className="flex items-center gap-2 px-2 font-bold">
                  <Pointer className="size-10" />
                  <div>Allow zoom and panning</div>
                </div>
              )}
            </motion.button>
          )}
        </AnimatePresence> */}

        {/* Three.js Scene */}
        <Scene />

        {/* Content */}
        <IntroText />
        {/* <Content /> */}
      </main>
      {/* </SceneContext.Provider> */}
    </ControlsContext.Provider>
  );
}
