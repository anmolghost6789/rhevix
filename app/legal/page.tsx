import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { legalPages } from "@/content/legal";
import { LinkCard } from "@/lib/ui";

export const metadata: Metadata = pageMeta({ title: "Legal", description: "Terms of use, privacy, cookie and accessibility statements for the Rhevix website.", path: "/legal" });
export default function LegalIndex() {
  return (
    <>
      <PageHero crumbs={[{ label: "Legal", href: "/legal" }]} eyebrow="Legal" title="Legal information." />
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="wrap grid-4">{legalPages.map((l) => <LinkCard key={l.slug} href={`/legal/${l.slug}`} title={l.title} cta="Read" />)}</div>
      </section>
    </>
  );
}
