import type { Metadata } from "next";
import Image from "next/image";
import { Brain, Code2, Eye, FlaskConical } from "lucide-react";

import { siteConfig } from "@/data/site";
import { education } from "@/data/education";
import { researchInterests } from "@/data/research";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Timeline } from "@/components/shared/Timeline";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — ${siteConfig.title}`,
};

const interestDescriptions: Record<string, string> = {
  NLP: "Understanding and modeling human language with machine learning.",
  "Computer Vision": "Learning visual representations from images, including self-supervised approaches.",
  "Large Language Models": "How large models reason, respond, and sometimes fail.",
  "Representation Learning": "Designing features that generalize well from limited labeled data.",
  "Generative AI": "Models that create — text, images, and structured outputs.",
  "Applied AI Systems & Evaluation": "Auditing model outputs for errors, inconsistencies, and unsafe assumptions.",
};

const whatIBuild = [
  {
    icon: Eye,
    title: "Computer Vision Systems",
    description:
      "Vision-based classification systems — from grayscale malware analysis to species classification.",
  },
  {
    icon: FlaskConical,
    title: "Self-Supervised Research Prototypes",
    description:
      "Research-driven prototypes exploring representation learning without heavy reliance on labeled data.",
  },
  {
    icon: Code2,
    title: "Full-Stack ML Applications",
    description:
      "Applications like Flask-based tools that put model predictions in front of real users for verification.",
  },
  {
    icon: Brain,
    title: "AI Agents & Evaluation Tooling",
    description:
      "Prompt engineering and AI agent workflows, with a focus on testing, debugging, and evaluating outputs.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="About"
        title={`About ${siteConfig.name}`}
        description={siteConfig.title}
      />

      <AnimatedSection
        as="section"
        className="grid max-w-3xl gap-8 sm:grid-cols-[200px_1fr] sm:items-start"
      >
        <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-3xl border border-border sm:mx-0 sm:w-full">
          <Image
            src="/images/profile/profile.jpg"
            alt={siteConfig.name}
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SectionHeading eyebrow="Introduction" title="A closer look" />
          <p className="text-muted-foreground">
            Sumona is a Computer Science &amp; Engineering graduate from East West
            University, currently pursuing an MSc in Artificial Intelligence &amp;
            Machine Learning at the same institution. Her academic work sits at the
            intersection of computer vision and self-supervised learning — most
            recently a final year project on vision-based malware detection, and a
            paper on freshwater fish species classification accepted at ICCIT 2025.
          </p>
          <p className="text-muted-foreground">
            She&apos;s currently building hands-on skills in prompt engineering, AI
            agent design, and AI system evaluation through an ongoing course, and is
            especially drawn to the evaluation side of AI: the close, methodical work
            of reviewing model outputs for errors, inconsistencies, and unsafe
            assumptions.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="flex flex-col gap-8">
        <SectionHeading eyebrow="Academic Journey" title="Education timeline" />
        <Timeline
          items={education.map((entry) => ({
            id: entry.id,
            title: entry.degree,
            subtitle: [entry.institution, entry.location].filter(Boolean).join(" · "),
            meta: entry.period,
          }))}
        />
      </AnimatedSection>

      <AnimatedSection as="section" className="flex flex-col gap-8">
        <SectionHeading eyebrow="Focus Areas" title="Technical interests" />
        <div className="grid gap-4 sm:grid-cols-2">
          {researchInterests.map((interest) => (
            <div key={interest} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold tracking-tight">{interest}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {interestDescriptions[interest]}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="flex flex-col gap-8">
        <SectionHeading eyebrow="Practice" title="What I build" />
        <div className="grid gap-4 sm:grid-cols-2">
          {whatIBuild.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
              <Icon className="size-6 text-primary" />
              <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        as="section"
        className="flex max-w-3xl flex-col gap-4 border-t border-border pt-12"
      >
        <SectionHeading eyebrow="Philosophy" title="How I approach the work" />
        <p className="text-muted-foreground">
          I care about correctness as much as capability. A model that performs well
          on average but fails silently on the edge cases is, to me, unfinished — the
          interesting work starts with asking where and why it breaks. I bring that
          same structured, detail-oriented thinking to research writing, project
          planning, and collaborative work.
        </p>
      </AnimatedSection>
    </div>
  );
}
