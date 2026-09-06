# Sumona Sharmin Israt — Portfolio

A premium, fully static portfolio site for an AI/ML engineer and CSE graduate. No backend, no API routes, no database — everything is generated at build time and deployed as static files.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) (Radix primitives)
- [Motion](https://motion.dev) for animation
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- Lucide icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This produces a fully static export in `out/` (configured via `output: "export"` in `next.config.ts`). There is no server component to this app — `out/` can be served from any static host.

```bash
npx serve out   # preview the static export locally
```

## Deployment (GitHub → Vercel)

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — no custom build/output settings are required (`npm run build`, framework preset "Next.js").
4. Deploy. Every push to the default branch triggers a new static build.

## Editing content

All real content lives in `src/data/*.ts` — plain TypeScript, no CMS or database:

| File | Contains |
|---|---|
| `site.ts` | Name, title, bio, social links, nav, contact config |
| `projects.ts` | Project case studies (list + `/projects/[slug]` detail pages) |
| `experience.ts` | Academic/research experience timeline |
| `education.ts` | Education timeline |
| `research.ts` | Research interests, publications, methodologies, datasets, pipeline |
| `skills.ts` | Skills grouped by category |
| `achievements.ts` | Awards, publications, competitions |
| `certifications.ts` | Certifications and ongoing training |

Add a new project by adding an entry to `projects.ts` — the `/projects/[slug]` route is statically generated for every entry via `generateStaticParams()`, so a new project automatically gets its own page on the next build. Never invent results/metrics — use an honest placeholder like `"[Add specific results once finalized]"` if a number isn't ready yet.

## Images

Place images under `public/images/` (e.g. `public/images/projects/`, `public/images/profile/`). Reference them by path from `src/data/projects.ts` (`image`, `screenshots`). Next's built-in image optimizer is disabled for static export (`images: { unoptimized: true }`), so `next/image` just serves the file as-is — no server-side optimization step.

There's no real profile photo yet — `components/shared/Avatar.tsx` renders a code-based monogram placeholder ("SI") instead. Once a real photo is available, drop it at `public/images/profile/profile.jpg` and swap it in wherever `<Avatar />` is used (currently the homepage About preview).

## Resume

`public/resume.pdf` is served directly by the "Resume" / "Download Resume" buttons in the navbar, mobile menu, and hero. Replace that file with an updated resume to change what visitors download — no code changes needed.

## Contact form

The contact form (`components/contact/ContactForm.tsx`) is entirely frontend: it validates the fields client-side, then builds a `mailto:` URL and opens the visitor's email client with the message pre-filled. No backend, no email service, no stored submissions.

`siteConfig.contact.formEndpoint` in `src/data/site.ts` is an intentionally unused placeholder — a slot for later wiring up an optional third-party static form service (e.g. Formspree), if a proper form backend is ever wanted. It requires no paid service today and the site works fully without it.

## SEO

`app/sitemap.ts` and `app/robots.ts` generate a static `sitemap.xml` / `robots.txt` at build time. `app/icon.tsx` and `app/opengraph-image.tsx` generate the favicon and social preview image at build time using `next/og` — no binary image assets to maintain. Per-page metadata is set via each route's `export const metadata`.

## Project structure

```
app/                 routes (App Router)
components/
  layout/            Navbar, Footer, MobileNav
  home/              Homepage sections
  projects/          Project gallery + detail components
  research/          Research page components
  contact/           ContactForm
  shared/            Reusable primitives (AnimatedSection, Timeline, TechBadge, ...)
  theme/             Dark/light mode provider + toggle
  ui/                shadcn-generated components (do not hand-edit unless customizing)
src/
  data/              All editable content (see above)
  lib/                utils.ts (cn helper), mailto.ts
  hooks/             use-mounted, use-fine-pointer
public/
  resume.pdf
  images/
```
