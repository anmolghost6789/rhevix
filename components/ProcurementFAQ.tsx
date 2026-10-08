"use client";
import { FAQTabsCard } from "@/components/spectrumui/faq-tabs-card";

const tabs = [
  { label: "Commercials", faqs: [
    { question: "How are engagements priced?", answer: "Three structures: time and materials for named specialists, capacity-based pricing for dedicated delivery teams, and fixed price with milestone acceptance for outcome-based projects." },
    { question: "Can you work through our existing vendor framework?", answer: "Yes. We onboard through your procurement, vendor-risk and contracting processes rather than asking you to adopt ours." },
    { question: "What is the minimum engagement?", answer: "Most clients start with a fixed-scope assessment, which produces a written recommendation and proposal before any larger commitment." },
  ]},
  { label: "Security", faqs: [
    { question: "Where does the work take place?", answer: "In your environments and tooling, under your access, change-management and logging policies." },
    { question: "How are your people screened?", answer: "Every specialist is technically assessed and background-screened to the standard your organisation requires before being given access." },
    { question: "How is our data handled?", answer: "Under your data processing terms, with access limited to named individuals and removed at the end of the engagement." },
  ]},
  { label: "Delivery", faqs: [
    { question: "Who is accountable for delivery?", answer: "A named Rhevix delivery lead, reporting into your governance forums on the cadence you set." },
    { question: "How quickly can a team start?", answer: "Timing depends on your onboarding process. We agree a mobilisation plan with named people as part of the proposal." },
    { question: "What happens at the end of an engagement?", answer: "A structured handover: documentation, training for your teams, and an optional support period." },
  ]},
];

export function ProcurementFAQ() {
  return (
    <FAQTabsCard
      tabs={tabs}
      footerLabel="Ask us something else"
      onFooterClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      className="p-5 sm:p-7"
    />
  );
}
