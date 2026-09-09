# Briefwerkstatt – Next.js

Next.js-14-Portierung (App Router) der Briefwerkstatt-Landingpage. Optik und Inhalt
entsprechen 1:1 der Vite/React-Quelle.

## Befehle

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server (http://localhost:3000)
npm run build    # Produktions-Build
npm run start    # Produktions-Server
```

## Struktur

- `src/app/` – App-Router-Routen (`page.tsx`, `datenschutz/`, `impressum/`, `not-found.tsx`, `layout.tsx`, CSS)
- `src/components/` – Sektions-Komponenten, `ui/` (shadcn), `figma/`, `imports/`
- `src/lib/imgParams.ts` – `img()`-Hilfsfunktion (gibt `src` unverändert zurück)
- `public/assets/` – Bild-Assets (PNG)
- `public/sitemap.xml`

Die Originalseite stammt aus Figma Make:
https://www.figma.com/design/URhYJ1cZCGt6fGUTUW2ZdW/Briefwerkstatt-Homepage-Shops
