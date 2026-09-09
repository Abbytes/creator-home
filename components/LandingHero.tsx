import Image from "next/image";
import Link from "next/link";

export function LandingHero() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden sm:min-h-[78vh]">
      <Image
        src="/hero-ab-creative-world.png"
        alt="Ab Creative World — dragon over a glowing city"
        fill
        priority
        className="hero-kenburns object-cover object-center brightness-110 contrast-105"
        sizes="100vw"
      />

      {/* Ambient lightning flash */}
      <div
        className="lightning-flash absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,_rgba(255,160,40,0.55),_transparent_55%)]"
        aria-hidden
      />

      {/* Orange lightning bolts from upper/center (dragon eyes zone) */}
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
        className="lightning-bolt-delay pointer-events-none absolute left-1/2 top-[20%] h-[36%] w-[22%] -translate-x-[-10%] opacity-0"
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

      {/* Soft top fade so CTAs stay readable without covering the center title */}
      <div className="absolute inset-x-0 top-0 z-10 h-44 bg-gradient-to-b from-studio-bg/70 to-transparent" />

      {/* Tip + description sit ABOVE the baked-in AB CREATIVE WORLD title */}
      <div className="relative z-20 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-start px-4 pb-12 pt-24 sm:min-h-[78vh] sm:px-6 sm:pt-28">
        <h1 className="sr-only">Ab Creative World</h1>
        <p className="hero-fade-up max-w-md rounded-xl bg-black/35 px-3 py-2 text-sm leading-relaxed text-white/95 backdrop-blur-sm sm:text-base">
          Studio home for trailers, music, and creative drops — tip if you want
          to keep the work going.
        </p>
        <div className="hero-fade-up-delay mt-5 flex flex-wrap gap-3">
          <Link
            href="/tip"
            className="tip-glow-pulse inline-flex items-center rounded-full bg-studio-accent px-6 py-2.5 text-sm font-semibold text-studio-bg shadow-glow transition hover:bg-studio-accent/90"
          >
            Tip
          </Link>
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:border-studio-accent/60 hover:bg-studio-accent/15"
          >
            Browse work
          </a>
          <Link
            href="/projects/spartas-revenge"
            className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-sm text-white/85 backdrop-blur transition hover:border-white/50 hover:text-white"
          >
            Sparta&apos;s Revenge
          </Link>
        </div>
      </div>
    </section>
  );
}
