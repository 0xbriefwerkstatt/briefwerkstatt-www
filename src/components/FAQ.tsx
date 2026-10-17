"use client";

import { useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Eyebrow } from "./paper/Ink";

const faqSections = [
  {
    category: "Einsatz & Full-Service",
    questions: [
      {
        question: "Für welche Teams und Anwendungsfälle eignet sich die Briefwerkstatt?",
        answer: "Für alle, die ihre Zielgruppe digital kaum noch erreichen: Sales-Teams nutzen Briefe als Türöffner bei Entscheidern und für Messe-Follow-ups, Marketing-Teams für Einladungen, ABM- und Direct-Mail-Kampagnen, Growth-Teams für automatisierte Touchpoints wie Onboarding, Reaktivierung oder Churn-Prävention."
      },
      {
        question: "Was umfasst der Full-Service?",
        answer: "Im Full-Service übernehmen wir den gesamten Prozess: Wir entwickeln mit Ihnen Anlass, Botschaft und Angebot, texten den Brief, gestalten Briefpapier und Beilagen in Ihrem Branding, produzieren, versenden und werten die QR-Scans aus. Sie liefern nur die Empfängerliste. Oder wir stimmen die Zielgruppe gemeinsam ab."
      },
      {
        question: "Brauche ich für Werbebriefe eine Einwilligung der Empfänger?",
        answer: "Anders als bei E-Mail-Werbung ist für adressierte Briefwerbung in der Regel kein vorheriges Opt-in nötig. Grundlage ist meist das berechtigte Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Wichtig: Widerspricht ein Empfänger der Werbung, muss dieser Widerspruch beachtet werden. Im Zweifel empfehlen wir eine kurze Abstimmung mit Ihrem Datenschutzbeauftragten."
      }
    ]
  },
  {
    category: "Branding & White-Label",
    questions: [
      {
        question: "Kann ich die Briefe in meinem eigenen Branding versenden?",
        answer: "Ja. Auf Briefpapier und Kuvert stehen Sie als Absender, bei Bedarf vollständig mit Ihrem individuellen Briefpapier. Wir tauchen nirgends auf, auch nicht im Tracking-Link (neutrale Domain)."
      },
      {
        question: "Gibt es Konditionen für hohe Stückzahlen?",
        answer: "Ja. Bei höheren Stückzahlen und wiederkehrenden Kampagnen gibt es Rabatt. Sprechen Sie uns einfach an, wir erstellen gerne ein individuelles Angebot."
      },
      {
        question: "Wie funktioniert das mit dem Briefpapier?",
        answer: `Sie haben zwei Möglichkeiten:

Digitaler Druck: Wir drucken Ihr Briefpapier digital in High-Quality auf unser Premium-Papier und schreiben dann darauf.

Vordrucke: Bei großen Volumina senden Sie uns Ihr originales Briefpapier nach München ins Lager.`
      }
    ]
  },
  {
    category: "Technik & Integration",
    questions: [
      {
        question: "Welche CRM-Systeme und Tools werden unterstützt?",
        answer: `Wir sind „Tech-First“: Über unsere REST-API und Zapier binden Sie uns an fast jedes moderne Tool an: HubSpot, Salesforce, Pipedrive, Shopify, Klaviyo, WooCommerce, GoHighLevel und viele mehr. Für einzelne Kampagnen reicht auch ein CSV-Upload.`
      },
      {
        question: "Was sind „Variable Daten“?",
        answer: `Unsere Roboter schreiben nicht nur statische Texte. Sie nutzen beliebige Variablen im Fließtext: „Hallo [Vorname], schön, dass wir uns auf der [Messe] kennengelernt haben." Das erhöht die Conversion massiv. Perfekt für personalisierte B2B-Kampagnen, Sales-Sequenzen und E-Commerce.`
      },
      {
        question: "Wie funktioniert das QR-Tracking?",
        answer: `Wir drucken auf jeden Brief (oder das Kuvert) einen individuellen QR-Code. Sobald der Empfänger scannt, wird er auf Ihre Ziel-URL weitergeleitet und der Lead in Ihrem Dashboard (oder direkt in Ihrem CRM) als konvertiert markiert. So messen Sie den ROI jeder Kampagne genau.`
      }
    ]
  },
  {
    category: "Qualität & Versand",
    questions: [
      {
        question: "Wie „echt“ sieht die Handschrift aus?",
        answer: "Täuschend echt. Wir nutzen echte Füllfederhalter mit blauer Tinte, keine Laserdrucker. Zudem variieren unsere Algorithmen das Schriftbild minimal (Zeilenabstand, Buchstabenform), genau wie eine menschliche Hand. In Blindtests erkennen 95 % der Empfänger keinen Unterschied."
      },
      {
        question: "Wo wird produziert und wie schnell geht der Versand?",
        answer: `Wir produzieren an unserem Standort in München (Deutschland).

Bestellungen bis 12:00 Uhr gehen in der Regel am nächsten Werktag zur Post. Versand über die Deutsche Post, national und international.`
      },
      {
        question: "Können die Briefe automatisiert aus unserem System ausgelöst werden?",
        answer: "Ja. Über API oder CRM-Integration geht jeder Brief automatisch raus, etwa beim Deal-Abschluss, nach dem Onboarding oder wenn ein Kunde inaktiv wird. Sie brauchen dafür keinen Druckpartner und keine internen Kapazitäten."
      },
      {
        question: "Ist der Service DSGVO-konform?",
        answer: "Ja. Wir agieren als deutscher Auftragsverarbeiter. Ihre Daten (und die Ihrer Kunden) werden auf Servern in Deutschland (Frankfurt) gespeichert und nach der Produktion automatisch gelöscht, sofern nichts anderes gewünscht ist. Ein Auftragsverarbeitungsvertrag steht in Ihrem Account bereit."
      }
    ]
  }
];

