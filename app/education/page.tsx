import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { education } from "@/data/education";
import { PageHeader } from "@/components/shared/PageHeader";
import { Timeline } from "@/components/shared/Timeline";

export const metadata: Metadata = {
  title: "Education",
  description: `Academic background of ${siteConfig.name}.`,
};

export default function EducationPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Education" title="Education" description="Academic timeline." />
      <Timeline
        items={education.map((entry) => ({
          id: entry.id,
          title: entry.degree,
          subtitle: [entry.institution, entry.location].filter(Boolean).join(" · "),
          meta: entry.period,
          bullets: entry.coursework,
        }))}
      />
    </div>
  );
}
