import type { Metadata } from "next";
import { Fraunces, Caveat, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--nf-display",
  axes: ["SOFT", "opsz"],
  display: "swap",
});
const hand = Caveat({
  subsets: ["latin"],
  variable: "--nf-hand",
  weight: ["500", "700"],
  display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--nf-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--nf-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Die Briefwerkstatt: Echte Briefe für Marketing, Sales & Growth",
  description:
    "Handgeschriebene Briefe für Growth-, Sales- und Marketing-Teams: DSGVO-konform, skalierbar, per API oder CRM integriert und per QR-Code messbar. Auf Wunsch als Full-Service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${hand.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
