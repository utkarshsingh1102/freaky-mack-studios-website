"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "./config";

export type Enquiry = { name: string; email: string; brief: string; format?: string };
export type EnquiryStatus = "idle" | "sending" | "sent" | "error";

/**
 * Sends an enquiry to freakymackstudios@gmail.com.
 * With NEXT_PUBLIC_FORMSPREE_ENDPOINT set (e.g. https://formspree.io/f/xxxx) it posts there;
 * otherwise it opens a pre-filled email so nothing is lost on a static deploy.
 */
export async function submitEnquiry(e: Enquiry): Promise<void> {
  const subject = `New enquiry${e.format ? ` — ${e.format}` : ""}${e.name ? ` from ${e.name}` : ""}`;
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...e, _subject: subject, _replyto: e.email }),
    });
    if (!res.ok) throw new Error(`Enquiry failed (${res.status})`);
    return;
  }
  const body = [
    e.format ? `Format: ${e.format}` : "",
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    "",
    e.brief,
  ]
    .filter((l, i) => l !== "" || i > 2)
    .join("\n");
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Form wiring shared by every option; each option styles its own form. Fields: name, email, brief, format. */
export function useEnquiryForm(extra?: { format?: string }) {
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      await submitEnquiry({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        brief: String(data.get("brief") ?? ""),
        format: extra?.format ?? (data.get("format") ? String(data.get("format")) : undefined),
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };
  const message =
    status === "sending"
      ? "Sending…"
      : status === "sent"
        ? "Thanks — we’ll be in touch."
        : status === "error"
          ? `Something went wrong. Email us at ${CONTACT.email}.`
          : "";
  return { status, onSubmit, message };
}
