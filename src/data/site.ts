/**
 * Site-wide content. Single source of truth.
 *
 * Every fact here traces to one of the two source PDFs in this repo:
 *   - Website.pdf  → copy, tagline, section text
 *   - CV 2026.pdf  → roles, dates, clients, metrics, credentials
 *
 * Edit here and it propagates everywhere. See PROJECT.md for the why.
 */

export const site = {
  name: "Carla le Roux",
  brand: "Carla le Roux",
  /** Canonical. carlaleroux.co.za is also owned and should 301 here.
   *  Must stay in lockstep with `site` in astro.config.mjs. */
  domain: "https://www.carlaleroux.com",
  tagline: "Turn strategy into capability.",
  strapline:
    "Leadership & Capability Transformation · Executive Education · Organisational Change · Coaching",
  description:
    "Carla le Roux helps organisations translate strategic priorities into the leadership capability, programmes and organisational change needed to make them real. Cape Town, working globally.",
  locale: "en-ZA",
  /** Hosted on Gmail. The CV's carla.potgter@gmail.com contains a typo
   *  and must never ship — this is the address of record. */
  email: "hello@carlaleroux.com",
  location: "Cape Town, South Africa",
  reach: "Working globally",
  social: {
    /** The CV lists /carlapotgieter against a Carla le Roux brand name.
     *  Keep or migrate — open question, PROJECT.md §10. */
    linkedin: "https://www.linkedin.com/in/carlapotgieter",
  },
  legal: {
    operator: "Carla le Roux",
    informationOfficer: "Carla le Roux", // POPIA s.55–56
    legalEntity: "Carla le Roux (Sole Proprietor)",
  },
} as const;

/* ─────────────────────────── Practice areas ─────────────────────────── */

export type PracticeArea = {
  slug: string;
  name: string;
  summary: string;
  body: string;
};

/** Five areas. The first four are verbatim from Website.pdf § WHAT I DO.
 *  The fifth (EdTech) is promoted from a case-study bullet — see PROJECT.md §3.1. */
export const practiceAreas: readonly PracticeArea[] = [
  {
    slug: "leadership-development",
    name: "Leadership Development",
    summary: "Development that responds to the organisation you're actually in.",
    body: "Designing leadership development that responds to the organisation you're actually in, not a generic leadership competency framework. From emerging leaders to senior executives, I design experiences that develop the capabilities, mindsets and behaviours organisations need for what comes next.",
  },
  {
    slug: "executive-education",
    name: "Executive Education & Programme Design",
    summary: "For organisations that need more than a collection of workshops.",
    body: "Designing sophisticated, multi-format learning journeys for organisations that need more than a collection of workshops. I work across the full programme lifecycle — from understanding the strategic challenge and defining the architecture, through programme design, stakeholder alignment and delivery.",
  },
  {
    slug: "organisational-capability",
    name: "Organisational Capability & Change",
    summary: "Connecting learning to the broader organisational system.",
    body: "Connecting learning to the broader organisational system. Where new strategy, transformation or growth requires people to work differently, I help identify the capabilities, behaviours, structures and experiences that can enable that change.",
  },
  {
    slug: "immersive-learning",
    name: "Immersive Learning",
    summary: "Experiences that take learning beyond the classroom.",
    body: "Designing experiences that take learning beyond the classroom. International immersions, organisational visits, experiential learning and carefully curated encounters can create powerful opportunities for leaders to challenge assumptions, see systems differently and bring new possibilities back into their organisations.",
  },
  {
    slug: "digital-learning",
    name: "Digital, Blended & EdTech Design",
    summary: "Specialist content turned into learning that works at a distance.",
    body: "Turning specialist content into digital and blended experiences that hold a learner's attention and actually build capability. I've designed digital learning for Cambridge Judge Business School, FutureLearn and the University of Bristol, and built the UCT Graduate School of Business's first blended programme. Where an organisation is moving learning online, the question is rarely the platform — it's the design.",
  },
];

/* ─────────────────────────── The bridge ───────────────────────────
 * Positioning: Carla sits on both sides of a market that mostly talks past
 * itself. European institutions want access to Africa as the growth market;
 * African organisations want current skills and innovation. Very few people
 * have delivered credibly in both directions. Her CV shows she has:
 *   Africa   — UCT GSB, African Management Institute (8 countries),
 *              AGRA (13 countries), SALGA, Tekano, Columba
 *   Europe   — Cambridge Judge, FutureLearn, University of Bristol,
 *              Utrecht exchange, iXperience Lisbon programme
 */

export type BridgeSide = {
  audience: string;
  want: string;
  offer: string;
  proof: readonly string[];
};

