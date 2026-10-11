import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { site } from "@/content/site";
import { JsonLd, organizationLd, websiteLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, title: `${site.name} | ${site.tagline}`, description: site.description, url: "/", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#0060F0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </body>
    </html>
  );
}
