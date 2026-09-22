import { AnimatedBackgroundEffect } from "./AnimatedBackgroundEffect";

export function AnimatedBackgroundLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden" aria-hidden="true">
      <AnimatedBackgroundEffect />
    </div>
  );
}
