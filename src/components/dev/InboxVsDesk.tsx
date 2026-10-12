"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Trash2, Inbox, MailOpen } from "lucide-react";
import { useInView } from "../paper/Ink";

const letterImg = "/assets/baf8c036e64b1e4e879710f5028d046ed28fd68c.png";

type Mail = { id: number; from: string; subject: string; mine?: boolean };

const POOL: Omit<Mail, "id">[] = [
  { from: "Growth Bot", subject: "Quick question, {{firstName}} 🚀" },
  { from: "Sales Sequenz #4", subject: "Re: Re: Re: Kurzes Follow-up" },
  { from: "AI SDR", subject: "10x deine Pipeline in 14 Tagen" },
  { from: "Du", subject: "Dein (wirklich gutes) Produkt", mine: true },
  { from: "LinkedIn", subject: "Max hat dir eine InMail gesendet" },
  { from: "Webinar Team", subject: "Letzte Chance: nur noch 3 Plätze!" },
  { from: "Outreach.ai", subject: "Saw your post, thoughts?" },
  { from: "Newsletter", subject: "Die 7 B2B-Trends, die du kennen musst" },
];

const VISIBLE = 5;

export function InboxVsDesk() {
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const next = useRef(VISIBLE);
  const [mails, setMails] = useState<Mail[]>(() =>
    POOL.slice(0, VISIBLE).map((m, i) => ({ ...m, id: i })),
  );
  const [deleting, setDeleting] = useState<number | null>(null);
  const [deleted, setDeleted] = useState(46);

  const mailsRef = useRef(mails);
  mailsRef.current = mails;

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timeouts: number[] = [];
    const t = window.setInterval(() => {
      setDeleting(mailsRef.current[0].id);
      timeouts.push(
        window.setTimeout(() => {
          const n = next.current++;
          setMails((c) => [...c.slice(1), { ...POOL[n % POOL.length], id: n }]);
          setDeleting(null);
          setDeleted((d) => d + 1);
        }, 650),
      );
    }, 1700);
    return () => {
      window.clearInterval(t);
      timeouts.forEach((x) => window.clearTimeout(x));
    };
  }, [inView]);

  return (
    <div ref={ref} className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      {/* Postfach */}
      <div className="ink-card overflow-hidden">
        <div className="flex items-center justify-between border-b-2 border-ink bg-paper px-5 py-3.5">
          <span className="flex items-center gap-2 text-sm font-bold">
            <Inbox className="h-4 w-4" /> Posteingang deines Leads
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-red-100 px-2.5 py-1 font-mono text-xs font-semibold text-red-700">
            <Trash2 className="h-3.5 w-3.5" />
            <span className="tabular-nums">{deleted}</span> heute gelöscht
          </span>
        </div>
        <ul className="relative h-[330px] overflow-hidden">
          {mails.map((m) => {
            const out = deleting === m.id;
            return (
              <li
                key={m.id}
                className={`flex items-center gap-3 overflow-hidden border-ink/10 px-5 transition-all duration-500 ${
                  m.mine ? "bg-blush" : "bg-white"
                } ${out ? "h-0 -translate-x-full border-b-0 opacity-0" : "h-[66px] translate-x-0 border-b opacity-100"}`}
                style={{ animation: "bw-mail-in .45s cubic-bezier(.22,1,.36,1)" }}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink text-xs font-bold ${
                    m.mine ? "bg-plum text-white" : "bg-paper-2"
                  }`}
                >
                  {m.from.slice(0, 2).toUpperCase()}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{m.from}</span>
                  <span className={`block truncate text-sm ${m.mine ? "text-plum" : "text-ink-soft"}`}>
                    {m.subject}
                  </span>
                </span>
                {m.mine ? (
                  <span className="shrink-0 font-hand text-xl text-plum">← deins</span>
                ) : null}
              </li>
            );
          })}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </ul>
        <p className="border-t-2 border-ink bg-paper px-5 py-3 text-sm text-ink-soft">
          Löschen geht schneller als Lesen. <strong className="text-ink">Auch bei deiner Mail.</strong>
        </p>
      </div>

      {/* Schreibtisch */}
      <div className="ink-card relative overflow-hidden bg-paper-2">
        <div className="flex items-center justify-between border-b-2 border-ink bg-paper px-5 py-3.5">
          <span className="flex items-center gap-2 text-sm font-bold">
            <MailOpen className="h-4 w-4" /> Schreibtisch deines Leads
          </span>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-700">
            1 Brief · geöffnet
          </span>
        </div>
        <div
          className="relative h-[330px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(92deg, rgba(120,72,30,.07) 0 2px, transparent 2px 46px), linear-gradient(180deg, #d9b98f, #c9a274)",
          }}
        >
          {/* Kaffeefleck */}
          <span className="absolute left-8 top-10 h-24 w-24 rounded-full border-[6px] border-[#8a5a2b]/20" />
          <div
            className={`absolute left-1/2 top-1/2 w-[46%] max-w-[210px] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
              inView ? "rotate-[-4deg] opacity-100" : "translate-y-8 rotate-[-14deg] opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-[3px] border-2 border-ink bg-white shadow-[6px_8px_0_0_rgba(27,19,32,.85)]">
              <Image src={letterImg} alt="" width={2409} height={3435} sizes="210px" className="h-auto w-full" />
            </div>
          </div>
          <div className="absolute bottom-5 right-5 rotate-[-6deg] rounded-[4px] border-2 border-ink bg-sun px-3 py-1.5 font-hand text-2xl shadow-[3px_3px_0_0_var(--color-ink)]">
            liegt da. wird gelesen.
          </div>
        </div>
        <p className="border-t-2 border-ink bg-paper px-5 py-3 text-sm text-ink-soft">
          Kein Spam-Filter, kein Wegklicken: <strong className="text-ink">98 % Öffnungsrate.</strong>
        </p>
      </div>

      <style>{`@keyframes bw-mail-in { from { opacity: 0; transform: translateY(18px); } }`}</style>
    </div>
  );
}
