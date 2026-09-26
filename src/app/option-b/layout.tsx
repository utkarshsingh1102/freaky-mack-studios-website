import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { OptionSwitcher } from "@/shared/OptionSwitcher";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "800"], variable: "--b-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--b-serif" });

export const metadata: Metadata = { title: "Freaky Mack Studios — Option B · Split & filmstrip" };

export default function OptionBLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${sans.variable} ${serif.variable}`}>
      {children}
      <OptionSwitcher current="B" />
    </div>
  );
}
