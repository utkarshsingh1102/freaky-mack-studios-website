import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { Body, SUBTITLE, TOC } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms of use",
  description: SUBTITLE,
  alternates: { canonical: "/terms" },
};

/** design/boards/Terms.dc.html */
export default function TermsPage() {
  return (
    <LegalPage lead="Terms of" accent="use" subtitle={SUBTITLE} toc={TOC}>
      <Body />
    </LegalPage>
  );
}
