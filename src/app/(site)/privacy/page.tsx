import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { Body, SUBTITLE, TOC } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: SUBTITLE,
  alternates: { canonical: "/privacy" },
};

/** design/boards/Privacy.dc.html */
export default function PrivacyPage() {
  return (
    <LegalPage lead="Privacy" accent="policy" subtitle={SUBTITLE} toc={TOC}>
      <Body />
    </LegalPage>
  );
}
