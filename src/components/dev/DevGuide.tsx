import { Eyebrow, HandNote, Reveal, Scribble } from "../paper/Ink";

const signals = [
  { mark: "✓", text: "Tech Stack geprüft", tone: "text-emerald-600" },
  { mark: "✓", text: "Unit Economics ok", tone: "text-emerald-600" },
  { mark: "!", text: "Distribution: alarmierend", tone: "text-red-600" },
  { mark: "!", text: "CAC steigt, Reply-Rate fällt", tone: "text-red-600" },
  { mark: "→", text: "Empfehlung: analoger Kanal prüfen", tone: "text-plum" },
];

export function DevGuide() {
  return (
    <section className="paper-grain relative bg-paper-2 py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="space-y-6">
            <Eyebrow>Die Erkenntnis</Eyebrow>
            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Dein Code ist nicht das Problem.{" "}
              <Scribble variant="circle">Deine Distribution</Scribble> ist es.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                In über 50 Tech Due Diligences für VCs und Private Equity habe ich immer wieder dasselbe
                Muster gesehen: Geniale SaaS-Lösungen scheitern fast nie am Tech-Stack. Sie scheitern an
                der Distribution, weil ihre Sales-Pitches schlichtweg im Spam-Filter verpuffen.
              </p>
              <p>
                Wir haben die Briefwerkstatt gebaut, damit du digitale Mauern legal umgehst: mit
                Briefpost, die sich anfühlt wie ein handgeschriebener Commit und sich steuert wie ein
                API-Endpoint.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {["50+ Tech Due Diligences", "VC & Private Equity"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Notizblatt */}
          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto max-w-lg rotate-[1.5deg]">
              <span className="tape -top-3 left-1/2 z-10 -translate-x-1/2 rotate-[3deg]" />
              <div className="ruled relative rounded-[4px] border border-ink/10 bg-[#fffdf8] px-8 pb-10 pt-8 shadow-lift sm:px-10">
                <div className="absolute bottom-0 left-12 top-0 w-[2px] bg-red-300/70" />
                <div className="flex items-center justify-between pl-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                    dd_report.md
                  </span>
                  <span className="rotate-[-8deg] rounded border-2 border-emerald-600 px-2 py-0.5 font-mono text-xs font-bold uppercase text-emerald-700">
                    verified
                  </span>
                </div>
                <ul className="mt-6 space-y-[6px] pl-6">
                  {signals.map((s) => (
                    <li key={s.text} className="flex h-[26px] items-center gap-3 font-hand text-[1.6rem]">
                      <span className={`w-5 font-bold ${s.tone}`}>{s.mark}</span>
                      <span>{s.text}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="mt-8 border-l-4 border-plum pl-5 font-display text-xl font-medium italic leading-snug sm:text-2xl">
                  „Das beste Produkt gewinnt nicht. Das Produkt gewinnt, das der Kunde auch wirklich liest.“
                </blockquote>
              </div>
            </div>
            <HandNote className="absolute -bottom-20 right-6 hidden md:block" arrow="left" rotate={-3}>
              aus 50+ Reports
            </HandNote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
