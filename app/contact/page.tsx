import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/content/site";
import { CheckList } from "@/lib/ui";

export const metadata: Metadata = pageMeta({ title: "Contact us", description: "Talk to Rhevix about putting AI into production. A senior member of the team will respond.", path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Contact", href: "/contact" }]} eyebrow="Contact" title="Let's discuss where AI can take you."
        intro="Tell us what you are working on. A senior member of the team will respond to arrange a conversation." />
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div className="reveal">
            <CheckList items={["A clear recommendation, even if it is not us", "NDA available before the first call", "Experts who have done the work before"]} />
            <p className="body-lg" style={{ marginTop: 32 }}>Prefer email? Write to <a className="link-arrow" href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          <div className="reveal"><LeadForm kind="contact" /></div>
        </div>
      </section>
    </>
  );
}
