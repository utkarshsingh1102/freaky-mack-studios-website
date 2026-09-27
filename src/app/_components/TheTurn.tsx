"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { useSmoothScrollValue } from "@/components/motion/useScrollMotion";
import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../home.module.css";

/** Chapter 03: dark interlude. */
export function TheTurn() {
  const ref = useRef<HTMLElement>(null);
  // The slab grows to full size as it scrolls in; the mark inside turns a little (spring-smoothed).
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 35%"] });
  const scale = useSmoothScrollValue(scrollYProgress, [0.88, 1], 1);
  const markRotate = useSmoothScrollValue(scrollYProgress, [12, 0], 0);
  return (
    <motion.section ref={ref} style={{ scale }} className="relative mx-4 mb-[96px] flex shrink-0 flex-col gap-[28px] overflow-hidden rounded-[28px] bg-[var(--inv-bg)] px-[24px] py-[64px] text-[var(--inv-ink)] md:mx-10 md:px-[56px] lg:mx-[96px] lg:mb-[180px] lg:gap-[40px] lg:rounded-[40px] lg:px-[96px] lg:py-[120px]">
      <motion.div style={{ rotate: markRotate }} className="absolute right-[-60px] bottom-[-40px] h-[200px] w-[280px] lg:h-[396px] lg:w-[560px]">
        <img
          src={FM_MARK_WHITE}
          alt=""
          className={`${s.logoOnInverse} h-full w-full object-contain opacity-[0.12] [transform:rotate(-12deg)]`}
        />
      </motion.div>
      <Reveal stagger={0.12} delay={0.15} amount={0.3} className="relative flex flex-col gap-[28px] lg:gap-[40px]">
      <RevealItem className={`${s.it} text-[20px] text-[var(--inv-muted)] lg:text-[26px]`}>
        Chapter 03 — Then we got greedy for our own stories
      </RevealItem>
      <RevealItem as="p" className="m-0 max-w-[900px] text-[clamp(32px,3.889vw,56px)] leading-[1.08] font-extrabold tracking-[-0.03em] text-balance">
        Advertising taught us precision. Cinema gave us the appetite.
      </RevealItem>
      <RevealItem as="p" className="m-0 max-w-[640px] text-[17px] leading-[1.6] text-[var(--inv-soft)] lg:text-[20px]">
        Freaky Mack Studios develops commercial and fashion films, music videos, documentaries, digital series and
        original narratives — a slate of our own work alongside films for brands and cultural platforms. A home for
        filmmakers, creators and ideas that deserve to become films.
      </RevealItem>
      <RevealItem className="flex self-start">
      <Link
        href="/studio"
        className={`${s.pill} flex h-[52px] items-center rounded-full bg-[var(--accent)] px-[26px] text-[14px] font-semibold text-[var(--on-accent)]`}
      >
        Read the studio story
      </Link>
      </RevealItem>
      </Reveal>
    </motion.section>
  );
}
