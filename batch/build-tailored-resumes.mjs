#!/usr/bin/env node
/**
 * build-tailored-resumes.mjs — Generate tailored resume HTML+PDF per evaluated role.
 *
 * Content rules come from config/skills-model.md:
 *   - Summary opens with CS-1 (enterprise delivery) + CS-2 (AWS/Snowflake); never coaching identity
 *   - Credentials in header; four Verisk headline metrics always present
 *   - Verisk bullets lead cloud/DevOps; Sanofi bullets lead Snowflake/cross-geo; BTII last, minimal
 *   - All facts sourced from cv.md — nothing invented
 *
 * Run: node batch/build-tailored-resumes.mjs
 * Output: output/{num}-{slug}.html + .pdf
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';

const ROOT = join(new URL('.', import.meta.url).pathname, '..');
const template = readFileSync(join(ROOT, 'templates/cv-template.html'), 'utf-8');

// ---------- Shared blocks (facts from cv.md only) ----------

const HEADER = {
  NAME: 'Erick G. Rosa, PMP, PMI-ACP, SPC6',
  EMAIL: 'ErickRosa01@gmail.com',
  LINKEDIN_URL: 'https://linkedin.com/in/erickgrosa',
  LINKEDIN_DISPLAY: 'linkedin.com/in/erickgrosa',
  PORTFOLIO_URL: 'https://credly.com/users/erick-rosa',
  PORTFOLIO_DISPLAY: 'credly.com/users/erick-rosa',
  LOCATION: 'New Jersey (Greater NYC Metro)',
  LANG: 'en',
  PAGE_WIDTH: '7.6in',
};

const job = (company, role, period, bullets, results = []) => `
  <div class="job">
    <div class="job-header">
      <span class="job-company">${company}</span>
      <span class="job-period">${period}</span>
    </div>
    <div class="job-role">${role}</div>
    <ul>${bullets.map(b => `<li>${b}</li>`).join('\n')}
    ${results.length ? results.map(r => `<li><strong>${r}</strong></li>`).join('\n') : ''}</ul>
  </div>`;

const VERISK_RESULTS = [
  'Enabled launch of 3 new analytics products generating ~$3M in incremental revenue',
  'Reduced production outages by 40% through improved release discipline and standardization',
  'Cut environment provisioning from 1–2 days to overnight (70% reduction) via automation',
  'Improved environment stability by 60% and release stability by 40%',
];

// Verisk bullets — cloud/DevOps first (CS-2, CS-3), coaching last per skills-model
const VERISK_TPM = [
  'Owned execution of a multi-year cloud and infrastructure modernization roadmap across AWS, Snowflake, and CI/CD platforms',
  'Led delivery of golden AMIs, Terraform modules, CI/CD automation, and container platforms (EKS/ECS Fargate)',
  'Managed cross-team dependencies and release plans for immutable infrastructure and blue/green deployments',
  'Chaired Change Advisory Boards (CABs), driving release governance, production stability, and SLA compliance',
  'Built Power BI operational dashboards tracking delivery metrics, infrastructure performance, and platform reliability for VP-level leadership',
  'Managed annual delivery budgets of $500K–$3M across 5 concurrent delivery teams (~50 engineers); delivered 4 major platform releases per year',
  'Implemented Jira Align portfolio structures enabling roll-up visibility from story-level delivery to executive dashboards',
];

const VERISK_AGILE = [
  'Owned execution of a multi-year cloud and infrastructure modernization roadmap across AWS, Snowflake, and CI/CD platforms',
  'Coached multiple Agile Release Trains (ARTs) and 50+ engineers across Dev, QA, Platform, and Analytics teams toward a product-aligned DevOps operating model',
  'Facilitated PI Planning, value stream identification, and portfolio-level roadmap alignment; partnered with executive leadership to embed Lean Portfolio Management',
  'Transitioned siloed infrastructure, operations, and development teams into cross-functional product teams aligned to value streams',
  'Configured Jira (Cloud & Data Center) with standardized workflows, issue hierarchies, permission schemes, and automation rules; implemented Jira Align portfolio structures',
  'Chaired Change Advisory Boards (CABs), driving release governance, production stability, and SLA compliance',
  'Managed annual delivery budgets of $500K–$3M; delivered 4 major platform releases per year with continuous sprint-level deployments',
];

// Sanofi bullets — Snowflake migration + cross-geo first (CS-2, CS-5)
const SANOFI = [
  'Directed end-to-end delivery governance for a multi-workstream R&D program spanning Snowflake, AWS, Informatica IDMC (MDM/RDM), Control-M, Tableau, and Power BI',
  'Supported migration from legacy Google Cloud and Oracle platforms to a Snowflake-based OneMesh data foundation',
  'Coordinated cross-functional delivery across data engineering, MDM, analytics, architecture, and business stakeholders across the US and Europe',
  'Owned program cadence: milestones, sprint planning, dependency tracking, risk management, and executive reporting under pharma R&D governance standards',
  'Developed Power BI dashboards for portfolio performance tracking and executive steering committees',
  'Coordinated UAT, release readiness, hypercare, and transition to operations, ensuring continuity from build to run',
  'Coached cross-functional product teams on Agile delivery and portfolio alignment; standardized backlog management via Jira & Power BI integration',
];

const SILVERSEARCH = [
  'Led delivery of enterprise system enhancements across POS, CRM, OMS, and CMS platforms (client: Vitamin Shoppe), owning scope, schedule, and stakeholder alignment',
  'Re-architected Jira configurations, workflows, and board structures to standardize delivery tracking; embedded metrics-driven continuous improvement',
];

const AFR = [
  'Delivered Salesforce automation programs generating ~$5M in annual incremental revenue; supported ~500 end users across sales, marketing, and finance',
  'Coordinated developers, QA, UX, and business teams to deliver contract and order management systems with a 20% reduction in time-to-market',
];

const DSG = [
  'Led full-cycle delivery of Salesforce CRM implementation for 500+ users across a national telecommunications outsourcing operation (client: Comcast)',
  'Established delivery standards, release plans, and stakeholder governance for multi-year CRM modernization programs; coached Scrum Masters, analysts, and executives',
];

const BTII = [
  'Deliver enterprise-focused training in SAFe, Agile delivery, DevOps enablement, and Power BI analytics for government agencies and corporations',
];

const experienceBlock = (veriskBullets) => [
  job('Sanofi — R&D MDM &amp; Portfolio Analytics', 'Technical Project Manager / Scrum Master', 'Jun 2023 – Feb 2024', SANOFI),
  job('Verisk — Jersey City, NJ', 'Senior Technical Project Manager / Delivery Lead &amp; Agile Coach', 'Aug 2018 – Mar 2024', veriskBullets, VERISK_RESULTS),
  job('SilverSearch, Inc.', 'Project Manager / Delivery Lead', 'Jan 2017 – Jun 2017', SILVERSEARCH),
  job('AFR Wholesale', 'Project Manager / Salesforce Delivery Lead', 'Mar 2016 – Dec 2016', AFR),
  job('DSG (Client: Comcast) — Union, NJ', 'Project Manager / Delivery Lead', 'Oct 2009 – Aug 2014', DSG),
  job('BTII Institute — West Orange, NJ', 'Agile &amp; Project Management Instructor', 'Mar 2024 – Present', BTII),
].join('\n');

const CERTS = [
  ['PMP — Project Management Professional', 'PMI #1793833', ''],
  ['PMI-ACP — Agile Certified Practitioner', 'PMI #1957875', ''],
  ['SAFe Program Consultant (SPC6)', 'Scaled Agile', '2019'],
  ['SAFe PO/PM · SAFe Scrum Master (SSM) · Leading SAFe (SA)', 'Scaled Agile', '2017–2018'],
  ['AWS Cloud Practitioner', 'AWS', '2021'],
  ['Procore Certified PM — Project &amp; Financial Management', 'Procore', '2026'],
].map(([t, o, y]) =>
  `<div class="cert-item"><span class="cert-title">${t} · <span class="cert-org">${o}</span></span><span class="cert-year">${y}</span></div>`
).join('\n');

const EDUCATION = `<div class="edu-item"><div class="edu-desc">Details available upon request</div></div>`;

const tags = arr => arr.map(t => `<span class="competency-tag">${t}</span>`).join('\n');
const skills = rows => `<div class="skills-grid">${rows.map(([k, v]) =>
  `<div class="skill-item"><span class="skill-category">${k}:</span> ${v}</div>`).join('\n')}</div>`;

// ---------- Per-role tailoring ----------

const SUMMARY_BASE =
  'Senior Technical Program Manager and Delivery Lead with 15+ years leading enterprise cloud, DevOps, and data platform programs — 5 concurrent delivery teams, 50+ engineers, and $500K–$3M annual budgets at Verisk; AWS infrastructure modernization and Snowflake OneMesh data platform migration across US/EU teams at Sanofi.';

const JOBS = [
  {
    num: '007', slug: 'compassx-agile',
    summary: SUMMARY_BASE + ' SAFe SPC6-certified coach who pairs hands-on Scrum Mastery with program ownership in regulated pharma delivery — R&D governance, UAT-to-hypercare release management, and Jira-driven backlog and portfolio reporting.',
    competencies: ['Pharma R&D Delivery Governance', 'Scrum Master & Agile Coaching (SPC6)', 'Snowflake & AWS Program Delivery', 'Jira Backlog & Portfolio Management', 'Cross-Functional / Cross-Geo Coordination', 'UAT, Release Readiness & Hypercare', 'Risk & Dependency Management', 'Executive Reporting (Power BI)'],
    variant: 'agile',
    skills: [
      ['Agile', 'SAFe (SPC6), Scrum, Kanban, PI Planning, Lean Portfolio Management, Value Stream Mapping'],
      ['Tools', 'Jira, Jira Align, Confluence, Power BI, Tableau, SmartSheet-class planning tools, MS Project'],
      ['Cloud & Data', 'AWS, Snowflake, Informatica IDMC (MDM/RDM), Control-M, SQL'],
      ['Delivery', 'Release governance, CAB leadership, UAT coordination, hypercare, risk registers, budget management'],
    ],
  },
  {
    num: '008', slug: 'accenture-federal-agile',
    summary: SUMMARY_BASE + ' SAFe SPC6 (highest-tier) transformation leader: coached multiple Agile Release Trains, facilitated portfolio-level PI Planning, and embedded Lean Portfolio Management with executive leadership — using SAFe as a delivery accelerator with measurable DevOps outcomes (40% fewer outages, 70% faster provisioning).',
    competencies: ['SAFe Enterprise Transformation (SPC6)', 'Agile Release Train Coaching', 'PI Planning & Lean Portfolio Management', 'DevOps Release Governance', 'Regulated & Compliance-Aware Delivery', 'Cross-Team Dependency Management', 'Jira / Jira Align Enterprise Configuration', 'Executive Reporting (Power BI)'],
    variant: 'agile',
    skills: [
      ['Agile at Scale', 'SAFe 6 (SPC6), ARTs, PI Planning, value streams, LPM, communities of practice'],
      ['DevOps', 'CI/CD, Terraform, golden AMIs, immutable infrastructure, blue/green deployments, CAB governance'],
      ['Tools', 'Jira (Cloud + Data Center), Jira Align, Confluence, Power BI, LeanKit, Planview'],
      ['Cloud & Data', 'AWS, Snowflake, EKS/ECS Fargate, SQL'],
    ],
  },
  {
    num: '009', slug: 'capital-tech-agile',
    summary: SUMMARY_BASE + ' Scrum Master and delivery leader for compliance-critical programs: chaired CABs, coordinated multi-team release plans, and ran Agile ceremonies across Dev, QA, DevOps, and platform teams under federal-grade security and auditability controls.',
    competencies: ['Scrum Mastery & Agile Facilitation', 'Multi-Team Delivery Coordination', 'Regulated / Federal-Grade Governance', 'Release & Change Management (CAB)', 'Requirements & Backlog Refinement', 'DevOps Delivery (CI/CD, IaC)', 'Stakeholder & Program Leadership', 'Jira Enterprise Administration'],
    variant: 'agile',
    skills: [
      ['Agile', 'Scrum, SAFe (SPC6), Kanban, sprint ceremonies, backlog refinement, DoR/DoD'],
      ['Governance', 'CAB chairmanship, change control, SLA management, role-based access, auditability'],
      ['Tools', 'Jira, Jira Align, Confluence, Power BI, MS Project'],
      ['Cloud & DevOps', 'AWS, CI/CD, Terraform, EKS/ECS Fargate, Control-M'],
    ],
  },
  {
    num: '010', slug: 'grant-street-technical-pm',
    summary: SUMMARY_BASE + ' Independently drives complex, multi-stakeholder implementation programs from planning through hypercare — proactive risk management, structured dependency tracking, and executive alignment across government-grade and financial-services delivery environments.',
    competencies: ['Large-Scale Program Ownership', 'Software Implementation Delivery', 'Risk & Dependency Management', 'Executive Stakeholder Alignment', 'Regulated Delivery (Gov + FinServ)', 'Release Governance & Readiness', 'Budget & Vendor Management ($500K–$3M)', 'Executive Reporting (Power BI)'],
    variant: 'tpm',
    skills: [
      ['Program Management', 'PMP, roadmap execution, milestone planning, RAID management, change control, budget ownership'],
      ['Delivery', 'Release governance, UAT coordination, hypercare, transition to operations'],
      ['Tools', 'Jira, Jira Align, Confluence, Power BI, MS Project, Planview'],
      ['Cloud & Data', 'AWS, Snowflake, CI/CD, Terraform, SQL'],
    ],
  },
  {
    num: '011', slug: 'wikimedia-technical-pm',
    summary: SUMMARY_BASE + ' Trusted execution partner for cross-functional, cross-departmental programs: aligns diverse stakeholders around shared objectives, navigates ambiguity independently, and turns strategy into measurable delivery outcomes.',
    competencies: ['Cross-Functional Program Leadership', 'Stakeholder Alignment at Scale', 'Technical Depth (Cloud, DevOps, Data)', 'Program Cadence & Dependency Management', 'Measurable Outcome Delivery', 'Executive Reporting & Dashboards', 'Distributed / Remote Team Delivery', 'Roadmap & Milestone Planning'],
    variant: 'tpm',
    skills: [
      ['Program Management', 'PMP, PMI-ACP, roadmap execution, risk mitigation, cross-team dependency management'],
      ['Technical', 'AWS, Snowflake, CI/CD, Terraform, EKS/ECS Fargate, SQL'],
      ['Reporting', 'Power BI (data modeling, DAX, executive dashboards), Tableau, Jira Align roll-ups'],
      ['Collaboration', 'US/EU distributed delivery, Jira, Confluence'],
    ],
  },
  {
    num: '012', slug: 'toast-technical-pm',
    summary: SUMMARY_BASE + ' Orchestrates the full product delivery lifecycle for complex R&D initiatives — delivery timelines, capacity planning, cross-functional communication, and process standardization that keeps multiple concurrent teams shipping on cadence.',
    competencies: ['End-to-End Product Delivery Lifecycle', 'Cross-Functional Program Execution', 'Delivery Timeline & Capacity Planning', 'Process Standardization & Improvement', 'External Partner Coordination', 'Release Governance', 'Executive Communication & Reporting', 'Multi-Team Delivery (5 teams / 50+ engineers)'],
    variant: 'tpm',
    skills: [
      ['Program Management', 'PMP, PMI-ACP, roadmap execution, dependency management, release planning, budget ownership'],
      ['Delivery Ops', 'CI/CD, DevOps governance, blue/green deployments, sprint-level continuous delivery'],
      ['Tools', 'Jira, Jira Align, Confluence, Power BI, MS Project'],
      ['Data', 'Snowflake, SQL, Power BI, Tableau'],
    ],
  },
  {
    num: '013', slug: 'healthverity-agile',
    summary: SUMMARY_BASE + ' Combines PMP program discipline with hands-on Scrum Mastery: leads hybrid Waterfall/Agile delivery, runs the full ceremony cadence, and keeps projects on time, on budget, and on strategy with clear risk and progress communication.',
    competencies: ['PM + Scrum Master Hybrid Delivery', 'Hybrid Waterfall/Agile Environments', 'Atlassian Suite (Jira, Confluence)', 'Healthcare-Adjacent Regulated Delivery', 'Sprint Ceremony Facilitation', 'Risk & Progress Communication', 'Backlog Grooming & Prioritization', 'Executive Reporting (Power BI)'],
    variant: 'agile',
    skills: [
      ['Project Management', 'PMP, PMI-ACP, planning, budget/schedule ownership, risk communication'],
      ['Agile', 'Scrum ceremonies end-to-end, hybrid integration, SAFe (SPC6), Kanban'],
      ['Tools', 'Jira, Confluence, Power BI, Tableau, MS Project, SmartSheet-class planning tools'],
      ['Data', 'Snowflake, Informatica IDMC (MDM), SQL — pharma R&D data platform delivery at Sanofi'],
    ],
  },
];

// ---------- Build ----------

for (const j of JOBS) {
  let html = template
    .replaceAll('{{LANG}}', HEADER.LANG)
    .replaceAll('{{NAME}}', HEADER.NAME)
    .replaceAll('{{EMAIL}}', HEADER.EMAIL)
    .replaceAll('{{LINKEDIN_URL}}', HEADER.LINKEDIN_URL)
    .replaceAll('{{LINKEDIN_DISPLAY}}', HEADER.LINKEDIN_DISPLAY)
    .replaceAll('{{PORTFOLIO_URL}}', HEADER.PORTFOLIO_URL)
    .replaceAll('{{PORTFOLIO_DISPLAY}}', HEADER.PORTFOLIO_DISPLAY)
    .replaceAll('{{LOCATION}}', HEADER.LOCATION)
    .replaceAll('{{PAGE_WIDTH}}', HEADER.PAGE_WIDTH)
    .replaceAll('{{SECTION_SUMMARY}}', 'Professional Summary')
    .replaceAll('{{SECTION_COMPETENCIES}}', 'Core Competencies')
    .replaceAll('{{SECTION_EXPERIENCE}}', 'Professional Experience')
    .replaceAll('{{SECTION_EDUCATION}}', 'Education')
    .replaceAll('{{SECTION_CERTIFICATIONS}}', 'Certifications')
    .replaceAll('{{SECTION_SKILLS}}', 'Skills')
    .replaceAll('{{SUMMARY_TEXT}}', j.summary)
    .replaceAll('{{COMPETENCIES}}', tags(j.competencies))
    .replaceAll('{{EXPERIENCE}}', experienceBlock(j.variant === 'agile' ? VERISK_AGILE : VERISK_TPM))
    .replaceAll('{{EDUCATION}}', EDUCATION)
    .replaceAll('{{CERTIFICATIONS}}', CERTS)
    .replaceAll('{{SKILLS}}', skills(j.skills))
    // fonts live at repo root; generated HTML lives in output/
    .replaceAll("url('./fonts/", "url('../fonts/");

  // No portfolio projects in cv.md — remove the Projects section
  html = html.replace(/<!-- PROJECTS -->[\s\S]*?<\/div>\n\n/, '');

  const base = `${j.num}-${j.slug}`;
  const htmlPath = join(ROOT, 'output', `${base}.html`);
  const pdfPath = join(ROOT, 'output', `${base}.pdf`);
  writeFileSync(htmlPath, html);
  console.log(`📝 ${base}.html`);
  execSync(`node "${join(ROOT, 'generate-pdf.mjs')}" "${htmlPath}" "${pdfPath}" --format=letter`, { stdio: 'inherit' });
}
console.log('\n✅ All tailored resumes built.');
