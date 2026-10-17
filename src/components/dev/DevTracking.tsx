import { Eyebrow, Reveal } from "../paper/Ink";
import { WebhookLog } from "./WebhookLog";

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

export function DevTracking() {
  return (
    <section id="roi-tracking" className="relative scroll-mt-20 bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Tracking</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Jeder Scan ist ein Event.{" "}
                <span className="italic text-plum">Jeder Brief messbar.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
                Beweise <span className="text-plum">schwarz auf weiß</span>, welche Kampagne funktioniert. Die Daten
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
                    <span className="absolute -left-16 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white font-mono text-sm font-semibold text-plum shadow-soft">
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
              <div className="absolute -right-3 -top-5 z-10 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 shadow-soft">
                in Echtzeit, ohne Polling
              </div>
              <WebhookLog />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
