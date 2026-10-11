"use client";
import Link from "@/components/SmartLink";
import { useRef } from "react";
import { lifeCards } from "@/content/home";
import { SilkArt } from "./SilkArt";
import { ArrowRight, ChevronLeft, ChevronRight } from "./Icons";

export function LifeCarousel({ heading }: { heading: React.ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = track.current; if (!el) return;
    const card = el.querySelector(".life-card") as HTMLElement | null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 18), behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <>
      <div className="row-head reveal">
        {heading}
        <div className="controls">
          <button className="btn btn-icon" type="button" aria-label="Previous" onClick={() => scroll(-1)}><ChevronLeft /></button>
          <button className="btn btn-icon" type="button" aria-label="Next" onClick={() => scroll(1)}><ChevronRight /></button>
        </div>
      </div>
      <div className="life-track" ref={track}>
        {lifeCards.map((c) => (
          <Link key={c.title} className="card life-card" href={c.href}>
            <div className="art"><SilkArt variant={c.art} /></div>
            <div className="life-body"><span className="label">Our people</span><h3>{c.title}</h3><p className="body">{c.body}</p><span className="link-arrow">{c.cta} <ArrowRight /></span></div>
          </Link>
        ))}
      </div>
    </>
  );
}
