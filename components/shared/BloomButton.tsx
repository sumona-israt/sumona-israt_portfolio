import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const CLUSTERS = ["bloom-cluster-1", "bloom-cluster-2", "bloom-cluster-3", "bloom-cluster-4"];

/**
 * Wraps a button (or any inline element) with a hover-only decorative
 * "bloom" — four small accent clusters at the corners that grow and
 * spin slowly on hover. Purely decorative (pointer-events: none), so
 * it never interferes with the wrapped element's own click target.
 */
export function BloomButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("bloom-wrap", className)}>
      {children}
      {CLUSTERS.map((cluster) => (
        <span key={cluster} aria-hidden="true" className={cn("bloom-cluster", cluster)}>
          <span className="bloom-petal one" />
          <span className="bloom-petal two" />
          <span className="bloom-petal three" />
          <span className="bloom-petal four" />
        </span>
      ))}
    </span>
  );
}
