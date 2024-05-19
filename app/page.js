"use client";

import Scene from "@/components/Scene";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed top-0 flex z-10">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Image
            src="/egolife.png"
            width={200}
            height={200}
            alt="EgoLife logo"
          />
        </motion.h1>
      </div>

      <Scene />
    </main>
  );
}
