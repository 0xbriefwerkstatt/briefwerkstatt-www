"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SamplePackageModal } from "../SamplePackageModal";
import { Loader2, Mail, PackageOpen, RotateCcw, Sparkles } from "lucide-react";

const AI_TEXT =
  "Du starrst den ganzen Tag auf Code, aber dieser Brief lag heute legal auf deinem Schreibtisch. Kein Spam-Filter. Keine DSGVO-Abmahnung. Lass uns deine B2B-Kunden genau so erreichen.";

type Phase = "idle" | "generating" | "ready" | "sending" | "done";

export function DevPlayground() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [aiText, setAiText] = useState("");
  const [name, setName] = useState("Max Developer");
  const [address, setAddress] = useState("Werksviertel 12, 81673 München");
  const [email, setEmail] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  function generate() {
    if (phase === "generating") return;
    setPhase("generating");
    setAiText("");
    let i = 0;
    const tick = window.setInterval(() => {
      i += 2;
      setAiText(AI_TEXT.slice(0, i));
      if (i >= AI_TEXT.length) {
        window.clearInterval(tick);
        setAiText(AI_TEXT);
        later(() => setPhase("ready"), 350);
      }
    }, 14);
    timers.current.push(tick);
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function sendPreview() {
    if (!emailValid || phase !== "ready") return;
    setPhase("sending");
    setLines([]);
    const seq = [
      "> API authorized. Token: bw_live_9f27ac",
      `> Sending preview mockup to ${email} ...`,
      "> done. Check your mail to trigger UUNA TEK plotters in Munich.",
    ];
    seq.forEach((line, idx) => {
      later(() => setLines((prev) => [...prev, line]), 500 * (idx + 1));
    });
    later(() => setPhase("done"), 500 * (seq.length + 1));
  }

  function reset() {
    timers.current.forEach((t) => {
      window.clearTimeout(t);
      window.clearInterval(t);
    });
    timers.current = [];
    setPhase("idle");
    setAiText("");
    setEmail("");
    setLines([]);
  }

  const canType = phase === "idle";

  return (
    <section
      id="so-gehts"
      className="relative scroll-mt-24 bg-[#08070d] py-20 text-white lg:py-28"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#781E69]/15 blur-[140px]" />

      <div className="container relative mx-auto max-w-4xl px-4">
        <div className="space-y-6 text-center">
          <p className="font-mono text-sm text-[#c65db3]">{`// der api-playground`}</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {`Integriere echte Hardware in Sekunden. `}
            <span className="text-zinc-500">{`Teste es direkt hier.`}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400">
            {`Wirf stundenlanges API-Wälzen über Bord. Gib einfach deinen Prompt ein, generiere den Payload und triggere deinen ersten echten Brief.`}
          </p>
        </div>

        {/* Terminal */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d16] shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <span className="font-mono text-xs text-zinc-500">
              {`briefwerkstatt · sandbox`}
            </span>
            <button
              onClick={reset}
              className="flex items-center gap-1 rounded px-2 py-1 font-mono text-xs text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-300"
              aria-label="Zurücksetzen"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {`reset`}
            </button>
          </div>

          <div className="space-y-6 p-5 font-mono text-sm sm:p-7">
            {/* Step 1: Prompt */}
            <div className="space-y-3">
              <p className="text-zinc-600">{`// 1. Lass die KI deinen Text schreiben`}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3">
                  <span className="text-[#c65db3]">{`>`}</span>
                  <input
                    readOnly={!canType}
                    defaultValue="Schreibe einen frechen Zweizeiler, der beweist, dass Post konvertiert."
                    className="w-full bg-transparent py-3 text-zinc-200 outline-none"
                  />
                </div>
                <Button
                  onClick={generate}
                  disabled={!canType}
                  className="h-auto whitespace-nowrap px-5 py-3"
                >
                  {phase === "generating" ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  {phase === "generating" ? `generiere ...` : `generieren`}
                </Button>
              </div>
              {aiText ? (
                <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-4 leading-relaxed text-emerald-300">
                  {aiText}
                  {phase === "generating" ? (
                    <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-emerald-300" />
                  ) : null}
                </div>
              ) : null}
            </div>

            {/* Step 2: Payload */}
            {phase !== "idle" && phase !== "generating" ? (
              <div className="space-y-3">
                <p className="text-zinc-600">{`// 2. Request Payload (TypeScript / Node.js)`}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-xs text-zinc-500">
                      {`recipient.name`}
                    </span>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-white/10 bg-black/40 font-mono text-zinc-200"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs text-zinc-500">
                      {`recipient.address`}
                    </span>
                    <Input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="border-white/10 bg-black/40 font-mono text-zinc-200"
                    />
                  </label>
                </div>
                <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 leading-relaxed">
                  <code>
                    <span className="text-zinc-500">{`const `}</span>
                    <span className="text-zinc-200">{`payload `}</span>
                    <span className="text-zinc-500">{`= {`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`  recipient: { name: `}</span>
                    <span className="text-emerald-300">{`"${name || "…"}"`}</span>
                    <span className="text-zinc-500">{`, address: `}</span>
                    <span className="text-emerald-300">{`"${address || "…"}"`}</span>
                    <span className="text-zinc-500">{` },`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`  body: `}</span>
                    <span className="text-emerald-300">{`"${aiText}"`}</span>
                    <span className="text-zinc-500">{`,`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`  tracking: { webhook_url: `}</span>
                    <span className="text-emerald-300">{`"https://deine-app.com/api/webhook"`}</span>
                    <span className="text-zinc-500">{` }`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`};`}</span>
                  </code>
                </pre>
              </div>
            ) : null}

            {/* Step 3: E-Mail */}
            {phase === "ready" || phase === "sending" || phase === "done" ? (
              <div className="space-y-3">
                <p className="text-zinc-600">
                  {`// 3. Enter work email to generate preview & auth token:`}
                </p>
                {phase === "ready" ? (
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3">
                      <Mail className="h-4 w-4 text-zinc-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") sendPreview();
                        }}
                        placeholder="deine@firma.com"
                        className="w-full bg-transparent py-3 text-zinc-200 outline-none placeholder:text-zinc-600"
                      />
                      <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-zinc-500">
                        {`↵`}
                      </kbd>
                    </div>
                    <Button
                      onClick={sendPreview}
                      disabled={!emailValid}
                      className="h-auto whitespace-nowrap px-5 py-3"
                    >
                      {`Preview anfordern`}
                    </Button>
                  </div>
                ) : null}
                {lines.map((line, i) => (
                  <p
                    key={i}
                    className={
                      line.startsWith("> done")
                        ? "text-emerald-400"
                        : "text-zinc-300"
                    }
                  >
                    {line}
                  </p>
                ))}
                {phase === "done" ? (
                  <div className="space-y-4 rounded-lg border border-[#c65db3]/30 bg-[#781E69]/10 p-4">
                    <p className="leading-relaxed text-zinc-300">
                      <span className="font-semibold text-white">{`Sandbox-Demo: `}</span>
                      {`Hier wurde nichts versendet. So fühlt sich die Integration an. Einen echten Testbrief auf Papier, geschrieben von unseren Plottern, bekommst du hier:`}
                    </p>
                    <Button
                      onClick={() => setModalOpen(true)}
                      variant="outline"
                      className="border-[#c65db3]/50 bg-transparent text-white hover:bg-[#c65db3]/20 hover:text-white"
                    >
                      <PackageOpen className="mr-2 h-4 w-4" />
                      {`Echten Testbrief anfordern`}
                    </Button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <SamplePackageModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
