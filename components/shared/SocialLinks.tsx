import { GraduationCap, Mail } from "lucide-react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

import { GitHubIcon, LinkedInIcon } from "./icons";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const { social } = siteConfig;

  const links = [
    social.github && { label: "GitHub", href: social.github, icon: GitHubIcon },
    social.linkedin && { label: "LinkedIn", href: social.linkedin, icon: LinkedInIcon },
    social.scholar && { label: "Google Scholar", href: social.scholar, icon: GraduationCap },
    social.email && { label: "Email", href: `mailto:${social.email}`, icon: Mail },
  ].filter(Boolean) as { label: string; href: string; icon: typeof Mail }[];

  if (links.length === 0) return null;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={label}
          className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <Icon className={cn("size-4", iconClassName)} />
        </a>
      ))}
    </div>
  );
}
