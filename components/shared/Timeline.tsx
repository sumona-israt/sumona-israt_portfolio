import Image from "next/image";

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
  image?: string;
  logo?: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
      {items.map((item, index) => (
        <AnimatedSection as="li" key={item.id} delay={index * 0.05} className="relative">
          <span className="absolute top-1 -left-[2.35rem] size-3 rounded-full border-2 border-background bg-primary" />
          <div
            className={
              item.image
                ? "overflow-hidden rounded-2xl card-surface bg-card sm:flex sm:flex-row-reverse sm:items-stretch"
                : "flex flex-col gap-2"
            }
          >
            {item.image ? (
              <div className="relative aspect-16/7 w-full sm:aspect-auto sm:w-2/5 sm:shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <div className={item.image ? "flex flex-col gap-2 p-5 sm:flex-1" : "contents"}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  {item.logo ? (
                    <span className="relative inline-block h-16 w-24 shrink-0">
                      <Image
                        src={item.logo}
                        alt={`${item.title} logo`}
                        fill
                        sizes="96px"
                        className="object-contain object-left"
                      />
                    </span>
                  ) : null}
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                </div>
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
          </div>
        </AnimatedSection>
      ))}
    </ol>
  );
}
