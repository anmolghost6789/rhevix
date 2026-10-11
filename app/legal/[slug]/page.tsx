import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getLegal, legalPages } from "@/content/legal";

export const dynamicParams = false;
export function generateStaticParams() { return legalPages.map((l) => ({ slug: l.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const l = getLegal((await params).slug); return l ? pageMeta({ title: l.title, description: `${l.title} for the Rhevix website.`, path: `/legal/${l.slug}` }) : {};
}
export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const l = getLegal((await params).slug);
  if (!l) notFound();
  return (
    <>
      <PageHero crumbs={[{ label: "Legal", href: "/legal" }, { label: l.title, href: `/legal/${l.slug}` }]} title={l.title}
        intro={`Last updated ${new Date(l.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}.`} />
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="wrap-narrow prose">
          {l.body.map((b, i) => "h" in b ? <h2 key={i}>{b.h}</h2> : "p" in b ? <p key={i}>{b.p}</p> : <ul key={i}>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>)}
        </div>
      </section>
    </>
  );
}
