"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

import { siteConfig } from "@/data/site";
import { publications } from "@/data/research";
import { education } from "@/data/education";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/MagneticButton";

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
  const latestPublication = publications[0];
  const inProgressDegree = education.find((entry) => entry.period === "In Progress");

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklch,var(--primary),transparent_88%),transparent_60%)]"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
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
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild size="lg" variant="ghost">
                <a href="/resume.pdf" download>
                  <Download className="size-4" />
                  Resume
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/5">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-destructive/60" />
              <span className="size-2.5 rounded-full bg-muted-foreground/40" />
              <span className="size-2.5 rounded-full bg-primary/50" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                train_self_supervised.py
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted-foreground">
              <code>
                <span className="text-primary">for</span> epoch <span className="text-primary">in</span> range(epochs):{"\n"}
                {"    "}views = augment(batch){"\n"}
                {"    "}z1, z2 = encoder(views){"\n"}
                {"    "}loss = contrastive_loss(z1, z2){"\n"}
                {"    "}loss.backward(){"\n"}
                {"    "}
                <span className="text-primary">assert</span> no_manual_labels_used()
              </code>
            </pre>
          </div>

          <div className="absolute -bottom-6 -left-6 w-56 rounded-xl border border-border bg-card p-4 shadow-lg shadow-black/5">
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              Publication · {latestPublication.year}
            </p>
            <p className="mt-1 text-sm font-medium text-balance">{latestPublication.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{latestPublication.venue}</p>
          </div>

          {inProgressDegree ? (
            <div className="absolute -top-5 -right-4 rounded-xl border border-border bg-card px-4 py-2.5 shadow-lg shadow-black/5">
              <p className="text-xs font-medium text-foreground">{inProgressDegree.degree}</p>
              <p className="text-xs text-muted-foreground">{inProgressDegree.period}</p>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
