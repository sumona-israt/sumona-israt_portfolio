import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <AnimatedSection className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Let&apos;s build something meaningful — reach out and I&apos;ll get back to you.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Get in Touch
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </AnimatedSection>
    </section>
  );
}
