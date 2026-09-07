import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import {
  datasets,
  methodologies,
  publications,
  researchInterests,
  researchPipeline,
  researchTimeline,
} from "@/data/research";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TechBadge } from "@/components/shared/TechBadge";
import { ResearchCard } from "@/components/research/ResearchCard";
import { ResearchTimeline } from "@/components/research/ResearchTimeline";
import { ResearchPipeline } from "@/components/research/ResearchPipeline";

export const metadata: Metadata = {
  title: "Research",
  description: `Research interests, publications, and methodology from ${siteConfig.name}.`,
};

export default function ResearchPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Research"
        title="Research"
        description="Studying visual representation learning under limited supervision — from academic publication to final year project work."
      />

      <AnimatedSection as="section" className="flex flex-col gap-6">
        <SectionHeading title="Research Interests" />
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <TechBadge key={interest} label={interest} className="text-sm" />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="flex flex-col gap-6">
        <SectionHeading title="Publications" />
        <div className={cn("grid max-w-3xl gap-4", publications.length > 1 && "sm:grid-cols-2")}>
          {publications.map((publication) => (
            <ResearchCard key={publication.id} publication={publication} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="flex flex-col gap-6">
        <SectionHeading
          title="Research Pipeline"
          description="How a research question moves from problem to result in this line of work."
        />
        <ResearchPipeline stages={researchPipeline} />
      </AnimatedSection>

      <AnimatedSection as="section" className="grid gap-10 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <SectionHeading title="Methodologies" />
          <div className="flex flex-col gap-4">
            {methodologies.map((methodology) => (
              <div key={methodology.id}>
                <h3 className="text-sm font-semibold tracking-tight">{methodology.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{methodology.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SectionHeading title="Datasets" />
          <div className="flex flex-col gap-4">
            {datasets.map((dataset) => (
              <div key={dataset.id}>
                <h3 className="text-sm font-semibold tracking-tight">{dataset.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{dataset.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="flex flex-col gap-8">
        <SectionHeading title="Timeline" />
        <div className="max-w-3xl">
          <ResearchTimeline entries={researchTimeline} />
        </div>
      </AnimatedSection>
    </div>
  );
}
