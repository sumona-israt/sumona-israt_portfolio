import type { ComponentType } from "react";
import Link from "next/link";
import { ArrowUpRight, Brain, Code2, Eye, FlaskConical, Sparkles, Terminal } from "lucide-react";

import type { Project, ProjectCategory } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/shared/TechBadge";

const categoryIcon: Record<ProjectCategory, ComponentType<{ className?: string }>> = {
  "AI / ML": Brain,
  "Computer Vision": Eye,
  "Web Development": Code2,
  Research: FlaskConical,
  "Software Engineering": Terminal,
  Other: Sparkles,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category];
  const visibleTech = project.technologies.slice(0, 4);
  const remaining = project.technologies.length - visibleTech.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-transparent card-surface bg-card transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-muted/40 to-transparent">
        <Icon className="size-12 text-primary/50 transition-transform group-hover:scale-110" />
        {project.featured ? (
          <Badge className="absolute top-3 left-3">Featured</Badge>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{project.category}</span>
          {project.year ? <span>{project.year}</span> : null}
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-balance">{project.title}</h3>
        <p className="line-clamp-3 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {visibleTech.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
          {remaining > 0 ? <TechBadge label={`+${remaining} more`} /> : null}
        </div>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
          View case study
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
