export const heroSlides = [
  { eyebrow: "AI-native engineering", title: "Engineering teams, rebuilt for AI.", text: "Faster code is not the same as faster delivery. We redesign how teams plan, build, test and ship, so AI acceleration shows up in throughput and quality.", cta: { label: "Explore AI-native engineering", href: "/services/ai-native-engineering" }, art: 0 },
  { eyebrow: "Data foundations", title: "Data your AI can trust.", text: "Agents are only as good as the data beneath them. We modernise, govern and secure data so it can be used safely across systems.", cta: { label: "Explore data foundations", href: "/services/data-foundations" }, art: 1 },
  { eyebrow: "Agents in production", title: "Agents that do the work.", text: "From use case discovery to operated systems, we put agentic AI to work inside regulated environments, with humans in the loop where it matters.", cta: { label: "Explore agents in production", href: "/services/agents-in-production" }, art: 2 },
  { eyebrow: "Expert data for AI labs", title: "Better models need better data.", text: "Expert-written datasets, RL environments and evaluations from a vetted network of engineers and domain specialists.", cta: { label: "Explore expert datasets", href: "/services/expert-datasets" }, art: 3 },
  { eyebrow: "The Rhevix story", title: "Reason. Evolution. Execution.", text: "Sixty seconds on why most AI ideas never leave the pilot, and what it takes to change that.", cta: { label: "Watch the story", href: "/story.html" }, art: 4 },
];

export const trustStrip = [
  { icon: "shield", title: "Inside your controls", body: "Delivery in your environments and policies" },
  { icon: "user", title: "Senior, named experts", body: "Vetted in four stages before client work" },
  { icon: "chart", title: "Outcomes agreed up front", body: "Measured and reported to your governance" },
  { icon: "box", title: "No lock-in", body: "Documented handover your teams can own" },
] as const;

export const agenda = [
  { id: "engineering", label: "AI-native engineering", title: "Accelerating software engineering in the AI era.",
    p: ["AI now touches every stage of software delivery. But faster code generation alone rarely makes teams more productive; the bottlenecks move to review, testing and release.",
        "Rhevix helps engineering leaders redesign their operating model so AI acceleration turns into measurable throughput, quality and developer experience."],
    links: [
      { label: "AI-native delivery: an operating model for engineering teams", href: "/insights/ai-native-delivery" },
      { label: "AI-native software engineering services", href: "/services/ai-native-engineering" },
      { label: "Quality engineering at AI speed", href: "/services/quality-engineering" }],
    feature: { eyebrow: "Point of view", title: "Faster code is not faster delivery. The lifecycle has to change.", href: "/insights/ai-native-delivery", art: 0 } },
  { id: "data", label: "Data foundations", title: "Engineering trusted data foundations for AI.",
    p: ["Most AI initiatives sit on data that cannot support them: fragmented, inconsistent and ungoverned, even when the infrastructure is modern.",
        "We modernise legacy data estates, redesign architecture and put governance and sovereignty controls in place, so data can be trusted and safely used by people and agents alike."],
    links: [
      { label: "A data readiness checklist for agentic AI", href: "/insights/data-readiness-for-agents" },
      { label: "Data foundations for AI services", href: "/services/data-foundations" },
      { label: "Modernisation without stopping the business", href: "/services/modernisation" }],
    feature: { eyebrow: "Self-assessment", title: "Is your data ready for agents? Take the eight-question maturity check.", href: "/assessments/data-maturity", art: 1 } },
  { id: "agents", label: "Agents in production", title: "Architecting the agentic enterprise.",
    p: ["Agentic AI moves beyond automating tasks to systems that sense, decide and act across workflows. Most organisations are pointing it at the wrong problems.",
        "Rhevix helps enterprises choose the right use cases, orchestrate agents across platforms and run them in production with the controls a regulator would expect."],
    links: [
      { label: "Choosing agent use cases that pay back", href: "/insights/choosing-agent-use-cases" },
      { label: "Model risk and generative AI: what reviewers will ask for", href: "/insights/model-risk-and-generative-ai" },
      { label: "Agents in production services", href: "/services/agents-in-production" }],
    feature: { eyebrow: "Point of view", title: "Why most enterprise AI pilots stall, and the three decisions that unstick them.", href: "/insights/why-ai-pilots-stall", art: 2 } },
  { id: "labs", label: "Expert data for AI labs", title: "Better models through expert data.",
    p: ["Frontier models improve on the quality of the data and environments they learn from. Generic annotation no longer moves the needle.",
        "Our vetted network of engineers and domain specialists produces the datasets, RL environments and evaluations that measurably improve reasoning, coding and domain performance."],
    links: [
      { label: "What makes expert data measurably better", href: "/insights/what-makes-expert-data-better" },
      { label: "RL environments for agentic models", href: "/services/rl-environments" },
      { label: "Model evaluation and red-teaming", href: "/services/model-evaluation" }],
    feature: { eyebrow: "Capabilities", title: "Expert-written datasets for frontier labs.", href: "/services/expert-datasets", art: 3 } },
  { id: "people", label: "AI-ready organisations", title: "Building AI-ready leaders and teams.",
    p: ["AI is changing how work gets done, but most organisations focus on tools rather than people. Ways of working stay the same and value stalls.",
        "We help leaders redesign operating models, build AI skills across the workforce and drive the behavioural change that makes adoption stick."],
    links: [
      { label: "Leading an AI-enabled organisation", href: "/insights/leading-an-ai-enabled-organisation" },
      { label: "Take the AI readiness assessment", href: "/assessments/ai-readiness" },
      { label: "How we work with clients", href: "/our-work" }],
    feature: { eyebrow: "Self-assessment", title: "AI readiness: does your organisation have what it takes?", href: "/assessments/ai-readiness", art: 4 } },
];

