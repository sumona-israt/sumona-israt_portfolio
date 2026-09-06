import Image from "next/image";

import type { ProjectScreenshot } from "@/data/projects";

export function ProjectGallery({ screenshots }: { screenshots?: ProjectScreenshot[] }) {
  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {screenshots.map((shot) => (
        <figure key={shot.src} className="overflow-hidden rounded-xl border border-border">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={800}
            height={500}
            className="w-full"
          />
          {shot.caption ? (
            <figcaption className="px-4 py-2 text-xs text-muted-foreground">
              {shot.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
