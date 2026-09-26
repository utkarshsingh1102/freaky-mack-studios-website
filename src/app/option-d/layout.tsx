import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { OptionSwitcher } from "@/shared/OptionSwitcher";

const archivo = Archivo({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--d-sans" });

export const metadata: Metadata = { title: "Freaky Mack Studios — Option D · Production squad" };

export default function OptionDLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={archivo.variable}>
      {children}
      <OptionSwitcher current="D" />
    </div>
  );
}
