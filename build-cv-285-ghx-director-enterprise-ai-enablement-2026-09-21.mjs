// build-cv-285-ghx-director-enterprise-ai-enablement-2026-09-21.mjs — clone base CV, swap Summary + Competencies
// for GHX Director, Enterprise AI Enablement & Execution (report 285).
// Base = output/cv-cayuse-2026-07-07.html. Summary follows config/skills-model.md resume rules
// (2026-08-31 ruling): open with adoption outcome -> how achieved (training/rollout/implementation)
// -> scale achieved at (CS-1 teams/budget, CS-2 cloud/data platform). Verisk headline metrics present.
// BTII referenced only as adoption-program evidence, not as coaching/instructor identity, and not a lead
// proof point. Tier 4 skills excluded except where directly responsive to this JD's AI-adoption core ask.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-cayuse-2026-07-07.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'ghx-director-enterprise-ai-enablement';
const summary = `Senior Technical Program Manager and Delivery Lead who drives enterprise adoption of new platforms and technology end to end &mdash; adoption strategy, workforce enablement, rollout planning, and executive-level governance reporting for the leaders and teams who depend on it. Achieved through disciplined change governance and structured enablement: chaired Change Advisory Boards, drove release governance and role-based access controls across immutable infrastructure and blue/green deployments, and led enterprise AI-adoption programs&mdash;training, playbooks, and stakeholder enablement&mdash;that helped teams confidently integrate new AI tooling into daily operations. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets at Verisk, reducing production outages 40%, improving environment stability 60%, and enabling ~$3M in incremental revenue across 4 major platform releases per year on AWS and Snowflake &mdash; and coordinated a global Snowflake OneMesh data-platform migration across Informatica IDMC, Control-M, Tableau, and Power BI at Sanofi, aligning data engineering, MDM, and analytics teams across the US and Europe under pharma R&amp;D governance standards. Builds executive dashboards and steering-committee reporting used by VP/R&amp;D leadership to track adoption metrics, program KPIs, and delivery health. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'Enterprise AI & Technology Adoption Programs',
  'Change Governance & Risk Framework Operationalization',
  'Cross-Functional Stakeholder Enablement (Matrixed Orgs)',
  'Change Control & Release Governance (CAB)',
  'Executive & Steering-Committee Reporting',
  'Snowflake Data Platform Delivery',
  'Workforce Training & Rollout Program Design',
  'PMP / PMI-ACP / SAFe SPC6 Certified',
];

let html = base;
html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(summary)}$2`);
const tags = comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
const out = `output/cv-${slug}-2026-09-21.html`;
await writeFile(out, html, 'utf8');
console.log('wrote', out);
