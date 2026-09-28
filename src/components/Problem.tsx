import { Card, CardContent } from "./ui/card";
import { Inbox, Bot, MailX } from "lucide-react";

export function Problem() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="problem">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {`Digital ist es laut geworden.`}
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {`Ihre wichtigsten Kunden und Leads bekommen jeden Tag Dutzende automatisierte Nachrichten. Wer dort nur eine weitere schickt, wird überlesen.`}
          </p>
        </div>

        {/* Three Column Problem Statement */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Full inboxes */}
          <Card className="border-destructive/30 bg-gradient-to-br from-white to-destructive/5">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Inbox className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {`Überfüllte Inboxen`}
              </h3>
              <p className="text-base text-muted-foreground">
                {`LinkedIn-Postfach, E-Mail, Messenger: Automatisierte Follow-ups stapeln sich. Besonders nach Messen und Events geht Ihre Nachricht in der Masse unter.`}
              </p>
            </CardContent>
          </Card>

          {/* Column 2: AI pitches */}
          <Card className="border-destructive/30 bg-gradient-to-br from-white to-destructive/5">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Bot className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {`AI-generierte Massen-Pitches`}
              </h3>
              <p className="text-base text-muted-foreground">
                {`Seit jeder per KI personalisierte Nachrichten verschicken kann, klingen alle gleich. Empfänger haben gelernt, sie zu ignorieren.`}
              </p>
            </CardContent>
          </Card>

          {/* Column 3: Spam & opt-in */}
          <Card className="border-destructive/30 bg-gradient-to-br from-white to-destructive/5">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 rounded-lg bg-destructive/10 flex items-center justify-center">
                <MailX className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {`Spam-Filter & fehlendes Opt-in`}
              </h3>
              <p className="text-base text-muted-foreground">
                {`E-Mails landen im Spam oder dürfen ohne Einwilligung gar nicht erst verschickt werden. Ads werden geblockt.`}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Solution Preview */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            {`Deshalb machen wir es analog.`}
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {`Ein echter Brief landet nicht im Spam-Filter, sondern auf dem Schreibtisch. Er wird geöffnet, gelesen und bleibt liegen und ist dank QR-Code trotzdem so messbar wie eine digitale Kampagne.`}
          </p>
        </div>
      </div>
    </section>
  );
}
