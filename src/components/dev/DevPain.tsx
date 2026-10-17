import { CountUp, Eyebrow, Reveal, Scribble } from "../paper/Ink";
import { InboxVsDesk } from "./InboxVsDesk";

const stats = [
  {
    value: <CountUp to={5} prefix="< " suffix=" %" />,
    label: "Reply-Rate bei B2B-Cold-Mails",
    note: "Der Durchschnitt in deinem Outreach-Tool. Der Rest wird nicht mal geöffnet.",
    bg: "bg-white",
  },
  {
    value: <CountUp to={0.3} decimals={1} suffix=" %" />,
    label: "Spam-Cutoff bei Google",
    note: "Ab dieser Beschwerderate landet deine Domain auf der Blocklist. Ein schlechter Tag reicht.",
    bg: "bg-blush",
  },
  {
    value: <CountUp to={50} suffix="+" />,
    label: "Pitches, die dein Lead pro Tag löscht",
    note: "Reflexartig. Auch deinen. Auch wenn dein Produkt besser ist.",
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

        <Reveal className="mt-24">
          <p className="mb-8 text-center font-hand text-3xl text-plum sm:text-4xl">
            Zwei Wege zum selben Lead. Rate mal, welcher ankommt.
          </p>
          <InboxVsDesk />
        </Reveal>

        <Reveal className="mx-auto mt-24 max-w-4xl">
          <div className="relative rounded-3xl border border-ink/10 bg-sun/70 p-8 shadow-lift sm:p-12">
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
