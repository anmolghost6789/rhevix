import type { Metadata } from "next";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rhevix | Senior engineers and AI specialists for enterprise teams",
  description:
    "Rhevix provides vetted engineering talent, AI data and evaluation, and production AI delivery to banks, telecoms and consulting firms, working inside your security and governance requirements.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
