# Evaluation: Anthropic — Program Manager, AI Deployment Infrastructure

**Date:** 2026-09-23
**Score:** 2.7/5
**URL:** https://job-boards.greenhouse.io/anthropic/jobs/5418845008
**Verification:** unconfirmed (batch mode) — direct Greenhouse fetch returned the generic jobs-index page (not the individual posting); `boards-api.greenhouse.io/v1/boards/anthropic/jobs/5418845008` returned 404 (this endpoint successfully served other Anthropic postings in prior scans, e.g. report #296, so the 404 here suggests the posting ID may no longer resolve cleanly, not a tool failure). WebSearch found no indexed snippet for this exact title/ID. Corroborated only indirectly, via structurally similar live Anthropic infrastructure PM/TPM postings surfaced by search (Technical Program Manager, Data Center Infrastructure; Technical Program Manager, Cloud Inference; Technical Program Manager, Infrastructure) and the task-provided prior-scan note that this posting is On-Site across SF/NYC/Seattle. Scored from limited/inferred information — treat this score as lower-confidence than a normal evaluation and recommend the candidate manually re-verify the live posting before deciding.
**PDF:** Not generated — score below 3.0 threshold (not apply-eligible)
**Label:** [REJECTED] — insufficient-information / conservative score, not a confirmed hard mismatch. Re-evaluate if the actual JD becomes available.

---

## Core Strength Engagement Test

| CS | Engaged? | Evidence from JD |
|---|---|---|
| CS-1 Enterprise Technical Program Delivery | PARTIAL | Title ("Program Manager, AI Deployment Infrastructure") strongly implies cross-functional infra-delivery ownership, and the closest live analogs found (TPM, Data Center Infrastructure — "drive cross-functional execution of data center programs from construction through commissioning and day-to-day operations"; TPM, Cloud Inference — "execution owner driving coordination across multiple engineering teams") are structurally close to Verisk's multi-team delivery pattern. No confirmed JD text pins down actual scope, team count, or budget for this specific req, so this stays PARTIAL rather than YES. |
| CS-2 Cloud & Data Platform (AWS + Snowflake) | NOT VISIBLE | No confirmed JD text naming AWS or Snowflake for this req. Anthropic's infrastructure is known publicly to run on AWS (Trainium) and Google Cloud (TPU), which is domain-adjacent to Erick's AWS evidence, but per the strict named-platform scoring convention used elsewhere in this pipeline (see report #308), unconfirmed inference does not count as engaged. −0.3. |
| CS-3 DevOps Delivery Governance | PARTIAL | "Deployment Infrastructure" in the title implies release/deployment governance work analogous to Verisk's CAB/blue-green governance, but no confirmed JD text describes specific mechanisms (change control, release cadence, incident process). |
| CS-4 Executive Reporting | NOT VISIBLE | No confirmed evidence either way. |
| CS-5 Cross-Functional Stakeholder Alignment in Regulated Environments | PARTIAL | Analog Anthropic infra PM roles consistently describe cross-team coordination (Compute, Data Center, Product, Research), a structural match to Verisk/Sanofi's cross-functional pattern — but Anthropic is not a traditionally regulated industry (pharma/finserv), so the "regulated environments" half of CS-5 is unconfirmed. |
| CS-6 SAFe / SPC6 | NO | No evidence; Anthropic postings generally do not reference SAFe/Agile ceremony language. |
| CS-7 Regulated & Compliance-Aware Delivery | NOT VISIBLE | AI-safety governance is conceptually adjacent to compliance-aware delivery but is not evidenced as CS-7's specific flavor (pharma R&D / financial-services controls) in any confirmed text. |

**CS engaged: 0 clean YES, 3 PARTIAL (CS-1, CS-3, CS-5)** — low-middle of the "1–4 engaged" range, weighted down because none of the three PARTIALs are backed by confirmed JD text, only by analogy to similarly-titled live postings. Base ~3.0, CS-2 absent → −0.3 → 2.7. Given the unusually high evidentiary uncertainty (no confirmed JD at all), this is treated as a conservative floor rather than a normal score.

## Role Summary

- **Title:** Program Manager, AI Deployment Infrastructure.
- **Company:** Anthropic.
- **Locations (per task brief, corroborating prior scan):** On-site across San Francisco, New York City, and Seattle. **NYC satisfies the NJ/NY Metro geographic constraint** — this is hybrid-tolerable for the candidate, not a relocation deal-breaker, though it is not remote-eligible, which is a real trade-off against the candidate's stated remote preference.
- **Scope (inferred from title + closest live analogs, not confirmed):** Likely owns execution of infrastructure programs supporting AI model deployment/serving — provisioning, cloud coordination, cross-team dependency management between Compute/Infrastructure/Research/Product groups, in the pattern of Anthropic's other infra TPM/PM postings.
- **Comp:** Not stated in available info. Other Anthropic infrastructure PM/TPM roles found in this pipeline's history range widely (e.g., report #296's Data Center Security Delivery role: $290K–$365K FTE). If this req is in a similar band, it would sit well above the anchor — but this is inferred, not confirmed for this specific posting.

## CV Match

| JD Requirement (inferred) | cv.md Evidence |
|---|---|
| Cross-functional infra program delivery ownership | Verisk: 15–17 cross-functional teams, $500K–$3M budgets, multi-year AWS/Snowflake modernization roadmap — strong structural analog if the actual scope matches the title's implication. |
| Deployment/release-adjacent governance | Verisk: CAB chairmanship, blue/green deployment governance, 40% outage reduction, 60% stability improvement — transferable discipline if the role's "deployment infrastructure" function resembles software release governance rather than something else entirely (e.g., a different domain, as seen in report #296's construction-security role at the same company). |
| Cross-team coordination (Compute, Data Center, Product, Research) | Verisk/Sanofi: cross-functional coordination across engineering, DevOps, infrastructure, data, and business stakeholders. |

