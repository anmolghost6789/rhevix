import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { openRoles } from "@/content/company";
import { HeroArt, LinkCard } from "@/lib/ui";

export const metadata: Metadata = pageMeta({ title: "Careers", description: "Careers at Rhevix: join a team that values expertise, growth and collaboration.", path: "/careers" });

export default function CareersPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Careers", href: "/careers" }]} eyebrow="Careers" title="Do the most important work of your career."
        intro="We are building a team of people who care about doing AI properly: reasoning before building, adapting as they learn, and delivering systems that matter." />
      <HeroArt variant={0} />
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Open roles</span><h2 className="h2">{openRoles.length ? "Current openings." : "We are always glad to meet great people."}</h2>
            {!openRoles.length && <p className="body-lg">There are no advertised roles right now. If you are an exceptional engineer, consultant or specialist, send us a note and we will keep you in mind.</p>}
          </div>
          {openRoles.length > 0 && <div className="grid-3">{openRoles.map((r) => <LinkCard key={r.title} href="#apply" eyebrow={`${r.location} · ${r.type}`} title={r.title} body={r.summary} cta="Apply" />)}</div>}
          <div className="grid-3" style={{ marginTop: 32 }}>
            <LinkCard href="/life-at-rhevix" eyebrow="Culture" title="Life at Rhevix" body="How we work and what we value." />
            <LinkCard href="/experts" eyebrow="Flexible work" title="Join the expert network" body="Project-based work for senior specialists." />
            <LinkCard href="/about" eyebrow="Company" title="About Rhevix" body="Our method and our values." />
          </div>
        </div>
      </section>
      <section className="section surface" id="apply">
        <div className="wrap split">
          <div className="reveal"><span className="label">Apply</span><h2 className="h2" style={{ marginTop: 16 }}>Introduce yourself.</h2><p className="body-lg" style={{ marginTop: 16 }}>Tell us about your experience and the kind of work you want to do.</p></div>
          <div className="reveal"><LeadForm kind="careers" /></div>
        </div>
      </section>
    </>
  );
}
