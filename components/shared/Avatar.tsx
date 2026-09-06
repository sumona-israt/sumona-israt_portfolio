import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  className?: string;
  textClassName?: string;
}

/**
 * Code-based monogram placeholder used until a real profile photo is
 * available. Swap it for a real <Image> wherever it's used once
 * public/images/profile/profile.jpg exists.
 */
export function Avatar({ initials, className, textClassName }: AvatarProps) {
  return (
    <div
      role="img"
      aria-label={`Profile placeholder — initials ${initials}`}
      className={cn(
        "flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-primary/5 to-transparent",
        className
      )}
    >
      <span
        className={cn(
          "font-heading font-semibold tracking-tight text-primary",
          textClassName ?? "text-6xl"
        )}
      >
        {initials}
      </span>
    </div>
  );
}
