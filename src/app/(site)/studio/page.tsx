import type { Metadata } from "next";
import { FM_MARK_WHITE } from "@/shared/assets";
import { YourTurnCta } from "@/components/site/blocks";
import s from "@/components/site/site.module.css";
import { AccentWord, H1, H2, Intro, Kicker, Label, MX, PX } from "@/components/site/ui";
import { BELIEFS, CLIENT_TAGS, PROCESS, SERVICES, TIMELINE } from "@/content/studio";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "A film production house built on six years of advertising filmmaking — now a studio for commercial, narrative and digital stories.",
  alternates: { canonical: "/studio" },
};

const SECTION = `pb-[96px] lg:pb-[180px] ${PX}`;

const TONE = {
  surface: { card: "bg-[var(--surface)]", label: "text-[var(--muted-2)]" },
  inverse: { card: "bg-[var(--inv-bg)] text-[var(--inv-ink)]", label: "text-[var(--inv-muted)]" },
  accent: { card: "bg-[var(--accent)] text-[var(--on-accent)]", label: "" },
} as const;

/** design/boards/Studio.dc.html */
export default function StudioPage() {
  return (
    <>
      <section className={`flex flex-col gap-[24px] pt-[64px] pb-[56px] lg:gap-[32px] lg:pt-[120px] lg:pb-[88px] ${PX}`}>
        <Kicker>Chapter 02 — The studio</Kicker>
        <H1 className="max-w-[1150px]">
          Advertising taught us precision. Cinema gave us the <AccentWord>appetite</AccentWord>.
        </H1>
        <Intro className="max-w-[760px]">
          A film production house built on six years of advertising filmmaking — now a studio for commercial, narrative
          and digital stories.
        </Intro>
      </section>

      <section className={`relative pb-[96px] lg:pb-[160px] ${PX}`}>
        <div
          className="flex h-[320px] items-center justify-center rounded-[24px] px-[24px] text-center text-[12px] tracking-[0.22em] text-white/60 uppercase shadow-[0_30px_80px_rgba(0,0,0,0.14)] [transform:rotate(-1deg)] md:h-[460px] lg:h-[600px] lg:rounded-[32px]"
          style={{ background: "radial-gradient(ellipse at 45% 50%, #4a4a48 0%, #1a1a1a 60%, #0a0a0a 100%)" }}
        >
          [ On set — behind the scenes still ]
        </div>
        <span
          className={`${s.it} absolute top-[-18px] right-[36px] rounded-full bg-[var(--accent)] px-[18px] py-[6px] text-[18px] text-[var(--on-accent)] [transform:rotate(5deg)] lg:top-[-22px] lg:right-[150px] lg:px-[22px] lg:py-[8px] lg:text-[22px]`}
        >
          on set, [Year]
        </span>
      </section>

      <section className={`grid grid-cols-1 gap-y-[24px] lg:grid-cols-12 lg:gap-x-[32px] ${SECTION}`}>
        <Label className="lg:col-span-3">The story so far</Label>
        <div className="flex flex-col gap-[24px] lg:col-span-8 lg:col-start-5 lg:gap-[28px]">
          <p className="m-0 text-[26px] leading-[1.2] font-extrabold tracking-[-0.02em] text-pretty md:text-[32px] lg:text-[38px]">
            Freaky Mack Studios is built on six years of advertising filmmaking at Freaky Mack — now a larger creative
            studio focused on storytelling across commercial, narrative and digital formats.
          </p>
          <p className="m-0 text-[18px] leading-[1.65] text-[var(--ink-2)] lg:text-[20px]">
            We’ve made films for McDonald’s, Google, Adidas Originals, Mercedes-Benz, Fila, PC Jewellers, Times of India
            and many more — bringing strong visual storytelling, production discipline and a filmmaker-led creative
            approach.
          </p>
          <p className="m-0 text-[18px] leading-[1.65] text-[var(--ink-2)] lg:text-[20px]">
            Today we develop and produce commercial and fashion films, music videos, documentaries, digital series and
            original narratives. We combine the precision of advertising filmmaking with the creative ambition of
            independent cinema — building a slate of our own work alongside films for brands and cultural platforms.
          </p>
        </div>
      </section>

      <section aria-label="Timeline" className={`flex flex-col gap-[40px] lg:gap-[56px] ${SECTION}`}>
        <div className="flex flex-col gap-[16px]">
          <Label>Told in chapters</Label>
          <h2 className={H2}>From agency to studio.</h2>
        </div>
        <ol className="m-0 grid list-none grid-cols-1 items-end gap-[24px] p-0 md:grid-cols-2 xl:grid-cols-4">
          {TIMELINE.map((t) => (
            <li
              key={t.label}
              className={`${s.card} ${TONE[t.tone].card} flex min-h-[220px] flex-col justify-between gap-[40px] rounded-[24px] p-[28px] xl:h-[var(--h)] xl:min-h-0`}
              style={{ transform: `rotate(${t.tilt}deg)`, ["--h" as string]: `${t.h}px` }}
            >
              <span className={`${s.it} text-[20px] ${TONE[t.tone].label}`}>{t.label}</span>
              <span className="text-[20px] leading-[1.35] font-semibold">{t.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-label="What we believe"
        className={`relative mb-[96px] flex flex-col gap-[40px] overflow-hidden rounded-[28px] bg-[var(--inv-bg)] px-[28px] py-[56px] text-[var(--inv-ink)] lg:mb-[180px] lg:gap-[64px] lg:rounded-[40px] lg:p-[96px] ${MX}`}
      >
        <img
          src={FM_MARK_WHITE}
          alt=""
          className={`${s.logoOnInverse} pointer-events-none absolute top-[-40px] right-[-60px] h-[200px] w-[300px] object-contain opacity-10 [transform:rotate(12deg)] lg:h-[305px] lg:w-[460px]`}
        />
        <Label className="relative" color="text-[var(--inv-muted)]">What we believe</Label>
        <div className="relative grid grid-cols-1 gap-[40px] md:grid-cols-3 lg:gap-[48px]">
          {BELIEFS.map((b) => (
            <div key={b.no} className="flex flex-col gap-[16px]">
              <span className={`${s.it} text-[20px] text-[var(--inv-muted)]`}>{b.no}</span>
              <span className="text-[36px] font-extrabold tracking-[-0.03em] lg:text-[44px]">{b.title}</span>
              <span className="text-[17px] leading-[1.6] text-[var(--inv-soft)]">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="What we make" className={`grid grid-cols-1 gap-y-[40px] xl:grid-cols-12 xl:gap-x-[32px] ${SECTION}`}>
        <div className="flex flex-col gap-[16px] xl:col-span-4">
          <Label>What we make</Label>
          <h2 className="m-0 text-[36px] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance md:text-[48px] lg:text-[56px]">
            Eight ways a brief becomes a film.
          </h2>
        </div>
        <ol className="m-0 list-none border-t border-[var(--ink)] p-0 xl:col-span-7 xl:col-start-6">
          {SERVICES.map((sv, i) => (
            <li
              key={sv.name}
              className={`${s.row} grid grid-cols-[36px_1fr] items-baseline gap-x-[12px] gap-y-[6px] border-b border-[var(--line)] py-[20px] md:grid-cols-[48px_1fr_1.3fr] md:gap-[16px] lg:py-[22px]`}
            >
              <span className={`${s.it} text-[18px] text-[var(--muted-2)]`}>{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[21px] font-semibold lg:text-[24px]">{sv.name}</span>
              <span className="col-start-2 text-[15px] text-[var(--muted)] md:col-start-auto">{sv.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="How we work" className={`flex flex-col gap-[40px] lg:gap-[56px] ${SECTION}`}>
        <div className="flex flex-col gap-[16px]">
          <Label>How we work</Label>
          <h2 className={H2}>One team, brief to final cut.</h2>
        </div>
        <ol className="m-0 grid list-none grid-cols-1 items-start gap-[24px] p-0 md:grid-cols-3 lg:gap-[32px]">
          {PROCESS.map((p) => (
            <li
              key={p.no}
              className={`${s.card} flex flex-col gap-[20px] rounded-[28px] border border-[var(--ink)] p-[28px] lg:p-[36px] ${p.lift ? "md:mt-[40px]" : ""}`}
              style={{ transform: `rotate(${p.tilt}deg)` }}
            >
              <span className="text-[48px] font-extrabold tracking-[-0.04em] text-[var(--accent-text)] lg:text-[56px]">{p.no}</span>
              <span className="text-[22px] font-bold lg:text-[24px]">{p.title}</span>
              <span className="text-[16px] leading-[1.6] text-[var(--ink-2)]">{p.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="Clients" className={`flex flex-col items-center gap-[32px] lg:gap-[40px] ${SECTION}`}>
        <Label>Films made for</Label>
        <ul className="m-0 flex list-none flex-wrap justify-center gap-[14px] p-0 xl:relative xl:block xl:h-[300px] xl:w-full xl:max-w-[1248px]">
          {CLIENT_TAGS.map((c) => (
            <li
              key={c.name}
              className={`${s.tag} rounded-full border px-[20px] py-[10px] text-[18px] lg:px-[26px] lg:py-[14px] lg:text-[22px] xl:absolute xl:top-[var(--t)] xl:left-[var(--l)] ${
                c.accent
                  ? "border-[var(--accent)] bg-[var(--accent)] font-semibold text-[var(--on-accent)]"
                  : c.more
                    ? "border-dashed border-[var(--ink)] bg-[var(--pill-bg)] font-medium text-[var(--muted)]"
                    : "border-[var(--ink)] bg-[var(--pill-bg)] font-semibold"
              }`}
              style={{
                transform: `rotate(${c.rot}deg)`,
                ["--l" as string]: `${(c.left / 1248) * 100}%`,
                ["--t" as string]: `${c.top}px`,
              }}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </section>

      <YourTurnCta />
    </>
  );
}
