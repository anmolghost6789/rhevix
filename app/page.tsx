import { ArrowRight, Check, Users, DatabaseZap, Workflow, Menu } from "lucide-react";
import { NeedSelector } from "@/components/NeedSelector";
import { ProcurementFAQ } from "@/components/ProcurementFAQ";
import { ContactForm } from "@/components/ContactForm";

const tick = <Check size={16} strokeWidth={2.5} aria-hidden="true" />;

const services = [
  { icon: <Users size={20} />, title: "Engineering capacity", body: "Vetted senior engineers who join your teams, from one specialist to a full delivery team.", items: ["Software, platform and data engineers", "ML and LLM engineers", "Legacy modernisation specialists"] },
  { icon: <DatabaseZap size={20} />, title: "AI data and evaluation", body: "Domain-expert data and testing that show how a model behaves before it goes live.", items: ["Training and fine-tuning datasets", "Evaluation suites and red-teaming", "Evidence for model risk reviews"] },
  { icon: <Workflow size={20} />, title: "Production AI", body: "AI agents and features built into your existing systems, monitored and handed over.", items: ["Workflow and agent automation", "Search and knowledge assistants", "Monitoring, cost control and handover"] },
];

const industries = [
  { name: "Banking and financial services", body: "Delivery that fits model risk, audit and data residency requirements.", items: ["Customer service assistants", "Credit and KYC operations", "Core system modernisation"] },
  { name: "Telecommunications", body: "Engineering for high-volume customer and network operations.", items: ["Contact centre automation", "Billing and CRM integration", "Network data platforms"] },
  { name: "Consulting and professional services", body: "Specialists who strengthen your client delivery teams.", items: ["Bench extension for projects", "AI accelerators and tooling", "Domain expert evaluation"] },
  { name: "Insurance", body: "Practical AI for claims, underwriting and policy servicing.", items: ["Claims triage", "Document extraction", "Underwriting support"] },
];

const steps = [
  { title: "Consultation", body: "A conversation with a senior engineer about what you need.", meta: "30 minutes · free" },
  { title: "Scoping", body: "We review your requirements, systems and constraints.", meta: "Typically 1–2 weeks" },
  { title: "Proposal", body: "A written plan, named team profiles and commercial options.", meta: "Before any commitment" },
  { title: "Pilot", body: "A short first phase so you can judge the team on real work.", meta: "Agreed success measures" },
  { title: "Scale or hand over", body: "Grow the team, or transfer the work to your engineers.", meta: "Documented handover" },
];

const models = [
  { name: "Specialist augmentation", body: "Named engineers or experts embedded in your teams.", best: "Filling specific skills gaps quickly", pay: "Monthly, time and materials", control: "Directed by your team leads", featured: false },
  { name: "Dedicated delivery team", body: "A cross-functional team led by a Rhevix delivery manager.", best: "Ongoing programmes with evolving scope", pay: "Monthly, based on team capacity", control: "Quarterly steering reviews", featured: true },
  { name: "Outcome-based project", body: "A defined deliverable with acceptance criteria.", best: "Well-scoped initiatives", pay: "Fixed price, paid by milestone", control: "Milestone acceptance", featured: false },
];

