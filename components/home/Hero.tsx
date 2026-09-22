"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

import { siteConfig } from "@/data/site";
import GlyphPortal from "@/components/ui/glyph-portal";

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
          "--gp-foreground": "var(--primary-foreground)",
        } as React.CSSProperties
      }
      background={
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 15%, color-mix(in oklch, var(--primary), white 22%), transparent 45%), " +
              "radial-gradient(circle at 82% 78%, color-mix(in oklch, var(--primary), black 20%), transparent 55%), " +
              "var(--primary)",
          }}
        />
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
