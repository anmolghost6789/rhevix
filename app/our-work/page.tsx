import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "@/components/SmartLink";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { engagementModels, exampleEngagements, trustControls } from "@/content/company";
import { HeroArt } from "@/lib/ui";

export const metadata: Metadata = pageMeta({ title: "Our work", description: "How Rhevix works: our approach, example engagements, engagement models and the controls we work within.", path: "/our-work" });

export default function OurWorkPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Our work", href: "/our-work" }]} eyebrow="Our work" title="How we take AI from idea to production."
        intro="One method, three engagement models, and delivery that happens inside your controls." />
      <HeroArt variant={4} />

      <section className="section" id="approach">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Our approach</span><h2 className="h2">Reason. Evolution. Execution.</h2>
            <p className="body-lg">One method across every engagement, from a short data pilot to a multi-year programme.</p></div>
          <div className="stages">
            <div className="card stage reveal"><span className="n">I</span><h3>Reason</h3><p className="body">Understand the problem before building anything. You receive a written recommendation, including where AI is the wrong answer, before any team is mobilised.</p></div>
            <div className="card stage reveal"><span className="n">II</span><h3>Evolution</h3><p className="body">The team changes shape as the work does. Engineers, data specialists and domain experts are added, swapped and stood down against agreed milestones.</p></div>
            <div className="card stage reveal"><span className="n">III</span><h3>Execution</h3><p className="body">Systems go into production in your environments, measured against outcomes agreed on day one, with a structured handover to your teams.</p></div>
          </div>
          <p style={{ marginTop: 28 }}><Link className="link-arrow" href="/story.html">Watch the sixty-second story <ArrowRight /></Link></p>
        </div>
      </section>

      <section className="section surface" id="engagements">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Example engagements</span><h2 className="h2">The work we are built to deliver.</h2>
            <p className="body-lg">Illustrative examples of typical engagements. Published case studies will be added as clients approve them.</p></div>
          <div className="grid-3">
            {exampleEngagements.map((e) => (
              <article className="card num-card reveal" key={e.title}>
                <span className="n">{e.sector}</span><h3>{e.title}</h3>
                <p className="body"><b>Challenge.</b> {e.challenge}</p><p className="body"><b>What we do.</b> {e.work}</p><p className="body"><b>Measured by.</b> {e.measure}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="engagement-models">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Engagement models</span><h2 className="h2">Structured the way your procurement already works.</h2></div>
          <div className="table-wrap reveal">
            <table className="models-table">
              <thead><tr><th scope="col">Model</th><th scope="col">What it is</th><th scope="col">Best for</th><th scope="col">How you pay</th><th scope="col">Governance</th></tr></thead>
              <tbody>{engagementModels.map((m) => <tr key={m.name}><th scope="row">{m.name}</th><td>{m.body}</td><td>{m.best}</td><td>{m.pay}</td><td>{m.governance}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section surface" id="trust">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Trust</span><h2 className="h2">Working inside your controls.</h2></div>
          <div className="grid-4">{trustControls.map((t, i) => <div className="card num-card reveal" key={t.title}><span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{t.title}</h3><p className="body">{t.body}</p></div>)}</div>
          <p style={{ marginTop: 28 }}><Link className="link-arrow" href="/experts#vetting">How we vet our experts <ArrowRight /></Link></p>
        </div>
      </section>
      <CtaBand art={4} />
    </>
  );
}
