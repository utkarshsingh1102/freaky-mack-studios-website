import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-b.module.css";
import { PX } from "./theme";

const CHAPTERS = [
  { no: "01", label: "Work", href: "#ch1" },
  { no: "02", label: "Studio", href: "#ch2" },
  { no: "03", label: "Originals", href: "#ch4" },
  { no: "04", label: "People", href: "#ch5" },
];

export function Nav() {
  return (
    <header className={`flex h-[72px] shrink-0 items-center justify-between lg:h-[96px] ${PX}`}>
      <a href="#top" className={`${s.link} flex items-center gap-[14px]`} aria-label="Freaky Mack Studios home">
        <img src={FM_MARK_WHITE} alt="" className="h-[32px] w-[48px] object-contain invert" />
        <span className="text-[14px] font-extrabold tracking-[0.1em] uppercase">Freaky Mack</span>
      </a>
      <nav aria-label="Chapters" className="hidden items-center gap-[32px] text-[15px] font-medium lg:flex">
        {CHAPTERS.map((c) => (
          <a key={c.no} href={c.href} className={`${s.link} flex items-baseline gap-[6px]`}>
            <span className={`${s.it} text-[#6b6b6b]`}>{c.no}</span>
            {c.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className={`${s.pill} ${s.primary} flex h-[40px] items-center rounded-full border border-[#0a0a0a] bg-[#0a0a0a] px-[16px] text-[13px] font-semibold text-white lg:h-[46px] lg:px-[22px] lg:text-[14px]`}
      >
        Start a project
      </a>
    </header>
  );
}
