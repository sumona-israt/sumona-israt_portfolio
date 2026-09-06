import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Contact"
        title="Let's build something meaningful"
        description="Have a project, research idea, or opportunity in mind? I'd love to hear from you."
      />

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-primary" />
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="text-sm font-medium hover:text-primary"
              >
                {siteConfig.social.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-primary" />
              <span className="text-sm text-muted-foreground">{siteConfig.author.location}</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <span className="size-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Open to new opportunities</span>
            </div>
          </div>
          <SocialLinks />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
