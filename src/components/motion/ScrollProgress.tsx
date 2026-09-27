"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** A thin accent bar across the top that fills as the page scrolls, spring-smoothed. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-[var(--accent)]"
      style={{ scaleX }}
    />
  );
}
