"use client";

import { useEffect, useState, type ReactNode } from "react";
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
