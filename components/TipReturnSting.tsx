"use client";

import { useEffect } from "react";
import { playTipSuccessSting } from "@/lib/playTipSuccessSting";

/**
 * Plays the tip-success sting when Stripe (or another flow) returns to
 * /tip/?tipped=1 — or ?tip=success. Fails silent if autoplay blocks.
 * Set Stripe Payment Link after_completion redirect to that URL.
 */
export function TipReturnSting() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tipped =
      params.get("tipped") === "1" || params.get("tip") === "success";
    if (!tipped) return;

    playTipSuccessSting();

    const url = new URL(window.location.href);
    url.searchParams.delete("tipped");
    url.searchParams.delete("tip");
    const clean = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState({}, "", clean);
  }, []);

  return null;
}
