import { Eyebrow, Reveal, Scribble } from "../paper/Ink";

const flow = [
  {
    num: "1",
    title: "Empfänger scannt den QR-Code",
    text: "Jeder Brief trägt einen individuellen QR-Code mit Tracking-ID. Scannt der Empfänger, wird er auf deine dynamische Landingpage weitergeleitet.",
  },
  {
    num: "2",
    title: "Unsere API feuert deinen Webhook",
    text: "In Echtzeit POSTen wir das Event an deinen Endpoint. Kein Polling, kein CSV-Export: letter.scanned landet direkt in deinem Stack.",
  },
  {
    num: "3",
    title: "Lead im CRM markiert",
    text: "Dein System markiert den Kontakt als konvertiert, der Nachfass-Task wird ausgelöst. Offline-Kampagne, online ausgewertet.",
  },
];

const json: [string, string][] = [
  ["event", "letter.scanned"],
  ["letter_id", "ltr_9f27ac"],
  ["campaign", "bnp-2026"],
  ["scanned_at", "2026-10-12T09:41:07Z"],
  ["landing_page", "https://deine-app.com/b/9f27ac"],
];

export function DevTracking() {
  return (
    <section id="roi-tracking" className="relative scroll-mt-20 bg-white py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Tracking</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Jeder Scan ist ein Event.{" "}
                <span className="font-hand text-[1.15em] text-plum">Jeder Brief messbar.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
                Beweise <Scribble>schwarz auf weiß</Scribble>, welche Kampagne funktioniert. Die Daten
                fließen zurück in dein Dashboard, dein CRM, deine Analytics.
              </p>
            </Reveal>

            <div className="relative mt-12 space-y-10 pl-16">
              <span
                aria-hidden
                className="absolute bottom-6 left-[22px] top-6 w-0 border-l-[3px] border-dashed border-plum/40"
              />
              {flow.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.12}>
                  <div className="relative">
                    <span className="absolute -left-16 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-sun font-hand text-2xl font-bold shadow-[3px_3px_0_0_var(--color-ink)]">
                      {step.num}
                    </span>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -right-3 -top-5 z-10 rotate-[6deg] rounded-full border-2 border-ink bg-mint px-4 py-1.5 font-hand text-xl shadow-[3px_3px_0_0_var(--color-ink)]">
                38 ms, ganz ohne Polling
              </div>
              <div className="overflow-hidden rounded-[22px] border-2 border-ink bg-ink shadow-[10px_10px_0_0_var(--color-plum)]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 font-mono text-xs">
                  <span className="text-white/60">webhook_delivery.log</span>
                  <span className="flex items-center gap-2 text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                    live
                  </span>
                </div>
                <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-white sm:text-sm">
                  <code>
                    <span className="text-[#e08bd0]">POST </span>
                    <span>/api/webhook HTTP/1.1</span>
                    {"\n"}
                    <span className="text-white/50">Host: </span>
                    <span>deine-app.com</span>
                    {"\n\n"}
                    <span className="text-white/50">{"{"}</span>
                    {"\n"}
                    {json.map(([k, v], i) => (
                      <span key={k}>
                        <span className="text-white/50">{`  "${k}": `}</span>
                        <span className="text-emerald-300">{`"${v}"`}</span>
                        <span className="text-white/50">{i < json.length - 1 ? "," : ""}</span>
                        {"\n"}
                      </span>
                    ))}
                    <span className="text-white/50">{"}"}</span>
                    {"\n\n"}
                    <span className="text-emerald-300">200 OK · delivered in 38 ms</span>
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
