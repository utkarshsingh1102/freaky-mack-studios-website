import { useState } from "react";
import s from "../option-c.module.css";
import { Dots } from "./primitives";
import { DISPLAY, PX } from "./theme";

const SCOPE = [
  {
    title: "Brand & ad films",
    body: "Commercials and brand films for TV, digital and cinema — six years of work for names like McDonald’s, Google, Adidas Originals and Mercedes-Benz.",
    tags: "Ad films · Event films",
  },
  {
    title: "Music & fashion films",
    body: "Music videos for artists and labels, and campaign films for fashion brands — made with the eye of a filmmaker.",
    tags: "Music videos · Fashion films",
  },
  {
    title: "Documentaries & originals",
    body: "Documentaries, short films and web series — our own slate of original stories, alongside films for brands and cultural platforms.",
    tags: "Documentaries · Short films · Web series",
  },
  {
    title: "Podcast, YouTube & post",
    body: "Studio-produced episodes for our own channel, plus edit, grade, sound and finishing for productions that need a post house.",
    tags: "Podcast · YouTube · Post-production",
  },
];

/** 6 · Scope of work: services accordion (one open at a time) inside a viewfinder box. */
export function ScopeAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section id="scope" className={`shrink-0 pt-[48px] pb-[96px] lg:pt-[80px] lg:pb-[120px] xl:h-[1100px] ${PX}`}>
      <div className="relative box-border flex h-full flex-col gap-[48px] border border-white/10 px-[16px] py-[40px] lg:gap-[72px] lg:px-[48px] lg:py-[64px]">
        <Dots />
        <h2 className={`${DISPLAY} px-[4px] text-[clamp(36px,5vw,72px)] leading-[1.1] lg:px-[16px]`}>
          What we
          <br />
          <span className="block pl-[56px] md:pl-[160px] lg:pl-[280px]">put on screen</span>
        </h2>
        <div className="flex w-full flex-col self-end md:w-[560px]">
          {SCOPE.map((x, i) => {
            const isOpen = open === i;
            return (
              <div key={x.title} className="border-t border-white/10 px-[12px] lg:px-[16px]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`scope-${i}`}
                  className={`${s.row} flex h-[64px] w-full items-center justify-between border-0 bg-transparent p-0 text-left text-[16px] font-medium text-[#f2f2f0]`}
                >
                  <span>{x.title}</span>
                  <span className="text-[16px] font-normal" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div id={`scope-${i}`} className="flex flex-col gap-[14px] pb-[24px]">
                    <p className="m-0 text-[12px] leading-[1.85] text-[#a9a9a4]">{x.body}</p>
                    <span className="text-[11px] text-[#8c8c88]">{x.tags}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
