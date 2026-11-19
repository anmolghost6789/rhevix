import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { assessments } from "@/content/assessments";
import { LinkCard } from "@/lib/ui";

export const metadata: Metadata = pageMeta({ title: "Self-assessments", description: "Free self-assessments for AI readiness and data maturity, with a recommended next step.", path: "/assessments" });
export default function AssessmentsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Assessments", href: "/assessments" }]} eyebrow="Self-assessments" title="See where you stand in five minutes."
        intro="Free, anonymous self-assessments with a recommended next step. Nothing is stored or sent unless you choose to contact us." />
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2">{assessments.map((a) => <LinkCard key={a.slug} href={`/assessments/${a.slug}`} eyebrow={`${a.questions.length} questions`} title={a.title} body={a.summary} cta="Start the assessment" />)}</div>
      </section>
    </>
  );
}
