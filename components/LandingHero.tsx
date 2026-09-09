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
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/40 to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(11,12,15,0.55)_100%)]" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 sm:min-h-[78vh] sm:px-6 sm:pb-16">
        {/* Title is baked into the art; keep a live sr-only / mobile fallback for SEO */}
        <h1 className="sr-only">Ab Creative World</h1>
        <p className="max-w-md text-sm leading-relaxed text-studio-text/90 sm:text-base">
          Studio home for trailers, music, and creative drops — tip if you want
          to keep the work going.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/tip"
            className="inline-flex items-center rounded-full bg-studio-accent px-6 py-2.5 text-sm font-semibold text-studio-bg shadow-glow transition hover:bg-studio-accent/90"
          >
            Tip
          </Link>
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-white/20 bg-black/35 px-6 py-2.5 text-sm font-medium text-studio-text backdrop-blur transition hover:border-studio-accent/50 hover:text-studio-accent"
          >
            Browse work
          </a>
          <Link
            href="/projects/spartas-revenge"
            className="inline-flex items-center rounded-full border border-white/15 bg-black/25 px-6 py-2.5 text-sm text-studio-muted backdrop-blur transition hover:border-studio-muted hover:text-studio-text"
          >
            Sparta&apos;s Revenge
          </Link>
        </div>
      </div>
    </section>
  );
}
