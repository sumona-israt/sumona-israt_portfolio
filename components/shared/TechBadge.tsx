import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TechBadge({ label, className }: { label: string; className?: string }) {
  return (
    <Badge variant="outline" className={cn("font-normal text-muted-foreground", className)}>
      {label}
    </Badge>
  );
}
