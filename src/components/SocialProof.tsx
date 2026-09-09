import { Card, CardContent } from "./ui/card";
import { TrendingUp, Target, Repeat, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "ROAS > 20:1",
    label: "Der Profit-Hebel",
    description: "Ein Brief für 3,50 € reaktiviert Kunden mit durchschnittlich 100 € Warenkorbwert. Das ist ein Return on Ad Spend von über 20:1 – messbar und reproduzierbar."
  },
  {
    icon: Target,
    value: "98%",
    label: "Öffnungsrate",
    description: "Während E-Mails oft ungelesen bleiben (< 20% Öffnungsrate), wird ein handadressierter Brief fast immer geöffnet und gelesen. Garantierte Aufmerksamkeit."
  },
  {
    icon: Repeat,
    value: "+35%",
    label: "Wiederkaufrate",
    description: "Persönliche Wertschätzung durch handgeschriebene Karten steigert die Customer Lifetime Value signifikant. Aus Einmalkäufern werden loyale Stammkunden."
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Legal & DSGVO-konform",
    description: "Keine Opt-in-Pflicht für Briefpost an Bestandskunden. Während E-Mail-Marketing rechtlich heikel ist, sind Sie mit Briefen auf der sicheren Seite."
  }
];

export function SocialProof() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
            {`Zahlen, die zählen: Echter ROI statt Vanity-Metriken`}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {`Briefpost ist kein Branding-Tool – es ist ein Umsatz-Hebel mit messbarem Return on Investment.`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-base sm:text-lg font-medium mb-2">{stat.label}</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{stat.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
