"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Send } from "lucide-react";
const logoImg = "/assets/580b420df5b154f221ec7c41675f5b0aacc3ab71.png";
const printerImage = "/assets/2a1e023a513c7d26c4ee4c0148d9ac3f2a7e5096.png";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const officeImage = "/assets/e2f5791ec0044e74da59fc1b390b9293b94bcca8.png";
const officeImage2 = "/assets/531a0680e7d362118c9aba54d033229647beedd6.png";
import { img } from "../lib/imgParams";

const photos = [
  { src: officeImage, alt: "Unser Office in München", caption: "das Office", rotate: "-3deg" },
  { src: printerImage, alt: "Unsere Roboter-Technologie", caption: "die Plotter", rotate: "2deg" },
  { src: officeImage2, alt: "Unser Arbeitsbereich in München", caption: "die Werkstatt", rotate: "-1deg" },
];

const nav = [
  { href: "/#problem", label: "Problem" },
  { href: "/#use-cases", label: "So funktioniert's" },
  { href: "/#so-gehts", label: "Playground" },
  { href: "/#roi-tracking", label: "Tracking" },
  { href: "/#pricing", label: "Preise" },
  { href: "/#faq", label: "FAQ" },
];

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
    <footer className="relative bg-ink text-white">
      {/* Siegel */}
      <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-paper shadow-[4px_4px_0_0_var(--color-plum)]">
        <img src={img(logoImg, 160)} alt="" className="h-14 w-14 object-contain" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-24 sm:px-8">
        {/* Newsletter */}
        <div className="mx-auto max-w-xl text-center">
          <h3 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Post von uns,{" "}
            <span className="font-hand text-[1.2em] text-[#e08bd0]">ab und zu.</span>
          </h3>
          <p className="mt-3 text-white/60">
            Exklusive Tipps, Erfolgsgeschichten und Angebote direkt in Ihr Postfach.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="nl-email">E-Mail-Adresse</label>
            <input
              id="nl-email"
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full border-2 border-white/20 bg-white/5 px-5 py-3.5 text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#e08bd0]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-ink btn-plum btn-sm !border-white !shadow-[3px_3px_0_0_#fff]"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Senden …" : "Abonnieren"}
            </button>
          </form>
          <p className="mt-3 text-xs text-white/40">
            Mit der Anmeldung akzeptieren Sie unsere{" "}
            <a href="/datenschutz" className="underline hover:text-white">Datenschutzerklärung</a>
          </p>
        </div>

        {/* Spalten */}
        <div className="mt-20 grid gap-12 border-t border-white/10 pt-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <a href="/#" className="flex items-center gap-3">
              <img
                src={img(logoImg, 160)}
                alt="Briefwerkstatt Logo"
                className="h-12 w-12 object-contain brightness-0 invert"
              />
              <span className="font-display text-2xl font-semibold">Die Briefwerkstatt</span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Echte Briefe für Growth-, Sales- und Marketing-Teams: DSGVO-konform, skalierbar, per API
              oder CRM integriert und per QR-Code messbar.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-xl">Navigation</h4>
            <nav className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/60 lg:grid-cols-1">
              {nav.map((l) => (
                <a key={l.href} href={l.href} className="transition-colors hover:text-[#e08bd0]">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-5">
            <h4 className="font-display text-xl">Kontakt</h4>
            <div className="mt-5 space-y-3 text-sm text-white/60">
              <a href="mailto:info@briefwerkstatt.com" className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-[#e08bd0]" />
                info@briefwerkstatt.com
              </a>
              <a href="tel:+4989125012270" className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-[#e08bd0]" />
                +49 89 1250 1227 0
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e08bd0]" />
                <span>
                  Tengstraße 26
                  <br />
                  80798 München
                </span>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border-2 border-white/15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10648.189956553542!2d11.586236876891728!3d48.15508407124344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f7f6f6f6f7%3A0x3f3f3f3f3f3f3f3f!2sTengstra%C3%9Fe%2026%2C%2080798%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde&z=12"
                width="100%"
                height="180"
                style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Die Briefwerkstatt Standort"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Polaroids */}
        <div className="mt-16 grid grid-cols-1 gap-8 px-2 sm:grid-cols-3 sm:gap-6">
          {photos.map((p) => (
            <figure
              key={p.caption}
              className="rounded-[4px] bg-paper p-2.5 pb-10 shadow-xl transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]"
              style={{ rotate: p.rotate }}
            >
              <ImageWithFallback
                src={img(p.src, 900)}
                alt={p.alt}
                className="aspect-[4/3] w-full rounded-[2px] object-cover"
              />
              <figcaption className="mt-2 text-center font-hand text-2xl text-ink">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <div>© 2026 Die Briefwerkstatt. Alle Rechte vorbehalten.</div>
          <div className="flex gap-6">
            <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
            <a href="/impressum" className="hover:text-white">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
