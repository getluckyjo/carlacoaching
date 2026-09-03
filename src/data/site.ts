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
   *  and must never ship – this is the address of record. */
  email: "hello@carlaleroux.com",
  location: "Cape Town, South Africa",
  reach: "Working globally",
  social: {
    /** The CV lists /carlapotgieter against a Carla le Roux brand name.
     *  Keep or migrate – open question, PROJECT.md §10. */
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
  /** Icon name from src/components/ui/Icon.astro – represents the deliverable. */
  icon: "compass" | "layers" | "system" | "globe" | "screen" | "spark";
};

/** Five areas. The first four are verbatim from Website.pdf § WHAT I DO.
 *  The fifth (EdTech) is promoted from a case-study bullet – see PROJECT.md §3.1. */
export const practiceAreas: readonly PracticeArea[] = [
  {
    slug: "leadership-development",
    icon: "compass",
    name: "Leadership Development",
    summary: "Building the capabilities organisations need for what comes next.",
    body: "Leadership development should respond to the organisation you are actually in – not a generic competency framework. From emerging talent to senior executives, I design experiences that help people develop the mindsets, behaviours and capabilities required to navigate complexity, lead change and turn strategic priorities into action.",
  },
  {
    // Slug kept: /work#executive-education is already an anchor and a schema @id.
    slug: "executive-education",
    icon: "layers",
    name: "Programme Design",
    summary: "Learning journeys designed around real organisational challenges.",
    body: "Organisations rarely need another collection of workshops. They need thoughtfully designed experiences that connect learning to the work that matters. I work across the full programme lifecycle – from understanding the strategic challenge and defining the learning architecture, through stakeholder alignment, design, facilitation and delivery.",
  },
  {
    slug: "organisational-capability",
    icon: "system",
    name: "Organisational Capability & Change",
    summary: "Turning strategy into the ability to execute.",
    body: "When organisations transform, grow or pursue new strategic directions, the question is not simply what people need to know – but what they need to be able to do differently. I help identify the capabilities, behaviours, systems and experiences required to support meaningful change.",
  },
  {
    slug: "immersive-learning",
    icon: "globe",
    name: "Immersive Learning",
    summary: "Creating experiences that shift perspective and expand possibility.",
    body: "Learning does not only happen in classrooms. International immersions, organisational visits and carefully curated encounters create opportunities for people to challenge assumptions, see systems differently and return with new insights, questions and possibilities.",
  },
  {
    slug: "coaching",
    icon: "spark",
    name: "Coaching",
    summary: "Helping people move from insight to meaningful action.",
    body: "Coaching creates space to think more deeply, see new possibilities and navigate moments of change. I work with individuals who are stepping into something new, facing complex decisions, questioning what comes next, or wanting to translate awareness into different choices and behaviours. Development is not about fixing what is wrong. It is about expanding what is possible.",
  },
  {
    slug: "digital-learning",
    icon: "screen",
    name: "Digital and Blended Learning Design",
    summary: "Specialist content to scale the learning experience.",
    body: "I've designed digital learning for Cambridge Judge Business School, FutureLearn and the University of Bristol at Hubble Studios, and built the UCT GSB's first blended programme. Where an organisation is moving learning online, the question is rarely the platform – it's the design.",
  },
];

/* ─────────────────────────── Hero stats ───────────────────────────
 * The trio directly under the hero – the female-founders "250+ / 500+ / 50%"
 * device. Short enough to read in one glance, all traceable to the CV. */

export const heroStats: readonly {
  value: string;
  label: string;
  /** Icon name from src/components/ui/Icon.astro. */
  icon: "africa" | "value" | "globe";
}[] = [
  { value: "8", icon: "africa", label: "African countries reached with the Centre for African Leaders in Agriculture (CALA)" },
  { value: "R10M+", icon: "value", label: "Programme budgets led at UCT GSB" },
  // 3 → 2: the UK is in Europe, so three was not defensible. The hero lead
  // still says "Africa, Europe and the UK", which is fine as market shorthand
  // in prose but not as a counted figure.
  { value: "2", icon: "globe", label: "Continents – Africa and Europe" },
];

