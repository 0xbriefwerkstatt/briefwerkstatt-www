const stats = [
  {
    value: "< 5 %",
    label: "Reply-Rate bei B2B-Cold-Mails",
    note: "Der Durchschnitt in deinem Outreach-Tool. Der Rest wird nicht mal geöffnet.",
  },
  {
    value: "0,3 %",
    label: "Spam-Cutoff bei Google",
    note: "Ab dieser Beschwerderate landet deine Domain auf der Blocklist. Ein schlechter Tag reicht.",
  },
  {
    value: "50+",
    label: "Pitches, die dein Lead pro Tag löscht",
    note: "Reflexartig. Auch deinen. Auch wenn dein Produkt besser ist.",
  },
];

export function DevPain() {
  return (
    <section className="relative bg-[#0a0a12] py-20 text-white lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-3xl space-y-6">
          <p className="font-mono text-sm text-[#c65db3]">{`// das problem`}</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {`Es wird digital immer schwerer, B2B-Kunden zu erreichen. `}
            <span className="text-zinc-500">{`Und du kannst nichts dafür.`}</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            {`Aktuelle Daten zeigen: Die durchschnittliche Reply-Rate bei B2B-Cold-Mails liegt bei unter 5 %. Googles Spam-Filter blockieren Domains rigoros ab 0,3 % Beschwerderate. LinkedIn ist völlig von KI-Agenten überlaufen.`}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#c65db3]/40"
            >
              <div className="font-mono text-4xl font-bold text-white lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-3 font-medium text-zinc-200">{stat.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{stat.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#781E69]/20 to-transparent p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-zinc-300">
            {`Jeder kann heute für 20 Euro tausende Spam-Mails generieren. Das digitale Postfach deiner Zielgruppe ist ein Schlachtfeld. Wenn dein idealer Kunde jeden Tag 50 Pitches reflexartig löscht, geht dein überragendes Produkt einfach unter. `}
            <span className="text-white">{`Ich verstehe deinen Frust: Du bist Gründer. Du willst bauen und wachsen, nicht gegen Spam-Filter kämpfen.`}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
