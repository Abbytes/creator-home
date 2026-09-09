import { LandingHero } from "@/components/LandingHero";
import { HomeScrollLock } from "@/components/HomeScrollLock";

export default function HomePage() {
  return (
    <>
      <HomeScrollLock />
      <div className="fixed inset-0 z-0 overflow-hidden overscroll-none">
        <LandingHero />
      </div>
    </>
  );
}
