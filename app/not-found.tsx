import Link from "@/components/SmartLink";
import { ArrowRight } from "@/components/Icons";
export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="label">Page not found</span>
        <h1 className="h1-page" style={{ marginTop: 18 }}>We could not find that page.</h1>
        <p className="body-lg">It may have moved, or the link may be mistyped.</p>
        <div className="btn-row"><Link className="btn btn-brand btn-lg" href="/">Go to the homepage <ArrowRight className="arr" /></Link><Link className="btn btn-outline btn-lg" href="/sitemap">See the sitemap</Link></div>
      </div>
    </section>
  );
}