export const bridge: readonly BridgeSide[] = [
  {
    audience: "European universities & business schools",
    want: "Access to Africa as the growth market — credibly, and with partners who will still be there in year three.",
    offer:
      "Programme design and partnership development that works on the ground in African markets, rather than exporting a European curriculum and hoping. I know how these programmes are bought, staffed, accredited and actually delivered on both continents.",
    proof: [
      "Digital learning design for Cambridge Judge Business School, FutureLearn and the University of Bristol",
      "Directed the iXperience Lisbon programme and built international university partnerships",
      "A decade inside African executive education at UCT GSB and the African Management Institute",
    ],
  },
  {
    audience: "African corporates & institutions",
    want: "Access to the latest in skills, learning practice and innovation — without paying for a programme designed for somewhere else.",
    offer:
      "Bringing current international practice into African organisations and adapting it properly: same rigour, local relevance, and a design that survives contact with the context it lands in.",
    proof: [
      "Leadership development across 13 African countries with AGRA",
      "Scalable leadership and management programmes across 8 African countries",
      "Multi-year, R10M+ executive programmes at UCT Graduate School of Business",
    ],
  },
];

/* ─────────────────────────── Selected work ─────────────────────────── */

export type CaseStudy = {
  slug: string;
  name: string;
  meta: string;
  body: string;
  image?: string;
  imageAlt?: string;
};

/** Verbatim from Website.pdf § SELECTED WORK. */
export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "african-leaders-agriculture",
    name: "Centre for African Leaders in Agriculture",
    meta: "Leadership development · Africa · Multi-country",
    body: "Designed and led the development of a major leadership initiative with AGRA, expanding its reach from 8 to 13 African countries and introducing Executive and Junior Leadership Development tiers.",
  },
  {
    slug: "executive-education-immersions",
    name: "Executive Education & International Immersions",
    meta: "Programme architecture · Leadership development · Global",
    body: "Designed and led multi-year, multi-cohort executive education programmes incorporating international immersion experiences, complex stakeholder ecosystems and multiple delivery partners.",
  },
  {
    slug: "digital-blended-learning",
    name: "Digital & Blended Learning",
    meta: "Learning innovation · Digital transformation",
    body: "Designed digital and blended learning experiences for leading educational institutions and organisations, including Cambridge Judge Business School, FutureLearn and the University of Bristol.",
  },
];

/* ─────────────────────────── Numbers ───────────────────────────
 * Every figure must stay defensible. Sources noted per entry.
 * `value` is the number the counter tweens to; `prefix`/`suffix` frame it. */

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const metrics: readonly Metric[] = [
  { value: 10, suffix: "+", label: "Years designing learning and capability" },
  // Website.pdf § SELECTED WORK. Distinct from the CV's "eight African
  // countries", which is the African Management Institute role — don't conflate.
  { value: 13, label: "African countries reached through AGRA leadership development" },
  { value: 10, prefix: "R", suffix: "M+", label: "Programme budgets led at UCT GSB" },
  { value: 14, suffix: "+", label: "Countries and territories coordinated" },
];

/* ─────────────────────────── Clients ─────────────────────────── */

/** From the CV. Logo permissions still to be confirmed — PROJECT.md §10.
 *  Until then these render as a wordmark wall, not image logos. */
export const clients: readonly string[] = [
  "UCT Graduate School of Business",
  "African Management Institute",
  "AGRA",
  "Cambridge Judge Business School",
  "FutureLearn",
  "University of Bristol",
  "SALGA",
  "Tekano — Atlantic Fellows for Health Equity",
  "Columba Leadership",
];

/* ─────────────────────────── How I work ─────────────────────────── */

/** Verbatim from Website.pdf § HOW I WORK. */
export const howIWork: readonly string[] = [
  "What is the organisation trying to achieve?",
  "What needs to be different for that to happen?",
  "What capabilities are currently missing?",
  "What will leaders need to think, do or lead differently?",
  "What will make the change stick?",
];

/* ─────────────────────────── The way I think ─────────────────────────── */

/** Verbatim from Website.pdf § THE WAY I THINK. */
export const capabilities: readonly { name: string; body: string }[] = [
  { name: "Strategic thinking", body: "Understanding the organisational challenge behind the brief." },
  { name: "Learning expertise", body: "Knowing how adults actually develop capability." },
  { name: "Systems thinking", body: "Seeing learning as part of a wider organisational system." },
  { name: "Programme leadership", body: "Turning ideas into complex, deliverable programmes." },
  { name: "Coaching", body: "Creating the conditions for people to think, reflect and change." },
];

/* ─────────────────────────── Who I work with ─────────────────────────── */

/** Verbatim from Website.pdf § WHO I WORK WITH. */
export const clientQuestions: readonly string[] = [
  "How do we build the leadership capability our strategy requires?",
  "How do we design a leadership programme that actually changes something?",
  "How do we turn a strategic priority into a meaningful development experience?",
  "How do we equip leaders to navigate complexity and change?",
  "How do we bring together learning, leadership and organisational transformation?",
];

/* ─────────────────────────── Experience ─────────────────────────── */

export type Role = {
  org: string;
  title: string;
  years: string;
  points: readonly string[];
};

