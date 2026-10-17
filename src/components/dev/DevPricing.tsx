"use client";

import { ArrowRight, Check, Send } from "lucide-react";
import { CalModal, openCalModal } from "../CalModal";
import { Eyebrow, Reveal } from "../paper/Ink";

const tiers = [
  {
    name: "Sandbox",
    price: "0 €",
    unit: "für immer",
    description: "Für den ersten Test im Terminal.",
    features: [
      "10 Test-Requests mit Wasserzeichen",
      "Voller Webhook-Zugriff",
      "Sandbox-API-Key sofort verfügbar",
    ],
    cta: "Sandbox starten",
    href: "#playground",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "ab 2,90 €",
    unit: "pro Request",
    description: "Pay-as-you-go für echte Kampagnen.",
    features: [
      "Echte Tinte auf Premium-Papier",
      "Dynamisches QR-Routing",
      "Webhooks + Tracking-Dashboard",
      "Keine Mindestmenge, keine Setup-Gebühr",
    ],
    cta: "Test-Brief senden",
    href: "#playground",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "Custom",
    unit: "auf Anfrage",
    description: "Für Volumen und Enterprise-Teams.",
    features: [
      "Eigenes Firmenpapier in unserem Hub",
      "Dedizierte Plotter-Instanzen",
      "SLAs + Priority Support",
      "Rabatt bei höheren Stückzahlen",
    ],
    cta: "Pro anfragen",
    href: null,
    highlighted: false,
  },
];

export function DevPricing() {
  return (
    <>
      <section id="pricing" className="relative scroll-mt-20 bg-white py-24 text-ink lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          {/* Preis des Nichthandelns */}
          <Reveal className="mx-auto max-w-4xl text-center">
            <Eyebrow>Der Preis des Nichthandelns</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Hör auf, Runway im <span className="text-plum">Spam-Filter</span> zu verbrennen.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Jeder Tag, an dem du versuchst, im übersättigten digitalen Raum lauter zu schreien als die
              Konkurrenz, kostet dich wertvolle Enterprise-Deals. Nutze das berechtigte Interesse der
              DSGVO, wechsle direkt auf den Schreibtisch deiner Leads und sichere dir endlich die
              Aufmerksamkeit, die deine Software verdient.
            </p>
          </Reveal>

          {/* Pricing */}
          <Reveal className="mx-auto mt-24 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-plum">Pay-as-you-go</p>
            <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              API-Pricing ohne Setup-Gebühren.
            </h3>
            <p className="mt-3 text-lg text-ink-soft">
              Zahle nur für Requests, die physisch geplottet werden. Inklusive Tracking, Papier und
              Porto.
            </p>
          </Reveal>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-3 lg:gap-6">
            {tiers.map((tier, i) => {
              const body = (
                <>
                  {tier.highlighted ? (
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3.5 py-1 text-xs font-semibold text-white shadow-soft">
                      am beliebtesten
                    </span>
                  ) : null}
                  <p className={`text-xs font-bold uppercase tracking-[0.18em] ${tier.highlighted ? "text-sun" : "text-plum"}`}>
                    {tier.name}
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-semibold tracking-tight">{tier.price}</span>
                  </div>
                  <span className={`text-sm ${tier.highlighted ? "text-white/70" : "text-ink-soft"}`}>{tier.unit}</span>
                  <p className={`mt-4 ${tier.highlighted ? "text-white/90" : "text-ink-soft"}`}>{tier.description}</p>
                  <ul className={`mt-6 flex-1 space-y-3 border-t-2 border-dashed pt-6 ${tier.highlighted ? "border-white/25" : "border-ink/15"}`}>
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            tier.highlighted ? "bg-sun text-ink" : "bg-plum text-white"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={4} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className={`btn-ink mt-8 w-full ${tier.highlighted ? "btn-paper" : "btn-plum"}`}>
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </>
              );
              const cls = `relative flex flex-col rounded-3xl border border-ink/10 p-8 text-left transition-transform duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? "z-10 bg-plum text-white shadow-lift lg:-my-6 lg:py-12"
                  : `bg-white shadow-lift`
              }`;
              return (
                <Reveal key={tier.name} delay={i * 0.1} className="h-full">
                  {tier.href ? (
                    <a href={tier.href} className={`${cls} h-full`}>
                      {body}
                    </a>
                  ) : (
                    <button onClick={openCalModal} className={`${cls} h-full w-full`}>
                      {body}
                    </button>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section id="final-cta" className="bg-white px-3 pb-6 sm:px-5">
        <div className="relative overflow-hidden rounded-[40px] bg-plum py-24 text-white lg:py-32">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-plum-2 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.5rem]">
              Dein Code.{" "}
              <span className="whitespace-nowrap">
                In Tinte{" "}
                <span className="italic text-[#f3b6e4]">+</span>{" "}
                Papier.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              Teste die API in der Sandbox und lass dir die Vorschau deines ersten Briefs schicken.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#playground" className="btn-ink btn-paper">
                <Send className="h-4 w-4" />
                Kostenlosen Test-Brief senden
              </a>
              <button onClick={openCalModal} className="btn-ink btn-ghost-light">
                Kennenlerngespräch buchen
              </button>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Sandbox · keine Kreditkarte · Preview in 2 Min.
            </p>
          </Reveal>
        </div>
        </div>
      </section>

      <CalModal />
    </>
  );
}
