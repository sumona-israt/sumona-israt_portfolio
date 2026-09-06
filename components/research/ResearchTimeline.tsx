import type { ResearchTimelineEntry } from "@/data/research";
import { Timeline } from "@/components/shared/Timeline";

export function ResearchTimeline({ entries }: { entries: ResearchTimelineEntry[] }) {
  return (
    <Timeline
      items={entries.map((entry) => ({
        id: entry.id,
        title: entry.title,
        meta: entry.period,
        description: entry.description,
      }))}
    />
  );
}
