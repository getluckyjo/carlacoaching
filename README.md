# carlaleroux.com

Static site for **Carla le Roux** — leadership and capability transformation,
executive education, organisational change, coaching, and Esoterica.

Astro 5 + Tailwind 4, statically generated. Zero JavaScript by default.

The full brief and design specification is [PROJECT.md](PROJECT.md) — read that
first. It is the source of truth; this file only covers running the thing.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # astro check + build → dist/
npm run preview  # serve dist/ locally
npm run a11y     # WCAG 2.1 AA check, every route, desktop + mobile
```

Node 20+.

## Before launch

1. **Activate the contact form.** Submit one test enquiry, then click the
   activation link FormSubmit emails to `hello@carlaleroux.com`. One-time; until
   it's done, nothing is delivered.
2. **Real photography.** Three `ImagePlaceholder` blocks are live on `/`,
   `/about` and `/esoterica`. They render a dashed panel labelled PLACEHOLDER so
   they cannot ship unnoticed. Design rule: real photography only, no stock.
3. **Client logo permissions.** `clients` in `src/data/site.ts` currently renders
   as a wordmark wall. Confirm each organisation before swapping to image logos —
   particularly those reached through intermediaries (Hubble Studios, Elevate
   Learning).
4. **Confirm the LinkedIn handle.** `site.social.linkedin` points at
   `/carlapotgieter` against a Carla le Roux brand name. Keep or migrate.
5. **Fill the remaining copy gaps.** Coaching engagement length
   (`coachingFaqs`), Esoterica formats and fees, workshop pricing.
6. **DNS.** Point `carlaleroux.com` at the host and 301 `carlaleroux.co.za` and
   the apex to `https://www.carlaleroux.com` (the canonical in
   `astro.config.mjs`).
7. **Search Console.** Submit `sitemap-index.xml`.

## Deploy

Any static host. `npm run build`, publish `dist/`.

| Host | Setup |
| --- | --- |
| **Vercel** | Zero config — Astro is detected. |
| **Netlify** | Build `npm run build`, publish `dist`. |
| **Cloudflare Pages** | Same as Netlify. |

## Where things live

```
src/
├── data/site.ts        ← single source of truth: copy, services, metrics, CV
├── lib/seo.ts          ← titles, canonicals, JSON-LD builders
├── styles/global.css   ← design tokens + utilities (mirrors PROJECT.md §5)
├── components/
│   ├── layout/         ← BaseLayout, Nav, Footer, CookieBanner
│   ├── home/           ← the twelve homepage sections
│   └── ui/             ← SectionHeader, AnimatedNumber, LogoWall, …
├── content/journal/    ← MDX posts, typed frontmatter
└── pages/              ← one file per route
```

### Common changes

| Change | Where |
| --- | --- |
| Any headline, service, metric, client, CV entry | `src/data/site.ts` |
| A new journal post | drop an `.mdx` file in `src/content/journal/` |
| Colour, type, spacing | `src/styles/global.css` — **and PROJECT.md §5 first** |
| A new page | `src/pages/`, then add it to `Nav.astro` and `Footer.astro` |

## Two things that will bite you

**Night sections rebind the ink tokens.** `.on-night` remaps `--color-ink`,
`--color-muted`, `--color-aubergine` and friends so nested components adapt
without needing a night variant. The corollary: a *light* panel inside a night
page inherits the wrong palette. Give it `.surface-light`, which restores the
base values from the immutable `--l-*` snapshots. This is how the cookie notice
ended up painting brass text on a paper ground — `npm run a11y` catches it.

**Brass is contrast-constrained.** `--color-brass` clears AA on the night ground
(5.66) and passes large-text only on paper (3.12). It **fails** on linen (2.81)
and sand (2.48). Use it for numerals on night or paper, hairlines, and non-text
detail — never body text on a tinted panel, never a CTA. The metric type scale is
likewise sized so the widest published value (`R10M+`) clears its grid column;
raising that clamp re-introduces a collision.
