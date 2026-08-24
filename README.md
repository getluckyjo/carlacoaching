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

## Three things that will bite you

**Two palette colours can never carry text.** `--color-green` (#5FC13C) is
2.00:1 on cream and `--color-pink` (#DCA9A2) is 1.79:1. They are fills only —
icon chips, dots, markers. The text-safe members are `--color-green-deep` and
`--color-pink-deep`. `--color-gold-bright` is decorative too; `--color-gold` is
the one that carries text.

**`astro check` passing does not mean the build passes.** A bare `export type`
in `.astro` frontmatter typechecks fine and then fails the client build with
`Unexpected "|"`. Keep types in frontmatter local. Always run `npm run build`,
not just the check.

**Text over photography needs a scrim so heavy the photo stops reading.** This
was tried for the numbers band and reverted to a split layout. If you put copy
over an image, contrast depends on whatever the picture is doing behind each
glyph — `npm run a11y` will catch it, but the design answer is usually to put
the text beside the image instead.
