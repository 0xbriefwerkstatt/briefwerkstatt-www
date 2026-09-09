"use client";

import { Card, CardContent } from "./ui/card";
import { Mail, Scan, TrendingUp, ArrowRight, Zap, FileSpreadsheet } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "1",
    icon: Mail,
    title: "Kunde öffnet Brief",
    description: "Ihr handgeschriebener Brief landet auf dem Schreibtisch und wird geöffnet. Garantiert."
  },
  {
    number: "2",
    icon: Scan,
    title: "Kunde scannt QR-Code",
    description: "Der individualisierte QR-Code führt zu seinem persönlichen Angebot oder Geschenk."
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Sie sehen den Lead sofort",
    description: "Der Lead erscheint in Ihrem System. Sie wissen genau, wer interessiert ist und können gezielt nachfassen."
  }
];

const integrationMethods = [
  {
    icon: Zap,
    title: "Via API / CRM",
    subtitle: "Für wiederkehrende Umsätze",
    description: "Vollautomatisch aus Salesforce, HubSpot & Co. Einmal einrichten, für immer profitieren. Der Geburtstags-Brief läuft jeden Tag – ohne dass Sie einen Finger rühren.",
    badge: "Sticky Business"
  },
  {
    icon: FileSpreadsheet,
    title: "Via Datei-Upload",
    subtitle: "Für saisonale Kampagnen",
    description: "Für Event-Einladungen, Weihnachtskampagnen oder Messe-Follow-Ups einfach CSV hochladen. Schneller Cashflow, kein Setup-Aufwand.",
    badge: "Quick Win"
  }
];

export function Process() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-32 bg-muted/30" id="roi-tracking">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
              {`Offline senden. Online messen. ROI beweisen.`}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {`Die Daten flie\u00dfen zur\u00fcck in Ihr Dashboard. Beweisen Sie schwarz auf wei\u00df: Diese Kampagne hat funktioniert.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="border-border/50 h-full">
                    <CardContent className="p-4 sm:p-6">
                      <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
                        {step.number}
                      </div>
                      
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ml-6 sm:ml-8">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl mb-3">{step.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block bg-primary/10 rounded-xl p-6 sm:p-8 border border-primary/20 max-w-2xl">
              <h3 className="text-xl sm:text-2xl mb-3">Offline-Sympathie → Online-Conversion</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Verbinden Sie die emotionale Kraft eines handgeschriebenen Briefes 
                mit der Messbarkeit moderner Marketing-Tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}