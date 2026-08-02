// build-cvs-2026-08-02.mjs — clone base CV, swap Summary + Competencies per role.
// Base = output/cv-cayuse-2026-07-07.html (accurate cv.md-derived experience bullets retained).
// Summaries follow config/skills-model.md resume rules: open with CS-1 + CS-2, never with
// coaching identity; Verisk headline metrics always present; Tier 4 skills excluded.
import { readFile, writeFile } from 'fs/promises';

const base = await readFile('output/cv-cayuse-2026-07-07.html', 'utf8');

const esc = s => s.replace(/&(?!amp;|mdash;|ndash;|nbsp;)/g, '&amp;');

const roles = {
  // 035 — Stripe TPM, Core Infrastructure (4.0) — lead CS-2 + CS-3 hard
  'stripe-core-infrastructure': {
    summary: `Technical Program Manager with 15+ years driving large-scale technical programs across core infrastructure — cloud compute, networking, databases, and distributed services — at enterprise scale. Owned a multi-year modernization roadmap migrating on-prem data warehouse workloads to AWS, Snowflake, and CI/CD platforms, delivering across 15&ndash;17 cross-functional teams spanning software engineering, DevOps, infrastructure, DBA, and mainframe workstreams on $500K&ndash;$3M annual budgets. Delivery artifacts, not oversight: golden AMIs, EKS/ECS Fargate container platforms, Terraform modules, VPC/Transit Gateway connectivity, immutable infrastructure, and blue/green deployments. Governance with measured outcomes &mdash; 40% fewer production outages, 60% better environment stability, quarterly big-bang releases converted into reliable weekly increments, 4 major platform releases per year, and ~$3M in incremental revenue enabled. PMP and PMI-ACP credentialed.`,
    comps: ['Large-Scale Cross-Org Program Delivery', 'Cloud Architecture & Core Infrastructure (AWS, EKS/ECS, VPC)', 'Distributed Systems & Data Platform Delivery (Snowflake)', 'Infrastructure-as-Code & CI/CD (Terraform, Blue/Green)', 'Release Governance & Change Control (CAB)', 'Delivery Metrics & KPI Frameworks (Cycle Time, Throughput)', 'Technical Roadblock Anticipation & Trade-Off Analysis', 'Executive & Engineering-Leadership Reporting (Power BI)'],
  },

  // 036 — Stripe TPM, Risk (3.8) — lead CS-5 + CS-7
  'stripe-risk': {
    summary: `Technical Program Manager with 15+ years leading large-scale technical programs in regulated environments &mdash; financial-services analytics infrastructure (Verisk) and pharma R&D data governance (Sanofi) &mdash; where risk, compliance, and auditability are delivery constraints rather than afterthoughts. Owned enterprise cloud and data-platform delivery across AWS, Snowflake, and CI/CD spanning 15&ndash;17 cross-functional teams and $500K&ndash;$3M budgets. Ran the controls side directly: chaired Change Advisory Boards, drove change control and SLA management, implemented role-based access controls and auditability requirements, and led incident postmortems &mdash; reducing production outages 40% and improving environment stability 60%. Coordinated delivery across US and Europe stakeholders in different disciplines and time zones, with data quality rules, validation workflows, metadata, and lineage governance. PMP and PMI-ACP credentialed; SQL and Python literate.`,
    comps: ['Regulated & Compliance-Aware Program Delivery', 'Risk Registers, RAID & Escalation Governance', 'Change Control, CAB Leadership & SLA Management', 'Access Controls, Auditability & Data Governance', 'Cross-Time-Zone Multi-Discipline Program Leadership', 'Cloud & Data Platform Delivery (AWS, Snowflake, IDMC)', 'Data-Driven Decision Support (Power BI, SQL)', 'Incident Response & Postmortem Discipline'],
  },

  // 037 — Stripe TPM, Money-as-a-Service (3.7) — lead CS-1 + CS-5, commercial systems
  'stripe-money-as-a-service': {
    summary: `Technical Program Manager with 15+ years owning definition, cross-functional strategy, planning, and execution of large-scale technical programs across engineering, finance, legal, compliance, and business stakeholders. Delivered enterprise cloud and data-platform modernization on AWS, Snowflake, and CI/CD across 15&ndash;17 cross-functional teams and $500K&ndash;$3M budgets, producing 40% fewer production outages, 60% better environment stability, 4 major releases per year, and ~$3M in incremental revenue enabled. Track record extends to commercial and funds-adjacent systems: led delivery of contract and order management platforms supporting ~500 users, cutting time-to-market 20% and generating approximately $5M in annual incremental revenue. Proactive delivery-risk identification and mitigation via structured RAID and dependency governance across US and Europe. PMP and PMI-ACP credentialed.`,
    comps: ['Large-Scale Cross-Functional Program Execution', 'Engineering + Finance / Legal / Compliance Alignment', 'Contract & Order Management Systems Delivery', 'Proactive Delivery-Risk Identification & Mitigation', 'Regulated Environment Delivery (Financial Services, Pharma)', 'Cloud & Data Platform Delivery (AWS, Snowflake)', 'Program KPI Frameworks & Success Criteria', 'Executive Reporting & Written Program Communication'],
  },

  // 038 — Palantir TPM NYC (3.6) — outcomes over ceremony; lightweight framing
  'palantir': {
    summary: `Technical Program Manager with 15+ years as the delivery engine behind enterprise engineering organizations &mdash; driving product deliverables through the full software development lifecycle, optimizing development process, and removing roadblocks so engineers stay on engineering problems. Led delivery across 15&ndash;17 cross-functional teams spanning software engineering, DevOps, infrastructure, DBA, and UI/UX on $500K&ndash;$3M budgets, while modernizing on-prem workloads onto AWS, Snowflake, and CI/CD. Converted quarterly big-bang releases into reliable weekly increments, reduced production outages 40%, improved environment stability 60%, and enabled ~$3M in incremental revenue through 3 new analytics products. Comfortable in high-pressure, ambiguous environments and in technical discussion with engineers, architects, and quality teams. PMP and PMI-ACP credentialed.`,
    comps: ['Full-SDLC Program & Deliverable Ownership', 'Development Process Optimization & Throughput', 'Cross-Team Collaboration & Technical Alignment', 'Roadblock Anticipation & Rapid Issue Resolution', 'Release Coordination & Quality Bar Ownership', 'Cloud & Data Platform Delivery (AWS, Snowflake, CI/CD)', 'Program State Tracking & Executive Visibility', 'Regulated / Government-Adjacent Delivery'],
  },

  // 039 — Anthropic TPM, Enterprise Commerce (3.6) — CS-1/5/7 + commerce systems (NOT SF admin)
  'anthropic-enterprise-commerce': {
    summary: `Technical Program Manager with 15+ years owning the planning and operating cadence for cross-team programs spanning engineering, finance, legal, and business operations at enterprise scale &mdash; 15&ndash;17 cross-functional teams, $500K&ndash;$3M budgets, and cloud/data platform delivery across AWS and Snowflake. Built the single source of truth leadership steers from: Power BI executive dashboards, Jira Align portfolio structures rolling story-level work up to executive view, and standardized delivery and portfolio reporting. Strong controls background &mdash; chaired Change Advisory Boards, owned change control and SLA management, and implemented role-based access controls, auditability requirements, and data governance rules with validation workflows, metadata, and lineage. Enterprise commerce systems delivery includes contract and order management platforms supporting ~500 users, cutting time-to-market 20% and generating approximately $5M annual incremental revenue. PMP and PMI-ACP credentialed.`,
    comps: ['Cross-Team Planning & Operating Cadence', 'Engineering + Finance + Legal + GTM Alignment', 'Enterprise Systems Integration (Order Mgmt, CRM, Billing)', 'Control Design, Evidence Collection & Audit Readiness', 'Executive Single-Source-of-Truth Reporting (Power BI, Jira Align)', 'Technical Dependency Management Across the Stack', 'Operating in Undefined / Greenfield Operating Models', 'Regulated & Compliance-Aware Delivery'],
  },

  // 040 — OpenAI Senior TPM, Security (3.5) — CS-3 + CS-7 governance bridge
  'openai-security': {
    summary: `Senior Technical Program Manager with 15+ years driving cross-functional programs at the intersection of infrastructure, engineering, and governance &mdash; translating policy and compliance commitments into engineering milestones and driving them to completion. Owned enterprise cloud and DevOps delivery across AWS, Terraform, immutable infrastructure, and CI/CD spanning 15&ndash;17 cross-functional teams and $500K&ndash;$3M budgets. Ran the governance layer directly: chaired Change Advisory Boards, drove change control and SLA compliance, implemented role-based access controls, auditability requirements, and hybrid-cloud connectivity controls, and led incident postmortems and lessons learned &mdash; cutting production outages 40% and improving environment stability 60%. Regulated delivery across financial services and pharma R&D, coordinating engineering, data governance, architecture, and business stakeholders across US and Europe. PMP and PMI-ACP credentialed.`,
    comps: ['Security & Compliance Program Execution', 'Control Translation: Commitments to Engineering Milestones', 'Change Control, CAB Leadership & Evidence Discipline', 'Incident Response Coordination & Postmortems', 'Access Controls, RBAC & Auditability', 'Infrastructure Hardening Delivery (AWS, Terraform, Immutable Infra)', 'Cross-Org Program Visibility & Risk Reporting', 'Regulated Environment Delivery (FinServ, Pharma R&D)'],
  },

  // 041 — Anthropic TPM, Cloud Inference (3.2) — CS-2 + CS-3 launch readiness, honest AI framing
  'anthropic-cloud-inference': {
    summary: `Technical Program Manager with 15+ years owning execution across multi-cloud platform programs &mdash; AWS infrastructure modernization at Verisk, and Google Cloud and Oracle to Snowflake OneMesh migration on Azure at Sanofi &mdash; coordinating engineering deliverables across internal teams and external partners in the US and Europe. Owns launch readiness end to end: release governance, CAB-gated change control, UAT coordination, go/no-go criteria, hypercare, and transition to operations, with post-launch stability tracked and reported. Delivered across 15&ndash;17 cross-functional teams and $500K&ndash;$3M budgets, converting quarterly big-bang releases into reliable weekly increments while reducing production outages 40% and improving environment stability 60%. Built the CI/CD, Terraform, and blue/green deployment automation that ships to multiple environments. PMP and PMI-ACP credentialed.`,
    comps: ['Multi-Cloud Program Delivery (AWS, Azure, Snowflake)', 'Launch Readiness, Go/No-Go & Post-Launch Stability', 'Release Engineering & Deployment Automation (CI/CD, Terraform)', 'Cross-Org & External Partner Coordination (US + Europe)', 'Technical Roadmap Definition, Scoping & Sequencing', 'Blocker Tracking & Dependency Governance', 'Executive Program Status & Risk Reporting', 'Cloud Architecture & Platform Delivery'],
  },

  // 042 — EnergyHub TPM, Platform Integrations (3.0) — integration delivery + playbooks
  'energyhub': {
    summary: `Technical Program Manager with 15+ years owning platform and integration delivery end to end &mdash; requirements discovery, scoping, planning, testing, and launch &mdash; across enterprise cloud and data platforms on AWS, Snowflake, Informatica IDMC, and Control-M. Coordinated integration delivery across data engineering, MDM, analytics, architecture, and business stakeholders in the US and Europe, translating complex specifications into delivery plans, acceptance criteria, and release schedules. Built the repeatable layer: scalable operational frameworks, playbooks, and documentation standards supporting repeatable implementation and governance. Enterprise delivery scale of 15&ndash;17 cross-functional teams and $500K&ndash;$3M budgets, with 40% fewer production outages, 60% better environment stability, and ~$3M incremental revenue enabled. PMP and PMI-ACP credentialed.`,
    comps: ['Platform & Systems Integration Delivery', 'Requirements Discovery through Launch Ownership', 'Repeatable Playbooks & Documentation Standards', 'Cross-Functional & Client-Facing Coordination', 'Data Pipeline & Interface Delivery (IDMC, Control-M, Snowflake)', 'UAT, Release Readiness & Hypercare', 'Risk & Dependency Management', 'Enterprise Program Delivery at Scale'],
  },
};

for (const [slug, c] of Object.entries(roles)) {
  let html = base;
  html = html.replace(/(<div class="summary-text">)[\s\S]*?(<\/div>)/, `$1${esc(c.summary)}$2`);
  const tags = c.comps.map(t => `      <span class="competency-tag">${esc(t)}</span>`).join('\n');
  html = html.replace(/(<div class="competencies-grid">)[\s\S]*?(<\/div>)/, `$1\n${tags}\n    $2`);
  const out = `output/cv-${slug}-2026-08-02.html`;
  await writeFile(out, html, 'utf8');
  console.log('wrote', out);
}
