import type { Metadata } from "next";
import Link from "@/components/SmartLink";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta({ description: site.description, path: "/" });
import { HeroCarousel } from "@/components/HeroCarousel";
import { Agenda } from "@/components/Agenda";
import { LifeCarousel } from "@/components/LifeCarousel";
import { SilkArt } from "@/components/SilkArt";
import { ArrowRight, iconMap } from "@/components/Icons";
import { technologies, tiles, trustStrip, why } from "@/content/home";
import { insights } from "@/content/insights";

export default function Home() {
  const latest = [...insights].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="label reveal">Consulting · Engineering · Expert Network</span>
          <h1 className="h1 reveal" style={{ marginTop: 22 }}><span>From AI ambition</span><span className="grad">to real&#8209;world results.</span></h1>
          <div className="intro-foot reveal">
            <p className="body-lg">Rhevix helps regulated enterprises put AI into production and helps AI labs build better models, with senior engineers and domain experts who reason first, adapt as they go, and deliver.</p>
            <div className="btn-row">
              <Link className="btn btn-brand btn-lg" href="/contact">Talk to us <ArrowRight className="arr" /></Link>
              <Link className="btn btn-outline btn-lg" href="/services">What we do</Link>
            </div>
          </div>
        </div>
      </section>

      <HeroCarousel />

      <section className="strip" aria-label="How we work">
        <div className="wrap">
          {trustStrip.map((t) => { const I = iconMap[t.icon]; return (
            <div className="strip-item" key={t.title}><I /><div><b>{t.title}</b><span>{t.body}</span></div></div>
          ); })}
        </div>
      </section>

      <section className="section">
        <div className="wrap who">
          <div className="reveal">
            <span className="label">Who we are</span>
            <h2 className="h2" style={{ marginTop: 16 }}>AI that reaches production.</h2>
            <div className="pillars">
              <Link className="pill" href="/services">Consulting</Link>
              <Link className="pill" href="/services#engineering">Engineering</Link>
              <Link className="pill" href="/experts">Expert Network</Link>
            </div>
          </div>
          <div className="reveal">
            <p className="statement">AI has changed what is possible faster than most organisations can change how they work. The gap between a promising pilot and a system people rely on is where value is won or lost.</p>
            <p className="body-lg">Rhevix closes that gap. We reason through the problem before building, evolve the team as the work changes, and execute to production inside our clients&apos; controls. Through consulting, senior engineering and a vetted network of domain experts, we help regulated enterprises put AI to work and help AI labs build better models.</p>
            <p style={{ marginTop: 24 }}><Link className="link-arrow" href="/about">More about Rhevix <ArrowRight /></Link></p>
          </div>
        </div>
      </section>

      <section className="section surface" id="agenda">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="label">Our point of view</span>
            <h2 className="h2">The transformation agenda for the AI era.</h2>
          </div>
          <Agenda />
        </div>
      </section>

      <section className="section">
        <div className="wrap tiles">
          {tiles.map((t) => (
            <Link key={t.title} className="tile reveal" href={t.href}>
              <SilkArt variant={t.art} />
              <small>{t.eyebrow}</small><h3>{t.title}</h3><span className="go">{t.cta} <ArrowRight /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section surface">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Why Rhevix</span><h2 className="h2">One accountable partner, from reason to execution.</h2></div>
          <div className="grid-4">
            {why.map((w) => { const I = iconMap[w.icon]; return (
              <div className="card icon-card reveal" key={w.title}><span className="ico"><I /></span><h3>{w.title}</h3><p className="body">{w.body}</p></div>
            ); })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap row-head reveal">
          <div style={{ maxWidth: 660 }}><span className="label">Technology ecosystem</span><h2 className="h2" style={{ marginTop: 16 }}>Platforms our engineers work with every day.</h2></div>
          <Link className="link-arrow" href="/contact">Talk to a specialist <ArrowRight /></Link>
        </div>
        <div className="marquee" aria-label="Technologies">
          <div className="marquee-track">
            {[...technologies, ...technologies].map((n, i) => <span key={i} className="tech" aria-hidden={i >= technologies.length || undefined}>{n}</span>)}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="wrap">
          <LifeCarousel heading={<div style={{ maxWidth: 680 }}><span className="label">Our people</span><h2 className="h2" style={{ marginTop: 16 }}>Life at Rhevix.</h2><p className="body-lg" style={{ marginTop: 14 }}>A place where expertise is respected, curiosity is rewarded and every voice counts.</p></div>} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="row-head reveal">
            <div><span className="label">Insights</span><h2 className="h2" style={{ marginTop: 16 }}>Ideas backed by experience.</h2></div>
            <Link className="link-arrow" href="/insights">See all insights <ArrowRight /></Link>
          </div>
          <div className="grid-4" style={{ marginTop: 40 }}>
            {latest.map((p) => (
              <Link key={p.slug} className="card post-card reveal" href={`/insights/${p.slug}`}>
                <div className="meta"><span className="mono type">{p.type}</span><span className="mono">{p.readMinutes} min read</span></div>
                <h3>{p.title}</h3><span className="link-arrow">Read <ArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="wrap split">
          <div className="reveal">
            <span className="label">Contact</span>
            <h2 className="h2" style={{ marginTop: 16 }}>Let&apos;s discuss where AI can take you.</h2>
          </div>
          <div className="reveal">
            <p className="body-lg">Tell us what you are working on. A senior member of the team will respond to arrange a conversation, and you will get a clear recommendation, even if it is not us.</p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link className="btn btn-brand btn-lg" href="/contact">Contact us <ArrowRight className="arr" /></Link>
              <Link className="btn btn-outline btn-lg" href="/assessments/ai-readiness">Take the AI readiness assessment</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
