import Link from "@/components/SmartLink";
import { ArrowRight } from "./Icons";
import { SilkArt } from "./SilkArt";

export function CtaBand({ title = "Let's discuss where AI can take you.", text = "Tell us what you are working on. A senior member of the team will respond to arrange a conversation.", href = "/contact", label = "Contact us", art = 2 }:
  { title?: string; text?: string; href?: string; label?: string; art?: number }) {
  return (
    <section className="section-sm">
      <div className="wrap">
        <div className="cta-band reveal">
          <SilkArt variant={art} lines={30} />
          <h2 className="h2">{title}</h2>
          <p>{text}</p>
          <Link className="btn btn-light btn-lg" href={href}>{label} <ArrowRight className="arr" /></Link>
        </div>
      </div>
    </section>
  );
}
