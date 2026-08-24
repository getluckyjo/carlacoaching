# Carla le Roux — Platform Site

> **Project brief and build specification.**
> One website as the central platform for four lines of work: consulting, coaching, workshops, and tarot.
>
> Source material: `Website.pdf` (first-draft site copy) and `Carla_le_Roux_Organisational_Learning_CV_2026 (1).pdf` (the factual record). Both live in this repo. Where this document and those PDFs disagree, this document wins — it has reconciled them.

---

## 1. Context

Carla le Roux is a learning and capability strategist, programme designer and coach based in Cape Town, working globally. Ten-plus years designing leadership, capability-development and executive education programmes across Africa, Europe and the UK.

The unusual thing about her background — and the thing the current draft copy undersells — is where she started. An MA in English Studies from Stellenbosch and four years editing fiction and non-fiction — freelance, and for Random House Struik and NB Publishers — before an Honours in Creative Brand Leadership at Vega and a move into instructional design. She has spent her whole career on the same problem from different angles: taking something complex and making it land with a human being. Editing, brand, instructional design, programme architecture, coaching. That's one throughline, not five careers, and it is the most differentiated thing about her.

### What exists today

| | |
| --- | --- |
| **`Website.pdf`** | A complete first draft of site copy — eleven sections, working tagline, CTA labels, footer. Genuinely good writing. Most of it ships close to verbatim. |
| **`CV ...2026.pdf`** | The proof layer: roles, dates, clients, budgets, credentials, metrics. |
| **Live site** | None. |
| **Domain** | Not yet decided — see §10. |

### The gap this document closes

Neither PDF is buildable. The website draft positions Carla purely as a corporate leadership-and-capability consultant — it never mentions coaching as a product, workshops as a product, or tarot at all. The CV is a straight L&D CV. Neither reconciles a corporate L&D buyer with a tarot client, and neither says anything about design, structure, or how the thing gets built.

---

## 2. Positioning

### The line

> **Turn strategy into capability.**

From the existing draft, and it's the right one. Keep it.

**Strapline:** Leadership & Capability Transformation · Executive Education · Organisational Change · Coaching

**Location line:** Cape Town, South Africa · Working globally

### The spine

The four service lines are not four businesses. They are four depths of one practice:

| Depth | Service | The unit of work |
| --- | --- | --- |
| System | **Consulting** | An organisation that needs to be able to do something it currently can't |
| Group | **Workshops** | A room of people who need to think differently by the time they leave |
| Individual | **Coaching** | A leader turning insight into changed behaviour |
| Question | **Esoterica** | A person who hasn't yet articulated what they're actually asking |

The through-line: **helping people and organisations move from knowing what they want to being able to do it.** The draft already says this, in the About section — *"where an organisation needs to move from knowing what it wants to achieve to actually being able to achieve it."* That sentence is the brand. It also happens to be what makes the tarot page defensible rather than a liability: it is the same practice at its most personal scale.

### The bridge — Africa and Europe, both directions

The sharpest commercial angle in the whole CV, and one neither source document
draws out. Carla sits on both sides of a market that mostly talks past itself:

| | Wants | She brings |
| --- | --- | --- |
| **European universities & business schools** | Access to Africa as the future growth market — credibly, with partners still there in year three | Programme design and partnership development that works on the ground in African markets, rather than exporting a European curriculum and hoping |
| **African corporates & institutions** | The latest in skills, learning practice and innovation | Current international practice adapted properly — same rigour, local relevance, a design that survives contact with its context |

The proof is already in the CV, on both sides. **Africa:** UCT GSB, African
Management Institute (8 countries), AGRA (13 countries), SALGA, Tekano, Columba.
**Europe:** Cambridge Judge, FutureLearn, University of Bristol, the Utrecht
exchange, and directing the iXperience Lisbon programme while building university
partnerships.

Very few people have delivered credibly in both directions. This is a
positioning claim, not a service line — it earns its own homepage section
(`Bridge.astro`, on the sand ground) and shapes how `/work` is pitched.

### Who this is for

Straight from the draft's own "WHO I WORK WITH" — organisations asking:

