import type { Metadata } from "next";
import { abs, breadcrumbLd, JsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import Link from "@/components/SmartLink";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { getInsight, insights } from "@/content/insights";
import { HeroArt } from "@/lib/ui";

export const dynamicParams = false;
export function generateStaticParams() { return insights.map((i) => ({ slug: i.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getInsight((await params).slug);
  return p ? pageMeta({ title: p.title, description: p.summary, path: `/insights/${p.slug}`, type: "article", publishedTime: p.date }) : {};
}
const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getInsight((await params).slug);
  if (!p) notFound();
  const more = insights.filter((i) => i.slug !== p.slug).slice(0, 3);
  return (
    <>
      <JsonLd data={[{ "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.summary, datePublished: p.date, dateModified: p.date,
        mainEntityOfPage: abs(`/insights/${p.slug}`), image: abs("/og.png"), author: { "@type": "Organization", name: site.name, url: site.url }, publisher: { "@id": abs("/#organization") } },
        breadcrumbLd([{ label: "Insights", href: "/insights" }, { label: p.title, href: `/insights/${p.slug}` }])]} />
      <section className="page-hero">
        <div className="wrap-narrow">
          <nav aria-label="Breadcrumb"><ol className="crumbs"><li><Link href="/">Home</Link></li><li><Link href="/insights">Insights</Link></li><li><span aria-current="page">{p.type}</span></li></ol></nav>
          <span className="label">{p.type}</span>
          <h1 className="h1-page" style={{ marginTop: 18, fontSize: "clamp(34px, 4.4vw, 56px)" }}>{p.title}</h1>
          <p className="body-lg" style={{ marginTop: 20 }}>{p.summary}</p>
          <div className="article-meta"><span>Rhevix</span><span>·</span><time dateTime={p.date}>{fmt(p.date)}</time><span>·</span><span>{p.readMinutes} min read</span></div>
        </div>
      </section>
      <HeroArt variant={p.art} />
      <article className="section-sm">
        <div className="wrap-narrow prose">
          {p.body.map((b, i) => "h" in b ? <h2 key={i}>{b.h}</h2> : "p" in b ? <p key={i}>{b.p}</p> : <ul key={i}>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>)}
        </div>
      </article>
      <section className="section-sm surface">
        <div className="wrap">
          <div className="row-head"><h2 className="h3">More insights</h2><Link className="link-arrow" href="/insights">See all <ArrowRight /></Link></div>
          <div className="grid-3" style={{ marginTop: 28 }}>
            {more.map((m) => (
              <Link key={m.slug} className="card post-card" href={`/insights/${m.slug}`}>
                <div className="meta"><span className="mono type">{m.type}</span><span className="mono">{m.readMinutes} min read</span></div>
                <h3>{m.title}</h3><span className="link-arrow">Read <ArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand art={p.art} />
    </>
  );
}
