import { Hero } from "@/components/Hero";
import { LandingHero } from "@/components/LandingHero";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects, getFeaturedProject } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProject();
  const projects = getAllProjects();

  return (
    <>
      <LandingHero />

      {featured ? <Hero project={featured} /> : null}

      <section id="projects" className="border-t border-studio-border/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-studio-muted">
                Selected work
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Projects
              </h2>
            </div>
          </div>

          {projects.length === 0 ? (
            <p className="text-studio-muted">No projects yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
