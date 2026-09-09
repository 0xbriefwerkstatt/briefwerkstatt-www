import { Card, CardContent } from "./ui/card";
import { Upload, Zap, CheckCircle } from "lucide-react";

export function TwoWays() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
            Zwei Wege zum Erfolg
            <br />
            <span className="text-primary">Sie entscheiden, wie einfach es sein soll</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Ob Sie einmalig 200 Weihnachtskarten versenden oder dauerhaft Geburtstagsbriefe automatisieren wollen, 
            wir haben die perfekte L{"\u00f6"}sung f{"\u00fc"}r Sie.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 font-medium">
            Vollautomatischer Versand: Sobald eine Bestellung im Shop eingeht, schreibt unser Roboter die passende Dankeskarte – ohne dass Ihr Kunde einen Finger r{"\u00fc"}hren muss.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Der einfache Weg */}
          <Card className="border-2 border-border/50 hover:border-primary/40 transition-all hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-2">
                    Sofort starten
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Der einfache Weg</h3>
                  <p className="text-muted-foreground">Perfekt für einmalige Kampagnen</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Excel/CSV hochladen</p>
                    <p className="text-sm text-muted-foreground">Ihre bestehende Kundenliste, keine Umformatierung nötig</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Text & Design wählen</p>
                    <p className="text-sm text-muted-foreground">Vorlagen nutzen oder eigenen Text eingeben</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Absenden - fertig</p>
                    <p className="text-sm text-muted-foreground">Wir kümmern uns um Druck, Handschrift und Versand</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm font-medium mb-2">💡 Ideal für:</p>
                <p className="text-sm text-muted-foreground">
                  Weihnachtskarten, Messe-Nachfass, Quartalsaktion, Event-Einladungen
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Der Profi-Weg */}
          <Card className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-lg bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="inline-block bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full mb-2">
                    Empfohlen
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Der Profi-Weg</h3>
                  <p className="text-muted-foreground">Einmal einrichten, nie wieder kümmern</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">CRM-Anbindung</p>
                    <p className="text-sm text-muted-foreground">Verbinden Sie Salesforce, HubSpot, Pipedrive oder Ihr System</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Automatische Trigger</p>
                    <p className="text-sm text-muted-foreground">Geburtstag? Brief geht raus. Neukunde? Willkommensbrief. Jubiläum? Glückwunsch.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Tracking & Analytics</p>
                    <p className="text-sm text-muted-foreground">Sehen Sie in Ihrem System, wer den Brief geöffnet hat</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <p className="text-sm font-medium mb-2">💡 Ideal für:</p>
                <p className="text-sm text-muted-foreground">
                  Geburtstags-Autopilot, Onboarding-Prozesse, Lead-Nurturing, Kundenbindung
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-muted/50 rounded-xl p-6 sm:p-8 max-w-2xl">
            <p className="text-lg sm:text-xl font-medium mb-3">
              Sie sind sich unsicher, welcher Weg für Sie der richtige ist?
            </p>
            <p className="text-muted-foreground">
              Kein Problem! Starten Sie einfach mit dem Upload-Weg und upgraden Sie später zur Automatisierung. 
              Oder lassen Sie sich in einem Demo-Termin beraten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}