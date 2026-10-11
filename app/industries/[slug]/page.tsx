import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "@/components/SmartLink";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { getIndustry, industries } from "@/content/industries";
import { getService } from "@/content/services";
import { CheckList, HeroArt, LinkCard } from "@/lib/ui";

export const dynamicParams = false;
export function generateStaticParams() { return industries.map((i) => ({ slug: i.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const i = getIndustry((await params).slug);
  return i ? pageMeta({ title: i.name, description: i.summary, path: `/industries/${i.slug}` }) : {};
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const ind = getIndustry((await params).slug);
  if (!ind) notFound();
  return (
    <>
      <PageHero crumbs={[{ label: "Industries", href: "/industries" }, { label: ind.name, href: `/industries/${ind.slug}` }]} eyebrow={`${ind.sector} · ${ind.name}`} title={ind.headline} intro={ind.intro}>
        <div className="btn-row"><Link className="btn btn-brand btn-lg" href="/contact">Talk to our {ind.name.toLowerCase()} team <ArrowRight className="arr" /></Link></div>
      </PageHero>
      <HeroArt variant={ind.art} />
      <section className="section">
        <div className="wrap split">
          <div className="reveal"><span className="label">The challenge</span><h2 className="h2" style={{ marginTop: 16 }}>What makes AI hard here.</h2></div>
          <div className="reveal"><CheckList items={ind.challenges} /></div>
        </div>
      </section>
      <section className="section surface">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Use cases</span><h2 className="h2">Where AI pays back.</h2></div>
          <div className="grid-2">
            {ind.useCases.map((u, i) => <div className="card num-card reveal" key={u.title}><span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{u.title}</h3><p className="body">{u.body}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal"><span className="label">Services</span><h2 className="h2">How we help.</h2></div>
          <div className="grid-4">
            {ind.services.map((slug) => { const s = getService(slug); return s ? <LinkCard key={slug} href={`/services/${slug}`} eyebrow={s.group} title={s.name} body={s.summary} /> : null; })}
          </div>
        </div>
      </section>
      <CtaBand art={ind.art} title={`Put AI to work in ${ind.name.toLowerCase()}.`} />
    </>
  );
}
