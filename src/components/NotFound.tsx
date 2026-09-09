"use client";

import { Button } from "./ui/button";
import { Home, Mail, Search } from "lucide-react";
import { useState, useEffect } from "react";

const stamps = [
  { rotate: -12, x: 75, y: 8, delay: 0 },
  { rotate: 8, x: 10, y: 65, delay: 0.5 },
  { rotate: -5, x: 85, y: 70, delay: 1.2 },
  { rotate: 15, x: 5, y: 15, delay: 0.8 },
];

export function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handleGoHome = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
      {/* Floating stamps background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {stamps.map((stamp, i) => (
          <div
            key={i}
            className="absolute transition-all duration-[3000ms] ease-out"
            style={{
              left: `${stamp.x}%`,
              top: `${stamp.y}%`,
              transform: `rotate(${stamp.rotate}deg) scale(${mounted ? 1 : 0})`,
              opacity: mounted ? 0.06 : 0,
              transitionDelay: `${stamp.delay}s`,
            }}
          >
            <div className="w-24 h-28 sm:w-32 sm:h-36 border-[3px] border-[#781E69] rounded-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#781E69] text-xs font-mono">BRIEFWERKSTATT</div>
                <div className="text-[#781E69] text-2xl sm:text-3xl font-bold mt-1">404</div>
                <div className="text-[#781E69] text-[8px] font-mono mt-1">{`M\u00dcNCHEN`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-16 relative z-10">
        <div
          className={`max-w-2xl w-full text-center space-y-8 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Animated envelope / letter illustration */}
          <div className="relative inline-block">
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Shadow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-4 bg-black/10 rounded-full blur-md transition-all duration-500"
                style={{ transform: `translateX(-50%) scale(${hovered ? 0.8 : 1})` }}
              />

              {/* Envelope body */}
              <div
                className="relative w-56 h-36 sm:w-72 sm:h-44 bg-white rounded-xl border-2 border-[#781E69]/20 shadow-xl mx-auto transition-all duration-500"
                style={{
                  transform: hovered ? "translateY(-12px) rotate(-2deg)" : "translateY(0) rotate(0deg)",
                }}
              >
                {/* Envelope flap (open) */}
                <div
                  className="absolute -top-[1px] left-0 right-0 h-[45%] overflow-hidden"
                  style={{ transformOrigin: "top center" }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#781E69]/10 to-[#781E69]/5 border-b-2 border-[#781E69]/10"
                    style={{
                      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                    }}
                  />
                </div>

                {/* "404" on the letter peeking out */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out"
                  style={{
                    top: hovered ? "-60px" : "-20px",
                  }}
                >
                  <div className="bg-white border-2 border-[#781E69]/15 rounded-lg shadow-lg px-6 sm:px-8 py-3 sm:py-4">
                    <div className="text-[#781E69]/30 text-[10px] font-mono tracking-widest mb-1">
                      SEITE NICHT GEFUNDEN
                    </div>
                    <div className="text-[#781E69] text-4xl sm:text-5xl font-bold tracking-tight">
                      404
                    </div>
                    <div className="flex justify-center mt-2 gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-[2px] bg-[#781E69]/20 rounded-full" style={{ width: `${30 - i * 6}px` }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Address lines on envelope */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-2">
                  <div className="h-[2px] bg-[#781E69]/10 rounded-full w-3/4" />
                  <div className="h-[2px] bg-[#781E69]/10 rounded-full w-1/2" />
                  <div className="h-[2px] bg-[#781E69]/10 rounded-full w-2/3" />
                </div>

                {/* Stamp */}
                <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 w-8 h-10 sm:w-10 sm:h-12 border-2 border-dashed border-[#781E69]/20 rounded-sm flex items-center justify-center">
                  <Search className="w-3 h-3 sm:w-4 sm:h-4 text-[#781E69]/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4 mt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-foreground">
              {`Dieser Brief ist verloren\u00a0gegangen`}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto">
              {`Die Seite, die Sie suchen, wurde leider nicht zugestellt. Vielleicht wurde sie an die falsche Adresse\u00a0geschickt?`}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center justify-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
              onClick={handleGoHome}
            >
              <Home className="w-5 h-5 mr-2" />
              {`Zur\u00fcck zur Startseite`}
            </Button>
          </div>

          {/* Fun message */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 bg-[#781E69]/5 border border-[#781E69]/10 rounded-full px-5 py-2.5">
              <Mail className="w-4 h-4 text-[#781E69]" />
              <span className="text-sm text-muted-foreground">
                {`Keine Sorge \u2013 unsere echten Briefe kommen immer an. Mit 98%\u00a0\u00d6ffnungsrate.`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}