import {
  ArrowRight,
  Sparkles,
  Cpu,
  Code2,
  Database,
  LineChart,
  Bot,
  Brain,
  Shield,
  Layers,
  Zap,
  TrendingUp,
  Server,
  Building2,
  Stethoscope,
  Briefcase,
  Landmark,
  Compass,
  CheckCircle2,
  MapPin,
  ExternalLink,
  Users2,
  Workflow,
  Laptop,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroInteractiveConsole } from "@/components/HeroInteractiveConsole";
import { TechStackMatrix } from "@/components/TechStackMatrix";
import { ApproachStepper } from "@/components/ApproachStepper";
import { ContactForm } from "@/components/ContactForm";
import { AiArchitectureFlow } from "@/components/AiArchitectureFlow";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-900 light-grid relative selection:bg-blue-500/20 selection:text-blue-900">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none glow-ambient-blue opacity-70"></div>
      <div className="fixed inset-0 pointer-events-none glow-ambient-violet opacity-60"></div>

      {/* Main Navbar */}
      <Navbar />

      <main id="main">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headline, Supporting Statement, CTAs & Metrics */}
              <div className="lg:col-span-7 space-y-7">
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  <span>Built for the Next Generation of Business</span>
                </div>

                {/* Main Hero Header */}
                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
                    AI. Data. Engineering. <br />
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                      Built for the Next Generation of Business.
                    </span>
                  </h1>
                </div>

                {/* Concise Supporting Statement */}
                <div className="space-y-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                  <p>
                    <strong className="text-slate-900 font-semibold">RHEVIX</strong> is a technology company helping
                    organizations build intelligent products, modernize technology, and turn complex business
                    challenges into scalable digital solutions.
                  </p>
                  <p className="text-slate-500 text-sm sm:text-base">
                    We bring together expertise across Artificial Intelligence, Data Engineering, Software
                    Engineering, Analytics, and Cloud to help businesses move faster, operate smarter, and build for
                    what comes next.
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm italic border-l-2 border-blue-500 pl-3">
                    From intelligent systems and AI agents to modern data platforms and enterprise applications,
                    RHEVIX combines engineering depth with business understanding to deliver technology that creates
                    measurable impact.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Build With RHEVIX</span>
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href="#capabilities"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Explore Capabilities</span>
                    <ArrowRight size={16} className="text-blue-600" />
                  </a>
                </div>

                {/* Trust / Metrics Cards */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200/80">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                    <span className="block font-mono text-slate-900 font-extrabold text-2xl tracking-tight">50+</span>
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Years Combined Experience
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                    <span className="block font-mono text-blue-600 font-extrabold text-xl tracking-tight">AI-NATIVE</span>
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Production Engineering
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                    <span className="block font-mono text-slate-900 font-extrabold text-2xl tracking-tight">3</span>
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Global Locations (Nagpur · Pune · Dubai)
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Architectural Console */}
              <div className="lg:col-span-5">
                <HeroInteractiveConsole />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. ENGINEERING INTELLIGENCE (Capabilities) */}
        {/* ========================================================================= */}
        <section id="capabilities" className="py-24 border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
                <Cpu size={14} /> ENGINEERING INTELLIGENCE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Technology Built Around Your Ambition.
              </h2>
              <div className="space-y-2 text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
                <p>The next generation of technology isn't defined by a single platform or programming language.</p>
                <p className="font-semibold text-slate-800">It's defined by what organizations can build with them.</p>
                <p className="text-slate-500 text-sm sm:text-base">
                  RHEVIX brings together AI, software engineering, data, and cloud capabilities to help organizations
                  create new products, modernize existing systems, and unlock entirely new ways of working.
                </p>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pillar 1: Artificial Intelligence */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-lg hover:border-blue-400/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-105 transition-transform">
                    <Brain size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Artificial Intelligence</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Build intelligent systems that automate complex workflows and create new possibilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "Generative AI",
                      "Agentic AI",
                      "Machine Learning",
                      "AI Automation",
                      "AI Engineering",
                      "Enterprise AI",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#ai"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Explore AI</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Pillar 2: Software Engineering */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-lg hover:border-indigo-400/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-105 transition-transform">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Software Engineering</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Design and build scalable digital products, platforms, and enterprise applications engineered for performance and growth.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "Application Development",
                      "Product Engineering",
                      "API & Microservices",
                      "Cloud-Native Development",
                      "Modernization",
                      "Quality Engineering",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Explore Engineering</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Pillar 3: Data Engineering */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-lg hover:border-sky-400/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-105 transition-transform">
                    <Database size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Engineering</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Build the data foundations required for modern analytics, AI, and intelligent applications.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "Data Architecture",
                      "Data Platforms",
                      "Data Pipelines",
                      "Cloud Data Engineering",
                      "Data Integration",
                      "Data Governance",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#technology"
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Explore Data Engineering</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Pillar 4: Analytics & Intelligence */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-lg hover:border-amber-400/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-105 transition-transform">
                    <LineChart size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Analytics & Intelligence</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Transform data into intelligence that drives better decisions across the organization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "Business Intelligence",
                      "Advanced Analytics",
                      "Data Science",
                      "Predictive Analytics",
                      "Decision Intelligence",
                      "Visualization",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Explore Analytics</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. RHEVIX AI (Dedicated Visual Section) */}
        {/* ========================================================================= */}
        <section id="ai" className="py-24 border-b border-slate-200/80 relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-blue-50/20 to-slate-50/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono uppercase tracking-wider font-semibold">
                  <Bot size={14} /> RHEVIX AI
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Build With Intelligence.
                </h2>
                <div className="space-y-3 text-slate-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    AI is changing how software is built, how businesses operate, and what organizations can accomplish.
                  </p>
                  <p className="text-slate-800 font-medium">
                    RHEVIX helps businesses move beyond AI experimentation and build intelligent systems that work in the real world.
                  </p>
                  <p className="text-slate-500 text-sm sm:text-base">
                    From AI copilots and autonomous agents to enterprise knowledge systems and intelligent automation,
                    we combine AI capabilities with strong engineering foundations to create solutions that are secure,
                    scalable, and production-ready.
                  </p>
                </div>

                {/* AI Capabilities Cards */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles size={16} className="text-purple-600" />
                      Enterprise AI Capabilities
                    </h4>
                    <span className="text-[11px] font-mono text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full font-semibold">
                      Production Tier
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Generative AI",
                      "Agentic AI",
                      "AI Agents",
                      "Enterprise LLM Solutions",
                      "Retrieval-Augmented Generation",
                      "AI Automation",
                      "AI-powered Applications",
                      "Machine Learning",
                      "AI Strategy & Advisory",
                    ].map((cap, i) => (
                      <div
                        key={cap}
                        className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-all ${
                          i === 1 || i === 2
                            ? "bg-purple-50 border-purple-200 text-purple-800"
                            : "bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                    <span>Audit Ready · Zero Data Leakage</span>
                    <span className="text-blue-600 font-mono font-medium">SOC2 Compliant Architecture</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Explore RHEVIX AI</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Right Column: AI Architecture Diagram (Requirement 8) */}
              <div className="lg:col-span-6">
                <AiArchitectureFlow />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHAT WE BUILD (Requirement 9) */}
        {/* ========================================================================= */}
        <section id="what-we-build" className="py-24 border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase tracking-wider font-semibold">
                <Workflow size={14} /> WHAT WE BUILD
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                From Ideas to Intelligent Systems.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Technology should solve a problem, create an advantage, or open a new opportunity. We work across the
                complete journey — from strategy and architecture to engineering, deployment, and continuous
                evolution.
              </p>
            </div>

            {/* 5 Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "01",
                  title: "Intelligent Products",
                  desc: "AI-powered applications and digital products designed around real customer and business needs.",
                  icon: Sparkles,
                  color: "text-blue-600",
                  bg: "bg-blue-50 border-blue-200",
                },
                {
                  id: "02",
                  title: "Modern Data Platforms",
                  desc: "Scalable data ecosystems that provide the foundation for analytics, AI, and intelligent decision-making.",
                  icon: Database,
                  color: "text-sky-600",
                  bg: "bg-sky-50 border-sky-200",
                },
                {
                  id: "03",
                  title: "Enterprise Applications",
                  desc: "Modern applications and platforms engineered to improve productivity, efficiency, and customer experiences.",
                  icon: Laptop,
                  color: "text-indigo-600",
                  bg: "bg-indigo-50 border-indigo-200",
                },
                {
                  id: "04",
                  title: "AI-Powered Automation",
                  desc: "Intelligent workflows that reduce repetitive work and allow teams to focus on higher-value activities.",
                  icon: Zap,
                  color: "text-amber-600",
                  bg: "bg-amber-50 border-amber-200",
                },
                {
                  id: "05",
                  title: "Digital Modernization",
                  desc: "Modernizing legacy systems, applications, and data environments for the cloud and AI era.",
                  icon: Server,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-200",
                },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                          DELIVERABLE {item.id}
                        </span>
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${item.bg}`}>
                          <ItemIcon size={18} className={item.color} />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. TECHNOLOGY (Tech Stack Matrix) */}
        {/* ========================================================================= */}
        <section id="technology" className="py-24 border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
                <Layers size={14} /> TECHNOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Built Across the Modern Technology Stack.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Our engineering teams work across the technologies powering modern digital businesses.
              </p>
            </div>

            <TechStackMatrix />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. WHY RHEVIX (Key Differentiators) */}
        {/* ========================================================================= */}
        <section id="why-rhevix" className="py-24 border-b border-slate-200/80 relative bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono uppercase tracking-wider font-semibold">
                <Shield size={14} /> WHY RHEVIX
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Built for Organizations That Want to Move Faster.
              </h2>
            </div>

            {/* 5 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Deep Technical Expertise",
                  desc: "Our leadership and engineering teams bring decades of combined experience across software, data, analytics, AI, and enterprise technology.",
                  icon: Users2,
                },
                {
                  title: "AI-Native Thinking",
                  desc: "We don't treat AI as an add-on. We explore how intelligence can be embedded into products, platforms, workflows, and decision-making.",
                  icon: Brain,
                },
                {
                  title: "Engineering First",
                  desc: "Strong architecture, scalable systems, quality engineering, and disciplined execution are at the core of everything we build.",
                  icon: Code2,
                },
                {
                  title: "Business Outcomes",
                  desc: "We connect technology decisions to measurable business objectives — improving efficiency, creating new capabilities, and enabling growth.",
                  icon: TrendingUp,
                },
                {
                  title: "Built to Scale",
                  desc: "Our solutions are designed with scalability, maintainability, security, and long-term evolution in mind.",
                  icon: Server,
                },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 mb-5">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. OUR EXPERIENCE */}
        {/* ========================================================================= */}
        <section id="experience" className="py-24 border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
                <Briefcase size={14} /> OUR EXPERIENCE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Experience Across Complex Technology Challenges.
              </h2>
              <div className="space-y-2 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Our team brings extensive experience delivering technology initiatives across data, analytics,
                  software engineering, AI, and digital transformation.
                </p>
                <p className="text-slate-500 text-sm sm:text-base">
                  Our experience spans organizations and projects across industries including financial services,
                  healthcare, pharmaceuticals, consulting, and enterprise technology.
                </p>
              </div>
            </div>

            {/* Selected Areas of Experience Cards */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
                Selected Areas of Experience
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Enterprise Analytics",
                    desc: "Building and modernizing analytics platforms that turn complex enterprise data into actionable intelligence.",
                  },
                  {
                    title: "Data Platform Engineering",
                    desc: "Designing scalable data architectures and engineering foundations for analytics and AI.",
                  },
                  {
                    title: "AI & Intelligent Solutions",
                    desc: "Applying machine learning, generative AI, and intelligent automation to real-world business problems.",
                  },
                  {
                    title: "Digital Products",
                    desc: "Engineering applications and platforms designed around customer and operational needs.",
                  },
                  {
                    title: "Technology Modernization",
                    desc: "Helping organizations evolve legacy environments into modern, scalable technology ecosystems.",
                  },
                ].map((exp) => (
                  <div
                    key={exp.title}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <CheckCircle2 size={16} />
                      <h4 className="text-lg font-bold text-slate-900">{exp.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. INDUSTRIES */}
        {/* ========================================================================= */}
        <section id="industries" className="py-24 border-b border-slate-200/80 relative bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono uppercase tracking-wider font-semibold">
                <Building2 size={14} /> INDUSTRIES
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Technology That Understands Your Business.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Banking & Financial Services",
                  desc: "Modern data platforms, analytics, AI, automation, and digital solutions for organizations operating in one of the world's most data-intensive industries.",
                  icon: Landmark,
                  badge: "Regulated Systems",
                },
                {
                  title: "Healthcare & Pharma",
                  desc: "Technology solutions that help organizations unlock data, improve operations, and enable intelligent decision-making.",
                  icon: Stethoscope,
                  badge: "Clinical & Ops Data",
                },
                {
                  title: "Enterprise",
                  desc: "Helping large organizations modernize technology, improve productivity, and build intelligent capabilities.",
                  icon: Building2,
                  badge: "Scale & Modernization",
                },
                {
                  title: "Consulting & Technology",
                  desc: "Engineering and technology capabilities that help organizations accelerate complex transformation programs.",
                  icon: Briefcase,
                  badge: "Delivery Velocity",
                },
              ].map((ind) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={ind.title}
                    className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600">
                          <IndIcon size={20} />
                        </div>
                        <span className="text-[10px] font-mono text-slate-600 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                          {ind.badge}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{ind.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. THE RHEVIX APPROACH */}
        {/* ========================================================================= */}
        <section id="approach" className="py-24 border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
                <Compass size={14} /> THE RHEVIX APPROACH
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Think. Engineer. Evolve.
              </h2>
            </div>

            <ApproachStepper />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. LEADERSHIP */}
        {/* ========================================================================= */}
        <section id="leadership" className="py-24 border-b border-slate-200/80 relative bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono uppercase tracking-wider font-semibold">
                  <Users2 size={14} /> LEADERSHIP
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Experience That Shapes the Future.
                </h2>
                <div className="space-y-3 text-slate-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    RHEVIX is guided by technology leaders with extensive experience across software engineering, data,
                    analytics, AI, consulting, and enterprise transformation.
                  </p>
                  <p className="font-semibold text-slate-800">
                    With 50+ years of combined leadership experience, our team brings a practical understanding of how
                    technology can create lasting business value.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    <span>Meet Our Leadership</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center space-y-3">
                  <div className="text-5xl font-black font-mono text-slate-900 tracking-tight">50+</div>
                  <h4 className="text-lg font-bold text-slate-900">Years Combined Leadership</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Senior executives and engineering directors who have scaled mission-critical platforms in Fortune 500
                    banks, healthcare, and enterprise tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. LET'S BUILD WHAT'S NEXT (Interactive Contact Form) */}
        {/* ========================================================================= */}
        <section id="contact" className="py-24 border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Context */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
                  <Sparkles size={14} /> LET'S BUILD WHAT'S NEXT.
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Your Next Technology Advantage Starts Here.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Whether you're building an AI-powered product, modernizing your data platform, engineering a new
                  digital experience, or exploring what's possible with intelligent systems — RHEVIX can help turn the
                  opportunity into reality.
                </p>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">What to Expect</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-blue-600" />
                      Direct consultation with senior technology leaders
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-blue-600" />
                      Mutual NDA executed prior to deep architectural discussion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-blue-600" />
                      Clear technical roadmap and feasibility assessment
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.06)]">
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900">Tell us what you're building.</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below and our team will get in touch shortly.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 12. FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-slate-50 border-t border-slate-200/90 pt-16 pb-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="col-span-2 space-y-4">
              <a href="/" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-black font-mono">
                  R
                </div>
                <span className="font-black text-xl tracking-wider text-slate-900">RHEVIX</span>
              </a>
              <p className="text-sm text-slate-700 font-medium max-w-sm">
                AI. Data. Engineering. Built for the Next Generation of Business.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Helping organizations build intelligent products, modernize technology, and turn complex business
                challenges into scalable digital solutions.
              </p>
            </div>

            {/* Column 1: Capabilities */}
            <div>
              <h5 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs font-mono">Capabilities</h5>
              <ul className="space-y-2.5">
                {[
                  "Artificial Intelligence",
                  "Agentic AI",
                  "Software Engineering",
                  "Product Engineering",
                  "Data Engineering",
                  "Data & Analytics",
                  "Cloud",
                  "Digital Modernization",
                ].map((item) => (
                  <li key={item}>
                    <a href="#capabilities" className="hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Industries & Company */}
            <div>
              <h5 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs font-mono">Industries</h5>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Banking & Financial Services",
                  "Healthcare & Pharma",
                  "Enterprise",
                  "Consulting & Technology",
                ].map((item) => (
                  <li key={item}>
                    <a href="#industries" className="hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <h5 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs font-mono">Company</h5>
              <ul className="space-y-2.5">
                {[
                  { name: "About RHEVIX", href: "#main" },
                  { name: "Leadership", href: "#leadership" },
                  { name: "Our Approach", href: "#approach" },
                  { name: "Experience", href: "#experience" },
                  { name: "Careers", href: "#contact" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-blue-600 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources & Connect */}
            <div>
              <h5 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs font-mono">Resources</h5>
              <ul className="space-y-2.5 mb-6">
                {["Insights", "Case Studies", "Technology", "Events"].map((item) => (
                  <li key={item}>
                    <a href="#technology" className="hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <h5 className="font-bold text-slate-900 uppercase tracking-wider mb-4 text-xs font-mono">Connect</h5>
              <ul className="space-y-2.5">
                {["LinkedIn", "X", "YouTube"].map((item) => (
                  <li key={item}>
                    <a
                      href={`https://${item.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{item}</span>
                      <ExternalLink size={10} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Locations Bar */}
          <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin size={16} className="text-blue-600" />
              <span className="font-bold text-slate-900 font-mono uppercase tracking-wider">Locations:</span>
              <span className="text-slate-600 font-medium">Nagpur · Pune · Dubai</span>
            </div>

            <div className="text-slate-500">
              <span>Copyright © 2026 RHEVIX. All Rights Reserved.</span>
            </div>
          </div>

          {/* Legal Bar */}
          <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
            <div className="flex items-center gap-4">
              <a href="#main" className="hover:text-slate-800 transition-colors">
                Privacy Policy
              </a>
              <span>·</span>
              <a href="#main" className="hover:text-slate-800 transition-colors">
                Corporate Information
              </a>
            </div>
            <span>Built with Engineering Excellence</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
