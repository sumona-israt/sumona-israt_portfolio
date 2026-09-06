import type { Metadata } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects built and researched by ${siteConfig.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Work"
        title="Projects"
        description="A gallery of applied AI, computer vision, and software engineering work."
      />
      <ProjectsExplorer projects={projects} />
    </div>
  );
}
