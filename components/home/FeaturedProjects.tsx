import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Button } from "@/components/ui/button";
import { BloomButton } from "@/components/shared/BloomButton";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);
  const list = featured.length > 0 ? featured : projects.slice(0, 3);

  return (
    <section className="border-t border-border bg-muted/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A closer look at the projects I've built and researched."
          />
          <BloomButton>
            <Button asChild variant="ghost" className="w-fit">
              <Link href="/projects">
                All projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </BloomButton>
        </AnimatedSection>
        <ProjectGrid projects={list} showComingSoon={projects.length < 3} />
      </div>
    </section>
  );
}