- How do we build the leadership capability our strategy requires?
- How do we design a leadership programme that actually changes something?
- How do we turn a strategic priority into a meaningful development experience?
- How do we equip leaders to navigate complexity and change?
- How do we bring together learning, leadership and organisational transformation?

Buyers: heads of L&D, HR directors, business school executive-education teams, foundation and development-organisation programme leads, and the leaders themselves for coaching.

### Voice

Carla's authority comes from restraint, not volume. Take the register directly from the draft — it's already correct:

- *"I don't start with the programme. I start with the problem."*
- *"Sometimes it's realising that a training programme isn't the answer at all."*
- *"You don't need to have the brief perfectly worked out before you get in touch. Bring the problem."*

Principles:

1. **Declarative and plain.** Short sentences. State the thing.
2. **Willing to say no.** The draft's admission that the answer is sometimes *not* a programme is the single most credible line on the site. Keep that posture everywhere.
3. **British/SA English.** *Organisation, programme, behaviour, realise.* Consistently.
4. **Banned vocabulary.** *Unlock, holistic, journey, empower, transformative, thought leader, guru, elevate, level up.* The draft already avoids these. Don't reintroduce them.
5. **Numbers as numerals.** *13 countries*, not *thirteen*.

> **Deliberate contrast with `entrepreneurcoach`.** That site is loud, vermilion, stacked one-word headlines, operator swagger. This one is quiet, warm, serif, spacious. Same engineering, opposite register. Do not let the operator voice leak across.

---

## 3. The four service lines

### 3.1 Consulting — leadership, capability & learning design

The core B2B revenue line. Five practice areas, all copy already drafted:

| Area | Drafted? |
| --- | --- |
| Leadership Development | Yes |
| Executive Education & Programme Design | Yes |
| Organisational Capability & Change | Yes |
| Immersive Learning | Yes |
| Digital, Blended & EdTech Learning Design | Partial — the draft has "Digital & Blended Learning" as a *case*, not a service area. Promote it. |

**EdTech is under-served in the current draft and needs its own area.** The CV carries real proof — digital learning transformation for Cambridge Judge Business School, FutureLearn and the University of Bristol (through Hubble Studios), plus designing UCT GSB's first blended learning programme during the 2016–2019 business development years. That's a credible edtech consulting practice and it is currently buried in a case-study bullet.

### 3.2 Coaching

Currently one paragraph in the draft. Needs a full page.

Positioning: *integrative* coaching — the draft's own framing is "helping leaders turn insight into action" and "creating the conditions for people to think, reflect and change." Credentials: Professional Coaching Programme, UCT GSB (**in progress** — state this accurately, do not imply completion); Coaching for Development, UCT GSB (2024).

Needs from Carla: formats (1:1, team, programme-embedded), session length, engagement length, pricing.

### 3.3 Workshops

No copy exists. The most immediately sellable line — a defined thing with a date and a price, versus consulting's long sales cycle.

Two distinct products, and the page must separate them:

- **Commissioned** — facilitation and design for a client's own group.
- **Open** — publicly bookable, seats, dates, cohorts.

`entrepreneurcoach/src/pages/workshop.astro` is a complete, working open-cohort page with seats and booking. Fork it.

### 3.4 Esoterica

**Confirmed direction: one site, own room.** The tarot line trades as **Esoterica** and lives on `/esoterica`, in the main nav, sharing the typography, the booking system and the masthead — but flipping to the night palette so it reads as a distinct space.

The name does real work. "Esoterica" sits in a nav beside Work and Coaching without announcing *tarot* to a corporate L&D buyer scanning the page, while being entirely honest to anyone who opens it. It also reads as a room or a cabinet rather than a service, which is the right register.

The goop precedent is the argument: a credible masthead can hold a woo-adjacent offer without losing the serious audience, provided the offer is presented with the same production values as everything else. The failure mode is not "tarot on a consulting site" — it's *cheap-looking* tarot on a consulting site.

Copy strategy: connect it to the spine (§2). Tarot as a structured reflective practice — a way of surfacing the question underneath the question. That framing is honest, it's continuous with the coaching work, and it doesn't require anyone to believe anything in particular.

