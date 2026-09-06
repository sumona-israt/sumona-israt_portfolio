import type { Publication } from "@/data/research";
import { Badge } from "@/components/ui/badge";

export function ResearchCard({ publication }: { publication: Publication }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between gap-3">
        <Badge variant={publication.status === "accepted" ? "default" : "outline"} className="capitalize">
          {publication.status}
        </Badge>
        <span className="text-xs text-muted-foreground">{publication.year}</span>
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-balance">{publication.title}</h3>
      <p className="text-sm text-muted-foreground">{publication.venue}</p>
      <p className="text-sm text-muted-foreground">{publication.description}</p>
      {publication.link ? (
        <a
          href={publication.link}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-primary hover:underline"
        >
          View publication
        </a>
      ) : null}
    </div>
  );
}
