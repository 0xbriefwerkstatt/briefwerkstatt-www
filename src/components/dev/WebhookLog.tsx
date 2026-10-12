"use client";

import { useEffect, useState } from "react";
import { useInView } from "../paper/Ink";

function makeEvent() {
  const id = Math.random().toString(16).slice(2, 8);
  return {
    fields: [
      ["event", "letter.scanned"],
      ["letter_id", `ltr_${id}`],
      ["campaign", "bnp-2026"],
      ["scanned_at", new Date().toISOString().slice(0, 19) + "Z"],
      ["landing_page", `https://deine-app.com/b/${id}`],
    ] as [string, string][],
    ms: 24 + Math.floor(Math.random() * 30),
  };
}

const STATIC = {
  fields: [
    ["event", "letter.scanned"],
    ["letter_id", "ltr_9f27ac"],
    ["campaign", "bnp-2026"],
    ["scanned_at", "2026-10-12T09:41:07Z"],
    ["landing_page", "https://deine-app.com/b/9f27ac"],
  ] as [string, string][],
  ms: 38,
};

// Zeilen: 0 = Request-Zeile, 1 = Host, 2 = "{", 3..7 = Felder, 8 = "}", 9 = Status
const TOTAL = 10;

export function WebhookLog() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  const [evt, setEvt] = useState(STATIC);
  const [shown, setShown] = useState(TOTAL);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let line = 0;
    let timer = 0;
    const run = () => {
      setEvt(makeEvent());
      line = 0;
      setShown(0);
      const step = () => {
        line++;
        setShown(line);
        if (line < TOTAL) {
          timer = window.setTimeout(step, line === TOTAL - 1 ? 450 : 110);
        } else {
          setCount((c) => c + 1);
          timer = window.setTimeout(run, 4200);
        }
      };
      timer = window.setTimeout(step, 300);
    };
    run();
    return () => window.clearTimeout(timer);
  }, [inView]);

  const vis = (n: number) => (shown > n ? "opacity-100" : "opacity-0");

  return (
    <div ref={ref} className="overflow-hidden rounded-[22px] border-2 border-ink bg-ink shadow-[10px_10px_0_0_var(--color-plum)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 font-mono text-xs">
        <span className="text-white/60">webhook_delivery.log</span>
        <span className="flex items-center gap-3">
          <span className="text-white/40 tabular-nums">#{count}</span>
          <span className="flex items-center gap-2 text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
            live
          </span>
        </span>
      </div>
      <pre className="min-h-[300px] overflow-x-auto p-6 font-mono text-xs leading-relaxed text-white sm:text-sm">
        <code>
          <span className={`transition-opacity ${vis(0)}`}>
            <span className="text-[#e08bd0]">POST </span>/api/webhook HTTP/1.1
          </span>
          {"\n"}
          <span className={`transition-opacity ${vis(1)}`}>
            <span className="text-white/50">Host: </span>deine-app.com
          </span>
          {"\n\n"}
          <span className={`text-white/50 transition-opacity ${vis(2)}`}>{"{"}</span>
          {"\n"}
          {evt.fields.map(([k, v], i) => (
            <span key={k} className={`transition-opacity ${vis(3 + i)}`}>
              <span className="text-white/50">{`  "${k}": `}</span>
              <span className="text-emerald-300">{`"${v}"`}</span>
              <span className="text-white/50">{i < evt.fields.length - 1 ? "," : ""}</span>
              {"\n"}
            </span>
          ))}
          <span className={`text-white/50 transition-opacity ${vis(8)}`}>{"}"}</span>
          {"\n\n"}
          <span
            className={`inline-block rounded bg-emerald-400/15 px-2 py-0.5 text-emerald-300 transition-all duration-300 ${
              shown > 9 ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            {`200 OK · delivered in ${evt.ms} ms`}
          </span>
        </code>
      </pre>
    </div>
  );
}
