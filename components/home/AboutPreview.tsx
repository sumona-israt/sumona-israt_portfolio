import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/data/site";
import { Avatar } from "@/components/shared/Avatar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <AnimatedSection>
          <Avatar
            initials={siteConfig.initials}
            className="mx-auto w-48 sm:w-56 lg:w-full lg:max-w-xs"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="About"
            title="Curious about how machines learn — and where they go wrong"
          />
          <p className="text-muted-foreground">{siteConfig.description}</p>
          <div>
            <Button asChild variant="outline">
              <Link href="/about">
                More about me
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
