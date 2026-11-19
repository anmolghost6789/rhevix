import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { assessments } from "@/content/assessments";
import { legalPages } from "@/content/legal";

/** Every page on the site, grouped. Used by the HTML sitemap and sitemap.xml. */
export function allRoutes() {
  return [
    { group: "Company", links: [
      { label: "Home", href: "/" }, { label: "About us", href: "/about" }, { label: "Our work", href: "/our-work" },
      { label: "Life at Rhevix", href: "/life-at-rhevix" }, { label: "Careers", href: "/careers" },
      { label: "Join the expert network", href: "/experts" }, { label: "Contact", href: "/contact" },
      { label: "The Rhevix story", href: "/story.html" },
    ]},
    { group: "What we do", links: [{ label: "All services", href: "/services" }, ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))] },
    { group: "Industries", links: [{ label: "All industries", href: "/industries" }, ...industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` }))] },
    { group: "Insights", links: [{ label: "All insights", href: "/insights" }, ...insights.map((i) => ({ label: i.title, href: `/insights/${i.slug}` }))] },
    { group: "Assessments", links: [{ label: "All assessments", href: "/assessments" }, ...assessments.map((a) => ({ label: a.title, href: `/assessments/${a.slug}` }))] },
    { group: "Legal", links: [{ label: "Legal", href: "/legal" }, ...legalPages.map((l) => ({ label: l.title, href: `/legal/${l.slug}` }))] },
  ];
}
