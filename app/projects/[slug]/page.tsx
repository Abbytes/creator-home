import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ShareLink } from "@/components/ShareLink";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

const site = "https://abbytes.github.io";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  const isSparta = slug === "spartas-revenge";
  const description = isSparta
    ? "Scored trailer cut. Watch + tip if you want more."
    : project.oneLiner;
  const image = isSparta ? "/og-sparta.png" : "/og-home.png";
  const url = `${site}/projects/${slug}/`;
  return {
    title: project.title,
    description,
    openGraph: {
      title: project.title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: project.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const shareUrl = `${site}/projects/${slug}/`;

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/work"
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

      <div className="mt-6 flex flex-wrap gap-3">
        {project.playUrl && (
          <a
            href={project.playUrl}
            target={project.playUrl.startsWith("http") ? "_blank" : undefined}
            rel={project.playUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center rounded-full bg-studio-accent px-5 py-2.5 text-sm font-semibold text-studio-bg transition hover:bg-studio-accent/90"
          >
            {project.playLabel || "Play"}
          </a>
        )}
        <Link
          href="/tip"
          className="inline-flex items-center rounded-full border border-studio-accent/40 bg-studio-accent/10 px-5 py-2.5 text-sm font-medium text-studio-accent transition hover:bg-studio-accent/20"
        >
          Tip Ab Creative World
        </Link>
      </div>

      {project.videoUrl && (
        <div className="mt-8">
          <VideoPlayer
            src={project.videoUrl}
            title={project.title}
            muted={project.videoMuted !== false}
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/tip"
              className="text-sm font-medium text-studio-accent transition hover:text-studio-accent/80"
            >
              Tip if this hit →
            </Link>
            <ShareLink url={shareUrl} />
          </div>
          {slug === "spartas-revenge" && (
            <p className="mt-2 text-xs text-studio-muted">
              Bed by Sound Tech — tip keeps the next trailer scored.
            </p>
          )}
        </div>
      )}

      <div className="prose prose-invert prose-headings:tracking-tight prose-a:text-studio-accent mt-10 max-w-none">
        <MDXRemote source={project.content} />
      </div>

      <div className="mt-12 rounded-2xl border border-studio-border bg-studio-panel/60 p-6 text-center">
        <p className="text-sm text-studio-muted">
          Enjoyed this piece? Tips keep Ab Creative World creating.
        </p>
        <Link
          href="/tip"
          className="mt-4 inline-flex items-center rounded-full bg-studio-accent px-5 py-2.5 text-sm font-medium text-studio-bg transition hover:bg-studio-accent/90"
        >
          Tip the studio
        </Link>
      </div>
    </article>
  );
}
