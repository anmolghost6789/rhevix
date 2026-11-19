export const about = {
  headline: "We close the gap between AI ambition and real-world results.",
  intro: "Rhevix is an AI-first consulting, engineering and expert network company. We work with regulated enterprises putting AI into production, and with AI labs building better models.",
  values: [
    { title: "Reason first", body: "Understand the problem before building anything. Say plainly when AI is not the answer." },
    { title: "Evolve with the work", body: "Teams change shape as the work does. We add, swap and stand down expertise against milestones." },
    { title: "Execute to production", body: "Success means systems people rely on, measured against outcomes agreed on day one." },
    { title: "Earn trust", body: "Work inside our clients' controls, protect their data, and hand over what we build." },
  ],
  // Add leaders here to show a leadership section on the About page.
  leadership: [] as { name: string; role: string; bio: string }[],
};

export const engagementModels = [
  { name: "Specialist augmentation", body: "Named engineers or experts embedded in your teams and directed by your leads.", best: "Filling specific skills gaps quickly", pay: "Monthly, time and materials", governance: "Directed by your team leads" },
  { name: "Delivery pods", body: "A cross-functional team led by a Rhevix delivery manager against an agreed roadmap.", best: "Ongoing programmes with evolving scope", pay: "Monthly, based on team capacity", governance: "Quarterly steering reviews" },
  { name: "Outcome-based projects", body: "A defined deliverable with acceptance criteria, timeline and fixed commercial terms.", best: "Well-scoped initiatives", pay: "Fixed price, paid by milestone", governance: "Milestone acceptance" },
];

export const exampleEngagements = [
  { sector: "AI lab", title: "Expert coding data for a reasoning model", challenge: "Model performance plateaued on multi-file software tasks.", work: "Senior engineers wrote and reviewed task trajectories with verifiable tests.", measure: "Pass rate on held-out repository benchmarks." },
  { sector: "Bank", title: "A customer assistant, ready for model risk", challenge: "A promising pilot could not pass internal model risk review.", work: "Built evaluation suites, controls and monitoring, then deployed in the bank's cloud.", measure: "Containment rate, accuracy and review approval." },
  { sector: "Telecom", title: "Agents for high-volume service operations", challenge: "Millions of routine requests handled manually across systems.", work: "A delivery pod integrated agents with billing and CRM, with human hand-off.", measure: "Handling time, resolution rate and customer satisfaction." },
];

export const trustControls = [
  { title: "Your environments", body: "Work runs in your infrastructure and tools, under your access and change-management policies." },
  { title: "Screened people", body: "Every specialist is technically assessed and background-screened to the standard you require." },
  { title: "Data protection", body: "Data is handled under your terms and visible only to named individuals, with access removed at the end." },
  { title: "Transparent reporting", body: "Progress, risks and spend are reported into your governance forums, on your cadence." },
];

export const vetting = [
  { title: "Profile and domain review", body: "Experience and credentials checked against the domain." },
  { title: "Skills assessment", body: "Practical tasks in the expert's field, marked by senior reviewers." },
  { title: "Live interview", body: "Reasoning, communication and quality bar, assessed by a specialist." },
  { title: "Trial project", body: "Paid, real work before joining client engagements." },
];

export const expertRoles = ["Software engineers", "ML engineers", "Data scientists", "Mathematicians", "Physicists", "Chemists", "Finance specialists", "Lawyers", "Doctors", "Linguists"];

// Add open roles here; they appear on the Careers page automatically.
export const openRoles = [] as { title: string; location: string; type: string; summary: string }[];

export const life = [
  { id: "mission", title: "Mission and values", body: "Our mission is to close the gap between AI ambition and real-world results. We reason before we build, evolve with the work, and execute to production. We are honest with clients about what AI can and cannot do, and we hold ourselves to outcomes, not activity.", art: 3 },
  { id: "culture", title: "Culture", body: "We are a company of experts who respect expertise. People are trusted with real responsibility, supported to learn, and recognised for the quality of their work. Feedback is direct and kind.", art: 4 },
  { id: "community", title: "Community", body: "We contribute to the communities we belong to through teaching, open-source work and creating opportunities for people entering technology and specialist fields.", art: 1 },
  { id: "belonging", title: "Belonging", body: "Mutual respect and inclusion are at the heart of how we work. We want every person at Rhevix to feel valued, heard and able to do their best work.", art: 2 },
];
