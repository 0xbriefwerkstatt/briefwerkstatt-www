"use client";

import { Button } from "../ui/button";
import { Calendar, ChevronDown } from "lucide-react";
import { CalModal, openCalModal } from "../CalModal";

function scrollToPlayground() {
  document
    .getElementById("playground")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function DevHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0a12] text-white">
        {/* Dot Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.28) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glows */}
        <div className="absolute -top-48 -right-48 h-[560px] w-[560px] rounded-full bg-[#781E69]/30 blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#c65db3]/10 blur-[120px]" />

        <div className="container relative mx-auto max-w-6xl px-4 pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="max-w-xl space-y-8">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-zinc-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  pen_plotter × webhooks
                </span>
                <span className="text-zinc-500">made in munich · uuna tek</span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {`Sichere dir `}
                <span className="bg-gradient-to-r from-[#e08bd0] via-[#c65db3] to-[#9b2580] bg-clip-text text-transparent">
                  {`30 Sekunden ungeteilte Aufmerksamkeit`}
                </span>
                {` deiner idealen Kunden.`}
              </h1>

              <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
                {`Cold-Mails sind tot. Verlasse das digitale Schlachtfeld und verkaufe deine Lösung analog: echte Briefe, echte Tinte, gesteuert per API. 98 % Öffnungsrate, DSGVO-konform per berechtigtem Interesse.`}
              </p>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button
                  size="lg"
                  onClick={scrollToPlayground}
                  className="h-auto px-8 py-6 text-lg"
                >
                  {`API-Playground öffnen`}
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openCalModal}
                  className="h-auto border-white/20 bg-transparent px-8 py-6 text-lg text-white hover:bg-white/10 hover:text-white"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {`Kennenlerngespräch buchen`}
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-mono text-xs text-zinc-500">
                <span>{`$ keine mindestauflage`}</span>
                <span>{`$ rest api + webhooks`}</span>
                <span>{`$ qr tracking pro brief`}</span>
              </div>
            </div>

            {/* Plotter Scene */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl backdrop-blur-sm sm:p-6">
                <svg
                  viewBox="0 0 520 440"
                  className="h-auto w-full"
                  role="img"
                  aria-label="Pen-Plotter schreibt einen Brief"
                >
                  {/* Paper */}
                  <g transform="rotate(-3 390 375)">
                    <rect
                      x="300"
                      y="318"
                      width="185"
                      height="118"
                      rx="6"
                      fill="#f4f1ea"
                    />
                    <rect x="316" y="334" width="120" height="6" rx="3" fill="#d6d0c4" />
                    <rect x="316" y="350" width="150" height="6" rx="3" fill="#d6d0c4" />
                    <rect x="316" y="366" width="135" height="6" rx="3" fill="#d6d0c4" />
                    <path
                      className="bw-sig"
                      d="M318 404 C 336 384, 348 418, 364 400 S 392 388, 404 404 S 432 416, 452 396"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* Robot base */}
                  <rect x="56" y="382" width="150" height="22" rx="7" fill="#27272a" />
                  <rect x="112" y="330" width="38" height="58" rx="6" fill="#3f3f46" />

                  {/* Arm segment 1 */}
                  <g
                    className="bw-arm1"
                    style={{
                      transformBox: "view-box",
                      transformOrigin: "131px 338px",
                    }}
                  >
                    <line
                      x1="131"
                      y1="338"
                      x2="253"
                      y2="196"
                      stroke="#d4d4d8"
                      strokeWidth="16"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="253"
                      cy="196"
                      r="13"
                      fill="#781E69"
                      stroke="#e08bd0"
                      strokeWidth="3"
                    />
                    {/* Arm segment 2 */}
                    <g
                      className="bw-arm2"
                      style={{
                        transformBox: "view-box",
                        transformOrigin: "253px 196px",
                      }}
                    >
                      <line
                        x1="253"
                        y1="196"
                        x2="330"
                        y2="312"
                        stroke="#a1a1aa"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      {/* Gripper + pen */}
                      <rect x="318" y="306" width="24" height="30" rx="5" fill="#27272a" />
                      <line
                        x1="330"
                        y1="336"
                        x2="330"
                        y2="356"
                        stroke="#2563eb"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>

                  <circle cx="131" cy="338" r="14" fill="#781E69" stroke="#e08bd0" strokeWidth="3" />
                </svg>

                {/* Floating status chips */}
                <div className="bw-chip absolute -right-2 top-4 rounded-lg border border-white/10 bg-[#0d0d16]/90 px-3 py-2 font-mono text-[11px] shadow-xl backdrop-blur sm:-right-4">
                  <span className="text-zinc-500">{`POST `}</span>
                  <span className="text-zinc-200">{`/v1/letters`}</span>
                  <div className="text-emerald-400">{`200 OK · 12 ms`}</div>
                </div>
                <div
                  className="bw-chip absolute -left-2 top-1/3 rounded-lg border border-white/10 bg-[#0d0d16]/90 px-3 py-2 font-mono text-[11px] shadow-xl backdrop-blur sm:-left-4"
                  style={{ animationDelay: "-2s" }}
                >
                  <span className="text-zinc-500">{`webhook:`}</span>
                  <div className="text-zinc-200">{`letter.scanned ✓`}</div>
                </div>
                <div
                  className="bw-chip absolute -bottom-3 right-8 rounded-lg border border-white/10 bg-[#0d0d16]/90 px-3 py-2 font-mono text-[11px] shadow-xl backdrop-blur"
                  style={{ animationDelay: "-3.5s" }}
                >
                  <span className="text-zinc-200">{`98 %`}</span>
                  <span className="text-zinc-500">{` öffnungsrate`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bwFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bwDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes bwArm1 {
          0%, 100% { transform: rotate(-1.5deg); }
          50% { transform: rotate(2.5deg); }
        }
        @keyframes bwArm2 {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-2.5deg); }
        }
        .bw-chip { animation: bwFloat 5s ease-in-out infinite; }
        .bw-sig {
          stroke-dasharray: 620;
          stroke-dashoffset: 620;
          animation: bwDraw 4s ease-in-out infinite alternate;
        }
        .bw-arm1 { animation: bwArm1 6s ease-in-out infinite; }
        .bw-arm2 { animation: bwArm2 6s ease-in-out infinite; }
      `}</style>

      <CalModal />
    </>
  );
}
