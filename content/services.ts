export type Service = {
  slug: string;
  group: "Engineering" | "Data and AI" | "For AI labs";
  name: string;
  summary: string;
  headline: string;
  intro: string;
  problem: string;
  offerings: { title: string; body: string }[];
  outcomes: string[];
  approach: { stage: "Reason" | "Evolution" | "Execution"; body: string }[];
  industries: string[]; // industry slugs
  insight?: string; // insight slug
  art: number;
};

export const services: Service[] = [
  {
    slug: "ai-native-engineering", group: "Engineering", name: "AI-native software engineering", art: 0,
    summary: "Redesign how teams plan, build, test and ship so AI acceleration shows up in throughput and quality.",
    headline: "Engineering teams, rebuilt for AI.",
    intro: "AI coding tools make individual developers faster, but delivery rarely speeds up on its own. The bottlenecks move to review, testing, integration and release. We redesign the whole lifecycle so the gains reach production.",
    problem: "Most organisations roll out assistants and measure seat adoption. Lead time, change failure rate and developer experience barely move, and leaders struggle to show a return.",
    offerings: [
      { title: "Engineering operating model", body: "Redesigned roles, rituals and review practices for teams that work alongside AI agents every day." },
      { title: "AI across the lifecycle", body: "Assistants and agents introduced into planning, coding, testing, documentation and release, with guardrails." },
      { title: "Platform and tooling", body: "Internal developer platforms, golden paths and policy-as-code that make the right way the easy way." },
      { title: "Measurement", body: "A baseline and dashboard for delivery metrics, so the impact of AI is evidenced, not assumed." },
    ],
    outcomes: ["Shorter lead time from idea to production", "Fewer failed changes and faster recovery", "A clear, measured return on AI tooling", "Engineers who trust and own the new workflow"],
    approach: [
      { stage: "Reason", body: "Baseline delivery metrics and map where time is really lost across the lifecycle." },
      { stage: "Evolution", body: "Pilot new practices with one or two teams, then adapt them before scaling." },
      { stage: "Execution", body: "Roll out across the organisation with training, platform changes and ongoing measurement." },
    ],
    industries: ["banking-payments", "telecommunications", "media-technology"], insight: "ai-native-delivery",
  },
  {
    slug: "modernisation", group: "Engineering", name: "Modernisation", art: 4,
    summary: "Modernise core systems, data and infrastructure in stages that respect your risk and change windows.",
    headline: "Modernise without stopping the business.",
    intro: "Legacy platforms hold the data and logic that AI needs, but rewriting them is risky. We modernise incrementally, using AI to accelerate analysis and migration while keeping the business running.",
    problem: "Big-bang rewrites overrun and stall. Meanwhile, new AI initiatives are blocked by systems that cannot expose data or change safely.",
    offerings: [
      { title: "Estate assessment", body: "AI-assisted analysis of code, dependencies and data flows to find the safest path forward." },
      { title: "Incremental migration", body: "Strangler patterns, API layers and staged cut-overs with clear acceptance at each step." },
      { title: "Cloud and platform", body: "Landing zones, infrastructure as code and operations designed for regulated workloads." },
      { title: "Knowledge capture", body: "Documentation and tests generated from legacy systems so knowledge is not lost." },
    ],
    outcomes: ["Lower run costs and risk on core platforms", "Systems that can expose data to AI safely", "Predictable, staged delivery", "Teams able to change systems with confidence"],
    approach: [
      { stage: "Reason", body: "Assess the estate and agree a migration approach that fits your change-management process." },
      { stage: "Evolution", body: "Deliver in stages, adjusting the plan as each slice reveals what the next needs." },
      { stage: "Execution", body: "Cut over with rehearsed runbooks, parallel running where needed, and full handover." },
    ],
    industries: ["banking-payments", "insurance", "telecommunications"],
  },
  {
    slug: "quality-engineering", group: "Engineering", name: "Quality engineering", art: 2,
    summary: "Testing and quality practices that keep up when code is written at AI speed.",
    headline: "Quality that keeps pace with AI.",
    intro: "When AI writes more of the code, quality has to be engineered in rather than inspected at the end. We build test strategies, automation and evaluation that scale with delivery.",
    problem: "Test suites lag behind generated code, review becomes the bottleneck, and defects reach production faster than before.",
    offerings: [
      { title: "Test strategy", body: "Risk-based strategies that focus effort where failures would hurt most." },
      { title: "Automation at scale", body: "AI-assisted test generation and maintenance, wired into your pipelines." },
      { title: "AI system testing", body: "Evaluation of AI features for accuracy, robustness, bias and safety." },
      { title: "Quality reporting", body: "Clear quality signals for engineering leaders and release governance." },
    ],
    outcomes: ["Fewer defects reaching customers", "Faster, safer releases", "Confidence in AI-generated code", "Evidence for audit and release boards"],
    approach: [
      { stage: "Reason", body: "Review current quality practices, defect data and release risks." },
      { stage: "Evolution", body: "Introduce automation and evaluation where they remove the most risk first." },
      { stage: "Execution", body: "Embed quality gates in delivery and hand over tooling your teams can run." },
    ],
    industries: ["banking-payments", "insurance", "media-technology"],
  },
  {
    slug: "data-foundations", group: "Data and AI", name: "Data foundations for AI", art: 1,
    summary: "Modernise, govern and secure data so it can be trusted by people and agents alike.",
    headline: "Data your AI can trust.",
    intro: "Agents are only as good as the data beneath them. We modernise data architecture and put governance, quality and sovereignty controls in place so data can be used safely across systems.",
    problem: "Data is fragmented, inconsistently defined and poorly governed. AI projects spend most of their time finding and fixing data rather than delivering value.",
    offerings: [
      { title: "Data architecture", body: "Modern lakehouse and integration patterns designed for analytics and AI workloads." },
      { title: "Governance and quality", body: "Ownership, definitions, lineage and quality controls that scale." },
      { title: "Sovereignty and security", body: "Access controls, residency and privacy measures that satisfy regulators." },
      { title: "AI-ready data products", body: "Curated, documented data products that agents and models can consume reliably." },
    ],
    outcomes: ["Faster delivery of AI use cases", "Trusted, consistently defined data", "Lower compliance risk", "Reusable data products across teams"],
    approach: [
      { stage: "Reason", body: "Assess data maturity and identify the data that matters for priority AI use cases." },
      { stage: "Evolution", body: "Build foundations in slices tied to real use cases, not in isolation." },
      { stage: "Execution", body: "Operate governance and pipelines in production, with ownership handed to your teams." },
    ],
    industries: ["banking-payments", "insurance", "wealth-markets"], insight: "data-readiness-for-agents",
  },
  {
    slug: "agents-in-production", group: "Data and AI", name: "Agents in production", art: 2,
    summary: "From use case discovery to operated systems, with humans in the loop where it matters.",
    headline: "Agents that do the work.",
    intro: "Agentic AI can sense, decide and act across workflows. The hard part is choosing the right problems and running agents safely at scale. We take agents from idea to operated system inside regulated environments.",
    problem: "Pilots impress in demos but fail on integration, controls and reliability. Many organisations point agents at problems that never pay back.",
    offerings: [
      { title: "Use case discovery", body: "Prioritisation of agent opportunities by value, feasibility and risk." },
      { title: "Agent engineering", body: "Agents integrated with your systems, tools and data, with human hand-off designed in." },
      { title: "Controls and monitoring", body: "Guardrails, audit trails, evaluation and live monitoring of agent behaviour." },
      { title: "Operations", body: "Runbooks, cost management and support models for agents in production." },
    ],
    outcomes: ["Agents that pass internal risk review", "Measured improvements in handling time and quality", "Clear accountability for agent decisions", "Systems your teams can operate"],
    approach: [
      { stage: "Reason", body: "Choose use cases with real payback and define success measures up front." },
      { stage: "Evolution", body: "Pilot with real users and data, then harden based on what you learn." },
      { stage: "Execution", body: "Deploy with controls and monitoring, and transfer operations to your teams." },
    ],
    industries: ["banking-payments", "telecommunications", "insurance"], insight: "choosing-agent-use-cases",
  },
  {
    slug: "model-evaluation", group: "Data and AI", name: "Model evaluation", art: 3,
    summary: "Evaluation suites, red-teaming and documentation that stand up to model risk review.",
    headline: "Evidence that your AI works.",
    intro: "Regulators and risk committees want evidence, not demos. We design evaluations that measure what matters for your use case and produce documentation reviewers can rely on.",
    problem: "Generative AI is hard to test with traditional methods, and promising pilots stall when they reach model risk review.",
    offerings: [
      { title: "Evaluation design", body: "Task-specific test sets and metrics written with domain experts." },
      { title: "Red-teaming", body: "Structured adversarial testing for safety, security and misuse." },
      { title: "Model risk documentation", body: "Evidence packs aligned to your internal model risk framework." },
      { title: "Continuous evaluation", body: "Automated evaluation in pipelines and monitoring in production." },
    ],
    outcomes: ["Faster model risk approval", "Known limits and failure modes", "Repeatable evaluation as models change", "Confidence for business owners"],
    approach: [
      { stage: "Reason", body: "Understand the use case, risks and what reviewers will need to see." },
      { stage: "Evolution", body: "Build and refine evaluations as the system and its risks become clearer." },
      { stage: "Execution", body: "Run evaluations in pipelines and hand over documentation and tooling." },
    ],
    industries: ["banking-payments", "insurance", "ai-labs"], insight: "model-risk-and-generative-ai",
  },
  {
    slug: "expert-datasets", group: "For AI labs", name: "Expert-written datasets", art: 3,
    summary: "Supervised, preference and reasoning data written and reviewed by domain experts.",
    headline: "Better models need better data.",
    intro: "Frontier models improve on the quality of the data they learn from. Generic annotation no longer moves the needle. Our vetted experts write and review data that measurably improves reasoning, coding and domain performance.",
    problem: "Crowd-sourced data lacks depth and consistency in specialist domains, and low-quality examples can hold models back.",
    offerings: [
      { title: "Supervised fine-tuning data", body: "High-quality demonstrations written by practising specialists." },
      { title: "Preference and feedback data", body: "Expert comparisons and critiques for RLHF and DPO pipelines." },
      { title: "Reasoning data", body: "Multi-step problems with worked solutions in code, maths, science and finance." },
      { title: "Quality systems", body: "Multi-stage review, calibration and agreement tracking on every project." },
    ],
    outcomes: ["Measurable gains on target benchmarks", "Consistent, auditable data quality", "Access to hard-to-find specialists", "Fast ramp-up for new domains"],
    approach: [
      { stage: "Reason", body: "Agree target capabilities, data specifications and quality bars with your research team." },
      { stage: "Evolution", body: "Calibrate experts on pilot batches and refine guidelines from model results." },
      { stage: "Execution", body: "Scale production with continuous quality review and transparent reporting." },
    ],
    industries: ["ai-labs"], insight: "what-makes-expert-data-better",
  },
  {
    slug: "rl-environments", group: "For AI labs", name: "RL environments", art: 4,
    summary: "Realistic environments and verifiable tasks for training agentic and tool-using models.",
    headline: "Environments where agents learn real work.",
    intro: "Agentic models need to practise on tasks that look like real work. We design environments, tools and verifiable reward signals across software, enterprise workflows and science.",
    problem: "Toy tasks do not transfer to real-world agent performance, and building rich environments in-house is slow.",
    offerings: [
      { title: "Environment design", body: "Simulated software, business systems and scientific tools for agents to operate." },
      { title: "Task authoring", body: "Expert-written tasks with clear success criteria and difficulty ranges." },
      { title: "Verifiers and rewards", body: "Automated checks and graders that make rewards reliable." },
      { title: "Benchmarking", body: "Held-out task sets to measure progress honestly." },
    ],
    outcomes: ["Agents that transfer to real tasks", "Reliable, verifiable reward signals", "Faster research iteration", "Benchmarks that stay hard"],
    approach: [
      { stage: "Reason", body: "Define the capabilities you want to train and how success will be verified." },
      { stage: "Evolution", body: "Iterate on environments and tasks as model behaviour reveals gaps." },
      { stage: "Execution", body: "Deliver environments, tasks and verifiers ready for training at scale." },
    ],
    industries: ["ai-labs"],
  },
  {
    slug: "domain-experts", group: "For AI labs", name: "Domain experts on demand", art: 0,
    summary: "Vetted specialists in code, finance, STEM, law and medicine, ready to join your projects.",
    headline: "The right expert, when you need them.",
    intro: "Some problems need people who have done the work for years. Our network gives AI labs and enterprises access to vetted specialists who can write, review and evaluate at expert level.",
    problem: "Recruiting specialists for short, intensive projects is slow, and quality varies widely.",
    offerings: [
      { title: "Specialist sourcing", body: "Experts matched to your domain, language and level of seniority." },
      { title: "Four-stage vetting", body: "Profile review, skills assessment, live interview and paid trial project." },
      { title: "Managed delivery", body: "Project leads who manage throughput, quality and calibration." },
      { title: "Flexible scale", body: "Teams that grow and shrink with your research or delivery needs." },
    ],
    outcomes: ["Faster access to scarce expertise", "Consistent quality across experts", "One accountable partner", "Capacity that matches demand"],
    approach: [
      { stage: "Reason", body: "Clarify the expertise, volume and quality bar the work requires." },
      { stage: "Evolution", body: "Start with a calibrated pilot group, then scale with the people who perform best." },
      { stage: "Execution", body: "Deliver with managed quality, clear reporting and flexible capacity." },
    ],
    industries: ["ai-labs", "professional-services"],
  },
];

export const serviceGroups = ["Engineering", "Data and AI", "For AI labs"] as const;
export const getService = (slug: string) => services.find((s) => s.slug === slug);
