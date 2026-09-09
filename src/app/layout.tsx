import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Die Briefwerkstatt – Handschrift mit Automatisierung",
  description:
    "Handschriftliche Briefe mit Automatisierung: Kundenreaktivierung, Direct Mail und White-Label-Lösungen für Agenturen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
