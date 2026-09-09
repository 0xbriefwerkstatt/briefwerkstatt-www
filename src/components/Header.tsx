"use client";

import { Button } from "./ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";
const logoImg = "/assets/580b420df5b154f221ec7c41675f5b0aacc3ab71.png";
import { CalModal, openCalModal } from "./CalModal";
import { img } from "../lib/imgParams";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
        <div className="container flex h-20 sm:h-24 items-center justify-between px-4 sm:px-6 mx-auto max-w-6xl">
          <a
            href="/#"
            className="flex items-center space-x-3 group hover:opacity-90 transition-opacity"
          >
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 flex-shrink-0">
              <img
                src={img(logoImg, 160)}
                alt="Briefwerkstatt Logo"
                className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-110 drop-shadow-md"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Die Briefwerkstatt
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">
                Handschrift mit Automatisierung
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
            <a
              href="/#use-cases"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
            >
              Use Cases
            </a>
            <a
              href="/#roi-tracking"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
            >
              ROI & Tracking
            </a>
            <a
              href="/#preise"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
            >
              Preise
            </a>
            <a
              href="/#faq"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden lg:flex items-center">
            <Button
              onClick={openCalModal}
              className="shadow-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {`Gratis Win-Back-Analyse`}
            </Button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-1 p-4">
              <a
                href="/#use-cases"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </a>
              <a
                href="/#roi-tracking"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                ROI & Tracking
              </a>
              <a
                href="/#preise"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Preise
              </a>
              <a
                href="/#faq"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-2">
                <Button
                  className="w-full shadow-sm"
                  size="lg"
                  onClick={() => {
                    openCalModal();
                    setIsMenuOpen(false);
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {`Gratis Win-Back-Analyse`}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <CalModal />
    </>
  );
}
