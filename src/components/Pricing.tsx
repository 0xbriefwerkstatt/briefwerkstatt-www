"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Shield, Sparkles, Building, Zap, Crown, Rocket } from "lucide-react";
import { useState } from "react";
import { SamplePackageModal } from "./SamplePackageModal";
import { CalModal, openCalModal } from "./CalModal";

const trustFeatures = [
  {
    icon: Shield,
    title: "DSGVO-Konform",
    description: "Ihre Daten und die Ihrer Kunden sind sicher. Serverstandort Deutschland in Frankfurt."
  },
  {
    icon: Sparkles,
    title: "Keine Mindestmenge",
    description: "Ab einem Brief pro Tag bis zu Tausenden. Sie zahlen nur, was Sie nutzen."
  },
  {
    icon: Building,
    title: "White-Label",
    description: "Auf dem Brief steht Ihr Absender, nicht unserer. Ihre Marke bleibt im Vordergrund."
  }
];

const featureLabels = [
  "Monatliche Grundgebühr",
  "Briefpreis",
  "Einrichtung",
  "Mindestmenge",
  "Papier",
  "Versand-Optionen",
  "Automation",
  "Branding",
  "Support",
];

const pricingTiers = [
  {
    icon: Zap,
    name: "Pay-as-you-go",
    subtitle: "Erste Tests & kleine Mengen",
    badge: null,
    values: [
      { value: "0,00 €" },
      { value: "2,49 € / Stück" },
      { value: "0,00 €" },
      { value: "1 Stück" },
      { value: "Premium Standard" },
      { value: "Sammelpaket (an dich)" },
      { value: "CSV Upload" },
      { value: "Briefwerkstatt Stempel auf der Rückseite" },
      { value: "E-Mail" },
    ],
    cta: "Jetzt testen",
    highlighted: false,
    color: "primary"
  },
  {
    icon: Rocket,
    name: "Growth & Scale",
    subtitle: "Online-Shops & E-Commerce",
    badge: "Empfohlen",
    values: [
      { value: "29,00 €", oldValue: "49,00 €" },
      { value: "1,99 € / Stück" },
      { value: "0,00 €", oldValue: "99,00 €" },
      { value: "25 Stück / Monat" },
      { value: "Premium Standard" },
      { value: "Sammelpaket & Einzelversand" },
      { value: "API / Zapier / CSV / Webhook" },
      { value: "Neutral" },
      { value: "Priority Chat & Mail" },
    ],
    cta: "Gratis Win-Back-Analyse",
    highlighted: true,
    color: "primary"
  },
  {
    icon: Crown,
    name: "Enterprise",
    subtitle: "High-Volume & White-Label",
    badge: null,
    values: [
      { value: "149,00 €" },
      { value: "1,49 € / Stück" },
      { value: "99,00 €", oldValue: "299,00 €" },
      { value: "100 Stück / Monat" },
      { value: "Eigenes Papier (Lagerung)" },
      { value: "Full-Fulfillment" },
      { value: "API / Zapier / CSV / Webhook" },
      { value: "Vollständig im Branding deiner Kunden mit individuellem Briefpapier" },
      { value: "Dedicated Account Manager" },
    ],
    cta: "Gratis Win-Back-Analyse",
    highlighted: false,
    color: "accent",
    footnote: "Spezial-Konditionen für hohe Volumina (z.B. Beilagenkarten-Abo) auf Anfrage möglich."
  }
];

function ValueCell({ cell }: { cell: { value: string; oldValue?: string } }) {
  return (
    <div className="text-right lg:text-center">
      {cell.oldValue && (
        <div className="text-xs text-muted-foreground line-through">{cell.oldValue}</div>
      )}
      <span className={`text-sm font-semibold ${cell.oldValue ? 'text-primary' : ''}`}>
        {cell.value}
      </span>
    </div>
  );
}

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-32" id="preise">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
              Transparent. Fair. Planbar.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Keine versteckten Kosten. Bezahlen Sie nur, was Sie nutzen.
            </p>
          </div>

          {/* Desktop: Comparison Table */}
          <div className="hidden lg:block">
            <div className="rounded-xl border border-border/50 overflow-hidden">
              {/* Header Row */}
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr]">
                <div className="p-6 bg-muted/30" />
                {pricingTiers.map((tier, i) => {
                  const Icon = tier.icon;
                  return (
                    <div
                      key={i}
                      className={`p-6 text-center relative ${
                        tier.highlighted ? 'bg-primary/5' : 'bg-muted/30'
                      }`}
                    >
                      {tier.badge && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                          {tier.badge}
                        </div>
                      )}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                        tier.color === 'accent' ? 'bg-primary/10' : 'bg-primary/10'
                      }`}>
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl mb-1">{tier.name}</h3>
                      <p className="text-xs text-muted-foreground">{tier.subtitle}</p>
                    </div>
                  );
                })}
              </div>

              {/* Feature Rows */}
              {featureLabels.map((label, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid grid-cols-[1fr_1fr_1fr_1fr] ${
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-muted/20'
                  }`}
                >
                  <div className="p-4 flex items-center border-t border-border/30">
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                  {pricingTiers.map((tier, colIndex) => (
                    <div
                      key={colIndex}
                      className={`p-4 flex items-center justify-center border-t border-border/30 ${
                        tier.highlighted ? 'bg-primary/[0.03]' : ''
                      }`}
                    >
                      <ValueCell cell={tier.values[rowIndex]} />
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA Row */}
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] border-t border-border/30">
                <div className="p-6 bg-muted/30" />
                {pricingTiers.map((tier, i) => (
                  <div
                    key={i}
                    className={`p-6 flex flex-col items-center justify-center ${
                      tier.highlighted ? 'bg-primary/5' : 'bg-muted/30'
                    }`}
                  >
                    <Button
                      className="w-full max-w-[220px]"
                      size="lg"
                      variant={tier.highlighted ? 'default' : 'outline'}
                      onClick={openCalModal}
                    >
                      {tier.cta}
                    </Button>
                    {tier.footnote && (
                      <p className="text-xs text-muted-foreground mt-3 text-center max-w-[220px]">
                        {tier.footnote}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="lg:hidden grid grid-cols-1 gap-8">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden flex flex-col ${
                    tier.highlighted
                      ? 'border-primary shadow-xl'
                      : 'border-border/50'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-lg z-20">
                      {tier.badge}
                    </div>
                  )}

                  <CardContent className="p-6 sm:p-8 flex flex-col flex-1">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        tier.color === 'accent' ? 'bg-primary/10' : 'bg-primary/10'
                      }`}>
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl mb-1">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-0 mb-6 flex-1">
                      {featureLabels.map((label, featureIndex) => (
                        <div key={featureIndex} className="flex items-start justify-between py-2.5 border-b border-border/50 last:border-0 gap-3">
                          <span className="text-sm text-muted-foreground shrink-0">{label}</span>
                          <ValueCell cell={tier.values[featureIndex]} />
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <Button
                      className="w-full"
                      size="lg"
                      variant={tier.highlighted ? 'default' : 'outline'}
                      onClick={openCalModal}
                    >
                      {tier.cta}
                    </Button>

                    {/* Footnote */}
                    {tier.footnote && (
                      <p className="text-xs text-muted-foreground mt-3 text-center">
                        {tier.footnote}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <SamplePackageModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      <CalModal />
    </>
  );
}
