"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

type Orb = {
  id: number;
  size: number;
  left: string;
  top: string;
  color: string;
  duration: number;
  travel: number;
};

const ORBS: Orb[] = [
  { id: 0, size: 420, left: "8%", top: "12%", color: "color-mix(in oklch, var(--primary), white 20%)", duration: 26, travel: 60 },
  { id: 1, size: 340, left: "72%", top: "8%", color: "color-mix(in oklch, var(--primary), white 45%)", duration: 32, travel: 80 },
  { id: 2, size: 380, left: "20%", top: "68%", color: "color-mix(in oklch, var(--primary), black 10%)", duration: 30, travel: 70 },
  { id: 3, size: 300, left: "80%", top: "70%", color: "color-mix(in oklch, var(--primary), white 30%)", duration: 24, travel: 50 },
];

export function GlowingOrbs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {ORBS.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full opacity-40 blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
            background: orb.color,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, orb.travel, -orb.travel * 0.6, 0],
                  y: [0, -orb.travel * 0.5, orb.travel * 0.7, 0],
                }
          }
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}
