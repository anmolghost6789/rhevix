export type Industry = {
  slug: string;
  sector: string;
  name: string;
  summary: string;
  headline: string;
  intro: string;
  challenges: string[];
  useCases: { title: string; body: string }[];
  services: string[]; // service slugs
  art: number;
};

export const industries: Industry[] = [
  {
    slug: "banking-payments", sector: "Financial services", name: "Banking and payments", art: 0,
    summary: "AI for service, credit and operations, delivered inside bank controls.",
    headline: "AI that passes model risk, and pays back.",
    intro: "Banks have no shortage of AI ideas. The challenge is taking them through model risk, data residency and audit requirements into systems customers and colleagues rely on.",
    challenges: ["Pilots that stall at model risk review", "Legacy core platforms that cannot expose data safely", "Strict data residency, privacy and audit obligations", "Pressure to show measurable returns on AI investment"],
    useCases: [
      { title: "Customer service assistants", body: "Assistants that resolve routine requests and hand off to colleagues with full context." },
      { title: "Credit and KYC operations", body: "Agents that gather documents, check rules and prepare cases for human decision." },
      { title: "Fraud and financial crime", body: "Better triage and investigation support for alerts and cases." },
      { title: "Core modernisation", body: "Staged modernisation of core systems so data can safely reach AI." },
    ],
    services: ["agents-in-production", "model-evaluation", "data-foundations", "modernisation"],
  },
  {
    slug: "insurance", sector: "Financial services", name: "Insurance", art: 1,
    summary: "Practical AI for claims, underwriting and policy servicing.",
    headline: "Faster claims, sharper underwriting.",
    intro: "Insurers run on documents, judgement and regulation. AI can take on much of the reading and routine decisions, provided it is accurate, explainable and well governed.",
    challenges: ["High volumes of unstructured documents", "Fragmented policy and claims systems", "Explainability expectations from regulators", "Legacy platforms with limited integration"],
    useCases: [
      { title: "Claims triage", body: "Classify, prioritise and route claims, with straight-through processing for simple cases." },
      { title: "Document extraction", body: "Accurate extraction from forms, reports and correspondence." },
      { title: "Underwriting support", body: "Summaries and risk signals that help underwriters decide faster." },
      { title: "Policy servicing", body: "Assistants for customer and broker queries across channels." },
    ],
    services: ["agents-in-production", "data-foundations", "quality-engineering", "modernisation"],
  },
  {
    slug: "wealth-markets", sector: "Financial services", name: "Wealth and markets", art: 3,
    summary: "AI for advice, research and risk where accuracy is non-negotiable.",
    headline: "Expertise at scale, with accuracy built in.",
    intro: "Advisers, analysts and risk teams spend much of their day gathering and summarising information. AI can give them that time back, if it is accurate and auditable.",
    challenges: ["Zero tolerance for inaccurate outputs", "Complex, proprietary data sources", "Suitability and conduct obligations", "Rapidly changing market information"],
    useCases: [
      { title: "Research assistants", body: "Summaries and answers grounded in your research and market data." },
      { title: "Adviser productivity", body: "Meeting preparation, notes and follow-ups drafted for review." },
      { title: "Risk and compliance", body: "Monitoring and review support for communications and trades." },
      { title: "Client reporting", body: "Personalised reports generated from governed data." },
    ],
    services: ["data-foundations", "model-evaluation", "agents-in-production"],
  },
  {
    slug: "telecommunications", sector: "Communications", name: "Telecommunications", art: 2,
    summary: "AI for customer and network operations at national scale.",
    headline: "Service operations that scale with demand.",
    intro: "Telecoms handle millions of interactions and vast volumes of network data. AI can reduce handling time and predict faults, if it is integrated with complex billing, CRM and network systems.",
    challenges: ["Very high contact volumes", "Complex, layered billing and CRM estates", "Network data at enormous scale", "Margin pressure and cost-to-serve targets"],
    useCases: [
      { title: "Contact centre automation", body: "Agents integrated with billing and CRM, with smooth hand-off to people." },
      { title: "Network operations", body: "Fault prediction and triage from telemetry and tickets." },
      { title: "Field service", body: "Assistants that prepare engineers and capture job knowledge." },
      { title: "Platform engineering", body: "Data platforms for network, customer and planning analytics." },
    ],
    services: ["agents-in-production", "ai-native-engineering", "data-foundations", "modernisation"],
  },
  {
    slug: "media-technology", sector: "Communications", name: "Media and technology", art: 4,
    summary: "Engineering for platforms that serve millions of users.",
    headline: "Ship faster on platforms that cannot go down.",
    intro: "Technology and media companies compete on speed of delivery and quality of experience. AI-native engineering and quality practices help teams move faster without breaking things.",
    challenges: ["Constant pressure to ship features faster", "Reliability at consumer scale", "Content and personalisation at volume", "Rising engineering costs"],
    useCases: [
      { title: "AI-native delivery", body: "Redesigned engineering workflows with AI across the lifecycle." },
      { title: "Quality at speed", body: "Automated testing and evaluation that keep pace with releases." },
      { title: "Content operations", body: "AI-assisted tagging, moderation and localisation." },
      { title: "Personalisation", body: "Data foundations for recommendations and experimentation." },
    ],
    services: ["ai-native-engineering", "quality-engineering", "data-foundations"],
  },
  {
    slug: "professional-services", sector: "Knowledge industries", name: "Professional services", art: 1,
    summary: "AI inside client delivery for consulting, legal and advisory firms.",
    headline: "Put AI into the work you deliver.",
    intro: "Consulting, legal and advisory firms are rethinking how they deliver to clients. We help them build AI into delivery, extend their benches with specialists, and develop AI-ready teams.",
    challenges: ["Clients expecting AI-enabled delivery", "Scarce specialist skills for projects", "Protecting client confidentiality", "Changing commercial models"],
    useCases: [
      { title: "Bench extension", body: "Vetted engineers and domain experts who join client projects under your brand." },
      { title: "Delivery accelerators", body: "Reusable AI tools for research, analysis and document work." },
      { title: "Knowledge assistants", body: "Secure assistants over your firm's knowledge and precedents." },
      { title: "AI-ready teams", body: "Training and operating model changes for practitioners." },
    ],
    services: ["domain-experts", "agents-in-production", "ai-native-engineering"],
  },
  {
    slug: "ai-labs", sector: "Knowledge industries", name: "AI labs", art: 3,
    summary: "Data, environments and evaluation for teams building frontier models.",
    headline: "Expert data for frontier models.",
    intro: "Frontier labs need data and environments that push models further in reasoning, coding and specialist domains. Our expert network and quality systems are built for that work.",
    challenges: ["Diminishing returns from generic data", "Scarce experts in specialist domains", "Need for verifiable, high-quality signals", "Fast-changing research priorities"],
    useCases: [
      { title: "Reasoning and coding data", body: "Expert-written problems, solutions and trajectories." },
      { title: "Preference data", body: "Calibrated expert judgements for alignment pipelines." },
      { title: "RL environments", body: "Realistic environments with verifiable rewards." },
      { title: "Evaluation", body: "Benchmarks and red-teaming that stay hard as models improve." },
    ],
    services: ["expert-datasets", "rl-environments", "model-evaluation", "domain-experts"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
