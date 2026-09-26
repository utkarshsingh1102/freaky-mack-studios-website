import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { OptionSwitcher } from "@/shared/OptionSwitcher";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "800"], variable: "--a-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--a-serif" });
// The rotating hero badge on the board is set in Instrument Sans.
const badge = Instrument_Sans({ subsets: ["latin"], weight: "600", variable: "--a-badge" });

export const metadata: Metadata = { title: "Freaky Mack Studios — Option A · Story" };

export default function OptionALayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${sans.variable} ${serif.variable} ${badge.variable}`}>
      {children}
      <OptionSwitcher current="A" />
    </div>
  );
}
