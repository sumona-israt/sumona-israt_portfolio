import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TechBadge } from "@/components/shared/TechBadge";
import { Button } from "@/components/ui/button";
import { BloomButton } from "@/components/shared/BloomButton";

export function SkillsPreview() {
  return (
    <section className="border-t border-border bg-muted/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Toolkit" title="Skills & Technologies" />
          <BloomButton>
            <Button asChild variant="ghost" className="w-fit">
              <Link href="/skills">
                Full skill set
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </BloomButton>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.id}
              delay={index * 0.06}
              className="rounded-2xl card-surface bg-card p-6"
            >
              <h3 className="text-sm font-medium tracking-wide text-primary uppercase">
                {category.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <TechBadge key={skill} label={skill} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
