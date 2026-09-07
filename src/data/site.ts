export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  initials: string;
  eyebrow: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    location: string;
    university: string;
  };
  social: {
    github: string;
    linkedin: string;
    scholar: string;
    twitter: string;
    email: string;
  };
  contact: {
    /**
     * Optional endpoint for a future third-party static form service
     * (e.g. Formspree). Left empty intentionally — the contact form
     * works entirely via a mailto: link and needs no backend. If this
     * is ever populated, wire it up in ContactForm; until then it's
     * unused by design.
     */
    formEndpoint: string;
  };
  mainNav: NavItem[];
  footerNav: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Sumona Sharmin Israt",
  initials: "SI",
  eyebrow: "Computer Science & Engineering Graduate",
  title: "AI/ML Engineer — Fresher | Aspiring AI Evaluation & Prompt Testing Specialist",
  description:
    "Recent CSE graduate from East West University, now pursuing an MSc in AI & Machine Learning. Background in deep learning and computer vision, with a paper accepted at ICCIT 2025 on self-supervised classification.",
  url: "https://sumona-israt-portfolio.vercel.app",
  author: {
    name: "Sumona Sharmin Israt",
    email: "sumona.bd81@gmail.com",
    location: "Dhaka, Bangladesh",
    university: "East West University",
  },
  social: {
    github: "https://github.com/sumona-israt",
    linkedin: "",
    scholar: "",
    twitter: "",
    email: "sumona.bd81@gmail.com",
  },
  contact: {
    formEndpoint: "",
  },
  mainNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Experience", href: "/experience" },
    { label: "Education", href: "/education" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Experience", href: "/experience" },
    { label: "Education", href: "/education" },
    { label: "Skills", href: "/skills" },
    { label: "Achievements", href: "/achievements" },
    { label: "Contact", href: "/contact" },
  ],
};
