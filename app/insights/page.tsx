import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "@/components/SmartLink";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "@/components/Icons";
import { insights, insightTypes, typeSlug } from "@/content/insights";

export const metadata: Metadata = pageMeta({ title: "Insights", description: "Practical guidance, research and points of view on putting AI to work in regulated enterprises.", path: "/insights" });
const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function InsightsPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const active = insightTypes.find((t) => typeSlug(t) === type);
  const list = [...insights].filter((i) => !active || i.type === active).sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero crumbs={[{ label: "Insights", href: "/insights" }]} eyebrow="Insights" title="Ideas backed by experience."
        intro="Points of view, guides and research from the people doing the work." />
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <nav className="chips" aria-label="Filter by type">
            <Link className="chip" href="/insights" aria-current={!active ? "page" : undefined}>All</Link>
            {insightTypes.map((t) => <Link key={t} className="chip" href={`/insights?type=${typeSlug(t)}`} aria-current={active === t ? "page" : undefined}>{t}</Link>)}
          </nav>
          <div className="grid-3">
            {list.map((p) => (
              <Link key={p.slug} className="card post-card" href={`/insights/${p.slug}`}>
                <div className="meta"><span className="mono type">{p.type}</span><span className="mono">{fmt(p.date)}</span></div>
                <h3>{p.title}</h3><p className="body">{p.summary}</p><span className="link-arrow">Read · {p.readMinutes} min <ArrowRight /></span>
              </Link>
            ))}
          </div>
          {list.length === 0 && <p className="body-lg">No insights of this type yet. <Link className="link-arrow" href="/insights">See all insights</Link></p>}
        </div>
      </section>
    </>
  );
}
