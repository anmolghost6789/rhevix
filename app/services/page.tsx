import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { serviceGroups, services } from "@/content/services";
import { groupId, HeroArt, LinkCard } from "@/lib/ui";

export const metadata: Metadata = pageMeta({ title: "What we do", description: "AI-native engineering, data foundations, agents in production, model evaluation and expert data services from Rhevix.", path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "What we do", href: "/services" }]} eyebrow="What we do" title="Consulting, engineering and expert data for the AI era."
        intro="Nine services across three practices, delivered by one accountable team. Most clients start with one and extend as their programme grows." />
      <HeroArt variant={0} />
      <section className="section">
        <div className="wrap">
          {serviceGroups.map((g) => (
            <div className="group" key={g} id={groupId(g)}>
              <h2 className="group-title">{g}</h2>
              <div className="grid-3">{services.filter((s) => s.group === g).map((s) => <LinkCard key={s.slug} href={`/services/${s.slug}`} title={s.name} body={s.summary} />)}</div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
