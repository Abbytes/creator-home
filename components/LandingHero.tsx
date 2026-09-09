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
        className="object-cover object-center brightness-110 contrast-105"
        sizes="100vw"
      />
      {/* Light bottom fade only — keep the art readable */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-studio-bg/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 sm:min-h-[78vh] sm:px-6 sm:pb-16">
        <h1 className="sr-only">Ab Creative World</h1>
        <p className="max-w-md rounded-xl bg-black/25 px-3 py-2 text-sm leading-relaxed text-white/95 backdrop-blur-sm sm:text-base">
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
