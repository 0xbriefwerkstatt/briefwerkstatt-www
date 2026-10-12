import { Eyebrow, Reveal, Scribble } from "../paper/Ink";

const stats = [
  {
    value: "< 5 %",
    label: "Reply-Rate bei B2B-Cold-Mails",
    note: "Der Durchschnitt in deinem Outreach-Tool. Der Rest wird nicht mal geöffnet.",
    rotate: "-1.5deg",
    bg: "bg-white",
  },
  {
    value: "0,3 %",
    label: "Spam-Cutoff bei Google",
    note: "Ab dieser Beschwerderate landet deine Domain auf der Blocklist. Ein schlechter Tag reicht.",
    rotate: "1deg",
    bg: "bg-blush",
  },
  {
    value: "50+",
    label: "Pitches, die dein Lead pro Tag löscht",
    note: "Reflexartig. Auch deinen. Auch wenn dein Produkt besser ist.",
    rotate: "-0.5deg",
    bg: "bg-white",
  },
];

export function DevPain() {
  return (
    <section id="problem" className="relative bg-white py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow>Das Problem</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Es wird digital immer schwerer, B2B-Kunden zu erreichen.{" "}
            <span className="font-hand text-[1.15em] text-plum">Und du kannst nichts dafür.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Aktuelle Daten zeigen: Die durchschnittliche Reply-Rate bei B2B-Cold-Mails liegt bei unter
            5 %. Googles Spam-Filter blockieren Domains rigoros ab 0,3 % Beschwerderate. LinkedIn ist
            völlig von KI-Agenten überlaufen.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div
                className={`ink-card ink-card-hover h-full p-7 sm:p-8 ${stat.bg}`}
                style={{ rotate: stat.rotate }}
              >
                <div className="font-display text-6xl font-semibold tracking-tight text-plum lg:text-7xl">
                  {stat.value}
                </div>
                <div className="mt-4 text-lg font-bold leading-snug">{stat.label}</div>
                <p className="mt-2 leading-relaxed text-ink-soft">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-20 max-w-4xl">
          <div className="relative rotate-[-0.6deg] rounded-[4px] border-2 border-ink bg-sun/70 p-8 shadow-[6px_6px_0_0_var(--color-ink)] sm:p-12">
            <span className="tape -top-3 left-10 rotate-[-6deg]" />
            <p className="font-display text-xl leading-relaxed sm:text-2xl">
              Jeder kann heute für 20 Euro tausende Spam-Mails generieren. Das digitale Postfach deiner
              Zielgruppe ist ein Schlachtfeld. Wenn dein idealer Kunde jeden Tag 50 Pitches reflexartig
              löscht, geht dein überragendes Produkt einfach unter.
            </p>
            <p className="mt-6 font-hand text-3xl leading-tight text-plum-ink sm:text-[2.1rem]">
              Ich verstehe deinen Frust: Du bist Gründer. Du willst{" "}
              <Scribble color="var(--color-ink)">bauen und wachsen</Scribble>, nicht gegen Spam-Filter
              kämpfen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
