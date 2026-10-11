/**
 * Form handler for contact, expert and careers forms.
 * Sends an email through Resend when RESEND_API_KEY and CONTACT_TO_EMAIL are set.
 * Without them it logs the submission (useful in development) and still returns success.
 */
const LIMITS: Record<string, number> = { firstName: 100, lastName: 100, email: 200, company: 200, jobTitle: 200, country: 100, interest: 200, profileUrl: 300, expertise: 200, years: 4, message: 5000, kind: 20 };

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }

  if (typeof body.website === "string" && body.website.trim() !== "") return Response.json({ ok: true }); // honeypot

  const clean: Record<string, string> = {};
  for (const [k, max] of Object.entries(LIMITS)) {
    const v = body[k];
    if (typeof v === "string" && v.trim()) clean[k] = v.trim().slice(0, max);
  }
  if (!clean.firstName || !clean.lastName || !clean.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
    return Response.json({ error: "Please provide your name and a valid email address." }, { status: 400 });
  }
  if (body.consent !== "on") return Response.json({ error: "Please confirm consent to be contacted." }, { status: 400 });

  const kind = clean.kind ?? "contact";
  const subject = `[Rhevix ${kind}] ${clean.firstName} ${clean.lastName}${clean.company ? `, ${clean.company}` : ""}`;
  const text = Object.entries(clean).map(([k, v]) => `${k}: ${v}`).join("\n");

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.log("[contact] Email not configured; submission received:\n" + text);
    return Response.json({ ok: true });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL ?? "Rhevix website <onboarding@resend.dev>", to: [to], reply_to: clean.email, subject, text }),
  });
  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
    return Response.json({ error: "Your message could not be sent. Please email us directly." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
