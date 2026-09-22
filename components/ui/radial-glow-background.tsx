import { cn } from "@/lib/utils";

export function RadialGlowBackground({
  className,
  strong = false,
}: {
  className?: string;
  /** Full-strength letter-fill glow (Hero, behind giant bold type) vs. a
   *  dim ambient wash safe to sit behind ordinary body text everywhere else. */
  strong?: boolean;
}) {
  return (
    <div className={cn("inset-0 bg-[#020617]", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: strong
            ? "radial-gradient(ellipse 900px 420px at 50% 50%, color-mix(in oklch, var(--primary), white 15%) 0%, color-mix(in oklch, var(--primary), white 15%) 55%, transparent 100%)," +
              "radial-gradient(ellipse 750px 350px at 50% 50%, #6b6b7a 0%, #6b6b7a 45%, transparent 100%)"
            : "radial-gradient(ellipse 900px 600px at 50% 0%, color-mix(in oklch, var(--primary), transparent 78%), transparent 70%)",
        }}
      />
    </div>
  );
}
