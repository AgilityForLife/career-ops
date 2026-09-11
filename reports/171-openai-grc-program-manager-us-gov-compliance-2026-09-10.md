# Evaluación: OpenAI — GRC Program Manager, US Government Compliance (Washington, D.C.)
**Fecha:** 2026-09-10
**Arquetipo:** Governance, Risk & Compliance Program Manager (FedRAMP/ATO specialist)
**Score:** 2.1/5
**Tier:** [REJECTED]
**Rec:** DO NOT APPLY — DC hybrid (3 days/week) + relocation assistance offered confirms this is NOT remote despite the Ashby `isRemote:true` flag; domain requires direct FedRAMP/ATO ownership experience candidate does not have
**URL:** https://jobs.ashbyhq.com/openai/550d0123-238c-4ad8-aaee-ea4a5a484639
**PDF:** ❌
**Verification:** ACTIVE — direct fetch via Ashby job-board API (`api.ashbyhq.com/posting-api/job-board/openai`) returned the live posting JSON, 2026-09-10 (batch mode; not Playwright-verified).

---

## Resumen

OpenAI's Security/GRC team wants a Program Manager to drive US Government Authorization to Operate (ATO) processes — FedRAMP and Department of War (DoW) frameworks — for OpenAI products, working with engineers and external assessors on System Security Plans (SSPs), risk assessments, and architecture documentation. The Ashby API flags `isRemote: true`, but the JD text states: **"This role is based in Washington, DC. We use a hybrid work model of 3 days in the office per week and offer relocation assistance to new employees."** The `isRemote` flag reflects Ashby's job-board taxonomy (this role is not restricted to being posted only for the HQ location), not nationwide remote eligibility — the actual work arrangement requires physical DC presence 3x/week, and OpenAI is offering relocation assistance, confirming they expect candidates to relocate.

## Core Strength Engagement Test

- **CS-1 Enterprise Technical Program Delivery** — PARTIAL. ATO program ownership ("exceptional technical program management skills... deliver large complex programs under pressure") is enterprise-scale, but the domain is FedRAMP/ATO compliance specifically, not engineering/infrastructure delivery.
- **CS-2 Cloud & Data Platform** — PARTIAL/thin. JD mentions familiarity with "deployment models... cloud platforms (Azure, AWS)... Kubernetes, Terraform" as a nice-to-have, but this is security-control review, not the delivery-ownership evidence CS-2 requires. Treated as not meaningfully engaged; −0.3 applies.
- **CS-3 DevOps Delivery Governance** — PARTIAL. Control implementation and process refinement echo governance discipline, not release/CAB governance specifically.
- **CS-4 Executive Reporting** — not engaged.
- **CS-5 Cross-Functional Stakeholder Alignment** — ENGAGED. Works with engineers, internal stakeholders, external assessors.
- **CS-6 SPC6** — not requested. Neutral.
- **CS-7 Regulated & Compliance-Aware Delivery** — ENGAGED, strongly. FedRAMP, NIST, RMF are core to the role.

**CS engaged: 2/7** (CS-5, CS-7) with partial credit elsewhere → base band would sit below 3.0 even before the relocation deal-breaker, given how FedRAMP/ATO-specific (versus general delivery-governance-adjacent) this posting is compared to the Palantir GRC PM roles evaluated this batch.

## Fit — where he wins

- CS-7 thematic alignment (compliance-aware infrastructure, role-based access controls) carries over from Verisk/Sanofi.
- Cross-functional stakeholder work with engineers and external parties is a genuine transferable skill.

## Gaps — where he loses

- **"Proven experience in obtaining and maintaining a FedRAMP ATO and agency specific ATOs" is listed as a required qualification, not a preference.** Erick has no direct FedRAMP/ATO ownership experience in cv.md — this is a harder, more specific domain requirement than the Palantir GRC PM postings (job 165/166), which asked for broader SOC 2/ISO 27001 experience.
- **DC hybrid, 3 days/week, with relocation assistance offered** — confirms relocation is expected despite the `isRemote` API flag. Independent deal-breaker per profile.yml.
- No CS-2 (real) or CS-4 hook.
- "An active US security clearance" appears only under the "you might thrive in this role if" (preferred) list, not the required-qualifications list — soft ask, not the primary blocker.

## Compensation

Not disclosed in the posting. Moot given the domain and location gaps.

## Section 15 flags

**Clearance** — listed as preferred ("you might thrive... if you have: An active US security clearance"), not a stated requirement. Would be a Section-15 soft flag on its own, not disqualifying. **DC relocation (3x/week hybrid, relocation assistance offered)** is the primary, confirmed deal-breaker, compounded by the FedRAMP/ATO-specific domain-experience gap.

## Positioning / resume guidance

No resume prepared — below 3.0 threshold on domain-experience gap (no direct FedRAMP/ATO ownership) plus the confirmed DC relocation requirement.

## Decision

**DO NOT APPLY.** The Ashby `isRemote: true` flag is misleading here — the JD text confirms DC-based hybrid work with relocation assistance offered, which is a relocation deal-breaker per profile.yml. Independent of location, the FedRAMP/ATO ownership requirement is a harder domain-specific gap than the more general GRC/compliance asks seen in the Palantir postings this batch.
