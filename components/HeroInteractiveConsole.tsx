"use client";

import { useState } from "react";
import { Cpu, Database, Cloud, LineChart, ShieldCheck, Activity, ArrowUpRight } from "lucide-react";

export function HeroInteractiveConsole() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "ai",
      title: "Agentic AI & LLMs",
      badge: "Autonomous Agents",
      icon: Cpu,
      accent: "text-blue-600",
      accentBg: "bg-blue-50 text-blue-700 border-blue-200",
      metrics: [
        { label: "Orchestration", value: "Multi-Agent Swarm" },
        { label: "Retrieval", value: "Vector RAG + Graph" },
        { label: "Latency", value: "< 240ms P99" },
      ],
      description:
        "Enterprise LLM architectures and autonomous agent workflows embedded with guardrails, observability, and domain grounding.",
    },
    {
      id: "data",
      title: "Modern Data Platform",
      badge: "Zero-Latency Fabric",
      icon: Database,
      accent: "text-sky-600",
      accentBg: "bg-sky-50 text-sky-700 border-sky-200",
      metrics: [
        { label: "Ecosystem", value: "Snowflake / Databricks" },
        { label: "Throughput", value: "100k+ events/sec" },
        { label: "Governance", value: "Catalog & Lineage" },
      ],
      description:
        "Unified data lakehouses and automated ingestion pipelines powering trustworthy analytics and production AI.",
    },
    {
      id: "cloud",
      title: "Cloud & Microservices",
      badge: "Enterprise Scale",
      icon: Cloud,
      accent: "text-indigo-600",
      accentBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      metrics: [
        { label: "Infrastructure", value: "Microsoft Azure" },
        { label: "Availability", value: "99.99% SLA" },
        { label: "Deployment", value: "Zero-Downtime CI/CD" },
      ],
      description:
        "Resilient cloud-native microservices engineered for high security, elasticity, and frictionless enterprise modernization.",
    },
    {
      id: "analytics",
      title: "Decision Intelligence",
      badge: "Actionable Insights",
      icon: LineChart,
      accent: "text-amber-600",
      accentBg: "bg-amber-50 text-amber-700 border-amber-200",
      metrics: [
        { label: "Platforms", value: "Power BI / Tableau" },
        { label: "Forecasting", value: "Predictive ML" },
        { label: "Executive View", value: "Unified KPI Hub" },
      ],
      description:
        "Transforming raw transactional datasets into predictive models, real-time dashboards, and executive decision intelligence.",
    },
  ];

  const current = pillars[activeTab];
  const IconComponent = current.icon;

  return (
    <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.06)] p-6 overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700">
            Enterprise Architecture Engine
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-700 font-medium">
            <ShieldCheck size={12} /> SOC2 Compliant
          </span>
        </div>
      </div>

      {/* Subtle Abstract Data Flow Visual (SVG) */}
      <div className="relative h-44 mb-5 rounded-xl bg-slate-50/70 border border-slate-100 p-3 overflow-hidden flex items-center justify-center">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 light-grid opacity-60"></div>

        {/* Dynamic SVG with delicate flowing paths */}
        <svg className="w-full h-full relative z-10" viewBox="0 0 400 140" fill="none">
          <defs>
            <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="flowGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Curved connecting data paths */}
          <path
            d="M 60 40 Q 130 20, 200 70 T 340 40"
            stroke="url(#flowGrad1)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
          <path
            d="M 60 100 Q 130 120, 200 70 T 340 100"
            stroke="url(#flowGrad2)"
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />
          <path
            d="M 200 15 L 200 125"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="2 3"
          />

          {/* Node 1: Ingestion */}
          <g transform="translate(60, 40)">
            <circle r="16" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
            <circle r="6" fill="#3b82f6" />
            <text x="0" y="28" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569">
              Ingest
            </text>
          </g>

          {/* Node 2: Pipeline */}
          <g transform="translate(60, 100)">
            <circle r="16" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
            <circle r="6" fill="#0284c7" />
            <text x="0" y="28" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569">
              Data Fabric
            </text>
          </g>

          {/* Center Hub: RHEVIX Core */}
          <g transform="translate(200, 70)">
            <circle r="26" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <circle r="18" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e3a8a">
              RHEVIX
            </text>
            <text x="0" y="38" textAnchor="middle" fontSize="9" fontWeight="600" fill="#2563eb">
              Core Intelligence
            </text>
          </g>

          {/* Node 3: AI Agents */}
          <g transform="translate(340, 40)">
            <circle r="16" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
            <circle r="6" fill="#4f46e5" />
            <text x="0" y="28" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569">
              Agents
            </text>
          </g>

          {/* Node 4: Action/Outcome */}
          <g transform="translate(340, 100)">
            <circle r="16" fill="#ffffff" stroke="#fde68a" strokeWidth="1.5" />
            <circle r="6" fill="#d97706" />
            <text x="0" y="28" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569">
              Impact
            </text>
          </g>
        </svg>

        {/* Live status label */}
        <div className="absolute bottom-2 right-3 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 bg-white/90 px-2 py-0.5 rounded border border-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Flow Rate: 100k events/s</span>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {pillars.map((p, idx) => {
          const TabIcon = p.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                  : "bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <TabIcon size={14} className={isActive ? "text-blue-400" : "text-slate-500"} />
                <span className={`text-[11px] font-semibold truncate ${isActive ? "text-white" : "text-slate-800"}`}>
                  {p.title.split(" ")[0]}
                </span>
              </div>
              <p className={`text-[10px] truncate ${isActive ? "text-slate-300" : "text-slate-500"}`}>{p.badge}</p>
            </button>
          );
        })}
      </div>

      {/* Active Layer Details */}
      <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 mb-4">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-semibold mb-1.5 border border-slate-200 bg-white text-slate-800">
              <IconComponent size={13} className={current.accent} />
              {current.title}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-lg">{current.description}</p>
          </div>
          <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white border border-slate-200 shrink-0">
            LAYER 0{activeTab + 1}
          </span>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-3 gap-2.5 pt-3 mt-2 border-t border-slate-200/70">
          {current.metrics.map((m) => (
            <div key={m.label} className="bg-white p-2 rounded-lg border border-slate-200/80">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                {m.label}
              </span>
              <span className="text-xs font-bold text-slate-800 truncate block">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Console Status */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
        <div className="flex items-center gap-1.5">
          <Activity size={12} className="text-blue-600" />
          <span>Real-World Impact · Continuous Evolution</span>
        </div>
        <span className="text-slate-700 font-semibold">50+ Yrs Experience</span>
      </div>
    </div>
  );
}
