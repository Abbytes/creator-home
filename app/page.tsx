import { LandingHero } from "@/components/LandingHero";
import { HomeScrollLock } from "@/components/HomeScrollLock";

export default function HomePage() {
  return (
    <>
      {/* Keep the hero locked, but never swallow taps on iOS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body {
              height: 100% !important;
              max-height: 100dvh !important;
              overflow: hidden !important;
              overscroll-behavior: none !important;
              touch-action: manipulation !important;
              width: 100% !important;
              scrollbar-width: none !important;
            }
            html::-webkit-scrollbar, body::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
            main { overflow: hidden !important; height: 100% !important; max-height: 100dvh !important; }
            footer { display: none !important; }
            a, button, [role="button"] { touch-action: manipulation !important; pointer-events: auto !important; cursor: pointer !important; }
          `,
        }}
      />
      <HomeScrollLock />
      <div className="fixed inset-0 z-0 h-[100dvh] w-screen overflow-hidden overscroll-none">
        <LandingHero />
      </div>
    </>
  );
}
