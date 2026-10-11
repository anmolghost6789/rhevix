import type { Metadata } from "next";
import { site } from "@/content/site";

const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` };

/** Complete metadata for a page: title, description, canonical URL, Open Graph and Twitter cards. */
export function pageMeta({ title, description, path, type = "website", publishedTime }: {
  title?: string; description: string; path: string; type?: "website" | "article"; publishedTime?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type, url: path, siteName: site.name, title: fullTitle, description, images: [OG_IMAGE], locale: "en_GB",
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE.url] },
  };
}

/** Renders schema.org structured data. Escapes "<" to prevent script injection. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const abs = (path: string) => new URL(path, site.url).toString();

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": abs("/#organization"),
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: abs("/brand/rhevix-logo.png"),
  slogan: site.tagline,
  description: site.description,
  email: site.email,
  sameAs: Object.values(site.social).filter(Boolean),
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": abs("/#website"),
  name: site.name,
  url: site.url,
  publisher: { "@id": abs("/#organization") },
});

export const breadcrumbLd = (crumbs: { label: string; href: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ label: "Home", href: "/" }, ...crumbs].map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: abs(c.href) })),
});
