// build-cv-423-citi-technical-program-management-lead-ops-tech-2026-09-28.mjs — clone base CV, swap
// Summary + Competencies for Citi Technical Program Management Lead for Ops Tech (report 423). Base =
// output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html. Summary follows config/skills-model.md
// resume rules (2026-08-31 ruling): adoption outcome -> how achieved (training/rollout/implementation)
// -> scale (CS-1 teams/budget, CS-2 cloud/data platform). Verisk headline metrics present. Leads with
// CS-1 (enterprise delivery at scale) and CS-6 (SAFe SPC6, explicitly required by this JD) per the
// skills-model.md CS-6 bonus rule. BTII de-emphasized, listed last. Tier 4 skills excluded.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'citi-technical-program-management-lead-ops-tech';
const summary = `Technical Program Management leader who drives adoption of enterprise-scale delivery programs by owning the training, rollout, and implementation work that converts Agile-at-scale theory (SAFe, Scrum, Kanban) into repeatable, governed delivery engineering. Achieved through a waterfall-to-SAFe transformation at Verisk &mdash; coached Agile Release Trains, facilitated PI Planning, and chaired Change Advisory Boards that reduced production outages 40% and improved environment stability 60%, converting quarterly big-bang releases into reliable weekly increments &mdash; and through end-to-end delivery governance for a global pharma R&amp;D data-platform transformation at Sanofi across the US and Europe. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets with earned-value variance tracking, enabling ~$3M in incremental revenue and 4 major platform releases per year on AWS and Snowflake &mdash; the same enterprise-level program management and delivery-engineering-at-scale discipline an Ops Tech organization requires, built on enterprise-grade Jira and Confluence configuration. SAFe SPC6 (Program Consultant, highest tier), PMP, and PMI-ACP certified.`;
const comps = [
  'Enterprise-Level Program Management & Delivery Engineering at Scale',
  'SAFe SPC6 Agile Transformation (ARTs, PI Planning, Lean Portfolio Management)',
  'Release Governance & Change Control (CAB)',
  'Regulated Financial Services Delivery Governance',
  'Cloud & Data Platform Delivery (AWS, Snowflake)',
  '15–17 Cross-Functional Team Leadership, $500K–$3M Budget Ownership',
  'Enterprise Jira / Jira Align / Confluence Configuration',
  'PMP / PMI-ACP / SAFe SPC6 Certified',
];

let html = base;
html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(summary)}$2`);
const tags = comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
const out = `output/cv-${slug}-2026-09-28.html`;
await writeFile(out, html, 'utf8');
console.log('wrote', out);
