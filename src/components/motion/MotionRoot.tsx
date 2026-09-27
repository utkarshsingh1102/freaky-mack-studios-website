"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Site-wide motion settings, in the root layout: visitors who ask for reduced motion get instant
 * transitions (reducedMotion="user").
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
