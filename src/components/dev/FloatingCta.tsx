"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Calendar, Send, X } from "lucide-react";
import { openCalModal } from "../CalModal";

const KEY = "bw-floating-cta-dismissed";

/**
 * Desktop: Notizzettel unten rechts (wie Handwryttens "Book a Demo"-Popup).
 * Mobil: feste CTA-Leiste am unteren Rand.
 * Erscheint nach dem Hero, verschwindet bei Playground und Footer.
 */
export function FloatingCta() {
  const [past, setPast] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(KEY) === "1");
    } catch {
      setDismissed(false);
    }

    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        setBlocked(visible.size > 0);
      },
      { threshold: 0.15 },
    );
    ["playground", "final-cta", "site-footer"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  function dismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* egal */
    }
  }

  function toPlayground() {
    document.getElementById("playground")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const show = past && !blocked;

  return (
    <>
      {/* Desktop-Notiz */}
      <AnimatePresence>
        {show && !dismissed ? (
          <motion.div
            initial={{ opacity: 0, y: 120, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            exit={{ opacity: 0, y: 120, rotate: 8 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="fixed bottom-5 right-5 z-40 hidden w-[250px] lg:block"
          >
            <div className="relative rounded-[6px] border-2 border-ink bg-paper p-5 pt-6 shadow-[6px_6px_0_0_var(--color-ink)]">
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[3deg]" />
              <button
                onClick={dismiss}
                className="absolute right-2.5 top-2.5 rounded-full p-1 text-ink-soft hover:bg-ink/5 hover:text-ink"
                aria-label="Hinweis schließen"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="font-display text-lg font-semibold leading-snug">
                Lust auf deinen ersten Brief?
              </p>
              <p className="mt-1 font-hand text-lg leading-tight text-plum">
                Sandbox, ohne Kreditkarte.
              </p>
              <button onClick={toPlayground} className="btn-ink btn-plum btn-sm mt-4 w-full">
                <Send className="h-3.5 w-3.5" />
                Test-Brief senden
              </button>
              <button
                onClick={dismiss}
                className="mt-3 w-full text-center text-sm text-ink-soft underline underline-offset-4 hover:text-ink"
              >
                Nein danke
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Mobile-Leiste */}
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-paper/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden"
          >
            <div className="flex gap-3">
              <button onClick={toPlayground} className="btn-ink btn-plum btn-sm flex-1">
                <Send className="h-3.5 w-3.5" />
                Test-Brief
              </button>
              <button onClick={openCalModal} className="btn-ink btn-paper btn-sm flex-1">
                <Calendar className="h-3.5 w-3.5" />
                Gespräch
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
