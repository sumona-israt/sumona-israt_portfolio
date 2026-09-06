export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

// Repurposed as academic/research experience: no formal employment yet
// (fresher). These are real academic and training experiences, framed
// honestly as such rather than as jobs.
export const experience: ExperienceEntry[] = [
  {
    id: "ostad-ai-agent-training",
    role: "AI Agent Development Trainee",
    organization: "Ostad",
    location: "Dhaka, Bangladesh",
    period: "In Progress",
    description:
      "Ongoing hands-on training covering AI agent fundamentals, prompt engineering, RAG and vector databases, API/webhook integration, and multi-agent system design.",
    responsibilities: [
      "Building practical skills in prompt engineering and AI agent design and testing",
      "Evaluating and debugging AI agent workflows using Claude, Claude Code, and n8n across real-world automation projects",
      "Working through a dedicated module on model context protocol (MCP), tool calling, and production-grade AI system monitoring and testing",
    ],
    technologies: ["Claude", "Claude Code", "n8n", "MCP", "RAG", "Vector Databases"],
  },
  {
    id: "iccit-2025-research",
    role: "Research Author — Freshwater Fish Species Classification",
    organization: "East West University",
    location: "Dhaka, Bangladesh",
    period: "2025",
    description:
      "Research work resulting in a paper accepted at ICCIT 2025, developing a self-supervised representation learning framework to classify freshwater fish species using limited labeled data.",
    responsibilities: [
      "Designed a self-supervised representation learning approach for image classification under limited labeled data",
      "Wrote up the methodology and results for academic publication",
    ],
    technologies: ["Python", "PyTorch", "Self-Supervised Learning", "Computer Vision"],
  },
  {
    id: "final-year-project",
    role: "Final Year Project — Vision-Based Malware Detection",
    organization: "East West University, Dept. of CSE",
    location: "Dhaka, Bangladesh",
    period: "2025",
    description:
      "Designed and built a malware detection system using self-supervised contrastive learning on grayscale representations of malware binaries.",
    responsibilities: [
      "Converted malware binaries into grayscale images for visual analysis",
      "Applied self-supervised contrastive learning to learn feature representations without manual labels",
      "Evaluated model outputs across multiple malware families, analyzing misclassifications and edge cases",
      "Built and tested a Flask-based web application for real-time malware analysis",
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "Flask", "Scikit-learn"],
  },
];
