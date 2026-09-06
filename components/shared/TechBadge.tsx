import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { getTechIconKeys, getTechIconName, TechIcon } from "./tech-icons";

export function TechBadge({ label, className }: { label: string; className?: string }) {
  const iconKeys = getTechIconKeys(label);

  if (!iconKeys || iconKeys.length === 0) {
    return (
      <Badge variant="outline" className={cn("font-normal text-muted-foreground", className)}>
        {label}
      </Badge>
    );
  }

  return (
    <>
      {iconKeys.map((iconKey) => (
        <Tooltip key={iconKey}>
          <TooltipTrigger asChild>
            <span
              aria-label={getTechIconName(iconKey)}
              className={cn(
                "flex size-9 items-center justify-center rounded-lg border border-border bg-white p-1.5 shadow-sm",
                className
              )}
            >
              <TechIcon iconKey={iconKey} className="size-full" />
            </span>
          </TooltipTrigger>
          <TooltipContent>{getTechIconName(iconKey)}</TooltipContent>
        </Tooltip>
      ))}
    </>
  );
}
