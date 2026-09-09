"use client";

import { Card, CardContent } from "./ui/card";
import { RotateCcw, Heart, ShoppingCart, CheckCircle, Expand, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const reaktivierungPostcard = "/assets/1299e5357ed066a64df40c10cdeafa93a7a5d356.png";
const postcardBackImage = "/assets/c295a864ed3cfdbfd1079e3aa01ebd0c5d0885d8.png";
const postcardFrontImage = "/assets/62e55ad8ff4709ae293e3d0888e0ae0e1000fb58.png";
import { useState } from "react";
import { Button } from "./ui/button";
import { SamplePackageModal } from "./SamplePackageModal";
import { img } from "../lib/imgParams";

const products = [
  {
    icon: RotateCcw,
    title: `Der Win-Back-Automat`,
    subtitle: "Automatische Briefe an Kunden, die seit 90 Tagen nicht bestellt haben",
    images: [reaktivierungPostcard],
    imageLabels: ["Reaktivierungs-Kampagne"],
    features: [
      `Das Problem: Kunden, die seit Monaten nicht mehr bestellt haben, ignorieren Ihre E-Mails. Digitale Reminder-Kampagnen verpuffen wirkungslos.`,
      `Die Lösung: Verbinden Sie Ihren Shop per Webhook mit unseren Robotern. Automatisch nach 90 Tagen Inaktivität schreiben wir eine persönliche "Wir vermissen Sie"-Karte mit einem exklusiven Rabattcode.`,
      `Ihr ROI: Ein Brief für 3,50 € reaktiviert Kunden mit durchschnittlich 100 € Warenkorbwert. Das ist ein ROAS von über 20:1 – ohne manuellen Aufwand.`
    ],
    bgColor: "bg-primary/5"
  },
  {
    icon: Heart,
    title: `Der High-Value-Dank`,
    subtitle: "Handgeschriebene Karten für Erstkäufer ab 150€ Warenkorb",
    images: ["https://images.unsplash.com/photo-1631010233091-43e8de2f9581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdHRlbiUyMHRoYW5rJTIweYywJTIwY2FyZCUyMHVuYm94aW5nJTIwc2hpcHBpbmd8ZW58MXx8fHwxNzczNTA2ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
    imageLabels: ["Premium Dankeskarte"],
    features: [
      `Das Problem: Hochpreisige Erstkäufer haben oft hohe Retourenquoten. Sie fehlt die emotionale Bindung zur Marke.`,
      `Die Lösung: Bei Bestellungen ab 150 € Warenkorbwert wird automatisch eine handgeschriebene Dankeskarte dem Paket beigelegt. Kein Extra-Porto, nur maximale Wertschätzung.`,
      `Ihr ROI: Studien zeigen: Persönliche Dankesgesten senken die Retourenquote um bis zu 15% und steigern die Wiederkaufrate massiv. Kunden teilen diese Karten organisch in Social Media.`
    ],
    bgColor: "bg-green-50"
  },
  {
    icon: ShoppingCart,
    title: `Der Warenkorb-Abbrecher-Brief`,
    subtitle: "Physisches Retargeting für abgebrochene Checkouts",
    images: [postcardBackImage, postcardFrontImage],
    imageLabels: ["Rückseite", "Vorderseite"],
    features: [
      `Das Problem: Warenkorbabbrecher ignorieren Ihre E-Mail-Reminder. Digitale Retargeting-Ads werden geblockt oder übersehen.`,
      `Die Lösung: Wenn ein Kunde den Checkout abbricht (und Sie seine Adresse haben), triggert Ihr System automatisch einen handgeschriebenen Brief mit einem "Letzte Chance"-Rabatt.`,
      `Ihr ROI: Sie erreichen Kunden dort, wo es keinen Ad-Blocker gibt: im echten Briefkasten. Conversion-Rates für Win-Back-Kampagnen steigen messbar.`
    ],
    bgColor: "bg-accent/5"
  }
];

export function Products() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{[key: number]: number}>({});
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevImage = (productIndex: number) => {
    const product = products[productIndex];
    const currentIndex = currentImageIndexes[productIndex] || 0;
    const newIndex = currentIndex > 0 ? currentIndex - 1 : product.images.length - 1;
    setCurrentImageIndexes(prev => ({ ...prev, [productIndex]: newIndex }));
  };

  const handleNextImage = (productIndex: number) => {
    const product = products[productIndex];
    const currentIndex = currentImageIndexes[productIndex] || 0;
    const newIndex = currentIndex < product.images.length - 1 ? currentIndex + 1 : 0;
    setCurrentImageIndexes(prev => ({ ...prev, [productIndex]: newIndex }));
  };

  return (
    <>
      <section className="py-20 lg:py-32 bg-muted/30" id="use-cases">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
              {`Drei bewährte Anwendungsfälle für Online-Shops`}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {`Von Kundenreaktivierung bis Retourenvermeidung. Briefpost wirkt messbar – und bringt echten ROAS.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, productIndex) => {
              const Icon = product.icon;
              const hasMultipleImages = product.images.length > 1;

              return (
                <Card key={productIndex} className={`border-primary/20 ${product.bgColor} overflow-hidden flex flex-col`}>
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex flex-col items-start space-y-4 mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl mb-2">{product.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground italic">{product.subtitle}</p>
                      </div>
                    </div>

                    {/* Bild-Galerie mit Navigation */}
                    <div className="mb-6 rounded-lg overflow-hidden relative group h-80 sm:h-96 w-full" style={{ backgroundColor: '#343853' }}>
                      {/* Bild-Label Badge */}
                      {hasMultipleImages && (
                        <div className="absolute top-3 left-3 z-20 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <span className="text-white text-xs sm:text-sm font-medium">
                            {product.imageLabels[currentImageIndexes[productIndex] || 0]}
                          </span>
                        </div>
                      )}

                      <div
                        className="cursor-pointer h-full w-full"
                        onClick={() => setLightboxImage(typeof product.images[currentImageIndexes[productIndex] || 0] === 'string' ? product.images[currentImageIndexes[productIndex] || 0] : product.images[currentImageIndexes[productIndex] || 0])}
                      >
                        <ImageWithFallback
                          src={img(product.images[currentImageIndexes[productIndex] || 0], 1200)}
                          alt={`${product.title} - ${product.imageLabels[currentImageIndexes[productIndex] || 0]}`}
                          className="w-full h-full object-contain transition-all duration-500"
                          style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2 text-white">
                            <Expand className="w-8 h-8" />
                            <span className="font-medium text-sm sm:text-base">{`Klicken zur Vergrößerung`}</span>
                          </div>
                        </div>
                      </div>

                      {/* Navigation Pfeile (nur wenn mehrere Bilder) */}
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePrevImage(productIndex);
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-10 shadow-lg"
                            aria-label="Vorheriges Bild"
                          >
                            <ChevronLeft className="w-7 h-7" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNextImage(productIndex);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-10 shadow-lg"
                            aria-label="Nächstes Bild"
                          >
                            <ChevronRight className="w-7 h-7" />
                          </button>

                          {/* Enhanced Thumbnail Dots mit Labels */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 z-10">
                            <div className="flex items-center space-x-3">
                              {product.images.map((_, imgIndex) => (
                                <button
                                  key={imgIndex}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndexes(prev => ({ ...prev, [productIndex]: imgIndex }));
                                  }}
                                  className="group/dot flex items-center space-x-1.5 transition-all"
                                  aria-label={product.imageLabels[imgIndex]}
                                >
                                  <div className={`rounded-full transition-all duration-300 ${
                                    imgIndex === (currentImageIndexes[productIndex] || 0)
                                      ? 'bg-white w-2.5 h-2.5'
                                      : 'bg-white/50 hover:bg-white/75 w-2 h-2'
                                  }`} />
                                  <span className={`text-xs whitespace-nowrap transition-all ${
                                    imgIndex === (currentImageIndexes[productIndex] || 0)
                                      ? 'text-white font-medium'
                                      : 'text-white/60 group-hover/dot:text-white/80'
                                  }`}>
                                    {product.imageLabels[imgIndex]}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Lightbox Modal */}
          {lightboxImage && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setLightboxImage(null)}
            >
              <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
                <img
                  src={img(lightboxImage, 2048)}
                  alt="Vergrößerung"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                  onClick={() => setLightboxImage(null)}
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
            </div>
          )}

          {/* CTA Section - Musterpaket - INSIDE Products Section */}
          <div className="container mx-auto max-w-6xl px-4 mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 sm:p-8 md:p-12 text-center border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 px-4">
                {`Überzeugen Sie sich selbst von der Qualität`}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                {`Fordern Sie jetzt Ihr kostenloses Musterpaket an und erleben Sie die Premium-Qualität unserer handschriftlichen Briefe.`}
              </p>

              <Button size="lg" className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6" onClick={() => setIsModalOpen(true)}>
                <Mail className="w-5 h-5 mr-2" />
                {`Kostenloses Musterpaket anfordern`}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Package Modal */}
      <SamplePackageModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
