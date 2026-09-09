import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { SocialProof } from "@/components/SocialProof";
import { Products } from "@/components/Products";
import { Features } from "@/components/Features";
import { MiddleCTA } from "@/components/MiddleCTA";
import { Process } from "@/components/Process";
import { VideoSection } from "@/components/VideoSection";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <SocialProof />
        <Products />
        <VideoSection />
        <Process />
        <Features />
        <MiddleCTA />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
