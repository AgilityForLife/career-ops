// build-cv-424-unitedhealth-director-program-management-enterprise-imaging-2026-09-28.mjs — clone
// base CV, swap Summary + Competencies for UnitedHealth Group (Optum) Director, Program Management -
// Technology & Software Engineering (Enterprise Imaging) (report 424). Base =
// output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html. Summary follows config/skills-model.md
// resume rules (2026-08-31 ruling): adoption outcome -> how achieved (training/rollout/implementation)
// -> scale (CS-1 teams/budget, CS-2 cloud/data platform). Verisk headline metrics present. Leads with
// CS-1 (Director-level large-scale orchestration) and CS-2 (cloud-native/on-prem-to-cloud migration,
// direct match to this JD). BTII de-emphasized, listed last. Tier 4 skills excluded.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-unitedhealth-dir-tech-proj-prgm-mgmt-2026-09-24.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'unitedhealth-director-program-management-enterprise-imaging';
const summary = `Director-level Technical Program Manager who drives adoption of large-scale, cloud-native software delivery by owning the training, rollout, and implementation work that turns an on-prem-to-cloud migration into reliable, high-quality execution for the engineering teams and stakeholders who depend on it. Achieved through a multi-year modernization roadmap at Verisk &mdash; migrating on-prem data warehouse workloads to AWS, Snowflake, and CI/CD platforms with golden AMIs, EKS/ECS Fargate, and Terraform &mdash; and through end-to-end delivery governance for a global pharma R&amp;D data-platform transformation at Sanofi (Snowflake OneMesh, Informatica IDMC) across the US and Europe. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets, reducing production outages 40% and improving environment stability 60% through disciplined release governance and Change Advisory Board leadership &mdash; directly applicable to orchestrating large-scale, cloud-native software engineering initiatives in a regulated healthcare organization. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'Cloud & Data Platform Modernization (On-Prem to Cloud Migration)',
  'Director-Level Enterprise Technical Program Delivery',
  'Release Governance & Change Control (CAB)',
  'Regulated Healthcare Delivery Governance',
  'Cross-Functional Software Engineering Program Orchestration',
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
