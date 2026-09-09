import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Pen, 
  Layers, 
  CheckSquare, 
  Globe
} from "lucide-react";

const features = [
  {
    icon: Pen,
    title: "Echte Tinte, echter Füller",
    description: "Kein Laserdrucker, der Handschrift nur \"simuliert\". Unsere Roboter führen echte Stifte. Das Schriftbild variiert minimal, genau wie bei einer echten Hand.",
  },
  {
    icon: Layers,
    title: "Skalierbar ab Stückzahl 1",
    description: "Anders als viele Druckereien brauchen wir keine Mindestauflage. Ihr CRM meldet einen Geburtstag? Wir senden einen Brief.",
  },
  {
    icon: CheckSquare,
    title: "Qualitätskontrolle",
    description: "Jeder Brief wird optisch geprüft, bevor er kuvertiert wird. Wir überlassen Qualität nicht dem Zufall.",
  },
  {
    icon: Globe,
    title: "Weltweiter Versand",
    description: "Wir produzieren an unserem Standort in München, Deutschland und versenden global. Ihre Marke erreicht Kunden überall auf der Welt.",
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-32" id="features">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
            Roboter-Präzision mit menschlichem Charme
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Wir überlassen Qualität nicht dem Zufall. Technologie trifft Handwerk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-primary/40 transition-colors">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}