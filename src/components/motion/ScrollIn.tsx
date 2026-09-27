"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useSmoothScrollValue } from "./useScrollMotion";

/**
 * Wraps a piece of media so it settles into place as it scrolls into view: it starts a little
 * smaller, lower and more tilted, and reaches its resting pose once its top is `endAt` down the
 * window. The wrapped element keeps its own tilt and hover; this only adds to them.
 */
export function ScrollIn({
  children,
  className = "",
  rotate = 0,
  scale = 0.9,
  y = 60,
  endAt = "center center",
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  scale?: number;
  y?: number;
  endAt?: "center center" | "start 35%" | "start center";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", endAt] });
  const r = useSmoothScrollValue(scrollYProgress, [rotate, 0], 0);
  const s = useSmoothScrollValue(scrollYProgress, [scale, 1], 1);
  const t = useSmoothScrollValue(scrollYProgress, [y, 0], 0);
  return (
    <motion.div ref={ref} style={{ rotate: r, scale: s, y: t }} className={className}>
      {children}
    </motion.div>
  );
}
