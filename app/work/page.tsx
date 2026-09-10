import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
      <p className="text-xs uppercase tracking-[0.2em] text-studio-muted">
        Selected work
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Work
      </h1>
      <p className="mt-3 max-w-xl text-studio-muted">
        Trailers, scored cuts, and interactive drops.
      </p>

      {projects.length === 0 ? (
        <p className="mt-10 text-studio-muted">No projects yet.</p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
