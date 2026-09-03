import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// `site` must stay in lockstep with site.domain in src/data/site.ts.
// carlaleroux.co.za is also owned; point it at a 301 to this canonical host.
export default defineConfig({
  site: "https://www.carlaleroux.com",
  trailingSlash: "never",
  // The tarot section was /esoterica until Aug 2026; it is now named for the
  // practice she actually trades under. Keep the old path resolving.
  redirects: { "/esoterica": "/modern-muse" },
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  integrations: [
    mdx(),
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
      // Workshops, Modern Muse and Journal are unlisted until they go live.
      filter: (page) =>
        !page.includes("/thanks") &&
        !page.includes("/404") &&
        !page.includes("/workshops") &&
        !page.includes("/modern-muse") &&
        !page.includes("/journal"),
      serialize(item) {
        const url = item.url;
        if (/\.com\/$/.test(url)) return { ...item, priority: 1.0, changefreq: "monthly" };
        if (/\/work$/.test(url)) return { ...item, priority: 0.95, changefreq: "monthly" };
        if (/\/coaching$/.test(url)) return { ...item, priority: 0.9, changefreq: "monthly" };
        if (/\/workshops$/.test(url)) return { ...item, priority: 0.9, changefreq: "weekly" };
        if (/\/modern-muse$/.test(url)) return { ...item, priority: 0.8, changefreq: "monthly" };
        if (/\/about$/.test(url)) return { ...item, priority: 0.85, changefreq: "monthly" };
        if (/\/journal$/.test(url)) return { ...item, priority: 0.8, changefreq: "weekly" };
        if (/\/journal\//.test(url)) return { ...item, priority: 0.7, changefreq: "yearly" };
        if (/\/contact$/.test(url)) return { ...item, priority: 0.75, changefreq: "yearly" };
        if (/\/(privacy|terms)$/.test(url)) return { ...item, priority: 0.2, changefreq: "yearly" };
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "auto" },
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
