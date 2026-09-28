// build-cv-425-unitedhealth-director-technical-project-program-management-ibmi-2026-09-28.mjs —
// clone base CV, swap Summary + Competencies for UnitedHealth Group (Optum) Director, Technical
// Project-Program Management (IBMi Platform Portfolio) (report 425). Base =
// output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html. Summary follows config/skills-model.md
// resume rules (2026-08-31 ruling): adoption outcome -> how achieved (training/rollout/implementation)
// -> scale (CS-1 teams/budget, CS-2 cloud/data platform). Verisk headline metrics present. Leads with
// CS-1 (Director-level technology portfolio ownership) and infrastructure/resiliency modernization,
// honestly framed as delivery-governance strength rather than overclaiming direct IBMi/AS-400 depth.
// BTII de-emphasized, listed last. Tier 4 skills excluded.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'unitedhealth-director-technical-project-program-management-ibmi';
const summary = `Director-level Technical Program Manager who drives adoption of infrastructure modernization programs by owning the training, rollout, and implementation work that turns legacy-platform risk into a governed, resilient technology portfolio. Achieved through a multi-year modernization roadmap at Verisk spanning software engineering, DevOps, infrastructure, DBA, and mainframe workstreams &mdash; leading immutable infrastructure and blue/green deployment governance that reduced production outages 40% and improved environment stability 60% &mdash; and through end-to-end delivery governance for a global pharma R&amp;D data-platform transformation at Sanofi across the US and Europe. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets with earned-value variance tracking, converting quarterly big-bang releases into reliable weekly increments &mdash; the same infrastructure-resiliency and modernization-governance discipline required to lead a high-priority, legacy-platform technology portfolio in a regulated healthcare organization. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'Director-Level Technology Portfolio Ownership',
  'Infrastructure Resiliency & Modernization Governance',
  'Release Governance & Change Control (CAB)',
  'Cross-Functional Delivery Including Mainframe/Legacy-Platform Workstreams',
  'Regulated Healthcare Delivery Governance',
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
