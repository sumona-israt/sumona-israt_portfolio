import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  showComingSoon?: boolean;
}

export function ProjectGrid({ projects, showComingSoon = false }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
        No projects match your filters yet.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
      {showComingSoon ? (
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          <span className="font-medium text-foreground">More projects coming soon</span>
          <span>New work gets added here as it&apos;s finished.</span>
        </div>
      ) : null}
    </div>
  );
}
