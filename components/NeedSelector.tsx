"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { TextStates } from "@/components/spectrumui/text-states";

const needs = [
  {
    label: "Add engineers to an existing team",
    service: "Engineering capacity",
    title: "Named specialists who join your team and work in your tools.",
    body: "We share profiles of vetted engineers matched to your stack and domain. You interview them, choose who joins, and direct their work through your own leads.",
    model: "Specialist augmentation",
    first: "Share the roles and skills you need",
    output: "Shortlisted profiles",
  },
  {
    label: "Build an AI feature or agent",
    service: "Production AI",
    title: "A delivery team that takes an AI use case into production.",
    body: "We start by testing whether the use case is viable with your data and controls, then build, integrate and monitor it in your environment, with a handover your team can own.",
    model: "Dedicated delivery team",
    first: "A scoping workshop on the use case",
    output: "Written feasibility and plan",
  },
  {
    label: "Improve model quality with data and evaluation",
    service: "AI data and evaluation",
    title: "Data and testing that make model behaviour measurable.",
    body: "Domain experts create training data, human feedback and evaluation suites, so you can show how a model performs before it reaches customers or a model risk review.",
    model: "Outcome-based project",
    first: "Review of the model and its risks",
    output: "Evaluation plan and test scope",
  },
  {
    label: "Modernise a legacy system",
    service: "Engineering capacity",
    title: "Modernisation planned around your risk and change windows.",
    body: "We assess the current system, agree a migration approach that fits your change-management process, and deliver it in stages with clear acceptance at each one.",
    model: "Dedicated delivery team",
    first: "Current-state assessment",
    output: "Migration options and costs",
  },
  {
    label: "Not sure yet",
    service: "Consultation",
    title: "Start with a conversation with a senior engineer.",
    body: "Tell us what you are trying to achieve. We will help you work out whether you need people, a project, or nothing from us at all, and say so plainly.",
    model: "To be agreed",
    first: "A 30-minute consultation",
    output: "A recommended next step",
  },
];

export function NeedSelector() {
  const [i, setI] = useState(0);
  const n = needs[i];
  return (
    <div className="need-grid">
      <div className="need-options" role="group" aria-label="What do you need right now?">
        {needs.map((x, idx) => (
          <button key={x.label} type="button" className="need-option" aria-pressed={idx === i} onClick={() => setI(idx)}>
            {x.label}
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="need-result" aria-live="polite">
        <p className="kicker" style={{ margin: 0 }}>Suggested: <TextStates text={n.service} duration={160} translateY={6} blur={3} /></p>
        <h3>{n.title}</h3>
        <p>{n.body}</p>
        <dl className="need-facts">
          <div><dt>Engagement model</dt><dd>{n.model}</dd></div>
          <div><dt>First step</dt><dd>{n.first}</dd></div>
          <div><dt>You receive</dt><dd>{n.output}</dd></div>
        </dl>
        <a href="#contact" className="btn btn-primary">Discuss this with us <ArrowRight size={18} aria-hidden="true" /></a>
      </div>
    </div>
  );
}
