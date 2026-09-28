// build-cv-421-citi-wealth-ops-head-2026-09-28.mjs — clone base CV, swap Summary + Competencies
// for Citi Technical Project Management Head for Wealth Operations (report 421). Base =
// output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html (most recent tailored CV on disk).
// Summary follows config/skills-model.md resume rules (2026-08-31 ruling): open with adoption outcome
// -> how achieved (training/rollout/implementation) -> scale achieved at (CS-1 teams/budget, CS-2
// cloud/data platform). Verisk headline metrics present. Leads with CS-1 (Head-level enterprise Book
// of Work ownership) and CS-5/CS-7 (regulated financial services, cross-functional). BTII
// de-emphasized, listed last, not a lead proof point. Tier 4 skills excluded -- JD did not require them.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'citi-technical-project-management-head-wealth-operations';
const summary = `Technical Program Management leader who drives adoption of complex, enterprise-wide delivery programs by owning the training, rollout, and implementation work that turns a fragmented technology Book of Work into predictable, governed delivery for the executives who depend on it. Achieved through disciplined program governance in regulated environments: chaired Change Advisory Boards, drove release governance, and ran incident postmortems that reduced production outages 40% and improved environment stability 60% at Verisk, and directed end-to-end delivery governance for a global pharma R&amp;D data-platform transformation at Sanofi across the US and Europe. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets with earned-value variance tracking, enabling ~$3M in incremental revenue and 4 major platform releases per year on AWS and Snowflake &mdash; the same Book-of-Work discipline (roadmap ownership, dependency management, risk mitigation, executive reporting) a Wealth Operations technology portfolio requires. Builds executive-visibility dashboards and cross-functional governance frameworks so leadership always has unified status across regulated, compliance-dense delivery. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'Enterprise Technology Book of Work Ownership',
  'Head/Director-Level Executive & Cross-Functional Stakeholder Alignment',
  'Regulated Financial Services Delivery Governance (Compliance, Audit-Aware)',
  'Release Governance & Change Control (CAB)',
  'Cloud & Data Platform Delivery (AWS, Snowflake)',
  '15–17 Cross-Functional Team Leadership, $500K–$3M Budget Ownership',
  'Executive Reporting & RAID/Risk Management Frameworks',
  'PMP / PMI-ACP / SAFe SPC6 Certified',
];

let html = base;
html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(summary)}$2`);
const tags = comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
const out = `output/cv-${slug}-2026-09-28.html`;
await writeFile(out, html, 'utf8');
console.log('wrote', out);
