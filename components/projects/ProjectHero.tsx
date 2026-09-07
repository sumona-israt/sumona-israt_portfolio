import { ExternalLink } from "lucide-react";

import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { BloomButton } from "@/components/shared/BloomButton";
import { TechBadge } from "@/components/shared/TechBadge";
import { GitHubIcon } from "@/components/shared/icons";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6 border-b border-border pb-10">
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span className="rounded-full border border-border px-3 py-1">{project.category}</span>
        {project.year ? <span>{project.year}</span> : null}
      </div>
      <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {project.title}
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
      {project.github || project.live ? (
        <div className="flex flex-wrap gap-3 pt-2">
          {project.github ? (
            <BloomButton>
              <Button asChild variant="outline">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GitHubIcon className="size-4" />
                  View Code
                </a>
              </Button>
            </BloomButton>
          ) : null}
          {project.live ? (
            <BloomButton>
              <Button asChild>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
              </Button>
            </BloomButton>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
