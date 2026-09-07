import type { Metadata } from "next";
import { Award } from "lucide-react";

import { siteConfig } from "@/data/site";
import { achievements } from "@/data/achievements";
import { certifications } from "@/data/certifications";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Achievements",
  description: `Achievements and certifications of ${siteConfig.name}.`,
};

export default function AchievementsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Recognition"
        title="Achievements"
        description="Publications, certifications, and academic milestones."
      />

      <AnimatedSection as="section" className="flex flex-col gap-6">
        <SectionHeading title="Achievements" />
        <div className={cn("grid max-w-3xl gap-4", achievements.length > 1 && "sm:grid-cols-2")}>
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <Badge variant="outline">{achievement.category}</Badge>
                {achievement.date ? (
                  <span className="text-xs text-muted-foreground">{achievement.date}</span>
                ) : null}
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-balance">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{achievement.issuer}</p>
                </div>
              </div>
              {achievement.description ? (
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="flex flex-col gap-6">
        <SectionHeading title="Certifications & Ongoing Training" />
        <div className="flex max-w-3xl flex-col gap-4">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold tracking-tight">
                  {certification.name} — {certification.issuer}
                </h3>
                {certification.date ? (
                  <span className="text-xs text-muted-foreground">{certification.date}</span>
                ) : null}
              </div>
              {certification.description ? (
                <p className="text-sm text-muted-foreground">{certification.description}</p>
              ) : null}
              {certification.bullets && certification.bullets.length > 0 ? (
                <ul className="flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted-foreground">
                  {certification.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
