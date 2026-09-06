export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  description?: string;
  bullets?: string[];
}

export const certifications: Certification[] = [
  {
    id: "ostad-ai-agent-development",
    name: "AI Agent Development",
    issuer: "Ostad",
    date: "In Progress",
    description: "Currently enrolled, covering AI agent fundamentals through production-grade testing.",
    bullets: [
      "Covers AI agent fundamentals, prompt engineering, RAG & vector databases, API/webhook integration, and multi-agent system design.",
      "Hands-on practice evaluating and debugging AI agent workflows using Claude, Claude Code, and n8n across real-world automation projects.",
      "Includes a dedicated module on model context protocol (MCP), tool calling, and production-grade AI system monitoring and testing.",
    ],
  },
];
