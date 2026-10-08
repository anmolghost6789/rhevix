"use client";

import { useState } from "react";
import { User, Bot, Layers, Database, Zap, CheckCircle2, ChevronRight, ShieldAlert } from "lucide-react";

export function AiArchitectureFlow() {
  const [selectedNode, setSelectedNode] = useState(1);

  const nodes = [
    {
      id: 0,
      label: "User",
      title: "Enterprise Client",
      subtitle: "Prompt, query, or automated business trigger",
      icon: User,
      color: "text-slate-700",
      badgeBg: "bg-slate-100 border-slate-200 text-slate-700",
      detail:
        "Business users or internal systems initiate inquiries, workflows, or operational requests via secure interfaces.",
    },
    {
      id: 1,
      label: "AI Agent",
      title: "Autonomous Agent",
      subtitle: "Multi-step reasoning, intent parsing & planning",
      icon: Bot,
      color: "text-blue-600",
      badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
      detail:
        "Orchestrates task execution, decomposes complex requests into discrete subtasks, and assigns verified tool calls.",
    },
    {
      id: 2,
      label: "Knowledge / RAG",
      title: "Retrieval & Grounding",
      subtitle: "Semantic vector search & enterprise knowledge",
      icon: Layers,
      color: "text-indigo-600",
      badgeBg: "bg-indigo-50 border-indigo-200 text-indigo-700",
      detail:
        "Cross-references proprietary documentation, operational runbooks, and vector embeddings to prevent hallucinations.",
    },
    {
      id: 3,
      label: "Data",
      title: "Enterprise Data Fabric",
      subtitle: "Snowflake, Databricks, APIs & Lakehouse",
      icon: Database,
      color: "text-sky-600",
      badgeBg: "bg-sky-50 border-sky-200 text-sky-700",
      detail:
        "Queries live transactional data with strict role-based access control, cryptographic isolation, and zero telemetry leakage.",
    },
    {
      id: 4,
      label: "Action",
      title: "Deterministic Impact",
      subtitle: "API execution, report generation, or workflow",
      icon: Zap,
      color: "text-emerald-600",
      badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
      detail:
        "Executes verified business operations, updates core enterprise systems, or delivers executive-ready synthesized insights.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-1">
            System Workflow
          </span>
          <h4 className="text-lg font-bold text-slate-900">How RHEVIX AI Operates</h4>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Zero Hallucination Guardrails</span>
        </div>
      </div>

      {/* Visual Flow Pipeline */}
      <div className="space-y-3 relative">
        {nodes.map((node, index) => {
          const NodeIcon = node.icon;
          const isSelected = selectedNode === node.id;
          const isLast = index === nodes.length - 1;

          return (
            <div key={node.id} className="relative">
              {/* Node Card */}
              <div
                onClick={() => setSelectedNode(node.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? "bg-slate-50/90 border-blue-500 shadow-sm ring-1 ring-blue-500/20"
                    : "bg-white border-slate-200/80 hover:bg-slate-50/50 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSelected ? "bg-white shadow-sm border-blue-300" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <NodeIcon size={18} className={node.color} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono uppercase text-slate-400">
                        0{index + 1}
                      </span>
                      <h5 className="text-sm font-bold text-slate-900">{node.title}</h5>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border hidden sm:inline-block ${node.badgeBg}`}
                      >
                        {node.label}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{node.subtitle}</p>
                  </div>
                </div>

                <ChevronRight
                  size={16}
                  className={`transition-transform shrink-0 ${
                    isSelected ? "text-blue-600 rotate-90" : "text-slate-300"
                  }`}
                />
              </div>

              {/* Connecting line between nodes */}
              {!isLast && (
                <div className="h-4 flex items-center justify-center relative">
                  <div className="w-[1.5px] h-full bg-slate-200 relative">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 absolute -left-[2px] top-1/2 -translate-y-1/2"></span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Node Detailed Breakdown */}
      <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-1">
          <CheckCircle2 size={14} className="text-blue-600" />
          <span>Architecture Detail: {nodes[selectedNode].title}</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          {nodes[selectedNode].detail}
        </p>
      </div>
    </div>
  );
}
