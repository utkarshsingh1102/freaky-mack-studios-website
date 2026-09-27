"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/components/motion/Reveal";
import { NAV_ITEMS, activeFor } from "./nav-items";

const MotionLink = motion.create(Link);

/** The panel fades down into place and its links follow one after another. */
const PANEL = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE, staggerChildren: 0.05, delayChildren: 0.08 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};
const ITEM = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } } };

/** Below lg the nav collapses into this menu button + full-screen panel (CLAUDE.md → Responsive). */
export function MobileMenu({ serifClass }: { serifClass: string }) {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname; // navigating to another page closes it
  const button = useRef<HTMLButtonElement>(null);
  const active = activeFor(pathname);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="fm-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpenOn(open ? null : pathname)}
        className="relative z-[60] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[var(--ink)] bg-[var(--ground)] text-[var(--ink)] lg:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          {open ? <path d="M3 3l10 10M13 3L3 13" /> : <path d="M2 5h12M2 11h12" />}
        </svg>
      </button>
      <AnimatePresence>
      {open && (
        <motion.div
          key="menu"
          variants={PANEL}
          initial="hidden"
          animate="show"
          exit="exit"
          id="fm-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-[var(--ground)] px-5 pt-[96px] pb-10 text-[var(--ink)] md:px-10 lg:hidden"
        >
          <nav aria-label="Main" className="flex flex-col border-t border-[var(--ink)]">
            {NAV_ITEMS.map((it) => (
              <MotionLink
                variants={ITEM}
                key={it.key}
                href={it.href}
                onClick={() => setOpenOn(null)}
                aria-current={active === it.key ? "page" : undefined}
                className="flex items-baseline gap-[14px] border-b border-[var(--line)] py-[18px] text-[34px] font-extrabold tracking-[-0.03em]"
              >
                <span className={`${serifClass} text-[20px] font-normal tracking-normal text-[var(--muted-2)]`}>{it.no}</span>
                {it.label}
                {active === it.key && <span className="ml-auto h-[10px] w-[10px] self-center rounded-full bg-[var(--accent)]" />}
              </MotionLink>
            ))}
          </nav>
          <MotionLink
            variants={ITEM}
            href="/start-a-project"
            onClick={() => setOpenOn(null)}
            className="mt-[32px] flex h-[56px] items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] text-[16px] font-semibold text-[var(--on-accent)]"
          >
            Start a project
          </MotionLink>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
