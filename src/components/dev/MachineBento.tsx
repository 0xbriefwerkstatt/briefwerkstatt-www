"use client";

import Image from "next/image";
import { Clock, Droplet, Fingerprint, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { CountUp, Reveal, useInView } from "../paper/Ink";

const plotterImg = "/assets/2a1e023a513c7d26c4ee4c0148d9ac3f2a7e5096.png";

// deterministische "Zufalls"-Werte, damit Server und Client gleich rendern
const jitter = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x) - 0.5;
};

const route = [
  { t: "09:12", label: "POST /v1/letters", mono: true },
  { t: "09:13", label: "KI-Text freigegeben" },
  { t: "10:40", label: "Plotter schreibt" },
  { t: "16:00", label: "Übergabe an die Post" },
];

export function MachineBento() {
  return (
    <section id="maschine" className="scroll-mt-20 bg-paper px-3 py-6 sm:px-5">
      <div className="relative overflow-hidden rounded-[40px] bg-ink px-4 py-20 text-white sm:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-plum-2/30 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Die Maschine
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Ein Roboter mit Füller.
              <br />
              <span className="bg-gradient-to-r from-[#e08bd0] via-sun to-[#e08bd0] bg-clip-text font-hand text-[1.15em] text-transparent">
                Keine Druckerpatrone.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Pen-Plotter führen einen echten Füller über echtes Papier. Mit Druckstellen,
              Tintenfluss und kleinen Unregelmäßigkeiten, genau wie von Hand.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:gap-5 lg:grid-cols-6 lg:grid-rows-[auto_auto]">
            {/* Plotter-Foto */}
            <Tile className="group relative min-h-[340px] overflow-hidden !p-0 lg:col-span-4 lg:row-span-2">
              <Image
                src={plotterImg}
                alt="Pen-Plotter der Briefwerkstatt schreibt einen Brief"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover opacity-80 transition-transform duration-[1.2s] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <Crosshair className="left-[38%] top-[44%]" />
              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 font-mono text-[11px] text-white ring-1 ring-white/15 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Werkstatt München
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="flex items-center gap-2 font-mono text-xs text-white/60">
                  <MapPin className="h-3.5 w-3.5" /> München, Tengstraße
                </p>
                <h3 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                  UUNA TEK Pen-Plotter
                </h3>
                <p className="mt-2 max-w-md text-white/65">
                  Jeder Brief wird einzeln geschrieben. Kein Laserdrucker, keine Handschrift-Font.
                </p>
              </div>
            </Tile>

            {/* Unikat */}
            <Tile className="lg:col-span-2">
              <Label icon={<Fingerprint className="h-3.5 w-3.5" />}>Jeder Buchstabe ein Unikat</Label>
              <div className="mt-4 space-y-1 rounded-2xl bg-[#fffdf8] px-4 py-3">
                {[0, 1, 2].map((row) => (
                  <div key={row} className="flex items-center justify-between font-hand text-3xl text-fountain">
                    <span>
                      {"Danke".split("").map((c, i) => {
                        const s = row * 10 + i + 1;
                        return (
                          <span
                            key={i}
                            className="inline-block"
                            style={{
                              transform: `translateY(${jitter(s) * 3}px) rotate(${jitter(s + 50) * 7}deg) scaleX(${1 + jitter(s + 99) * 0.08})`,
                            }}
                          >
                            {c}
                          </span>
                        );
                      })}
                    </span>
                    <span className="font-mono text-[10px] text-ink/30">#{row + 1}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/55">Gleiches Wort, drei Mal geschrieben, nie identisch.</p>
            </Tile>

            {/* Blindtest */}
            <Tile className="lg:col-span-2">
              <p className="font-display text-6xl font-medium tracking-tight">
                <CountUp to={95} suffix=" %" />
              </p>
              <p className="mt-2 text-white/60">
                erkennen im Blindtest keinen Unterschied zu einem Brief von Hand.
              </p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-plum-2 to-[#e08bd0]" />
              </div>
            </Tile>

            {/* Tinte */}
            <Tile className="lg:col-span-3">
              <Label icon={<Droplet className="h-3.5 w-3.5" />}>Echter Füller, echte Tinte</Label>
              <Signature />
              <p className="text-sm text-white/55">
                Die Tinte zieht ins Papier ein. Das sieht man, und das fühlt man.
              </p>
            </Tile>

            {/* Fahrplan */}
            <Tile className="lg:col-span-3">
              <Label icon={<Clock className="h-3.5 w-3.5" />}>Vom API-Call zur Post: ein Werktag</Label>
              <ol className="relative mt-5 space-y-3.5 border-l border-dashed border-white/20 pl-5">
                {route.map((r, i) => (
                  <li key={r.t} className="relative flex items-baseline gap-4">
                    <span
                      className={`absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-ink ${
                        i === route.length - 1 ? "bg-emerald-400" : "bg-[#e08bd0]"
                      }`}
                    />
                    <span className="w-12 shrink-0 font-mono text-xs text-white/40">{r.t}</span>
                    <span className={r.mono ? "font-mono text-sm text-emerald-300" : "text-sm text-white/85"}>
                      {r.label}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-white/40">Bei Bestellung bis 12 Uhr. Beispielhafter Ablauf.</p>
            </Tile>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <Reveal
      className={`rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.06] sm:p-7 ${className}`}
    >
      {children}
    </Reveal>
  );
}

function Label({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
      {icon}
      {children}
    </p>
  );
}

function Crosshair({ className }: { className: string }) {
  return (
    <div aria-hidden className={`absolute ${className}`}>
      <div className="relative h-16 w-16 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 animate-ping rounded-full border border-[#e08bd0]/60" style={{ animationDuration: "2.4s" }} />
        <span className="absolute inset-3 rounded-full border border-[#e08bd0]" />
        <span className="absolute left-1/2 top-0 h-full w-px bg-[#e08bd0]/60" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-[#e08bd0]/60" />
        <span className="absolute left-[calc(100%+6px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black/50 px-1.5 py-0.5 font-mono text-[10px] text-white/80">
          pen ▼ schreibt
        </span>
      </div>
    </div>
  );
}

function Signature() {
  const [ref, inView] = useInView<HTMLDivElement>(0.5);
  return (
    <div ref={ref} className="my-5 rounded-2xl bg-[#fffdf8] px-5 py-4">
      {["Viele Grüße,", "Lena"].map((l, i) => (
        <span
          key={l}
          className={`block whitespace-nowrap font-hand text-fountain ${i ? "text-5xl" : "text-3xl"}`}
          style={
            inView
              ? { clipPath: "inset(-20% 100% -40% 0)", animation: `bw-reveal ${i ? 0.9 : 1.1}s linear ${0.2 + i * 1.3}s forwards` }
              : { opacity: 0 }
          }
        >
          {l}
        </span>
      ))}
    </div>
  );
}
