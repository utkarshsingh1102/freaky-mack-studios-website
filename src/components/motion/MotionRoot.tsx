"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { LOGO_CURSOR } from "@/shared/config";
import { LogoCursor } from "./LogoCursor";

/**
 * Site-wide motion settings, in the root layout: visitors who ask for reduced motion get instant
 * transitions (reducedMotion="user"), and every page gets the logo cursor.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {LOGO_CURSOR && <LogoCursor />}
      {children}
    </MotionConfig>
  );
}
