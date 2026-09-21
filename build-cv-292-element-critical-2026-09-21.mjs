// build-cv-292-element-critical-2026-09-21.mjs — clone base CV, swap Summary + Competencies for
// Element Critical PMO Manager (IT/Compliance) (report 292).
// Base = output/cv-cayuse-2026-07-07.html. Summary follows config/skills-model.md resume rules
// (2026-08-31 ruling): open with adoption outcome -> how achieved (training/rollout/implementation)
// -> scale achieved at (CS-1 teams/budget, CS-2 cloud/data platform). Verisk headline metrics present.
// Leads with CS-7 (regulated/compliance-aware delivery) and CS-3 (governance) per report 292
// positioning notes. BTII not referenced as a lead proof point. Tier 4 skills excluded.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-cayuse-2026-07-07.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'element-critical-pmo-manager';
const summary = `Senior Technical Program Manager and Delivery Lead who drives IT project governance and compliance-aware delivery adoption end to end &mdash; framework rollout, cross-functional liaison between technical teams and compliance stakeholders, and executive reporting that keeps leadership current on project health and regulatory alignment. Achieved through disciplined governance: chaired Change Advisory Boards, drove release governance and role-based access controls across immutable infrastructure and blue/green deployments, ran incident postmortems, and coordinated UAT, release readiness, and hypercare under pharma R&amp;D governance standards &mdash; reducing production outages 40% and improving environment stability 60%. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets at Verisk, enabling ~$3M in incremental revenue and 4 major platform releases per year on AWS and Snowflake &mdash; and directed end-to-end delivery governance for a global Snowflake OneMesh data-platform migration at Sanofi, coordinating data engineering, MDM, and analytics teams across the US and Europe under regulated R&amp;D compliance standards. Builds executive-facing reporting that gives leadership visibility into project health, risk, and regulatory alignment. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'IT Project Governance & Compliance-Aware Delivery',
  'Change Control & Release Governance (CAB)',
  'Regulated Environment Delivery (Pharma R&D, Enterprise Infrastructure Controls)',
  'Cross-Functional Liaison: Technical Teams, Compliance, Executives',
  'Audit & Regulatory Readiness Support (UAT, Release Readiness, Hypercare)',
  'Executive Reporting & Risk Visibility',
  'Role-Based Access & Identity Governance Adjacent',
  'PMP / PMI-ACP / SAFe SPC6 Certified',
];

let html = base;
html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(summary)}$2`);
const tags = comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
const out = `output/cv-${slug}-2026-09-21.html`;
await writeFile(out, html, 'utf8');
console.log('wrote', out);
