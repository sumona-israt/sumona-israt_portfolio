import { ArrowRight } from "lucide-react";

import type { ResearchPipelineStage } from "@/data/research";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ResearchPipeline({ stages }: { stages: ResearchPipelineStage[] }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
      {stages.map((stage, index) => (
        <div key={stage.stage} className="flex flex-1 items-stretch lg:items-center">
          <AnimatedSection
            delay={index * 0.06}
            className="flex flex-1 flex-col gap-2 rounded-2xl border border-border bg-card p-5"
          >
            <span className="text-xs font-medium tracking-widest text-primary uppercase">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-semibold tracking-tight">{stage.stage}</h3>
            <p className="text-sm text-muted-foreground">{stage.description}</p>
          </AnimatedSection>
          {index < stages.length - 1 ? (
            <div className="hidden shrink-0 items-center justify-center px-2 lg:flex">
              <ArrowRight className="size-5 text-muted-foreground/50" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
