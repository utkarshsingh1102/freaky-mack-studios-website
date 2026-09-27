"use client";

import { useSpring, useTransform, type MotionValue } from "framer-motion";
import { useSyncExternalStore } from "react";

const SPRING = { stiffness: 120, damping: 28, mass: 0.6 };
const QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * Whether scroll-linked motion may run. False on the server and during hydration (so the HTML,
 * and the page without JavaScript, shows the static design), then true unless the visitor asks
 * for reduced motion.
 */
export function useScrollMotionAllowed() {
  return useSyncExternalStore(subscribe, () => !window.matchMedia(QUERY).matches, () => false);
}

/**
 * Maps a scroll progress (0 → 1, from framer's useScroll) onto [from, to], smoothed with a spring,
 * so scroll-linked motion eases instead of tracking the wheel step by step.
 * `rest` is the value the element has in the static design; it stays there until motion is allowed.
 */
export function useSmoothScrollValue(progress: MotionValue<number>, [from, to]: [number, number], rest: number) {
  const allowed = useScrollMotionAllowed();
  const raw = useTransform(progress, [0, 1], allowed ? [from, to] : [rest, rest]);
  return useSpring(raw, SPRING);
}
