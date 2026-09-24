// build-cv-339-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.mjs — clone base CV, swap Summary + Competencies
// for UnitedHealth Group (Optum Tech CDDO) Dir, Tech Proj-Prgm Mgmt (report 339). Base = most recent
// output/cv-anthropic-tpm-cloud-partnerships-2026-09-23.html. Summary follows config/skills-model.md
// resume rules (2026-08-31 ruling): open with adoption outcome -> how achieved (training/rollout/
// implementation) -> scale achieved at (CS-1 teams/budget, CS-2 cloud/data platform). Verisk headline
// metrics present. Leads with CS-1 (Director-level enterprise-wide multi-domain delivery) and CS-5/CS-7
// (regulated healthcare, cross-functional). BTII de-emphasized, listed last, not a lead proof point.
// Tier 4 skills excluded by default -- JD for this req did not require them.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-anthropic-tpm-cloud-partnerships-2026-09-23.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'unitedhealth-dir-tech-proj-prgm-mgmt';
const summary = `Director-level Technical Program Manager who drives adoption of complex, enterprise-wide initiatives across multiple business and technology domains &mdash; leading the training, rollout, and implementation work that turns cross-functional coordination into repeatable, predictable delivery for the stakeholders who depend on it. Achieved through disciplined program governance in regulated industries: directed end-to-end delivery for a global pharma R&amp;D data-platform transformation at Sanofi (Snowflake OneMesh, Informatica IDMC, Control-M, Tableau, Power BI) across the US and Europe, and chaired Change Advisory Boards, drove release governance, and ran incident postmortems that reduced production outages 40% and improved environment stability 60% at Verisk. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets, enabling ~$3M in incremental revenue and 4 major platform releases per year on AWS and Snowflake &mdash; with disciplined RAID-log risk management and earned-value budget tracking as trusted delivery partner to VP/Director-level executive stakeholders in pharma R&amp;D and enterprise cloud/data environments. Builds executive-visibility dashboards and cross-geo governance frameworks so leadership always has unified status across workstreams, ownership, and dependencies &mdash; directly applicable to leading enterprise-wide, multi-domain technical programs in a regulated healthcare organization. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'Enterprise-Wide, Multi-Domain Technical Program Delivery',
  'Director-Level Executive & Cross-Functional Stakeholder Alignment',
  'Regulated Industry Delivery Governance (Pharma R&D, Compliance-Aware Infrastructure)',
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
const out = `output/cv-${slug}-2026-09-24.html`;
await writeFile(out, html, 'utf8');
console.log('wrote', out);
