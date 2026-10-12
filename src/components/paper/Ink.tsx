"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Setzt `in-view`, sobald das Element sichtbar wird (für CSS-Draw-Animationen). */
export function useInView<T extends Element>(threshold = 0.4) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/** Einblenden beim Scrollen. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Wort mit handgezeichnetem Unterstrich, der sich beim Scrollen selbst zeichnet. */
export function Scribble({
  children,
  color = "var(--color-plum)",
  className = "",
  variant = "under",
}: {
  children: ReactNode;
  color?: string;
  className?: string;
  variant?: "under" | "circle";
}) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.6);
  return (
    <span ref={ref} className={`relative inline-block whitespace-nowrap ${variant === "circle" ? "mx-[0.2em]" : ""} ${inView ? "in-view" : ""} ${className}`}>
      <span className="relative z-10">{children}</span>
      {variant === "under" ? (
        <svg
          aria-hidden
          viewBox="0 0 300 20"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -bottom-[0.18em] left-[-2%] h-[0.32em] w-[104%]"
        >
          <path
            className="draw-on-view"
            style={{ ["--len" as string]: 340 }}
            d="M3 13 C 60 4, 120 6, 170 9 S 260 15, 297 6"
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          aria-hidden
          viewBox="0 0 300 110"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -inset-x-[5%] -inset-y-[14%] h-[128%] w-[110%]"
        >
          <path
            className="draw-on-view"
            style={{ ["--len" as string]: 900 }}
            d="M190 8 C 90 -2, 8 22, 10 58 C 12 96, 140 106, 230 96 C 300 88, 302 30, 240 14 C 200 4, 120 6, 80 14"
            fill="none"
            stroke={color}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}

/** Handgeschriebene Randnotiz mit geschwungenem Pfeil. */
export function HandNote({
  children,
  className = "",
  arrow = "down-left",
  rotate = -4,
}: {
  children: ReactNode;
  className?: string;
  arrow?: "down-left" | "down-right" | "left" | "none";
  rotate?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.6);
  const paths: Record<string, string> = {
    "down-left": "M70 4 C 66 30, 46 50, 10 58 M10 58 L 24 46 M10 58 L 26 64",
    "down-right": "M8 4 C 12 30, 32 50, 68 58 M68 58 L 54 46 M68 58 L 52 64",
    left: "M76 30 C 56 18, 32 22, 6 34 M6 34 L 20 22 M6 34 L 22 42",
  };
  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none font-hand text-2xl leading-tight text-plum ${inView ? "in-view" : ""} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden
    >
      <span>{children}</span>
      {arrow !== "none" ? (
        <svg viewBox="0 0 80 70" className="mt-1 h-12 w-14">
          <path
            className="draw-on-view"
            style={{ ["--len" as string]: 140, ["--delay" as string]: ".5s" }}
            d={paths[arrow]}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </div>
  );
}

/** Organischer Übergang zwischen zwei Sektionsfarben. */
export function Wave({
  from,
  to,
  flip = false,
}: {
  from: string;
  to: string;
  flip?: boolean;
}) {
  return (
    <div aria-hidden className="relative -mt-px h-16 w-full sm:h-24" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <path d="M0 64 C 240 8, 520 4, 760 40 S 1220 100, 1440 30 L1440 100 L0 100 Z" fill={to} />
      </svg>
    </div>
  );
}

/** Kleines Label über Überschriften. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-plum ${className}`}>
      <span className="h-[2px] w-6 rounded bg-plum" />
      {children}
    </p>
  );
}
