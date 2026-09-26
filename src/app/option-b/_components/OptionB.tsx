"use client";

import { ReelModal, useReelModal } from "@/shared/reel";
import s from "../option-b.module.css";
import { ClientTicker } from "./ClientTicker";
import { ContactSlab } from "./ContactSlab";
import { Filmstrip } from "./Filmstrip";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { People } from "./People";
import { Podcast } from "./Podcast";
import { ServicesList } from "./ServicesList";
import { SplitHero } from "./SplitHero";
import { StudioSlab } from "./StudioSlab";
import { Testimonial } from "./Testimonial";

/** Option B · Split & filmstrip. Same chapter voice as A, calmer; black & white only. */
export function OptionB() {
  const reel = useReelModal();
  return (
    <div className={`${s.root} min-h-screen overflow-x-clip`}>
      <div className="relative mx-auto flex max-w-[1440px] flex-col">
        <Nav />
        <SplitHero onOpenReel={reel.show} />
        <ClientTicker />
        <Filmstrip />
        <Testimonial />
        <ServicesList />
        <StudioSlab />
        <Podcast />
        <People />
        <ContactSlab />
        <Footer />
      </div>
      <ReelModal open={reel.open} onClose={reel.close} />
    </div>
  );
}
