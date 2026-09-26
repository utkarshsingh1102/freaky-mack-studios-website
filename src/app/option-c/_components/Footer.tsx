import { FM_MARK_WHITE } from "@/shared/assets";
import { CONTACT } from "@/shared/config";
import s from "../option-c.module.css";
import { Dots } from "./primitives";
import { PX } from "./theme";

const LABEL = "border-b border-white/10 pb-[8px] text-[10px] text-[#8c8c88]";
const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Vimeo", href: "https://vimeo.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

/** 13 · Footer. */
export function Footer() {
  return (
    <footer className={`flex shrink-0 flex-col gap-[48px] pt-[64px] pb-[88px] lg:gap-[56px] lg:pb-[32px] xl:h-[640px] ${PX}`}>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[40px] lg:grid-cols-12 lg:gap-x-[32px]">
        <div className="col-span-2 flex flex-col gap-[16px] lg:col-span-4">
          <a href="#top" className={`${s.link} flex items-center gap-[10px]`}>
            <img src={FM_MARK_WHITE} alt="" className="h-[27px] w-[40px] object-contain" />
            <span className="text-[20px] font-semibold">Freaky Mack</span>
          </a>
          <p className="m-0 max-w-[280px] text-[11px] leading-[1.8] text-[#8c8c88]">
            A home for filmmakers, creators and ideas that deserve to become films.
          </p>
        </div>
        <div className="col-span-2 flex flex-col gap-[10px] text-[12px] sm:col-span-1 lg:col-span-3 lg:col-start-7">
          <span className={LABEL}>Contact</span>
          <a href={`mailto:${CONTACT.email}`} className={`${s.link} break-all`}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref} className={s.link}>{CONTACT.phone}</a>
          <span className={`${LABEL} mt-[12px]`}>Studio</span>
          <span>[STUDIO ADDRESS], [CITY]</span>
        </div>
        <div className="col-span-2 flex flex-col gap-[10px] text-[12px] sm:col-span-1 lg:col-span-3 lg:col-start-10">
          <span className={LABEL}>Working hours</span>
          <span>[DAYS]</span>
          <span>[HOURS]</span>
        </div>
      </div>
      <div className="relative grid grid-cols-2 gap-x-[24px] gap-y-[32px] border border-white/10 p-[20px] lg:grid-cols-12 lg:gap-x-[32px] lg:p-[28px]">
        <Dots />
        <div className="col-span-2 flex flex-col lg:col-span-5">
          <span className="pb-[12px] text-[10px] text-[#8c8c88]">Stay connected</span>
          {SOCIAL.map((l) => (
            <a key={l.label} href={l.href} className={`${s.link} flex justify-between border-t border-white/[0.08] py-[10px] text-[12px]`}>
              {l.label}
              <span>↗</span>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-[8px] text-[12px] lg:col-span-2 lg:col-start-8">
          <span className="pb-[4px] text-[10px] text-[#8c8c88]">Pages</span>
          <a href="#work" className={s.link}>Work</a>
          <a href="#about" className={s.link}>Studio</a>
          <a href="#scope" className={s.link}>Services</a>
          <a href="#contact" className={s.link}>Contact</a>
        </div>
        <div className="flex flex-col gap-[8px] text-[12px] lg:col-span-3 lg:col-start-10">
          <span className="pb-[4px] text-[10px] text-[#8c8c88]">Explore</span>
          <a href="#podcast" className={s.link}>Podcast</a>
          <a href="#crew" className={s.link}>Crew</a>
          <a href="#reel" className={s.link}>Showreel</a>
        </div>
      </div>
      <div className="flex justify-between text-[10px] text-[#8c8c88]">
        <span>© 2026 Freaky Mack Studios</span>
        <a href="#top" className={`${s.link} !text-[#8c8c88]`}>Back to top ↑</a>
      </div>
    </footer>
  );
}
