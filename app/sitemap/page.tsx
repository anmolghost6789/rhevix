import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "@/components/SmartLink";
import { PageHero } from "@/components/PageHero";
import { allRoutes } from "@/lib/routes";

export const metadata: Metadata = pageMeta({ title: "Sitemap", description: "Every page on the Rhevix website.", path: "/sitemap" });
export default function SitemapPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Sitemap", href: "/sitemap" }]} title="Sitemap" />
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="wrap sitemap-grid">
          {allRoutes().map((g) => (
            <div key={g.group}><h2>{g.group}</h2><ul>{g.links.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul></div>
          ))}
        </div>
      </section>
    </>
  );
}
