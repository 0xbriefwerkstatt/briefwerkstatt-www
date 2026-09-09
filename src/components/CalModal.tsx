"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
    dataLayer?: any[];
    umami?: any;
  }
}

// Simple function to open Cal modal
export function openCalModal() {
  if (typeof window !== 'undefined' && window.Cal) {
    window.Cal("modal", {
      calLink: "bitflow/briefwerkstatt",
      config: { "theme": "light" }
    });
  }
}

export function CalModal() {
  // Initialize Cal.com once
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.Cal) return; // Already initialized

    // Cal.com initialization
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init");

    // Tracking logic
    window.Cal("on", {
      action: "bookingSuccessful",
      callback: (e: any) => {
        if (typeof window.umami !== 'undefined' && window.umami !== null) {
          window.umami.track('book-appointment-confirmed');
        }
        if (typeof window.dataLayer !== 'undefined') {
          window.dataLayer.push({ event: 'book-appointment-confirmed' });
        }
      }
    });
  }, []);

  return null;
}
