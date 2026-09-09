"use client";

import { Button } from "./ui/button";
import { Calendar, Mail, CheckCircle } from "lucide-react";
const realLetterImage = "/assets/baf8c036e64b1e4e879710f5028d046ed28fd68c.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";
import { SamplePackageModal } from "./SamplePackageModal";
import { CalModal, openCalModal } from "./CalModal";
import { img } from "../lib/imgParams";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top);
        setScrollY(scrollProgress);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close preview on Escape key
  useEffect(() => {
    if (!isPreviewOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPreviewOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

  return (
    <>
      <section
        className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
        ref={sectionRef}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-8 max-w-xl">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                  {`🛒 Für Online-Shops`}
                </span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                  {`📈 Customer Lifetime Value steigern`}
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                  {`Reaktivieren Sie 15% Ihrer inaktiven Kunden`}{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {`– vollautomatisiert per Post.`}
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                  {`Wenn E-Mails ignoriert werden, wirken handgeschriebene Briefe Wunder. 98% Öffnungsrate für Ihre Win-Back-Kampagnen. Nahtlose Anbindung an Shopify & Klaviyo.`}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                  onClick={openCalModal}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {`Gratis Win-Back-Analyse anfordern`}
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
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground/80">
                    {`Echte Handschrift`}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground/80">
                    {`Voll automatisiert`}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground/80">
                    {`ROI-Tracking`}
                  </span>
                </div>
              </div>

              <div className="pt-8 border-t">
                <p className="text-sm font-medium text-foreground/80 mb-4">
                  {`Kein Setup-Aufwand – Nahtlose Anbindung per Webhook`}
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {/* Shopify */}
                  <div className="group bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center space-x-2 shadow-sm hover:shadow-md hover:border-[#96bf48] transition-all duration-200">
                    <div className="w-5 h-5 rounded bg-[#96bf48] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M16 8h-6v8h6V8zm3-3h-3V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v18h14V5z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">
                      Shopify
                    </span>
                  </div>

                  {/* Klaviyo */}
                  <div className="group bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center space-x-2 shadow-sm hover:shadow-md hover:border-black transition-all duration-200">
                    <div className="w-5 h-5 rounded bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-xs font-bold">
                        K
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">
                      Klaviyo
                    </span>
                  </div>

                  {/* WooCommerce */}
                  <div className="group bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center space-x-2 shadow-sm hover:shadow-md hover:border-[#96588a] transition-all duration-200">
                    <div className="w-5 h-5 rounded bg-[#96588a] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-xs font-bold">
                        W
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">
                      WooCommerce
                    </span>
                  </div>

                  {/* Zapier */}
                  <div className="group bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center space-x-2 shadow-sm hover:shadow-md hover:border-[#ff4a00] transition-all duration-200">
                    <div className="w-5 h-5 rounded bg-[#ff4a00] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-xs font-bold">
                        Z
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">
                      Zapier
                    </span>
                  </div>

                  {/* More indicator */}
                  <div className="bg-muted/50 border border-dashed border-gray-300 rounded-lg px-3 py-2 flex items-center space-x-1">
                    <span className="text-xs font-medium text-muted-foreground">
                      {`+ jeder Shop per Webhook`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Letter on the right - with Parallax */}
            <div className="relative lg:pl-8">
              <div
                className="relative transition-transform duration-100 ease-out will-change-transform"
                style={{
                  transform: `translateY(${scrollY * (isMobile ? 0.05 : 0.5)}px)`,
                }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-30"></div>

                {/* Letter Image - Clickable */}
                <div
                  className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-primary/20 shadow-2xl cursor-pointer group/letter"
                  onClick={() => setIsPreviewOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setIsPreviewOpen(true);
                  }}
                  aria-label={`Brief vergrößern`}
                >
                  <ImageWithFallback
                    src={img(realLetterImage, 1200)}
                    alt="Handschriftlicher Premium-Brief auf Firmenbriefpapier"
                    className="w-full h-auto rounded-xl shadow-xl transition-transform duration-300 group-hover/letter:scale-[1.02]"
                  />
                  {/* Hover overlay with magnify hint */}
                  <div className="absolute inset-3 sm:inset-4 rounded-xl bg-black/0 group-hover/letter:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover/letter:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2 scale-90 group-hover/letter:scale-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line
                          x1="21"
                          y1="21"
                          x2="16.65"
                          y2="16.65"
                        />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      <span className="text-sm font-medium text-primary">{`Vergrößern`}</span>
                    </div>
                  </div>
                </div>

                {/* Quality Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 sm:p-4 border border-primary/20">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground">
                        Echte Handschrift
                      </div>
                      <div className="text-base sm:text-lg font-bold text-foreground">{`Premium-Qualität`}</div>
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

      {/* Letter Preview Lightbox */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsPreviewOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" />

          {/* Close button */}
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
            aria-label="Schließen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Hint text */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 text-xs sm:text-sm flex items-center gap-2">
            <span>{`Klicken oder ESC zum Schließen`}</span>
          </div>

          {/* Letter Image */}
          <div
            className="relative max-w-3xl w-full max-h-[90vh] animate-in zoom-in-95 fade-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 overflow-auto max-h-[90vh]">
              <ImageWithFallback
                src={img(realLetterImage, 1536)}
                alt={`Handschriftlicher Premium-Brief auf Firmenbriefpapier – Vorschau`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
