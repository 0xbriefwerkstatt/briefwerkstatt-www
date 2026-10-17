"use client";

import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
const logoImg = "/assets/580b420df5b154f221ec7c41675f5b0aacc3ab71.png";
import { CalModal, openCalModal } from "./CalModal";
import { img } from "../lib/imgParams";

const links = [
  { href: "ki", label: "KI × Roboter" },
  { href: "use-cases", label: "So funktioniert's" },
  { href: "so-gehts", label: "Playground" },
  { href: "roi-tracking", label: "Tracking" },
  { href: "pricing", label: "Preise" },
  { href: "faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  // Landingpages enthalten die Sektionen selbst, alle anderen Seiten verlinken auf die Startseite
  const pathname = usePathname();
  const base = pathname === "/" || pathname === "/bits-and-pretzels" ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled || isMenuOpen
            ? "border-b border-ink/[0.06] bg-paper/70 shadow-[0_8px_30px_-18px_rgba(27,19,32,.25)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-paper"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-8 ${
            scrolled ? "h-16 sm:h-[72px]" : "h-20 sm:h-28"
          }`}
        >
          <a href={`${base}#`} className="group flex items-center gap-3">
            <img
              src={img(logoImg, 160)}
              alt="Briefwerkstatt Logo"
              className={`object-contain transition-all duration-500 ${
                scrolled ? "h-10 w-10" : "h-12 w-12 sm:h-16 sm:w-16"
              }`}
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                Die Briefwerkstatt
              </span>
              <span
                className={`text-xs font-medium tracking-wide text-ink-soft transition-all duration-500 ${
                  scrolled ? "h-0 opacity-0" : "h-5 opacity-100"
                }`}
              >
                echte Tinte, per API
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={`${base}#${l.href}`}
                className="group relative whitespace-nowrap px-3 py-2 text-[15px] font-medium text-ink"
              >
                {l.label}
                <svg
                  aria-hidden
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 left-3 right-3 h-2 w-[calc(100%-1.5rem)] opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <path d="M2 6 C 30 2, 70 9, 98 4" fill="none" stroke="var(--color-plum)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 xl:flex">
            <a href={`${base}#so-gehts`} className="text-[15px] font-medium text-ink hover:text-plum">
              Sandbox
            </a>
            <button onClick={openCalModal} className="btn-ink btn-plum btn-sm">
              Gespräch buchen
            </button>
          </div>

          <button
            className="btn-ink btn-paper !p-2.5 xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <motion.div
          aria-hidden
          className="absolute -bottom-[2px] left-0 right-0 h-[3px] origin-left bg-plum"
          style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }}
        />

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-full h-[100dvh] overflow-y-auto bg-paper xl:hidden">
            <nav className="flex flex-col px-6 pb-10 pt-6">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={`${base}#${l.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between border-b border-ink/15 py-5 font-display text-3xl text-ink"
                  style={{ animation: `bw-menu-in .45s ${i * 0.05}s both cubic-bezier(.22,1,.36,1)` }}
                >
                  {l.label}
                  <ArrowRight className="h-5 w-5 text-plum" />
                </a>
              ))}
              <button
                onClick={() => {
                  openCalModal();
                  setIsMenuOpen(false);
                }}
                className="btn-ink btn-plum mt-8 w-full"
              >
                Kennenlerngespräch buchen
              </button>
              <p className="mt-8 text-sm text-ink-soft">
                Tengstraße 26 · München
              </p>
            </nav>
            <style>{`@keyframes bw-menu-in { from { opacity: 0; transform: translateY(14px); } }`}</style>
          </div>
        )}
      </header>

      <CalModal />
    </>
  );
}
