"use client";

import { PITCH_MODE } from "@/shared/config";
import { setThemeChoice, useThemeChoice } from "./store";
import { ACCENTS, GROUNDS, THEMES } from "./theme";

/** Pitch-only, on every page: compare Light / Dark, the accent colours and the light grounds. */
export function ThemePicker() {
  const { theme, accent: accentId, ground } = useThemeChoice();
  if (!PITCH_MODE) return null;
  return (
    <div
      data-pitch-only
      role="group"
      aria-label="Theme options"
      className="fixed bottom-3 left-1/2 z-[1000] flex -translate-x-1/2 items-center gap-[6px] rounded-full border border-white/15 bg-[#111]/85 py-1.5 pr-3 pl-1.5 font-[system-ui,-apple-system,'Segoe_UI',sans-serif] text-[11px] whitespace-nowrap text-white/75 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:translate-x-0"
    >
      <div role="group" aria-label="Theme" className="flex rounded-full bg-white/10 p-[2px]">
        {THEMES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setThemeChoice({ theme: t })}
            aria-pressed={theme === t}
            aria-label={`${t === "light" ? "Light" : "Dark"} theme`}
            className={`rounded-full px-[10px] py-[3px] capitalize transition-colors ${
              theme === t ? "bg-white text-black" : "text-white/75 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <span className="mx-1 opacity-40">·</span>
      <span className="mr-1 hidden sm:inline">Accent</span>
      {ACCENTS.map((a) => (
        <button
          key={a.id}
          type="button"
          onClick={() => setThemeChoice({ accent: a.id })}
          aria-label={`${a.name} accent`}
          aria-pressed={accentId === a.id}
          title={a.name}
          className={`h-[18px] w-[18px] shrink-0 rounded-full border-2 ${accentId === a.id ? "border-white" : "border-transparent"}`}
          style={{ background: a.accent }}
        />
      ))}
      {theme === "light" && (
        <>
          <span className="mx-1 opacity-40">·</span>
          <span className="mr-1 hidden sm:inline">Ground</span>
          {GROUNDS.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setThemeChoice({ ground: g })}
              aria-label={`Ground ${g}`}
              aria-pressed={ground === g}
              title={g}
              className={`h-[18px] w-[18px] shrink-0 rounded-full border-2 ${ground === g ? "border-white" : "border-white/20"}`}
              style={{ background: g }}
            />
          ))}
        </>
      )}
    </div>
  );
}
