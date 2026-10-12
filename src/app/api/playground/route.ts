import { NextRequest, NextResponse } from "next/server";
import { Resvg } from "@resvg/resvg-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";
const MAX_BODY_LENGTH = 500;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (list.length >= RATE_LIMIT_MAX) {
    hits.set(ip, list);
    return true;
  }
  list.push(now);
  hits.set(ip, list);
  return false;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > maxChars) {
      if (current) lines.push(current.trim());
      current = word;
    } else {
      current = `${current} ${word}`;
    }
  }
  if (current.trim()) lines.push(current.trim());
  return lines.slice(0, 14);
}

/** Deterministic pseudo-QR from the letter id. */
function qrRects(seed: string): string {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
  const size = 21;
  const cell = 6;
  const inFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x >= size - 7 && y < 7) || (x < 7 && y >= size - 7);
  let rects = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!inFinder(x, y) && rand() > 0.52) {
        rects += `<rect x="${x * cell}" y="${y * cell}" width="${cell}" height="${cell}"/>`;
      }
    }
  }
  const finder = (fx: number, fy: number) =>
    `<rect x="${fx}" y="${fy}" width="${7 * cell}" height="${7 * cell}" fill="none" stroke="#111" stroke-width="${cell}"/>` +
    `<rect x="${fx + 2 * cell}" y="${fy + 2 * cell}" width="${3 * cell}" height="${3 * cell}"/>`;
  return (
    `<g fill="#111">${rects}</g>` +
    `<g fill="#111">${finder(0, 0)}${finder((size - 7) * cell, 0)}${finder(0, (size - 7) * cell)}</g>`
  );
}

function buildLetterSvg(input: {
  name: string;
  address: string;
  body: string;
  letterId: string;
}): string {
  const lines = wrapText(input.body, 58);
  const lineSpans = lines
    .map((line, i) => {
      const rotate = ((i * 7) % 5) - 2;
      return `<text x="80" y="${400 + i * 38}" font-size="24" fill="#1e293b" font-style="italic" font-family="Georgia, 'Times New Roman', serif" transform="rotate(${rotate} 80 ${400 + i * 38})">${escapeXml(line)}</text>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1130" viewBox="0 0 800 1130">
  <rect width="800" height="1130" fill="#e9e5da"/>
  <rect x="30" y="30" width="740" height="1070" fill="#faf7f0" stroke="#d6d0c2" stroke-width="2"/>
  <text x="400" y="620" font-size="110" font-weight="bold" font-family="Arial, sans-serif" fill="#781E69" opacity="0.07" text-anchor="middle" transform="rotate(-28 400 620)">VORSCHAU</text>
  <g transform="translate(640,80) scale(0.9)">${qrRects(input.letterId)}</g>
  <text x="640" y="240" font-size="14" font-family="monospace" fill="#64748b">${escapeXml(input.letterId)}</text>
  <text x="80" y="120" font-size="26" font-weight="bold" fill="#0f172a" font-family="Arial, sans-serif">${escapeXml(input.name)}</text>
  <text x="80" y="154" font-size="20" fill="#334155" font-family="Arial, sans-serif">${escapeXml(input.address)}</text>
  <text x="80" y="330" font-size="18" fill="#64748b" font-family="Arial, sans-serif">München, ${new Date().toLocaleDateString("de-DE")}</text>
  ${lineSpans}
  <path d="M80 ${400 + lines.length * 38 + 20} C 110 ${400 + lines.length * 38 - 6}, 140 ${400 + lines.length * 38 + 34}, 170 ${400 + lines.length * 38 + 12} S 230 ${400 + lines.length * 38 + 2}, 260 ${400 + lines.length * 38 + 18}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <text x="80" y="1080" font-size="14" fill="#94a3b8" font-family="monospace">briefwerkstatt · api-playground · preview only</text>
</svg>`;
}

async function sendBrevo(input: {
  to: string;
  name: string;
  address: string;
  body: string;
  letterId: string;
  pngBase64: string;
}): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error("BREVO_API_KEY nicht konfiguriert");

  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "info@briefwerkstatt.com";
  const senderName = process.env.BREVO_SENDER_NAME ?? "Die Briefwerkstatt";

  const res = await fetch(BREVO_URL, {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: input.to }],
      subject: `Dein Test-Brief ${input.letterId} aus dem API-Playground`,
      htmlContent: `<p>Hallo ${escapeXml(input.name.split(" ")[0] || "")},</p>
<p>dein Brief aus dem API-Playground ist als PNG-Vorschau angehängt.</p>
<p><strong>Empfänger:</strong> ${escapeXml(input.name)}, ${escapeXml(input.address)}<br/>
<strong>Text:</strong> ${escapeXml(input.body)}</p>
<p>So sähe deine Kampagne aus: echter Füller, echtes Papier, QR-Tracking inklusive.</p>
<p><a href="https://briefwerkstatt.com">briefwerkstatt.com</a> · <a href="https://briefwerkstatt.com/#playground">API-Playground</a></p>`,
      attachment: [
        { content: input.pngBase64, name: `brief-vorschau-${input.letterId}.png` },
      ],
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Brevo Fehler ${res.status}: ${detail.slice(0, 200)}`);
  }
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Zu viele Anfragen. Bitte in einer Minute erneut versuchen." },
      { status: 429 },
    );
  }

  let data: { email?: string; name?: string; address?: string; body?: string };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültiger Request Body" },
      { status: 400 },
    );
  }

  const email = (data.email ?? "").trim().toLowerCase();
  const name = (data.name ?? "").trim().slice(0, 80);
  const address = (data.address ?? "").trim().slice(0, 120);
  const body = (data.body ?? "").trim().slice(0, MAX_BODY_LENGTH);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Ungültige E-Mail-Adresse" },
      { status: 400 },
    );
  }
  if (!name || !address || !body) {
    return NextResponse.json(
      { ok: false, error: "Name, Adresse und Text dürfen nicht leer sein" },
      { status: 400 },
    );
  }

  const letterId = `ltr_${Math.random().toString(16).slice(2, 8)}`;

  try {
    const svg = buildLetterSvg({ name, address, body, letterId });
    const png = new Resvg(svg, {
      fitTo: { mode: "width", value: 800 },
      background: "rgba(255,255,255,1)",
    })
      .render()
      .asPng();

    await sendBrevo({
      to: email,
      name,
      address,
      body,
      letterId,
      pngBase64: Buffer.from(png).toString("base64"),
    });

    return NextResponse.json({ ok: true, letterId });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : "Unbekannter Fehler",
      },
      { status: 500 },
    );
  }
}
