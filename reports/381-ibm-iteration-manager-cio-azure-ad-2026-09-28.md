# Evaluation: IBM — Iteration Manager, CIO Azure Active Directory

**Date:** 2026-09-28
**Score:** 2.4/5
**URL:** https://careers.ibm.com/ShowJob/Id/941851/CIO-Azure-Active-Directory-Iteration-Manager/
**Verification:** unconfirmed (batch mode) — direct WebFetch of careers.ibm.com returned HTTP 404 (consistent with this pipeline's recurring pattern of IBM careers-page fetch failures for headless workers, see scan-history `skipped_404_dead_link` entries). Content corroborated via WebSearch across the IBM careers-page search snippet itself plus independent secondary indexing (search-engine cache of the same posting) confirming: title, ARMONK/North Castle, NY location, and full requirements text. No independent third-party mirror (LinkedIn/Indeed/ZipRecruiter) carried this specific req, which is a thinner corroboration than usual for a non-Greenhouse listing.
**PDF:** Not generated — score below the 3.0 apply-eligible threshold
**Label:** [REJECTED] — Location clears (Westchester County, NY, within Greater NYC Metro flexibility), but the role is a single-project Azure AD identity iteration-manager function, not enterprise-scale technical program delivery.

---

## Core Strength Engagement Test

| CS | Engaged? | Evidence |
|---|---|---|
| CS-1 Enterprise Technical Program Delivery | WEAK/PARTIAL | Role oversees "development and support teams" for one identity/access project (Azure AD), managing multiple projects with attention to detail — real delivery ownership, but no enterprise-scale signal (no team count, budget, or release-cadence language) comparable to Verisk's 15–17 teams / $500K–$3M program scale. |
| CS-2 Cloud & Data Platform (AWS + Snowflake) | WEAK/PARTIAL | Microsoft Azure AD identity/access administration — cloud-adjacent, but IAM tenant administration is a narrower lane than Verisk's AWS infrastructure modernization or Sanofi's Snowflake OneMesh data-platform delivery. No AWS or Snowflake overlap at all. |
| CS-3 DevOps Delivery Governance | NOT ENGAGED | "Agile Methods and Tools such as Github, Jira, Box, WebEx, Slack" is generic tooling literacy, not CAB/release-governance/incident-postmortem content. |
| CS-4 Executive Reporting (Power BI) | NOT ENGAGED | No dashboard, reporting, or executive-visibility content in the recovered JD. |
| CS-5 Cross-Functional Stakeholder Alignment, Regulated | WEAK/PARTIAL | "Subscriber support to worldwide organizations" implies cross-geo coordination, but this is internal IT helpdesk-adjacent support, not the VP/Director-level regulated-industry alignment cv.md evidences (Sanofi R&D, Verisk compliance infrastructure). |
| CS-6 SAFe SPC6 | NOT ENGAGED | "Agile Methods" is named but no SAFe, ART, or PI Planning language — this reads as team-level Scrum/Kanban, not portfolio-scale transformation. |
| CS-7 Regulated & Compliance-Aware Delivery | NOT ENGAGED | No compliance, audit, or regulated-industry language recovered. |

**CS engaged: 0 fully engaged + 3 weak/partial (CS-1, CS-2, CS-5).** Per the Core Strength Engagement Test, this sits at the low end of the "1–2 CS engaged → below 3.0" band even counting partial credit for three weak overlaps, because none of the three rises above surface-level tooling/administration language. Scored above the Anthropic-style zero-overlap floor (1.8–2.0) because there is genuine, if narrow, program-management and cloud-identity content.

## Role Summary
- **Title:** Iteration Manager, CIO Azure Active Directory
- **Company:** IBM (internal CIO organization, not client-facing consulting)
- **Location:** North Castle / Armonk, NY (IBM global HQ area — within Greater NYC Metro per profile.yml's "open to hybrid in Greater NYC Metro"); JD notes remote work to start the assignment, with an eventual expected move back to an IBM facility
- **Core function:** Iteration Manager/PM overseeing development, testing, and rollout of changes to IBM's enterprise Azure Active Directory tenant, plus a worldwide subscriber-support model for orgs using Microsoft products/services on that Azure AD instance
- **Compensation:** Not disclosed in any recovered source
- **Requirements:** 5+ years Microsoft product suite experience with notable Azure AD history; PMI certification with 5+ years managing development and support teams; demonstrated Agile methods/tools (GitHub, Jira, Box, WebEx, Slack); strong communication in a high-profile environment

## CV Match
| JD Signal | cv.md Evidence |
|---|---|
| PMI certification, 5+ years managing dev/support teams | Direct match — PMP (License #1793833), 15+ years leading cross-functional delivery teams. |
| Azure identity/access administration | Thin — Sanofi engagement used Azure as the hosting layer for Snowflake OneMesh, but Erick's Azure exposure is data-platform-adjacent, not identity/IAM administration. No Azure AD-specific evidence in cv.md. |
| Agile Methods and Tools (GitHub, Jira, Box, WebEx, Slack) | Partial — Jira is Erick's primary tool (Verisk, enterprise config); no GitHub/Box evidence in cv.md. |
| Worldwide subscriber support model | No direct evidence — closest parallel is Sanofi's US+Europe cross-geo coordination, but that was program delivery, not a support/helpdesk model. |

## Deal-Breaker Check
| Deal-breaker | Status |
|---|---|
| Below comp floor | UNKNOWN — no range disclosed anywhere; cannot confirm pass or fail. |
| Relocation / location eligibility | PASS — Armonk/North Castle, NY is within Greater NYC Metro; JD explicitly allows remote start. |
| On-site mandatory | CAUTION — JD notes "pending move back to IBM facility," implying eventual on-site expectation of unconfirmed frequency; not a confirmed 5-day RTO deal-breaker, but a flag for the candidate to probe. |
| No Agile/Scrum practices | PASS — Agile methods and tools are explicit requirements. |

## Recommendation
**DO NOT APPLY at 2.4/5.** This is a real, credentialed PM role with a compatible location and PMI-alignment, but the actual function — administering a single Azure AD identity tenant and running a worldwide subscriber-support model — sits outside every one of the candidate's seven Core Strengths at anything beyond a surface level. It would require positioning Erick as an IAM/helpdesk-support PM rather than an enterprise cloud/data-platform delivery lead, which contradicts the positioning lock in `config/skills-model.md`. Comp is undisclosed and could not be verified either way. Not worth spending an application on without a materially stronger signal that scope is broader than the recovered JD suggests.

## Score Breakdown
| Dimension | Score |
|---|---|
| CS engagement (0 full + 3 weak/partial: CS-1, CS-2, CS-5) | 2.4 base |
| Location/comp (location passes; comp unknown, no adjustment applied) | +0.0 |
| **Global** | **2.4/5 — DO NOT APPLY (narrow IAM/support scope, no enterprise-delivery or cloud/data-platform overlap)** |
