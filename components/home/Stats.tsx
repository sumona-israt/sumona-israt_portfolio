import { publications, researchInterests } from "@/data/research";
import { projects } from "@/data/projects";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const stats = [
  {
    label: "Publication",
    value: `ICCIT ${publications[0]?.year ?? ""}`,
    detail: "Paper accepted",
  },
  {
    label: "Research Interests",
    value: String(researchInterests.length),
    detail: "Active focus areas",
  },
  {
    label: "Academic Projects",
    value: String(projects.length),
    detail: "Self-supervised CV work",
  },
  {
    label: "Currently",
    value: "MSc AI & ML",
    detail: "In progress",
  },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.08} className="flex flex-col gap-1">
              <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-foreground">{stat.label}</span>
              <span className="text-xs text-muted-foreground">{stat.detail}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
