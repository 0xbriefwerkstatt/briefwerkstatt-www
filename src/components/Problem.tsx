import { Card, CardContent } from "./ui/card";
import { ShieldOff, Mail, MousePointerClick } from "lucide-react";

export function Problem() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="problem">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {`Das 80%-Problem: Die legale Goldgrube in Ihrer Datenbank.`}
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {`80% Ihrer Kunden erreichen Sie digital gar nicht mehr (kein Opt-in, Spam, Ad-Blocker). Wir öffnen Ihnen die Tür zu diesen 100% legalen Goldgruben.`}
          </p>
        </div>

        {/* Three Column Problem Statement */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: No Opt-In */}
          <Card className="border-destructive/30 bg-gradient-to-br from-white to-destructive/5">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 rounded-lg bg-destructive/10 flex items-center justify-center">
                <ShieldOff className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {`Kein E-Mail Opt-in`}
              </h3>
              <p className="text-base text-muted-foreground">
                {`Die Mehrheit Ihrer Bestandskunden hat Ihre E-Mails nie abonniert. DSGVO verbietet den Kontakt. Diese Goldgruben liegen brach.`}
              </p>
            </CardContent>
          </Card>

          {/* Column 2: Spam Folder */}
          <Card className="border-destructive/30 bg-gradient-to-br from-white to-destructive/5">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {`Spam-Filter & Ignoranz`}
              </h3>
              <p className="text-base text-muted-foreground">
                {`Selbst mit Opt-in: E-Mails landen im Spam oder werden übersehen. Öffnungsraten < 20% sind die neue Normalität.`}
              </p>
            </CardContent>
          </Card>

          {/* Column 3: Ad Blocker */}
          <Card className="border-destructive/30 bg-gradient-to-br from-white to-destructive/5">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 rounded-lg bg-destructive/10 flex items-center justify-center">
                <MousePointerClick className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {`Ad-Blocker & Tracking-Schutz`}
              </h3>
              <p className="text-base text-muted-foreground">
                {`Retargeting-Pixel werden blockiert. Cookie-Banner verhindern Tracking. Digitales Retargeting wird unmöglich.`}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Solution Preview */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            {`Die Lösung: Der Briefkasten ist 100% legal zugänglich`}
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {`Postanschrift haben Sie bereits. Briefpost ist rechtlich unbedenklich. Keine Opt-in-Pflicht. Kein Spam-Filter. Kein Ad-Blocker. Nur reine, messbare Aufmerksamkeit.`}
          </p>
        </div>
      </div>
    </section>
  );
}
