/**
 * Site-wide settings. Edit these values to update the whole site.
 * Anything left empty is hidden automatically (for example, social links).
 */
export const site = {
  name: "Rhevix",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rhevix.com",
  tagline: "Engineering What\u2019s Next.",
  headline: "From AI ambition to real-world results.",
  description:
    "Rhevix is an AI-first consulting, engineering and expert network company that takes AI from strategy to production for regulated enterprises and AI labs.",
  mantra: "Reason. Evolution. Execution.",
  email: "hello@rhevix.com",
  // Registered company details for the footer and legal pages. Fill in before launch.
  legalName: "Rhevix",
  registeredAddress: "",
  social: {
    linkedin: "https://www.linkedin.com/company/rhevix/",
    github: "",
    youtube: "",
  },
};

export type NavLink = { label: string; href: string; description?: string };
export type MegaMenu = {
  label: string;
  href: string;
  columns: { heading: string; links: NavLink[] }[];
  feature: { eyebrow: string; title: string; href: string; cta: string; art: number };
};

export const mainNav: MegaMenu[] = [
  {
    label: "What we do",
    href: "/services",
    columns: [
      { heading: "Engineering", links: [
        { label: "AI-native software engineering", href: "/services/ai-native-engineering", description: "Redesign how teams build and ship" },
        { label: "Modernisation", href: "/services/modernisation", description: "Core systems, data and cloud" },
        { label: "Quality engineering", href: "/services/quality-engineering", description: "Testing built for AI-speed delivery" },
      ]},
      { heading: "Data and AI", links: [
        { label: "Data foundations for AI", href: "/services/data-foundations", description: "Trusted, governed, ready for agents" },
        { label: "Agents in production", href: "/services/agents-in-production", description: "From use case to operated system" },
        { label: "Model evaluation", href: "/services/model-evaluation", description: "Evidence for model risk and safety" },
      ]},
      { heading: "For AI labs", links: [
        { label: "Expert-written datasets", href: "/services/expert-datasets", description: "SFT, preference and reasoning data" },
        { label: "RL environments", href: "/services/rl-environments", description: "Agentic and tool-use tasks" },
        { label: "Domain experts on demand", href: "/services/domain-experts", description: "Code, finance, STEM, law" },
      ]},
    ],
    feature: { eyebrow: "Featured", title: "Watch the Rhevix story in sixty seconds.", href: "/story.html", cta: "Watch now", art: 4 },
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      { heading: "Financial services", links: [
        { label: "Banking and payments", href: "/industries/banking-payments", description: "Service, credit and operations" },
        { label: "Insurance", href: "/industries/insurance", description: "Claims, underwriting, policy servicing" },
        { label: "Wealth and markets", href: "/industries/wealth-markets", description: "Advice, research and risk" },
      ]},
      { heading: "Communications", links: [
        { label: "Telecommunications", href: "/industries/telecommunications", description: "Customer and network operations" },
        { label: "Media and technology", href: "/industries/media-technology", description: "Platforms at consumer scale" },
      ]},
      { heading: "Knowledge industries", links: [
        { label: "Professional services", href: "/industries/professional-services", description: "AI inside client delivery" },
        { label: "AI labs", href: "/industries/ai-labs", description: "Data and evaluation for frontier models" },
      ]},
    ],
    feature: { eyebrow: "Point of view", title: "Why most enterprise AI pilots stall, and how to unstick them.", href: "/insights/why-ai-pilots-stall", cta: "Read the article", art: 1 },
  },
  {
    label: "Our work",
    href: "/our-work",
    columns: [
      { heading: "How we work", links: [
        { label: "Our approach", href: "/our-work#approach", description: "Reason, evolution, execution" },
        { label: "Example engagements", href: "/our-work#engagements", description: "What we are built to deliver" },
      ]},
      { heading: "Engagement models", links: [
        { label: "Specialist augmentation", href: "/our-work#engagement-models", description: "Named experts in your teams" },
        { label: "Delivery pods", href: "/our-work#engagement-models", description: "Cross-functional teams, one lead" },
        { label: "Outcome-based projects", href: "/our-work#engagement-models", description: "Fixed scope, milestone acceptance" },
      ]},
      { heading: "Trust", links: [
        { label: "Security and controls", href: "/our-work#trust", description: "Work inside your environments" },
        { label: "Expert vetting", href: "/experts#vetting", description: "Four-stage assessment" },
      ]},
    ],
    feature: { eyebrow: "Start here", title: "Not sure where to begin? Talk to a senior engineer.", href: "/contact", cta: "Contact us", art: 2 },
  },
  {
    label: "Insights",
    href: "/insights",
    columns: [
      { heading: "Read", links: [
        { label: "All insights", href: "/insights", description: "Practical guidance from the field" },
        { label: "Points of view", href: "/insights?type=point-of-view", description: "Where we think AI is going" },
      ]},
      { heading: "Assess", links: [
        { label: "AI readiness assessment", href: "/assessments/ai-readiness", description: "Where you stand today" },
        { label: "Data maturity assessment", href: "/assessments/data-maturity", description: "Is your data ready for agents?" },
      ]},
      { heading: "Watch", links: [
        { label: "The Rhevix story", href: "/story.html", description: "Sixty seconds on what we do" },
      ]},
    ],
    feature: { eyebrow: "Self-assessment", title: "How ready is your organisation to run AI in production?", href: "/assessments/ai-readiness", cta: "Take the assessment", art: 3 },
  },
];

export const secondaryNav: NavLink[] = [
  { label: "Experts", href: "/experts" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  { heading: "What we do", links: [
    { label: "AI-native engineering", href: "/services/ai-native-engineering" },
    { label: "Data foundations", href: "/services/data-foundations" },
    { label: "Agents in production", href: "/services/agents-in-production" },
    { label: "Expert data for AI labs", href: "/services/expert-datasets" },
    { label: "All services", href: "/services" },
  ]},
  { heading: "Industries", links: [
    { label: "Banking and payments", href: "/industries/banking-payments" },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Telecommunications", href: "/industries/telecommunications" },
    { label: "Professional services", href: "/industries/professional-services" },
    { label: "AI labs", href: "/industries/ai-labs" },
  ]},
  { heading: "Company", links: [
    { label: "About us", href: "/about" },
    { label: "Life at Rhevix", href: "/life-at-rhevix" },
    { label: "Careers", href: "/careers" },
    { label: "Join the expert network", href: "/experts" },
    { label: "Contact", href: "/contact" },
  ]},
  { heading: "Resources", links: [
    { label: "Insights", href: "/insights" },
    { label: "Our work", href: "/our-work" },
    { label: "AI readiness assessment", href: "/assessments/ai-readiness" },
    { label: "The Rhevix story", href: "/story.html" },
  ]},
];

export const legalNav: NavLink[] = [
  { label: "Terms of use", href: "/legal/terms" },
  { label: "Privacy statement", href: "/legal/privacy" },
  { label: "Cookie statement", href: "/legal/cookies" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];
