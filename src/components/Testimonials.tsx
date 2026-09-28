import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Julia Hartmann",
    role: "Head of Marketing",
    company: "B2B-Softwarehersteller",
    content: "Nach der letzten Messe sind wir nicht mit der üblichen Follow-up-Mail rausgegangen, sondern mit einem handgeschriebenen Brief. Die Gesprächsbereitschaft war ein anderes Kaliber. Über den QR-Code konnten wir jeden Scan bis zur Terminbuchung nachvollziehen.",
    rating: 5,
    headline: "Das Messe-Follow-up, das wirklich ankommt."
  },
  {
    name: "Markus Weber",
    role: "Head of Sales",
    company: "B2B Connect GmbH",
    content: "Unsere Top-Accounts reagieren auf LinkedIn und E-Mail längst nicht mehr. Der handgeschriebene Brief öffnet Türen, die digital zu sind. Der Angebots-Nachfass läuft komplett automatisch aus dem CRM, sobald ein Deal stockt.",
    rating: 5,
    headline: "Türöffner bei Entscheidern, die digital nichts mehr erwidern."
  },
  {
    name: "Sarah Lindner",
    role: "Growth Lead",
    company: "E-Commerce-Plattform",
    content: "Unsere Win-Back-Briefe laufen vollautomatisch über die API: Das CRM meldet Inaktivität, der Brief geht raus, der QR-Scan kommt als Aktivität zurück. Wir haben Kunden zurückgewonnen, die unsere E-Mails seit Monaten ignoriert haben.",
    rating: 5,
    headline: "Reaktivierung, die von selbst läuft."
  }
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="referenzen">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Erfahren Sie, wie Sales-, Marketing- und Growth-Teams mit der Briefwerkstatt Aufmerksamkeit und Pipeline zurückgewinnen, ohne Mehraufwand.
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
