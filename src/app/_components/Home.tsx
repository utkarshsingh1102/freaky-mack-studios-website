"use client";

import { useEffect, useMemo, useState, useSyncExternalStore, type CSSProperties } from "react";
import { PITCH_MODE } from "@/shared/config";
import s from "../home.module.css";
import { ClientScatter } from "./ClientScatter";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { People } from "./People";
import { Podcast } from "./Podcast";
import { Reel } from "./Reel";
import { SentenceBuilder } from "./SentenceBuilder";
import { ServicesTicker } from "./ServicesTicker";
import { Testimonials } from "./Testimonials";
import { TheTurn } from "./TheTurn";
import {
  ACCENTS,
  DARK_GROUND,
  DEFAULT_ACCENT,
  DEFAULT_GROUND,
  DEFAULT_THEME,
  GROUNDS,
  THEMES,
  type AccentId,
  type Theme,
} from "./theme";
import { ThemePicker } from "./ThemePicker";
import { WorkPreview } from "./WorkPreview";

type Choice = { theme?: Theme; accent?: AccentId; ground?: string };

/** Pitch links: /?theme=dark&accent=grey opens straight into that variant. */
function parseChoice(search: string): Choice {
  if (!PITCH_MODE) return {};
  const q = new URLSearchParams(search);
  const t = q.get("theme");
  const a = q.get("accent");
  const g = q.get("ground") && `#${q.get("ground")}`;
  return {
    theme: t && (THEMES as readonly string[]).includes(t) ? (t as Theme) : undefined,
    accent: a && ACCENTS.some((x) => x.id === a) ? (a as AccentId) : undefined,
    ground: g && (GROUNDS as readonly string[]).includes(g) ? g : undefined,
  };
}
const subscribe = (cb: () => void) => {
  window.addEventListener("popstate", cb);
  return () => window.removeEventListener("popstate", cb);
};

/**
 * Freaky Mack Studios homepage (Option A · Story).
 * Light / Dark theme via data-theme tokens in home.module.css; one accent CSS variable (--accent) drives every highlight.
 */
export function Home() {
  // The URL is read as an external store: the server render uses the defaults, the client then applies the link.
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const fromUrl = useMemo(() => parseChoice(search), [search]);
  const [picked, setPicked] = useState<Choice>({});
  const [reelOpen, setReelOpen] = useState(false);
  const toggleReel = () => setReelOpen((o) => !o);

  const theme = picked.theme ?? fromUrl.theme ?? DEFAULT_THEME;
  const accentId = picked.accent ?? fromUrl.accent ?? DEFAULT_ACCENT;
  const ground = picked.ground ?? fromUrl.ground ?? DEFAULT_GROUND;

  const accent = ACCENTS.find((x) => x.id === accentId) ?? ACCENTS[0];
  const pageGround = theme === "dark" ? DARK_GROUND : ground;
  const accentText = theme === "dark" && "textOnDark" in accent ? accent.textOnDark : accent.accent;

  // Keep the browser canvas (over-scroll, iOS bounce) the same colour as the page.
  useEffect(() => {
    document.documentElement.style.background = pageGround;
  }, [pageGround]);

  const choose = (next: Choice) => {
    const c = { theme, accent: accentId, ground, ...next };
    setPicked(c);
    const q = new URLSearchParams();
    if (c.theme !== DEFAULT_THEME) q.set("theme", c.theme);
    if (c.accent !== DEFAULT_ACCENT) q.set("accent", c.accent);
    if (c.theme === "light" && c.ground !== DEFAULT_GROUND) q.set("ground", c.ground.slice(1));
    const qs = q.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  };

  const vars = {
    "--accent": accent.accent,
    "--on-accent": accent.onAccent,
    "--accent-text": accentText,
    "--ground": pageGround,
  } as CSSProperties;

  return (
    <div data-theme={theme} className={`${s.root} min-h-screen overflow-x-clip transition-colors duration-300`} style={vars}>
      <div className="relative mx-auto flex max-w-[1440px] flex-col">
        <Nav />
        <Hero reelOpen={reelOpen} onToggleReel={toggleReel} />
        <Reel open={reelOpen} onToggle={toggleReel} />
        <WorkPreview />
        <ClientScatter />
        <Testimonials />
        <SentenceBuilder />
        <ServicesTicker />
        <TheTurn />
        <Podcast />
        <People />
        <Contact />
        <Footer />
      </div>
      <ThemePicker
        theme={theme}
        accentId={accentId}
        ground={ground}
        onTheme={(t) => choose({ theme: t })}
        onAccent={(a) => choose({ accent: a })}
        onGround={(g) => choose({ ground: g })}
      />
    </div>
  );
}
