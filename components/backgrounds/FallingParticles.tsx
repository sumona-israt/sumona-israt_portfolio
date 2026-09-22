import * as React from "react";

import { cn } from "@/lib/utils";

/** Deterministic PRNG (mulberry32) so particle layout is stable across re-renders. */
function createRandom(seed: number) {
  let t = seed;
  return function random() {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export type FallingParticlesProps = {
  /** CSS class applied to every particle — carries the shape/color for a given preset. */
  variantClassName: string;
  count: number;
  /** [min, max] particle size in px (square, unless the variant's CSS overrides width/height). */
  size: [number, number];
  /** [min, max] seconds for one full top-to-bottom fall cycle. */
  duration: [number, number];
  /** Max horizontal sway in px (randomized per particle, positive or negative). */
  drift: number;
  /** Max rotation in degrees over the fall (0 = no spin). */
  spin: number;
  /** [min, max] peak opacity per particle. */
  opacity: [number, number];
};

export function FallingParticles({
  variantClassName,
  count,
  size,
  duration,
  drift,
  spin,
  opacity,
}: FallingParticlesProps) {
  const particles = React.useMemo(() => {
    const random = createRandom(count * 97 + size[0] * 31 + duration[0] * 13);
    return Array.from({ length: count }, (_, index) => {
      const particleSize = size[0] + random() * (size[1] - size[0]);
      const particleDuration = duration[0] + random() * (duration[1] - duration[0]);
      const particleDrift = (random() * 2 - 1) * drift;
      const particleSpin = (random() * 2 - 1) * spin;
      const particleOpacity = opacity[0] + random() * (opacity[1] - opacity[0]);
      return {
        id: index,
        style: {
          left: `${random() * 100}%`,
          width: particleSize,
          height: particleSize,
          animationDuration: `${particleDuration}s`,
          // Negative delay starts each particle mid-cycle so the field looks
          // populated immediately instead of all particles falling in sync.
          animationDelay: `${-random() * particleDuration}s`,
          "--drift": `${particleDrift}px`,
          "--spin": `${particleSpin}deg`,
          "--particle-opacity": particleOpacity,
        } as React.CSSProperties,
      };
    });
  }, [count, size, duration, drift, spin, opacity]);

  return (
    <>
      {particles.map((particle) => (
        <span key={particle.id} className={cn("anim-particle", variantClassName)} style={particle.style} />
      ))}
    </>
  );
}
