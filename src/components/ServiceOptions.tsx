import { Card, CardContent } from "./ui/card";
import { Upload, Zap, Handshake, CheckCircle } from "lucide-react";

const options = [
  {
    icon: Upload,
    badge: "Sofort starten",
    title: "Upload",
    subtitle: "Für einzelne Kampagnen",
    points: [
      { title: "CSV / Excel hochladen", text: "Ihre bestehende Empfängerliste, keine Umformatierung nötig" },
      { title: "Text & Design wählen", text: "Vorlage nutzen oder eigenen Text mit Variablen hinterlegen" },
      { title: "Absenden – fertig", text: "Wir übernehmen Druck, Handschrift, Kuvertierung und Versand" },
    ],
    idealFor: "Messe-Follow-up, Event-Einladungen, Weihnachtskarten, Quartalsaktionen",
    highlighted: false,
  },
  {
    icon: Zap,
    badge: "Empfohlen",
    title: "API & CRM",
    subtitle: "Einmal einrichten, dauerhaft automatisiert",
    points: [
      { title: "Anbindung an Ihre Tools", text: "HubSpot, Salesforce, Pipedrive, Shopify, Zapier oder direkt per REST-API" },
      { title: "Automatische Trigger", text: "Neuer Deal, Onboarding, Inaktivität, Jubiläum – der Brief geht von selbst raus" },
      { title: "Tracking zurück ins CRM", text: "QR-Scans landen als Aktivität beim Kontakt in Ihrem System" },
    ],
    idealFor: "Sales-Sequenzen, Onboarding, Win-Back, Lifecycle-Marketing",
    highlighted: true,
  },
  {
    icon: Handshake,
    badge: "Rundum-sorglos",
    title: "Full-Service",
    subtitle: "Wir übernehmen den gesamten Prozess",
    points: [
      { title: "Konzept & Text", text: "Gemeinsam entwickeln wir Botschaft, Anlass und Angebot" },
      { title: "Gestaltung & Beilagen", text: "Briefpapier, Kuvert, Flyer oder Karten in Ihrem Branding" },
      { title: "Produktion, Versand & Auswertung", text: "Sie erhalten am Ende einen Report mit Ihren Ergebnissen" },
    ],
    idealFor: "Teams ohne eigene Kapazität, große Kampagnen, erstes Pilotprojekt",
    highlighted: false,
  },
];

export function ServiceOptions() {
  return (
    <section className="py-20 lg:py-32" id="so-gehts">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
            {`Analog versenden, ohne auf digitale Effizienz zu verzichten`}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            {`Sie entscheiden, wie viel Sie selbst machen wollen: vom einfachen Upload über die vollautomatische Integration bis zum kompletten Outsourcing.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <Card
                key={option.title}
                className={`border-2 transition-all hover:shadow-lg ${
                  option.highlighted
                    ? "border-primary/30 hover:border-primary bg-primary/5"
                    : "border-border/50 hover:border-primary/40"
                }`}
              >
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-2">
                        {option.badge}
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6 flex-1">
                    {option.points.map((point) => (
                      <div key={point.title} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">{point.title}</p>
                          <p className="text-sm text-muted-foreground">{point.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-medium mb-1">{`Ideal für:`}</p>
                    <p className="text-sm text-muted-foreground">{option.idealFor}</p>
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
