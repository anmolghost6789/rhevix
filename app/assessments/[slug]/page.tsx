import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Assessment } from "@/components/Assessment";
import { assessments, getAssessment } from "@/content/assessments";

export const dynamicParams = false;
export function generateStaticParams() { return assessments.map((a) => ({ slug: a.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = getAssessment((await params).slug);
  return a ? pageMeta({ title: a.title, description: a.summary, path: `/assessments/${a.slug}` }) : {};
}
export default async function AssessmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getAssessment((await params).slug);
  if (!a) notFound();
  return (
    <>
      <PageHero crumbs={[{ label: "Assessments", href: "/assessments" }, { label: a.title, href: `/assessments/${a.slug}` }]} eyebrow="Self-assessment" title={a.title} intro={`${a.summary} Your answers stay in your browser.`} />
      <section className="section-sm" style={{ paddingTop: 0 }}><div className="wrap-narrow"><Assessment a={a} /></div></section>
    </>
  );
}
