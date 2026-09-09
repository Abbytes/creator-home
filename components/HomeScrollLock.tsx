"use client";

import { useEffect } from "react";

/** Hard-lock document scroll on Home (iOS-safe) + hide scrollbar. */
export function HomeScrollLock() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const main = document.querySelector("main");

    html.classList.add("home-lock");

    const prev = {
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      mainOverflow: main instanceof HTMLElement ? main.style.overflow : "",
    };

    body.style.position = "fixed";
    body.style.top = "0";
    body.style.width = "100%";
    if (main instanceof HTMLElement) {
      main.style.overflow = "hidden";
    }

    return () => {
      html.classList.remove("home-lock");
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.width = prev.bodyWidth;
      if (main instanceof HTMLElement) {
        main.style.overflow = prev.mainOverflow;
      }
    };
  }, []);

  return null;
}
