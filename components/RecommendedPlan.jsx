"use client";

import { useMemo } from "react";
import { downloadText } from "../utils/download";

const recommended = {
  title: "Programmatic Niche Resource Hub (PNRH)",
  subtitle:
    "One-time setup of an evergreen resource hub using programmatic pages + affiliate/lead monetization. Low competition by targeting ultra-specific intersections (niche ? geography ? intent).",
  audience: "Beginner-friendly, no-code optional, scalable with content automation.",
  whyItWorks: [
    "Low competition via long-tail, high-intent queries",
    "High customer volume aggregated across many micro-niches",
    "Compounding SEO flywheel; minimal ongoing ops",
    "Stackable monetization (affiliates, lead gen, digital products)"
  ],
  targetExamples: [
    "B2B compliance templates by country and industry",
    "Local vendor directories for specialized tools (e.g., cold chain sensors in EU cities)",
    "Grant/funding finders by region and vertical",
    "Equipment rental directories with bookable leads (niche construction equipment by city)"
  ],
  oneTimeSetup: [
    "Pick intersection of niche ? geography ? problem with 100+ long-tail keywords",
    "Assemble structured dataset (CSV/Notion/Airtable) of entities and attributes",
    "Generate programmatic pages (Next.js + JSON data) with templated copy",
    "Add comparison tables, decision checklists, and CTAs",
    "Integrate affiliate links or lead capture form to email/CRM",
    "Submit sitemap, set up analytics and basic link building (5-10 links)"
  ],
  monetization: [
    "Affiliate programs (SaaS, marketplaces, equipment vendors)",
    "Lead gen (sell leads to vendors; pay-per-lead)",
    "Sponsored listings and premium placements",
    "Downloadable assets (checklists, templates, calculators)"
  ],
  operations: [
    "Monthly: refresh top 20 pages; add 10 new programmatic entities",
    "Quarterly: outreach to 20 vendors for sponsorship",
    "Automate: ingestion from public catalogs/APIs; broken-link alerts",
    "Support mailbox SLA: 24-48h (low volume)"
  ],
  validation: [
    "Keyword research (Ahrefs/SEMrush/Keywords Everywhere) for 1k+ monthly total",
    "Vendor willingness to pay (email 10 vendors; seek $100-$300/mo sponsorship)",
    "Test lead form conversion with $50 search ads to 3 pages",
    "First 5 affiliate approvals secured"
  ],
  techStack: [
    "Next.js static pages (this repo)",
    "Airtable/Notion for data; CSV import",
    "Cloudflare Turnstile or hCaptcha on forms",
    "Plausible/GA4 for analytics"
  ],
  ics: [
    "Indexability: XML sitemap, clean slugs, internal linking",
    "Content: unique intros per segment, tables, FAQs",
    "Speed: static export, image optimization",
    "Trust: about/contact, disclosures, vendor policy"
  ],
  90dayPlan: [
    "Week 1: Niche intersect, collect 200 entities, draft page template",
    "Weeks 2-3: Launch 100 pages, request indexing, first affiliates",
    "Weeks 4-6: Add calculators/downloads; 10 outreach links",
    "Weeks 7-9: Add 100 more pages; start vendor outreach",
    "Weeks 10-12: Close 2 sponsors; tune CTAs; ship email nurture"
  ],
  metrics: [
    "Organic clicks: 0 ? 2k/mo",
    "CTR: >3% on long-tail pages",
    "Lead form conversion: 2-5%",
    "RPM (revenue per 1k visits): $40-$150 depending on niche"
  ],
};

function toMarkdown(data) {
  return `# ${data.title}\n\n` +
    `> ${data.subtitle}\n\n` +
    `**Audience**: ${data.audience}\n\n` +
    section("Why it works", data.whyItWorks) +
    section("Target examples", data.targetExamples) +
    section("One-time setup steps", data.oneTimeSetup) +
    section("Monetization", data.monetization) +
    section("Operations", data.operations) +
    section("Validation", data.validation) +
    section("Tech stack", data.techStack) +
    section("SEO/Indexability Checklist", data.ics) +
    section("90-day execution plan", data.90dayPlan) +
    section("Key metrics", data.metrics);
}

function section(title, items) {
  return `\n## ${title}\n\n` + items.map(i => `- ${i}`).join("\n") + "\n";
}

export default function RecommendedPlan() {
  const md = useMemo(() => toMarkdown(recommended), []);

  return (
    <div>
      <p className="kicker">Designed for: low competition, high demand, scalable, beginner-friendly</p>
      <div className="buttonRow" style={{ marginBottom: 12 }}>
        <span className="badge">One-time setup</span>
        <span className="badge">Programmatic SEO</span>
        <span className="badge">Affiliate + Leads</span>
      </div>
      <div className="plan">
        <div className="sectionTitle">Summary</div>
        <div><strong>{recommended.title}</strong></div>
        <div style={{ color: '#9bb0d3', marginBottom: 8 }}>{recommended.subtitle}</div>

        <div className="sectionTitle">Why it works</div>
        <ul>
          {recommended.whyItWorks.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>

        <div className="sectionTitle">Target examples</div>
        <ul>
          {recommended.targetExamples.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>

        <div className="sectionTitle">One-time setup steps</div>
        <ol>
          {recommended.oneTimeSetup.map((x, i) => (<li key={i}>{x}</li>))}
        </ol>

        <div className="sectionTitle">Monetization</div>
        <ul>
          {recommended.monetization.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>

        <div className="sectionTitle">Operations</div>
        <ul>
          {recommended.operations.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>

        <div className="sectionTitle">Validation</div>
        <ul>
          {recommended.validation.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>

        <div className="sectionTitle">Tech stack</div>
        <ul>
          {recommended.techStack.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>

        <div className="sectionTitle">SEO/Indexability Checklist</div>
        <ul>
          {recommended.ics.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>

        <div className="sectionTitle">90-day execution plan</div>
        <ul>
          {recommended.90dayPlan.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>

        <div className="sectionTitle">Key metrics</div>
        <ul>
          {recommended.metrics.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>
      </div>

      <div className="buttonRow" style={{ marginTop: 16 }}>
        <button className="button" onClick={() => downloadText(md, "recommended-business-plan.md")}>
          Download as Markdown
        </button>
      </div>
    </div>
  );
}
