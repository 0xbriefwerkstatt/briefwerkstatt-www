"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const snippets = {
  cURL: `curl -X POST https://api.briefwerkstatt.com/v1/letters \\
  -H "Authorization: Bearer $BRIEFWERKSTATT_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "recipient": { "name": "Dr. Thomas Wagner", "address": "Parkstraße 12, 80538 München" },
    "body": "Hallo Thomas, schön, dass wir uns auf der Bits & Pretzels kennengelernt haben …",
    "tracking": { "webhook_url": "https://deine-app.com/api/webhook" }
  }'`,
  "Node.js": `const res = await fetch("https://api.briefwerkstatt.com/v1/letters", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${process.env.BRIEFWERKSTATT_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    recipient: { name: lead.name, address: lead.address },
    body: \`Hallo \${lead.firstName}, schön, dass wir uns kennengelernt haben …\`,
    tracking: { webhook_url: "https://deine-app.com/api/webhook" },
  }),
});`,
  Python: `import os, requests

requests.post(
    "https://api.briefwerkstatt.com/v1/letters",
    headers={"Authorization": f"Bearer {os.environ['BRIEFWERKSTATT_API_KEY']}"},
    json={
        "recipient": {"name": lead.name, "address": lead.address},
        "body": f"Hallo {lead.first_name}, schön, dass wir uns kennengelernt haben …",
        "tracking": {"webhook_url": "https://deine-app.com/api/webhook"},
    },
)`,
};

type Lang = keyof typeof snippets;

export function CodeTabs() {
  const [lang, setLang] = useState<Lang>("cURL");
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippets[lang]);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* Clipboard nicht verfügbar */
    }
  }

  return (
    <div className="overflow-hidden rounded-[22px] border-2 border-ink bg-white shadow-[6px_6px_0_0_var(--color-ink)]">
      <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-paper px-3 py-2.5 sm:px-4">
        <div role="tablist" aria-label="Programmiersprache" className="flex gap-1.5">
          {(Object.keys(snippets) as Lang[]).map((l) => (
            <button
              key={l}
              role="tab"
              aria-selected={l === lang}
              onClick={() => setLang(l)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold transition-colors sm:text-sm ${
                l === lang ? "bg-ink text-white" : "text-ink-soft hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3 py-1.5 text-xs font-bold transition-colors hover:bg-sun"
          aria-label="Code kopieren"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Kopiert" : "Kopieren"}
        </button>
      </div>
      <pre className="overflow-x-auto bg-[#fffdf8] p-5 font-mono text-[12.5px] leading-relaxed text-ink sm:p-6 sm:text-sm">
        <code>{snippets[lang]}</code>
      </pre>
    </div>
  );
}
