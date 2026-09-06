import { AnimatedSection } from "./AnimatedSection";
import { TechBadge } from "./TechBadge";

export interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
      {items.map((item, index) => (
        <AnimatedSection as="li" key={item.id} delay={index * 0.05} className="relative">
          <span className="absolute top-1 -left-[2.35rem] size-3 rounded-full border-2 border-background bg-primary" />
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              {item.meta ? (
                <span className="text-sm text-muted-foreground">{item.meta}</span>
              ) : null}
            </div>
            {item.subtitle ? (
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            ) : null}
            {item.description ? (
              <p className="text-sm text-muted-foreground">{item.description}</p>
            ) : null}
            {item.bullets && item.bullets.length > 0 ? (
              <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-sm text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {item.tags && item.tags.length > 0 ? (
              <div className="mt-1 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <TechBadge key={tag} label={tag} />
                ))}
              </div>
            ) : null}
          </div>
        </AnimatedSection>
      ))}
    </ol>
  );
}
