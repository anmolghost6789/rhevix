"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, Cpu } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#06080e]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 p-[1px] shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            <div className="w-full h-full bg-[#070b14] rounded-xl flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
              <span className="font-extrabold text-lg tracking-wider font-mono">R</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-wider text-white">RHEVIX</span>
            <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase -mt-1">
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
              className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all cursor-pointer"
          >
            <span>Build With RHEVIX</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-[#070b14] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300"
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
