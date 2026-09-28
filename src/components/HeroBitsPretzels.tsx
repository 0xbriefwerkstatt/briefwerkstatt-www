"use client";

import { Button } from "./ui/button";
import { Calendar, Mail, CheckCircle, TicketPercent } from "lucide-react";
const realLetterImage = "/assets/baf8c036e64b1e4e879710f5028d046ed28fd68c.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { SamplePackageModal } from "./SamplePackageModal";
import { CalModal, openCalModal } from "./CalModal";
import { img } from "../lib/imgParams";

export function HeroBitsPretzels() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-8 max-w-xl">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                  {`Bits & Pretzels München · Messe-Special`}
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                  {`Auf den Schreibtisch statt in den Spam-Filter.`}{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {`Mit echten Briefen.`}
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                  {`Schön, dass Sie auf den Bits & Pretzels vorbeischauen oder unseren Brief geöffnet haben. Wir bringen Ihre Botschaft als echten, handschriftlichen Brief auf den Schreibtisch Ihrer wichtigsten Kunden: DSGVO-konform, in jeder Stückzahl, per API oder CRM integriert und per QR-Code messbar.`}
                </p>
              </div>

              {/* Messe-Angebot */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <TicketPercent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {`Ihr Messe-Angebot`}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold">
                      {`10 % auf Ihre erste Briefkampagne`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {`Code `}
                      <span className="font-mono font-semibold text-foreground">
                        {`BITS10`}
                      </span>
                      {`, einfach im Kennenlerngespräch nennen.`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                  onClick={openCalModal}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {`Kennenlerngespräch buchen`}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto whitespace-nowrap"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {`Musterpaket`}
                </Button>
              </div>

              <div className="flex items-center flex-wrap gap-x-8 gap-y-3 pt-2">
                {[
                  `Echte Handschrift`,
                  `DSGVO-konform`,
                  `QR-Tracking`,
                  `Full-Service optional`,
                ].map((label) => (
                  <div key={label} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground/80">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brief rechts */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-30"></div>

                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-primary/20 shadow-2xl">
                  <ImageWithFallback
                    src={img(realLetterImage, 1200)}
                    alt="Handschriftlicher Brief auf Firmenbriefpapier"
                    className="w-full h-auto rounded-xl shadow-xl"
                  />
                </div>

                {/* Rabatt-Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 sm:p-4 border border-primary/20">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <TicketPercent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground">
                        Messe-Special
                      </div>
                      <div className="text-base sm:text-lg font-bold text-foreground">{`10 % Rabatt`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SamplePackageModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
      <CalModal />
    </>
  );
}
