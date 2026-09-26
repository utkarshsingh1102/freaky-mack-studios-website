import { FM_LOGO_WHITE } from "@/shared/assets";
import s from "../option-b.module.css";

/** Chapter 03: light grey slab, logo-led. */
export function StudioSlab() {
  return (
    <section
      id="about"
      className="mx-4 mb-[96px] grid shrink-0 grid-cols-1 items-center gap-y-[32px] rounded-[28px] bg-[#f4f4f1] p-[28px] md:mx-10 md:p-[56px] lg:mx-[96px] lg:mb-[180px] lg:grid-cols-12 lg:gap-x-[32px] lg:rounded-[40px] lg:p-[96px]"
    >
      <div className="flex justify-center lg:col-span-4">
        <img
          src={FM_LOGO_WHITE}
          alt="Freaky Mack Studios"
          className="h-[150px] w-[190px] object-contain invert [transform:rotate(-4deg)] lg:h-[236px] lg:w-[300px]"
        />
      </div>
      <div className="flex flex-col gap-[24px] lg:col-span-8 lg:col-start-5 lg:gap-[32px]">
        <div className={`${s.it} text-[20px] text-[#6b6b6b] lg:text-[26px]`}>
          Chapter 03 — Then we got greedy for our own stories
        </div>
        <p className="m-0 text-[clamp(30px,3.333vw,48px)] leading-[1.1] font-extrabold tracking-[-0.03em] text-balance">
          Advertising taught us precision. Cinema gave us the appetite.
        </p>
        <p className="m-0 max-w-[640px] text-[17px] leading-[1.65] text-[#3a3a3a] lg:text-[18px]">
          Six years of advertising filmmaking at Freaky Mack, now a larger creative studio — commercial and fashion
          films, music videos, documentaries, digital series and original narratives. A home for filmmakers, creators
          and ideas that deserve to become films.
        </p>
        <a
          href="#about"
          className={`${s.pill} ${s.primary} flex h-[52px] items-center self-start rounded-full border border-[#0a0a0a] bg-[#0a0a0a] px-[26px] text-[14px] font-semibold text-white`}
        >
          Read the studio story
        </a>
      </div>
    </section>
  );
}
