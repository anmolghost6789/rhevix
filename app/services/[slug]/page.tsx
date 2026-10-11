import type { Metadata } from "next";
import { abs, JsonLd, pageMeta } from "@/lib/seo";
import Link from "@/components/SmartLink";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { getService, services } from "@/content/services";
import { getIndustry } from "@/content/industries";
import { getInsight } from "@/content/insights";
import { CheckList, HeroArt, LinkCard } from "@/lib/ui";

export const dynamicParams = false;
export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  return s ? pageMeta({ title: s.name, description: s.summary, path: `/services/${s.slug}` }) : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const insight = s.insight ? getInsight(s.insight) : undefined;
  const related = services.filter((x) => x.group === s.group && x.slug !== s.slug);
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.name, description: s.summary, serviceType: s.group, url: abs(`/services/${s.slug}`), provider: { "@id": abs("/#organization") } }} />
      <PageHero crumbs={[{ label: "What we do", href: "/services" }, { label: s.name, href: `/services/${s.slug}` }]} eyebrow={s.name} title={s.headline} intro={s.intro}>
        <div className="btn-row">
          <Link className="btn btn-brand btn-lg" href="/contact">Discuss your project <ArrowRight className="arr" /></Link>
          {insight && <Link className="btn btn-outline btn-lg" href={`/insights/${insight.slug}`}>Read our point of view</Link>}
        </div>
      </PageHero>
      <HeroArt variant={s.art} />

      <section className="section">
        <div className="wrap split">
          <div className="reveal"><span className="label">The challenge</span><h2 className="h2" style={{ marginTop: 16 }}>Why this matters now.</h2></div>
          <p className="statement reveal">{s.problem}</p>
        </div>
      </section>

      <section className="section surface">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">What we do</span><h2 className="h2">How we help.</h2></div>
          <div className="grid-2">
            {s.offerings.map((o, i) => (
              <div className="card num-card reveal" key={o.title}><span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{o.title}</h3><p className="body">{o.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Our approach</span><h2 className="h2">Reason. Evolution. Execution.</h2></div>
          <div className="stages">
            {s.approach.map((a, i) => <div className="card stage reveal" key={a.stage}><span className="n">{["I", "II", "III"][i]}</span><h3>{a.stage}</h3><p className="body">{a.body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="wrap split">
          <div className="reveal"><span className="label">Outcomes</span><h2 className="h2" style={{ marginTop: 16 }}>What changes for you.</h2></div>
          <div className="reveal"><CheckList items={s.outcomes} /></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Industries</span><h2 className="h2">Where we apply it.</h2></div>
          <div className="grid-3">
            {s.industries.map((slug) => { const ind = getIndustry(slug); return ind ? <LinkCard key={slug} href={`/industries/${slug}`} eyebrow={ind.sector} title={ind.name} body={ind.summary} /> : null; })}
          </div>
          {related.length > 0 && (
            <>
              <h2 className="group-title" style={{ marginTop: 64 }}>Related services</h2>
              <div className="grid-3">{related.map((r) => <LinkCard key={r.slug} href={`/services/${r.slug}`} title={r.name} body={r.summary} />)}</div>
            </>
          )}
        </div>
      </section>
      <CtaBand art={s.art} title={`Talk to us about ${s.name.toLowerCase()}.`} />
    </>
  );
}
