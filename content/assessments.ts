export type Assessment = {
  slug: string;
  title: string;
  summary: string;
  questions: { q: string; options: string[] }[]; // options scored 0..3 in order
  bands: { min: number; title: string; body: string; next: { label: string; href: string } }[]; // min = % score
};

export const assessments: Assessment[] = [
  {
    slug: "ai-readiness",
    title: "AI readiness assessment",
    summary: "Eight questions to see how ready your organisation is to run AI in production, with a recommended next step.",
    questions: [
      { q: "How clearly defined is your AI strategy?", options: ["We do not have one yet", "Ideas, but no agreed priorities", "Priorities agreed, funding partial", "Clear priorities, owners and funding"] },
      { q: "How many AI use cases are live in production today?", options: ["None", "One, in limited use", "A few, used by real teams", "Many, with measured results"] },
      { q: "Who owns the outcomes of AI initiatives?", options: ["No one in particular", "An innovation or IT team", "Shared between IT and the business", "Named business owners with targets"] },
      { q: "How ready is your data for AI?", options: ["Fragmented and hard to access", "Some curated data, mostly manual", "Governed data for key domains", "Trusted, documented data products"] },
      { q: "How are AI risks governed?", options: ["Not yet considered", "Case by case", "A framework exists but is slow", "A clear, efficient review process"] },
      { q: "How are AI systems tested and monitored?", options: ["Informally, if at all", "Manual testing before launch", "Automated evaluation for some systems", "Continuous evaluation and monitoring"] },
      { q: "How AI-literate are your leaders and teams?", options: ["Low awareness", "Pockets of enthusiasm", "Training under way", "AI is part of how we work"] },
      { q: "How do you measure the value of AI?", options: ["We do not", "Anecdotes and demos", "Some metrics for some projects", "Baselines and business outcomes"] },
    ],
    bands: [
      { min: 0, title: "Getting started", body: "You are at the beginning of the journey. The priority is to agree a small number of valuable use cases, name owners and define how success will be measured.", next: { label: "Talk to us about where to start", href: "/contact" } },
      { min: 40, title: "Building momentum", body: "You have foundations in place but value is not yet consistent. Focus on taking one or two use cases all the way to production, including risk review and monitoring.", next: { label: "Read: why AI pilots stall", href: "/insights/why-ai-pilots-stall" } },
      { min: 70, title: "Scaling with confidence", body: "You are ahead of most organisations. The opportunity now is to scale what works: shared platforms, continuous evaluation and agents in core processes.", next: { label: "Explore agents in production", href: "/services/agents-in-production" } },
    ],
  },
  {
    slug: "data-maturity",
    title: "Data maturity assessment",
    summary: "Eight questions to see whether your data is ready for analytics, AI and agents.",
    questions: [
      { q: "Do key data sets have named owners?", options: ["No", "A few", "Most core domains", "All, with clear responsibilities"] },
      { q: "Are business terms defined consistently?", options: ["Every system differs", "Some shared definitions", "A business glossary for key terms", "Definitions enforced in data products"] },
      { q: "How is data quality managed?", options: ["Issues found by users", "Ad hoc checks", "Monitored for key data", "Measured, with automated remediation"] },
      { q: "Can you trace where data comes from?", options: ["No", "Partly, through tribal knowledge", "Documented for key flows", "Automated lineage across the estate"] },
      { q: "How is data access controlled?", options: ["Broad, manual access", "Role-based in some systems", "Central policies for most data", "Fine-grained, policy-driven access"] },
      { q: "How modern is your data platform?", options: ["Mostly legacy and on-premises", "Partly migrated", "Modern platform for key workloads", "Modern, scalable and well operated"] },
      { q: "How easily can applications and agents consume data?", options: ["Extracts and spreadsheets", "Point-to-point integrations", "APIs for some domains", "Documented data products and APIs"] },
      { q: "How do you meet privacy and residency obligations?", options: ["Uncertain", "Manual processes", "Documented controls", "Automated, auditable controls"] },
    ],
    bands: [
      { min: 0, title: "Foundations needed", body: "Data is likely slowing down every AI initiative. Start with ownership, definitions and access for the data your priority use cases depend on.", next: { label: "Explore data foundations", href: "/services/data-foundations" } },
      { min: 40, title: "Partly ready", body: "Key foundations exist but gaps remain. Close them for priority domains, and introduce quality monitoring and lineage before scaling agents.", next: { label: "Read: data readiness for agentic AI", href: "/insights/data-readiness-for-agents" } },
      { min: 70, title: "Ready for agents", body: "Your data is in good shape. Focus on data products and interfaces designed for agents, with logging and rollback for agent actions.", next: { label: "Talk to us about agents", href: "/contact" } },
    ],
  },
];

export const getAssessment = (slug: string) => assessments.find((a) => a.slug === slug);
