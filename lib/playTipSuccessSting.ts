/** Browser-only tip-success sting. Safe to call from click handlers; fails silent. */
export function playTipSuccessSting(): void {
  if (typeof window === "undefined") return;
  try {
    const audio = new Audio("/audio/tip-success.mp3");
    audio.volume = 0.7;
    void audio.play().catch(() => {});
  } catch {
    // ignore — autoplay / missing file
  }
}
