import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { DevHero } from "@/components/dev/DevHero";
import { DevPain } from "@/components/dev/DevPain";
import { DevGuide } from "@/components/dev/DevGuide";
import { DevShift } from "@/components/dev/DevShift";
import { DevPlayground } from "@/components/dev/DevPlayground";
import { DevTracking } from "@/components/dev/DevTracking";
import { DevPricing } from "@/components/dev/DevPricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Wave } from "@/components/paper/Ink";
import { FloatingCta } from "@/components/dev/FloatingCta";

export const metadata: Metadata = {
  title: "Die Briefwerkstatt: Post-Outreach API für Tech- und SaaS-Teams",
  description:
    "Sichere dir 30 Sekunden ungeteilte Aufmerksamkeit: echte Briefe mit echter Tinte, gesteuert per API und Webhook. 98 % Öffnungsrate, DSGVO-konform, QR-Tracking. Sandbox kostenlos testen.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <DevHero />
        <DevPain />
        <DevGuide />
        <Wave from="var(--color-paper-2)" to="var(--color-blush)" />
        <DevShift />
        <Wave from="var(--color-blush)" to="var(--color-paper)" flip />
        <DevPlayground />
        <DevTracking />
        <DevPricing />
        <FAQ />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