Needs from Carla: formats, session lengths, pricing, in-person vs. remote, and how much she wants it foregrounded.

---

## 4. Design research

### Reference DNA

Four sites were named as references, plus a wider sweep of strong female-led brands. What to take from each:

| Reference | Steal | Leave |
| --- | --- | --- |
| **robinsharma.com** | The authority stack — client logo marquee (NASA, Nike, PwC, Microsoft, GE, FedEx) *above* the offer. The three-noun descriptor ("Leadership Expert · Bestselling Author · Humanitarian"). Credibility before product. | Guru maximalism, book-funnel architecture, the hard-sell CTA density, the podcast-first homepage. |
| **goop.com** | Editorial and commerce under one credible masthead. Lowercase restraint. Generous whitespace. Newsletter as primary capture. **The proof that a serious brand can hold a woo-adjacent line.** | Retail scale, the shop taxonomy, the celebrity engine. |
| **victoriabeckham.com** | "The House of…" framing. Imagery at scale. Wide-tracked, restrained typography. Very few nav items. Product presented as editorial, not catalogue. | Fashion e-commerce mechanics, the sparse copy (a consultancy has to explain itself). |
| **female-founders.org** | **The closest structural match.** Manifesto voice ("Women are not a niche." / "Together, we make waves."). Letter-spaced display headings as a device. Big animated odometer numerals over photography. Partner logo wall. Named team grid with direct email. Hard metrics stated plainly: "€680k average raised per founder", "87k active members". | Accelerator/programme-portfolio structure, VC-ecosystem framing, Webflow density. |

### The wider sweep

- **The Row / Toteme / Khaite** — restraint as strategy. Neutral tones, calm, quiet luxury. Instead of selling trends, they sell calm. Directly applicable: Carla's differentiator is composure inside ambiguity, and the design should embody that rather than shout it.
- **Glossier** — community-first, minimal type, attainable rather than exclusionary. The cautionary half: it lost its position by drifting from the core promise. Pick a position and hold it.
- **Ellevate / Ellevest (Sallie Krawcheck)** — belonging framing paired with hard numbers. "40+ industries represented. 100k+ active subscribers." Numbers make a soft proposition concrete.
- **Chief** — the members-only professional-network register; useful reference for how to make a women-led professional brand feel selective without feeling exclusionary.

### Synthesis

**Authority first** (Sharma). **Restraint in the execution** (VB / The Row). **Editorial breadth so the tarot room isn't a jarring departure** (goop). **Declarative voice and hard numbers** (Female Founders).

Positioning statement for the design: *professional boutique female consulting* — closer to a small, exacting practice than to an agency or a personal brand. Warmth and rigour at the same time.

> **Method note.** This environment's egress proxy blocks direct fetching of all four reference sites, and the available Firecrawl MCP exposes search only, not scrape. The reads above come from Firecrawl's indexed page content — verbatim headline and nav copy where quoted, structural inference where described. Re-verify against the live sites before making a design decision that hinges on a detail.

---

## 5. Design system

### 5.1 Colour

Warm ivory ground (not stark white), warm near-black ink, deep aubergine primary, brass secondary.

Aubergine and brass are rare in the coaching and consulting field — which defaults to sage, blush, or navy — read authoritative rather than decorative, and give the tarot room a natural gilded-night treatment without needing a second palette.

```css
--c-paper          #FBF9F5   /* warm ivory ground */
--c-linen          #F2EDE5   /* panels, cards */
--c-sand           #E6DFD3   /* secondary panel */
--c-rule           #DDD5C8   /* hairlines */
--c-rule-strong    #C9BFAE   /* input borders */

--c-ink            #1B1714   /* warm near-black, body */
--c-ink-soft       #3A332C   /* muted body */
--c-muted          #665E54   /* captions, secondary — see contrast note */

--c-aubergine      #3B2436   /* PRIMARY — CTAs, emphasis, links */
--c-aubergine-deep #2A1826   /* hover / pressed */
--c-aubergine-soft #EFE7EC   /* background tint */

--c-brass          #B08748   /* SECONDARY — rules, ticks, numerals */
--c-brass-soft     #F0E6D4

--c-night          #1A1018   /* full-bleed dark: tarot room + closing CTA */
```

