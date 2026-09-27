import type { Metadata } from "next";
import Link from "next/link";
import { LegacyRedirect } from "./LegacyRedirect";

// Old pitch links (/option-a/ … /option-d/) now land on the homepage.
export const dynamicParams = false;

export function generateStaticParams() {
  return ["option-a", "option-b", "option-c", "option-d"].map((legacy) => ({ legacy }));
}

export const metadata: Metadata = { title: "Freaky Mack Studios", robots: { index: false } };

export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/" />
      <LegacyRedirect />
      <p style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
        This page has moved. <Link href="/">Go to the homepage →</Link>
      </p>
    </>
  );
}
