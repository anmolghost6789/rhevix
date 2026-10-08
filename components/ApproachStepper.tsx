"use client";

import { useState } from "react";
import { Compass, Layers, Wrench, RefreshCw } from "lucide-react";

export function ApproachStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      phase: "Understand",
      icon: Compass,
      headline: "We start with the business challenge, not the technology.",
      details:
        "Deep discovery into operational bottlenecks, unit economics, data realities, and business objectives. We prioritize high-value impact before writing a single line of architecture.",
      deliverable: "Strategic Problem Blueprint & Feasibility Assessment",
    },
    {
      num: "02",
      phase: "Architect",
      icon: Layers,
      headline: "We define the technology, data, AI, and engineering approach required to solve it.",
      details:
        "Comprehensive architectural blueprints covering data pipelines, agentic orchestration, API contracts, security boundaries, and enterprise governance compliance.",
      deliverable: "Production Architecture Blueprint & Technology Selection",
    },
    {
      num: "03",
      phase: "Build",
      icon: Wrench,
      headline: "Our teams engineer scalable, secure, production-ready solutions.",
      details:
        "Disciplined sprint execution with high test coverage, automated CI/CD, rigorous quality engineering, and deep observability built directly into the codebase.",
      deliverable: "Enterprise-Ready Codebase, Tested APIs & Models",
    },
    {
      num: "04",
      phase: "Evolve",
      icon: RefreshCw,
      headline: "We continuously improve, optimize, and expand solutions as the business changes.",
      details:
        "Post-launch telemetry, model performance tuning, cost optimization, and seamless knowledge transfer empowering your internal engineering teams for the long run.",
      deliverable: "Continuous Telemetry, Handover Docs & Scaled Growth",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isSelected = activeStep === idx;
          return (
            <div
              key={s.num}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-100 transform -translate-y-1"
                  : "bg-white border-slate-200/90 hover:border-slate-300 shadow-[0_2px_10px_rgba(15,23,42,0.02)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-2xl font-black ${
                      isSelected ? "text-blue-600" : "text-slate-300"
                    }`}
                  >
                    {s.num}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isSelected
                        ? "bg-blue-50 border-blue-200 text-blue-600"
                        : "bg-slate-50 border-slate-200 text-slate-500"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-2">{s.phase}</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium mb-3">
                  {s.headline}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {s.details}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Deliverable
                </span>
                <span className="text-xs font-semibold text-blue-700 block">
                  {s.deliverable}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