/** From the CV. */
export const experience: readonly Role[] = [
  {
    org: "UCT Graduate School of Business",
    title: "Learning Design Partner",
    years: "2023 — present",
    points: [
      "Lead the end-to-end design and delivery of multi-year, multi-cohort leadership and management development programmes with budgets exceeding R10 million.",
      "Translate organisational priorities and capability requirements into structured learning journeys, programme architectures and implementation plans.",
      "Design blended experiences combining facilitated learning, reflection, coaching, workplace application and international exposure.",
      "Facilitate integration and reflective learning sessions for senior leaders, government officials and board-level participants.",
    ],
  },
  {
    org: "African Management Institute",
    title: "Learning Design Lead",
    years: "2021 — 2023",
    points: [
      "Led the design and delivery of scalable leadership and management programmes across eight African countries.",
      "Developed learning solutions for diverse organisational, cultural and technological contexts while maintaining consistency across markets.",
      "Managed multicultural teams and cross-border stakeholders, using learner feedback to improve content and implementation.",
    ],
  },
  {
    org: "Independent Consulting",
    title: "Senior Learning Designer",
    years: "2020 — 2021",
    points: [
      "Contributed to digital learning projects for Cambridge Judge Business School, FutureLearn and the University of Bristol through Hubble Studios.",
      "Supported learning design for Tekano Atlantic Fellows for Health Equity, Columba Youth Leadership and SALGA Women in Local Government Leadership through Elevate Learning.",
    ],
  },
  {
    org: "iXperience",
    title: "Head of Global Partnerships · Programme Director, Lisbon",
    years: "2019 — 2020",
    points: [
      "Built university partnerships and developed avenues to increase international student mobility.",
      "Directed the Lisbon programme, leading the execution team across operations, participant experience and legal compliance.",
    ],
  },
  {
    org: "UCT Graduate School of Business",
    title: "Business Developer",
    years: "2016 — 2019",
    points: [
      "Translated organisational learning needs into theoretically sound executive education programmes.",
      "Designed the School's first blended learning programme.",
    ],
  },
  {
    org: "The Red & Yellow Creative School of Business",
    title: "Instructional Designer",
    years: "2013 — 2015",
    points: [
      "Designed learning content and learner experiences within a creative business education environment.",
    ],
  },
];

export const education: readonly { qualification: string; institution: string; year: string }[] = [
  { qualification: "Honours, Creative Brand Leadership", institution: "Vega School of Brand Leadership", year: "2012" },
  { qualification: "Master of Arts, English Studies", institution: "Stellenbosch University", year: "2009" },
  { qualification: "International Exchange", institution: "Utrecht University, Netherlands", year: "2007–2008" },
  { qualification: "Honours, English Studies", institution: "Stellenbosch University", year: "2006" },
];

export const development: readonly { name: string; year: string }[] = [
  { name: "Professional Coaching Programme, UCT GSB", year: "In progress" },
  { name: "Coaching for Development, UCT GSB", year: "2024" },
  { name: "Instructional Design Models, edX", year: "2018" },
  { name: "Finance for Non-Financial Managers, UCT GSB", year: "2016" },
  { name: "How to Measure Learning Effectiveness", year: "2016" },
];

/* ─────────────────────────── FAQs ─────────────────────────── */

export type Faq = { q: string; a: string };

export const consultingFaqs: readonly Faq[] = [
  {
    q: "Do I need to have the brief worked out before getting in touch?",
    a: "No. Bring the problem. A good part of the work is figuring out what the actual challenge is — and whether a learning intervention is the right response to it.",
  },
  {
    q: "What size of organisation do you work with?",
    a: "Universities, business schools, corporates, foundations and development organisations. The common factor is complexity: multiple stakeholders, competing definitions of success, and a strategy that needs people to work differently.",
  },
  {
    q: "Do you deliver, or only design?",
    a: "Both. I design programme architectures and learning journeys, and I facilitate — integration sessions, reflective practice, and workshops with senior leaders and board-level participants.",
  },
  {
    q: "Where are you based, and do you travel?",
    a: "Cape Town, working globally. I've delivered across Africa, Europe and the UK, and designed international immersions as part of executive programmes.",
  },
];

export const coachingFaqs: readonly Faq[] = [
  {
    q: "What kind of coaching is this?",
    a: "Integrative — it draws on organisational and systems thinking as much as on individual development, because leaders don't operate in isolation from the systems around them.",
  },
  {
    q: "What are your coaching credentials?",
    a: "I'm currently completing the Professional Coaching Programme at the UCT Graduate School of Business, and completed Coaching for Development there in 2024. I've been coaching leaders through development and change alongside my programme work for several years.",
  },
  {
    // Deliberately no fixed number until Carla sets one — this is honest as it
    // stands, and an invented figure would be worse than an open answer.
    q: "How long is an engagement?",
    a: "It depends on what you're working on. Coaching relationships tend to run over months rather than a handful of sessions — long enough for something to actually change in practice, not just in the room. We agree the shape and the length up front, before either of us commits.",
  },
];
