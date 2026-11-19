import Link from "@/components/SmartLink";
import { ArrowRight, CheckCircle } from "@/components/Icons";
import { SilkArt } from "@/components/SilkArt";

export const groupId = (g: string) => g.toLowerCase().replace(/\s+/g, "-");

export function LinkCard({ href, eyebrow, title, body, cta = "Learn more" }: { href: string; eyebrow?: string; title: string; body?: string; cta?: string }) {
  return (
    <Link className="card link-card reveal" href={href}>
      {eyebrow && <span className="mono">{eyebrow}</span>}
      <h3>{title}</h3>
      {body && <p className="body">{body}</p>}
      <span className="link-arrow">{cta} <ArrowRight /></span>
    </Link>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map((i) => <li key={i}><CheckCircle />{i}</li>)}</ul>;
}

export function HeroArt({ variant }: { variant: number }) {
  return <div className="wrap"><div className="art hero-art reveal"><SilkArt variant={variant} lines={40} /></div></div>;
}
