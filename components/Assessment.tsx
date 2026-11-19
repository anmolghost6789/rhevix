"use client";
import Link from "@/components/SmartLink";
import { useState } from "react";
import type { Assessment as A } from "@/content/assessments";
import { ArrowLeft, ArrowRight } from "./Icons";

export function Assessment({ a }: { a: A }) {
  const [answers, setAnswers] = useState<(number | null)[]>(() => a.questions.map(() => null));
  const [step, setStep] = useState(0);
  const done = step >= a.questions.length;
  const max = a.questions.length * 3;
  const score = answers.reduce<number>((s, v) => s + (v ?? 0), 0);
  const pct = Math.round((score / max) * 100);
  const band = [...a.bands].reverse().find((b) => pct >= b.min) ?? a.bands[0];

  if (done) {
    return (
      <div className="card assess" aria-live="polite">
        <span className="label">Your result</span>
        <p className="score" style={{ marginTop: 16 }}>{pct}%</p>
        <h2 className="h3" style={{ marginTop: 12 }}>{band.title}</h2>
        <p className="body-lg" style={{ marginTop: 12, maxWidth: "60ch" }}>{band.body}</p>
        <div className="btn-row" style={{ marginTop: 28 }}>
          <Link className="btn btn-brand btn-lg" href={band.next.href}>{band.next.label} <ArrowRight className="arr" /></Link>
          <Link className="btn btn-outline btn-lg" href="/contact">Discuss your result</Link>
          <button className="btn btn-outline btn-lg" type="button" onClick={() => { setAnswers(a.questions.map(() => null)); setStep(0); }}>Start again</button>
        </div>
      </div>
    );
  }

  const q = a.questions[step];
  return (
    <div className="card assess">
      <div className="assess-progress" role="progressbar" aria-valuemin={0} aria-valuemax={a.questions.length} aria-valuenow={step} aria-label="Progress">
        <i style={{ width: `${(step / a.questions.length) * 100}%` }} />
      </div>
      <span className="mono">Question {step + 1} of {a.questions.length}</span>
      <h2 className="assess-q">{q.q}</h2>
      <div className="assess-options" role="group" aria-label={q.q}>
        {q.options.map((o, i) => (
          <button key={o} type="button" className="assess-option" aria-pressed={answers[step] === i}
            onClick={() => { const next = answers.slice(); next[step] = i; setAnswers(next); setTimeout(() => setStep((s) => s + 1), 180); }}>
            <b>{String.fromCharCode(65 + i)}</b>{o}
          </button>
        ))}
      </div>
      <div className="assess-nav">
        <button className="btn btn-outline btn-md" type="button" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft /> Back</button>
        {answers[step] !== null && <button className="btn btn-brand btn-md" type="button" onClick={() => setStep(step + 1)}>Next <ArrowRight className="arr" /></button>}
      </div>
    </div>
  );
}
