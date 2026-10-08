"use client";

import { useState } from "react";
import { Database, LineChart, Cloud, Cpu, Code2, Sparkles } from "lucide-react";

export function TechStackMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    {
      id: "data",
      name: "Data",
      icon: Database,
      accentBg: "bg-blue-50 text-blue-700 border-blue-200",
      technologies: ["Snowflake", "Databricks", "Informatica", "Talend", "Data Platforms"],
      detail: "Scalable data ingestion, lakehouses, transformation, and high-integrity data governance.",
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: LineChart,
      accentBg: "bg-amber-50 text-amber-700 border-amber-200",
      technologies: ["Power BI", "Tableau", "Qlik", "Advanced Analytics", "Data Science"],
      detail: "Executive business intelligence, automated KPI telemetry, data modeling, and predictive science.",
    },
    {
      id: "cloud",
      name: "Cloud",
      icon: Cloud,
      accentBg: "bg-sky-50 text-sky-700 border-sky-200",
      technologies: ["Microsoft Azure", "Cloud Architecture", "Cloud-Native Engineering"],
      detail: "Enterprise-grade cloud infra, secure multi-tenant backbones, and auto-scaling serverless architectures.",
    },
    {
      id: "ai",
      name: "AI",
      icon: Cpu,
      accentBg: "bg-purple-50 text-purple-700 border-purple-200",
      technologies: ["OpenAI", "Generative AI", "Agentic AI", "Machine Learning", "AI Engineering"],
      detail: "State-of-the-art LLMs, multi-agent reasoning, fine-tuning, retrieval pipelines, and edge ML.",
    },
    {
      id: "engineering",
      name: "Engineering",
      icon: Code2,
      accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
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
              ? "bg-slate-900 text-white shadow-sm"
              : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cat.accentBg}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    {cat.name} Stack
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{cat.name}</h4>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">{cat.detail}</p>
              </div>

              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
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
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border border-slate-200/90 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles size={14} /> The Rhevix Principle
        </div>
        <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto leading-snug">
          “Technology is an enabler. <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Engineering excellence is the differentiator.
          </span>”
        </p>
      </div>
    </div>
  );
}
