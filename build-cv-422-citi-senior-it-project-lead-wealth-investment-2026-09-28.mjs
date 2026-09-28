// build-cv-422-citi-senior-it-project-lead-wealth-investment-2026-09-28.mjs — clone base CV, swap
// Summary + Competencies for Citi Senior IT Project Lead for Wealth Investment Solutions Technology
// (report 422). Base = output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html. Summary follows
// config/skills-model.md resume rules (2026-08-31 ruling): adoption outcome -> how achieved
// (training/rollout/implementation) -> scale (CS-1 teams/budget, CS-2 cloud/data platform). Verisk
// headline metrics present. Leads with CS-1 (multi-domain program delivery) and CS-5/CS-7 (regulated
// financial services). BTII de-emphasized, listed last. Tier 4 skills excluded.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'citi-senior-it-project-lead-wealth-investment-solutions';
const summary = `Technical Program Manager who drives adoption of multi-domain delivery programs by owning the training, rollout, and implementation work that converts fragmented workstreams into a single governed delivery plan for the business lines that depend on it. Achieved through disciplined program governance in regulated environments: directed end-to-end delivery governance for a global pharma R&amp;D data-platform transformation at Sanofi across the US and Europe, and chaired Change Advisory Boards, drove release governance, and ran incident postmortems that reduced production outages 40% and improved environment stability 60% at Verisk. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets with earned-value variance tracking, enabling ~$3M in incremental revenue and 4 major platform releases per year on AWS and Snowflake &mdash; the same cross-domain program discipline (dependency management, RAID/risk logs, executive reporting) required to coordinate delivery across Investments, Trades, Banking, Lending, Trust, Data, and Compliance workstreams. Builds executive-visibility dashboards and cross-geo governance frameworks so leadership always has unified status across regulated, compliance-dense delivery. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'Multi-Domain Technical Program Delivery',
  'Cross-Functional Stakeholder Alignment in Regulated Financial Services',
  'Regulated Delivery Governance (Compliance, Audit-Aware)',
  'Release Governance & Change Control (CAB)',
  'Cloud & Data Platform Delivery (AWS, Snowflake)',
  '15–17 Cross-Functional Team Leadership, $500K–$3M Budget Ownership',
  'RAID Log / Risk Management & Executive Reporting',
  'PMP / PMI-ACP / SAFe SPC6 Certified',
];

let html = base;
html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(summary)}$2`);
const tags = comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
const out = `output/cv-${slug}-2026-09-28.html`;
await writeFile(out, html, 'utf8');
console.log('wrote', out);
