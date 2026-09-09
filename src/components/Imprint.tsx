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
              <h2 className="text-2xl md:text-3xl mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-2 font-medium">Die Briefwerkstatt powered by</p>
                <p className="mb-1">BitFlow GmbH</p>
                <p className="mb-1">Tengstraße 26</p>
                <p className="mb-4">80798 München</p>
                <p className="mb-1">Handelsregister: HRB 221477</p>
                <p>Registergericht: Amtsgericht München</p>
              </div>

              <h3 className="text-xl mb-3">Vertreten durch:</h3>
              <p className="text-muted-foreground mb-6">Florian Weigand</p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Kontakt</h2>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="mb-2">Telefon: <a href="tel:+498912501227" className="text-primary hover:underline">+49 89 1250 1227 0</a></p>
                <p className="mb-2">Telefax: +49 89 2555 1300 35</p>
                <p>E-Mail: <a href="mailto:info@briefwerkstatt.com" className="text-primary hover:underline">info@briefwerkstatt.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Umsatzsteuer-ID</h2>
              <p className="text-muted-foreground mb-2">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </p>
              <p className="font-medium">DE303718129</p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
              <h3 className="text-xl mb-3">Name und Sitz des Versicherers:</h3>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <p className="mb-1">Hiscox SA</p>
                <p className="mb-1">Niederlassung für Deutschland</p>
                <p className="mb-1">Arnulfstraße 31</p>
                <p className="mb-3">80636 München</p>
                <p>Hauptbevollmächtigter: Markus Niederreiner</p>
              </div>

              <h3 className="text-xl mb-3">Geltungsraum der Versicherung:</h3>
              <p className="text-muted-foreground mb-4">
                Es besteht weltweiter Versicherungsschutz.
              </p>

              <h3 className="text-xl mb-3">Versicherungsscheinnummer:</h3>
              <p className="font-medium">PL-PSC806798224</p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Redaktionell Verantwortlicher</h2>
              <p className="text-muted-foreground">Florian Weigand</p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Haftung für Inhalte</h2>
              <p className="text-muted-foreground mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-muted-foreground">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-muted-foreground">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-muted-foreground">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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