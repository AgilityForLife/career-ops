// build-cv-295-anthropic-tpm-public-sector-2026-09-21.mjs — clone base CV, swap Summary + Competencies
// for Anthropic Technical Program Manager, Public Sector (report 295). Base = output/cv-cayuse-2026-07-07.html.
// Summary follows config/skills-model.md resume rules (2026-08-31 ruling): open with adoption outcome
// -> how achieved (training/rollout/implementation) -> scale achieved at (CS-1 teams/budget, CS-2
// cloud/data platform). Verisk headline metrics present. Leads with CS-1 (enterprise delivery) and
// CS-5/CS-7 (cross-functional, regulated delivery) per report 295 positioning notes. BTII's AI tooling
// adoption gets a light, de-emphasized mention (on-theme for Anthropic) but is not a lead proof point
// and is not the current-role headline. Tier 4 skills excluded by default.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-cayuse-2026-07-07.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'anthropic-tpm-public-sector';
const summary = `Senior Technical Program Manager who drives cross-functional program delivery adoption end to end for the research, infrastructure, security, and compliance stakeholders that depend on it &mdash; sequencing, dependency management, and operational-visibility frameworks that turn recurring coordination into repeatable process. Achieved through disciplined delivery governance: chaired Change Advisory Boards, drove release governance and role-based access controls across immutable infrastructure and blue/green deployments, and ran incident postmortems that reduced production outages 40% and improved environment stability 60%. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets at Verisk, enabling ~$3M in incremental revenue and 4 major platform releases per year on AWS and Snowflake &mdash; and led a global, regulated-industry data-platform program (Snowflake OneMesh, Informatica IDMC, Control-M, Tableau, Power BI) across the US and Europe at Sanofi under pharma R&amp;D governance standards, coordinating data engineering, MDM, analytics, and architecture stakeholders through UAT, release readiness, and hypercare. Builds executive-visibility dashboards and RAID-based risk management so leadership always has unified status across workstreams, ownership, and dependencies. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'Enterprise Technical Program Delivery',
  'Cross-Functional Research/Security/Compliance Coordination',
  'Regulated & Compliance-Aware Delivery Governance',
  'Release Governance & Change Control (CAB)',
  'Operational Visibility & RAID/Risk Frameworks',
  'Cloud & Data Platform Delivery (AWS, Snowflake)',
  'Executive Reporting & Program Status Visibility',
  'PMP / PMI-ACP / SAFe SPC6 Certified',
];

let html = base;
html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(summary)}$2`);
const tags = comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
const out = `output/cv-${slug}-2026-09-21.html`;
await writeFile(out, html, 'utf8');
console.log('wrote', out);
