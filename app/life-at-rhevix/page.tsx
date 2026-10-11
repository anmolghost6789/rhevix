import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { SilkArt } from "@/components/SilkArt";
import { life } from "@/content/company";

export const metadata: Metadata = pageMeta({ title: "Life at Rhevix", description: "Our mission, culture, community and commitment to belonging.", path: "/life-at-rhevix" });

export default function LifePage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Life at Rhevix", href: "/life-at-rhevix" }]} eyebrow="Our people" title="A place where expertise is respected."
        intro="Curiosity is rewarded, feedback is direct and kind, and every voice counts." />
      {life.map((l, i) => (
        <section key={l.id} id={l.id} className={`section${i % 2 ? " surface" : ""}`}>
          <div className="wrap split">
            <div className="art reveal" style={{ aspectRatio: "4 / 3", borderRadius: 20 }}><SilkArt variant={l.art} /></div>
            <div className="reveal"><span className="label">{String(i + 1).padStart(2, "0")}</span><h2 className="h2" style={{ marginTop: 16 }}>{l.title}</h2><p className="body-lg" style={{ marginTop: 18 }}>{l.body}</p></div>
          </div>
        </section>
      ))}
      <CtaBand title="Want to work with us?" text="See current openings or introduce yourself." href="/careers" label="View careers" art={2} />
    </>
  );
}
