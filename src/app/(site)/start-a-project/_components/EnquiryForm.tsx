"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { ChipGroup } from "@/components/site/ChipGroup";
import { pillAccent } from "@/components/site/blocks";
import s from "@/components/site/site.module.css";
import { AUDIENCES, BUDGETS, FORMATS, WHENS, bare } from "@/content/enquiry-options";
import { useEnquiryForm } from "@/shared/enquiry";

const FMT_OPTS = FORMATS.map((f) => ({ id: f.id, label: bare(f.phrase) }));
const WHO_OPTS = AUDIENCES.map((a) => ({ id: a.id, label: bare(a.phrase) }));

const FIELD =
  "rounded-[12px] border border-[var(--field-line)] bg-[var(--field-bg)] px-[16px] text-[16px] text-[var(--ink)] [font-family:inherit]";
const LABEL = "text-[13px] font-medium text-[var(--ink-2)]";
const ERR = "m-0 text-[13px] text-[var(--error)]";
const LEGEND = "mb-[14px] p-0 text-[13px] tracking-[0.2em] text-[var(--muted)] uppercase";

/** The query string, read without a Suspense boundary: "" while prerendering, the real one after hydration. */
const noop = () => () => {};
const useSearch = () => useSyncExternalStore(noop, () => window.location.search, () => "");

/** `?fmt=music-video&who=agency` (from the homepage sentence builder) pre-selects those chips. */
function fromQuery(search: string, key: string, options: readonly { id: string }[]) {
  const id = new URLSearchParams(search).get(key);
  return options.some((o) => o.id === id) ? id : null;
}

type Field = { id: string; name: string; label: string; optional?: string; type: string; placeholder: string; required?: boolean };
const FIELDS: Field[] = [
  { id: "c-name", name: "name", label: "Your name", type: "text", placeholder: "Hi, I’m…", required: true },
  { id: "c-email", name: "email", label: "Email", type: "email", placeholder: "you@brand.com", required: true },
  { id: "c-co", name: "company", label: "Brand, label or agency", type: "text", placeholder: "Who are you making it for?" },
  { id: "c-phone", name: "phone", label: "Phone", optional: "(optional)", type: "tel", placeholder: "+91" },
];

