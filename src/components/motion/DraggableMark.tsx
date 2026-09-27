"use client";

import { motion } from "framer-motion";
import { FM_MARK_WHITE } from "@/shared/assets";

/**
 * The floating blob mark, which visitors can pick up and drag anywhere on the screen.
 * On release it springs back to where it sits in the layout. `className` positions and sizes it;
 * `imgClassName` carries the float animation and the theme's logo inversion.
 */
export function DraggableMark({ className = "", imgClassName = "" }: { className?: string; imgClassName?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      data-cursor="grab"
      drag
      dragSnapToOrigin
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 260, bounceDamping: 16 }}
      whileHover={{ scale: 1.06 }}
      whileDrag={{ scale: 1.15, zIndex: 70 }}
      className={`cursor-grab touch-none select-none active:cursor-grabbing ${className}`}
    >
      <img src={FM_MARK_WHITE} alt="" draggable={false} className={`pointer-events-none h-full w-full object-contain ${imgClassName}`} />
    </motion.div>
  );
}