**Rules**

- **85 / 10 / 5** — neutral ground / aubergine / brass.
- Aubergine is for **action and emphasis**: buttons, links, the active nav indicator, one emphasised phrase per display headline.
- Brass is for **structure and number**: hairlines above section headers, the metric numerals, list ticks, the tarot page's gilt detail. **Never on a CTA**, and **numerals on night or paper only** — brass fails contrast on linen and sand (see the table below).
- Night is a **full-bleed section**, never a card or button background. At most one per page, plus the whole of `/tarot`.
- **No pink.** No pastel wash. No gradient mesh. No mid-grey decorative blocks.

**Contrast — measured, not assumed.** Every pair below was computed against WCAG 2.1. Two constraints came out of it and both are binding:

| Pair | Ratio | Verdict |
| --- | --- | --- |
| ink on paper | 16.93 | AA body |
| ink on linen | 15.28 | AA body |
| ink on sand | 13.45 | AA body |
| aubergine on paper | 13.39 | AA body |
| aubergine on linen | 12.08 | AA body |
| paper on aubergine | 13.39 | AA body |
| paper on night | 17.65 | AA body |
| brass on night | 5.66 | AA body |
| **muted on paper** | 6.06 | AA body |
| **muted on linen** | 5.47 | AA body |
| **muted on sand** | 4.81 | AA body |
| brass on paper | 3.12 | **large text only** |
| brass on linen | 2.81 | **fails — do not use** |
| brass on sand | 2.48 | **fails — do not use** |

1. **`--c-muted` is `#665E54`, not the lighter `#7A7166` that reads better in isolation.** The lighter value scores 4.56 on paper but drops to 4.11 on linen and 3.62 on sand — and since eyebrows are 12px and backgrounds alternate, that would put failing small text on roughly half the site's sections. `#665E54` clears AA on all three grounds.
2. **Brass numerals only on paper or on night.** Brass fails even the 3.0 large-text threshold on linen (2.81) and sand (2.48). The numbers strip must therefore sit on the night ground (5.66, comfortable) or on paper at display size — never on a linen or sand panel.

Hairlines in `--c-rule` are decorative separators, not UI components conveying state, so they are exempt from the contrast minimum. Don't press them into service as borders that carry meaning.

### 5.2 Typography

A serif/sans pairing — deliberately unlike `entrepreneurcoach`'s single-grotesque system.

