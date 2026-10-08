"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div className="relative">
      {status === "success" ? (
        <div className="p-8 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center animate-fadeIn">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">Conversation Request Sent</h4>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            Thank you for reaching out to RHEVIX. Our technology leadership team will review your requirements and respond promptly to schedule a discovery conversation.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs uppercase tracking-wider font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4 cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Name <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Work Email <span className="text-blue-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="name@company.com"
                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Organization <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              placeholder="Company or Organization"
              className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              How Can We Help? <span className="text-blue-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your challenge, goals, or upcoming initiative."
              className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-sm resize-none"
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow transition-all transform active:scale-[0.98] disabled:opacity-60 cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : (
                <>
                  <span>Start a Conversation</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
