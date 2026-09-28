import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroBitsPretzels } from "@/components/HeroBitsPretzels";
import { Problem } from "@/components/Problem";
import { SocialProof } from "@/components/SocialProof";
import { Products } from "@/components/Products";
import { ServiceOptions } from "@/components/ServiceOptions";
import { Process } from "@/components/Process";
import { Features } from "@/components/Features";
import { MiddleCTA } from "@/components/MiddleCTA";
import { Testimonials } from "@/components/Testimonials";
import { BitsPretzelsOffer } from "@/components/BitsPretzelsOffer";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bits & Pretzels Special: 10 % auf echte Briefe | Die Briefwerkstatt",
  description:
    "Messe-Special der Bits & Pretzels: 10 % Rabatt auf Ihre erste Briefkampagne. Echte handschriftliche Briefe für Growth-, Sales- und Marketing-Teams. DSGVO-konform, per API oder CRM integriert, per QR-Code messbar. Kennenlerngespräch buchen.",
};

export default function BitsPretzelsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBitsPretzels />
        <Problem />
        <SocialProof />
        <Products />
        <ServiceOptions />
        <Process />
        <Features />
        <MiddleCTA />
        <Testimonials />
        <BitsPretzelsOffer />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
