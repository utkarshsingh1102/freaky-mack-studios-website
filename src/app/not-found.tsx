import type { Metadata } from "next";
import Link from "next/link";
import { FM_MARK_WHITE } from "@/shared/assets";
import { SiteShell } from "@/components/site/SiteShell";
import { BTN_ACCENT, BTN_OUTLINE } from "@/components/site/buttons";
import s from "@/components/site/site.module.css";
import { AccentWord, H1, Intro, Kicker, PX } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Scene missing",
  robots: { index: false },
};

/** design/boards/NotFound.dc.html — rendered for any unknown URL (404.html in the static export). */
export default function NotFound() {
  return (
    <SiteShell>
      <section
        className={`relative flex flex-col items-center gap-[24px] overflow-hidden pt-[96px] pb-[96px] text-center lg:gap-[32px] lg:pt-[140px] lg:pb-[140px] ${PX}`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[40px] left-1/2 -translate-x-1/2 text-[clamp(180px,29.167vw,420px)] leading-none font-extrabold tracking-[-0.06em] text-[var(--ghost)] select-none"
        >
          404
        </span>
        <img src={FM_MARK_WHITE} alt="" className={`${s.blob} ${s.logo} relative h-[84px] w-[126px] object-contain lg:h-[120px] lg:w-[180px]`} />
        <Kicker className="relative">Error 404 — scene missing</Kicker>
        <H1 className="relative max-w-[1000px]">
          <AccentWord>Cut!</AccentWord> This scene didn’t make the edit.
        </H1>
        <Intro className="relative max-w-[560px]">
          The page you’re looking for has moved or never existed. Let’s get you back on set.
        </Intro>
        <div className="relative mt-[8px] flex flex-wrap justify-center gap-[12px] sm:gap-[16px]">
          <Link href="/" className={BTN_ACCENT}>Back to the start</Link>
          <Link href="/work" className={BTN_OUTLINE}>See the work</Link>
        </div>
      </section>
    </SiteShell>
  );
}
