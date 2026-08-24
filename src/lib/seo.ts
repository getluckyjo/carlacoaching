import { site, practiceAreas, consultingFaqs, coachingFaqs, education } from "~/data/site";

/**
 * Title helpers.
 *   pageTitle("Coaching")             → "Coaching | Carla le Roux"
 *   pageTitle("…", { raw: true })     → used as-is (title already carries the brand)
 *   pageTitle()                       → homepage default
 */
export function pageTitle(specific?: string, opts: { raw?: boolean } = {}) {
  if (!specific) return "Carla le Roux | Leadership & Capability Transformation";
  if (opts.raw) return specific;
  return `${specific} | ${site.brand}`;
}

export function canonical(pathname: string) {
  const trimmed = pathname.toLowerCase().replace(/\/+$/, "") || "/";
  return new URL(trimmed, site.domain).toString();
}

/* ───────────────────── JSON-LD builders ───────────────────── */

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.domain}/#carla`,
  name: "Carla le Roux",
  url: site.domain,
  jobTitle: "Learning & Capability Strategist",
  description:
    "Learning and capability strategist, programme designer and coach. Designs leadership, executive education and organisational capability programmes across Africa, Europe and the UK.",
  email: `mailto:${site.email}`,
  sameAs: [site.social.linkedin].filter(Boolean),
  alumniOf: education.map((e) => ({
    "@type": "CollegeOrUniversity",
    name: e.institution,
    description: e.qualification,
  })),
  knowsAbout: [
    "Organisational learning strategy",
    "Instructional design",
    "Leadership development",
    "Executive education",
    "Adult learning and facilitation",
    "Blended and digital learning",
    "Organisational change",
    "Executive coaching",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
};

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.domain}/#practice`,
  name: site.brand,
  url: site.domain,
  email: site.email,
  founder: { "@id": `${site.domain}/#carla` },
  description: site.description,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.domain}/#website`,
  url: site.domain,
  name: site.brand,
  inLanguage: "en-ZA",
  publisher: { "@id": `${site.domain}/#practice` },
};

export const serviceSchemas = practiceAreas.map((a) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.domain}/work#${a.slug}`,
  name: a.name,
  description: a.summary,
  provider: { "@id": `${site.domain}/#practice` },
  areaServed: "Worldwide",
  serviceType: "Organisational learning and leadership development",
}));

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
      // Never publish an unanswered placeholder into structured data.
      .filter((f) => !f.a.startsWith("PLACEHOLDER"))
      .map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
  };
}

export const consultingFaqSchema = faqSchema(consultingFaqs);
export const coachingFaqSchema = faqSchema(coachingFaqs);

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.pubDate.toISOString(),
    ...(post.updatedDate ? { dateModified: post.updatedDate.toISOString() } : {}),
    author: { "@id": `${site.domain}/#carla` },
    publisher: { "@id": `${site.domain}/#practice` },
    mainEntityOfPage: `${site.domain}/journal/${post.slug}`,
    inLanguage: "en-ZA",
  };
}