/* ─────────────────────────── Manifesto ───────────────────────────
 * The declarative block. Modelled on female-founders' "Women are not a niche."
 * – short lines, stated flatly, no hedging. */

export const manifesto = {
  kicker: "From strategic priority to meaningful capability.",
  body: [
    "Organisations struggle when strategy doesn't translate into what people need to know, do and change.",
    "A new strategy might require different leadership behaviours. A transformation might require new capabilities. But somewhere between the strategy document and organisational reality, things get complicated.",
  ],
  /** Set on its own line, in ink rather than soft ink. */
  pivot: "This is where I come in.",
  after: [
    "I work with organisations to make sense of the challenge, identify the capabilities that matter, and design programmes and experiences that connect learning to the real work of the organisation.",
    "And I particularly love working with mission-driven organisations tackling complex systems challenges – creating learning environments where people don't just talk about the problem, but work on it. Through action learning, participants apply what they're learning to real organisational challenges, generating insight, building capability and, ideally, leaving something useful behind.",
  ],
  pullquote: "Learning is not a department or a set of interventions. It is how an organisation becomes able to do what it needs to do next.",
} as const;

/* ─────────────────────────── Audiences ───────────────────────────
 * Three blocks, the female-founders "For Founders / For Partners / For
 * Investors" structure. Each states the leverage, then asks for the meeting. */

export type Audience = {
  heading: string;
  icon: "network" | "conversation" | "convene";
  punch: readonly string[];
  body: string;
  close: string;
  cta: { label: string; href: string };
};

export const audiences: readonly Audience[] = [
  {
    heading: "For organisations",
    icon: "network",
    punch: ["Build the capability.", "Not just the programme."],
    body: "Leadership development, executive education and organisational change designed around the challenge you're actually facing – from understanding the strategic problem, through programme architecture, to delivery and what makes it stick.",
    close: "From strategy to capability that holds.",
    cta: { label: "See the work", href: "/work" },
  },
  {
    heading: "For leaders",
    icon: "conversation",
    punch: ["Think differently.", "Then act on it."],
    body: "I work with individuals who want to understand themselves more deeply, challenge the stories and patterns that shape their choices, and develop new capacities for what comes next. Coaching is not about providing more advice. It is about creating the space to think differently, act with greater intention, and move towards possibilities that were previously out of reach.",
    close: "Space to think. Courage to act.",
    cta: { label: "About coaching", href: "/coaching" },
  },
  {
    heading: "For institutions that convene change",
    icon: "convene",
    punch: ["The hardest problems", "can't be solved alone."],
    body: "Some organisations exist to bring people together – across sectors, countries, disciplines and perspectives – to tackle challenges that are bigger than any one institution. This is work I love: helping create the platforms, programmes and action-learning experiences that turn different perspectives into shared understanding, and shared understanding into action.",
    close: "Build the platform. Shift the system.",
    cta: { label: "Start a conversation", href: "/contact" },
  },
];

/* ─────────────────────────── The bridge ───────────────────────────
 * Positioning: Carla sits on both sides of a market that mostly talks past
 * itself. European institutions want access to Africa as the growth market;
 * African organisations want current skills and innovation. Very few people
 * have delivered credibly in both directions. Her CV shows she has:
 *   Africa   – UCT GSB, African Management Institute (8 countries),
 *              AGRA (8 countries), SALGA, Tekano, Columba
 *   Europe   – Cambridge Judge, FutureLearn, University of Bristol,
 *              Utrecht exchange, iXperience Lisbon programme
 */

export type BridgeSide = {
  audience: string;
  icon: "globe" | "compass";
  want: string;
  offer: string;
  proof: readonly string[];
};

