import { Header } from "./Header";
import { Footer } from "./Footer";
import { Shield } from "lucide-react";

export function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">Datenschutzerklärung</h1>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl mb-3">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl mb-3">Datenerfassung auf dieser Website</h3>
              
              <h4 className="text-lg mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p className="text-muted-foreground mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <h4 className="text-lg mb-2">Wie erfassen wir Ihre Daten?</h4>
              <p className="text-muted-foreground mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-muted-foreground mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h4 className="text-lg mb-2">Wofür nutzen wir Ihre Daten?</h4>
              <p className="text-muted-foreground mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="text-muted-foreground mb-4">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>

              <h4 className="text-lg mb-2">Analyse-Tools und Tools von Drittanbietern</h4>
              <p className="text-muted-foreground mb-4">
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
              </p>
              <p className="text-muted-foreground mb-4">
                Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
              
              <h3 className="text-xl mb-3">Nutzung von Netlify</h3>
              <p className="text-muted-foreground mb-4">
                Unsere Website wird von Netlify gehostet. Wenn Sie eine unserer Webseiten aufrufen, baut Ihr Browser daher eine Verbindung zu einem Server von Netlify, Inc., 610 22nd Street, Suite 315, San Francisco, CA 94107, USA auf. Dieser speichert dabei einige Informationen über die Verbindung in einer sogenannten Logdatei. Wir haben keinen Zugriff auf diese Logdateien.
              </p>
              <p className="text-muted-foreground mb-4">
                Netlify erhebt folgende personenbezogene Daten: IP-Adresse, Datum und Uhrzeit der Anfrage, Übertragene Datenmenge, Zugriffsstatus (HTTP-Status) und Websites, von denen das System des Nutzers auf unsere Internetseite gelangt (Referrer URL). Diese Daten werden von Netlify für 30 Tage gespeichert.
              </p>

              <h3 className="text-xl mb-3">Externes Hosting</h3>
              <p className="text-muted-foreground mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
              </p>
              <p className="text-muted-foreground mb-4">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="mb-1">Netlify, Inc.,</p>
                <p className="mb-1">610 22nd Street, Suite 315</p>
                <p className="mb-1">San Francisco, CA 94107</p>
                <p>USA</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl mb-3">Datenschutz</h3>
              <p className="text-muted-foreground mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="text-muted-foreground mb-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>

              <h3 className="text-xl mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="mb-1">BitFlow GmbH</p>
                <p className="mb-1">Hr. Florian Weigand</p>
                <p className="mb-1">Tengstr. 26</p>
                <p className="mb-1">80798 München</p>
                <p className="mb-1">Telefon: +49 89 1250 1227 0</p>
                <p>E-Mail: privacy@bitflow.de</p>
              </div>

              <h3 className="text-xl mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
              <p className="text-muted-foreground mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>

              <h3 className="text-xl mb-3">Widerspruchsrecht gegen die Datenerhebung</h3>
              <p className="text-muted-foreground mb-4 uppercase text-sm">
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. E oder F DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl mb-3">Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>

              <h3 className="text-xl mb-3">Kontaktformular</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-xl mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">5. Analyse-Tools und Werbung</h2>
              
              <h3 className="text-xl mb-3">Microsoft Clarity (ohne Cookies)</h3>
              <p className="text-muted-foreground mb-4">
                Diese Website nutzt Clarity, wobei das Tracking von Nutzern durch ein Cookie von uns deaktiviert wurde. Anbieter ist die Microsoft Ireland Operations Limited. Clarity ist ein Werkzeug zur Analyse des Nutzerverhaltens auf dieser Website.
              </p>
              <p className="text-muted-foreground mb-4">
                Die Verwendung dieses Dienstes erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; der Websitebetreiber hat ein berechtigtes Interesse an einer effektiven Nutzeranalyse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">6. Newsletter</h2>
              
              <h3 className="text-xl mb-3">Newsletterdaten</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">7. Plugins und Tools</h2>
              
              <h3 className="text-xl mb-3">Pipedrive CRM</h3>
              <p className="text-muted-foreground mb-4">
                Wir nutzen Pipedrive als unser CRM-Tool zur Verarbeitung und Speicherung der Kontaktdaten. Bei der Kontaktaufnahme mit uns werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet.
              </p>

              <h3 className="text-xl mb-3">Microsoft Teams</h3>
              <p className="text-muted-foreground mb-4">
                Wir nutzen den Dienst „Microsoft Teams" um Online-Meetings, Videokonferenzen und/oder Webinare durchzuführen. Im Rahmen der Nutzung werden Daten der Kommunikationsteilnehmer verarbeitet und auf Servern von Microsoft Teams gespeichert.
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
