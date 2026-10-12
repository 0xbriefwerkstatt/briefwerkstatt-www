import { PenLine, MailOpen, Webhook } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    num: "01",
    title: "Plotter schreiben mit echter Tinte",
    text: "Unsere UUNA TEK Pen-Plotter in München führen echte Füller. Jeder Brief ein Unikat, variabel wie eine echte Handschrift. Kein Laserdrucker, keine Fälschung.",
  },
  {
    icon: MailOpen,
    num: "02",
    title: "Der Umschlag wird geöffnet",
    text: "Ein handadressierter Brief landet auf dem Schreibtisch und wird geöffnet. Garantiert. 98 % Öffnungsrate, keine Opt-in-Hürde, keine Spam-Filter.",
  },
  {
    icon: Webhook,
    num: "03",
    title: "Der QR-Scan feuert deinen Webhook",
    text: "Scannt der Empfänger den individuellen QR-Code, triggert unsere API in Echtzeit deinen Webhook und routed ihn auf eine dynamische Landingpage.",
  },
];

export function DevShift() {
  return (
    <section
      id="use-cases"
      className="relative scroll-mt-24 bg-[#0a0a12] py-20 text-white lg:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-3xl space-y-6">
          <p className="font-mono text-sm text-[#c65db3]">{`// die lösung`}</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {`Ein physischer Payload. `}
            <span className="bg-gradient-to-r from-[#e08bd0] to-[#9b2580] bg-clip-text text-transparent">
              {`Ein digitaler Klick.`}
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            {`Verlasse das Online-Schlachtfeld. Wir geben dir die Infrastruktur, um deine Kunden physisch zu erreichen, ohne deine digitalen Workflows zu verlassen.`}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#c65db3]/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#781E69]/30 text-[#e08bd0]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-sm text-zinc-600">{step.num}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-[#781E69]/20 to-transparent px-6 py-5">
          <p className="text-lg font-medium">
            {`Offline-Sympathie trifft auf glasklaren ROI.`}
          </p>
          <code className="rounded-lg border border-white/10 bg-[#0d0d16] px-4 py-2 font-mono text-xs text-emerald-400 sm:text-sm">
            {`letter.sent -> letter.scanned -> webhook(200)`}
          </code>
        </div>
      </div>
    </section>
  );
}
