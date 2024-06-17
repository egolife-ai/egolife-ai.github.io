"use client";

import Scene from "@/components/Scene";
import Image from "next/image";
import { motion } from "framer-motion";
import NavItem from "@/components/NavItem";
import { Pointer, X } from "lucide-react";
import Content from "@/components/Content";
import { createContext, useState } from "react";
import Controls from "@/components/Controls";

export const isProd = process.env.NODE_ENV === "production";

// TODO: Aesthetic like Sims city
// TODO: Controls can look like a video game

export const ControlsContext = createContext();

export default function Home() {
  const [homeView, setHomeView] = useState("all");
  const [allowControl, setAllowControl] = useState(false);
  const [showSights, setShowSights] = useState(false);

  return (
    <ControlsContext.Provider
      value={{ homeView, setHomeView, allowControl, showSights, setShowSights }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Navbar */}
        <div className="fixed top-0 z-20 flex w-full justify-center">
          <nav className="grid w-full place-items-center backdrop-blur">
            <ul className="flex gap-8">
              <NavItem>Dataset</NavItem>
              <NavItem>Paper</NavItem>
              <li>
                <motion.h1
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0)" }}
                  transition={{ duration: 2, type: "spring" }}
                >
                  <Image
                    src="/egolife.png"
                    width={130}
                    height={130}
                    alt="EgoLife logo"
                  />
                </motion.h1>
              </li>
              <NavItem>Blog</NavItem>
              <NavItem>Team</NavItem>
            </ul>
          </nav>
        </div>

        {/* Control Panel */}
        <div className="fixed left-20 top-40 z-10">
          <Controls />
        </div>

        {/* Click to allow control */}
        <button
          className="fixed left-1/2 top-20 z-10 -translate-x-3 translate-y-full rounded-full border bg-yellow-50 p-2 shadow"
          onClick={() => {
            setAllowControl(!allowControl);
          }}
        >
          {allowControl ? (
            <X className="size-10" />
          ) : (
            <Pointer className="size-10" />
          )}
        </button>

        {/* Three.js Scene */}
        <Scene />

        {/* Content */}
        <Content />
      </main>
    </ControlsContext.Provider>
  );
}
