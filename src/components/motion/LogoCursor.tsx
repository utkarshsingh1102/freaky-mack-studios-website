"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FM_MARK_WHITE } from "@/shared/assets";

/** Things the mark reaches for (and grabs when pressed). */
const CLICKABLE = 'a[href],button,[role="button"],[role="radio"],label,select,summary,[data-cursor="grab"]';
/** Over text fields the mark steps aside so the normal text cursor shows. */
const TEXT =
  'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]),textarea,[contenteditable="true"]';

type State = "idle" | "reach" | "grab";

const POSE: Record<State, { scaleX: number; scaleY: number; rotate: number }> = {
  idle: { scaleX: 1, scaleY: 1, rotate: 0 },
  // Arms open, leaning in towards the thing under it.
  reach: { scaleX: 1.3, scaleY: 1.3, rotate: 12 },
  // Squashed shut: the blob clenching whatever it's holding.
  grab: { scaleX: 0.92, scaleY: 0.66, rotate: -18 },
};

/**
 * The blob mark as the mouse cursor. Mouse and trackpad only: touch screens and keyboard use are untouched,
 * and the system cursor stays until the mouse first moves. It trails the pointer a touch, reaches over
 * anything clickable, and clenches while the button is held (clicks, and dragging the floating mark).
 * `mix-blend-difference` keeps the white mark visible on dark, light and image backgrounds.
 */
export function LogoCursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [over, setOver] = useState(false);
  const [down, setDown] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 45, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 700, damping: 45, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const root = document.documentElement;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target instanceof Element ? e.target : null;
      setVisible(!t?.closest(TEXT));
      setOver(!!t?.closest(CLICKABLE));
      if (!root.classList.contains("logo-cursor")) {
        root.classList.add("logo-cursor");
        setActive(true);
      }
    };
    const press = (e: PointerEvent) => e.pointerType === "mouse" && setDown(true);
    const release = () => setDown(false);
    // Leaving the window, or moving into an embedded player (which has its own cursor).
    const leave = (e: PointerEvent) => {
      const to = e.relatedTarget;
      if (!to || (to instanceof Element && to.tagName === "IFRAME")) setVisible(false);
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    window.addEventListener("blur", release);
    document.addEventListener("pointerout", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("blur", release);
      document.removeEventListener("pointerout", leave);
      root.classList.remove("logo-cursor");
    };
  }, [x, y]);

  if (!active) return null;
  const state: State = down ? "grab" : over ? "reach" : "idle";
  return (
    <motion.div
      aria-hidden="true"
      data-logo-cursor={state}
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
      style={{ x: reduce ? x : sx, y: reduce ? y : sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      {/* Centred on the pointer (the mark is 764×507). */}
      <div className="-mt-[15px] -ml-[22px] h-[29px] w-[44px]">
        <motion.img
          src={FM_MARK_WHITE}
          alt=""
          draggable={false}
          className="block h-full w-full object-contain"
          animate={POSE[state]}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 520, damping: state === "grab" ? 14 : 20 }}
        />
      </div>
    </motion.div>
  );
}
