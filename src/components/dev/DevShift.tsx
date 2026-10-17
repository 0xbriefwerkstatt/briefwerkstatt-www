"use client";

import { CountUp, Eyebrow, InkArrow, Reveal, Scribble, useInView } from "../paper/Ink";

const steps = [
  {
    num: "01",
    kicker: "Du schickst den Request",
    title: "Plotter schreiben mit echter Tinte",
    text: "Unsere UUNA TEK Pen-Plotter in München führen echte Füller. Jeder Brief ein Unikat, variabel wie eine echte Handschrift. Kein Laserdrucker, keine Fälschung.",
    Art: PenArt,
  },
  {
    num: "02",
    kicker: "Der Brief landet",
    title: "Der Umschlag wird geöffnet",
    text: "Ein handadressierter Brief landet auf dem Schreibtisch und wird geöffnet. Garantiert. 98 % Öffnungsrate, keine Opt-in-Hürde, keine Spam-Filter.",
    Art: EnvelopeArt,
  },
  {
    num: "03",
    kicker: "Der Lead meldet sich",
    title: "Der QR-Scan feuert deinen Webhook",
    text: "Scannt der Empfänger den individuellen QR-Code, triggert unsere API in Echtzeit deinen Webhook und routed ihn auf eine dynamische Landingpage.",
    Art: QrArt,
  },
];

const proof = [
  { to: 98, suffix: " %", label: "Öffnungsrate bei handadressierten Briefen" },
  { to: 95, suffix: " %", label: "erkennen im Blindtest keinen Unterschied zur Hand" },
  { to: 1, suffix: "", label: "Werktag bis zur Post, bei Bestellung bis 12 Uhr" },
  { to: 0, suffix: "", label: "Mindestauflage. Ein Brief reicht." },
];

