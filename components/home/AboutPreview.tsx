import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { BloomButton } from "@/components/shared/BloomButton";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <AnimatedSection>
          <div className="group relative mx-auto w-48 sm:w-56 lg:w-full lg:max-w-xs">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-4xl bg-primary/35 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
              <Image
                src="/images/profile/profile.jpg"
                alt={siteConfig.name}
                fill
                sizes="(min-width: 1024px) 320px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="About"
            title="Curious about how machines learn — and where they go wrong"
          />
          <p className="text-muted-foreground">{siteConfig.description}</p>
          <div>
            <BloomButton>
              <Button asChild variant="outline">
                <Link href="/about">
                  More about me
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </BloomButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
