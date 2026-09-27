import type { Metadata } from "next";
import { CONTACT, SOCIAL } from "@/shared/config";
import { InverseSlab, pillAccent } from "@/components/site/blocks";
import { DraggableMark } from "@/components/motion/DraggableMark";
import s from "@/components/site/site.module.css";
import { AccentWord, H1, H2, Intro, Kicker, Label, PX } from "@/components/site/ui";
import { COLLABORATORS, CREW } from "@/content/people";

export const metadata: Metadata = {
  title: "People",
  description: "The filmmakers, producers and editors behind every Freaky Mack film — founder Izaan Khan and the crew.",
  alternates: { canonical: "/people" },
};

const SECTION = `pb-[96px] lg:pb-[180px] ${PX}`;

const CHIP = {
  plain: "border-[var(--ink)]",
  accent: "border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]",
  inverse: "border-[var(--inv-bg)] bg-[var(--inv-bg)] text-[var(--inv-ink)]",
  open: "border-dashed border-[var(--ink)] text-[var(--muted)]",
};

/** design/boards/People.dc.html */
export default function PeoplePage() {
  return (
    <>
      <section
        className={`relative flex flex-col items-center gap-[24px] pt-[88px] pb-[72px] text-center lg:gap-[32px] lg:pt-[120px] lg:pb-[120px] ${PX}`}
      >
        <DraggableMark className="absolute top-[16px] left-[20px] h-[56px] w-[84px] lg:top-[24px] lg:left-[40px] xl:top-[110px] xl:left-[170px] xl:h-[100px] xl:w-[150px]" imgClassName={`${s.blob} ${s.logo}`} />
        <Kicker>Chapter 04 — The humans behind the camera</Kicker>
        <H1 className="max-w-[1000px]">
          Small crew. Big <AccentWord>appetite</AccentWord>.
        </H1>
        <Intro className="max-w-[760px]">The filmmakers, producers and editors behind every Freaky Mack film.</Intro>
      </section>

      <section aria-label="Founder" className={`grid grid-cols-1 items-center gap-y-[56px] lg:grid-cols-12 lg:gap-x-[32px] ${SECTION}`}>
        <div className="relative mx-auto w-full max-w-[480px] lg:col-span-5 lg:max-w-none">
          <div
            className="flex h-[440px] items-center justify-center rounded-[200px_200px_28px_28px] text-[12px] tracking-[0.2em] text-[var(--muted)] uppercase [transform:rotate(-2deg)] md:h-[540px] lg:h-[620px] lg:rounded-[260px_260px_32px_32px]"
            style={{ background: "var(--portrait)" }}
          >
            [ Portrait — Izaan ]
          </div>
          <span className="absolute right-[-8px] bottom-[40px] rounded-full bg-[var(--accent)] px-[18px] py-[8px] text-[14px] font-semibold text-[var(--on-accent)] [transform:rotate(5deg)] lg:right-[-20px] lg:bottom-[48px] lg:px-[22px] lg:py-[10px] lg:text-[16px]">
            Founder &amp; Creative Producer
          </span>
        </div>
        <div className="flex flex-col gap-[24px] lg:col-span-6 lg:col-start-7 lg:gap-[28px]">
          <Label>Meet the founder</Label>
          <h2 className="m-0 text-[48px] leading-[1] font-extrabold tracking-[-0.03em] uppercase md:text-[60px] lg:text-[72px]">
            Izaan Khan
          </h2>
          <blockquote className={`${s.serif} m-0 text-[26px] leading-[1.25] tracking-[-0.01em] lg:text-[34px]`}>
            “[A line from Izaan on why he started Freaky Mack Studios.]”
          </blockquote>
          <p className="m-0 text-[17px] leading-[1.65] text-[var(--ink-2)] lg:text-[18px]">
            [Two or three lines of bio — how he got into film, six years at Freaky Mack, what he wants the studio to
            make next.]
          </p>
          <div className="flex gap-[20px] text-[15px] font-semibold">
            <a href={SOCIAL.founderInstagram} className={`${s.link} border-b border-[var(--ink)] pb-[3px]`}>Instagram ↗</a>
            <a href={SOCIAL.founderLinkedin} className={`${s.link} border-b border-[var(--ink)] pb-[3px]`}>LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <section aria-label="The crew" className={`flex flex-col gap-[48px] lg:gap-[64px] ${SECTION}`}>
        <div className="flex flex-col gap-[16px]">
          <Label>The crew</Label>
          <h2 className={H2}>Faces behind the frames.</h2>
        </div>
        <ul className="m-0 grid list-none grid-cols-2 items-end gap-x-[16px] gap-y-[40px] p-0 md:grid-cols-4 md:gap-x-[24px] lg:gap-x-[32px] lg:gap-y-[56px]">
          {CREW.map((c, i) => (
            <li
              key={i}
              className={`${s.face} flex flex-col items-center gap-[16px] md:mb-[var(--lift)]`}
              style={{ ["--lift" as string]: `${c.lift}px` }}
            >
              <div
                className="flex h-[220px] w-full items-center justify-center text-[12px] tracking-[0.2em] text-[var(--ink-2)] uppercase md:h-[260px] lg:h-[320px]"
                style={{ borderRadius: c.shape, background: c.tone }}
              >
                [ Photo ]
              </div>
              <span
                className={`rounded-full border px-[14px] py-[8px] text-[13px] font-semibold whitespace-nowrap lg:px-[16px] lg:text-[15px] ${
                  c.highlight
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]"
                    : "border-[var(--ink)] bg-[var(--pill-bg)]"
                }`}
                style={{ transform: `rotate(${c.tilt}deg)` }}
              >
                {c.name} · {c.role}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Collaborators" className={`grid grid-cols-1 items-start gap-y-[36px] lg:grid-cols-12 lg:gap-x-[32px] ${SECTION}`}>
        <div className="flex flex-col gap-[16px] lg:col-span-5">
          <Label>The wider crew</Label>
          <h2 className="m-0 text-[34px] leading-[1.08] font-extrabold tracking-[-0.03em] md:text-[42px] lg:text-[48px]">
            Every film brings its own crew.
          </h2>
          <p className="m-0 text-[17px] leading-[1.65] text-[var(--ink-2)] lg:text-[18px]">
            [One line on the directors, cinematographers and editors Freaky Mack works with project by project.]
          </p>
        </div>
        <ul className="m-0 flex list-none flex-wrap gap-[12px] p-0 lg:col-span-6 lg:col-start-7 lg:gap-[14px] lg:pt-[12px]">
          {COLLABORATORS.map((c) => (
            <li
              key={c.label}
              className={`${s.chipTilt} rounded-full border px-[18px] py-[10px] text-[16px] font-medium lg:px-[22px] lg:py-[12px] lg:text-[18px] ${CHIP[c.style ?? "plain"]}`}
              style={{ transform: `rotate(${c.tilt}deg)` }}
            >
              {c.label}
            </li>
          ))}
        </ul>
      </section>

      <InverseSlab
        ariaLabel="Join us"
        maxWidth="max-w-[720px]"
        label="Want to make films with us?"
        title="Send us your reel. We watch every one."
        markClassName="right-[-60px] top-[-50px] h-[180px] w-[270px] [transform:rotate(14deg)] lg:right-[280px] lg:top-[-70px] lg:h-[279px] lg:w-[420px]"
        action={
          <a href={`mailto:${CONTACT.email}?subject=My%20reel`} className={pillAccent()}>
            Email your reel
          </a>
        }
      />
    </>
  );
}
