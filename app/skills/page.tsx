import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { PageHeader } from "@/components/shared/PageHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TechBadge } from "@/components/shared/TechBadge";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technical skills of ${siteConfig.name}.`,
};

export default function SkillsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Toolkit"
        title="Skills & Technologies"
        description="Grouped by area — no invented proficiency percentages, just what's true."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <AnimatedSection
            key={category.id}
            delay={index * 0.05}
            className="rounded-2xl card-surface bg-card p-6"
          >
            <h2 className="text-sm font-medium tracking-wide text-primary uppercase">
              {category.name}
            </h2>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
