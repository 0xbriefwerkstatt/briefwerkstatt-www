import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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
    <html lang="de">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
