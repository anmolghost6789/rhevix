"use client";
import Link from "@/components/SmartLink";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/content/home";
import { SilkArt } from "./SilkArt";
import { ArrowLeft, ArrowRight, Pause, Play } from "./Icons";

const SLIDE_MS = 7000;

export function HeroCarousel() {
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const bar = useRef<(HTMLElement | null)[]>([]);
  const start = useRef(0), elapsed = useRef(0);

  useEffect(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true); }, []);
  const go = useCallback((i: number) => {
    const n = (i + heroSlides.length) % heroSlides.length;
    setCur(n); start.current = performance.now(); elapsed.current = 0;
    bar.current.forEach((b) => b && (b.style.width = "0%"));
  }, []);

  useEffect(() => {
    let raf = 0;
    start.current = performance.now() - elapsed.current;
    const tick = (now: number) => {
      if (!paused) {
        elapsed.current = now - start.current;
        const b = bar.current[cur]; if (b) b.style.width = Math.min(100, (elapsed.current / SLIDE_MS) * 100) + "%";
        if (elapsed.current >= SLIDE_MS) { go(cur + 1); return; }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cur, paused, go]);

  return (
    <section className="banner" aria-roledescription="carousel" aria-label="Featured">
      <SilkArt variant={heroSlides[0].art} lines={54} fps={60} active={heroSlides[cur].art} />
      <div className="wrap banner-inner">
        <div className="slides" aria-live={paused ? "polite" : "off"}>
          {heroSlides.map((s, i) => (
            <article key={s.title} className={`slide${i === cur ? " active" : ""}`} id={`slide-${i}`} role="tabpanel"
              aria-roledescription="slide" aria-label={`${i + 1} of ${heroSlides.length}`} inert={i !== cur}>
              <span className="eyebrow">{s.eyebrow}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <Link className="btn btn-light btn-lg" href={s.cta.href}>{s.cta.label} <ArrowRight className="arr" /></Link>
            </article>
          ))}
        </div>
      </div>
      <div className="banner-controls">
        <div className="wrap">
          <button className="btn btn-icon pause" type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}>
            {paused ? <Play /> : <Pause />}
          </button>
          <div className="dots" role="tablist" aria-label="Choose slide">
            {heroSlides.map((s, i) => (
              <button key={s.title} className="dot" type="button" role="tab" aria-selected={i === cur} aria-controls={`slide-${i}`} aria-label={s.eyebrow} onClick={() => go(i)}>
                <i ref={(el) => { bar.current[i] = el; }} />
              </button>
            ))}
          </div>
          <div className="arrows">
            <button className="btn btn-round" type="button" aria-label="Previous slide" onClick={() => go(cur - 1)}><ArrowLeft /></button>
            <button className="btn btn-round" type="button" aria-label="Next slide" onClick={() => go(cur + 1)}><ArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