export const tiles = [
  { eyebrow: "Insights", title: "Ideas backed by experience", cta: "Explore our insights", href: "/insights", art: 1 },
  { eyebrow: "Careers", title: "Quality starts with our people", cta: "Join our team", href: "/careers", art: 2 },
  { eyebrow: "Culture", title: "A culture built on expertise", cta: "Life at Rhevix", href: "/life-at-rhevix", art: 3 },
  { eyebrow: "Our work", title: "Work that defines us", cta: "See how we work", href: "/our-work", art: 4 },
];

export const why = [
  { icon: "check", title: "Accountable end to end", body: "Strategy, engineering and enablement from one team, measured against outcomes agreed on day one." },
  { icon: "building", title: "Built for regulated industries", body: "Delivery inside your environments, access policies and model risk processes, not around them." },
  { icon: "users", title: "A vetted expert network", body: "Senior engineers and domain specialists, assessed in four stages and matched to the problem." },
  { icon: "compass", title: "Honest about AI", body: "We tell you where AI will help, where it will not, and what it will take to get there." },
] as const;

// Platforms our engineers work with. Confirm before launch; these are skills, not partnerships.
export const technologies = ["AWS", "Microsoft Azure", "Google Cloud", "Snowflake", "Databricks", "Kubernetes", "Terraform", "PyTorch", "Hugging Face", "LangGraph", "OpenAI API", "Anthropic API", "GitHub", "ServiceNow", "Salesforce"];

export const lifeCards = [
  { title: "Mission and values", body: "What we stand for, and how it guides the way we work with clients and each other.", cta: "Learn what drives us", href: "/life-at-rhevix#mission", art: 3 },
  { title: "Careers", body: "Join a team that values expertise, growth and collaboration.", cta: "View careers", href: "/careers", art: 0 },
  { title: "Culture", body: "An environment where people are trusted to do their best work.", cta: "Explore our culture", href: "/life-at-rhevix#culture", art: 4 },
  { title: "Community", body: "Education, open source and opportunity in the communities we belong to.", cta: "See how we engage", href: "/life-at-rhevix#community", art: 1 },
  { title: "Belonging", body: "Mutual respect and inclusion, with room for every voice to be heard.", cta: "A place to belong", href: "/life-at-rhevix#belonging", art: 2 },
];
