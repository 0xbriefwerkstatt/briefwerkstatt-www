"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Check, Database, PenTool, Sparkles } from "lucide-react";
import { Eyebrow, Reveal, useInView } from "../paper/Ink";

const LEADS = [
  {
    id: "event",
    label: "Messe-Kontakt",
    data: [
      ["name", "Thomas Wagner"],
      ["company", "Wagner Logistik"],
      ["event", "Bits & Pretzels 2026"],
      ["note", "fragt nach Tracking"],
    ],
    lines: [
      "Hallo Thomas,",
      "schön, dass wir uns auf der",
      "Bits & Pretzels getroffen haben.",
      "Deine Frage zum Tracking hat",
      "mich nicht losgelassen. Ich habe",
      "dir eine Antwort mitgebracht.",
      "Viele Grüße, Lena",
    ],
  },
  {
    id: "funding",
    label: "Funding-Signal",
    data: [
      ["name", "Julia Schulz"],
      ["company", "Paylane"],
      ["signal", "Series A · 12 Mio. €"],
      ["role", "Head of Sales"],
    ],
    lines: [
      "Liebe Julia,",
      "herzlichen Glückwunsch zur",
      "Series A! Wenn Paylane jetzt",
      "den Vertrieb ausbaut, hätten",
      "wir eine Idee, die auffällt.",
      "Auf einen Kaffee?",
      "Herzlich, Lena",
    ],
  },
  {
    id: "churn",
    label: "Churn-Risiko",
    data: [
      ["name", "Markus Reiter"],
      ["company", "Brightdesk"],
      ["signal", "Logins −60 % / 30 Tage"],
      ["plan", "Business"],
    ],
    lines: [
      "Lieber Markus,",
      "uns ist aufgefallen, dass es",
      "bei euch ruhiger geworden ist.",
      "Bevor du gehst: Ich zeige dir",
      "drei Abkürzungen, die euch",
      "Zeit sparen. Versprochen.",
      "Dein Team von Brightdesk",
    ],
  },
] as const;

type Phase = "idle" | "think" | "stream" | "plot" | "done";

