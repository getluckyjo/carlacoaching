/**
 * Client logo fetcher – pulls each organisation's own logo off its own site
 * into public/img/clients/, named <slug>.<ext> so LogoWall picks it up.
 *
 *   npm run logos                 all clients in src/data/site.ts
 *   npm run logos -- uct-gsb agra just those slugs
 *
 * It only fetches. It does not clear anyone: a logo in the folder still renders
 * as a wordmark until you set `cleared: true` on that client in site.ts. That
 * separation is deliberate – README "Before launch" §3, PROJECT.md §10.
 *
 * When a site paints its logo as inline <svg> (increasingly common) there is no
 * file to take, and the run reports MANUAL for it. Save that one by hand:
 * public/img/clients/<slug>.svg.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { clients } from "../src/data/site.ts";

const OUT = fileURLToPath(new URL("../public/img/clients/", import.meta.url));
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

/** Hand-picked asset URLs win over anything the scraper guesses. */
const OVERRIDES = {
  // "slug": "https://example.org/brand/logo.svg",
};

const EXT = { "image/svg+xml": "svg", "image/png": "png", "image/webp": "webp",
              "image/jpeg": "jpg", "image/avif": "avif" };

const get = (url, as = "text") =>
  fetch(url, { headers: { "user-agent": UA, accept: "*/*" }, redirect: "follow" })
    .then((r) => (r.ok ? (as === "text" ? r.text() : r.arrayBuffer().then((b) => ({ buf: Buffer.from(b), type: r.headers.get("content-type") ?? "" }))) : Promise.reject(new Error(`HTTP ${r.status}`))));

const attr = (tag, name) =>
  tag.match(new RegExp(`${name}\\s*=\\s*"([^"]*)"|${name}\\s*=\\s*'([^']*)'`, "i"))?.slice(1).find(Boolean) ?? "";

/**
 * Rank every image the page points at. A logo is nearly always: early in the
 * document, inside the masthead, and self-described as a logo somewhere in its
 * src, alt, class or id.
 */
function candidates(html, base) {
  const found = [];
  const push = (raw, score) => {
    if (!raw || raw.startsWith("data:")) return;
    try { found.push({ url: new URL(raw, base).href, score }); } catch {}
  };

  const head = html.slice(0, 40_000);
  for (const tag of head.match(/<img\b[^>]*>/gi) ?? []) {
    const src = attr(tag, "src") || attr(tag, "data-src") ||
                attr(tag, "srcset").split(",")[0]?.trim().split(/\s+/)[0] || "";
    const words = `${src} ${attr(tag, "alt")} ${attr(tag, "class")} ${attr(tag, "id")}`.toLowerCase();
    if (!/logo|wordmark|brand|masthead/.test(words)) continue;
    let score = 50 - found.length;                    // earlier is better
    if (/\.svg(\?|$)/i.test(src)) score += 30;        // vector, any size
    if (/logo/.test(words)) score += 10;
    if (/footer|partner|sponsor|award|client/.test(words)) score -= 40;
    push(src, score);
  }

  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    const rel = attr(tag, "rel").toLowerCase();
    if (/\bapple-touch-icon\b/.test(rel)) push(attr(tag, "href"), 12);
    else if (/\bicon\b/.test(rel) && /\.svg/i.test(attr(tag, "href"))) push(attr(tag, "href"), 18);
  }
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    if (/og:image|twitter:image/i.test(attr(tag, "property") + attr(tag, "name")))
      push(attr(tag, "content"), 5);                  // last resort: a social card
  }

  const seen = new Set();
  return found.sort((a, b) => b.score - a.score)
              .filter((c) => !seen.has(c.url) && seen.add(c.url));
}

const only = process.argv.slice(2);
const wanted = only.length ? clients.filter((c) => only.includes(c.slug)) : clients;
mkdirSync(OUT, { recursive: true });

const report = [];
for (const client of wanted) {
  let status = "MANUAL", detail = "no logo file on the page – save it by hand";
  try {
    const list = OVERRIDES[client.slug]
      ? [{ url: OVERRIDES[client.slug], score: 99 }]
      : candidates(await get(client.url), client.url);

    for (const candidate of list.slice(0, 4)) {
      try {
        const { buf, type } = await get(candidate.url, "bin");
        const ext = EXT[type.split(";")[0].trim()] ??
                    candidate.url.split("?")[0].split(".").pop()?.toLowerCase();
        if (!Object.values(EXT).includes(ext) || buf.length < 400) continue;
        writeFileSync(`${OUT}${client.slug}.${ext}`, buf);
        status = "OK";
        detail = `${client.slug}.${ext}  ${(buf.length / 1024).toFixed(1)} kB  ← ${candidate.url}`;
        break;
      } catch { /* try the next candidate */ }
    }
  } catch (err) {
    status = "FAIL";
    detail = `${client.url} – ${err.message}`;
  }
  report.push({ status, client: client.name, detail });
  console.log(`${status.padEnd(6)} ${client.name}\n       ${detail}`);
}

const ok = report.filter((r) => r.status === "OK").length;
console.log(`\n${ok}/${report.length} fetched into public/img/clients/`);
console.log("Check each one by eye – scrapers pick up sponsor strips and social");
console.log("cards. Then set `cleared: true` per client in src/data/site.ts,");
console.log("but only once that organisation has said yes.");
