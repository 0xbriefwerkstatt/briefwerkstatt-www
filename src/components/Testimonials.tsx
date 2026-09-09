import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Markus Weber",
    role: "CEO",
    company: "Performance Growth Agency",
    content: "Wir hatten Schwierigkeiten, unsere Retainer zu erhöhen. Mit der Briefwerkstatt bieten wir jetzt 'High-End Direct Mail' als Add-on an. Unsere Kunden lieben die 98% Öffnungsrate, und wir haben einen neuen Profit-Center ohne Mehraufwand.",
    rating: 5,
    headline: "Endlich ein Upsell, der sofort funktioniert."
  },
  {
    name: "Sarah L.",
    role: "Founder",
    company: "ScaleUp Marketing",
    content: "Wir betreuen viele SaaS-Firmen. Die automatisierten 'Win-Back'-Briefe über die API haben die Rückgewinnungsrate unserer Mandanten verdoppelt. Das Setup hat uns keine 30 Minuten gekostet.",
    rating: 5,
    headline: "Der Churn-Killer für unsere SaaS-Kunden."
  },
  {
    name: "Tom Deitmer",
    role: "Head of Sales",
    company: "B2B Connect GmbH",
    content: "Wenn wir in einem Pitch sagen: 'Wir schreiben für Ihre Top-Leads echte Briefe per Roboter', haben wir die Aufmerksamkeit sofort. Das ist unser Ass im Ärmel gegen 08/15-Agenturen.",
    rating: 5,
    headline: "Macht uns konkurrenzlos im Pitch."
  }
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="referenzen">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
            Was Agenturen über uns sagen
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Erfahren Sie, wie Marketing-Agenturen mit der Briefwerkstatt neue Umsätze generieren – ohne Mehraufwand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold">{testimonial.headline}</h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground">"{testimonial.content}"</p>
                  
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-xs sm:text-sm font-medium">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}