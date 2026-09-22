# Evaluation: CoreWeave — Senior TPM, Fleet Delivery & Capacity Management

**Date:** 2026-09-22
**Score:** 3.3/5
**URL:** https://job-boards.greenhouse.io/coreweave/jobs/4713653006
**Verification:** unconfirmed (batch mode) — Greenhouse URL redirected to a generic CoreWeave careers landing page (no JD content served without JS execution). Corroborated full JD content via mirror site (freehire.me), consistent with WebSearch snippets describing the same role, scope, and comp band. Treated as corroborated, not directly confirmed.
**PDF:** output/cv-coreweave-senior-tpm-fleet-delivery-capacity-management-2026-09-22.pdf
**Label:** [PRIMARY]

---

## Core Strength Engagement Test

| CS | Engaged? | Evidence from JD |
|---|---|---|
| CS-1 Enterprise Technical Program Delivery | YES | "Leading fleet delivery from infrastructure handover through provisioning, validation, and operational acceptance"; "translating customer and business requirements into executable delivery plans"; "maintaining integrated visibility of commitments, forecasts, dependencies, and blockers" — this is CS-1's exact shape: multi-team delivery ownership with milestones, dependency management, and executable plans, directly analogous to Verisk's cross-functional infrastructure modernization roadmap ownership. |
| CS-2 Cloud & Data Platform (AWS + Snowflake) | NOT VISIBLE | This is GPU/CPU cloud infrastructure delivery (CoreWeave's own compute fleet), not AWS or Snowflake specifically. Per strict scoring rule (named-platform match only), treated as absent — even though the *domain* (large-scale cloud infrastructure delivery) is conceptually adjacent to Erick's AWS/Terraform/golden-AMI evidence. −0.3. |
| CS-3 DevOps Delivery Governance | PARTIAL | "Establishing provisioning and acceptance criteria with engineering/operations teams"; "defining metrics for throughput, accuracy, and capacity constraints" — an acceptance-gate/governance pattern structurally similar to Verisk's CAB/blue-green deployment acceptance process, but applied to hardware provisioning rather than software release governance. |
| CS-4 Executive Reporting | NOT VISIBLE | "Data investigation and metrics definition" is reporting-adjacent but no Power BI or executive-dashboard language present. |
| CS-5 Cross-Functional Stakeholder Alignment in Regulated Environments | PARTIAL | "Partnering with teams across Compute, Networking, Data Center, Fleet Operations, Product, Go-to-Market, and Capacity Planning" — strong structural match to Verisk's cross-functional coordination (engineering, DevOps, infra, DBA, UI/UX, mainframe), but CoreWeave/GPU-cloud infrastructure is not framed as a regulated industry in this JD. |
| CS-6 SAFe / SPC6 | NO | Not mentioned. |
| CS-7 Regulated & Compliance-Aware Delivery | NO | Not mentioned — this is capacity/provisioning delivery, not a compliance or access-governance function (that's the companion IAM role, report #309). |

**CS engaged: 1 clean YES (CS-1) + 2 PARTIAL (CS-3, CS-5)** → "3–4 engaged" band, weighted toward the lower-middle of that band since only one of the three is a clean, high-weight hit and the PARTIALs are domain-adjacent rather than exact matches. Base ~3.6, CS-2 absent → −0.3.

## Role Summary

- **Title:** Senior Technical Program Manager – Fleet Delivery & Capacity Management.
- **Company:** CoreWeave (Nasdaq: CRWV) — GPU cloud infrastructure provider; AI-infrastructure-adjacent, but this specific role is delivery/capacity-management, not ML engineering.
- **Locations:** New York, NY / Sunnyvale, CA / Bellevue, WA. **NY is within the candidate's Greater NYC Metro hybrid-flexibility zone** — the Sunnyvale/Bellevue options are not applicable to the NJ-based candidate, but the NY option is directly workable.
- **Work arrangement:** Full-time, on-site 3 days/week at office hub — a genuine hybrid model, not a rigid 4–5 day mandate. Does not trigger the on-site deal-breaker.
- **Scope:** Own delivery of CoreWeave's GPU/CPU compute fleet — from infrastructure handover through provisioning, validation, and operational acceptance into steady-state operations. Translate business priorities and customer requirements into executable fleet-delivery plans; establish readiness criteria and achievable timelines with Compute, Networking, Data Center, Fleet Operations, Product, GTM, and Capacity Planning teams.
- **Required:** Bachelor's in CS/Computer Engineering or equivalent; 7+ years TPM or engineering-delivery experience; technical understanding of server provisioning, networking dependencies, hardware/software integration at scale; cross-functional leadership; data investigation/metrics definition; comfort operating in rapidly evolving environments with incomplete information.
- **Preferred:** New GPU-platform deployment readiness; data center knowledge (power, cooling, networking impact); SQL/analytical tools; track record improving provisioning throughput or delivery predictability.
- **Comp:** $182,000–$242,000 base + discretionary bonus + equity — well above both the FTE anchor ($105K+) and the aspirational target band ($130–150K).

## CV Match

| JD Requirement | cv.md Evidence |
|---|---|
| 7+ years TPM/engineering-delivery experience, large-scale infrastructure | Verisk: 5 years, 15–17 cross-functional teams, $500K–$3M budgets, multi-year on-prem-to-AWS/Snowflake modernization roadmap. Strong match on scale and delivery ownership pattern. |
| Translating business/customer requirements into executable delivery plans with milestones | Verisk: "Owned execution of a multi-year modernization roadmap"; "defined milestones and acceptance criteria for data warehousing enablers." Direct match. |
| Cross-functional coordination across infra/ops/product/GTM teams | Verisk: coordinated software engineering, DevOps, infrastructure, DBA, UI/UX, and mainframe workstreams — same structural shape, different specific functions. |
| Establishing provisioning/acceptance criteria, metrics for throughput and predictability | Verisk: "Implemented delivery metrics (cycle time, throughput, velocity, release stability) to improve predictability"; CAB/change-control acceptance gates. Strong conceptual match — governance discipline transfers even though the artifact (hardware acceptance vs. software release) differs. |
| Technical understanding of server provisioning, networking dependencies, hardware/software integration | Verisk: golden AMIs, EKS/ECS Fargate, Terraform modules, VPC/Transit Gateway — infrastructure-delivery-level technical fluency, though AWS-specific rather than GPU-fleet/data-center-specific. |
| Data center knowledge (power, cooling, networking) — preferred | **Gap.** No evidence in cv.md of physical data-center operations knowledge. |
| SQL/analytical tools for capacity metrics | Verisk/Sanofi: SQL and Power BI usage for delivery/operational metrics — transferable. |

### Gaps
- **No literal AWS/Snowflake or GPU-fleet-specific evidence** — CS-2 doesn't engage on a strict name-match basis, even though the underlying skill (large-scale cloud infrastructure delivery) is real and transferable. Position this honestly as "infrastructure delivery discipline transfers across cloud providers," not as direct GPU-fleet experience.
- **No physical data-center operations background** (power/cooling/networking) — a preferred, not required, qualification.
- **Bachelor's degree requirement** — cv.md notes "Education: details available upon request"; confirm this doesn't block screening before applying.

## Deal-Breaker Check

| Deal-breaker | Status |
|---|---|
| Below $60/hr C2C or $100K FTE | PASS — $182K–$242K FTE, dramatically above floor and anchor. |
| Relocation outside NJ/NY Metro | PASS — NY location option is within the candidate's Greater NYC Metro hybrid-flexibility zone. |
| On-site 4–5 days/week mandatory, no flexibility | PASS — stated cadence is 3 days/week at office hub, a standard hybrid model. |
| No Agile/Scrum practices | PASS — nothing suggests absence; fast-moving infrastructure delivery context implies iterative practices. |

No deal-breaker triggered.

## Level and Positioning Strategy

- **Level detected:** Senior TPM (individual contributor, cross-functional delivery owner) — matches Erick's natural Senior TPM/Delivery Lead level; no stretch.
- **"Sell senior without lying" plan:** Lead with Verisk's CS-1 scale (15–17 teams, $3M budget, multi-year modernization roadmap) as the closest honest analog to fleet-delivery ownership at CoreWeave's infrastructure scale. Bridge explicitly: *"I've owned delivery of cloud infrastructure modernization from planning through production cutover — the discipline of translating business requirements into executable, milestone-driven delivery plans across many teams is the same whether the deliverable is a data warehouse migration or GPU fleet capacity."* Do not claim direct GPU/data-center hardware experience.
- **"If downleveled" plan:** Given the role is an IC Senior TPM position (not a people-manager or director title), downleveling risk is low; the main risk is a domain-fit question in screening about hands-on hardware/data-center exposure — be transparent that the depth is at the cloud-infrastructure-delivery layer, not physical data-center operations.

## Comp Assessment

$182,000–$242,000 base + bonus + equity is exceptionally strong — well above both the $105K+ FTE anchor and the $130–150K aspirational target band, and reflects CoreWeave's premium positioning as a fast-growing, publicly traded GPU cloud infrastructure company. Comp strongly supports pursuing this role.

## Resume Personalization Plan

**Score is 3.3/5 (above 3.0 threshold) — apply-eligible. PDF generated** (see below).

| # | Section | Current State | Proposed Change | Why |
|---|---|---|---|---|
| 1 | Summary | Generic TPM/Delivery Lead opener | Open with adoption outcome → how achieved (cloud infrastructure modernization delivery) → CS-1/CS-2 scale (15–17 teams, $3M budget, AWS/Snowflake) per standing positioning rule | Matches JD's "translate business/customer requirements into executable delivery plans" language while staying honest to cv.md |
| 2 | Core Competencies | Generic tools list | Inject JD keywords: "fleet delivery," "capacity management," "provisioning and acceptance criteria," "cross-functional infrastructure delivery," "dependency management" | ATS keyword alignment |
| 3 | Verisk bullets | Lead with CS-2/CS-3 | Reorder to foreground: multi-year modernization roadmap ownership, golden AMIs/Terraform/EKS delivery, CAB/acceptance-gate governance, delivery metrics (cycle time, throughput, velocity) | Directly mirrors "provisioning and acceptance criteria," "metrics for throughput, accuracy, and capacity constraints" |
| 4 | Sanofi bullets | CS-2/CS-5 focus | Keep as-is — cross-geo, multi-workstream coordination reinforces cross-functional delivery pattern | Supports CS-5 partial match |
| 5 | Skills section | Generic cloud/data list | Add "Infrastructure Provisioning," "Capacity Planning," "Dependency & Milestone Management" phrasing (real, from Verisk evidence, reworded to JD vocabulary) | Ethical keyword injection — reformulating real experience, not inventing new skills |
| 6 | BTII | Standard placement | Keep last, minimized, no lead-proof-point use | Per standing positioning lock |

## Interview Prep — STAR Story Priority

1. **Verisk cloud/DevOps modernization** (CS-1, CS-2, CS-3) — primary story: multi-year on-prem-to-AWS/Snowflake roadmap ownership across 15–17 teams, directly maps to "fleet delivery from infrastructure handover through operational acceptance."
2. **Verisk CAB and release governance** (CS-3, CS-7-adjacent) — maps to "establishing provisioning and acceptance criteria" — reframe CAB/change-control governance as an acceptance-gate discipline transferable to hardware provisioning.
3. **Verisk Power BI executive dashboard implementation** (CS-4) — supports "data investigation and metrics definition" ask, even though CS-4 wasn't scored as engaged from the JD text alone.
4. **Sanofi Snowflake OneMesh migration** (CS-2, CS-5) — supports cross-functional, multi-team infrastructure delivery at scale, reinforcing the "translating requirements into executable plans" theme.

**Red-flag question to expect:** "Have you worked with GPU infrastructure or physical data centers before?" Honest answer: no direct hardware/data-center experience — pivot to the transferable delivery discipline (dependency management, acceptance gates, delivery metrics) that applies regardless of the underlying infrastructure type.

## Score Breakdown

| Dimension | Score |
|---|---|
| CS engagement (1 YES on CS-1 + 2 PARTIAL on CS-3/CS-5) | 3.6 base (mid-3-4 band) |
| CS-2 absent (no named AWS/Snowflake; GPU fleet is a different cloud domain) | −0.3 |
| Comp (exceptionally strong, well above anchor) | supports upper half, no further deduction |
| Deal-breaker override | none |
| **Global** | **3.3/5 — PRIMARY, apply-eligible** |
