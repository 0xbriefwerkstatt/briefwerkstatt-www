const flow = [
  {
    num: "01",
    title: "Empfänger scannt den QR-Code",
    text: "Jeder Brief trägt einen individuellen QR-Code mit Tracking-ID. Scannt der Empfänger, wird er auf deine dynamische Landingpage weitergeleitet.",
  },
  {
    num: "02",
    title: "Unsere API feuert deinen Webhook",
    text: "In Echtzeit POSTen wir das Event an deinen Endpoint. Kein Polling, kein CSV-Export: letter.scanned landet direkt in deinem Stack.",
  },
  {
    num: "03",
    title: "Lead im CRM markiert",
    text: "Dein System markiert den Kontakt als konvertiert, der Nachfass-Task wird ausgelöst. Offline-Kampagne, online ausgewertet.",
  },
];

export function DevTracking() {
  return (
    <section
      id="roi-tracking"
      className="relative scroll-mt-24 bg-[#0a0a12] py-20 text-white lg:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-3xl space-y-6">
          <p className="font-mono text-sm text-[#c65db3]">{`// tracking`}</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {`Jeder Scan ist ein Event. `}
            <span className="text-zinc-500">{`Jeder Brief messbar.`}</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            {`Beweise schwarz auf weiß, welche Kampagne funktioniert. Die Daten fließen zurück in dein Dashboard, dein CRM, deine Analytics.`}
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {flow.map((step) => (
              <div
                key={step.num}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#c65db3]/40"
              >
                <span className="font-mono text-sm text-[#c65db3]">{step.num}</span>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d16]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-xs">
              <span className="text-zinc-400">{`webhook_delivery.log`}</span>
              <span className="flex items-center gap-2 text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                {`live`}
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed sm:text-sm">
              <code>
                <span className="text-zinc-500">{`POST `}</span>
                <span className="text-zinc-200">{`/api/webhook HTTP/1.1`}</span>
                {"\n"}
                <span className="text-zinc-500">{`Host: `}</span>
                <span className="text-zinc-200">{`deine-app.com`}</span>
                {"\n\n"}
                <span className="text-zinc-500">{`{`}</span>
                {"\n"}
                <span className="text-zinc-500">{`  "event": `}</span>
                <span className="text-emerald-300">{`"letter.scanned"`}</span>
                <span className="text-zinc-500">{`,`}</span>
                {"\n"}
                <span className="text-zinc-500">{`  "letter_id": `}</span>
                <span className="text-emerald-300">{`"ltr_9f27ac"`}</span>
                <span className="text-zinc-500">{`,`}</span>
                {"\n"}
                <span className="text-zinc-500">{`  "campaign": `}</span>
                <span className="text-emerald-300">{`"bnp-2026"`}</span>
                <span className="text-zinc-500">{`,`}</span>
                {"\n"}
                <span className="text-zinc-500">{`  "scanned_at": `}</span>
                <span className="text-emerald-300">{`"2026-10-12T09:41:07Z"`}</span>
                <span className="text-zinc-500">{`,`}</span>
                {"\n"}
                <span className="text-zinc-500">{`  "landing_page": `}</span>
                <span className="text-emerald-300">{`"https://deine-app.com/b/9f27ac"`}</span>
                {"\n"}
                <span className="text-zinc-500">{`}`}</span>
                {"\n\n"}
                <span className="text-emerald-400">{`200 OK · delivered in 38 ms`}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
