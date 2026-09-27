"use client";

import { useRef, type KeyboardEvent } from "react";
import s from "./site.module.css";

type Option = { id: string; label: string };

/**
 * Single-select pill chips that behave as a radio group (CLAUDE.md → Accessibility):
 * one tab stop, arrow keys move and select, Home/End jump.
 * A `value` matching no option leaves every chip unchecked (the first one keeps the tab stop).
 */
export function ChipGroup({
  label,
  labelledBy,
  options,
  value,
  onChange,
  size = "md",
  gap = "gap-[10px]",
}: {
  label?: string;
  labelledBy?: string;
  options: readonly Option[];
  value: string;
  onChange: (id: string) => void;
  size?: "md" | "lg";
  /** Space between chips. */
  gap?: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = options.findIndex((o) => o.id === value);
  const index = Math.max(0, selected);

  const onKeyDown = (e: KeyboardEvent) => {
    const last = options.length - 1;
    const to =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? index === last ? 0 : index + 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? index === 0 ? last : index - 1
          : e.key === "Home" ? 0 : e.key === "End" ? last : -1;
    if (to < 0) return;
    e.preventDefault();
    onChange(options[to].id);
    refs.current[to]?.focus();
  };

  const h = size === "lg" ? "h-[42px] px-[16px] text-[14px] lg:h-[46px] lg:px-[18px] lg:text-[15px]" : "h-[42px] px-[16px] text-[14px] lg:h-[44px] lg:px-[18px] lg:text-[15px]";
  return (
    <div role="radiogroup" aria-label={label} aria-labelledby={labelledBy} onKeyDown={onKeyDown} className={`flex flex-wrap ${gap}`}>
      {options.map((o, i) => {
        const on = i === selected;
        return (
          <button
            key={o.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={on}
            tabIndex={i === index ? 0 : -1}
            onClick={() => onChange(o.id)}
            className={`${s.chip} rounded-full border font-medium ${h} ${
              on ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]" : "border-[var(--ink)] bg-[var(--pill-bg)] text-[var(--ink)]"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
