import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { industries } from "@/content/industries";
import { HeroArt, LinkCard } from "@/lib/ui";

export const metadata: Metadata = pageMeta({ title: "Industries", description: "AI for banking, insurance, wealth, telecommunications, media, professional services and AI labs.", path: "/industries" });

export default function IndustriesPage() {
  const sectors = [...new Set(industries.map((i) => i.sector))];
  return (
    <>
      <PageHero crumbs={[{ label: "Industries", href: "/industries" }]} eyebrow="Industries" title="Built for organisations where controls matter."
        intro="We focus on industries where accuracy, regulation and scale make AI hardest, and where getting it right matters most." />
      <HeroArt variant={1} />
      <section className="section">
        <div className="wrap">
          {sectors.map((sec) => (
            <div className="group" key={sec}>
              <h2 className="group-title">{sec}</h2>
              <div className="grid-3">{industries.filter((i) => i.sector === sec).map((i) => <LinkCard key={i.slug} href={`/industries/${i.slug}`} title={i.name} body={i.summary} />)}</div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand art={1} />
    </>
  );
}