export const bridge: readonly BridgeSide[] = [
  {
    audience: "European universities & business schools",
    icon: "globe",
    want: "Access to Africa as the growth market – credibly, and with partners who will still be there in year three.",
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
    icon: "compass",
    want: "Access to the latest in skills, learning practice and innovation – without paying for a programme designed for somewhere else.",
    offer:
      "Bringing current international practice into African organisations and adapting it properly: same rigour, local relevance, and a design that survives contact with the context it lands in.",
    proof: [
      "Leadership development across 8 African countries with AGRA",
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
    body: "Designed and led the development of a major leadership initiative with AMI in partnership with AGRA, extending its reach across 8 African countries.",
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
    body: "Designed digital and blended learning experiences for leading educational institutions and organisations, including the University of Cape Town Graduate School of Business, the African Management Institute, Cambridge Judge Business School, FutureLearn and the University of Bristol.",
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
  { value: 10, suffix: "+", label: "Years designing learning programmes and developing capabilities" },
  // Carla's own revision, Sept 2026: the AGRA work is named for CALA, the
  // Centre for African Leaders in Agriculture, and credits both partners.
  { value: 8, label: "African countries reached through CALA, in partnership with AMI and AGRA" },
  { value: 10, prefix: "R", suffix: "M+", label: "Programme budgets led at UCT GSB" },
  // 14+ → 21+ on her instruction.
  { value: 21, suffix: "+", label: "Countries and territories coordinated" },
];

/* ─────────────────────────── Clients ─────────────────────────── */

export type Client = {
  /** As it should read on the wall. */
  name: string;
  /** Slug, and the basename the logo file must use: public/img/clients/<slug>.(svg|png|webp) */
  slug: string;
  /** Official site. The logo fetcher reads its <head>/header for the asset. */
  url: string;
  /**
   * Logo permission. `true` only once the organisation has confirmed in
   * writing. LogoWall renders an image for a cleared client that has a file on
   * disk, and the wordmark for everyone else – so an uncleared logo can sit in
   * the repo without ever shipping.
   */
  cleared?: boolean;
  /** Where clearance came from, or who to ask. */
  note?: string;
};

/** From the CV. Logo permissions still to be confirmed – PROJECT.md §10, README
 *  "Before launch" §3. Until an entry is `cleared`, it renders as a wordmark.
 *  Run `npm run logos` to pull each organisation's own logo into
 *  public/img/clients/ ready for the switch. */
export const clients: readonly Client[] = [
  {
    name: "UCT Graduate School of Business",
    slug: "uct-gsb",
    url: "https://www.gsb.uct.ac.za/",
    note: "Direct client. Ask the programme office.",
  },
  {
    name: "African Management Institute",
    slug: "african-management-institute",
    url: "https://www.africanmanagers.com/",
    note: "Direct client (2021–2023).",
  },
  {
    name: "AGRA",
    slug: "agra",
    url: "https://agra.org/",
    note: "Reached through AMI – clear with both.",
  },
  {
    name: "Cambridge Judge Business School",
    slug: "cambridge-judge",
    url: "https://www.jbs.cam.ac.uk/",
    note: "Reached through Hubble Studios – clear with the intermediary first.",
  },
  {
    name: "FutureLearn",
    slug: "futurelearn",
    url: "https://www.futurelearn.com/",
    note: "Reached through Hubble Studios – clear with the intermediary first.",
  },
  {
    name: "University of Bristol",
    slug: "university-of-bristol",
    url: "https://www.bristol.ac.uk/",
    note: "Reached through Hubble Studios – clear with the intermediary first.",
  },
  {
    name: "SALGA",
    slug: "salga",
    url: "https://www.salga.org.za/",
    note: "Through UCT GSB programme delivery.",
  },
  {
    name: "Tekano – Atlantic Fellows for Health Equity",
    slug: "tekano",
    url: "https://tekano.org.za/",
    note: "Two marks – Tekano and Atlantic Fellows. Use Tekano's.",
  },
  {
    name: "Columba Leadership",
    slug: "columba-leadership",
    url: "https://www.columba.org.za/",
    note: "Reached through Elevate Learning – clear with the intermediary first.",
  },
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
  { name: "Programme leadership", body: "Coordinating with multiple stakeholders to create programmes with lasting impact." },
  { name: "Coaching", body: "Creating the conditions for people to think, reflect and change." },
  { name: "Platform creation", body: "Building platforms where diverse perspectives become shared understanding and collective action." },
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
    years: "2023 – present",
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
    years: "2021 – 2023",
    points: [
      "Led the design and delivery of scalable leadership and management programmes across eight African countries.",
      "Developed learning solutions for diverse organisational, cultural and technological contexts while maintaining consistency across markets.",
      "Managed multicultural teams and cross-border stakeholders, using learner feedback to improve content and implementation.",
    ],
  },
  {
    org: "Independent Consulting",
    title: "Senior Learning Designer",
    years: "2020 – 2021",
    points: [
      "Contributed to digital learning projects for Cambridge Judge Business School, FutureLearn and the University of Bristol through Hubble Studios.",
      "Supported learning design for Tekano Atlantic Fellows for Health Equity, Columba Youth Leadership and SALGA Women in Local Government Leadership through Elevate Learning.",
    ],
  },
  {
    org: "iXperience",
    title: "Head of Global Partnerships · Programme Director, Lisbon",
    years: "2019 – 2020",
    points: [
      "Built university partnerships and developed avenues to increase international student mobility.",
      "Programme Director for Lisbon, leading the academic and execution team across content, operations, participant experience and legal compliance.",
    ],
  },
  {
    org: "UCT Graduate School of Business",
    title: "Business Developer",
    years: "2016 – 2019",
    points: [
      "Translated organisational learning needs into theoretically sound executive education programmes.",
      "Designed the School's first blended learning programme.",
    ],
  },
  {
    org: "The Red & Yellow Creative School of Business",
    title: "Instructional Designer",
    years: "2013 – 2015",
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
    a: "No. Bring the problem. A good part of the work is figuring out what the actual challenge is – and whether a learning intervention is the right response to it.",
  },
  {
    q: "What size of organisation do you work with?",
    a: "Universities, business schools, corporates, foundations and development organisations. The common factor is complexity: multiple stakeholders, competing definitions of success, and a strategy that needs people to work differently.",
  },
  {
    q: "Do you deliver, or only design?",
    a: "Both. I design programme architectures and learning journeys, and I facilitate – integration sessions, reflective practice, and workshops with senior leaders and board-level participants.",
  },
  {
    q: "Where are you based, and do you travel?",
    a: "Cape Town, working globally. I've delivered across Africa, Europe and the UK, and designed international immersions as part of executive programmes.",
  },
];

export const coachingFaqs: readonly Faq[] = [
  {
    q: "What kind of coaching is this?",
    a: "Integral coaching – a developmental approach rather than a remedial one. It works with the whole person instead of one dimension of them, and it draws on organisational and systems thinking as much as on individual development, because leaders don't operate in isolation from the systems around them.",
  },
  {
    q: "What are your coaching credentials?",
    a: "I completed Coaching for Development at the UCT Graduate School of Business in 2024 and am finishing the Professional Coaching Programme there now – both through the Centre for Coaching. Alongside that, I've been coaching leaders through development and change as part of my programme work for several years.",
  },
  {
    // Lengths are hers: the 12-session container is named in her own client
    // explainer, the 5-session one in a quote she sent a coachee. Fees stay off
    // the site until she sets them.
    q: "How long is an engagement?",
    a: "We work in containers rather than single sessions. Twelve sessions is the usual shape and five is possible for something more contained, either way running over months rather than weeks. Between sessions there are practices and self-observations to carry into ordinary life, which is where most of the change actually happens. We agree the shape up front, before either of us commits.",
  },
];
