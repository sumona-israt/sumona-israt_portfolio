export type AchievementCategory = "Award" | "Competition" | "Scholarship" | "Publication";

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  category: AchievementCategory;
  link?: string;
}

// Real achievements only. No awards, competitions, or scholarships have
// been earned yet — add them here as they happen, don't invent them.
export const achievements: Achievement[] = [
  {
    id: "iccit-2025-acceptance",
    title: "Paper Accepted — ICCIT 2025",
    issuer: "International Conference on Computer and Information Technology",
    date: "2025",
    description:
      '"Freshwater Fish Species Classification Using Self-Supervised Learning" accepted for publication.',
    category: "Publication",
  },
];