export function AiStudio() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const [lead, setLead] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [words, setWords] = useState(0);
  const [run, setRun] = useState(0);

  const cur = LEADS[lead];
  const allWords = cur.lines.join(" ").split(" ");

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setWords(allWords.length);
      setPhase("done");
      return;
    }
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
    setWords(0);
    setPhase("think");
    at(900, () => setPhase("stream"));
    allWords.forEach((_, i) => at(900 + (i + 1) * 55, () => setWords(i + 1)));
    const streamEnd = 900 + allWords.length * 55 + 300;
    at(streamEnd, () => setPhase("plot"));
    at(streamEnd + cur.lines.length * 650 + 400, () => setPhase("done"));
    return () => timers.forEach(window.clearTimeout);
  }, [inView, lead, run]);

  const step = phase === "idle" || phase === "think" ? 1 : phase === "stream" ? 2 : 3;

  return (
    <section id="ki" className="relative scroll-mt-20 overflow-hidden bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>KI × Roboter</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Die KI schreibt den Text.
            <br />
            <span className="font-hand text-[1.15em] text-plum">Der Roboter die Handschrift.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Aus deinen CRM-Daten entsteht pro Lead ein eigener Brief, keine Serienmail mit
            Platzhaltern. Dann führt ein Pen-Plotter den Füller über echtes Papier.
          </p>
        </Reveal>

        {/* Lead-Auswahl */}
        <div role="tablist" aria-label="Beispiel-Lead" className="mt-12 flex flex-wrap justify-center gap-2">
          {LEADS.map((l, i) => (
            <button
              key={l.id}
              role="tab"
              aria-selected={i === lead}
              onClick={() => {
                setLead(i);
                setRun((r) => r + 1);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                i === lead
                  ? "bg-ink text-white shadow-soft"
                  : "border border-ink/10 bg-white text-ink-soft hover:border-ink/25 hover:text-ink"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div ref={ref} className="relative mt-10 grid gap-5 lg:grid-cols-[1fr_1.05fr_1.05fr] lg:gap-6">
          {/* 01 Daten */}
          <Panel n="01" title="Lead-Daten" icon={<Database className="h-3.5 w-3.5" />} active={step >= 1}>
            <div className="rounded-2xl bg-paper p-4 overflow-x-auto font-mono text-[12px] leading-relaxed">
              <span className="text-ink/40">{"{"}</span>
              {cur.data.map(([k, v], i) => (
                <div key={k} className="whitespace-nowrap pl-3">
                  <span className="text-ink/45">&quot;{k}&quot;: </span>
                  <span className="text-plum">&quot;{v}&quot;</span>
                  <span className="text-ink/40">{i < cur.data.length - 1 ? "," : ""}</span>
                </div>
              ))}
              <span className="text-ink/40">{"}"}</span>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              aus deinem CRM, per API oder Webhook
            </p>
          </Panel>

          {/* 02 KI */}
          <Panel n="02" title="KI-Entwurf" icon={<Sparkles className="h-3.5 w-3.5" />} active={step >= 2} dark>
            <div className="relative min-h-[210px] text-[15px] leading-relaxed text-white/90">
              {phase === "think" ? (
                <div className="space-y-2.5 pt-1">
                  {[92, 78, 85, 60].map((w, i) => (
                    <div
                      key={i}
                      className="h-3 animate-pulse rounded-full bg-gradient-to-r from-white/10 via-white/25 to-white/10"
                      style={{ width: `${w}%`, animationDelay: `${i * 120}ms` }}
                    />
                  ))}
                  <p className="pt-2 font-mono text-xs text-white/45">analysiere Kontext …</p>
                </div>
              ) : (
                <p>
                  {allWords.slice(0, words).join(" ")}
                  {phase === "stream" ? (
                    <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-sun" />
                  ) : null}
                </p>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-white/55">
              <span className="rounded-full bg-white/10 px-2.5 py-1">Ton: persönlich</span>
              <span className="rounded-full bg-white/10 px-2.5 py-1">{cur.lines.length} Zeilen</span>
              <span className="rounded-full bg-white/10 px-2.5 py-1">keine Platzhalter</span>
            </div>
          </Panel>

          {/* 03 Tinte */}
          <Panel n="03" title="Roboter-Tinte" icon={<PenTool className="h-3.5 w-3.5" />} active={step >= 3}>
            <div className="ruled relative min-h-[260px] rounded-2xl bg-[#fffdf8] px-5 pb-5 pt-[10px] ring-1 ring-ink/5">
              <div key={`${lead}-${run}`} className="font-hand text-[21px] leading-8 text-fountain sm:text-[22px]">
                {cur.lines.map((l, i) => (
                  <div key={i}>
                    <span
                      className="inline-block whitespace-nowrap"
                      style={
                        phase === "plot" || phase === "done"
                          ? {
                              clipPath: "inset(-20% 100% -40% 0)",
                              animation: `bw-reveal ${Math.max(0.35, l.length * 0.022)}s linear ${i * 0.65}s forwards`,
                            }
                          : { opacity: 0 }
                      }
                    >
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p
              className={`mt-4 flex items-center gap-2 text-sm font-medium transition-colors ${
                phase === "done" ? "text-emerald-700" : "text-ink-soft"
              }`}
            >
              {phase === "done" ? (
                <>
                  <Check className="h-4 w-4" strokeWidth={3} /> geplottet, bereit zum Kuvertieren
                </>
              ) : (
                <>
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-plum" />
                  {phase === "plot" ? "Plotter schreibt …" : "wartet auf Text"}
                </>
              )}
            </p>
          </Panel>

          {/* Verbindungspfeile */}
          {[0, 1].map((i) => (
            <div
              key={i}
              aria-hidden
              className={`absolute top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-ink/10 transition-colors lg:flex ${
                i === 0 ? "left-[30.5%]" : "left-[65%]"
              } ${step > i + 1 ? "text-plum" : "text-ink/30"}`}
            >
              <ArrowRight className="h-4 w-4" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-hand text-2xl text-plum">
          Ein Lead, ein Brief. Kein Text kommt zweimal vor.
        </p>
      </div>
    </section>
  );
}

function Panel({
  n,
  title,
  icon,
  active,
  dark = false,
  children,
}: {
  n: string;
  title: string;
  icon: ReactNode;
  active: boolean;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-5 transition-all duration-500 sm:p-6 ${
        dark ? "bg-ink text-white ring-1 ring-white/10" : "bg-white ring-1 ring-ink/[0.08]"
      } ${active ? (dark ? "shadow-glow" : "shadow-lift") : "opacity-60 shadow-soft"}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
            dark ? "bg-white/10 text-white" : "bg-plum/[0.07] text-plum"
          }`}
        >
          {icon}
          {title}
        </span>
        <span className={`font-mono text-xs ${dark ? "text-white/35" : "text-ink/30"}`}>{n}</span>
      </div>
      {children}
    </div>
  );
}
