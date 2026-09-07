import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { experience } from "@/data/experience";
import { PageHeader } from "@/components/shared/PageHeader";
import { Timeline } from "@/components/shared/Timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: `Academic and research experience of ${siteConfig.name}.`,
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Experience"
        title="Experience"
        description="As a recent graduate, this is academic and research experience rather than formal employment — final year project work, published research, and ongoing training."
      />
      <div className="max-w-3xl">
        <Timeline
          items={experience.map((entry) => ({
            id: entry.id,
            title: entry.role,
            subtitle: [entry.organization, entry.location].filter(Boolean).join(" · "),
            meta: entry.period,
            description: entry.description,
            bullets: entry.responsibilities,
            tags: entry.technologies,
            logo: entry.logo,
          }))}
        />
      </div>
    </div>
  );
}
