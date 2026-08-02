// build-cvs-2026-07-15.mjs — clone base CV, swap Summary + Competencies per company.
// Base = output/cv-cayuse-2026-07-07.html (accurate cv.md-derived experience bullets retained).
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-cayuse-2026-07-07.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const companies = {
  phaidra: {
    summary: `Technical Program Manager with 15+ years owning complex, cross-functional technical programs at enterprise scale — 5 concurrent delivery teams, 50+ engineers, and $500K–$3M budgets across AWS cloud infrastructure and Snowflake data-platform modernization. Proven at executing large, highly customized, multi-year initiatives under high ambiguity: multi-year cloud/DevOps roadmaps (Verisk) and a global US + Europe data-platform migration (Sanofi). Leads delivery across engineering, architecture, data, and business stakeholders, translating needs into structured requirements, release plans, and risk-managed execution using both Agile (SAFe SPC6) and Waterfall frameworks. PMP- and PMI-ACP-credentialed; blends program-delivery discipline with hands-on AI/ML data-platform and cloud-infrastructure delivery.`,
    comps: ['Complex Cross-Functional Program Delivery', 'Large-Scale Execution Under Ambiguity', 'Customer & Stakeholder-Facing Delivery', 'Requirements Translation', 'Cloud Infrastructure Delivery (AWS, EKS/ECS, Terraform)', 'AI/ML & Data Platform Delivery (Snowflake, IDMC)', 'Risk & Dependency Management (Agile + Waterfall)', 'Multi-Site Program Execution'],
  },
  '3cloud': {
    summary: `Senior Technical Delivery Manager and Program Lead with 15+ years owning enterprise delivery across multiple concurrent engineering, cloud, and data-platform engagements. Ran 5 concurrent delivery teams (~50 engineers) with $500K–$3M budgets and 4 major releases per year, standardizing execution and reporting across streams. Delivered cloud and data modernization programs (AWS infrastructure, Snowflake OneMesh, CI/CD) with measurable governance outcomes — 40% fewer production outages, 70% faster provisioning. PMP, PMI-ACP, and SAFe SPC6, with delivery-governance, risk-management, and methodology-selection (Agile/Waterfall/hybrid) depth across regulated enterprise clients.`,
    comps: ['Multi-Engagement Delivery Oversight', 'Delivery Governance, Risk & Escalation Management', 'Cross-Team Dependency & Change Management', 'Methodology Selection (SAFe, Scrum, Waterfall, Hybrid)', 'Estimation, Scoping & Delivery Planning', 'Executive & Client Stakeholder Alignment', 'Cloud & Data Platform Delivery (AWS, Snowflake, CI/CD)', 'Mentoring & Developing Lead Project Managers'],
  },
  jrm: {
    summary: `Program Manager and Delivery Lead with 15+ years standing up delivery governance, transformation cadence, and executive reporting for enterprise programs across complex, cross-functional organizations. Track record building the operating layer of transformation — integrated roadmaps, dependency and risk frameworks, and the dashboards leadership makes decisions from — spanning technology, data, and business stakeholders. Embedded Lean Portfolio Management with executive leadership and stood up standardized delivery methodologies, portfolio reporting structures, and change-adoption models that produced measurable outcomes (~$3M revenue enabled, 40% fewer outages, 70% faster provisioning). SAFe SPC6, PMP, and PMI-ACP certified, with Procore Certified PM in Project & Financial Management (2026).`,
    comps: ['Transformation Office & Enterprise PMO', 'Change Management & Adoption (Lean Portfolio Mgmt)', 'Executive Reporting & Dashboards (Power BI, Jira Align)', 'Program Delivery at Scale (5 teams, $3M budgets)', 'Cross-Functional Stakeholder Alignment', 'Risk, Dependency & Accountability Frameworks', 'Roadmap & Milestone Planning', 'Procore Certified PM (Project & Financial Mgmt)'],
  },
  parloa: {
    summary: `Technical Program Manager with 15+ years owning end-to-end enterprise delivery — scope, timeline, budget, risk, and dependencies — across AWS, Snowflake, CI/CD, and integrated data platforms. Proven driving complex programs from kickoff through go-live, hypercare, and transition to operations under enterprise and regulated (pharma R&D) governance. Trusted delivery contact to executive and technical stakeholders across the US and Europe, translating integration and API trade-offs into predictable, well-governed delivery. PMP, PMI-ACP, and SAFe SPC6 certified.`,
    comps: ['End-to-End Delivery Ownership', 'RAID / Risk & Dependency Governance', 'Go-Live & Hypercare', 'UAT & Release Readiness', 'Enterprise & Customer Stakeholder Management', 'Integration / API Delivery', 'Agile / Waterfall / Hybrid Methodology', 'Milestone Tracking & Escalation'],
  },
  'blink-health': {
    summary: `Senior Technical Program Manager with 15+ years leading complex, cross-functional technology programs from conception to completion across enterprise cloud, DevOps, and data-platform initiatives. Owned multi-year AWS infrastructure modernization and Snowflake data-platform delivery (Verisk, Sanofi) spanning 5 teams and 50+ engineers on $500K–$3M budgets, partnering with senior engineering and product leaders on architectural decisions. Fluent in translating business objectives into program goals, engineering requirements, and execution roadmaps, and in using data and metrics to influence decisions at leadership level. Regulated-environment delivery (financial services + pharma R&D) with Power BI dashboards VP and R&D leadership relied on to steer.`,
    comps: ['Cross-Functional Technical Program Leadership', 'Software Architecture Partnership (AWS, Snowflake)', 'Cross-System Dependency & Risk Mitigation', 'Data-Driven Metrics & Leadership Reporting (Power BI)', 'Program Governance Frameworks', 'Roadmap Execution & Requirements Translation', 'Regulated / Compliance-Aware Delivery', 'TPM & Engineer Mentorship'],
  },
};

for (const [slug, c] of Object.entries(companies)) {
  let html = base;
  // Swap summary text
  html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(c.summary)}$2`);
  // Swap competency grid tags
  const tags = c.comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
  html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
  const out = `output/cv-${slug}-2026-07-15.html`;
  await writeFile(out, html, 'utf8');
  console.log('wrote', out);
}
