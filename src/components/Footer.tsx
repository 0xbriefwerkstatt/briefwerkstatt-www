"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Send } from "lucide-react";
const logoImg = "/assets/580b420df5b154f221ec7c41675f5b0aacc3ab71.png";
const printerImage = "/assets/2a1e023a513c7d26c4ee4c0148d9ac3f2a7e5096.png";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const officeImage = "/assets/e2f5791ec0044e74da59fc1b390b9293b94bcca8.png";
const officeImage2 = "/assets/531a0680e7d362118c9aba54d033229647beedd6.png";
import { img } from "../lib/imgParams";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Hier Newsletter-Logik implementieren
    setTimeout(() => {
      setEmail("");
      setIsSubmitting(false);
      alert("Vielen Dank für Ihre Anmeldung!");
    }, 1000);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Map Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl mb-2">Besuchen Sie uns</h3>
            <p className="text-primary-foreground/80">Tengstraße 26, 80798 München</p>
          </div>
          
          {/* Office Images, Printer & Map Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Office Image 1 */}
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
              <ImageWithFallback
                src={img(officeImage, 1200)}
                alt="Unser Office in München"
                className="w-full h-[280px] object-cover"
              />
            </div>
            
            {/* Office Image 2 */}
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
              <ImageWithFallback
                src={img(officeImage2, 1200)}
                alt="Unser Arbeitsbereich in München"
                className="w-full h-[280px] object-cover"
              />
            </div>
            
            {/* Printer/Robot Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
              <ImageWithFallback
                src={img(printerImage, 1200)}
                alt="Unsere Roboter-Technologie"
                className="w-full h-[280px] object-cover"
              />
            </div>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10648.189956553542!2d11.586236876891728!3d48.15508407124344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f7f6f6f6f7%3A0x3f3f3f3f3f3f3f3f!2sTengstra%C3%9Fe%2026%2C%2080798%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde&z=12"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BitFlow GmbH Standort"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <a href="/#" className="flex items-center space-x-3 group hover:opacity-90 transition-opacity">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 flex-shrink-0">
                <img 
                  src={img(logoImg, 160)} 
                  alt="Briefwerkstatt Logo" 
                  className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-110 brightness-0 invert drop-shadow-md"
                />
              </div>
              
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold">Die Briefwerkstatt</span>
                <span className="text-xs sm:text-sm text-primary-foreground/70">
                  Handschrift mit Automatisierung
                </span>
              </div>
            </a>
            <p className="text-primary-foreground/80 text-sm">
              Automatisierte, handschriftliche Briefe mit digitalem Tracking. 
              Verbinden Sie echte Tinte mit Ihrem CRM für messbaren Erfolg.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 text-primary-foreground/80 text-sm">
              <div><a href="/#problem" className="hover:text-primary-foreground transition-colors">Problem</a></div>
              <div><a href="/#use-cases" className="hover:text-primary-foreground transition-colors">{`L\u00f6sung`}</a></div>
              <div><a href="/#anwendung" className="hover:text-primary-foreground transition-colors">Anwendung</a></div>
              <div><a href="/#roi-tracking" className="hover:text-primary-foreground transition-colors">Prozess</a></div>
              <div><a href="/#referenzen" className="hover:text-primary-foreground transition-colors">Referenzen</a></div>
              <div><a href="/#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></div>
            </nav>
          </div>

          {/* Kontakt */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-3 text-primary-foreground/80 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@briefwerkstatt.com" className="hover:text-primary-foreground transition-colors break-all">
                  info@briefwerkstatt.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+4989125012270" className="hover:text-primary-foreground transition-colors">
                  +49 89 1250 1227 0
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Tengstraße 26</div>
                  <div>80798 München</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-primary-foreground/10 rounded-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Newsletter abonnieren</h3>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">
              Erhalten Sie exklusive Tipps, Erfolgsgeschichten und Angebote direkt in Ihr Postfach.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground text-foreground flex-1"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Senden..." : "Abonnieren"}
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/60 mt-3 sm:mt-4">
              Mit der Anmeldung akzeptieren Sie unsere <a href="/datenschutz" className="underline hover:text-primary-foreground">Datenschutzerklärung</a>
            </p>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="text-primary-foreground/80 text-center md:text-left">
            © 2026 Briefwerkstatt by BitFlow GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-4 sm:gap-6 text-primary-foreground/80">
            <a href="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutz</a>
            <a href="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}