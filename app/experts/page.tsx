import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { expertRoles, vetting } from "@/content/company";
import { CheckList, HeroArt } from "@/lib/ui";

export const metadata: Metadata = pageMeta({ title: "Join the expert network", description: "Flexible, well-paid work for senior engineers and specialists improving frontier models and shipping AI.", path: "/experts" });

export default function ExpertsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Experts", href: "/experts" }]} eyebrow="Expert network" title="Put your expertise to work on frontier AI."
        intro="Join senior engineers, researchers and domain specialists improving frontier models and shipping AI in the world's most demanding organisations. Remote, flexible, and paid for expertise." />
      <HeroArt variant={3} />
      <section className="section">
        <div className="wrap split">
          <div className="reveal"><span className="label">Who we look for</span><h2 className="h2" style={{ marginTop: 16 }}>Specialists who have done the work.</h2></div>
          <div className="reveal">
            <div className="roles">{expertRoles.map((r) => <span className="role-chip" key={r}>{r}</span>)}</div>
            <div style={{ marginTop: 32 }}><CheckList items={["Remote, project-based work that fits around your schedule", "Paid for expertise, with clear rates agreed up front", "Interesting problems at the frontier of AI", "Feedback and calibration from senior reviewers"]} /></div>
          </div>
        </div>
      </section>
      <section className="section surface" id="vetting">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Vetting</span><h2 className="h2">Four stages before client work.</h2>
            <p className="body-lg">Our clients trust the network because joining it is hard. Every expert completes four stages.</p></div>
          <div className="grid-4">{vetting.map((v, i) => <div className="card num-card reveal" key={v.title}><span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{v.title}</h3><p className="body">{v.body}</p></div>)}</div>
        </div>
      </section>
      <section className="section" id="apply">
        <div className="wrap split">
          <div className="reveal"><span className="label">Apply</span><h2 className="h2" style={{ marginTop: 16 }}>Apply to join.</h2><p className="body-lg" style={{ marginTop: 16 }}>Tell us about your expertise. If there is a fit, we will invite you to the next stage.</p></div>
          <div className="reveal"><LeadForm kind="expert" /></div>
        </div>
      </section>
    </>
  );
}
