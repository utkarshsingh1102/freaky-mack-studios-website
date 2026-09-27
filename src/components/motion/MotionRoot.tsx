"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { ScrollProgress } from "./ScrollProgress";

/**
 * Site-wide motion settings, in the root layout: visitors who ask for reduced motion get instant
 * transitions (reducedMotion="user"), and every page gets the accent scroll-progress bar.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      {children}
    </MotionConfig>
  );
}
