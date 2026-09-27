import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "800"], variable: "--fm-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--fm-serif" });
// The rotating hero badge is set in Instrument Sans.
const badge = Instrument_Sans({ subsets: ["latin"], weight: "600", variable: "--fm-badge" });

export const metadata: Metadata = {
  title: "Freaky Mack Studios — Film production house",
  description:
    "A film production house born from six years of advertising — films for brands, music, fashion and our own stories.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable} ${badge.variable}`}>
      <body>{children}</body>
    </html>
  );
}