export function EnquiryForm() {
  const search = useSearch();
  const [picked, setPicked] = useState<{ fmt?: string; who?: string; when?: string; budget?: string }>({});
  const fmt = picked.fmt ?? fromQuery(search, "fmt", FORMATS) ?? FORMATS[0].id;
  const who = picked.who ?? fromQuery(search, "who", AUDIENCES) ?? AUDIENCES[0].id;
  const when = picked.when ?? WHENS[0].id;
  const budget = picked.budget ?? BUDGETS[3].id;
  const pick = (key: keyof typeof picked) => (id: string) => setPicked((p) => ({ ...p, [key]: id }));

  const f = FORMATS.find((x) => x.id === fmt)!;
  const a = AUDIENCES.find((x) => x.id === who)!;
  const w = WHENS.find((x) => x.id === when)!;
  const b = BUDGETS.find((x) => x.id === budget)!;

  const { onSubmit, status, message, errors } = useEnquiryForm({
    format: bare(f.phrase),
    audience: bare(a.phrase),
    timing: w.label,
    budget: b.label,
    source: "Start a project",
  });

  const err = (name: string) => errors[name as keyof typeof errors];

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Start a project"
      className="flex flex-col gap-[36px] rounded-[24px] bg-[var(--surface)] p-[22px] sm:p-[32px] lg:col-span-8 lg:gap-[40px] lg:rounded-[32px] lg:p-[48px]"
    >
      <p className="m-0 text-[26px] leading-[1.3] font-extrabold tracking-[-0.03em] md:text-[34px] lg:text-[40px]" aria-live="polite">
        You need{" "}
        <span className="inline-block rounded-full bg-[var(--accent)] px-[14px] text-[var(--on-accent)] [transform:rotate(-1.5deg)] lg:px-[20px]">
          {f.phrase}
        </span>{" "}
        for{" "}
        <span className="inline-block rounded-full border-[3px] border-[var(--accent)] px-[14px] [transform:rotate(1.5deg)] lg:px-[20px]">
          {a.phrase}
        </span>
        , <span className={`${s.it} font-normal tracking-normal`}>{w.phrase}</span>.
      </p>

      <fieldset className="m-0 border-0 p-0">
        <legend id="q-fmt" className={LEGEND}>01 · What are we making?</legend>
        <ChipGroup labelledBy="q-fmt" options={FMT_OPTS} value={fmt} onChange={pick("fmt")} />
      </fieldset>
      <fieldset className="m-0 border-0 p-0">
        <legend id="q-who" className={LEGEND}>02 · Who’s it for?</legend>
        <ChipGroup labelledBy="q-who" options={WHO_OPTS} value={who} onChange={pick("who")} />
      </fieldset>
      <div className="grid grid-cols-1 gap-[36px] md:grid-cols-2 md:gap-[32px]">
        <fieldset className="m-0 border-0 p-0">
          <legend id="q-when" className={LEGEND}>03 · When?</legend>
          <ChipGroup labelledBy="q-when" options={WHENS} value={when} onChange={pick("when")} />
        </fieldset>
        <fieldset className="m-0 border-0 p-0">
          <legend id="q-budget" className={LEGEND}>04 · Budget range</legend>
          <ChipGroup labelledBy="q-budget" options={BUDGETS} value={budget} onChange={pick("budget")} />
        </fieldset>
      </div>

      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
        {FIELDS.map((fd) => (
          <div key={fd.id} className="flex flex-col gap-[8px]">
            <label htmlFor={fd.id} className={LABEL}>
              {fd.label} {fd.optional && <span className="text-[var(--muted-2)]">{fd.optional}</span>}
            </label>
            <input
              id={fd.id}
              name={fd.name}
              type={fd.type}
              required={fd.required}
              autoComplete={fd.name === "company" ? "organization" : fd.name === "phone" ? "tel" : fd.name}
              aria-invalid={!!err(fd.name)}
              aria-describedby={err(fd.name) ? `${fd.id}-err` : undefined}
              placeholder={fd.placeholder}
              className={`${FIELD} h-[52px]`}
            />
            {err(fd.name) && <p id={`${fd.id}-err`} className={ERR}>{err(fd.name)}</p>}
          </div>
        ))}
        <div className="flex flex-col gap-[8px] md:col-span-2">
          <label htmlFor="c-brief" className={LABEL}>The story so far</label>
          <textarea
            id="c-brief"
            name="brief"
            rows={5}
            required
            aria-invalid={!!errors.brief}
            aria-describedby={errors.brief ? "c-brief-err" : undefined}
            placeholder="The idea, where it will run, anything you already have."
            className={`${FIELD} resize-y py-[14px]`}
          />
          {errors.brief && <p id="c-brief-err" className={ERR}>{errors.brief}</p>}
        </div>
        <div className="flex flex-col gap-[8px] md:col-span-2">
          <label htmlFor="c-links" className={LABEL}>
            Links <span className="text-[var(--muted-2)]">(decks, references, moodboards — optional)</span>
          </label>
          <input id="c-links" name="links" type="url" placeholder="https://" className={`${FIELD} h-[52px]`} />
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-[24px] md:flex-row md:items-center">
        <p className="m-0 max-w-[420px] text-[13px] leading-[1.6] text-[var(--muted)]">
          By sending this you agree to our{" "}
          <Link href="/privacy" className={`${s.link} border-b border-[var(--muted)] text-[var(--ink-2)]`}>
            privacy policy
          </Link>
          . We only use your details to reply to you.
        </p>
        <button type="submit" disabled={status === "sending"} className={pillAccent("h-[56px] px-[32px] text-[16px] lg:h-[60px]")}>
          Send it over →
        </button>
      </div>
      {message && (
        <p role="status" className="m-0 text-[14px] text-[var(--ink-2)]">
          {message}
        </p>
      )}
    </form>
  );
}
