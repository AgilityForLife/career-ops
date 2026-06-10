#!/usr/bin/env node
/**
 * batch-generate-cvs.mjs — Generate tailored HTML resumes and PDFs for evaluated roles
 * Uses cv-template.html as base, fills in role-specific content
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATE = readFileSync(resolve(__dirname, 'templates/cv-template.html'), 'utf-8');
const OUTPUT_DIR = resolve(__dirname, 'output');
mkdirSync(OUTPUT_DIR, { recursive: true });

const COMMON = {
  NAME: 'Erick G. Rosa, PMP, PMI-ACP, SPC6',
  EMAIL: 'ErickRosa01@gmail.com',
  LINKEDIN_URL: 'https://linkedin.com/in/erickgrosa',
  LINKEDIN_DISPLAY: 'linkedin.com/in/erickgrosa',
  PORTFOLIO_URL: 'https://credly.com/users/erick-rosa',
  PORTFOLIO_DISPLAY: 'credly.com/users/erick-rosa',
  LOCATION: 'New Jersey (Greater NYC Metro) · 862-202-0908',
  LANG: 'en',
  PAGE_WIDTH: '8.5in',
  SECTION_SUMMARY: 'Professional Summary',
  SECTION_COMPETENCIES: 'Core Competencies',
  SECTION_EXPERIENCE: 'Professional Experience',
  SECTION_PROJECTS: 'Key Achievements',
  SECTION_EDUCATION: 'Education',
  SECTION_CERTIFICATIONS: 'Certifications',
  SECTION_SKILLS: 'Technical Skills',
};

const CERTS_HTML = `
    <div class="cert-item"><span class="cert-title"><span class="cert-org">PMP</span> — Project Management Professional</span><span class="cert-year">PMI #1793833</span></div>
    <div class="cert-item"><span class="cert-title"><span class="cert-org">PMI-ACP</span> — Agile Certified Practitioner</span><span class="cert-year">PMI #1957875</span></div>
    <div class="cert-item"><span class="cert-title"><span class="cert-org">SAFe SPC6</span> — SAFe Program Consultant</span><span class="cert-year">2019</span></div>
    <div class="cert-item"><span class="cert-title"><span class="cert-org">SAFe PO/PM</span></span><span class="cert-year">2018</span></div>
    <div class="cert-item"><span class="cert-title"><span class="cert-org">SAFe Scrum Master (SSM)</span></span><span class="cert-year">2018</span></div>
    <div class="cert-item"><span class="cert-title"><span class="cert-org">AWS Cloud Practitioner</span></span><span class="cert-year">2021</span></div>
    <div class="cert-item"><span class="cert-title"><span class="cert-org">Procore PM</span> — Project & Financial Management</span><span class="cert-year">2026</span></div>
`;

const EDUCATION_HTML = `
    <div class="edu-item"><div class="edu-header"><span class="edu-title">Continuing Professional Education</span></div><div class="edu-desc">Details available upon request</div></div>
`;

// -- EXPERIENCE BLOCKS --
const VERISK_AGILE = `
    <div class="job avoid-break">
      <div class="job-header">
        <span class="job-company">Verisk</span>
        <span class="job-period">Aug 2018 – Mar 2024</span>
      </div>
      <div class="job-role">Senior Technical Project Manager / Delivery Lead & Agile Coach</div>
      <div class="job-location">Jersey City, NJ</div>
      <ul>
        <li>Coached multiple Agile Release Trains (ARTs) and <strong>50+ engineers</strong> across Dev, QA, Platform, and Analytics teams toward a product-aligned DevOps operating model</li>
        <li>Facilitated PI Planning, value stream identification, and portfolio-level roadmap alignment with executive leadership</li>
        <li>Owned execution of a multi-year cloud and infrastructure modernization roadmap across <strong>AWS, Snowflake, and CI/CD platforms</strong></li>
        <li>Led delivery of golden AMIs, Terraform modules, CI/CD automation, and container platforms (EKS/ECS Fargate)</li>
        <li>Chaired Change Advisory Boards (CABs), driving release governance and improving production stability</li>
        <li>Built <strong>Power BI operational dashboards</strong> tracking delivery metrics, infrastructure performance, and platform reliability</li>
        <li>Managed annual delivery budgets of <strong>$500K–$3M</strong></li>
        <li><strong>Results:</strong> Enabled ~$3M incremental revenue via 3 new analytics products · Reduced production outages <strong>40%</strong> · Cut environment provisioning <strong>70%</strong> · Improved environment stability <strong>60%</strong> · 4 major releases/year</li>
      </ul>
    </div>`;

const SANOFI = `
    <div class="job avoid-break">
      <div class="job-header">
        <span class="job-company">Sanofi</span>
        <span class="job-period">Jun 2023 – Feb 2024</span>
      </div>
      <div class="job-role">Technical Project Manager / Scrum Master</div>
      <div class="job-location">Integrated E2E Portfolio & R&D MDM Program</div>
      <ul>
        <li>Directed end-to-end delivery governance for a multi-workstream program spanning <strong>Snowflake, AWS, Informatica IDMC, Control-M, Tableau, and Power BI</strong></li>
        <li>Coordinated cross-functional delivery across data engineering, MDM, analytics, architecture, and business stakeholders across <strong>US and Europe</strong></li>
        <li>Supported migration from legacy Google Cloud and Oracle data platforms to a <strong>Snowflake-based OneMesh</strong> data foundation</li>
        <li>Developed Power BI dashboards for portfolio performance tracking and executive steering committees</li>
        <li>Embedded quality metrics, validation workflows, metadata, lineage, and access controls into Agile delivery cadence</li>
        <li>Coordinated UAT, release readiness, hypercare, and transition to operations under <strong>pharma R&D governance</strong></li>
      </ul>
    </div>`;

const BTII_SHORT = `
    <div class="job avoid-break">
      <div class="job-header">
        <span class="job-company">BTII Institute</span>
        <span class="job-period">Mar 2024 – Present</span>
      </div>
      <div class="job-role">Agile & Project Management Instructor</div>
      <div class="job-location">West Orange, NJ</div>
      <ul>
        <li>Deliver SAFe, PMP, and Agile certification programs; coach mid-career PMs transitioning to technical delivery and program management</li>
      </ul>
    </div>`;

const EARLIER_CAREER = `
    <div class="job avoid-break">
      <div class="job-header">
        <span class="job-company">SilverSearch (Vitamin Shoppe) · AFR Wholesale · DSG (Comcast) · RCN</span>
        <span class="job-period">2008 – 2017</span>
      </div>
      <div class="job-role">Project Manager / Delivery Lead</div>
      <ul>
        <li>Progressive PM career: enterprise Salesforce CRM implementations (500+ users), Agile transformation, retail platform modernization, Jira re-architecture, and analytics dashboards</li>
        <li>AFR: Delivered automation programs generating <strong>~$5M annual incremental revenue</strong> with 20% reduction in time-to-market</li>
      </ul>
    </div>`;

const PROJECTS_HTML = `
    <div class="project">
      <div><span class="project-title">Enterprise Cloud & DevOps Modernization</span><span class="project-badge">Verisk</span></div>
      <div class="project-desc">Led 5 concurrent teams through multi-year AWS infrastructure modernization: golden AMIs, EKS/ECS, Terraform, blue/green deployments, CAB governance</div>
    </div>
    <div class="project">
      <div><span class="project-title">Snowflake OneMesh Data Platform Migration</span><span class="project-badge">Sanofi</span></div>
      <div class="project-desc">Coordinated cross-geo migration from Google Cloud + Oracle to Snowflake OneMesh across Informatica IDMC, Control-M, Tableau, Power BI workstreams</div>
    </div>
`;

// -- ROLE CONFIGS --
const roles = [
  {
    id: '007-veda-data-solutions',
    filename: 'erick-rosa-cv-veda-data-solutions',
    type: 'agile',
    summary: 'Senior Technical Project Manager and Scrum Master with 15+ years delivering enterprise cloud, DevOps, and data platform programs at scale. Proven record leading 5 concurrent delivery teams (50+ engineers, $3M budget) through AWS infrastructure modernization and Snowflake data platform migrations. PMP and SAFe SPC6 certified with deep expertise in cross-functional stakeholder alignment, Agile ceremonies, sprint health, and delivery governance in regulated environments (pharma R&D, financial services). Specialized in building executive Power BI dashboards that drive VP-level decisions.',
    competencies: ['Enterprise Program Delivery', 'Scrum & Agile Coaching', 'PMP · PMI-ACP · SPC6', 'Cross-Functional Team Leadership', 'Data Platform Delivery', 'Sprint Planning & Backlog Management', 'Stakeholder Alignment', 'Release Governance', 'Healthcare & Regulated Environments', 'Power BI Executive Reporting', 'Risk & Dependency Management', 'Jira & Jira Align'],
    skills: '<span class="skill-category">Agile:</span> SAFe SPC6, Scrum, Kanban, PI Planning, Value Stream Mapping, Lean Portfolio Management | <span class="skill-category">PM:</span> PMP, PMI-ACP, Roadmap Planning, Risk Management, Release Governance, Budget Management | <span class="skill-category">Data & Cloud:</span> AWS, Snowflake, Informatica IDMC, Terraform, EKS, CI/CD | <span class="skill-category">Analytics:</span> Power BI, Tableau, SQL, Jira Align | <span class="skill-category">Tools:</span> Jira, Confluence, MS Project, Control-M',
  },
  {
    id: '008-ardent-dhs',
    filename: 'erick-rosa-cv-ardent-dhs',
    type: 'agile',
    summary: 'SAFe SPC6-certified Scrum Master and Agile Coach with 15+ years leading cross-functional delivery teams in complex, regulated enterprise environments. Experienced coaching Agile Release Trains (ARTs), facilitating PI Planning, and embedding Lean Portfolio Management across programs. Proven record at Verisk: 50+ engineers, $3M budget, 40% outage reduction, 70% faster provisioning. Deep expertise in government-adjacent regulated delivery (pharma R&D governance at Sanofi, compliance-aware infrastructure at Verisk). PMP-credentialed with strong Agile metrics tracking and stakeholder transparency.',
    competencies: ['SAFe SPC6 · SSM · PO/PM', 'Agile Release Train Coaching', 'PI Planning Facilitation', 'Scrum Ceremonies', 'PMP · PMI-ACP', 'Government & Regulated Delivery', 'Lean Portfolio Management', 'Value Stream Mapping', 'Agile Metrics & Reporting', 'Cross-Functional Stakeholder Alignment', 'Risk & Impediment Management', 'Continuous Improvement'],
    skills: '<span class="skill-category">Agile:</span> SAFe SPC6, Scrum, Kanban, PI Planning, Value Stream Mapping, Lean Portfolio Management, LeSS | <span class="skill-category">PM:</span> PMP, PMI-ACP, Risk Management, Dependency Tracking, Release Governance | <span class="skill-category">Tools:</span> Jira, Jira Align, Confluence, Power BI, Azure DevOps | <span class="skill-category">Cloud:</span> AWS, Snowflake, Terraform, CI/CD',
  },
  {
    id: '009-black-canyon-nih',
    filename: 'erick-rosa-cv-black-canyon-nih',
    type: 'agile',
    summary: 'Project Manager and Agile Scrum Master with 15+ years coordinating full software development lifecycles in complex, regulated enterprise environments. Proven record managing cross-functional technical teams (50+ engineers, $3M budget) through cloud platform modernization, data infrastructure programs, and R&D governance. Experienced in pharma R&D delivery at Sanofi (US + Europe, Snowflake, Informatica IDMC) and compliance-aware infrastructure at Verisk. PMP and SAFe SPC6 certified. Skilled at translating complex requirements into executable delivery plans, balancing risks, schedules, and resources.',
    competencies: ['Enterprise Program Delivery', 'Agile/Scrum Methodology', 'PMP · PMI-ACP · SPC6', 'SDLC Coordination', 'Cross-Functional Team Leadership', 'R&D Governance', 'Data Platform Delivery', 'Risk & Dependency Management', 'Stakeholder Alignment', 'Release Readiness & UAT', 'Power BI Reporting', 'Jira Administration'],
    skills: '<span class="skill-category">PM:</span> PMP, PMI-ACP, Roadmap Planning, Risk Management, SDLC, Release Governance, Budget Management | <span class="skill-category">Agile:</span> SAFe SPC6, Scrum, Kanban, PI Planning, Sprint Ceremonies | <span class="skill-category">Data & Cloud:</span> AWS, Snowflake, Informatica IDMC, Terraform, SQL | <span class="skill-category">Analytics:</span> Power BI, Tableau, Jira Align | <span class="skill-category">Tools:</span> Jira, Confluence, MS Project, Control-M, SharePoint',
  },
  {
    id: '010-grant-street-group',
    filename: 'erick-rosa-cv-grant-street-group',
    type: 'technical',
    summary: 'Senior Program Manager and Delivery Lead with 15+ years delivering enterprise-scale software and infrastructure programs for financial services and government-adjacent organizations. Led 5 concurrent delivery teams (50+ engineers, $3M budget) through multi-year cloud modernization at Verisk, achieving 40% outage reduction, 70% faster provisioning, and ~$3M incremental revenue. Experienced in regulated delivery: pharma R&D governance at Sanofi, compliance-aware infrastructure controls at Verisk. PMP-certified with deep expertise in cross-functional program ownership, executive reporting, and stakeholder alignment.',
    competencies: ['Enterprise Program Delivery', 'Large-Scale Software Implementation', 'PMP · PMI-ACP', 'Cross-Functional Team Leadership', 'Government & Financial Services', 'Regulated Delivery', 'Budget Management ($3M+)', 'Stakeholder Alignment', 'Release Governance', 'Power BI Executive Reporting', 'Risk Management', 'Roadmap Execution'],
    skills: '<span class="skill-category">PM:</span> PMP, PMI-ACP, Program Management, Roadmap Planning, Risk Management, Budget ($500K-$3M), Vendor Management | <span class="skill-category">Cloud & Data:</span> AWS, Snowflake, Terraform, CI/CD, EKS/ECS | <span class="skill-category">Analytics:</span> Power BI (data modeling, DAX, dashboards), Tableau, SQL | <span class="skill-category">Agile:</span> SAFe SPC6, Scrum, PI Planning, Lean Portfolio Management | <span class="skill-category">Tools:</span> Jira, Jira Align, Confluence, MS Project, SharePoint',
  },
  {
    id: '011-healthverity',
    filename: 'erick-rosa-cv-healthverity',
    type: 'agile',
    summary: 'Senior Project Manager and Scrum Master with 15+ years delivering multi-project programs in complex, regulated enterprise environments. Proven record owning end-to-end delivery across healthcare-adjacent and compliance-governed organizations. Led 5 concurrent teams (50+ engineers, $3M budget) at Verisk; directed R&D data platform programs under pharma governance at Sanofi. Expert in Agile ceremonies (sprint planning, refinement, demos, retros), backlog management, and cross-functional stakeholder alignment. PMP and PMI-ACP certified. Specialized in Power BI reporting for executive decision-making.',
    competencies: ['Multi-Project Program Management', 'Scrum Master & Agile Ceremonies', 'PMP · PMI-ACP · SPC6', 'Healthcare & Regulated Delivery', 'Cross-Functional Stakeholder Alignment', 'Sprint Planning & Backlog Grooming', 'Risk & Issue Management', 'Stage-Gate Reviews', 'Power BI Executive Reporting', 'UAT & Release Readiness', 'Budget Management', 'Jira Administration'],
    skills: '<span class="skill-category">PM:</span> PMP, PMI-ACP, Roadmap Planning, Risk Management, Release Governance, Budget Management | <span class="skill-category">Agile:</span> SAFe SPC6, Scrum, Kanban, Sprint Ceremonies, Backlog Grooming | <span class="skill-category">Data:</span> Snowflake, Informatica IDMC, SQL | <span class="skill-category">Analytics:</span> Power BI (data modeling, DAX, dashboards), Tableau | <span class="skill-category">Tools:</span> Jira, Confluence, MS Project, SharePoint',
  },
  {
    id: '012-wikimedia',
    filename: 'erick-rosa-cv-wikimedia',
    type: 'technical',
    summary: 'Lead Technical Program Manager with 15+ years driving critical cross-functional programs across enterprise engineering, infrastructure, and data platform teams. Owned end-to-end delivery for programs spanning 5 concurrent teams, 50+ engineers, and $3M annual budgets at Verisk. Coordinated global multi-workstream programs (US + Europe) at Sanofi under R&D governance. Proven results: 40% outage reduction, 70% faster provisioning, ~$3M incremental revenue. PMP-certified with strong executive reporting (Power BI dashboards used by VP/R&D leadership) and cross-functional coordination.',
    competencies: ['Enterprise Program Delivery', 'Cross-Functional Program Leadership', 'PMP · PMI-ACP', 'Engineering Team Coordination', 'Roadmap & Milestone Planning', 'Stakeholder Alignment', 'Release Governance', 'Power BI Executive Reporting', 'Risk & Dependency Management', 'Budget Management ($3M+)', 'Global Team Coordination', 'SAFe SPC6'],
    skills: '<span class="skill-category">PM:</span> PMP, PMI-ACP, Program Management, Roadmap Planning, Risk Management, Budget Management, Vendor Management | <span class="skill-category">Cloud & Data:</span> AWS, Snowflake, Terraform, CI/CD, EKS/ECS Fargate | <span class="skill-category">Analytics:</span> Power BI, Tableau, SQL, Jira Align | <span class="skill-category">Agile:</span> SAFe SPC6, Scrum, PI Planning, Lean Portfolio Management | <span class="skill-category">Tools:</span> Jira, Confluence, MS Project, SharePoint, Control-M',
  },
  {
    id: '013-accuweather',
    filename: 'erick-rosa-cv-accuweather',
    type: 'technical',
    summary: 'Senior Technical Project Manager with 15+ years driving cross-team product delivery, infrastructure modernization, and operational excellence in enterprise environments. Led 5 concurrent delivery teams (50+ engineers, $3M budget) at Verisk across cloud platform, DevOps, and analytics programs. Experienced coordinating engineers, architects, QA, and design teams through full software development lifecycle. PMP-certified with proven ability to bring clarity to ambiguity and deliver results: 40% outage reduction, 70% faster provisioning, ~$3M incremental revenue. Strong cross-functional alignment and foundational technology investment track record.',
    competencies: ['Enterprise Program Delivery', 'Cross-Team Product Delivery', 'PMP · PMI-ACP', 'Software Development Lifecycle', 'Cross-Functional Team Leadership', 'Operational Excellence', 'Roadmap & Milestone Planning', 'Release Governance', 'Stakeholder Alignment', 'Power BI Reporting', 'Risk Management', 'SAFe SPC6'],
    skills: '<span class="skill-category">PM:</span> PMP, PMI-ACP, Program Management, Roadmap Planning, Risk Management, Budget Management | <span class="skill-category">Cloud & Infrastructure:</span> AWS, Snowflake, Terraform, CI/CD, EKS/ECS, Golden AMIs | <span class="skill-category">Analytics:</span> Power BI, Tableau, SQL | <span class="skill-category">Agile:</span> SAFe SPC6, Scrum, Kanban, PI Planning | <span class="skill-category">Tools:</span> Jira, Jira Align, Confluence, MS Project',
  },
];

function buildCompetencies(tags) {
  return tags.map(t => `      <span class="competency-tag">${t}</span>`).join('\n');
}

function buildExperience(type) {
  // Per skills-model.md: BTII listed last, Verisk leads
  // Experience order: Verisk → Sanofi → Earlier Career → BTII (last, minimal)
  return `${VERISK_AGILE}\n${SANOFI}\n${EARLIER_CAREER}\n${BTII_SHORT}`;
}

function buildSkills(skillsHtml) {
  return `<div class="skills-grid"><span class="skill-item">${skillsHtml}</span></div>`;
}

function fillTemplate(role) {
  let html = TEMPLATE;
  const vars = {
    ...COMMON,
    SUMMARY_TEXT: role.summary,
    COMPETENCIES: buildCompetencies(role.competencies),
    EXPERIENCE: buildExperience(role.type),
    PROJECTS: PROJECTS_HTML,
    EDUCATION: EDUCATION_HTML,
    CERTIFICATIONS: CERTS_HTML,
    SKILLS: buildSkills(role.skills),
  };

  for (const [key, value] of Object.entries(vars)) {
    html = html.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
  }
  return html;
}

// Generate all HTML files
const generated = [];
for (const role of roles) {
  const htmlPath = resolve(OUTPUT_DIR, `${role.filename}.html`);
  const pdfPath = resolve(OUTPUT_DIR, `${role.filename}.pdf`);
  const html = fillTemplate(role);
  writeFileSync(htmlPath, html);
  console.log(`✅ HTML: ${role.filename}.html`);
  generated.push({ htmlPath, pdfPath, id: role.id, filename: role.filename });
}

// Generate PDFs
console.log('\n📄 Generating PDFs...\n');
for (const { htmlPath, pdfPath, filename } of generated) {
  try {
    execSync(`node ${resolve(__dirname, 'generate-pdf.mjs')} "${htmlPath}" "${pdfPath}" --format=letter`, {
      stdio: 'inherit',
      timeout: 30000,
    });
  } catch (e) {
    console.error(`❌ Failed: ${filename} — ${e.message}`);
  }
}

console.log('\n🎉 Batch complete!');
