"use client";

import { useState } from "react";
import { Database, LineChart, Cloud, Cpu, Code2, Sparkles, CheckCircle } from "lucide-react";

export function TechStackMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    {
      id: "data",
      name: "Data",
      icon: Database,
      color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
      technologies: ["Snowflake", "Databricks", "Informatica", "Talend", "Data Platforms"],
      detail: "Scalable data ingestion, lakehouses, transformation, and high-integrity data governance.",
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: LineChart,
      color: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400",
      technologies: ["Power BI", "Tableau", "Qlik", "Advanced Analytics", "Data Science"],
      detail: "Executive business intelligence, automated KPI telemetry, data modeling, and predictive science.",
    },
    {
      id: "cloud",
      name: "Cloud",
      icon: Cloud,
      color: "from-sky-500/20 to-indigo-500/10 border-sky-500/30 text-sky-400",
      technologies: ["Microsoft Azure", "Cloud Architecture", "Cloud-Native Engineering"],
      detail: "Enterprise-grade cloud infra, secure multi-tenant backbones, and auto-scaling serverless architectures.",
    },
    {
      id: "ai",
      name: "AI",
      icon: Cpu,
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400",
      technologies: ["OpenAI", "Generative AI", "Agentic AI", "Machine Learning", "AI Engineering"],
      detail: "State-of-the-art LLMs, multi-agent reasoning, fine-tuning, retrieval pipelines, and edge ML.",
    },
    {
      id: "engineering",
      name: "Engineering",
      icon: Code2,
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
      technologies: ["Modern Application Development", "APIs", "Microservices", "Automation", "Quality Engineering"],
      detail: "Modular systems, high-concurrency microservices, robust test automation, and resilient CI/CD pipelines.",
    },
  ];

  const filtered = selectedCategory === "all" ? categories : categories.filter((c) => c.id === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            selectedCategory === "all"
              ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
          }`}
        >
          All Domains
        </button>
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              <Icon size={14} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Tech Stacks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center border`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {cat.name} Stack
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{cat.name}</h4>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">{cat.detail}</p>
              </div>

              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-xs font-medium text-slate-200 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Highlight Quote Banner */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-cyan-500/5 to-transparent pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles size={14} /> The Rhevix Principle
        </div>
        <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-snug">
          “Technology is an enabler. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Engineering excellence is the differentiator.
          </span>”
        </p>
      </div>
    </div>
  );
}
