import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ResearchPreview } from "@/components/home/ResearchPreview";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <FeaturedProjects />
      <ResearchPreview />
      <SkillsPreview />
      <ContactCTA />
    </>
  );
}
