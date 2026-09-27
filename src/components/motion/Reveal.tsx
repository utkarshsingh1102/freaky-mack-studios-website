"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** The site's easing: a quick start that settles softly. */
export const EASE = [0.22, 1, 0.36, 1] as const;

const TAGS = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  footer: motion.footer,
  ul: motion.ul,
  li: motion.li,
  p: motion.p,
  span: motion.span,
} as const;
type Tag = keyof typeof TAGS;

type From = { y?: number; x?: number; scale?: number; rotate?: number };

const variantsFor = ({ y = 36, x = 0, scale = 1, rotate = 0 }: From, duration: number, delay: number): Variants => ({
  hidden: { opacity: 0, y, x, scale, rotate },
  show: { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, transition: { duration, delay, ease: EASE } },
});

type BaseProps = Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate" | "whileInView" | "variants"> & {
  children?: ReactNode;
  as?: Tag;
};

/**
 * Fades and lifts its content into place the first time it scrolls into view (or on mount).
 * It animates transform, so it must not carry its own tilt: wrap tilted cards instead.
 * `stagger` turns it into a container that plays its <RevealItem> children one after another.
 * Stays visible without JavaScript and under reduced motion (see [data-reveal] in globals.css).
 */
export function Reveal({
  as = "div",
  from = {},
  delay = 0,
  duration = 0.9,
  stagger,
  amount = 0.2,
  onMount = false,
  children,
  ...rest
}: BaseProps & { from?: From; delay?: number; duration?: number; stagger?: number; amount?: number; onMount?: boolean }) {
  const M = TAGS[as] as typeof motion.div;
  const variants: Variants = stagger
    ? { hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }
    : variantsFor(from, duration, delay);
  const trigger = onMount ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount } };
  return (
    <M data-reveal={stagger ? undefined : "move"} initial="hidden" variants={variants} {...trigger} {...rest}>
      {children}
    </M>
  );
}

/** A child of a staggered <Reveal>: plays when its container comes into view. */
export function RevealItem({
  as = "div",
  from = {},
  duration = 0.9,
  children,
  ...rest
}: BaseProps & { from?: From; duration?: number }) {
  const M = TAGS[as] as typeof motion.div;
  return (
    <M data-reveal="move" variants={variantsFor(from, duration, 0)} {...rest}>
      {children}
    </M>
  );
}
