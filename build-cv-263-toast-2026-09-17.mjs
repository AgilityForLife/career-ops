// build-cv-263-toast-2026-09-17.mjs — clone base CV, swap Summary + Competencies for Toast IT Delivery Manager (report 263).
// Base = output/cv-cayuse-2026-07-07.html. Summary follows config/skills-model.md resume rules
// (2026-08-31 ruling): open with adoption outcome -> how achieved (training/rollout/implementation)
// -> scale achieved at (CS-1 teams/budget, CS-2 cloud/data platform). Verisk headline metrics present.
// BTII not referenced as a lead proof point. Tier 4 skills excluded.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-cayuse-2026-07-07.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'toast-it-delivery-manager';
const summary = `Senior Technical Program Manager and Delivery Lead who drives IT and platform delivery adoption end to end for the business units and stakeholders that depend on it &mdash; rollout planning, matrix leadership across teams without direct authority, cross-functional liaison between technical and business stakeholders, and executive dashboards that leadership actually uses to make decisions. Achieved through disciplined change governance: chaired Change Advisory Boards, drove release governance and role-based access controls across immutable infrastructure and blue/green deployments, and ran incident postmortems that reduced production outages 40% and improved environment stability 60%. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets at Verisk, enabling ~$3M in incremental revenue and 4 major platform releases per year on AWS and Snowflake &mdash; and coordinated a global Snowflake OneMesh data-platform migration across Informatica IDMC, Control-M, Tableau, and Power BI at Sanofi, aligning data engineering, MDM, and analytics teams across the US and Europe under pharma R&amp;D governance standards. Builds Power BI executive dashboards used by VP/R&amp;D leadership to track delivery metrics, program KPIs, and platform reliability. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'Enterprise IT Delivery Management',
  'Matrix Leadership Without Direct Authority',
  'Cross-Functional Business/IT Liaison',
  'Change Control & Release Governance (CAB)',
  'Power BI Executive Dashboards & Reporting',
  'Snowflake Data Platform Delivery',
  'Role-Based Access & Identity Governance Adjacent',
  'PMP / PMI-ACP / SAFe SPC6 Certified',
];

let html = base;
html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(summary)}$2`);
const tags = comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
const out = `output/cv-${slug}-2026-09-17.html`;
await writeFile(out, html, 'utf8');
console.log('wrote', out);
