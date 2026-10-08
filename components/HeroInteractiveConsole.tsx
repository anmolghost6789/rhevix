"use client";

import { useState } from "react";
import { Cpu, Database, Cloud, LineChart, ShieldCheck, Zap, Activity } from "lucide-react";

export function HeroInteractiveConsole() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "ai",
      title: "Agentic AI & LLMs",
      badge: "Autonomous Agents",
      icon: Cpu,
      color: "text-cyan-400",
      accentBg: "bg-cyan-500/10 border-cyan-500/30",
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
      color: "text-sky-400",
      accentBg: "bg-sky-500/10 border-sky-500/30",
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
      color: "text-indigo-400",
      accentBg: "bg-indigo-500/10 border-indigo-500/30",
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
      color: "text-amber-400",
      accentBg: "bg-amber-500/10 border-amber-500/30",
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
    <div className="relative rounded-2xl glass-panel p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/60 overflow-hidden">
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            RHEVIX ARCHITECTURE ENGINE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
            <ShieldCheck size={12} /> ENTERPRISE READY
          </span>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
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
                  ? "bg-slate-800/90 border-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                  : "bg-slate-900/50 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <TabIcon size={14} className={isActive ? p.color : "text-slate-400"} />
                <span className="text-[11px] font-bold truncate text-white">{p.title.split(" ")[0]}</span>
              </div>
              <p className="text-[10px] text-slate-400 truncate">{p.badge}</p>
            </button>
          );
        })}
      </div>

      {/* Active Layer Details */}
      <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 mb-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold mb-2 border border-slate-700/60 bg-slate-800/80 text-cyan-300">
              <IconComponent size={14} className={current.color} />
              {current.title}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-lg">{current.description}</p>
          </div>
          <span className="text-[11px] font-mono text-slate-400 px-2 py-1 rounded bg-slate-800/60 shrink-0">
            LAYER 0{activeTab + 1}
          </span>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 pt-3 mt-3 border-t border-slate-800/80">
          {current.metrics.map((m) => (
            <div key={m.label} className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                {m.label}
              </span>
              <span className="text-xs font-bold text-white truncate block">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Console Status */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
        <div className="flex items-center gap-2">
          <Activity size={12} className="text-cyan-400" />
          <span>Real-World Impact · Continuous Evolution</span>
        </div>
        <span className="text-slate-300 font-bold">50+ Yrs Experience</span>
      </div>
    </div>
  );
}
