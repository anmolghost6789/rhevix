"use client";
import { useEffect, useRef } from "react";
import { createSilk } from "@/lib/silk";

/** Decorative animated artwork. Renders a canvas that fills its parent. */
export function SilkArt({ variant = 0, lines = 24, fps = 24, active }: { variant?: number; lines?: number; fps?: number; active?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const silk = useRef<ReturnType<typeof createSilk> | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    silk.current = createSilk(ref.current, { variant, lines, fps });
    return () => silk.current?.destroy();
  }, [variant, lines, fps]);
  useEffect(() => { if (active !== undefined) silk.current?.go(active); }, [active]);
  return <canvas ref={ref} aria-hidden="true" />;
}
