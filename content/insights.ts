/**
 * Insights (articles). Each article body is a list of blocks:
 *   { h: "Heading" }  { p: "Paragraph" }  { ul: ["item", "item"] }
 * Add an article by appending an object; it gets its own page automatically.
 */
export type Block = { h: string } | { p: string } | { ul: string[] };
export type Insight = {
  slug: string;
  type: "Point of view" | "Guide" | "Research" | "Company";
  title: string;
  summary: string;
  date: string; // ISO date
  readMinutes: number;
  art: number;
  body: Block[];
};

export const insights: Insight[] = [
  {
    slug: "why-ai-pilots-stall", type: "Point of view", date: "2026-10-01", readMinutes: 5, art: 1,
    title: "Why most enterprise AI pilots stall, and the three decisions that unstick them",
    summary: "Pilots rarely fail on technology. They fail on ownership, measurement and the path to production.",
    body: [
      { p: "Almost every large organisation now has a portfolio of AI pilots. Far fewer have AI systems that customers and colleagues rely on every day. The gap is rarely about model capability. It is about decisions that were never made." },
      { h: "1. Decide who owns the outcome" },
      { p: "Pilots are often owned by an innovation team, while the process they would change belongs to an operations leader who was never asked. Before building, name the business owner who will run the system and be accountable for its results." },
      { h: "2. Decide how success will be measured" },
      { p: "\"It works in the demo\" is not a success measure. Agree the metric that matters, such as handling time, accuracy or cost per case, measure today's baseline, and set the threshold that justifies going live." },
      { h: "3. Decide the path to production on day one" },
      { p: "Model risk, security, data access and support models take time. Treat them as part of the build, not a gate at the end. A pilot designed for production from the start moves faster, not slower." },
      { h: "What this looks like in practice" },
      { ul: ["A named business owner and a written success measure before any code", "Risk and security reviewers involved in the first sprint", "A pilot that runs on real data, in a production-like environment", "A go or no-go decision at a fixed date, based on the agreed measure"] },
      { p: "None of this is glamorous. All of it is the difference between an impressive demo and a system that pays back." },
    ],
  },
  {
    slug: "model-risk-and-generative-ai", type: "Guide", date: "2026-09-24", readMinutes: 6, art: 3,
    title: "Model risk and generative AI: what reviewers will ask for",
    summary: "A practical checklist for getting generative AI systems through model risk review.",
    body: [
      { p: "Model risk frameworks were designed for scorecards and statistical models. Generative AI challenges many of their assumptions, but the underlying questions are the same: what does the system do, how do we know it works, and what happens when it does not?" },
      { h: "Purpose and scope" },
      { p: "Reviewers will want a clear statement of the use case, the decisions the system supports, and the decisions it must never make on its own." },
      { h: "Evidence of performance" },
      { ul: ["Evaluation sets that reflect real inputs, including difficult and adversarial cases", "Metrics tied to business risk, not just generic benchmarks", "Results broken down by segment to reveal uneven performance", "Known limitations, documented in plain language"] },
      { h: "Controls" },
      { p: "Expect questions about guardrails, human review, logging and the ability to switch the system off. Show how outputs are monitored in production and who responds when something goes wrong." },
      { h: "Change management" },
      { p: "Models and prompts change. Reviewers will ask how changes are tested and approved. Continuous evaluation in your pipelines turns this from a burden into a routine." },
      { p: "Teams that prepare this evidence from the start find model risk review becomes a checkpoint rather than a wall." },
    ],
  },
  {
    slug: "what-makes-expert-data-better", type: "Research", date: "2026-09-15", readMinutes: 5, art: 0,
    title: "What makes expert data measurably better for reasoning models",
    summary: "Depth, consistency and verifiability matter more than volume once models reach a certain level.",
    body: [
      { p: "As models improve, the data that helps them improve changes. Large volumes of generic examples give way to smaller sets of difficult, carefully reviewed material written by people who know the domain." },
      { h: "Difficulty that matches the frontier" },
      { p: "Useful examples sit just beyond what the model can already do. Experts are better at finding that edge because they know where real problems get hard." },
      { h: "Consistency through calibration" },
      { p: "Two experts can disagree on style while agreeing on substance. Calibration rounds, clear guidelines and agreement tracking keep data consistent enough to learn from." },
      { h: "Verifiability" },
      { p: "Where possible, tasks should have answers that can be checked automatically, such as tests for code or numerical answers for maths. Verifiable data makes training signals more reliable and evaluation more honest." },
      { ul: ["Prefer fewer, harder examples over many easy ones", "Invest in reviewer calibration before scaling", "Design tasks with verifiable outcomes wherever possible", "Hold out evaluation sets that the data team never sees"] },
    ],
  },
  {
    slug: "introducing-rhevix", type: "Company", date: "2026-09-01", readMinutes: 3, art: 2,
    title: "Introducing Rhevix: reason, evolution, execution",
    summary: "Why we started Rhevix, and the method behind everything we do.",
    body: [
      { p: "Rhevix exists to close the gap between AI ambition and real-world results. We work with regulated enterprises putting AI into production, and with AI labs building better models." },
      { h: "Reason" },
      { p: "We understand the problem before building anything, and we say plainly where AI is not the right answer." },
      { h: "Evolution" },
      { p: "Our teams change shape as the work does. Specialists from our vetted network are added, swapped and stood down against agreed milestones." },
      { h: "Execution" },
      { p: "We deliver systems into production, inside our clients' controls, measured against outcomes agreed on day one, and handed over to teams who can own them." },
      { p: "If that sounds like the partner you need, we would like to hear from you." },
    ],
  },
  {
    slug: "ai-native-delivery", type: "Point of view", date: "2026-08-20", readMinutes: 5, art: 4,
    title: "AI-native delivery: an operating model for engineering teams",
    summary: "Faster code is not faster delivery. The lifecycle has to change.",
    body: [
      { p: "Coding assistants have made individual developers faster. Yet many organisations see little change in how quickly value reaches customers. The reason is simple: the bottleneck has moved." },
      { h: "Where the time goes now" },
      { ul: ["Reviewing larger volumes of generated code", "Testing and integration that were already slow", "Release processes designed for a slower pace", "Rework caused by unclear requirements"] },
      { h: "Redesigning the lifecycle" },
      { p: "AI-native teams use AI across planning, testing, documentation and release, not just coding. They change review practices, invest in platform automation and measure delivery outcomes rather than tool usage." },
      { h: "Measuring what matters" },
      { p: "Lead time, deployment frequency, change failure rate and time to recover remain the best signals. Baseline them before rolling out AI, and you will know whether it is working." },
    ],
  },
  {
    slug: "data-readiness-for-agents", type: "Guide", date: "2026-08-08", readMinutes: 4, art: 1,
    title: "A data readiness checklist for agentic AI",
    summary: "Ten questions to answer before you let agents act on your data.",
    body: [
      { p: "Agents do not just read data. They act on it. That raises the bar for quality, definitions and access control." },
      { h: "Ten questions to ask" },
      { ul: ["Do we know which data the use case depends on?", "Is each key data set owned by a named person?", "Are business terms defined consistently across systems?", "Do we measure data quality, and act on the results?", "Can we trace where data came from?", "Are access permissions enforced at the data level?", "Do we meet residency and privacy obligations?", "Can agents access data through stable interfaces?", "Do we log what data agents read and change?", "Can we roll back changes an agent makes?"] },
      { p: "If you answered no to more than three, start with foundations before scaling agents. Our data maturity assessment can help you see where to begin." },
    ],
  },
  {
    slug: "choosing-agent-use-cases", type: "Guide", date: "2026-07-28", readMinutes: 4, art: 2,
    title: "Choosing agent use cases that pay back",
    summary: "A simple way to rank agent opportunities by value, feasibility and risk.",
    body: [
      { p: "Agentic AI can be pointed at almost anything. The organisations that succeed are disciplined about where they start." },
      { h: "Score each opportunity" },
      { ul: ["Value: volume, cost per case and impact on customers", "Feasibility: data availability, system access and process clarity", "Risk: consequences of errors and regulatory exposure", "Adoption: willingness of the people who will work alongside the agent"] },
      { h: "Start where the scores meet" },
      { p: "The best first use cases are high-volume, rules-heavy processes with clear success measures and a human who can review edge cases. Leave high-risk, low-volume decisions for later." },
      { p: "A handful of well-chosen use cases, delivered properly, will do more for your AI programme than dozens of pilots." },
    ],
  },
  {
    slug: "leading-an-ai-enabled-organisation", type: "Point of view", date: "2026-07-14", readMinutes: 4, art: 0,
    title: "Leading an AI-enabled organisation",
    summary: "Tools are the easy part. Operating models and behaviour are where value is won.",
    body: [
      { p: "Most AI programmes focus on tools. The organisations seeing real value focus on people: how work is organised, how decisions are made and how skills are built." },
      { h: "Three shifts for leaders" },
      { ul: ["From projects to products: give AI capabilities long-lived owners", "From training sessions to practice: build skills in the flow of real work", "From adoption metrics to outcomes: measure business results, not logins"] },
      { p: "Leaders set the tone. When they use AI in their own work and talk openly about what it can and cannot do, adoption follows." },
    ],
  },
];

export const insightTypes = ["Point of view", "Guide", "Research", "Company"] as const;
export const typeSlug = (t: string) => t.toLowerCase().replace(/\s+/g, "-");
export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
