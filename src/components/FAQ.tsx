import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqSections = [
  {
    category: "Strategie & White-Labeling",
    questions: [
      {
        question: "Kann ich den Service als White-Label-Lösung für meine Kunden nutzen?",
        answer: "Ja, absolut! Im Partner-Tarif ist unser Service zu 100% White-Label. Auf dem Briefumschlag steht Ihr Kunde (oder Sie) als Absender. Wir tauchen nirgendwo auf – weder im Briefpapier, noch auf dem Kuvert, noch im Tracking-Link (neutrale Domain). Als E-Commerce-Betreiber nutzen Sie den Service direkt unter Ihrer eigenen Marke."
      },
      {
        question: "Kann ich meine eigenen Preise festlegen (für Agenturen)?",
        answer: "Absolut. Wir berechnen Ihnen den günstigen Wholesale-Einkaufspreis. Sie entscheiden selbst, mit welcher Marge Sie den Service an Ihre Kunden weiterverkaufen. Viele unserer Partner bündeln die Briefe in monatliche Retainer-Pakete."
      },
      {
        question: "Wie funktioniert das mit dem Briefpapier?",
        answer: "Sie haben zwei Möglichkeiten:\\n\\nDigitaler Druck: Wir drucken das Logo/Briefpapier (Ihres Unternehmens oder Ihrer Kunden) digital in High-Quality auf unser Premium-Papier (Munke/Gmund) und schreiben dann darauf.\\n\\nVordrucke: Bei großen Volumen können Sie uns das originale Briefpapier nach München ins Lager senden."
      }
    ]
  },
  {
    category: "Technik & Integration",
    questions: [
      {
        question: "Welche CRM-Systeme und E-Commerce-Plattformen werden unterstützt?",
        answer: "Wir sind \\\"Tech-First\\\". Über unsere API und Zapier-Integration können Sie uns an fast jedes moderne Tool anbinden: HubSpot, Salesforce, Pipedrive, Shopify, Klaviyo, WooCommerce, GoHighLevel und viele mehr. Für einfache Kampagnen reicht auch ein CSV-Upload."
      },
      {
        question: "Was sind \\\"Variable Daten\\\"?",
        answer: "Unsere Roboter schreiben nicht nur statische Texte. Sie können beliebige Variablen im Fließtext nutzen: \\\"Hallo [Vorname], danke für den Kauf von [Produkt] am [Datum].\\\" Das erhöht die Conversion massiv – perfekt für E-Commerce und personalisierte B2B-Kampagnen."
      },
      {
        question: "Wie funktioniert das QR-Tracking?",
        answer: "Wir drucken auf jeden Brief (oder das Kuvert) einen individuellen QR-Code. Sobald der Empfänger scannt, wird er auf die Ziel-URL weitergeleitet und der Lead in Ihrem Dashboard als \\\"Konvertiert\\\" markiert. So können Sie den ROI jeder Kampagne genau messen."
      }
    ]
  },
  {
    category: "Qualität & Versand",
    questions: [
      {
        question: "Wie \\\"echt\\\" sieht die Handschrift aus?",
        answer: "Täuschend echt. Wir nutzen echte Füllfederhalter mit blauer Tinte, keine Laserdrucker. Zudem variieren unsere Algorithmen das Schriftbild minimal (Zeilenabstand, Buchstaben-Form), genau wie eine menschliche Hand. In Blindtests erkennen 95% der Empfänger keinen Unterschied."
      },
      {
        question: "Wo wird produziert und wie schnell geht der Versand?",
        answer: "Wir produzieren an unserem Standort in München (Deutschland).\\n\\nBestellungen bis 12:00 Uhr gehen in der Regel am nächsten Werktag zur Post.\\n\\nWir nutzen die Deutsche Post für den Versand (national & international)."
      },
      {
        question: "Können die Karten direkt in unsere E-Commerce-Logistik integriert werden?",
        answer: "Ja. Wir produzieren die Karten in München und können sie entweder gesammelt an Ihr Lager schicken (für Shipping-Inserts) oder via API-Anbindung zeitgenau zum Versandzeitpunkt aussteuern. Perfekt für automatisierte Dankes-Karten im Paket."
      },
      {
        question: "Ist der Service DSGVO-konform?",
        answer: "Ja. Wir agieren als deutscher Auftragsverarbeiter. Ihre Daten (und die Ihrer Kunden) werden auf deutschen Servern gespeichert und nach der Produktion (sofern nicht anders gewünscht) automatisch gelöscht. Ein AV-Vertrag steht im Partner-Backend bereit."
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