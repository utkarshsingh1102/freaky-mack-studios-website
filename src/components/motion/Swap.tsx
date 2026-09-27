"use client";

import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./Reveal";

/**
 * A word inside a sentence: animates in when it changes (not on first render).
 * By default it slides up (an inline-block, for single pills). `inline` keeps it an inline run that
 * can still wrap across lines, and fades instead (transforms don't apply to inline boxes).
 * `id` overrides what counts as a change, e.g. so typed text updates in place instead of animating per keystroke.
 */
export function Swap({ text, id, inline = false }: { text: string; id?: string; inline?: boolean }) {
  const key = id ?? text;
  return (
    <AnimatePresence mode="wait" initial={false}>
      {inline ? (
        <motion.span
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.35, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
          {text}
        </motion.span>
      ) : (
        <motion.span
          key={key}
          className="inline-block"
          initial={{ y: "45%", opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.35, ease: EASE } }}
          exit={{ y: "-45%", opacity: 0, transition: { duration: 0.15 } }}
        >
          {text}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
