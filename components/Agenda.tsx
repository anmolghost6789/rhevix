"use client";
import Link from "@/components/SmartLink";
import { useEffect, useState } from "react";
import { agenda } from "@/content/home";
import { SilkArt } from "./SilkArt";
import { ArrowRight } from "./Icons";

export function Agenda() {
  const [active, setActive] = useState(agenda[0].id);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id.replace("theme-", "")); }), { rootMargin: "-45% 0px -50% 0px" });
    agenda.forEach((t) => { const el = document.getElementById(`theme-${t.id}`); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <div className="agenda">
      <nav className="agenda-nav" aria-label="Agenda themes">
        {agenda.map((t) => <a key={t.id} href={`#theme-${t.id}`} className={active === t.id ? "on" : ""}>{t.label}</a>)}
      </nav>
      <div>
        {agenda.map((t, i) => (
          <article key={t.id} id={`theme-${t.id}`} className="theme reveal">
            <div>
              <span className="label">{String(i + 1).padStart(2, "0")} · {t.label}</span>
              <h3 className="h3">{t.title}</h3>
              {t.p.map((p) => <p className="body-lg" key={p.slice(0, 20)}>{p}</p>)}
              <div className="explore">
                <h4>Explore more</h4>
                <ul className="list-links">{t.links.map((l) => <li key={l.href}><Link href={l.href}>{l.label}<ArrowRight /></Link></li>)}</ul>
              </div>
            </div>
            <Link className="card feature" href={t.feature.href}>
              <div className="art"><SilkArt variant={t.feature.art} /></div>
              <div className="feature-body"><span className="mono">{t.feature.eyebrow}</span><h5>{t.feature.title}</h5><span className="link-arrow">Read more <ArrowRight /></span></div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