- **Display — [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif)** (Google Fonts, regular + italic). High-contrast, editorial, contemporary. Reads Victoria Beckham / The Row rather than wedding-invitation. Display sizes only — never body.
- **Body & UI — [Geist](https://vercel.com/font)**, self-hosted via `@fontsource-variable/geist`. Already a dependency in `entrepreneurcoach`, so it costs nothing to bring across. Neutral enough to let the serif carry the character.
- **No third family.** No script. No handwritten signature — that's Johannes's device, not Carla's.

**Scale**

```
display-xl   clamp(3rem, 6.5vw, 6rem)      lh 1.02   ls -0.02em   Instrument Serif 400
display-l    clamp(2.4rem, 4.5vw, 4rem)    lh 1.06   ls -0.015em  Instrument Serif 400
h2           clamp(1.9rem, 3vw, 2.9rem)    lh 1.12   ls -0.01em   Instrument Serif 400
h3           clamp(1.25rem, 1.6vw, 1.6rem) lh 1.25                Geist 600
lead         clamp(1.1rem, 1.4vw, 1.35rem) lh 1.55                Geist 400
body         17px                          lh 1.65                Geist 400
small        14px                          lh 1.55                Geist 500
eyebrow      12px                          lh 1.4   ls 0.2em  UPPERCASE  Geist 600
metric       clamp(3.5rem, 8vw, 7rem)      lh 1.0   tabular-nums  Instrument Serif 400
```

**Rules**

- **Eyebrow is the signature device** — 12px Geist, `0.2em` tracking, uppercase, `--c-muted`, with a 1px brass rule above. Every section opens with one. This is the caption treatment common to VB, goop and Female Founders, and it does most of the work of making the site feel considered.
- **Emphasis via italic, not colour-plus-weight.** Instrument Serif's italic carries one phrase per display headline. Aubergine for that phrase, sparingly.
- **The letter-spaced display device** (Female Founders' `T h e  N u m b e r s`) is allowed **once per page maximum**, on the numbers strip. Twice and it's a tic.
- Line length capped at **68ch** for body, **56ch** for lead.
- All-caps for eyebrows and nav only. Never paragraphs.

### 5.3 Layout

More air than `entrepreneurcoach`. Composure is the brand.

- Page max-width **1280px**; outer padding 24px mobile / 48px tablet / **80px** desktop.
- Prose width **680px**.
- Section vertical rhythm: **96px** mobile, **160px** desktop. Generous.
- Editorial and largely **centred or gently asymmetric** — not the aggressive cols-1–7 asymmetry of the operator site.
- Background alternates `paper → linen → paper`, with **one** full-bleed night moment per page.
- **Cards:** 1px `--c-rule` border, no shadow at rest, 16px radius, 32px padding, hover darkens border to `--c-aubergine`. No lift, no glow.
- Spacing scale: `4 8 12 16 24 32 48 64 96 128 160`.

### 5.4 Motion

Functional only.

- **Reveal on scroll** — 600ms ease-out, 12px rise, fade. IntersectionObserver at 0.1.
- **Counter tween** — metric numerals count up on first intersection, 1400ms, `tabular-nums` to prevent shift. (`AnimatedNumber.astro` already does exactly this.)
- **Logo wall** — slow marquee, 60s linear, pauses on hover, mask-faded at both edges.
- All three respect `prefers-reduced-motion: reduce`.
- **Never:** parallax, custom cursors, splash screens, auto-advancing carousels, blob drifts.

### 5.5 Imagery

The design depends on real photography at scale. This is the single biggest external dependency.

- **Real photography only.** No stock. No "woman at a whiteboard".
- Needed: a portrait (3:4 vertical, hero and about), 3–5 in-context shots (facilitating, a room, a workshop), and 3 case-study images.
- **Treatment:** natural colour, warm, unfiltered. No duotone, no heavy grade.
- **Tarot page:** the one place for a still-life register — cards, hands, low warm light against the night ground. Shot properly, or not at all.
- **Client logos:** monochrome, optically sized to equal weight, on linen.
- Every image gets real alt text. Never a filename.

---

## 6. Information architecture

```
/                 Home
/work             Consulting practice + selected work        ← edtech consulting lives here
/coaching         Integrative coaching
/workshops        Commissioned + open workshops
/esoterica        The room (night palette) — trades as Esoterica
/about            Bio, credentials, the publishing→learning arc
/journal          Editorial index
/journal/[slug]   Post
/contact          Enquiry form
/privacy /terms /thanks /404
```

**Nav:** `Work · Coaching · Workshops · Esoterica · About · Journal · Contact`

Seven items is at the ceiling for a boutique site. If it feels crowded once built, Journal is the one to drop into the footer.

**`/work` carries both the consulting practice and the case studies.** It is where the edtech and digital-learning consulting line lives. This is stated explicitly because it is the one non-obvious placement in the IA — do not create a separate `/consulting` page.

---

## 7. Page-by-page

### 7.1 Home

Draft order, plus two additions from the research: the logo wall (Sharma) and the numbers strip (Female Founders).

| # | Section | Copy source |
| --- | --- | --- |
| 1 | **Hero** — name, tagline, strapline, lead paragraph, primary CTA | `Website.pdf` § HOME — verbatim |
| 2 | **Client logo wall** — UCT GSB, AMI, AGRA, Cambridge Judge, FutureLearn, University of Bristol, SALGA | CV. Marquee, monochrome, on linen |
| 3 | **The Problem** — "Strategy doesn't execute itself." | `Website.pdf` § THE PROBLEM — verbatim |
| 4 | **What I Do** — 5 practice areas | `Website.pdf` § WHAT I DO + new edtech area (§3.1) |
| 5 | **Numbers** — full-bleed night, brass numerals | CV. See §7.7 |
| 6 | **How I Work** — the five questions | `Website.pdf` § HOW I WORK — verbatim |
| 7 | **Selected Work** — 3 cases | `Website.pdf` § SELECTED WORK — verbatim |
| 8 | **The Way I Think** — "Structure for ambiguity" + 5 capabilities | `Website.pdf` § THE WAY I THINK — verbatim |
| 9 | **About preview** — portrait + 2 paragraphs + link | `Website.pdf` § ABOUT, trimmed |
| 10 | **Journal preview** — 3 cards | New |
| 11 | **Let's Talk** — full-bleed aubergine closer | `Website.pdf` § LET'S TALK — verbatim |
| 12 | **Footer** | `Website.pdf` § FOOTER |

Hero copy, ready to place:

> **Turn strategy into capability.**
> Leadership & Capability Transformation · Executive Education · Organisational Change · Coaching
>
> I help organisations translate strategic priorities into the leadership capability, programmes and organisational change needed to make them real.
>
> `[Start a conversation]`

### 7.2 `/work`

`Header → 5 practice areas, expanded → Selected work, 3 full-row editorial entries → Client list → CTA`

Three cases, all drafted: **Centre for African Leaders in Agriculture** (AGRA, 8→13 countries, Executive and Junior Leadership tiers); **Executive Education & International Immersions**; **Digital & Blended Learning** (Cambridge Judge, FutureLearn, University of Bristol).

### 7.3 `/coaching`

`Header → What coaching is for → Formats → How an engagement runs → Credentials → FAQ → CTA`

Mostly to be written. Existing seed: the draft's Coaching paragraph and the "Creating the conditions for people to think, reflect and change" line.

### 7.4 `/workshops`

`Header → Commissioned workshops → Open workshops (dates, seats, booking) → What a room looks like → FAQ → CTA`

Fork `entrepreneurcoach/src/pages/workshop.astro` for the open-cohort half.

### 7.5 `/esoterica`

Night palette throughout. Same type system, same nav, same booking mechanics.

`Header → What this is (and isn't) → How a reading runs → Formats & pricing → Booking → A quiet note on what it's for`

Tone: composed, unmystified, continuous with the coaching practice. No fortune-telling register, no purple prose. The design does the atmosphere; the copy stays plain.

### 7.6 `/about`

`Header → Portrait → Bio → The arc (publishing → brand → instructional design → programme architecture → coaching) → Credentials & education → Selected clients → CTA`

The draft's About copy is strong — *"I'm particularly interested in the messy middle."* Keep it and add the publishing origin (§1), which is currently missing entirely and is the most memorable thing about her.

### 7.7 Numbers strip

Four figures, all from the CV. Each must stay defensible.

| Figure | Label | Source |
| --- | --- | --- |
| **10+** | Years designing learning and capability | CV profile |
| **13** | African countries reached through AGRA leadership development (up from 8) | `Website.pdf` § SELECTED WORK. **Note:** the CV's separate “eight African countries” figure is the AMI role, not AGRA — don't conflate them |
| **R10M+** | Programme budgets led at UCT GSB | CV, UCT GSB role |
| **14+** | Countries and territories coordinated | CV, selected impact |

### 7.8 `/journal`

The goop-style editorial layer — the reason to return. Categories: `Field Notes · Programme Design · Leadership · Coaching · Interview`. Three or four posts before launch.

### 7.9 `/contact`

Fork `entrepreneurcoach/src/pages/contact.astro`. Retarget the fields: *nature of the enquiry* (consulting / coaching / workshop / tarot / something else), *organisation*, *what you're trying to achieve*, two suggested times. Keep the "you don't need a perfect brief — bring the problem" microcopy from the draft; it is the best conversion copy on the site.

---

## 8. Reuse from `entrepreneurcoach`

`getluckyjo/entrepreneurcoach` is a well-documented Astro 5 + Tailwind 4 static site with a `DESIGN.md` that is explicitly its source of truth. **The architecture transfers wholesale. The visual identity does not.**

### Lift

| What | Where | Why |
| --- | --- | --- |
| Stack + config | `astro.config.mjs`, `package.json` | Astro 5, Tailwind 4, MDX, sitemap with per-route priority serialisation, `trailingSlash: "never"`, sharp. Zero JS by default. |
| **Single source of truth** | `src/data/site.ts` | Typed content object — services, cases, FAQs, contact. The reason any content change is one file. Copy the pattern, replace the values. |
| **SEO builders** | `src/lib/seo.ts` | `pageTitle`, `canonical`, and JSON-LD builders for Person, ProfessionalService, Service, FAQPage, Course, BreadcrumbList. Retarget values, keep the shape. |
| **OG pipeline** | `src/lib/og.ts` + `scripts/build-og-images.mjs` | Per-route OG panels rasterised to PNG. Carries a hard-won lesson: **LinkedIn renders an SVG `og:image` as a grey placeholder.** PNG only. |
| Layout components | `BaseLayout`, `Nav`, `Footer`, `CookieBanner` | Restyle, don't rebuild. |
| UI components | `Button`, `SectionHeader`, `AnimatedNumber`, `Marquee`, `VideoEmbed`, `PlaceholderBadge` | `AnimatedNumber` **is** the Female Founders odometer, already built. `Marquee`, retimed and softened, becomes the client logo wall. |
| Content collections | `src/content/config.ts` | Typed journal frontmatter, enforced at build. Swap the `category` enum. |
| Contact form | `src/pages/contact.astro` | formsubmit.co — no account, no env vars, works on a static host. Includes the suggest-two-times pattern. |
| Workshop page | `src/pages/workshop.astro` | A complete cohort/seats/booking page. Closest thing to a ready-made Workshops page; the same structure serves tarot booking. |
| POPIA posture | `CookieBanner`, `/privacy`, `/terms`, information-officer fields | SA compliance, already worked out. |

### Leave

Vermilion `#F25C2A` · the Geist-only single-family system · stacked one-word display headlines · the Caveat handwritten signature · mixed-case display mischief · the "operator, not a coach" voice · the metrics slab in its current loud form · all Johannes-specific content.

### Approach

Fork the structure into this repo as a fresh Astro project — **do not** import `entrepreneurcoach`'s `global.css` and then override it. Start from the tokens in §5 and pull components across one at a time, restyling as each lands. Overriding a fully-formed design system is how you end up with vermilion in the footer at 2am.

---

## 9. Build roadmap

> **Status:** Phases 0–5 are built and on `claude/busy-pascal-lnryrb`. 15 routes, `astro check` clean, zero axe violations (WCAG 2.1 AA) across every route on desktop and mobile. Phase 6 is what remains — see the pre-launch list in [README.md](README.md).

**Phase 0 — Decisions.** Resolve §10. Domain now confirmed; photography is the remaining blocker.

**Phase 1 — Foundation.** Astro 5 + Tailwind 4 scaffold. `global.css` from the §5 tokens. Instrument Serif + Geist. `BaseLayout`, `Nav`, `Footer`. `src/data/site.ts` populated from the two PDFs.

**Phase 2 — Home.** All twelve sections, copy from `Website.pdf`. Placeholder imagery, clearly flagged. This is the review artefact — get sign-off on the design here before building six more pages in the wrong direction.

**Phase 3 — Core pages.** `/work`, `/about`, `/contact`. These three plus home are a shippable site.

**Phase 4 — Service pages.** `/coaching`, `/workshops`, `/tarot`. Needs new copy from Carla.

**Phase 5 — Editorial.** `/journal` + first 3 posts.

**Phase 6 — Launch.** Real photography swapped in. SEO: schema, sitemap, OG PNGs. Contact form activated end-to-end. `/privacy`, `/terms`. Lighthouse pass. DNS.

---

## 10. Open questions

Everything here needs Carla, and the first three block launch.

**Identity**

- [x] **Domain.** `carlaleroux.com` (canonical) and `carlaleroux.co.za`, both registered. The `.co.za` and the apex should 301 to `https://www.carlaleroux.com`.
- [x] **Email.** `hello@carlaleroux.com`, on Gmail. The CV's `carla.potgter@gmail.com` contains a typo and must never ship.
- [ ] **LinkedIn.** The CV points at `linkedin.com/in/carlapotgieter`, but the brand name throughout is **Carla le Roux**. Keep the handle and accept the mismatch, or migrate it?
- [x] Public-facing name: **Carla le Roux**.

**Content**

- [ ] **Photography.** Does a shoot exist? If not it needs commissioning — the design depends on real imagery at scale, and stock is out.
- [ ] **Client logo permissions.** Which of UCT GSB, AMI, AGRA, Cambridge Judge, FutureLearn, University of Bristol, SALGA can be named and logo'd? Some may need sign-off, particularly where work was done through an intermediary (Hubble Studios, Elevate Learning).
- [ ] **Pricing.** Published or on enquiry, for each of the four lines?
- [ ] **Testimonials.** None exist yet. Three named quotes would do more for conversion than any design decision in this document.
- [ ] **Coaching formats** — 1:1, team, programme-embedded? Session and engagement length?
- [ ] **Tarot** — formats, pricing, in-person vs. remote, and how prominently she wants it foregrounded.

**Positioning**

- [ ] How far to lean on the **publishing/editing origin**. Recommendation: hard. It's the most differentiated thing in the CV.
- [ ] Is there an entity name, or does everything trade under her own name?

---

## 11. Sources

| Source | Used for |
| --- | --- |
| `Website.pdf` | Site copy, tagline, section structure, CTA labels, voice |
| `Carla_le_Roux_Organisational_Learning_CV_2026 (1).pdf` | Roles, dates, clients, metrics, credentials, education |
| robinsharma.com | Authority-stack structure |
| goop.com | Editorial/commerce coexistence; the tarot precedent |
| victoriabeckham.com | Typographic restraint, imagery scale, nav economy |
| female-founders.org | Numbers device, manifesto voice, logo wall, team grid |
| The Row / Toteme / Khaite / Glossier / Ellevate / Chief | Wider female-led brand research (§4) |
| `getluckyjo/entrepreneurcoach` | Engineering patterns, SEO, OG pipeline, forms (§8) |

---

## 12. What the build corrected

Three things in §5 were wrong as specified and were fixed against measurement,
not judgement. They are recorded here because each will silently come back if
someone edits the tokens without knowing why they hold.

**1. The metric type scale collided.** `clamp(3.5rem, 8vw, 7rem)` put `R10M+`
straight through its neighbour in the four-column numbers grid — at 1440px the
third and fourth figures overlapped outright. The scale is now
`clamp(2.75rem, 4.6vw, 4.5rem)`, sized to the widest value actually published,
with `min-w-0` on the grid cells so a long value can't push its track wider than
its share. Verified clear at 1600 / 1440 / 1280 / 1024.

**2. Night sections needed token rebinding, not component restyling.** The
original `.on-night` styled the elements we happened to think of — headings,
eyebrow, lead, card. The shared `Footer` knew nothing about night mode, so on
`/esoterica` it rendered `#3A332C` body text and `#3B2436` links on a `#1A1018`
ground: seven nodes between 1.31:1 and 2.91:1, all serious failures, none
visible to a casual look. `.on-night` now remaps the semantic `--color-*` tokens
themselves, so anything nested adapts without a night variant of its own.

**3. That fix created its own trap, and needed an escape hatch.** The fixed
cookie notice is a *light* panel living inside `<body class="on-night">`, so it
inherited the remap and painted brass on paper (3.11:1). `.surface-light`
restores the base palette from immutable `--l-*` snapshots captured at `:root` —
no hex is duplicated, and a remap deeper in the tree cannot reach them. Any light
surface nested in a night context needs that class.

The lesson generalises: **a design system that remaps tokens by context needs
both directions of the mapping, and needs a machine checking it.** `npm run a11y`
runs axe over every route at two viewports and is the reason all three were
caught. Run it before any deploy that touches colour or layout.
