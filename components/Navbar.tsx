"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Capabilities", href: "#capabilities" },
    { label: "RHEVIX AI", href: "#ai" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "Technology", href: "#technology" },
    { label: "Why RHEVIX", href: "#why-rhevix" },
    { label: "Experience", href: "#experience" },
    { label: "Industries", href: "#industries" },
    { label: "Approach", href: "#approach" },
    { label: "Leadership", href: "#leadership" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 p-[1px] shadow-sm flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <span className="font-extrabold text-base tracking-wider font-mono">R</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-slate-900">RHEVIX</span>
            <span className="text-[10px] tracking-wider text-slate-500 font-semibold uppercase -mt-0.5">
              AI · Data · Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Build With RHEVIX</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:text-blue-600 hover:border-blue-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800"
            >
              <span>Build With RHEVIX</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
