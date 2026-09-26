"use client";

import { ReelModal, useReelModal } from "@/shared/reel";
import s from "../option-c.module.css";
import { About } from "./About";
import { ClientStories } from "./ClientStories";
import { CommercialBand } from "./CommercialBand";
import { Crew } from "./Crew";
import { CtaBand } from "./CtaBand";
import { FeaturedWork } from "./FeaturedWork";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Philosophy } from "./Philosophy";
import { PodcastBand } from "./PodcastBand";
import { ScopeAccordion } from "./ScopeAccordion";
import { Statement } from "./Statement";
import { Timeline } from "./Timeline";

/** Option C · Cinematic. Dark and filmic; follows references/reference-1-cinematic.jpg. */
export function OptionC() {
  const reel = useReelModal();
  return (
    <div className={`${s.root} min-h-screen overflow-x-clip`}>
      <div className="relative mx-auto flex max-w-[1440px] flex-col">
        <Hero />
        <About />
        <CommercialBand onPlay={reel.show} />
        <Statement />
        <FeaturedWork />
        <ScopeAccordion />
        <PodcastBand />
        <ClientStories />
        <Philosophy />
        <Timeline />
        <Crew />
        <CtaBand />
        <Footer />
      </div>
      <ReelModal open={reel.open} onClose={reel.close} />
    </div>
  );
}
