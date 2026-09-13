import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  oneLiner: string;
  tags?: string[];
  featured?: boolean;
  videoUrl?: string;
  videoMuted?: boolean;
  credit?: string;
  playUrl?: string;
  playLabel?: string;
  order?: number;
  date?: string;
};

export type Project = ProjectFrontmatter & {
  content: string;
};

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  return fs
    .readdirSync(projectsDirectory)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getProjectBySlug(slug: string): Project | null {
  const mdPath = path.join(projectsDirectory, `${slug}.md`);
  const mdxPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fullPath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;
  if (!fullPath) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as ProjectFrontmatter;

  return {
    title: fm.title,
    slug: fm.slug || slug,
    oneLiner: fm.oneLiner || "",
    tags: fm.tags || [],
    featured: Boolean(fm.featured),
    videoUrl: fm.videoUrl,
    videoMuted: fm.videoMuted !== false,
    credit: fm.credit,
    playUrl: fm.playUrl,
    playLabel: fm.playLabel,
    order: fm.order ?? 999,
    date: fm.date,
    content,
  };
}

export function getAllProjects(): Project[] {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== null)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function getFeaturedProject(): Project | null {
  const all = getAllProjects();
  return all.find((p) => p.featured) || all[0] || null;
}
