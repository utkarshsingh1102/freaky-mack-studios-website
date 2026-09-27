import type { Metadata } from "next";
import { CONTACT } from "@/shared/config";
import s from "@/components/site/site.module.css";
import { H1, Intro, Kicker, Label, PX } from "@/components/site/ui";
import { EnquiryForm } from "./_components/EnquiryForm";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Tell us what you’re making. We read every brief and come back to you personally.",
  alternates: { canonical: "/start-a-project" },
};

const NEXT_STEPS = [
  "We read your brief — every word of it.",
  "We set up a call to talk it through, within [X] working days.",
  "We come back with an approach and a quote.",
];

/** design/boards/Contact.dc.html */
export default function StartAProjectPage() {
  return (
    <>
      <section className={`flex flex-col gap-[24px] pt-[64px] pb-[48px] lg:gap-[28px] lg:pt-[120px] lg:pb-[80px] ${PX}`}>
        <Kicker>Chapter 06 — Your turn</Kicker>
        <H1 big balance={false} tracking="tracking-[-0.035em]" className="max-w-[1150px]">
          Got a story?{" "}
          <span
            className={`${s.it} text-[clamp(44px,7.222vw,104px)] font-normal tracking-normal text-[var(--accent-text)] normal-case`}
          >
            Let’s shoot it.
          </span>
        </H1>
        <Intro>Tell us what you’re making. We read every brief and come back to you personally.</Intro>
      </section>

      <section className={`grid grid-cols-1 items-start gap-y-[56px] pb-[96px] lg:grid-cols-12 lg:gap-x-[32px] lg:pb-[160px] ${PX}`}>
        <EnquiryForm />

        <aside className="flex flex-col gap-[40px] lg:col-span-4 lg:col-start-9 lg:gap-[48px] lg:pt-[16px]">
          <div className="flex flex-col gap-[16px]">
            <Label size="text-[20px] lg:text-[24px]">Rather talk?</Label>
            <a
              href={`mailto:${CONTACT.email}`}
              className={`${s.link} self-start border-b-[3px] border-[var(--accent)] pb-[4px] text-[19px] font-semibold break-all lg:text-[22px]`}
            >
              {CONTACT.email}
            </a>
            <a href={CONTACT.whatsapp} className={`${s.link} self-start text-[17px] lg:text-[18px]`}>
              WhatsApp · {CONTACT.phone} ↗
            </a>
            <a href={CONTACT.phoneHref} className={`${s.link} self-start text-[17px] lg:text-[18px]`}>
              Call · {CONTACT.phone}
            </a>
          </div>
          <div className="flex flex-col gap-[12px]">
            <Label size="text-[20px] lg:text-[24px]">The studio</Label>
            <address className="text-[17px] leading-[1.6] not-italic lg:text-[18px]">
              [Studio address]
              <br />
              [City], India
            </address>
          </div>
          <div className="flex flex-col gap-[22px] rounded-[28px] border border-[var(--ink)] p-[28px] [transform:rotate(1.5deg)] lg:p-[32px]">
            <Label size="text-[20px] lg:text-[24px]">What happens next</Label>
            <ol className="m-0 flex list-none flex-col gap-[22px] p-0">
              {NEXT_STEPS.map((t, i) => (
                <li key={t} className="flex items-baseline gap-[16px]">
                  <span className="text-[26px] font-extrabold text-[var(--accent-text)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[16px] leading-[1.5]">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}
