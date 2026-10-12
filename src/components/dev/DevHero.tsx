"use client";

import { ArrowDown, Calendar, Check } from "lucide-react";
import { motion } from "motion/react";
import { CalModal, openCalModal } from "../CalModal";
import { HandNote, Scribble } from "../paper/Ink";
import { img } from "../../lib/imgParams";

const letterImg = "/assets/baf8c036e64b1e4e879710f5028d046ed28fd68c.png";
const plotterImg = "/assets/2a1e023a513c7d26c4ee4c0148d9ac3f2a7e5096.png";

const ticker = [
  "Echte Tinte",
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

const pop = (delay: number, rotate = 0) => ({
  initial: { opacity: 0, y: 40, rotate: rotate - 6 },
  animate: { opacity: 1, y: 0, rotate },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function DevHero() {
  return (
    <>
      <section className="paper-grain relative overflow-hidden bg-paper text-ink">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-28 lg:pt-14">
          {/* Copy */}
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 font-mono text-xs text-ink shadow-[3px_3px_0_0_var(--color-ink)]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              pen_plotter × webhooks
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[2.9rem] font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-[4.4rem] xl:text-[4.8rem]"
            >
              Sichere dir <Scribble>30 Sekunden</Scribble> ungeteilte Aufmerksamkeit{" "}
              <span className="font-hand text-[1.1em] font-bold leading-[0.9] text-plum">
                deiner idealen Kunden.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            >
              Cold-Mails sind tot. Verlasse das digitale Schlachtfeld und verkaufe deine Lösung
              analog: <strong className="text-ink">echte Briefe, echte Tinte, gesteuert per API.</strong>{" "}
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

          {/* Collage */}
          <div className="relative mx-auto h-[470px] w-full max-w-[560px] sm:h-[600px]">
            {/* Kuvert */}
            <motion.div
              {...pop(0.35, 7)}
              className="absolute right-0 top-6 w-[68%] sm:right-2 sm:top-10"
            >
              <div className="float" style={{ ["--r" as string]: "7deg", animationDelay: "-2s" }}>
                <Envelope />
              </div>
            </motion.div>

            {/* Echter Brief */}
            <motion.div
              {...pop(0.15, -5)}
              className="absolute left-[4%] top-[10%] w-[56%] sm:left-[6%] sm:w-[52%]"
            >
              <div className="float" style={{ ["--r" as string]: "-5deg" }}>
                <div className="relative overflow-hidden rounded-[6px] border-2 border-ink bg-white shadow-[8px_10px_0_0_var(--color-ink)]">
                  <img
                    src={img(letterImg, 900)}
                    alt="Echter, mit Füller geschriebener Brief der Briefwerkstatt"
                    className="block h-auto w-full"
                    fetchPriority="high"
                  />
                </div>
                <span className="tape left-1/2 top-[-12px] -translate-x-1/2 rotate-[-4deg]" />
              </div>
            </motion.div>

            {/* Plotter-Polaroid */}
            <motion.div
              {...pop(0.5, 4)}
              className="absolute bottom-[2%] right-[2%] w-[52%] sm:bottom-[4%] sm:w-[46%]"
            >
              <div className="float" style={{ ["--r" as string]: "4deg", animationDelay: "-4s" }}>
                <div className="relative rounded-[6px] border-2 border-ink bg-white p-2 pb-9 shadow-[6px_6px_0_0_var(--color-ink)]">
                  <img
                    src={img(plotterImg, 600)}
                    alt="Pen-Plotter schreibt einen Brief in München"
                    className="aspect-[4/3] w-full rounded-[3px] object-cover"
                  />
                  <span className="absolute bottom-1.5 left-3 whitespace-nowrap font-hand text-lg text-ink sm:text-xl">
                    live aus München
                  </span>
                </div>
                <span className="tape right-[-18px] top-3 rotate-[38deg]" />
              </div>
            </motion.div>

            {/* API-Chips */}
            <motion.div
              {...pop(0.8)}
              className="absolute right-[-4px] top-0 z-20 sm:right-[-24px]"
            >
              <div className="float rounded-xl border-2 border-ink bg-ink px-3.5 py-2.5 font-mono text-[11px] text-white shadow-[4px_4px_0_0_var(--color-plum)]">
                <span className="text-white/50">POST </span>/v1/letters
                <div className="text-emerald-300">200 OK · 12 ms</div>
              </div>
            </motion.div>
            <motion.div {...pop(1)} className="absolute bottom-[30%] left-[-6px] z-20 sm:left-[-28px]">
              <div
                className="float rounded-xl border-2 border-ink bg-white px-3.5 py-2.5 font-mono text-[11px] shadow-[4px_4px_0_0_var(--color-ink)]"
                style={{ animationDelay: "-3s" }}
              >
                <span className="text-ink-soft">webhook:</span>
                <div className="font-semibold text-ink">letter.scanned ✓</div>
              </div>
            </motion.div>

            <HandNote
              className="absolute -bottom-6 left-[2%] z-20 hidden sm:block"
              arrow="none"
              rotate={-6}
            >
              <span className="block max-w-[180px]">kein Font. echte Tinte, echtes Papier.</span>
            </HandNote>
          </div>
        </div>

        {/* Laufband */}
        <div className="relative border-y-2 border-ink bg-plum py-3.5 text-white">
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

function Envelope() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full drop-shadow-[6px_8px_0_var(--color-ink)]" role="img" aria-label="Handadressiertes Kuvert">
      <rect x="2" y="2" width="356" height="236" rx="10" fill="#fbf7ee" stroke="var(--color-ink)" strokeWidth="3" />
      <path d="M4 8 L180 128 L356 8" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinejoin="round" opacity=".35" />
      {/* Briefmarke */}
      <g transform="translate(280 18) rotate(4)">
        <rect width="58" height="70" rx="3" fill="var(--color-plum)" stroke="var(--color-ink)" strokeWidth="2.5" strokeDasharray="4 3" />
        <circle cx="29" cy="35" r="17" fill="none" stroke="#fff" strokeWidth="2" />
        <text x="29" y="41" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="700" fill="#fff">BW</text>
      </g>
      {/* Poststempel */}
      <g transform="translate(232 70)" opacity=".55" stroke="var(--color-ink)" fill="none" strokeWidth="1.8">
        <circle r="26" />
        <path d="M30 -8 q 14 -8 28 0 t 28 0 M30 4 q 14 -8 28 0 t 28 0 M30 16 q 14 -8 28 0 t 28 0" />
      </g>
      <g fontFamily="var(--nf-hand), cursive" fill="var(--color-fountain)" fontSize="27">
        <text x="70" y="146">Dr. Thomas Wagner</text>
        <text x="70" y="176">Parkstraße 12</text>
        <text x="70" y="206">80538 München</text>
      </g>
    </svg>
  );
}
