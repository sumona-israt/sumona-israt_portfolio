"use client";

import { useBackgroundStyle } from "@/components/providers/background-style-provider";
import { DriftingParticles, FallingLeaves, FallingPetals, FallingSnow, Rainfall } from "./FallingPresets";
import { GlowingOrbs } from "./GlowingOrbs";
import { GradientDrift } from "./GradientDrift";

/** Renders whichever background-animation preset is currently selected. */
export function AnimatedBackgroundEffect() {
  const { style } = useBackgroundStyle();

  switch (style) {
    case "particles":
      return <DriftingParticles />;
    case "petals":
      return <FallingPetals />;
    case "orbs":
      return <GlowingOrbs />;
    case "gradient-drift":
      return <GradientDrift />;
    case "snow":
      return <FallingSnow />;
    case "rain":
      return <Rainfall />;
    case "leaves":
      return <FallingLeaves />;
    default:
      return null;
  }
}
