"use client";
import Link from "@/components/SmartLink";
import { useState } from "react";
import { ArrowRight } from "./Icons";

type Kind = "contact" | "expert" | "careers";
const INTERESTS = ["AI-native software engineering", "Modernisation", "Quality engineering", "Data foundations for AI", "Agents in production", "Model evaluation", "Expert data for AI labs", "Something else"];
const EXPERTISE = ["Software engineering", "Machine learning", "Data science", "Mathematics", "Physics", "Chemistry or biology", "Finance", "Law", "Medicine", "Languages and linguistics", "Other"];

export function LeadForm({ kind = "contact", defaultInterest }: { kind?: Kind; defaultInterest?: string }) {
  const [status, setStatus] = useState<{ msg: string; error?: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); setStatus({ msg: "Please complete the required fields.", error: true }); return; }
    setSending(true); setStatus(null);
    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, kind }) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Your message could not be sent. Please try again.");
      form.reset();
      setStatus({ msg: kind === "contact" ? "Thank you. A member of the team will be in touch shortly." : "Thank you. We have received your application and will be in touch." });
    } catch (err) {
      setStatus({ msg: err instanceof Error ? err.message : "Your message could not be sent.", error: true });
    } finally { setSending(false); }
  }

  return (
    <form className="card form" onSubmit={onSubmit} noValidate>
      <div className="field"><label htmlFor="fn">First name <i>*</i></label><input id="fn" name="firstName" autoComplete="given-name" required /></div>
      <div className="field"><label htmlFor="ln">Last name <i>*</i></label><input id="ln" name="lastName" autoComplete="family-name" required /></div>
      <div className="field"><label htmlFor="em">{kind === "contact" ? "Work email" : "Email"} <i>*</i></label><input id="em" name="email" type="email" autoComplete="email" required /></div>
      {kind === "contact" ? (
        <>
          <div className="field"><label htmlFor="co">Company <i>*</i></label><input id="co" name="company" autoComplete="organization" required /></div>
          <div className="field"><label htmlFor="jt">Job title</label><input id="jt" name="jobTitle" autoComplete="organization-title" /></div>
          <div className="field"><label htmlFor="ct">Country</label><input id="ct" name="country" autoComplete="country-name" /></div>
          <div className="field full"><label htmlFor="ai">How can we help? <i>*</i></label>
            <select id="ai" name="interest" required defaultValue={defaultInterest ?? ""}><option value="" disabled>Select</option>{INTERESTS.map((o) => <option key={o}>{o}</option>)}</select></div>
        </>
      ) : (
        <>
          <div className="field"><label htmlFor="li">LinkedIn or portfolio URL</label><input id="li" name="profileUrl" type="url" placeholder="https://" /></div>
          <div className="field"><label htmlFor="ex">{kind === "expert" ? "Main area of expertise" : "Area of interest"} <i>*</i></label>
            <select id="ex" name="expertise" required defaultValue=""><option value="" disabled>Select</option>{EXPERTISE.map((o) => <option key={o}>{o}</option>)}</select></div>
          <div className="field"><label htmlFor="yr">Years of experience</label><input id="yr" name="years" type="number" min={0} max={60} /></div>
        </>
      )}
      <div className="field full"><label htmlFor="msg">{kind === "contact" ? "Message" : "Tell us about your experience"}</label>
        <textarea id="msg" name="message" placeholder={kind === "contact" ? "What are you trying to achieve, and by when?" : "Your background, specialisms and availability."} /></div>
      <div className="hp" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <label className="consent"><input type="checkbox" name="consent" required /> <span>I agree that Rhevix may use these details to respond, as described in the <Link href="/legal/privacy">privacy statement</Link>.</span></label>
      <div className="form-foot">
        <button className="btn btn-brand btn-lg" type="submit" disabled={sending}>{sending ? "Sending…" : kind === "contact" ? "Send message" : "Submit application"} <ArrowRight className="arr" /></button>
        <p className={`form-status${status?.error ? " error" : ""}`} role="status" aria-live="polite">{status?.msg}</p>
      </div>
    </form>
  );
}
