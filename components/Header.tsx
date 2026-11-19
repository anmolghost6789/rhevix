"use client";
import Link from "@/components/SmartLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, secondaryNav } from "@/content/site";
import { Logo } from "./Logo";
import { ArrowRight, ChevronDown, Close, Menu } from "./Icons";
import { SilkArt } from "./SilkArt";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); setMobile(false); } };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  const enter = (i: number) => { clearTimeout(timer.current); setOpen(i); };
  const leave = () => { timer.current = setTimeout(() => setOpen(null), 180); };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-inner">
        <Link className="wordmark" href="/" aria-label="Rhevix home"><Logo /></Link>
        <nav className="nav" aria-label="Main">
          {mainNav.map((m, i) => (
            <div className="nav-item" key={m.label} onMouseEnter={() => enter(i)} onMouseLeave={leave}>
              <button className="nav-trigger" type="button" aria-expanded={open === i} aria-controls={`mega-${i}`}
                onClick={() => setOpen(open === i ? null : i)}>
                {m.label}<ChevronDown />
              </button>
            </div>
          ))}
        </nav>
        <nav className="subnav" aria-label="Company">
          {secondaryNav.map((l) => <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>{l.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="btn btn-brand btn-sm" href="/contact">Contact us</Link>
          <button className="btn btn-icon menu-btn" type="button" aria-label={mobile ? "Close menu" : "Open menu"} aria-expanded={mobile} aria-controls="mobile-menu" onClick={() => setMobile(!mobile)}>
            {mobile ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {mainNav.map((m, i) => (
        <div key={m.label} id={`mega-${i}`} className={`mega${open === i ? " open" : ""}`} onMouseEnter={() => enter(i)} onMouseLeave={leave}>
          <div className="wrap mega-inner">
            {m.columns.map((c) => (
              <div key={c.heading}>
                <h6>{c.heading}</h6>
                <ul>{c.links.map((l) => <li key={l.label}><Link href={l.href}>{l.label}{l.description && <span>{l.description}</span>}</Link></li>)}</ul>
              </div>
            ))}
            {m.columns.length < 3 && <div />}
            <div>
              <Link className="mega-feature" href={m.feature.href}>
                {open === i && <SilkArt variant={m.feature.art} lines={20} />}
                <small>{m.feature.eyebrow}</small><strong>{m.feature.title}</strong><span>{m.feature.cta} <ArrowRight width={14} height={14} /></span>
              </Link>
              <Link className="link-arrow mega-overview" href={m.href}>All {m.label.toLowerCase()} <ArrowRight /></Link>
            </div>
          </div>
        </div>
      ))}

      <nav id="mobile-menu" className={`mobile-menu${mobile ? " open" : ""}`} aria-label="Mobile">
        {mainNav.map((m) => (
          <details key={m.label}>
            <summary>{m.label}<ChevronDown /></summary>
            <Link href={m.href}>Overview</Link>
            {m.columns.flatMap((c) => c.links).map((l) => <Link key={l.label + l.href} href={l.href}>{l.label}</Link>)}
          </details>
        ))}
        <div className="mobile-links">{secondaryNav.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}</div>
        <Link className="btn btn-brand btn-lg" href="/contact">Contact us</Link>
      </nav>
    </header>
  );
}
