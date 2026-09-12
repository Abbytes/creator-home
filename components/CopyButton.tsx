"use client";

import { useState } from "react";
import { playTipSuccessSting } from "@/lib/playTipSuccessSting";

export function CopyButton({
  value,
  ariaLabel,
  playStingOnCopy = false,
}: {
  value: string;
  ariaLabel: string;
  /** Play tip-success sting after a successful copy (Interac address only). */
  playStingOnCopy?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (playStingOnCopy) playTipSuccessSting();
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      if (playStingOnCopy) playTipSuccessSting();
      window.setTimeout(() => setCopied(false), 1600);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={ariaLabel}
      className="shrink-0 rounded-lg border border-studio-border bg-studio-panel px-3 text-xs font-medium text-studio-text transition hover:border-studio-accent/40 hover:text-studio-accent"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
