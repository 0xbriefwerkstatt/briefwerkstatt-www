"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { useInView } from "../paper/Ink";

const LETTERS = [
  {
    tag: "Event-Follow-up",
    lines: [
      "Hallo Thomas,",
      "schön, dass wir uns auf der",
      "Bits & Pretzels getroffen",
      "haben. Dein Tracking-Thema",
      "geht mir nicht aus dem Kopf.",
      "Kaffee nächste Woche?",
      "Viele Grüße, Lena",
    ],
  },
  {
    tag: "Funding-Signal",
    lines: [
      "Liebe Julia,",
      "herzlichen Glückwunsch zur",
      "Series A! Wenn ihr jetzt",
      "skaliert, hätten wir eine",
      "Idee für euren Vertrieb.",
      "Melde dich gern,",
      "Lena",
    ],
  },
  {
    tag: "Reaktivierung",
    lines: [
      "Lieber Markus,",
      "lange nichts gehört! Wir",
      "haben drei neue Features,",
      "die genau euer Problem",
      "lösen. Ich zeig sie dir",
      "gern persönlich.",
      "Herzlich, Lena",
    ],
  },
];

const MS_PER_CHAR = 46;
const TRAVEL_MS = 420;
const HOLD_MS = 2600;
const PAPER_MM = 210;

type Seg =
  | { kind: "travel"; from: [number, number]; to: [number, number]; dur: number }
  | { kind: "write"; line: number; x: number; y: number; w: number; dur: number };

const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/**
 * Draufsicht auf einen Pen-Plotter: Portal und Schlitten fahren über das Blatt
 * und schreiben einen KI-personalisierten Brief Zeile für Zeile.
 */
