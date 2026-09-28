import { Card, CardContent } from "./ui/card";
import { Layers, Target, QrCode, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: QrCode,
    value: "QR",
    label: "Messbar wie digital",
    description: "Jeder Brief trägt einen individuellen QR-Code. Sie sehen, wer gescannt hat, und können Kampagnen genauso auswerten wie Ihre digitalen Kanäle."
  },
  {
    icon: Target,
    value: "98%",
    label: "Öffnungsrate",
    description: "Während E-Mails und LinkedIn-Nachrichten oft ungelesen bleiben, wird ein handadressierter Brief fast immer geöffnet und gelesen. Garantierte Aufmerksamkeit."
  },
  {
    icon: Layers,
    value: "Ab 1 Stück",
    label: "Skalierbar",
    description: "Vom einzelnen Brief an einen Top-Lead bis zur Kampagne mit Tausenden Empfängern. Keine Mindestauflage, keine Druckerei-Vorlaufzeiten."
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Legal & DSGVO-konform",
    description: "Anders als bei E-Mail-Werbung braucht Briefpost kein vorheriges Opt-in. Wir verarbeiten Ihre Daten als deutscher Auftragsverarbeiter auf Servern in Deutschland."
  }
];

export function SocialProof() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
            {`Die Aufmerksamkeit eines Briefes. Die Effizienz einer digitalen Kampagne.`}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {`Briefpost ist kein Nostalgie-Projekt, sondern ein messbarer Kanal für Pipeline und Umsatz.`}
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
