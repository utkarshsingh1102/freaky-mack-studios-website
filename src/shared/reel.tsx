"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { REEL } from "./config";

/**
 * Homepage loop: a muted, looping, inline autoplay <video> once REEL.loopSrc exists.
 * Until then it renders `children` (the board's [ 10–15 SEC LOOP ] placeholder).
 */
export function ReelLoop({ className, children }: { className?: string; children: ReactNode }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  if (!REEL.loopSrc) return <>{children}</>;
  return (
    <video
      className={className}
      src={REEL.loopSrc}
      poster={REEL.poster || undefined}
      muted
      loop
      playsInline
      autoPlay={!reduced}
      aria-hidden="true"
    />
  );
}

/** Full-reel embed (YouTube/Vimeo URL from REEL.fullEmbedUrl), or its placeholder until the link arrives. */
export function ReelEmbed({ className, placeholder }: { className?: string; placeholder: ReactNode }) {
  if (!REEL.fullEmbedUrl) return <>{placeholder}</>;
  return (
    <iframe
      className={className}
      src={REEL.fullEmbedUrl}
      title="Freaky Mack Studios showreel"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  );
}

/** "Watch full reel" modal state with Escape-to-close. */
export function useReelModal() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);
  return { open, show: () => setOpen(true), close };
}

/** Neutral black modal used by options whose board has no in-place reel. */
export function ReelModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Showreel"
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div className="relative aspect-video w-full max-w-[1200px] bg-[#0d0d0d]" onClick={(e) => e.stopPropagation()}>
        <ReelEmbed
          className="absolute inset-0 h-full w-full"
          placeholder={
            <div className="absolute inset-4 flex items-center justify-center border border-dashed border-white/20 text-center text-[12px] tracking-[0.22em] text-white/45 uppercase">
              [ FULL SHOWREEL — EMBED, SOUND ON ]
            </div>
          }
        />
      </div>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full border border-white/30 px-4 py-2 font-[system-ui,sans-serif] text-[13px] text-white"
      >
        Close ✕
      </button>
    </div>
  );
}
