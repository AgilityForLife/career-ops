// build-cv-294-govcio-scrum-master-2026-09-21.mjs — clone base CV, swap Summary + Competencies for GovCIO
// Scrum Master, VA Data Modernization (report 294). Base = output/cv-cayuse-2026-07-07.html.
// Summary follows config/skills-model.md resume rules (2026-08-31 ruling): open with adoption
// outcome -> how achieved (training/rollout/implementation) -> scale achieved at (CS-1 teams/budget,
// CS-2 cloud/data platform). Verisk headline metrics present. Scrum Master/ART-coaching angle leads
// since the target role is explicitly titled Scrum Master. BTII not referenced as a lead proof point.
// Tier 4 skills excluded by default.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-cayuse-2026-07-07.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const slug = 'govcio-scrum-master-va-data-modernization';
const summary = `Senior Scrum Master and Technical Program Manager who drives Agile team adoption and delivery predictability end to end &mdash; sprint facilitation, backlog health, and cross-team dependency management for teams that depend on it. Achieved through hands-on rollout and training: piloted two Scrum teams at Verisk and scaled the organization to full Program Increment (PI) Planning cadence, served as rotating Release Train Engineer facilitating PI Planning, ART sync, backlog refinement, and Inspect &amp; Adapt across the Agile Release Train, and converted quarterly big-bang releases into reliable weekly increments &mdash; reducing production outages 40% and improving environment stability 60%. Delivered at enterprise scale across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets at Verisk, enabling ~$3M in incremental revenue and 4 major platform releases per year on AWS and Snowflake &mdash; and coordinated a global, regulated-industry data-modernization program (Snowflake OneMesh, Informatica IDMC, Control-M, Tableau, Power BI) across the US and Europe at Sanofi under pharma R&amp;D governance standards. Builds delivery-metrics visibility (cycle time, throughput, velocity, release stability) and maintains RAID logs to keep programs predictable and on track. PMP, PMI-ACP, and SAFe SPC6 certified.`;
const comps = [
  'Scrum Master / ART Coaching at Scale',
  'PI Planning & Agile Release Train Facilitation',
  'Cross-Team Dependency & RAID Management',
  'Data Modernization Program Delivery',
  'Regulated-Industry Delivery Governance',
  'Sprint Health, Backlog Refinement & Delivery Metrics',
  'Snowflake / Cloud Data Platform Coordination',
  'PMP / PMI-ACP / SAFe SPC6 Certified',
];

let html = base;
html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(summary)}$2`);
const tags = comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
const out = `output/cv-${slug}-2026-09-21.html`;
await writeFile(out, html, 'utf8');
console.log('wrote', out);
