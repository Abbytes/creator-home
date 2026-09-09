import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { VideoPlayer } from "@/components/VideoPlayer";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/#projects"
        className="text-sm text-studio-muted transition hover:text-studio-accent"
      >
        ← All projects
      </Link>

      <div className="mt-6 flex flex-wrap gap-2">
        {(project.tags || []).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-studio-accent/30 bg-studio-accent/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-studio-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-studio-muted">{project.oneLiner}</p>
      {project.credit && (
        <p className="mt-2 text-sm text-studio-muted/80">{project.credit}</p>
      )}

      {project.videoUrl && (
        <div className="mt-8">
          <VideoPlayer src={project.videoUrl} title={project.title} />
        </div>
      )}

      <div className="prose prose-invert prose-headings:tracking-tight prose-a:text-studio-accent mt-10 max-w-none">
        <MDXRemote source={project.content} />
      </div>
    </article>
  );
}