export function FAQ() {
  const [active, setActive] = useState(0);
  const section = faqSections[active];

  return (
    <section id="faq" className="paper-grain relative scroll-mt-20 bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
            Häufig gestellte{" "}
            <span className="font-hand text-[1.2em] text-plum">Fragen</span>
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Alles, was Sie über die Briefwerkstatt wissen müssen.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5" role="tablist" aria-label="FAQ-Kategorien">
            {faqSections.map((s, i) => (
              <button
                key={s.category}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold transition-all ${
                  i === active
                    ? "bg-ink text-white shadow-glow"
                    : "bg-white hover:bg-sun"
                }`}
              >
                {s.category}
              </button>
            ))}
          </div>

          <div className="relative mt-12 hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-lift lg:block">
            <span className="tape -top-3 left-8 rotate-[-5deg]" />
            <p className="font-hand text-2xl leading-snug">
              Noch eine technische Frage? Schreib direkt an unsere API-Entwickler:
            </p>
            <a href="mailto:dev@briefwerkstatt.com" className="mt-2 inline-block font-mono text-sm font-semibold text-plum underline decoration-2 underline-offset-4">
              dev@briefwerkstatt.com
            </a>
          </div>
        </div>

        <AccordionPrimitive.Root key={active} type="single" collapsible defaultValue="q-0" className="space-y-4">
          {section.questions.map((faq, index) => (
            <AccordionPrimitive.Item
              key={faq.question}
              value={`q-${index}`}
              className="group rounded-2xl border border-ink/10 bg-white shadow-soft transition-shadow data-[state=open]:shadow-glow"
            >
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-lg font-semibold leading-snug outline-none focus-visible:underline sm:text-xl">
                  {faq.question}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-paper transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-plum group-data-[state=open]:text-white">
                    <Plus className="h-4 w-4" strokeWidth={3} />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="whitespace-pre-line px-6 pb-6 leading-relaxed text-ink-soft">
                  {faq.answer}
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>

        <p className="text-center text-ink-soft lg:hidden">
          Noch eine technische Frage?{" "}
          <a href="mailto:dev@briefwerkstatt.com" className="font-semibold text-plum underline">
            dev@briefwerkstatt.com
          </a>
        </p>
      </div>
    </section>
  );
}