export function PlotterStage() {
  const [stageRef, inView] = useInView<HTMLDivElement>(0.25);
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [lineNo, setLineNo] = useState(0);

  const paperRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const beamRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLSpanElement>(null);
  const lineNoRef = useRef(0);

  const letter = LETTERS[idx];

  useEffect(() => {
    if (!inView) return;
    const stage = stageRef.current;
    const paper = paperRef.current;
    if (!stage || !paper) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let timer = 0;
    let cancelled = false;

    const place = (x: number, y: number, down: boolean) => {
      if (beamRef.current) beamRef.current.style.transform = `translateX(${x}px)`;
      if (carRef.current) {
        carRef.current.style.transform = `translate(${x}px, ${y}px)`;
        carRef.current.dataset.down = down ? "1" : "0";
      }
      if (hudRef.current) {
        const p = paper.getBoundingClientRect();
        const s = stage.getBoundingClientRect();
        const k = PAPER_MM / p.width;
        const mx = Math.max(0, (x - (p.left - s.left)) * k);
        const my = Math.max(0, (y - (p.top - s.top)) * k);
        hudRef.current.textContent = `X ${mx.toFixed(1).padStart(5, "0")}  Y ${my.toFixed(1).padStart(5, "0")} mm`;
      }
    };

    const start = () => {
      if (cancelled) return;
      const s = stage.getBoundingClientRect();
      const lines = lineRefs.current.slice(0, letter.lines.length);

      if (reduced) {
        lines.forEach((l) => l && (l.style.clipPath = "none"));
        place(s.width * 0.85, s.height * 0.9, false);
        setLineNo(letter.lines.length);
        return;
      }

      // Fahrplan aus den gemessenen Zeilenpositionen
      const segs: Seg[] = [];
      let pos: [number, number] = [s.width * 0.88, s.height * 0.12];
      lines.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = r.left - s.left;
        const y = r.top - s.top + r.height * 0.68;
        segs.push({ kind: "travel", from: pos, to: [x, y], dur: i === 0 ? TRAVEL_MS * 1.6 : TRAVEL_MS });
        segs.push({ kind: "write", line: i, x, y, w: r.width, dur: letter.lines[i].length * MS_PER_CHAR });
        pos = [x + r.width, y];
      });
      segs.push({ kind: "travel", from: pos, to: [s.width * 0.88, s.height * 0.12], dur: TRAVEL_MS * 1.6 });

      let seg = 0;
      let t0 = performance.now();
      const tick = (now: number) => {
        const cur = segs[seg];
        const p = Math.min(1, (now - t0) / cur.dur);
        if (cur.kind === "travel") {
          const e = ease(p);
          place(cur.from[0] + (cur.to[0] - cur.from[0]) * e, cur.from[1] + (cur.to[1] - cur.from[1]) * e, false);
        } else {
          const el = lines[cur.line];
          if (el) el.style.clipPath = `inset(-20% ${(1 - p) * 100}% -40% 0)`;
          // kleine Auf-und-ab-Bewegung, wie die Feder beim Schreiben
          const wobble = Math.sin(now / 38) * 2.2 + Math.sin(now / 91) * 1.4;
          place(cur.x + cur.w * p, cur.y + wobble - 4, true);
          if (cur.line + 1 !== lineNoRef.current) {
            lineNoRef.current = cur.line + 1;
            setLineNo(cur.line + 1);
          }
        }
        if (p >= 1) {
          seg++;
          t0 = now;
          if (seg >= segs.length) {
            timer = window.setTimeout(() => {
              setFading(true);
              timer = window.setTimeout(() => {
                setIdx((v) => (v + 1) % LETTERS.length);
                setLineNo(0);
                lineNoRef.current = 0;
                setFading(false);
              }, 550);
            }, HOLD_MS);
            return;
          }
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // erst messen, wenn die Handschrift-Font geladen ist
    (document.fonts?.ready ?? Promise.resolve()).then(() => {
      timer = window.setTimeout(start, 350);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [inView, idx, letter, stageRef]);

  return (
    <div
      ref={stageRef}
      className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-[32px] bg-ink shadow-glow ring-1 ring-white/10"
      aria-label="Animation: Ein Roboter schreibt einen personalisierten Brief mit Füller"
      role="img"
    >
      {/* Blueprint-Raster + Licht */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-plum-2/40 blur-[90px]" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-fountain/30 blur-[90px]" />

      {/* Blatt */}
      <div
        ref={paperRef}
        className={`@container absolute bottom-[11%] left-[11%] right-[11%] top-[11%] rounded-[6px] bg-[#fffdf8] shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)] transition-all duration-500 ${
          fading ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div key={idx} className="flex h-full flex-col px-[9cqw] pt-[9cqw]">
          <div className="flex items-start justify-between">
            <span className="flex h-[11cqw] w-[11cqw] items-center justify-center rounded-full border border-plum/40 font-display text-[4cqw] font-semibold text-plum">
              BW
            </span>
            <span className="pt-[2cqw] font-sans text-[2.6cqw] tracking-wide text-ink/40">München, 17.10.2026</span>
          </div>
          <div className="mt-[8cqw] font-hand text-[6.6cqw] font-medium leading-[1.42] text-fountain">
            {letter.lines.map((l, i) => (
              <div key={i} className={i === letter.lines.length - 1 ? "mt-[2cqw]" : ""}>
                <span
                  ref={(el) => {
                    lineRefs.current[i] = el;
                  }}
                  className="inline-block whitespace-nowrap"
                  style={{ clipPath: "inset(-20% 100% -40% 0)" }}
                >
                  {l}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-end justify-between pb-[7cqw]">
            <span className="h-px w-[30cqw] bg-ink/10" />
            <QrMini />
          </div>
        </div>
      </div>

      {/* Portal: Schiene oben, Querbalken folgt X */}
      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-zinc-500 to-zinc-700 shadow-[0_6px_14px_rgba(0,0,0,.45)]" />
      <div ref={beamRef} className="pointer-events-none absolute left-0 top-0 h-full will-change-transform">
        <div className="absolute -left-[7px] top-0 h-full w-[14px] bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500 opacity-90 shadow-[0_0_24px_rgba(0,0,0,.5)]" />
        <div className="absolute -left-[13px] -top-1 h-6 w-[26px] rounded-md bg-zinc-800 ring-1 ring-white/20" />
      </div>
      {/* Schlitten mit Füller */}
      <div ref={carRef} className="group pointer-events-none absolute left-0 top-0 will-change-transform" data-down="0">
        <div className="absolute -left-6 -top-6 h-12 w-12 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 shadow-[0_14px_24px_-6px_rgba(0,0,0,.7)] ring-1 ring-white/15 transition-transform duration-200 group-data-[down=1]:scale-95" />
        <div className="absolute -left-[7px] -top-[7px] h-[14px] w-[14px] rounded-full bg-plum-2 ring-2 ring-zinc-900" />
        <div className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] rounded-full bg-fountain opacity-0 transition-opacity group-data-[down=1]:opacity-100" />
        <span className="absolute left-3 top-[-20px] h-1.5 w-1.5 rounded-full bg-zinc-500 transition-colors group-data-[down=1]:bg-emerald-400 group-data-[down=1]:shadow-[0_0_8px_#34d399]" />
      </div>

      {/* HUD */}
      <div className="absolute left-4 top-7 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 font-mono text-[10.5px] text-white ring-1 ring-white/15 backdrop-blur-md sm:left-5 sm:text-[11px]">
        <Sparkles className="h-3 w-3 text-sun" />
        KI-personalisiert · {letter.tag}
      </div>
      <div className="absolute inset-x-4 bottom-3.5 flex items-center justify-between font-mono text-[10px] text-white/55 sm:inset-x-5 sm:text-[11px]">
        <span ref={hudRef} className="tabular-nums">X 000.0  Y 000.0 mm</span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Zeile {lineNo}/{letter.lines.length}
        </span>
      </div>
    </div>
  );
}

function QrMini() {
  // QR-ähnliches Muster: drei Positionsmarken + deterministisches Rauschen
  const N = 21;
  const finder = (x: number, y: number) =>
    [[0, 0], [N - 7, 0], [0, N - 7]].some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
  const cells: [number, number][] = [];
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++) {
      if (finder(x, y)) continue;
      const v = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      if (v - Math.floor(v) > 0.52) cells.push([x, y]);
    }
  return (
    <svg viewBox={`0 0 ${N} ${N}`} className="h-[14cqw] w-[14cqw]" shapeRendering="crispEdges" aria-hidden>
      {[[0, 0], [N - 7, 0], [0, N - 7]].map(([x, y]) => (
        <g key={`${x}-${y}`} fill="var(--color-ink)">
          <path d={`M${x} ${y}h7v7h-7z M${x + 1} ${y + 1}v5h5v-5z`} fillRule="evenodd" />
          <rect x={x + 2} y={y + 2} width="3" height="3" />
        </g>
      ))}
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="var(--color-ink)" />
      ))}
    </svg>
  );
}
