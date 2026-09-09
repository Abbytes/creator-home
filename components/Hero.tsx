import Link from "next/link";
import type { Project } from "@/lib/projects";
import { VideoPlayer } from "./VideoPlayer";

export function Hero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,168,124,0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-studio-accent/30 bg-studio-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-studio-accent">
            Featured
          </span>
          {(project.tags || []).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-studio-border px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-studio-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-studio-text sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-studio-muted">
              {project.oneLiner}
            </p>
            {project.credit && (
              <p className="mt-3 text-sm text-studio-muted/80">{project.credit}</p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center rounded-full bg-studio-accent px-5 py-2.5 text-sm font-medium text-studio-bg transition hover:bg-studio-accent/90"
              >
                Open project
              </Link>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full border border-studio-border px-5 py-2.5 text-sm text-studio-muted transition hover:border-studio-muted hover:text-studio-text"
              >
                Browse all work
              </a>
            </div>
          </div>

          {project.videoUrl && (
            <div className="w-full">
              <VideoPlayer src={project.videoUrl} title={project.title} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
