import Link from "next/link";
import { APEX_URL } from "@/lib/apex";

export function LandingHero() {
  return (
    <section
      className="relative h-[100dvh] max-h-[100dvh] w-full overflow-hidden overscroll-none bg-black bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-ab-creative-world-v2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 42%",
      }}
    >
      <div
        className="lightning-flash pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,_rgba(255,160,40,0.45),_transparent_55%)]"
        aria-hidden
      />

      <svg
        className="lightning-bolt pointer-events-none absolute left-1/2 top-[18%] h-[42%] w-[28%] -translate-x-[70%] opacity-0"
        viewBox="0 0 80 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M42 0 L28 78 L46 78 L22 200 L58 92 L38 92 Z"
          fill="url(#boltGrad)"
        />
        <defs>
          <linearGradient id="boltGrad" x1="40" y1="0" x2="40" y2="200">
            <stop stopColor="#ffe29a" />
            <stop offset="0.45" stopColor="#ff8c00" />
            <stop offset="1" stopColor="#ff5a00" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="lightning-bolt-delay pointer-events-none absolute left-1/2 top-[20%] h-[36%] w-[22%] translate-x-[10%] opacity-0"
        viewBox="0 0 80 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M38 0 L48 70 L32 70 L55 200 L24 88 L42 88 Z"
          fill="url(#boltGrad2)"
        />
        <defs>
          <linearGradient id="boltGrad2" x1="40" y1="0" x2="40" y2="200">
            <stop stopColor="#fff1c2" />
            <stop offset="0.5" stopColor="#ff9d1a" />
            <stop offset="1" stopColor="#ff6a00" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-20 flex h-full max-w-[20rem] flex-col justify-start px-4 pt-[5.75rem] sm:max-w-md sm:px-8 sm:pt-24">
        <p className="hero-fade-up rounded-xl bg-black/55 px-3 py-2 text-sm leading-relaxed text-white/95 backdrop-blur-sm sm:text-base">
          Studio home for trailers, music, and creative drops — tip if you want
          to keep the work going.
        </p>
        <div className="hero-fade-up-delay mt-3 flex max-w-[17.5rem] flex-wrap gap-2 sm:max-w-none sm:gap-3">
          <Link
            href="/tip"
            className="tip-glow-pulse inline-flex min-h-11 items-center rounded-full bg-studio-accent px-5 py-2 text-sm font-semibold text-studio-bg shadow-glow transition hover:bg-studio-accent/90"
            style={{ touchAction: "manipulation" }}
          >
            Tip
          </Link>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center rounded-full border border-white/35 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-studio-accent/60 hover:bg-studio-accent/15"
            style={{ touchAction: "manipulation" }}
          >
            Browse work
          </Link>
          <Link
            href="/projects/spartas-revenge"
            className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/5 px-5 py-2 text-sm text-white/85 backdrop-blur transition hover:border-white/50 hover:text-white"
            style={{ touchAction: "manipulation" }}
          >
            Sparta's Revenge
          </Link>
          <a
            href={APEX_URL}
            className="inline-flex min-h-11 items-center rounded-full border border-white/35 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-studio-accent/60 hover:bg-studio-accent/15"
            style={{ touchAction: "manipulation" }}
          >
            Play APEX
          </a>
          <Link
            href="/aether/"
            className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/5 px-5 py-2 text-sm text-white/85 backdrop-blur transition hover:border-white/50 hover:text-white"
            style={{ touchAction: "manipulation" }}
          >
            Aether
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/70 to-transparent px-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-28">
        <h1 className="text-center font-serif font-light text-[#ead9b4]">
          <span className="block text-[clamp(2.6rem,13vw,5.2rem)] leading-none tracking-[0.28em]">
            AB
          </span>
          <span className="mt-2 block whitespace-nowrap text-[clamp(0.78rem,4.6vw,1.45rem)] uppercase tracking-[0.34em]">
            Creative World
          </span>
        </h1>
      </div>
    </section>
  );
}
