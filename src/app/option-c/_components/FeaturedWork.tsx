import type { CSSProperties } from "react";
import s from "../option-c.module.css";
import { Corners, SplitButton } from "./primitives";
import { DISPLAY, PX } from "./theme";

// Board collage in a 1440×1500 frame. Desktop keeps it as a proportional collage (% of the frame);
// phones get a two-column stack.
const FRAMES = [
  { x: 660, y: 190, w: 190, h: 300, bg: "linear-gradient(170deg,#3a4448,#121416)", label: "[Project] · Ad film" },
  { x: 880, y: 150, w: 400, h: 440, bg: "linear-gradient(200deg,#5a4a3c,#161310)", label: "[Project] · Music video" },
  { x: 160, y: 720, w: 600, h: 500, bg: "linear-gradient(140deg,#24403f,#0f1716)", label: "[Project] · Fashion film", wide: true },
  { x: 880, y: 900, w: 190, h: 320, bg: "linear-gradient(180deg,#34393f,#121314)", label: "[Project] · Documentary" },
  { x: 1090, y: 900, w: 190, h: 320, bg: "linear-gradient(160deg,#5c4630,#161210)", label: "[Project] · Event film" },
];

/** 5 · Featured work collage. */
export function FeaturedWork() {
  return (
    <section
      id="work"
      className={`relative flex shrink-0 flex-col gap-[48px] py-[96px] lg:block lg:aspect-[1440/1500] lg:w-full lg:px-0 lg:py-0 ${PX}`}
    >
      <div className="flex flex-col gap-[28px] lg:absolute lg:top-[8%] lg:left-[11.111%]">
        <h2 className={`${DISPLAY} text-[clamp(40px,4.444vw,64px)]`}>
          Featured
          <br />
          work
        </h2>
        <SplitButton href="#work" className="self-start">
          View all work
        </SplitButton>
      </div>
      <div className="grid grid-cols-2 gap-x-[12px] gap-y-[32px] lg:contents">
        {FRAMES.map((f) => (
          <a
            key={f.label}
            href="#work"
            className={`${s.frame} flex flex-col gap-[12px] lg:absolute lg:top-[var(--t)] lg:left-[var(--l)] lg:w-[var(--w)] ${f.wide ? "col-span-2" : ""}`}
            style={{ "--l": `${(f.x / 1440) * 100}%`, "--t": `${(f.y / 1500) * 100}%`, "--w": `${(f.w / 1440) * 100}%` } as CSSProperties}
          >
            <span className="relative block w-full" style={{ aspectRatio: `${f.w} / ${f.h}` }}>
              <span className="absolute inset-0 block overflow-hidden">
                <span
                  className={`${s.img} flex h-full w-full items-center justify-center text-[11px] tracking-[0.2em] text-white/35`}
                  style={{ background: f.bg }}
                >
                  [ STILL ]
                </span>
              </span>
              <Corners />
            </span>
            <span className="text-[11px]">{f.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
