"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { BloomButton } from "@/components/shared/BloomButton";
import { CoffeeLoader } from "@/components/shared/CoffeeLoader";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklch,var(--primary),transparent_88%),transparent_60%)]"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
        <motion.div
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          variants={container}
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={item}
            className="w-fit text-xs font-medium tracking-widest text-primary uppercase"
          >
            {siteConfig.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.1] font-semibold tracking-tight text-balance"
          >
            Teaching machines to see — then checking their work.
          </motion.h1>

          <motion.p variants={item} className="max-w-xl text-lg text-muted-foreground">
            I&apos;m Sumona, a Computer Science &amp; Engineering graduate exploring
            computer vision and self-supervised learning. I&apos;m especially drawn to
            the evaluation side of AI — the careful, methodical work of catching
            errors, inconsistencies, and unsafe assumptions before they ship.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
            <MagneticButton>
              <BloomButton>
                <Button asChild size="lg">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </BloomButton>
            </MagneticButton>
            <MagneticButton>
              <BloomButton>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </BloomButton>
            </MagneticButton>
            <MagneticButton>
              <BloomButton>
                <Button asChild size="lg" variant="ghost">
                  <a href="/resume.pdf" download>
                    <Download className="size-4" />
                    Resume
                  </a>
                </Button>
              </BloomButton>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="translate-x-8 scale-[1.8] sm:translate-x-12 sm:scale-[2.2]">
            <CoffeeLoader />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
