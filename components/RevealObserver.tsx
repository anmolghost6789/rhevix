"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Adds the "in" class to .reveal elements as they scroll into view. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
