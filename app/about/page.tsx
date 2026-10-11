import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "@/components/SmartLink";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { about } from "@/content/company";
import { site } from "@/content/site";
import { HeroArt, LinkCard } from "@/lib/ui";

export const metadata: Metadata = pageMeta({ title: "About us", description: about.intro, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "About", href: "/about" }]} eyebrow="About Rhevix" title={about.headline} intro={about.intro} />
      <HeroArt variant={3} />
      <section className="section">
        <div className="wrap split">
          <div className="reveal"><span className="label">Our method</span><h2 className="h2" style={{ marginTop: 16 }}>{site.mantra}</h2></div>
          <div className="reveal">
            <p className="statement">AI has changed what is possible faster than most organisations can change how they work. We exist to close that gap.</p>
            <p className="body-lg">We bring consulting, senior engineering and a vetted network of domain experts together in one accountable team, and we measure ourselves on systems in production, not slideware.</p>
            <p style={{ marginTop: 24 }}><Link className="link-arrow" href="/our-work">See how we work <ArrowRight /></Link></p>
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Values</span><h2 className="h2">What we stand for.</h2></div>
          <div className="grid-4">{about.values.map((v, i) => <div className="card num-card reveal" key={v.title}><span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{v.title}</h3><p className="body">{v.body}</p></div>)}</div>
        </div>
      </section>
      {about.leadership.length > 0 && (
        <section className="section" id="leadership">
          <div className="wrap">
            <div className="section-head reveal"><span className="label">Leadership</span><h2 className="h2">The team behind Rhevix.</h2></div>
            <div className="grid-3">{about.leadership.map((l) => <div className="card num-card reveal" key={l.name}><span className="n">{l.role}</span><h3>{l.name}</h3><p className="body">{l.bio}</p></div>)}</div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="wrap grid-3">
          <LinkCard href="/life-at-rhevix" eyebrow="Culture" title="Life at Rhevix" body="Our mission, culture and the communities we belong to." />
          <LinkCard href="/careers" eyebrow="Careers" title="Work with us" body="Join a team that values expertise, growth and collaboration." />
          <LinkCard href="/experts" eyebrow="Expert network" title="Join the network" body="Flexible, well-paid work for senior engineers and specialists." />
        </div>
      </section>
      <CtaBand art={3} />
    </>
  );
}
