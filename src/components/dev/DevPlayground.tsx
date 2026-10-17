"use client";

import { useEffect, useRef, useState } from "react";
import { Eyebrow, Reveal } from "../paper/Ink";
import { SamplePackageModal } from "../SamplePackageModal";
import { CodeTabs } from "./CodeTabs";
import { Loader2, Mail, PackageOpen, RotateCcw, Sparkles } from "lucide-react";

const AI_TEXT =
  "Du starrst den ganzen Tag auf Code, aber dieser Brief lag heute legal auf deinem Schreibtisch. Kein Spam-Filter. Keine DSGVO-Abmahnung. Lass uns deine B2B-Kunden genau so erreichen.";

const PLAYGROUND_API = "https://api.briefwerkstatt.com/playground/preview";

type Phase = "idle" | "generating" | "ready" | "sending" | "done";

export function DevPlayground() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [aiText, setAiText] = useState("");
  const [name, setName] = useState("Max Developer");
  const [address, setAddress] = useState("Werksviertel 12, 81673 München");
  const [email, setEmail] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((t) => {
        window.clearTimeout(t);
        window.clearInterval(t);
      });
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

  async function sendPreview() {
    if (!emailValid || phase !== "ready") return;
    setPhase("sending");
    setError(null);
    setLines(["> POST api.briefwerkstatt.com/playground/preview"]);
    try {
      const res = await fetch(PLAYGROUND_API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, name, address, body: aiText }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        letterId?: string;
        error?: string;
      };
      if (!res.ok || !data.letterId) {
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }
      setLines((prev) => [...prev, `> rendering preview (${data.letterId}) ...`]);
      await new Promise((r) => setTimeout(r, 700));
      setLines((prev) => [...prev, `> 200 OK · Vorschau an ${email} versendet`]);
      setPhase("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler");
      setLines((prev) => [...prev, "> request failed"]);
      setPhase("ready");
    }
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
    setError(null);
  }

  const canType = phase === "idle";

  return (
    <section
      id="so-gehts"
      className="relative scroll-mt-20 bg-white py-24 text-ink lg:py-32"
    >
      <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
        <Reveal className="text-center">
          <Eyebrow>Der API-Playground</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Integriere echte Hardware in Sekunden.{" "}
            <span className="italic text-plum">Teste es direkt hier.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Wirf stundenlanges API-Wälzen über Bord. Gib einfach deinen Prompt ein, generiere den
            Payload und triggere deinen ersten echten Brief. Die Vorschau kommt per Mail.
          </p>
        </Reveal>

        {/* Schritt-Anzeige */}
        <ol className="mx-auto mt-12 flex max-w-xl items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider sm:text-sm">
          {["Text", "Payload", "Preview"].map((label, i) => {
            const active =
              (i === 0 && (phase === "idle" || phase === "generating")) ||
              (i === 1 && phase === "ready" && !email) ||
              (i === 2 && (phase === "sending" || phase === "done" || (phase === "ready" && !!email)));
            const done =
              (i === 0 && phase !== "idle" && phase !== "generating") ||
              (i === 1 && (phase === "sending" || phase === "done" || (phase === "ready" && !!email))) ||
              (i === 2 && phase === "done");
            return (
              <li key={label} className="flex flex-1 items-center gap-2 last:flex-none">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 font-mono text-sm font-semibold transition-colors ${
                    done ? "bg-plum text-white" : active ? "bg-ink text-white" : "bg-white"
                  }`}
                >
                  {done ? "✓" : i + 1}
                </span>
                <span className={active || done ? "text-ink" : "text-ink-soft/60"}>{label}</span>
                {i < 2 ? <span className="mx-1 h-[2px] flex-1 rounded bg-ink/15" /> : null}
              </li>
            );
          })}
        </ol>

        {/* Terminal */}
        <Reveal delay={0.1} className="relative mt-10">
          <div
            id="playground"
            className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-ink text-white shadow-glow"
          >
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-white/50">
                {`briefwerkstatt · live sandbox`}
              </span>
              <button
                onClick={reset}
                className="flex items-center gap-1 rounded px-2 py-1 font-mono text-xs text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Zurücksetzen"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                {`reset`}
              </button>
            </div>

            <div className="space-y-7 p-5 font-mono text-sm sm:p-8">
              {/* Step 1: Prompt */}
              <div className="space-y-3">
                <p className="text-white/40">{`// 1. Lass die KI deinen Text schreiben`}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 focus-within:border-[#e08bd0]">
                    <span className="text-[#e08bd0]">{`>`}</span>
                    <input
                      readOnly={!canType}
                      defaultValue="Schreibe einen frechen Zweizeiler, der beweist, dass Post konvertiert."
                      className="w-full bg-transparent py-3 text-white outline-none"
                      aria-label="Prompt"
                    />
                  </div>
                  <button
                    onClick={generate}
                    disabled={!canType}
                    className="btn-ink btn-plum btn-sm"
                  >
                    {phase === "generating" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="h-4 w-4" />
                    )}
                    {phase === "generating" ? `generiere …` : `generieren`}
                  </button>
                </div>
                {aiText ? (
                  <div className="rounded-xl bg-[#fffdf8] p-5 font-hand text-2xl leading-snug text-fountain">
                    {aiText}
                    {phase === "generating" ? (
                      <span className="ml-0.5 inline-block h-5 w-[3px] animate-pulse bg-fountain align-middle" />
                    ) : null}
                  </div>
                ) : null}
              </div>

              {/* Step 2: Payload */}
              {phase !== "idle" && phase !== "generating" ? (
                <div className="space-y-3">
                  <p className="text-white/40">{`// 2. Request Payload (TypeScript / Node.js)`}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1 block text-xs text-white/50">{`recipient.name`}</span>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[#e08bd0]"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1 block text-xs text-white/50">{`recipient.address`}</span>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[#e08bd0]"
                      />
                    </label>
                  </div>
                  <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 leading-relaxed">
                    <code>
                      <span className="text-[#e08bd0]">{`const `}</span>
                      <span className="text-white">{`payload `}</span>
                      <span className="text-white/50">{`= {`}</span>
                      {"\n"}
                      <span className="text-white/50">{`  recipient: { name: `}</span>
                      <span className="text-emerald-300">{`"${name || "…"}"`}</span>
                      <span className="text-white/50">{`, address: `}</span>
                      <span className="text-emerald-300">{`"${address || "…"}"`}</span>
                      <span className="text-white/50">{` },`}</span>
                      {"\n"}
                      <span className="text-white/50">{`  body: `}</span>
                      <span className="text-emerald-300">{`"${aiText}"`}</span>
                      <span className="text-white/50">{`,`}</span>
                      {"\n"}
                      <span className="text-white/50">{`  tracking: { webhook_url: `}</span>
                      <span className="text-emerald-300">{`"https://deine-app.com/api/webhook"`}</span>
                      <span className="text-white/50">{` }`}</span>
                      {"\n"}
                      <span className="text-white/50">{`};`}</span>
                    </code>
                  </pre>
                </div>
              ) : null}

              {/* Step 3: E-Mail */}
              {phase === "ready" || phase === "sending" || phase === "done" ? (
                <div className="space-y-3">
                  <p className="text-white/40">
                    {`// 3. Enter work email to generate preview & auth token:`}
                  </p>
                  {phase === "ready" ? (
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 focus-within:border-[#e08bd0]">
                        <Mail className="h-4 w-4 text-white/50" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") sendPreview();
                          }}
                          placeholder="deine@firma.com"
                          aria-label="Arbeits-E-Mail"
                          className="w-full bg-transparent py-3 text-white outline-none placeholder:text-white/30"
                        />
                        <kbd className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-white/50">
                          {`↵`}
                        </kbd>
                      </div>
                      <button
                        onClick={sendPreview}
                        disabled={!emailValid}
                        className="btn-ink btn-plum btn-sm"
                      >
                        {`Preview anfordern`}
                      </button>
                    </div>
                  ) : null}
                  {lines.map((line, i) => (
                    <p
                      key={i}
                      className={
                        line.startsWith("> 200 OK")
                          ? "text-emerald-300"
                          : line.startsWith("> request failed")
                            ? "text-red-400"
                            : "text-white/80"
                      }
                    >
                      {line}
                      {i === lines.length - 1 && phase === "sending" ? (
                        <span className="ml-1 inline-block h-3.5 w-2 animate-pulse bg-white/80" />
                      ) : null}
                    </p>
                  ))}
                  {error ? <p className="text-red-400">{`> error: ${error}`}</p> : null}
                  {phase === "done" ? (
                    <div className="space-y-4 rounded-xl bg-[#fffdf8] p-5 font-sans text-ink">
                      <p className="leading-relaxed">
                        <span className="font-bold text-plum">{`Preview ist unterwegs. `}</span>
                        {`Die gerenderte PNG-Vorschau deines Briefs kommt in wenigen Minuten in dein Postfach. Einen echten Brief auf Papier, geschrieben von unseren Plottern in München, bekommst du hier:`}
                      </p>
                      <button onClick={() => setModalOpen(true)} className="btn-ink btn-paper btn-sm">
                        <PackageOpen className="h-4 w-4" />
                        {`Echten Testbrief anfordern`}
                      </button>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-display text-3xl font-semibold tracking-tight">
              Oder direkt aus deinem Code.
            </h3>
            <p className="text-sm text-ink-soft">Ein Request, ein Brief.</p>
          </div>
          <CodeTabs />
        </Reveal>
      </div>

      <SamplePackageModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