### Gaps
- **No confirmed JD text.** This is the primary and most material gap in this evaluation — the title alone does not disambiguate whether this role is software/cloud program delivery (Erick's strong lane) or a physically/operationally different function (as Anthropic's own "Data Center Security Delivery" posting in report #296 turned out to be — a hard mismatch despite a plausible-sounding title). Recommend the candidate confirm the live JD text directly before treating this score as final.
- On-site (not remote) across all three listed hubs — workable given NYC, but a real trade-off against stated remote preference.
- No AWS/Snowflake confirmation for CS-2.

## Deal-Breaker Check

| Deal-breaker | Status |
|---|---|
| Below $60/hr C2C or $100K FTE | UNCONFIRMED — no comp data available for this specific req; not scored as a trigger given no evidence either way. |
| Relocation outside NJ/NY Metro | PASS — NYC is a listed site option, within Greater NYC Metro. |
| On-site 4–5 days/week mandatory, no flexibility | PASS (per task brief) — treated as hybrid-tolerable, not a rigid on-site mandate trigger, consistent with this run's explicit instruction that NYC availability defuses the on-site concern. Note this is still not remote, which is a real (non-disqualifying) trade-off. |
| No Agile/Scrum practices | PASS — no evidence of absence; nothing suggests a non-Agile environment. |

No deal-breaker triggered.

## Level and Positioning Strategy

Given the confirmed-information gap, no confident level/positioning read is possible. If the live JD turns out to describe software/cloud infrastructure program delivery (the optimistic read), the positioning would lead with CS-1 (Verisk scale) + CS-2 framed as "infrastructure delivery discipline that transfers across cloud providers" (per the honest-bridging approach used in report #308 for CoreWeave). If the live JD turns out to describe a different domain (the pessimistic read, per Anthropic's own report #296 precedent at this same company), this would not be a defensible pursuit. **Recommend confirming the actual JD before investing further prep time.**

## Comp Assessment

Not stated for this specific req. Other Anthropic infrastructure PM/TPM postings in this pipeline's history have ranged from strong to very strong (e.g., $290K–$365K in report #296), so if this req is comparable, comp would not be a limiting factor — but this cannot be confirmed without the live JD.

## Resume Personalization Plan

**Score is 2.7/5 (below the 3.0 threshold) — NOT apply-eligible, no PDF generated, recommend against applying** until the live JD is confirmed. This is a low-confidence score driven primarily by an inability to retrieve the actual posting text, not a confirmed hard skills mismatch — re-run this evaluation once direct JD access is available (the boards-api endpoint has worked for other Anthropic reqs in this pipeline and may work again if the posting ID is re-verified).

## Interview Prep — STAR Story Priority

Per `config/skills-model.md`'s STAR Story Priority Order, if this role is later confirmed to be software/cloud infrastructure delivery: lead with (1) Verisk cloud/DevOps modernization (CS-1, CS-2, CS-3), and (4) Verisk CAB and release governance (CS-3, CS-7), framed per the "Cloud/Platform Transformation" hiring-context (CS-2 + CS-3 lead, CS-6 close) — Anthropic is an AI-infrastructure company, closest to this hiring-context bucket. Do not prepare further until the JD is confirmed, given the risk (demonstrated at this same company in report #296) that the actual function may be materially different from what the title implies.

## Score Breakdown

| Dimension | Score |
|---|---|
| CS engagement (0 YES, 3 PARTIAL, all inferred rather than JD-confirmed) | 3.0 base |
| CS-2 absent (no confirmed AWS/Snowflake) | −0.3 |
| Confidence discount (no confirmed JD text — evaluated from title + analog postings only) | reflected in conservative base, no further explicit deduction |
| Deal-breaker override | none |
| **Global** | **2.7/5 — REJECTED (insufficient information; re-evaluate if JD becomes confirmable)** |
