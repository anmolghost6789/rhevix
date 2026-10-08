import type { Metadata } from "next";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: "RHEVIX | AI. Data. Engineering. Built for the Next Generation of Business.",
  description:
    "RHEVIX is a technology company helping organizations build intelligent products, modernize technology, and turn complex business challenges into scalable digital solutions across AI, Data Engineering, Software Engineering, Analytics, and Cloud.",
  keywords: [
    "RHEVIX",
    "Artificial Intelligence",
    "Data Engineering",
    "Software Engineering",
    "Analytics",
    "Cloud Architecture",
    "Agentic AI",
    "Enterprise AI",
    "Digital Modernization",
  ],
  authors: [{ name: "RHEVIX" }],
  openGraph: {
    title: "RHEVIX — AI. Data. Engineering.",
    description: "Built for the Next Generation of Business. Helping organizations build intelligent products and modernize technology.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
