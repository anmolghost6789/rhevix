import Link from "@/components/SmartLink";
import type { ReactNode } from "react";
import { breadcrumbLd, JsonLd } from "@/lib/seo";

export function PageHero({ crumbs, eyebrow, title, intro, children }: {
  crumbs?: { label: string; href: string }[]; eyebrow?: string; title: string; intro?: string; children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {crumbs && <JsonLd data={breadcrumbLd(crumbs)} />}
        {crumbs && (
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li><Link href="/">Home</Link></li>
              {crumbs.map((c, i) => <li key={c.href}>{i === crumbs.length - 1 ? <span aria-current="page">{c.label}</span> : <Link href={c.href}>{c.label}</Link>}</li>)}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="label">{eyebrow}</span>}
        <h1 className="h1-page" style={{ marginTop: eyebrow ? 18 : 0, maxWidth: "20ch" }}>{title}</h1>
        {intro && <p className="body-lg">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
