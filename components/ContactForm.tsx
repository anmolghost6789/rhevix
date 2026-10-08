"use client";

import { useRef, useState } from "react";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { MorphButton, type MorphButtonState } from "@/components/spectrumui/morph-button";

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<MorphButtonState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const el = e.currentTarget;
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(el))),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "The request was not sent. Try again.");
      setState("success");
      setMessage("Thank you. We will reply to your work email to arrange the consultation.");
      el.reset();
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "The request was not sent. Try again.");
      window.setTimeout(() => setState("idle"), 2200);
    }
  }

  return (
    <form ref={form} className="contact-form" onSubmit={onSubmit}>
      <div className="field-row">
        <FloatingLabelInput id="name" name="name" label="Full name" autoComplete="name" required />
        <FloatingLabelInput id="email" name="email" type="email" label="Work email" autoComplete="email" required />
      </div>
      <div className="field-row">
        <FloatingLabelInput id="organisation" name="organisation" label="Organisation" autoComplete="organization" required />
        <select id="interest" name="interest" defaultValue="" required aria-label="Area of interest">
          <option value="" disabled>Area of interest</option>
          <option>Engineering capacity</option>
          <option>AI data and evaluation</option>
          <option>Production AI</option>
          <option>Legacy modernisation</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <textarea id="message" name="message" required aria-label="Brief description"
        placeholder="What are you trying to achieve? Include timelines and any constraints." />
      <div className="form-foot">
        <MorphButton
          state={state}
          size="lg"
          loadingLabel="Sending"
          successLabel="Request sent"
          errorLabel="Not sent"
          onClick={() => form.current?.requestSubmit()}
        >
          Book a consultation
        </MorphButton>
        <p className="form-note">We use these details only to respond to your enquiry.</p>
      </div>
      <p className="form-status" role="status" aria-live="polite">{message}</p>
    </form>
  );
}
