import { CheckCircle, Sparkles, Bot, Monitor, Factory } from "lucide-react";
import { WistiaPlayer } from "./WistiaPlayer";

const videoHighlights = [
  {
    icon: Bot,
    title: "Roboter in Aktion",
    description: `Sehen Sie echte Roboter beim Schreiben mit F\u00fcller`
  },
  {
    icon: Monitor,
    title: "CRM-Integration",
    description: "Live-Demo der nahtlosen Anbindung"
  },
  {
    icon: Factory,
    title: "Made in Germany",
    description: "Einblick in unsere Produktion"
  }
];

export function VideoSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#781E69] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-5 mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
            <Sparkles className="w-4 h-4 text-white/80" />
            <span className="text-sm font-medium text-white/90">Video-Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white px-4">
            Sehen Sie selbst, wie es funktioniert
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto px-4">
            {`Echte Roboter. Echte F\u00fcller. Echte Ergebnisse f\u00fcr Ihre Kunden.`}
          </p>
        </div>

        {/* Video Player - Full Width & Large */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative group">
            {/* Glow behind video */}
            <div className="absolute -inset-3 bg-white/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <WistiaPlayer
                mediaId="e6nl8742dq"
                trackingPrefix="video-player-section"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {videoHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/[0.12] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun Fact */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10 text-center">
            <p className="text-white/70 text-sm sm:text-base">
              <span className="text-white font-semibold">Fun Fact:</span>{" "}
              {`Unsere Roboter schreiben mit echten F\u00fcllern und variieren die Handschrift wie ein Mensch. In Blindtests erkennen 95% der Empf\u00e4nger keinen Unterschied zu einem handgeschriebenen Brief.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}