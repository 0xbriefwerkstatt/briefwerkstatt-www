import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Alles, was Sie über die Briefwerkstatt wissen müssen.
          </p>
        </div>

        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-primary">
                {section.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${sectionIndex}-${index}`} 
                    className="border border-border/50 rounded-lg px-6 bg-background"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground whitespace-pre-line pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Tech Support Hint */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Noch eine technische Frage? Schreiben Sie direkt an unsere API-Entwickler:{" "}
            <a 
              href="mailto:dev@briefwerkstatt.com" 
              className="text-primary hover:underline font-medium"
            >
              dev@briefwerkstatt.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
