import { Card, CardContent } from "./ui/card";
import { Briefcase, ShoppingCart, Home, Calendar } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Sales & B2B",
    description: "\"Türöffner\"-Kampagnen an Vorstände, die auf LinkedIn nicht reagieren. Erreichen Sie Entscheider direkt am Schreibtisch."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Rückgewinnung von Warenkorb-Abbrechern mit einem persönlichen Rabatt-Code (via QR-Tracking). Wandeln Sie verlorene Käufe in Umsatz um."
  },
  {
    icon: Home,
    title: "Immobilien",
    description: "Automatisierte Nachfass-Briefe 12 Monate nach dem Hauskauf (\"Wollen Sie den aktuellen Wert wissen?\"). Perfekt für langfristige Kundenbeziehungen."
  },
  {
    icon: Calendar,
    title: "Webinare & Events",
    description: "Die \"No-Show-Rate\" drastisch senken durch physische Eintrittskarten/Einladungen. Teilnehmer fühlen sich verbindlich eingeladen."
  }
];

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="anwendung">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Wo unsere Kunden die größten Erfolge feiern
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Von B2B-Akquise bis Event-Marketing. Briefpost wirkt überall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
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