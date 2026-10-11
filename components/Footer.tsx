import Link from "@/components/SmartLink";
import { footerNav, legalNav, site } from "@/content/site";
import { Logo } from "./Logo";
import { ArrowRight, Github, Linkedin, Youtube } from "./Icons";

export function Footer() {
  const socials = [
    { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: site.social.github, label: "GitHub", Icon: Github },
    { href: site.social.youtube, label: "YouTube", Icon: Youtube },
  ].filter((s) => s.href);
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <h2 className="h2">Let&apos;s build what&apos;s next, together.</h2>
          <Link className="btn btn-light btn-lg" href="/contact">Contact us <ArrowRight className="arr" /></Link>
        </div>
        <div className="footer-grid">
          <div>
            <Link className="wordmark" href="/" aria-label="Rhevix home"><Logo inverted /></Link>
            <p className="footer-about">{site.tagline} AI-first consulting, engineering and expert network.</p>
            {socials.length > 0 && (
              <div className="social">
                {socials.map(({ href, label, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Rhevix on ${label}`}><Icon /></a>)}
              </div>
            )}
          </div>
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h5>{col.heading}</h5>
              <ul>{col.links.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.{site.registeredAddress && ` ${site.registeredAddress}`}</span>
          <nav aria-label="Legal">{legalNav.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
        </div>
      </div>
    </footer>
  );
}
