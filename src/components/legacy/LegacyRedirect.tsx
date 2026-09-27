"use client";

import { useEffect } from "react";

export function LegacyRedirect() {
  useEffect(() => {
    window.location.replace("/");
  }, []);
  return null;
}
