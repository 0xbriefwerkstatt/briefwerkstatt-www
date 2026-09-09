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
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <h4 className="text-lg mb-2">Wie erfassen wir Ihre Daten?</h4>
              <p className="text-muted-foreground mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder die Sie bei einer Bestellung angeben.
              </p>
              <p className="text-muted-foreground mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h4 className="text-lg mb-2">Wofür nutzen wir Ihre Daten?</h4>
              <p className="text-muted-foreground mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten benötigen wir zur Abwicklung der von Ihnen abgeschlossenen Verträge, insbesondere zur Bearbeitung und Zustellung Ihrer Bestellungen sowie zur Verwaltung von Abonnements. Weitere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h4 className="text-lg mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p className="text-muted-foreground mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="text-muted-foreground mb-4">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">2. Hosting und Content Delivery Network (CDN)</h2>

              <h3 className="text-xl mb-3">Vercel</h3>
              <p className="text-muted-foreground mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet. Anbieter ist die Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA (nachfolgend „Vercel").
              </p>
              <p className="text-muted-foreground mb-4">
                Wenn Sie unsere Website aufrufen, baut Ihr Browser eine Verbindung zu einem Server von Vercel auf. Dabei werden technisch bedingt Verbindungsdaten verarbeitet, insbesondere IP-Adresse, Datum und Uhrzeit der Anfrage, übertragene Datenmenge, Zugriffsstatus und Referrer-URL. Vercel betreibt zudem ein Content Delivery Network, über das Inhalte dieser Website ausgeliefert werden.
              </p>
              <p className="text-muted-foreground mb-4">
                Der Einsatz von Vercel erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="text-muted-foreground mb-4">
                Vercel verarbeitet Daten auch in den USA. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert; die Datenübermittlung stützt sich auf den Angemessenheitsbeschluss der EU-Kommission nach Art. 45 DSGVO. Die Zertifizierung können Sie über die offizielle Liste unter <a href="https://www.dataprivacyframework.gov/list" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/list</a> einsehen. Ergänzend haben wir mit Vercel einen Vertrag über Auftragsverarbeitung nach Art. 28 DSGVO geschlossen.
              </p>
              <p className="text-muted-foreground">
                Weitere Informationen: <a href="https://vercel.com/legal/privacy-notice" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-notice</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-xl mb-3">Datenschutz</h3>
              <p className="text-muted-foreground mb-4">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="text-muted-foreground mb-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>

              <h3 className="text-xl mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="mb-1">Briefwerkstatt Florian Weigand</p>
                <p className="mb-1">Tengstraße 26</p>
                <p className="mb-1">80798 München</p>
                <p className="mb-1">Telefon: <a href="tel:+4915236915099" className="text-primary hover:underline">+49 152 3691 5099</a></p>
                <p>E-Mail: <a href="mailto:info@briefwerkstatt.com" className="text-primary hover:underline">info@briefwerkstatt.com</a></p>
              </div>
              <p className="text-muted-foreground mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>

              <h3 className="text-xl mb-3">Speicherdauer</h3>
              <p className="text-muted-foreground mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>

              <h3 className="text-xl mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="text-muted-foreground mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl mb-3">Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)</h3>
              <p className="text-muted-foreground mb-4">
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
              </p>
              <p className="text-muted-foreground mb-4">
                Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen. Widersprechen Sie, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet.
              </p>

              <h3 className="text-xl mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="text-muted-foreground mb-4">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht, Promenade 27, 91522 Ansbach.
              </p>

              <h3 className="text-xl mb-3">Recht auf Datenübertragbarkeit</h3>
              <p className="text-muted-foreground mb-4">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <h3 className="text-xl mb-3">Auskunft, Berichtigung und Löschung</h3>
              <p className="text-muted-foreground mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>

              <h3 className="text-xl mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
              <p className="text-muted-foreground mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl mb-3">Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>
              <p className="text-muted-foreground mb-4">
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. Warenkorbfunktion) oder zur Optimierung der Website erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Soweit eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
              </p>

              <h3 className="text-xl mb-3">Server-Log-Dateien</h3>
              <p className="text-muted-foreground mb-4">
                Der Provider dieser Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
              </p>
              <p className="text-muted-foreground mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="text-xl mb-3">Kontaktformular</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-muted-foreground mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>

              <h3 className="text-xl mb-3">Anfrage per E-Mail oder Telefon</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">5. Bestellabwicklung, Kundenkonto und Abonnement</h2>

              <h3 className="text-xl mb-3">Verarbeitung von Kunden- und Vertragsdaten</h3>
              <p className="text-muted-foreground mb-4">
                Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und Vertragsdaten, soweit sie für die Begründung, inhaltliche Ausgestaltung und Änderung des Vertragsverhältnisses erforderlich sind. Hierzu zählen insbesondere Name, Anschrift, E-Mail-Adresse sowie die Angaben zu Empfängerinnen und Empfängern der von Ihnen beauftragten Sendungen.
              </p>
              <p className="text-muted-foreground mb-4">
                Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht, sobald sie für die Zweckerreichung nicht mehr erforderlich sind. Gesetzliche Aufbewahrungspflichten, insbesondere handels- und steuerrechtliche Fristen von sechs bzw. zehn Jahren, bleiben unberührt.
              </p>

              <h3 className="text-xl mb-3">Inhalte von Sendungen</h3>
              <p className="text-muted-foreground mb-4">
                Soweit Sie uns im Rahmen einer Bestellung Inhalte für einen Brief übermitteln, verarbeiten wir diese ausschließlich zum Zweck der Erstellung und Versendung der beauftragten Sendung. Die Inhalte werden nicht zu anderen Zwecken ausgewertet und nicht an Dritte weitergegeben, soweit dies nicht zur Vertragserfüllung erforderlich ist.
              </p>

              <h3 className="text-xl mb-3">Angaben zu Empfängerinnen und Empfängern</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns Namen und Anschriften dritter Personen zum Zweck der Zustellung mitteilen, verarbeiten wir diese Daten in Ihrem Auftrag zur Vertragserfüllung. Sie sind dafür verantwortlich, dass Sie zur Weitergabe dieser Daten berechtigt sind.
              </p>

              <h3 className="text-xl mb-3">Versand durch die Deutsche Post</h3>
              <p className="text-muted-foreground mb-4">
                Für die Zustellung der von Ihnen beauftragten Sendungen setzen wir die Deutsche Post AG, Charles-de-Gaulle-Straße 20, 53113 Bonn, ein. Hierzu übermitteln wir die für die Zustellung erforderlichen Daten, insbesondere Name und Anschrift der Empfängerin oder des Empfängers.
              </p>
              <p className="text-muted-foreground mb-4">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, da die Übermittlung zur Erfüllung des mit Ihnen geschlossenen Vertrags erforderlich ist. Die Deutsche Post AG verarbeitet diese Daten als eigenständig Verantwortliche im Rahmen der postalischen Beförderung.
              </p>
              <p className="text-muted-foreground">
                Weitere Informationen: <a href="https://www.deutschepost.de/de/d/datenschutz.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.deutschepost.de/de/d/datenschutz.html</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">6. Zahlungsdienstleister</h2>

              <h3 className="text-xl mb-3">Stripe</h3>
              <p className="text-muted-foreground mb-4">
                Auf dieser Website bieten wir die Bezahlung über den Dienst Stripe an. Anbieter für Kunden innerhalb der EU ist die Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland (nachfolgend „Stripe").
              </p>
              <p className="text-muted-foreground mb-4">
                Wenn Sie sich für eine Zahlung über Stripe entscheiden, werden die von Ihnen eingegebenen Zahlungsdaten an Stripe übermittelt. Die Übermittlung Ihrer Daten an Stripe erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags). Sie haben die Möglichkeit, Ihre Einwilligung zur Datenverarbeitung jederzeit zu widerrufen. Die Rechtmäßigkeit bereits erfolgter Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
              <p className="text-muted-foreground mb-4">
                Zahlungsdaten wie Kreditkartennummern werden von uns nicht gespeichert; die Verarbeitung erfolgt ausschließlich bei Stripe. Eine Übermittlung von Daten in die USA im Rahmen der Konzernstruktur von Stripe wird auf Standardvertragsklauseln der EU-Kommission gestützt.
              </p>
              <p className="text-muted-foreground">
                Details zur Datenverarbeitung durch Stripe: <a href="https://stripe.com/de/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/de/privacy</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">7. Newsletter und E-Mail-Versand</h2>

              <h3 className="text-xl mb-3">Brevo</h3>
              <p className="text-muted-foreground mb-4">
                Diese Website nutzt Brevo für den Versand von Newslettern sowie für den Versand transaktionsbezogener E-Mails (z. B. Bestellbestätigungen). Anbieter ist die Brevo GmbH, Köpenicker Str. 126, 10179 Berlin (nachfolgend „Brevo").
              </p>
              <p className="text-muted-foreground mb-4">
                Brevo ist ein Dienst, mit dem unter anderem der Versand von E-Mails organisiert und analysiert werden kann. Die von Ihnen zum Zwecke des Newsletterbezugs eingegebenen Daten werden auf den Servern von Brevo gespeichert.
              </p>
              <p className="text-muted-foreground mb-4">
                Datenanalyse durch Brevo: Mit Hilfe von Brevo ist es uns möglich, unsere Newsletter-Kampagnen zu analysieren. So können wir sehen, ob eine Nachricht geöffnet und welche Links angeklickt wurden. Auf diese Weise können wir feststellen, welche Inhalte besonders relevant sind. Diese Analyse erfolgt auf Grundlage Ihrer Einwilligung.
              </p>
              <p className="text-muted-foreground mb-4">
                Rechtsgrundlage: Die Datenverarbeitung im Rahmen des Newsletterversands erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen, indem Sie den Newsletter abbestellen. Die Anmeldung erfolgt im Double-Opt-in-Verfahren; hierbei werden Ihre IP-Adresse sowie Datum und Uhrzeit der Anmeldung und der Bestätigung protokolliert, um die Anmeldung nachweisen zu können.
              </p>
              <p className="text-muted-foreground mb-4">
                Der Versand transaktionsbezogener E-Mails im Rahmen einer Bestellung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p className="text-muted-foreground mb-4">
                Speicherdauer: Die von Ihnen zum Zwecke des Newsletterbezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters aus der Verteilerliste gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.
              </p>
              <p className="text-muted-foreground">
                Wir haben mit Brevo einen Vertrag über Auftragsverarbeitung nach Art. 28 DSGVO geschlossen. Weitere Informationen: <a href="https://www.brevo.com/de/legal/privacypolicy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.brevo.com/de/legal/privacypolicy/</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">8. Analyse-Tools</h2>

              <h3 className="text-xl mb-3">Microsoft Clarity</h3>
              <p className="text-muted-foreground mb-4">
                Diese Website nutzt Clarity, ein Werkzeug zur Analyse des Nutzerverhaltens. Anbieter ist die Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland.
              </p>
              <p className="text-muted-foreground mb-4">
                Mit Clarity können unter anderem Seitenaufrufe, Klicks und Bewegungen des Mauszeigers ausgewertet sowie Sitzungsaufzeichnungen und Heatmaps erstellt werden. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit für die Zukunft widerrufbar.
              </p>
              <p className="text-muted-foreground mb-4">
                Microsoft verarbeitet Daten auch außerhalb der EU. Die Datenübermittlung in die USA wird auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework sowie ergänzend auf Standardvertragsklauseln gestützt.
              </p>
              <p className="text-muted-foreground">
                Weitere Informationen: <a href="https://privacy.microsoft.com/de-de/privacystatement" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://privacy.microsoft.com/de-de/privacystatement</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">9. Werbung und Conversion-Tracking</h2>
              <p className="text-muted-foreground mb-4">
                Zur Messung des Erfolgs unserer Werbekampagnen und zur Ausspielung interessenbezogener Werbung setzen wir die nachfolgend genannten Dienste ein. Alle diese Dienste werden ausschließlich nach Ihrer ausdrücklichen Einwilligung im Cookie-Banner geladen. Rechtsgrundlage ist jeweils Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit Wirkung für die Zukunft widerrufbar.
              </p>
              <p className="text-muted-foreground mb-4">
                Bei allen genannten Diensten kann eine Übermittlung von Daten in die USA nicht ausgeschlossen werden. Die Übermittlung wird auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework sowie ergänzend auf Standardvertragsklauseln gestützt.
              </p>

              <h3 className="text-xl mb-3">Meta-Pixel</h3>
              <p className="text-muted-foreground mb-4">
                Anbieter ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
              </p>
              <p className="text-muted-foreground mb-4">
                Mit Hilfe des Meta-Pixels können wir nachvollziehen, welche Handlungen Sie nach dem Anklicken einer unserer Werbeanzeigen auf dieser Website vornehmen. Auf dieser Grundlage können wir die Wirksamkeit unserer Anzeigen auswerten und Ihnen auf Plattformen von Meta weitere Anzeigen ausspielen, die zu Ihren Interessen passen. Die erhobenen Daten sind für uns nicht einsehbar, können jedoch von Meta gespeichert und mit Ihrem Nutzerkonto verknüpft werden.
              </p>
              <p className="text-muted-foreground mb-4">
                Wir haben mit Meta eine Vereinbarung über die gemeinsame Verarbeitung personenbezogener Daten nach Art. 26 DSGVO geschlossen. Darin ist festgelegt, welche Pflichten jeweils bei uns und bei Meta liegen; die wesentlichen Inhalte finden Sie unter <a href="https://www.facebook.com/legal/controller_addendum" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/controller_addendum</a>. Für die Wahrnehmung Ihrer Betroffenenrechte können Sie sich sowohl an uns als auch an Meta wenden.
              </p>
              <p className="text-muted-foreground mb-4">
                Weitere Informationen: <a href="https://de-de.facebook.com/privacy/policy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://de-de.facebook.com/privacy/policy/</a>
              </p>

              <h3 className="text-xl mb-3">Google Ads Conversion-Tracking und Remarketing</h3>
              <p className="text-muted-foreground mb-4">
                Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-muted-foreground mb-4">
                Wir nutzen Google Ads, um auf externen Websites auf unsere Angebote aufmerksam zu machen. Mit Hilfe des Conversion-Trackings können wir feststellen, ob nach dem Klick auf eine Anzeige eine von uns definierte Handlung, etwa eine Bestellung, erfolgt ist. Über Remarketing können Ihnen unsere Anzeigen erneut ausgespielt werden, nachdem Sie unsere Website besucht haben.
              </p>
              <p className="text-muted-foreground mb-4">
                Weitere Informationen: <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
              </p>

              <h3 className="text-xl mb-3">Pinterest-Tag</h3>
              <p className="text-muted-foreground mb-4">
                Anbieter ist die Pinterest Europe Ltd., Palmerston House, 2nd Floor, Fenian Street, Dublin 2, Irland.
              </p>
              <p className="text-muted-foreground mb-4">
                Der Pinterest-Tag ermöglicht es uns, das Verhalten von Nutzerinnen und Nutzern nachzuvollziehen, die über eine Anzeige auf Pinterest auf unsere Website gelangt sind, und die Wirksamkeit unserer dortigen Kampagnen auszuwerten.
              </p>
              <p className="text-muted-foreground">
                Weitere Informationen: <a href="https://policy.pinterest.com/de/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policy.pinterest.com/de/privacy-policy</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">10. Videos</h2>

              <h3 className="text-xl mb-3">Wistia</h3>
              <p className="text-muted-foreground mb-4">
                Auf dieser Website binden wir Videos über den Dienst Wistia ein. Anbieter ist die Wistia, Inc., 120 Brookline Street, Cambridge, Massachusetts 02139, USA (nachfolgend „Wistia").
              </p>
              <p className="text-muted-foreground mb-4">
                Wenn Sie eine Seite mit einem eingebundenen Video aufrufen, wird eine Verbindung zu den Servern von Wistia hergestellt. Dabei werden technisch bedingt Verbindungsdaten wie Ihre IP-Adresse verarbeitet. Wistia erhebt darüber hinaus Daten zur Nutzung des Videoplayers, etwa zu Aufrufen und Abspieldauer, und setzt hierfür Cookies oder vergleichbare Technologien ein.
              </p>
              <p className="text-muted-foreground mb-4">
                Die Nutzung von Wistia erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit für die Zukunft widerrufbar.
              </p>
              <p className="text-muted-foreground mb-4">
                Wistia verarbeitet Daten in den USA. Wistia ist unter dem EU-US Data Privacy Framework zertifiziert; ergänzend werden Standardvertragsklauseln eingesetzt.
              </p>
              <p className="text-muted-foreground">
                Weitere Informationen: <a href="https://wistia.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://wistia.com/privacy</a>
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
