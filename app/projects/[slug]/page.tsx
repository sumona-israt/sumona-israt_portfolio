import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
    },
  };
}

const detailSections = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "methodology", label: "Methodology" },
  { key: "architecture", label: "Architecture" },
] as const;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((entry) => entry.slug === slug);
  const project = projects[index];

  if (!project) notFound();

  const prevProject = index > 0 ? projects[index - 1] : undefined;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
      <ProjectHero project={project} />

      <div className="flex max-w-3xl flex-col gap-12">
        {detailSections.map(({ key, label }) => {
          const value = project[key];
          if (!value) return null;
          return (
            <AnimatedSection key={key} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight">{label}</h2>
              <p className="text-muted-foreground">{value}</p>
            </AnimatedSection>
          );
        })}

        {project.features.length > 0 ? (
          <AnimatedSection className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">Features</h2>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-muted-foreground">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </AnimatedSection>
        ) : null}

        {project.challenges.length > 0 ? (
          <AnimatedSection className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">Challenges</h2>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-muted-foreground">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </AnimatedSection>
        ) : null}

        {project.results ? (
          <AnimatedSection className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">Results</h2>
            <p className="text-muted-foreground">{project.results}</p>
          </AnimatedSection>
        ) : null}

        <ProjectGallery screenshots={project.screenshots} />
      </div>

      {prevProject || nextProject ? (
        <nav className="flex items-center justify-between border-t border-border pt-8">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Previous Project
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Next Project
              <ArrowRight className="size-4" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      ) : null}
    </div>
  );
}