export function DevShift() {
  const [pathRef, pathInView] = useInView<HTMLDivElement>(0.3);

  return (
    <section id="use-cases" className="relative scroll-mt-20 bg-blush py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Die Lösung</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Ein physischer Payload.
            <br />
            <span className="font-hand text-[1.2em] text-plum">Ein digitaler Klick.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Verlasse das Online-Schlachtfeld. Wir geben dir die Infrastruktur, um deine Kunden physisch
            zu erreichen, ohne deine digitalen Workflows zu verlassen.
          </p>
        </Reveal>

        <div ref={pathRef} className={`relative mt-20 ${pathInView ? "in-view" : ""}`}>
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-10">
            {steps.map(({ num, kicker, title, text, Art }, i) => (
              <Reveal key={num} delay={i * 0.15} className="relative text-center">
                {i < 2 ? (
                  <InkArrow
                    flip={i === 1}
                    className="absolute -right-[22%] top-12 hidden h-16 w-32 lg:block"
                  />
                ) : null}
                <div className="relative mx-auto h-[200px] w-[200px]">
                  <div
                    className="absolute inset-0 rounded-[46%_54%_52%_48%/55%_45%_55%_45%] border border-ink/10 bg-white shadow-lift"
                    style={{ rotate: `${(i - 1) * 6}deg` }}
                  />
                  <div className="absolute inset-6">
                    <Art />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-sun font-hand text-2xl font-bold">
                    {num}
                  </span>
                </div>
                <p className="mt-8 font-hand text-2xl text-plum">{kicker}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                  {title}
                </h3>
                <p className="mx-auto mt-3 max-w-sm leading-relaxed text-ink-soft">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-24">
          <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {proof.map((p, i) => (
              <div
                key={p.label}
                className="rounded-2xl border border-ink/10 bg-white p-5 text-center shadow-soft"

              >
                <dt className="sr-only">{p.label}</dt>
                <dd className="font-display text-4xl font-semibold tracking-tight text-plum sm:text-5xl">
                  <CountUp to={p.to} suffix={p.suffix} />
                </dd>
                <p className="mt-2 text-sm leading-snug text-ink-soft">{p.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mt-14">
          <div className="ink-card mx-auto flex max-w-4xl flex-col items-center justify-between gap-5 p-6 sm:flex-row sm:px-8">
            <p className="font-display text-xl font-medium sm:text-2xl">
              Offline-Sympathie trifft auf <Scribble>glasklaren ROI</Scribble>.
            </p>
            <code className="rounded-lg bg-ink px-4 py-2.5 font-mono text-xs text-emerald-300 sm:text-sm">
              letter.sent → letter.scanned → webhook(200)
            </code>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --- Tinten-Illustrationen --- */

function PenArt() {
  return (
    <svg viewBox="0 0 150 150" className="h-full w-full" aria-hidden>
      <rect x="22" y="44" width="106" height="80" rx="4" fill="#fffdf8" stroke="var(--color-ink)" strokeWidth="2.5" transform="rotate(-4 75 84)" />
      <path
        d="M34 92 c 8 -12 14 8 22 -2 s 12 -10 18 2 s 12 6 20 -6"
        fill="none"
        stroke="var(--color-fountain)"
        strokeWidth="3"
        strokeLinecap="round"
        className="draw-on-view"
        style={{ ["--len" as string]: 140, ["--delay" as string]: ".6s" }}
      />
      <path d="M36 76 h40 M36 108 h52" stroke="var(--color-ink)" strokeOpacity=".25" strokeWidth="3" strokeLinecap="round" />
      <g className="wiggle" style={{ transformOrigin: "98px 92px" }}>
        <path d="M98 92 L132 22 L144 28 L110 98 Z" fill="var(--color-plum)" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M98 92 L104 104 L110 98 Z" fill="var(--color-ink)" />
        <path d="M126 34 L138 40" stroke="var(--color-sun)" strokeWidth="3" />
      </g>
    </svg>
  );
}

function EnvelopeArt() {
  return (
    <svg viewBox="0 0 150 150" className="h-full w-full" aria-hidden>
      <g className="float" style={{ ["--r" as string]: "0deg" }}>
        <rect x="42" y="22" width="66" height="70" rx="3" fill="#fffdf8" stroke="var(--color-ink)" strokeWidth="2.5" />
        <path d="M52 40 h44 M52 52 h36 M52 64 h40" stroke="var(--color-fountain)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <path d="M20 66 L75 104 L130 66 L130 128 L20 128 Z" fill="var(--color-blush)" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 128 L62 96 M130 128 L88 96" stroke="var(--color-ink)" strokeWidth="2.5" />
      <path d="M20 66 L75 30 L130 66" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinejoin="round" strokeDasharray="5 5" />
      <circle cx="75" cy="104" r="9" fill="var(--color-plum)" stroke="var(--color-ink)" strokeWidth="2" />
    </svg>
  );
}

function QrArt() {
  const cells = [
    [0, 0], [1, 0], [2, 0], [0, 1], [2, 1], [0, 2], [1, 2], [2, 2],
    [4, 0], [4, 2], [3, 3], [5, 3], [4, 4], [3, 5], [5, 5], [4, 6],
    [0, 4], [0, 6], [1, 5], [2, 4], [6, 4], [6, 6], [5, 1], [6, 0], [6, 2],
  ];
  return (
    <svg viewBox="0 0 150 150" className="h-full w-full" aria-hidden>
      <rect x="44" y="16" width="62" height="112" rx="10" fill="var(--color-ink)" />
      <rect x="49" y="26" width="52" height="88" rx="4" fill="#fffdf8" />
      <g transform="translate(54 42)">
        {cells.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x * 6} y={y * 6} width="6" height="6" fill="var(--color-ink)" />
        ))}
      </g>
      <rect x="52" y="90" width="46" height="14" rx="7" fill="var(--color-plum)" />
      <text x="75" y="100" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="ui-monospace, monospace">200 OK</text>
      <g stroke="var(--color-plum)" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M118 40 q 10 10 0 20" />
        <path d="M126 32 q 18 18 0 36" />
        <path d="M32 40 q -10 10 0 20" />
        <path d="M24 32 q -18 18 0 36" />
      </g>
    </svg>
  );
}
