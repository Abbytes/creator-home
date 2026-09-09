import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-studio-border bg-studio-panel p-5 transition hover:border-studio-accent/40 hover:bg-studio-panel/80"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {(project.tags || []).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-studio-border bg-studio-bg px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-studio-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-studio-text group-hover:text-studio-accent transition-colors">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-studio-muted">
        {project.oneLiner}
      </p>
      <span className="mt-4 text-xs uppercase tracking-[0.15em] text-studio-muted group-hover:text-studio-text transition-colors">
        View project →
      </span>
    </Link>
  );
}
