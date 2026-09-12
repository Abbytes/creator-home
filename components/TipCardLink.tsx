"use client";

import type { MouseEvent } from "react";
import { playTipSuccessSting } from "@/lib/playTipSuccessSting";

const STRIPE_TIP_URL =
  "https://donate.stripe.com/5kQeVfbgPamwftS8xgfQI00";

export function TipCardLink() {
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    playTipSuccessSting();
    window.setTimeout(() => {
      window.location.assign(STRIPE_TIP_URL);
    }, 450);
  }

  return (
    <a
      href={STRIPE_TIP_URL}
      onClick={onClick}
      className="relative z-20 mt-4 flex min-h-12 w-full items-center justify-center rounded-xl bg-studio-text px-4 py-3 text-sm font-semibold text-studio-bg active:opacity-80"
    >
      Tip with card
    </a>
  );
}
