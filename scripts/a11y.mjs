/**
 * Accessibility check — WCAG 2.1 A/AA, every route, desktop and mobile.
 *
 * Worth keeping as a script rather than a one-off: the design system remaps ink
 * tokens inside .on-night, and a light component nested in a night context will
 * silently inherit the wrong palette. That bug class is invisible in review and
 * obvious to axe. Run it before any deploy that touches colour or layout.
 *
 *   npm run build && npm run a11y
 */
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";
import { spawn } from "node:child_process";

const PORT = 4399;
const ROUTES = [
  "/", "/work", "/coaching", "/workshops", "/esoterica", "/about",
  "/journal", "/journal/designing-across-thirteen-countries",
  "/contact", "/privacy", "/terms", "/thanks", "/404",
];

const server = spawn("npx", ["astro", "preview", "--port", String(PORT)], { stdio: "ignore" });
const base = `http://localhost:${PORT}`;

const waitForServer = async () => {
  for (let i = 0; i < 30; i++) {
    try { if ((await fetch(base + "/")).ok) return true; } catch { /* not up yet */ }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
};

let failures = 0;
try {
  if (!await waitForServer()) throw new Error(`preview server never came up on ${PORT}`);

  const browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_CHROMIUM ?? undefined,
  });

  for (const [label, viewport] of [
    ["desktop", { width: 1440, height: 900 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    const ctx = await browser.newContext({ viewport });
    for (const route of ROUTES) {
      const page = await ctx.newPage();
      await page.goto(base + route, { waitUntil: "networkidle" });
      const { violations } = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      if (violations.length) {
        failures += violations.length;
        console.log(`\n✗ ${label} ${route}`);
        for (const v of violations) {
          console.log(`   [${v.impact}] ${v.id} — ${v.help} (${v.nodes.length} node(s))`);
          for (const n of v.nodes.slice(0, 3)) {
            console.log(`     ${n.html.slice(0, 140)}`);
            if (n.any[0]) console.log(`     ${n.any[0].message.replace(/\n/g, " ").slice(0, 160)}`);
          }
        }
      } else {
        console.log(`✓ ${label} ${route}`);
      }
      await page.close();
    }
    await ctx.close();
  }
  await browser.close();
} finally {
  server.kill();
}

console.log(failures === 0 ? "\nNo accessibility violations." : `\n${failures} violation(s).`);
process.exit(failures === 0 ? 0 : 1);
