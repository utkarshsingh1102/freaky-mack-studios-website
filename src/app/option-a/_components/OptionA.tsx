"use client";

import { useState, type CSSProperties } from "react";
import s from "../option-a.module.css";
import { AccentPicker } from "./AccentPicker";
import { ClientScatter } from "./ClientScatter";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { People } from "./People";
import { Podcast } from "./Podcast";
import { Reel } from "./Reel";
import { SentenceBuilder } from "./SentenceBuilder";
import { ServicesTicker } from "./ServicesTicker";
import { Testimonials } from "./Testimonials";
import { TheTurn } from "./TheTurn";
import { ACCENTS, GROUNDS } from "./theme";
import { WorkPreview } from "./WorkPreview";

/** Option A · Story. One accent CSS variable (--accent, default Cobalt #1F3BFF) drives every highlight. */
export function OptionA() {
  const [accentIndex, setAccentIndex] = useState(0);
  const [ground, setGround] = useState<string>(GROUNDS[0]);
  const [reelOpen, setReelOpen] = useState(false);
  const { accent, onAccent } = ACCENTS[accentIndex];
  const toggleReel = () => setReelOpen((o) => !o);

  const vars = { "--accent": accent, "--on-accent": onAccent, "--accent-text": accent, background: ground } as CSSProperties;

  return (
    <div className={`${s.root} min-h-screen overflow-x-clip transition-colors duration-300`} style={vars}>
      <div className="relative mx-auto flex max-w-[1440px] flex-col">
        <Nav />
        <Hero reelOpen={reelOpen} onToggleReel={toggleReel} />
        <Reel open={reelOpen} onToggle={toggleReel} />
        <WorkPreview />
        <ClientScatter />
        <Testimonials />
        <SentenceBuilder />
        <ServicesTicker />
        <TheTurn />
        <Podcast />
        <People />
        <Contact />
        <Footer />
      </div>
      <AccentPicker accent={accent} ground={ground} onAccent={setAccentIndex} onGround={setGround} />
    </div>
  );
}
