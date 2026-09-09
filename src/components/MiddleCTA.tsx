"use client";

import { Button } from "./ui/button";
import { Rocket } from "lucide-react";
import { CalModal, openCalModal } from "./CalModal";

export function MiddleCTA() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-primary/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 lg:p-16 text-center shadow-2xl border border-primary/20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-white">
              {`Bereit, Ihre inaktiven Kunden zurückzuholen?`}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              {`Lassen Sie uns gemeinsam analysieren, wie viel Umsatzpotenzial aktuell in Ihrer Datenbank schlummert – und wie Sie es mit automatisierten Briefkampagnen heben können.`}
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all"
              onClick={openCalModal}
            >
              <Rocket className="w-5 h-5 mr-2" />
              {`Gratis Win-Back-Analyse anfordern`}
            </Button>
          </div>
        </div>
      </section>

      <CalModal />
    </>
  );
}
