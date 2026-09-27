import type { Metadata } from "next";
import Link from "next/link";
import { FM_MARK_WHITE } from "@/shared/assets";
import { BTN_INVERSE, BTN_OUTLINE } from "@/components/site/buttons";
import s from "@/components/site/site.module.css";
import { AccentWord, H1, Intro, Label, PlayIcon, PX } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Brief received",
  description: "Thanks for telling us your story. We’ll be in touch at the email you gave us.",
  robots: { index: false },
};

/** design/boards/Thanks.dc.html (the footer switches its sign-off to “Cut. Print. Talk soon.” here). */
export default function ThanksPage() {
  return (
    <>
      <section className={`flex flex-col items-center gap-[24px] pt-[72px] pb-[80px] text-center lg:gap-[32px] lg:pt-[140px] lg:pb-[120px] ${PX}`}>
        <img src={FM_MARK_WHITE} alt="" className={`${s.blob} ${s.logo} h-[84px] w-[126px] object-contain lg:h-[120px] lg:w-[180px]`} />
        <span className="rounded-full bg-[var(--accent)] px-[20px] py-[8px] text-[15px] font-semibold text-[var(--on-accent)] [transform:rotate(-3deg)]">
          Brief received
        </span>
        <H1 big className="max-w-[1000px]">
          That’s a <AccentWord big>wrap</AccentWord> — for now.
        </H1>
        <Intro className="max-w-[620px]">
          Thanks for telling us your story. We’ll be in touch at the email you gave us, within [X] working days.
        </Intro>
        <div className="mt-[8px] flex flex-wrap justify-center gap-[12px] sm:gap-[16px]">
          <Link href="/" className={BTN_INVERSE}>Back to the start</Link>
          <Link href="/work" className={BTN_OUTLINE}>See the work</Link>
        </div>
      </section>

      <section aria-label="While you wait" className={`flex flex-col gap-[24px] pb-[96px] lg:gap-[32px] lg:pb-[140px] ${PX}`}>
        <Label>While you wait</Label>
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:gap-[32px]">
          <Link
            href="/originals#podcast"
            className={`${s.card} flex items-center justify-between gap-[24px] rounded-[28px] bg-[var(--inv-bg)] p-[28px] text-[var(--inv-ink)] [transform:rotate(-1deg)] lg:p-[40px]`}
          >
            <div className="flex flex-col gap-[10px]">
              <span className={`${s.it} text-[20px] text-[var(--inv-muted)]`}>Listen</span>
              <span className="text-[24px] font-bold tracking-[-0.02em] lg:text-[30px]">The Freaky Mack Podcast</span>
            </div>
            <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--on-accent)]">
              <PlayIcon size={16} />
            </span>
          </Link>
          <Link
            href="/studio"
            className={`${s.card} flex items-center justify-between gap-[24px] rounded-[28px] bg-[var(--surface)] p-[28px] [transform:rotate(1deg)] lg:p-[40px]`}
          >
            <div className="flex flex-col gap-[10px]">
              <span className={`${s.it} text-[20px] text-[var(--muted-2)]`}>Read</span>
              <span className="text-[24px] font-bold tracking-[-0.02em] lg:text-[30px]">The studio story</span>
            </div>
            <span className="text-[32px]" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
