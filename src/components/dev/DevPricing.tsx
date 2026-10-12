"use client";

import { Button } from "../ui/button";
import { Check, FlaskConical, Rocket, Crown, Send } from "lucide-react";
import { CalModal, openCalModal } from "../CalModal";

const tiers = [
  {
    icon: FlaskConical,
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
    icon: Rocket,
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
    icon: Crown,
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
    <section id="pricing" className="relative scroll-mt-24 bg-[#08070d] py-20 text-white lg:py-28">
      <div className="absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-[#781E69]/15 blur-[140px]" />

      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Failure */}
        <div className="max-w-3xl space-y-6">
          <p className="font-mono text-sm text-[#c65db3]">{`// der preis des nichthandelns`}</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {`Hör auf, Runway im Spam-Filter zu verbrennen.`}
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            {`Jeder Tag, an dem du versuchst, im übersättigten digitalen Raum lauter zu schreien als die Konkurrenz, kostet dich wertvolle Enterprise-Deals. Nutze das berechtigte Interesse der DSGVO, wechsle direkt auf den Schreibtisch deiner Leads und sichere dir endlich die Aufmerksamkeit, die deine Software verdient.`}
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-16 space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-sm text-[#c65db3]">{`// pricing`}</p>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {`API-Pricing. Pay-as-you-go. Keine Setup-Gebühren.`}
            </h3>
            <p className="text-zinc-400">
              {`Zahle nur für Requests, die physisch geplottet werden. Inklusive Tracking, Papier und Porto.`}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              const inner = (
                <>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        tier.highlighted
                          ? "bg-[#c65db3]/20 text-[#e08bd0]"
                          : "bg-white/5 text-zinc-300"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500">{tier.name}</span>
                  </div>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-sm text-zinc-500">{tier.unit}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{tier.description}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <Check
                          className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                            tier.highlighted ? "text-[#e08bd0]" : "text-emerald-400"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.highlighted ? "default" : "outline"}
                    className={
                      tier.highlighted
                        ? "mt-6 h-auto w-full py-3"
                        : "mt-6 h-auto w-full border-white/20 bg-transparent py-3 text-white hover:bg-white/10 hover:text-white"
                    }
                  >
                    {tier.cta}
                  </Button>
                </>
              );

              return tier.href ? (
                <a
                  key={tier.name}
                  href={tier.href}
                  className={`flex flex-col rounded-2xl border p-6 transition-colors ${
                    tier.highlighted
                      ? "border-[#c65db3]/50 bg-[#781E69]/15 hover:border-[#c65db3]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  {inner}
                </a>
              ) : (
                <button
                  key={tier.name}
                  onClick={openCalModal}
                  className={`flex flex-col rounded-2xl border p-6 text-left transition-colors ${
                    tier.highlighted
                      ? "border-[#c65db3]/50 bg-[#781E69]/15 hover:border-[#c65db3]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  {inner}
                </button>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <a
            href="#playground"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#9b2580] via-[#781E69] to-[#9b2580] px-8 py-5 text-lg font-semibold shadow-2xl shadow-[#781E69]/40 transition-transform hover:scale-[1.02]"
          >
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            {`Kostenlosen Test-Brief an mich senden`}
            <kbd className="rounded border border-white/25 px-1.5 py-0.5 text-xs opacity-80">
              {`↵`}
            </kbd>
          </a>
          <p className="mt-4 font-mono text-xs text-zinc-500">
            {`sandbox · keine kreditkarte · preview in 2 min`}
          </p>
        </div>
      </div>

      <CalModal />
    </section>
  );
}
