export type ProjectCategory =
  | "AI / ML"
  | "Computer Vision"
  | "Web Development"
  | "Research"
  | "Software Engineering"
  | "Other";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  year?: number;
  problem: string;
  solution: string;
  methodology?: string;
  architecture?: string;
  features: string[];
  challenges: string[];
  results?: string;
  screenshots?: ProjectScreenshot[];
}

// Only real projects go here. Add your next project by copying this shape —
// never fabricate results or metrics; use an "[Add ...]" placeholder instead.
export const projects: Project[] = [
  {
    slug: "vision-based-self-supervised-malware-detection",
    title: "Vision-Based Self-Supervised Learning for Malware Detection",
    description:
      "A self-supervised computer vision pipeline that converts malware binaries into grayscale images and learns robust malware-family representations without manual labels.",
    category: "Computer Vision",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Flask",
      "Self-Supervised Learning",
      "Contrastive Learning",
    ],
    featured: true,
    year: 2025,
    problem:
      "Traditional malware detection systems rely on hand-crafted signatures or fully-labeled datasets, both of which struggle to keep pace with new and evolving malware families.",
    solution:
      "Malware binaries are converted into grayscale images, and a self-supervised contrastive learning framework is used to learn robust visual feature representations without requiring manual labels — the learned representations are then used to classify malware families.",
    methodology:
      "Binary-to-image conversion transforms raw executable bytes into grayscale image representations. A contrastive self-supervised learning objective trains a CNN encoder to learn discriminative features purely from unlabeled data, before evaluating classification performance across malware families.",
    architecture:
      "A CNN-based encoder trained with a self-supervised contrastive objective on grayscale malware images, paired with a Flask web application for real-time inference and manual verification of predictions.",
    features: [
      "Converts raw malware binaries into grayscale image representations",
      "Self-supervised contrastive learning — no manual labeling required",
      "Flask-based web application for real-time malware analysis",
      "Manual verification workflow for checking prediction accuracy",
    ],
    challenges: [
      "Systematically analyzing misclassifications and edge cases across multiple malware families to improve generalization",
      "Learning robust visual representations from unlabeled data without relying on hand-crafted signatures",
    ],
    results: "[Add specific evaluation metrics/results once finalized]",
    screenshots: [],
  },
];
