"use client";

import { Button } from "./ui/button";
import { Calendar, TicketPercent } from "lucide-react";
import { CalModal, openCalModal } from "./CalModal";

export function BitsPretzelsOffer() {
  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 shadow-2xl border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <TicketPercent className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold">
                  {`Ihr Messe-Special: 10 % auf Ihre erste Kampagne`}
                </p>
                <p className="text-sm sm:text-base text-white/80">
                  {`Code BITS10 – einfach im Gespräch nennen. Gilt für Kennenlerngespräche rund um die Bits & Pretzels.`}
                </p>
              </div>
            </div>
            <Button
              size="lg"
              variant="secondary"
              onClick={openCalModal}
              className="text-lg px-8 py-6 h-auto whitespace-nowrap shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {`Termin buchen`}
            </Button>
          </div>
        </div>
      </section>

      <CalModal />
    </>
  );
}
