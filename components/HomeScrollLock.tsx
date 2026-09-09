"use client";

import { useEffect } from "react";

/** Hard-lock document scroll on Home (iOS-safe). */
export function HomeScrollLock() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const main = document.querySelector("main");

    const prev = {
      htmlOverflow: html.style.overflow,
      htmlHeight: html.style.height,
      bodyOverflow: body.style.overflow,
      bodyHeight: body.style.height,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      bodyTouch: body.style.touchAction,
      mainOverflow: main instanceof HTMLElement ? main.style.overflow : "",
    };

    html.style.overflow = "hidden";
    html.style.height = "100%";
    body.style.overflow = "hidden";
    body.style.height = "100%";
    body.style.position = "fixed";
    body.style.top = "0";
    body.style.width = "100%";
    body.style.touchAction = "none";
    if (main instanceof HTMLElement) {
      main.style.overflow = "hidden";
    }

    return () => {
      html.style.overflow = prev.htmlOverflow;
      html.style.height = prev.htmlHeight;
      body.style.overflow = prev.bodyOverflow;
      body.style.height = prev.bodyHeight;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.width = prev.bodyWidth;
      body.style.touchAction = prev.bodyTouch;
      if (main instanceof HTMLElement) {
        main.style.overflow = prev.mainOverflow;
      }
    };
  }, []);

  return null;
}
