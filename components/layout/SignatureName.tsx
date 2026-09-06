"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

interface SignatureNameProps {
  name: string;
  className?: string;
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.032, delayChildren: 0.1 } },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 8, rotate: -6 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const underline: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

export const SignatureName = React.forwardRef<HTMLSpanElement, SignatureNameProps>(
  function SignatureName({ name, className }, ref) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
      return (
        <span ref={ref} className={cn("font-signature leading-none", className)}>
          {name}
        </span>
      );
    }

    return (
      <motion.span
        ref={ref}
        initial="hidden"
        animate="visible"
        variants={container}
        aria-label={name}
        className={cn("relative inline-flex font-signature leading-none", className)}
      >
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            aria-hidden="true"
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          variants={underline}
          aria-hidden="true"
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-primary/50"
        />
      </motion.span>
    );
  }
);
