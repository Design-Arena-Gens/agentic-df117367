"use client";

import { useMemo, useState } from "react";
import { downloadText } from "../utils/download";

const niches = [
  "Compliance templates",
  "Specialized equipment vendors",
  "Grants/funding",
  "Eco certifications",
  "Clinical trials site recruitment",
  "Industrial IoT vendors",
  "Cybersecurity vendor maps",
];

const geos = ["Global", "US", "EU", "UK", "APAC", "LATAM", "Middle East"];

const monetizations = [
  "Affiliates",
  "Lead gen (PPL)",
  "Sponsored listings",
  "Digital downloads",
  "Newsletter ads",
];

function buildPlan({ name, niche, geo, budget, hours, skills, monetization }) {
  const title = `${name || geo + " " + niche} Programmatic Resource Hub`;
  const subtitle = `Programmatic pages for ${niche.toLowerCase()} in ${geo}. One-time setup, evergreen content, and stacked monetization.`;
  const audience = `Beginner operator with ${hours}/week and ~$${budget} starter budget.`;
  const whyItWorks = [
    `Long-tail search intent in ${niche} across ${geo} has low competition`,
    `Structured data enables 100-500 pages with minimal manual writing`,
    `Stackable monetization: ${monetization.join(", ")}`,
    `Automatable operations with basic no-code tools`
  ];
  const oneTimeSetup = [
    `Collect 200 entities (CSV/Airtable) relevant to ${niche} in ${geo}`,
    `Design page template: intro, comparison table, FAQ, CTA`,
    `Generate static pages from data with unique intros by segment`,
    `Add lead form with spam protection; route to email/CRM`,
    `Connect ${monetization[0]} first; add others later`,
    `Submit sitemap; request indexing for top 50 pages`
  ];
  const monet = monetization;
  const operations = [
    `Weekly 2-3 hours: add 10 entities; refresh top pages`,
    `Monthly outreach: 10 vendors for sponsorship`,
    `Quarterly: ship a calculator/download to boost conversions`
  ];
  const validation = [
    `Find 1k+ combined monthly searches for long-tail queries`,
    `Secure 3 affiliate approvals; 2 vendor calls`,
    `Run $50 ads to measure lead form conversion (>2%)`
  ];
  const techStack = [
    `Next.js static pages`,
    `${skills || "No-code CMS (Airtable/Notion) for data"}`,
    `Plausible/GA4 analytics`
  ];
  const metrics = [
    `Time-to-first-click: < 21 days`,
    `Lead conversion: 2-5%`,
    `RPM: $40-$150`,
  ];

  const data = {
    title, subtitle, audience,
    whyItWorks, oneTimeSetup, monetization: monet, operations, validation, techStack,
    metrics
  };

  return toMarkdown(data);
}

function toMarkdown(data) {
  return `# ${data.title}\n\n` +
    `> ${data.subtitle}\n\n` +
    `**Audience**: ${data.audience}\n\n` +
    section("Why it works", data.whyItWorks) +
    section("One-time setup steps", data.oneTimeSetup) +
    section("Monetization", data.monetization) +
    section("Operations", data.operations) +
    section("Validation", data.validation) +
    section("Tech stack", data.techStack) +
    section("Key metrics", data.metrics);
}

function section(title, items) {
  return `\n## ${title}\n\n` + items.map(i => `- ${i}`).join("\n") + "\n";
}

export default function PlanGenerator() {
  const [name, setName] = useState("");
  const [niche, setNiche] = useState(niches[0]);
  const [geo, setGeo] = useState(geos[0]);
  const [budget, setBudget] = useState(200);
  const [hours, setHours] = useState(5);
  const [skills, setSkills] = useState("");
  const [monetization, setMonetization] = useState([monetizations[0], monetizations[1]]);

  const output = useMemo(() => buildPlan({ name, niche, geo, budget, hours, skills, monetization }), [name, niche, geo, budget, hours, skills, monetization]);

  function toggleMonetization(key) {
    setMonetization(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  }

  return (
    <div>
      <div className="inputRow">
        <div>
          <label className="label">Brand/Project name (optional)</label>
          <input className="input" placeholder="e.g., Atlas Compliance Hub" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label className="label">Niche</label>
          <select className="select" value={niche} onChange={e => setNiche(e.target.value)}>
            {niches.map(n => (<option key={n}>{n}</option>))}
          </select>
        </div>
      </div>
      <div className="inputRow">
        <div>
          <label className="label">Geography</label>
          <select className="select" value={geo} onChange={e => setGeo(e.target.value)}>
            {geos.map(g => (<option key={g}>{g}</option>))}
          </select>
        </div>
        <div>
          <label className="label">Starter budget (USD)</label>
          <input className="input" type="number" min="0" value={budget} onChange={e => setBudget(Number(e.target.value))} />
        </div>
      </div>
      <div className="inputRow">
        <div>
          <label className="label">Hours per week</label>
          <input className="input" type="number" min="1" value={hours} onChange={e => setHours(Number(e.target.value))} />
        </div>
        <div>
          <label className="label">Existing skills/tools (optional)</label>
          <input className="input" placeholder="e.g., Airtable, Notion, Canva" value={skills} onChange={e => setSkills(e.target.value)} />
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <div className="label">Monetization</div>
        <div className="buttonRow">
          {monetizations.map(m => (
            <button
              key={m}
              type="button"
              className={`button ${monetization.includes(m) ? '' : 'secondary'}`}
              onClick={() => toggleMonetization(m)}
            >{m}</button>
          ))}
        </div>
      </div>

      <div className="buttonRow" style={{ marginBottom: 12 }}>
        <button className="button" onClick={() => downloadText(output, "custom-business-plan.md")}>Download as Markdown</button>
        <button className="button secondary" onClick={() => navigator.clipboard.writeText(output)}>Copy to clipboard</button>
      </div>

      <div className="plan">
        <div className="sectionTitle">Generated plan</div>
        <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{output}</pre>
      </div>
    </div>
  );
}
