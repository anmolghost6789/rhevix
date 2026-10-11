import type { MetadataRoute } from "next";
import { allRoutes } from "@/lib/routes";
import { site } from "@/content/site";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const built = new Date();
  const dates = new Map(insights.map((i) => [`/insights/${i.slug}`, new Date(i.date)]));
  return allRoutes().flatMap((g) => g.links).map((l) => ({
    url: new URL(l.href, site.url).toString(),
    lastModified: dates.get(l.href) ?? built,
    changeFrequency: l.href.startsWith("/insights") ? "weekly" : "monthly",
    priority: l.href === "/" ? 1 : l.href.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
