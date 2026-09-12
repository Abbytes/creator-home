"use client";

import { useState } from "react";

export function ShareLink({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/85 transition hover:border-studio-accent/50 hover:text-studio-accent"
    >
      {copied ? "Link copied" : "Share this clip"}
    </button>
  );
}