const trust = [
  { title: "Work stays in your environment", body: "We use your infrastructure and tools, under your access and change policies." },
  { title: "Named, screened people", body: "You see profiles and interview specialists before they join. Each is screened to your standard." },
  { title: "Proposal before commitment", body: "You receive a written scope, team and price before signing anything." },
  { title: "No lock-in", body: "Documentation and handover are part of every engagement, so your team can own the work." },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="/" className="logo" aria-label="Rhevix home"><span className="logo-mark" aria-hidden="true">R</span>Rhevix</a>
          <nav className="site-nav" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#how">How we work</a>
            <a href="#models">Engagement models</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="header-actions">
            <a href="#need" className="text-link">Find the right service</a>
            <a href="#contact" className="btn btn-primary btn-sm">Book a consultation</a>
            <details className="mobile-nav">
              <summary aria-label="Open menu"><Menu size={22} aria-hidden="true" /></summary>
              <nav aria-label="Mobile">
                <a href="#need">Find the right service</a>
                <a href="#services">Services</a>
                <a href="#industries">Industries</a>
                <a href="#how">How we work</a>
                <a href="#models">Engagement models</a>
                <a href="#faq">FAQ</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div>
              <p className="audience">For banks, telecoms, insurers and consulting firms</p>
              <h1 id="hero-title">Senior engineers and AI specialists, ready to join your teams.</h1>
              <p className="lead">
                Rhevix provides vetted engineering talent, AI data and evaluation, and production AI delivery,
                working inside your security and governance requirements.
              </p>
              <div className="hero-ctas">
                <a href="#contact" className="btn btn-primary">Book a consultation <ArrowRight size={18} aria-hidden="true" /></a>
                <a href="#need" className="btn btn-secondary">Find the right service</a>
              </div>
              <ul className="assurances">
                <li>{tick}Vetted senior specialists</li>
                <li>{tick}Work inside your controls</li>
                <li>{tick}Written proposal before you commit</li>
                <li>{tick}NDA from the first conversation</li>
              </ul>
            </div>

            <figure className="plan" aria-label="Sample engagement plan">
              <div className="plan-head">
                <span className="plan-title">Engagement plan</span>
                <span className="tag">Sample</span>
              </div>
              <div className="plan-body">
                <div>
                  <p className="plan-label">Client need</p>
                  <p className="plan-need">A retail bank wants an AI assistant for customer service, ready for model risk review.</p>
                </div>
                <div>
                  <p className="plan-label">Proposed team</p>
                  <div className="team">
                    <span className="chip">Delivery lead</span><span className="chip">2 × ML engineers</span>
                    <span className="chip">Backend engineer</span><span className="chip">Evaluation specialist</span><span className="chip">Banking SME</span>
                  </div>
                </div>
                <div>
                  <p className="plan-label">Plan</p>
                  <div className="timeline">
                    <div><strong>Scope</strong>Weeks 1–2</div>
                    <div><strong>Build</strong>Weeks 3–8</div>
                    <div><strong>Evaluate</strong>Weeks 9–10</div>
                    <div><strong>Launch</strong>Week 12</div>
                  </div>
                </div>
                <div className="plan-split">
                  <div><p className="plan-label">Engagement model</p><p>Dedicated delivery team</p></div>
                  <div><p className="plan-label">Key risk</p><p>Access to production data</p></div>
                </div>
              </div>
              <figcaption className="plan-foot">Illustrative example. Your plan is built from your requirements.</figcaption>
            </figure>
          </div>
        </section>

        <div className="sector-strip">
          <div className="wrap">
            <p>Built for regulated industries</p>
            <ul><li>Banking</li><li>Payments</li><li>Telecommunications</li><li>Insurance</li><li>Consulting</li></ul>
          </div>
        </div>

        <section id="need" className="section section-alt" aria-labelledby="need-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">Start here</p>
              <h2 id="need-title" className="h2">What do you need right now?</h2>
              <p className="lead">Choose the closest option and we will suggest a service, an engagement model and a first step.</p>
            </div>
            <NeedSelector />
          </div>
        </section>

        <section id="services" className="section" aria-labelledby="services-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">Services</p>
              <h2 id="services-title" className="h2">Three services, one accountable partner</h2>
              <p className="lead">Most clients start with one service and add others as their programme grows.</p>
            </div>
            <div className="card-grid">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <div className="card-icon" aria-hidden="true">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul className="ticks">{s.items.map((i) => <li key={i}>{tick}{i}</li>)}</ul>
                  <a href="#contact" className="text-link">Discuss your requirements →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="section section-alt" aria-labelledby="ind-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">Industries</p>
              <h2 id="ind-title" className="h2">Built for organisations where controls matter</h2>
            </div>
            <div className="ind-grid">
              {industries.map((d) => (
                <article key={d.name} className="ind">
                  <h3>{d.name}</h3>
                  <p>{d.body}</p>
                  <ul>{d.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section" aria-labelledby="how-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">How we work</p>
              <h2 id="how-title" className="h2">See the plan and the people before you commit</h2>
              <p className="lead">Every engagement follows the same path: reason through the problem, adapt the team as the work evolves, and execute to production.</p>
            </div>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="step-n" aria-hidden="true">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <span className="step-meta">{s.meta}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="models" className="section section-alt" aria-labelledby="models-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">Engagement models</p>
              <h2 id="models-title" className="h2">Choose how you want to work with us</h2>
              <p className="lead">Each model works through your existing procurement and vendor onboarding. Pricing is set out in the proposal.</p>
            </div>
            <div className="models">
              {models.map((m) => (
                <article key={m.name} className={`model ${m.featured ? "is-featured" : ""}`}>
                  {m.featured && <span className="model-badge">Most common</span>}
                  <h3>{m.name}</h3>
                  <p>{m.body}</p>
                  <dl>
                    <div><dt>Best for</dt><dd>{m.best}</dd></div>
                    <div><dt>How you pay</dt><dd>{m.pay}</dd></div>
                    <div><dt>Governance</dt><dd>{m.control}</dd></div>
                  </dl>
                  <a href="#contact" className={`btn ${m.featured ? "btn-primary" : "btn-secondary"}`}>Request a proposal</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="trust-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">Why clients trust Rhevix</p>
              <h2 id="trust-title" className="h2">Commitments you can check</h2>
            </div>
            <div className="trust-grid">
              <div className="trust-list">
                {trust.map((t) => (
                  <div key={t.title} className="trust-item"><h3>{t.title}</h3><p>{t.body}</p></div>
                ))}
              </div>
              <aside className="not-promise" aria-labelledby="np-title">
                <h3 id="np-title">What we will not promise</h3>
                <ul>
                  <li>That AI is the right answer for every problem</li>
                  <li>Delivery dates before we have scoped the work</li>
                  <li>Results we cannot measure with you</li>
                </ul>
                <p>If we are not the right fit, we will tell you in the first conversation.</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-alt" aria-labelledby="faq-title">
          <div className="wrap faq-grid">
            <div>
              <p className="kicker">FAQ</p>
              <h2 id="faq-title" className="h2">Questions procurement teams ask</h2>
              <p className="lead">Can't find your answer? <a className="text-link" href="#contact">Ask us directly.</a></p>
            </div>
            <ProcurementFAQ />
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <div>
              <p className="kicker">Contact</p>
              <h2 id="contact-title" className="h2">Book a consultation</h2>
              <p className="lead">Tell us what you are working on. A senior engineer will reply to arrange a 30-minute call.</p>
              <ul className="contact-points">
                <li>{tick}No cost and no obligation</li>
                <li>{tick}NDA available before the call</li>
                <li>{tick}A clear recommendation, even if it is not us</li>
              </ul>
            </div>
            <div className="form-card"><ContactForm /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <a href="/" className="logo"><span className="logo-mark" aria-hidden="true">R</span>Rhevix</a>
              <p className="footer-about">Senior engineering and AI capability for regulated enterprises. Reason, evolution, execution.</p>
            </div>
            <div><h4>Services</h4><ul><li><a href="#services">Engineering capacity</a></li><li><a href="#services">AI data and evaluation</a></li><li><a href="#services">Production AI</a></li></ul></div>
            <div><h4>Industries</h4><ul><li><a href="#industries">Banking</a></li><li><a href="#industries">Telecommunications</a></li><li><a href="#industries">Insurance</a></li><li><a href="#industries">Consulting</a></li></ul></div>
            <div><h4>Company</h4><ul><li><a href="#how">How we work</a></li><li><a href="#models">Engagement models</a></li><li><a href="#faq">FAQ</a></li><li><a href="#contact">Contact</a></li></ul></div>
            <div><h4>Legal</h4><ul><li><a href="/privacy">Privacy policy</a></li><li><a href="/terms">Terms</a></li><li><a href="/cookies">Cookie policy</a></li></ul></div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Rhevix. All rights reserved.</p>
            <p>Registered company details to be added</p>
          </div>
        </div>
      </footer>
    </>
  );
}
