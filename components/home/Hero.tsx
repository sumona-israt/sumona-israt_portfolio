"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

import { siteConfig } from "@/data/site";
import GlyphPortal from "@/components/ui/glyph-portal";
import { RadialGlowBackground } from "@/components/ui/radial-glow-background";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // GlyphPortal reports scroll progress (0–1) once per rendered frame outside
  // React state (per its own docs) — feed it into a motion value so the
  // revealed copy gets a real, scroll-linked Motion animation instead of
  // just the component's own instant CSS opacity swap.
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 220, damping: 30, mass: 0.4 });
  const contentOpacity = useTransform(smoothProgress, [0.72, 0.92], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.72, 0.92], [32, 0]);

  return (
    <GlyphPortal
      word="ISRAT"
      scrollLength={1.8}
      interactive
      annotations={false}
      fontFamily="Arial Black, Arial, sans-serif"
      fontWeight={800}
      enterLabel="Explore"
      onProgress={(p) => progress.set(p)}
      style={
        {
          "--gp-paper": "var(--background)",
          "--gp-ink": "var(--foreground)",
          "--gp-field": "var(--primary)",
          // Not var(--primary-foreground): that flips to near-black in dark
          // mode (for the light indigo button bg), but the field itself is
          // always a dark surface here (indigo, then near-black w/ the glow
          // in dark mode) so the reveal text needs to stay light in both.
          "--gp-foreground": "oklch(0.98 0.01 260)",
        } as React.CSSProperties
      }
      background={
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                "radial-gradient(circle at 18% 20%, rgba(175, 109, 255, 0.95), transparent 55%), " +
                "radial-gradient(circle at 80% 22%, rgba(255, 200, 120, 0.85), transparent 55%), " +
                "radial-gradient(circle at 22% 85%, rgba(255, 90, 170, 0.85), transparent 55%), " +
                "radial-gradient(circle at 85% 88%, rgba(90, 170, 255, 0.85), transparent 55%), " +
                "linear-gradient(160deg, #7c3aed 0%, #db2777 55%, #f59e0b 100%)",
            }}
          />
          <RadialGlowBackground strong className="absolute hidden dark:block" />
        </>
      }
    >
      <motion.div
        style={{
          opacity: shouldReduceMotion ? 1 : contentOpacity,
          y: shouldReduceMotion ? 0 : contentY,
        }}
        className="mx-auto flex max-w-2xl flex-col gap-6 text-center"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-80">
          {siteConfig.eyebrow}
        </span>
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-balance">
          Teaching machines to see — then checking their work.
        </h2>
        <p className="mx-auto max-w-xl text-base opacity-90 sm:text-lg">
          I&apos;m Sumona, a Computer Science &amp; Engineering graduate exploring
          computer vision and self-supervised learning. I&apos;m especially drawn to
          the evaluation side of AI — the careful, methodical work of catching
          errors, inconsistencies, and unsafe assumptions before they ship.
        </p>
      </motion.div>
    </GlyphPortal>
  );
}
