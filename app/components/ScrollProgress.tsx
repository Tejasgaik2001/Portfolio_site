"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed right-0 top-0 bottom-0 w-[1px] bg-foreground/10"
        style={{
          transformOrigin: "0% 0%",
        }}
      />
      <motion.div
        className="fixed right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/80 to-primary"
        style={{
          scaleY,
          transformOrigin: "0% 0%",
        }}
      />
      <motion.div
        className="fixed right-[1px] top-0 bottom-0 w-[1px] bg-primary/20 blur-[2px]"
        style={{
          scaleY,
          transformOrigin: "0% 0%",
        }}
      />
    </>
  );
}