# Session Log: career-ops daily run
**Date:** 2026-05-19

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries + 6 tracked company searches + 2 API checks (Anthropic, Glean — 403 blocked)
  - New jobs found: 17 unique new URLs (6 evaluated, 8 rejected, 3 skipped as aggregator/no-JD)
  - Jobs evaluated: 6
  - Applications prepared: 0 (evaluations complete; no auto-submit per safety rule)
  - Primary roles: 4 (CyberMedia Technologies TPM, Nava Sr. PM, Nava Sr. Program Manager, Capital Rx SM)
  - Secondary roles: 2 (Mercury Senior TPM, Roku AI PM)
  - Rejected: 8 (TTEC Digital — CXone gap, Palantir — CS degree req, Slide Insurance — limited scope, Komodo Health — EoR/limited, 3Cloud — Philippines, WPP — India, Energy Solutions — nuclear industry, Rackner — Secret clearance)

## Portal Scan
- Portals scanned: Greenhouse (PM, Agile, PMO, AI), Ashby, Lever (PM, Agile), Dice, LinkedIn/Contract, Construction/Procore, plus tracked companies (Nava, Palantir, Redaptive, TTEC Digital)
- New jobs detected: 17
- Duplicates filtered: 10 (all from initial 2026-04-06 scan)
- Any anomalies: Greenhouse and Lever direct URL fetching returned 403 (blocked by WAF). Used WebSearch as fallback to extract JD details. Anthropic and Glean API endpoints also returned 403.

## Job Evaluations

### Job Evaluation: CyberMedia Technologies — Technical Project Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Federal IT (DHS/OPM), Agile-at-Scale delivery, Azure DevOps, executive reporting — engages 5-6 Core Strengths
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise delivery), CS-4 (exec reporting), CS-5 (gov stakeholders), CS-6 (Agile-at-Scale), CS-7 (federal regulated)
- Key gaps: Bachelor's in CS/IS required (candidate education unspecified), Azure vs AWS
- Confidence (1–10): 7

### Job Evaluation: Nava — Sr. Project Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: NJ hybrid (2-3 days), government digital services, agile delivery, stakeholder management
- Resume chosen: Agile/PM resume
- Key strengths match: CS-1 (delivery), CS-5 (gov stakeholders), CS-6 (Agile), CS-7 (government)
- Key gaps: No direct gov/civic tech experience, cloud/data not central
- Confidence (1–10): 7

### Job Evaluation: Nava — Sr. Program Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: NJ eligible remote-friendly, program-level scope, government services
- Resume chosen: Technical PM resume
- Key strengths match: CS-1 (program delivery), CS-5 (stakeholder alignment), CS-6 (Agile), CS-7 (government)
- Key gaps: No direct government experience, cloud not central
- Confidence (1–10): 7

### Job Evaluation: Mercury — Senior Technical Program Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Remote US, $118K-$148K, cross-functional delivery, dashboards
- Resume chosen: Technical PM resume
- Key strengths match: CS-1 (multi-team delivery), CS-4 (dashboards), CS-5 (cross-functional)
- Key gaps: Linear not Jira, fintech/SaaS startup culture, no SAFe
- Confidence (1–10): 6

### Job Evaluation: Roku — AI Program Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: $140K-$170K, AI-adjacent career pivot opportunity
- Resume chosen: Technical PM resume (AI-adjacent framing)
- Key strengths match: CS-1 (enterprise delivery), CS-5 (cross-functional)
- Key gaps: No AI/ML program management experience, limited CS engagement
- Confidence (1–10): 5

### Job Evaluation: Capital Rx — Scrum Master
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Healthcare PBM (regulated), remote/NYC hybrid, Scrum Master is primary target role
- Resume chosen: Agile resume
- Key strengths match: CS-6 (Scrum, Agile), CS-7 (healthcare regulated)
- Key gaps: Limited scope (SM not program-level), no cloud/data alignment, comp risk
- Confidence (1–10): 6

## Batch Summary
- Total processed: 6 evaluated + 8 rejected = 14 decisions
- Strong fits: 1 (CyberMedia Technologies at 4.0/5)
- Weak fits: 3 (Mercury 3.4, Roku 3.1, Capital Rx 3.0)
- Unclear roles: 0
- Patterns noticed: Government/federal PM roles showing strong fit (CyberMedia, Nava). NJ-based opportunities appearing through Nava. AI-adjacent roles (Roku) have comp appeal but significant experience gaps. Job board scraping increasingly blocked (403s) — search fallback works but loses JD detail.

## Resume Decision
- Resume used: Technical PM for 4 roles, Agile/PM for 2 roles
- Reason: Federal/program-level roles need technical PM framing; SM roles need Agile framing
- Any ambiguity: Nava roles could go either way — chose based on role title emphasis
- Missing data from cv.md: Education details not specified (matters for CyberMedia CS/IS requirement)

## Final State
- Total outputs: 6 reports + 6 tracker TSVs + pipeline updates + scan-history updates
- Reports generated: 007 through 012
- Applications prepared: 0 (evaluation only — no auto-submit)
- Any failed steps: WebFetch blocked by 403 on all job board URLs (Greenhouse, Lever, Ashby). Used WebSearch summaries instead.
- Any skipped steps: PDF generation (no JD source HTML to generate from). Offer verification via Playwright (not available in batch mode).
- Confidence (1–10): 7

---

- **Key Decisions:**
  - Prioritized government/federal PM roles (CyberMedia, Nava) as strongest new fits
  - Rejected 8 roles for clear disqualifiers (location, clearance, tech gap, limited scope)
  - Fixed verify-pipeline.mjs and normalize-statuses.mjs to accept English canonical labels alongside Spanish

- **What Worked:**
  - Parallel web searches across 12+ portal queries efficiently surfaced 17 new URLs
  - Skills model CS engagement test provided clear scoring differentiation
  - Nava discovery (NJ hybrid government PM) is a high-value find for candidate's location

- **What Failed:**
  - All job board direct URL fetching returned 403 — forced reliance on search result summaries for JD details
  - Anthropic and Glean API endpoints also 403-blocked
  - JD detail quality is reduced without full page scraping

- **Friction:**
  - 403 blocks on Greenhouse, Lever, Ashby job boards significantly slowed JD extraction
  - Normalize script and verify script had inconsistent language handling (Spanish vs English canonical labels)

- **Missing Context:**
  - Candidate's education details (Bachelor's degree field) — affects CyberMedia evaluation
  - Salary ranges for Nava and Capital Rx roles
  - Whether candidate has or can obtain government clearance (relevant for federal contractor roles)

- **What To Do Differently:**
  - Pre-configure a scraping fallback strategy for 403-blocked job boards (e.g., cached versions, LinkedIn mirrors)
  - Standardize all scripts on English canonical labels to match CLAUDE.md states table
  - Add education details to cv.md for accurate gap analysis

- **Reusable Insight:**
  - Government/civic tech sector (Nava, CyberMedia) shows consistently strong CS engagement (4+ Core Strengths) and location fit. This sector should be prioritized in future scans with dedicated search queries.

- **Top Mistake:**
  - Not having English label support in verify/normalize scripts from the start — caused pipeline errors that required mid-run script fixes

- **Top Improvement Opportunity:**
  - Add government/civic tech dedicated portal queries (USAJOBS, civic tech job boards, government contractor career pages) to portals.yml for higher-yield scanning in this sector
