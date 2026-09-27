import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeHead } from "@/shared/theme/ThemeHead";
import { DEFAULT_CHOICE, resolveChoice } from "@/shared/theme/theme";
import { ThemePicker } from "@/shared/theme/ThemePicker";
import { SITE_URL } from "@/shared/config";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "800"], variable: "--fm-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--fm-serif" });
// The rotating hero badge is set in Instrument Sans.
const badge = Instrument_Sans({ subsets: ["latin"], weight: "600", variable: "--fm-badge" });

const DESCRIPTION =
  "A film production house born from six years of advertising — films for brands, music, fashion and our own stories.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Freaky Mack Studios — Film production house", template: "%s — Freaky Mack Studios" },
  description: DESCRIPTION,
  openGraph: { siteName: "Freaky Mack Studios", type: "website", locale: "en_IN", description: DESCRIPTION },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: resolveChoice(DEFAULT_CHOICE)["--ground"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The server renders the default look (so it also holds without JavaScript); the theme head script
    // swaps in a pitch choice before paint, so <html> attributes may intentionally differ from the server render.
    <html
      lang="en"
      data-theme={DEFAULT_CHOICE.theme}
      data-accent={DEFAULT_CHOICE.accent}
      data-ground={DEFAULT_CHOICE.ground}
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${serif.variable} ${badge.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeHead />
        {/* Scroll reveals start hidden; without JavaScript they never run, so show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important}[data-reveal="move"]{transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <ThemePicker />
      </body>
    </html>
  );
}
