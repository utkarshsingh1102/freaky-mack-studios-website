"use client";

import { useSyncExternalStore } from "react";
import { PITCH_MODE } from "@/shared/config";
import { ACCENTS, DEFAULT_CHOICE, GROUNDS, STORAGE_KEY, THEMES, resolveChoice, type AccentId, type Choice, type Theme } from "./theme";

/**
 * The theme choice lives on <html> (data-theme / data-accent / data-ground + CSS variables).
 * The head script sets it before first paint; this store reads it and updates it, so the choice
 * survives client-side navigation (the root layout never re-renders <html>) and reloads (localStorage).
 */
const listeners = new Set<() => void>();
const key = (c: Choice) => `${c.theme}|${c.accent}|${c.ground}`;
const SERVER_SNAPSHOT = key(DEFAULT_CHOICE);

function readDom(): Choice {
  const r = document.documentElement;
  const t = r.getAttribute("data-theme");
  const a = r.getAttribute("data-accent");
  const g = r.getAttribute("data-ground");
  return {
    theme: (THEMES as readonly string[]).includes(t ?? "") ? (t as Theme) : DEFAULT_CHOICE.theme,
    accent: ACCENTS.some((x) => x.id === a) ? (a as AccentId) : DEFAULT_CHOICE.accent,
    ground: (GROUNDS as readonly string[]).includes(g ?? "") ? (g as string) : DEFAULT_CHOICE.ground,
  };
}

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

export function useThemeChoice(): Choice {
  const snap = useSyncExternalStore(subscribe, () => key(readDom()), () => SERVER_SNAPSHOT);
  const [theme, accent, ground] = snap.split("|");
  return { theme: theme as Theme, accent: accent as AccentId, ground };
}

/** Apply a new choice: <html> attributes + variables, localStorage, and the current URL (so it can be shared). */
export function setThemeChoice(next: Partial<Choice>) {
  if (!PITCH_MODE) return;
  const c = { ...readDom(), ...next };
  const r = document.documentElement;
  r.setAttribute("data-theme", c.theme);
  r.setAttribute("data-accent", c.accent);
  r.setAttribute("data-ground", c.ground);
  for (const [k, v] of Object.entries(resolveChoice(c))) r.style.setProperty(k, v);
  r.style.background = resolveChoice(c)["--ground"];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {
    /* private mode: the choice still applies to this page */
  }
  const url = new URL(window.location.href);
  for (const p of ["theme", "accent", "ground"]) url.searchParams.delete(p);
  if (c.theme !== DEFAULT_CHOICE.theme) url.searchParams.set("theme", c.theme);
  if (c.accent !== DEFAULT_CHOICE.accent) url.searchParams.set("accent", c.accent);
  if (c.theme === "light" && c.ground !== DEFAULT_CHOICE.ground) url.searchParams.set("ground", c.ground.slice(1));
  window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
  listeners.forEach((l) => l());
}
