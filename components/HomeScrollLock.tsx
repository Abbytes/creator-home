"use client";

import { useEffect } from "react";

export function HomeScrollLock() {
  useEffect(() => {
    const blockTouch = (e: TouchEvent) => {
      e.preventDefault();
    };
    const blockWheel = (e: WheelEvent) => {
      e.preventDefault();
    };
    document.addEventListener("touchmove", blockTouch, { passive: false });
    document.addEventListener("wheel", blockWheel, { passive: false });

    return () => {
      document.removeEventListener("touchmove", blockTouch);
      document.removeEventListener("wheel", blockWheel);
    };
  }, []);

  return null;
}
