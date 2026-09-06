import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getTechIconKeys, TechIcon } from "./tech-icons";

export function TechBadge({ label, className }: { label: string; className?: string }) {
  const iconKeys = getTechIconKeys(label);

  return (
    <Badge variant="outline" className={cn("gap-1.5 font-normal text-muted-foreground", className)}>
      {iconKeys?.map((iconKey) => (
        <TechIcon key={iconKey} iconKey={iconKey} />
      ))}
      {label}
    </Badge>
  );
}
