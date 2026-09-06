export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

// Real skills only, grouped exactly as listed on the resume.
// No percentage/proficiency bars — just what's true.
export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    skills: ["Python", "C", "Java", "SQL"],
  },
  {
    id: "ai-ml",
    name: "AI / Machine Learning",
    skills: [
      "Supervised & Self-Supervised Learning",
      "CNNs",
      "Model Evaluation & Benchmarking",
    ],
  },
  {
    id: "deep-learning-frameworks",
    name: "Deep Learning Frameworks",
    skills: ["PyTorch", "TensorFlow (basic)"],
  },
  {
    id: "genai-agents",
    name: "Generative AI & Agents",
    skills: [
      "Prompt Engineering",
      "AI Agent Design & Testing",
      "RAG & Vector Databases",
      "MCP (Model Context Protocol)",
      "API Integration & Webhooks",
    ],
  },
  {
    id: "genai-tools",
    name: "GenAI Tools",
    skills: ["Claude", "Claude Code", "ChatGPT", "n8n (workflow automation)"],
  },
  {
    id: "tools-technologies",
    name: "Tools & Technologies",
    skills: ["Git", "NumPy", "OpenCV", "Scikit-learn", "Flask", "HTML/CSS"],
  },
];
