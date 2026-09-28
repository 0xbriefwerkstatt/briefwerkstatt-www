"use client";

import { Card, CardContent } from "./ui/card";
import { Briefcase, Megaphone, TrendingUp, Expand, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const reaktivierungPostcard = "/assets/1299e5357ed066a64df40c10cdeafa93a7a5d356.png";
const postcardBackImage = "/assets/c295a864ed3cfdbfd1079e3aa01ebd0c5d0885d8.png";
const postcardFrontImage = "/assets/62e55ad8ff4709ae293e3d0888e0ae0e1000fb58.png";
import { useState } from "react";
import { Button } from "./ui/button";
import { SamplePackageModal } from "./SamplePackageModal";
import { img } from "../lib/imgParams";

const teams = [
  {
    icon: Briefcase,
    team: "Sales",
    tagline: "Termine bei Entscheidern, die digital nicht reagieren",
    useCases: [
      {
        title: "Türöffner an Entscheider",
        description: "Persönliche Briefe an Top-Accounts und C-Level, die auf LinkedIn-Nachrichten und Cold-Mails längst nicht mehr antworten.",
      },
      {
        title: "Messe- & Event-Follow-up",
        description: "Während alle anderen nach der Messe die gleiche Follow-up-Mail schicken, liegt Ihr Brief auf dem Schreibtisch.",
      },
      {
        title: "Angebots-Nachfass",
        description: "Automatisch ausgelöst, wenn ein Deal im CRM stockt. Ein kurzer, handgeschriebener Gruß bringt das Gespräch wieder in Gang.",
      },
    ],
  },
  {
    icon: Megaphone,
    team: "Marketing",
    tagline: "Kampagnen, die auffallen statt überscrollt zu werden",
    useCases: [
      {
        title: "Event- & Webinar-Einladungen",
        description: "Eine persönliche Einladung per Post wirkt verbindlicher als die zehnte Kalender-Mail und senkt die No-Show-Rate.",
      },
      {
        title: "ABM- & Direct-Mail-Kampagnen",
        description: "Ausgewählte Zielaccounts mit personalisierten Briefen ansprechen – mit variablen Inhalten und individuellem QR-Code pro Empfänger.",
      },
      {
        title: "Anlässe & Kundenbindung",
        description: "Jubiläen, Weihnachtsgrüße oder ein Dankeschön nach Vertragsabschluss. Wertschätzung, die im Gedächtnis bleibt.",
      },
    ],
  },
  {
    icon: TrendingUp,
    team: "Growth",
    tagline: "Automatisierte Touchpoints entlang des Customer Lifecycles",
    useCases: [
      {
        title: "Onboarding & Welcome",
        description: "Neukunden erhalten automatisch einen persönlichen Willkommensbrief – ausgelöst direkt aus Ihrem CRM oder Shop.",
      },
      {
        title: "Reaktivierung & Win-Back",
        description: "Inaktive Kunden erreichen, die keine E-Mails mehr öffnen oder nie ein Opt-in gegeben haben. Mit exklusivem Angebot per QR-Code.",
      },
      {
        title: "Churn-Prävention & Upsell",
        description: "Trigger bei sinkender Nutzung oder vor der Vertragsverlängerung – der Brief kommt genau im richtigen Moment.",
      },
    ],
  },
];

const examples = [
  { src: reaktivierungPostcard, label: "Reaktivierungs-Karte" },
  { src: postcardFrontImage, label: "Postkarte – Vorderseite" },
  { src: postcardBackImage, label: "Postkarte – Rückseite" },
];

export function Products() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-32 bg-muted/30" id="use-cases">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
              {`Ein Brief für jedes Team`}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {`Ob Neukundengewinnung, Kampagne oder Kundenbindung: Überall dort, wo Aufmerksamkeit knapp ist, sorgt ein echter Brief dafür, dass Ihre Botschaft ankommt.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teams.map((team) => {
              const Icon = team.icon;
              return (
                <Card key={team.team} className="border-primary/20 bg-background flex flex-col">
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl">{`Für ${team.team}`}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground italic mb-6">{team.tagline}</p>

                    <div className="space-y-5">
                      {team.useCases.map((useCase) => (
                        <div key={useCase.title} className="border-l-2 border-primary/30 pl-4">
                          <h4 className="font-semibold mb-1">{useCase.title}</h4>
                          <p className="text-sm sm:text-base text-muted-foreground">{useCase.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Beispiele */}
          <div className="mt-16 lg:mt-20">
            <h3 className="text-xl sm:text-2xl text-center mb-8">{`Beispiele aus der Werkstatt`}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {examples.map((example) => (
                <button
                  key={example.label}
                  className="rounded-lg overflow-hidden relative group h-64 w-full"
                  style={{ backgroundColor: '#343853' }}
                  onClick={() => setLightboxImage(example.src)}
                  aria-label={`${example.label} vergrößern`}
                >
                  <ImageWithFallback
                    src={img(example.src, 1200)}
                    alt={example.label}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-white text-xs sm:text-sm font-medium">{example.label}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2 text-white">
                      <Expand className="w-8 h-8" />
                      <span className="font-medium text-sm sm:text-base">{`Klicken zur Vergrößerung`}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Lightbox Modal */}
          {lightboxImage && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setLightboxImage(null)}
            >
              <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
                <img
                  src={img(lightboxImage, 2048)}
                  alt="Vergrößerung"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                  onClick={() => setLightboxImage(null)}
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
            </div>
          )}

          {/* CTA Section - Musterpaket - INSIDE Products Section */}
          <div className="container mx-auto max-w-6xl px-4 mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 sm:p-8 md:p-12 text-center border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 px-4">
                {`Überzeugen Sie sich selbst von der Qualität`}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                {`Fordern Sie jetzt Ihr kostenloses Musterpaket an und erleben Sie die Premium-Qualität unserer handschriftlichen Briefe.`}
              </p>

              <Button size="lg" className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6" onClick={() => setIsModalOpen(true)}>
                <Mail className="w-5 h-5 mr-2" />
                {`Kostenloses Musterpaket anfordern`}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Package Modal */}
      <SamplePackageModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
