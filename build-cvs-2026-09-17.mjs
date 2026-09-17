// build-cvs-2026-09-17.mjs — clone base CV, swap Summary + Competencies per role.
// Base = output/cv-cayuse-2026-07-07.html (accurate cv.md-derived experience bullets retained).
// Summaries follow the corrected resume-generation rule 1 (config/skills-model.md, ruling
// 2026-08-31): open with the adoption outcome -> how it was achieved (training, rollout,
// implementation) -> the scale it was achieved at (CS-1 teams/budget, CS-2 cloud/data platform).
// Never open with certifications, Salesforce admin, non-profit work, a bare responsibilities
// list, or "Agile coaching" as an identity. Verisk headline metrics always present. Tier 4
// skills excluded by default.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-cayuse-2026-07-07.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const roles = {
  'unitedhealth-principal-tech-program-manager': {
    summary: `Drives enterprise adoption of cloud and data platforms by leading the training, rollout, and implementation programs that turn complex technical migrations into reliable, end-user-ready systems for the business and technology leaders who depend on them. Piloted and scaled an organization-wide waterfall-to-SAFe transformation across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets at Verisk, converting quarterly big-bang releases into reliable weekly increments and driving hands-on adoption of new delivery cadences across engineering, DevOps, infrastructure, DBA, and UI/UX workstreams. Coordinated the rollout of a Snowflake OneMesh cloud data-platform migration across AWS, Azure, Informatica IDMC, Control-M, and Power BI, partnering with data engineering, MDM, and analytics stakeholders across the US and Europe under pharma R&amp;D governance standards at Sanofi. Brings direct experience building executive-facing relationships and translating platform delivery into business outcomes &mdash; reporting program status to directors and VPs, and building Power BI dashboards used by leadership to track delivery metrics and platform reliability. Enabled launch of 3 new analytics products (~$3M incremental revenue), cut production outages 40%, and improved environment stability 60% at Verisk through disciplined release governance and CAB-driven change control. PMP-, PMI-ACP-, and SAFe SPC6-certified, with hands-on AWS and Azure/Snowflake platform delivery experience.`,
    comps: ['Enterprise Cloud Program Adoption & Rollout', 'Cross-Functional Team Leadership (15-17 Teams)', 'AWS & Snowflake Platform Delivery', 'Executive & CIO Stakeholder Alignment', 'Training & Change Enablement for Platform Adoption', 'Program Budget & Vendor Management ($500K-$3M)', 'PMP / PMI-ACP / SAFe SPC6 Certified', 'Power BI Executive Reporting'],
  },
  'unitedhealth-senior-tpm-client-billing-pharmacy-payments': {
    summary: `Drives adoption of complex, regulated technical programs by leading the training, UAT coordination, release readiness, and hypercare rollout work that carries a program from build to reliable production operation. Directed end-to-end delivery governance and transition-to-operations for a global pharma R&amp;D data platform transformation at Sanofi &mdash; coordinating cross-functional delivery across data engineering, data warehousing, MDM, and analytics teams across the US and Europe, and partnering with data governance teams to implement data quality rules, metadata, lineage, and access controls under strict regulatory standards. Led delivery across 15&ndash;17 cross-functional teams and $500K&ndash;$3M annual program budgets at Verisk, spanning software engineering, DevOps, infrastructure, DBA, UI/UX, and mainframe workstreams, with disciplined RAID-log risk management and earned-value budget tracking. Enabled launch of 3 new analytics products (~$3M incremental revenue), cut production outages 40%, and improved environment stability 60% through structured release governance and CAB change control. Builds Power BI executive dashboards used by leadership to track delivery metrics, platform reliability, and portfolio investment decisions. PMP-, PMI-ACP-, and SAFe SPC6-certified, bringing enterprise program discipline to complex, compliance-aware delivery environments such as healthcare billing and payments platforms.`,
    comps: ['Enterprise Program Delivery & Rollout', 'Regulated / Compliance-Aware Delivery', 'Cross-Functional Stakeholder Alignment', 'Release Readiness, UAT & Hypercare', 'RAID & Risk Management', 'Cloud & Data Platform Delivery (AWS/Snowflake)', 'PMP / PMI-ACP / SAFe SPC6 Certified', 'Power BI Executive Reporting'],
  },
};

for (const [slug, c] of Object.entries(roles)) {
  let html = base;
  html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(c.summary)}$2`);
  const tags = c.comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
  html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
  const out = `output/cv-${slug}-2026-09-17.html`;
  await writeFile(out, html, 'utf8');
  console.log('wrote', out);
}
