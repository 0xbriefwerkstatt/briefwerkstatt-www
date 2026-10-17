"use client";

import { ArrowDown, Calendar, Check } from "lucide-react";
import { motion } from "motion/react";
import { PlotterStage } from "./PlotterStage";
import type { ReactNode } from "react";
import { CalModal, openCalModal } from "../CalModal";
import { HandNote, Scribble } from "../paper/Ink";

const ticker = [
  "Echte Tinte",
  "KI-personalisiert",
  "Roboter-Handschrift",
  "REST API + Webhooks",
  "QR-Tracking pro Brief",
  "DSGVO-konform",
  "Keine Mindestauflage",
  "Made in München",
  "98 % Öffnungsrate",
];

function scrollToPlayground() {
  document.getElementById("playground")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function DevHero() {
  return (
    <>
      <section className="paper-grain aurora relative overflow-hidden bg-paper text-ink">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-28 lg:pt-14">
          {/* Copy */}
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 font-mono text-xs text-ink shadow-soft"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              KI-Text <span className="text-ink/30">→</span> Roboter-Handschrift <span className="text-ink/30">→</span> Briefkasten
            </motion.div>

            <h1 className="font-display text-[2.9rem] font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-[4.4rem] xl:text-[4.8rem]">
              {["Sichere", "dir"].map((w, i) => (
                <Word key={w} i={i}>{w}</Word>
              ))}{" "}
              <Word i={2}>
                <Scribble>30 Sekunden</Scribble>
              </Word>{" "}
              {["ungeteilte", "Aufmerksamkeit"].map((w, i) => (
                <Word key={w} i={3 + i}>{w}</Word>
              ))}{" "}
              {["deiner", "idealen", "Kunden."].map((w, i) => (
                <Word key={w} i={5 + i}>
                  <span className="font-hand text-[1.1em] font-bold leading-[0.9] text-plum">{w}</span>
                </Word>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            >
              Cold-Mails sind tot. Deine KI formuliert jeden Brief individuell, unsere Roboter
              schreiben ihn mit <strong className="text-ink">echtem Füller auf echtes Papier, gesteuert per API.</strong>{" "}
              98 % Öffnungsrate, DSGVO-konform per berechtigtem Interesse.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <button onClick={scrollToPlayground} className="btn-ink btn-plum">
                API-Playground öffnen
                <ArrowDown className="h-4 w-4" />
              </button>
              <button onClick={openCalModal} className="btn-ink btn-paper">
                <Calendar className="h-4 w-4" />
                Kennenlerngespräch
              </button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-soft"
            >
              {["Keine Mindestauflage", "REST API + Webhooks", "QR-Tracking pro Brief"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-plum" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Plotter-Bühne */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[520px] lg:mr-0"
          >
            <PlotterStage />
            <div className="absolute -left-3 top-[38%] z-20 hidden rounded-2xl bg-white px-3.5 py-2.5 font-mono text-[11px] shadow-lift ring-1 ring-ink/5 sm:block lg:-left-10">
              <span className="text-ink-soft">POST </span>/v1/letters
              <div className="font-semibold text-emerald-600">200 OK · queued</div>
            </div>
            <div className="float absolute -right-2 bottom-[18%] z-20 hidden rounded-2xl bg-white px-3.5 py-2.5 font-mono text-[11px] shadow-lift ring-1 ring-ink/5 sm:block lg:-right-8" style={{ animationDelay: "-3s" }}>
              <span className="text-ink-soft">webhook:</span>
              <div className="font-semibold text-ink">letter.scanned ✓</div>
            </div>
            <HandNote className="absolute -bottom-14 left-4 z-20 hidden sm:block" arrow="none" rotate={-4}>
              <span className="block">kein Font. echte Tinte, live geschrieben.</span>
            </HandNote>
          </motion.div>
        </div>

        {/* Laufband */}
        <div className="relative border-y border-ink/10 bg-plum py-3.5 text-white">
          <div className="flex w-max marquee">
            {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i} className="flex items-center gap-6 px-6 font-display text-lg italic sm:text-xl">
                {t}
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-sun" aria-hidden>
                  <path
                    d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </section>

      <CalModal />
    </>
  );
}

function Word({ i, children }: { i: number; children: ReactNode }) {
  return (
    <>
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 28, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.75, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>{" "}
    </>
  );
}
