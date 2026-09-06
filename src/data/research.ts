export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: number;
  status: "accepted" | "submitted" | "in-progress";
  description: string;
  link?: string;
}

export interface Methodology {
  id: string;
  name: string;
  description: string;
}

export interface Dataset {
  id: string;
  name: string;
  description: string;
}

export interface ResearchTimelineEntry {
  id: string;
  title: string;
  period: string;
  description: string;
}

export type PipelineStageName =
  | "Problem"
  | "Dataset"
  | "Method"
  | "Model"
  | "Evaluation"
  | "Result";

export interface ResearchPipelineStage {
  stage: PipelineStageName;
  description: string;
}

// Real research interests, from the resume — do not expand this list
// with unstated interests.
export const researchInterests: string[] = [
  "NLP",
  "Computer Vision",
  "Large Language Models",
  "Representation Learning",
  "Generative AI",
  "Applied AI Systems & Evaluation",
];

export const publications: Publication[] = [
  {
    id: "iccit-2025-fish-classification",
    title: "Freshwater Fish Species Classification Using Self-Supervised Learning",
    venue: "International Conference on Computer and Information Technology (ICCIT 2025)",
    year: 2025,
    status: "accepted",
    description:
      "A self-supervised representation learning framework to classify freshwater fish species using limited labeled data.",
  },
];

export const methodologies: Methodology[] = [
  {
    id: "self-supervised-contrastive-learning",
    name: "Self-Supervised Contrastive Learning",
    description:
      "Learning discriminative visual representations directly from unlabeled data, reducing dependence on large manually-labeled datasets.",
  },
  {
    id: "representation-learning",
    name: "Representation Learning",
    description:
      "Designing feature representations of visual data (images, and image-encoded binaries) that generalize well to downstream classification tasks.",
  },
];

export const datasets: Dataset[] = [
  {
    id: "freshwater-fish-images",
    name: "Freshwater fish image data (limited labeled samples)",
    description:
      "Image data of freshwater fish species used to evaluate a self-supervised classification framework under limited labeling.",
  },
  {
    id: "malware-binary-images",
    name: "Malware binaries converted to grayscale images",
    description:
      "Malware executable binaries converted into grayscale image representations for self-supervised visual feature learning.",
  },
];

export const researchTimeline: ResearchTimelineEntry[] = [
  {
    id: "bsc-research-start",
    title: "Began academic research in computer vision",
    period: "2025",
    description:
      "Started research and final-year project work applying self-supervised learning to visual classification problems.",
  },
  {
    id: "iccit-accepted",
    title: "Paper accepted at ICCIT 2025",
    period: "2025",
    description:
      "\"Freshwater Fish Species Classification Using Self-Supervised Learning\" accepted at the International Conference on Computer and Information Technology.",
  },
  {
    id: "msc-start",
    title: "Started MSc in AI & Machine Learning",
    period: "In Progress",
    description:
      "Continuing research at East West University, with a growing focus on applied AI systems and evaluation.",
  },
];

export const researchPipeline: ResearchPipelineStage[] = [
  {
    stage: "Problem",
    description:
      "Classifying visual data — species, malware families — when large amounts of manually labeled data aren't available.",
  },
  {
    stage: "Dataset",
    description:
      "Limited labeled image data: freshwater fish photographs and grayscale-converted malware binaries.",
  },
  {
    stage: "Method",
    description:
      "Self-supervised contrastive representation learning, learning visual features directly from unlabeled data.",
  },
  {
    stage: "Model",
    description: "A CNN-based encoder trained with a contrastive self-supervised objective.",
  },
  {
    stage: "Evaluation",
    description:
      "Classification performance assessed across categories, with manual review of misclassifications and edge cases.",
  },
  {
    stage: "Result",
    description: "[Add specific evaluation results/metrics once finalized]",
  },
];
