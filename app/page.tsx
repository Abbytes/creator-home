import { LandingHero } from "@/components/LandingHero";
import { HomeScrollLock } from "@/components/HomeScrollLock";

export default function HomePage() {
  return (
    <>
      <HomeScrollLock />
      <div className="h-[100dvh] max-h-[100dvh] overflow-hidden">
        <LandingHero />
      </div>
    </>
  );
}
