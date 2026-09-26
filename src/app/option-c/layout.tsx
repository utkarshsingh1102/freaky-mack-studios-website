import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { OptionSwitcher } from "@/shared/OptionSwitcher";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--c-sans" });

export const metadata: Metadata = { title: "Freaky Mack Studios — Option C · Cinematic" };

export default function OptionCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={sans.variable}>
      {children}
      <OptionSwitcher current="C" />
    </div>
  );
}
