import Image from "next/image";
import Link from "next/link";

export function LandingHero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden overscroll-none bg-black">
      {/* Cinematic frame: full art visible (contain) so portrait doesn't force scroll */}
      <Image
        src="/hero-ab-creative-world.png"
        alt="Ab Creative World — dragon over a glowing city"
        fill
        priority
        className="hero-kenburns object-contain object-center brightness-110 contrast-105"
        sizes="100vw"
        draggable={false}
      />

      <div
        className="lightning-flash absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,_rgba(255,160,40,0.45),_transparent_55%)]"
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

      {/* Left cluster like Adam's shot — Tip / Browse / Sparta */}
      <div className="absolute left-0 top-0 z-20 flex h-full max-w-md flex-col justify-center px-4 pt-16 sm:px-8 sm:pt-12">
        <h1 className="sr-only">Ab Creative World</h1>
        <p className="hero-fade-up rounded-xl bg-black/45 px-3 py-2 text-sm leading-relaxed text-white/95 backdrop-blur-sm sm:text-base">
          Studio home for trailers, music, and creative drops — tip if you want
          to keep the work going.
        </p>
        <div className="hero-fade-up-delay mt-4 flex flex-wrap gap-3">
          <Link
            href="/tip"
            className="tip-glow-pulse inline-flex min-h-11 items-center rounded-full bg-studio-accent px-6 py-2.5 text-sm font-semibold text-studio-bg shadow-glow transition hover:bg-studio-accent/90"
          >
            Tip
          </Link>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center rounded-full border border-white/35 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:border-studio-accent/60 hover:bg-studio-accent/15"
          >
            Browse work
          </Link>
          <Link
            href="/projects/spartas-revenge"
            className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-sm text-white/85 backdrop-blur transition hover:border-white/50 hover:text-white"
          >
            Sparta&apos;s Revenge
          </Link>
        </div>
      </div>
    </section>
  );
}
