const signals = [
  "Tech Stack geprüft",
  "Unit Economics ok",
  "Distribution: alarmierend",
  "CAC steigt, Reply-Rate fällt",
  "Empfehlung: analoger Kanal prüfen",
];

export function DevGuide() {
  return (
    <section className="relative bg-[#0a0a12] py-20 text-white lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="font-mono text-sm text-[#c65db3]">{`// die erkenntnis`}</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {`Dein Code ist nicht das Problem. `}
              <span className="bg-gradient-to-r from-[#e08bd0] to-[#9b2580] bg-clip-text text-transparent">
                {`Deine Distribution ist es.`}
              </span>
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-zinc-400">
              <p>
                {`In über 50 Tech Due Diligences für VCs und Private Equity habe ich immer wieder dasselbe Muster gesehen: Geniale SaaS-Lösungen scheitern fast nie am Tech-Stack. Sie scheitern an der Distribution, weil ihre Sales-Pitches schlichtweg im Spam-Filter verpuffen.`}
              </p>
              <p>
                {`Wir haben die Briefwerkstatt gebaut, damit du digitale Mauern legal umgehst: mit Briefpost, die sich anfühlt wie ein handgeschriebener Commit und sich steuert wie ein API-Endpoint.`}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-zinc-300">
                {`50+ tech due diligences`}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-zinc-300">
                {`vc & private equity`}
              </span>
            </div>
          </div>

          {/* DD Report Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[#781E69]/20 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#0d0d16] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                <span className="text-zinc-400">{`dd_report.md`}</span>
                <span className="rounded bg-emerald-400/10 px-2 py-0.5 text-emerald-400">
                  {`verified`}
                </span>
              </div>
              <ul className="space-y-3 py-5 font-mono text-sm">
                {signals.map((signal, i) => (
                  <li key={signal} className="flex items-center gap-3">
                    <span
                      className={
                        i < 2
                          ? "text-emerald-400"
                          : i === 4
                            ? "text-[#e08bd0]"
                            : "text-amber-400"
                      }
                    >
                      {i < 2 ? `[ok]` : i === 4 ? `[->]` : `[!!]`}
                    </span>
                    <span className="text-zinc-300">{signal}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="border-l-2 border-[#c65db3] pl-4 text-lg font-medium leading-relaxed text-white">
                {`Das beste Produkt gewinnt nicht. Das Produkt gewinnt, das der Kunde auch wirklich liest.`}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
