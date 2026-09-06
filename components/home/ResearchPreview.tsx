import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { publications, researchInterests } from "@/data/research";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TechBadge } from "@/components/shared/TechBadge";
import { ResearchCard } from "@/components/research/ResearchCard";
import { Button } from "@/components/ui/button";

export function ResearchPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <AnimatedSection className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Research"
            title="Studying visual representation learning"
            description="Research interests centered on learning from limited or unlabeled data."
          />
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <TechBadge key={interest} label={interest} />
            ))}
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link href="/research">
              Explore research
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="flex flex-col gap-4">
          {publications.map((publication) => (
            <ResearchCard key={publication.id} publication={publication} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
