import { Header } from "./Header";
import { Footer } from "./Footer";
import { FileText } from "lucide-react";

export function Imprint() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">Impressum</h1>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Angaben gemäß § 5 DDG</h2>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-1">Briefwerkstatt</p>
                <p className="mb-1">Florian Weigand</p>
                <p className="mb-1">Tengstraße 26</p>
                <p>80798 München</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Kontakt</h2>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="mb-2">Telefon: <a href="tel:+4915236915099" className="text-primary hover:underline">+49 152 3691 5099</a></p>
                <p>E-Mail: <a href="mailto:info@briefwerkstatt.com" className="text-primary hover:underline">info@briefwerkstatt.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p className="text-muted-foreground">
                Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Haftung für Inhalte</h2>
              <p className="text-muted-foreground mb-4">
                Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-muted-foreground">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground mb-4">
                Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-muted-foreground">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

            <div className="bg-muted/30 p-6 rounded-lg mt-8">
              <p className="text-sm text-muted-foreground">
                Quelle: <a href="https://www.e-recht24.de" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}