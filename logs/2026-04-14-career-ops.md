# Session Log — 2026-04-14

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 18 (12 search queries + 6 tracked company queries across Greenhouse, Lever, Ashby, Dice, LinkedIn, Indeed, USAJobs)
  - New jobs found: 21 unique new URLs added to pipeline and scan-history
  - Jobs evaluated: 7 full evaluations with reports generated
  - Applications prepared: 0 (evaluations complete; PDFs not generated — batch mode)
  - Primary roles: 3 (Capital Rx SM, Ardent SM DHS, Slide Insurance SM)
  - Secondary roles: 4 (Calendly Senior TPM, TTEC Digital Principal TPM, Cognizant Sr Consulting Mgr PMO, Conversant Group Senior PM)
  - Rejected: 2 (WPP Agile DM — London UK location; Vonage PM AI — low fit/possibly UK)
  - Remaining in pipeline: 11 URLs queued for future evaluation

- Key Decisions:
  - Prioritized Calendly Senior TPM (4.5/5) as highest-priority application — engages all 7 Core Strengths
  - Split resume selection cleanly: Agile resume for 3 PRIMARY SM roles, Technical PM resume for 4 SECONDARY TPM/PM roles
  - Rejected WPP Agile DM despite strong title match — London UK location is a deal-breaker
  - Added Cognizant PMO (Teaneck NJ) despite thin JD — excellent local location + comp in range worth pursuing
  - Left 11 URLs in pipeline for next session rather than rushing thin evaluations

- What Worked:
  - WebSearch fallback after Greenhouse API 403 blocks — recovered enough JD content for quality evaluations
  - Core Strength Engagement Test provided clear, consistent scoring across all 7 evaluations
  - Pipeline scan covered 18 portal/company queries in parallel, finding 21 new URLs efficiently
  - Tracker merge + verify pipeline ran clean with 0 errors

- What Failed:
  - Greenhouse API and direct job board URL fetching all returned 403 — no direct JD access possible
  - Some JDs were thin from search snippets only (Cognizant, Conversant Group, Ardent) — scores carry uncertainty

- Friction:
  - 403 blocks on all job board direct fetches forced reliance on search snippet extraction
  - Merge script defaulted "Evaluated" to "Evaluada" (Spanish alias) — normalize script then converted "Applied" to "Aplicado" as well, creating inconsistency in language display (functionally valid per states.yml)

- Missing Context:
  - Direct JD access would improve evaluation accuracy for thin-JD roles (Cognizant, Conversant, Slide)
  - Compensation data missing for most roles — score adjustments may be needed once comp is known
  - Candidate feedback on previous batch (Apr 6) would help calibrate scoring

- What To Do Differently:
  - Try cached Google results or alternative JD extraction methods to bypass 403 blocks
  - Batch PDFs for strong-fit roles (especially Calendly 4.5/5) in the same session to avoid delay
  - Process more of the remaining 11 pipeline URLs in the next session before they go stale

- Reusable Insight:
  - Roles engaging 5+ Core Strengths (like Calendly) are rare — when found, they should be treated as urgent high-priority applications. In 13 evaluations so far, only 1 has scored above 4.0/5 from new scan results (Calendly at 4.5/5).

- Top Mistake:
  - Not attempting alternative JD fetch methods (Google cache, archive.org, etc.) when direct fetches failed — settled for search snippets too quickly

- Top Improvement Opportunity:
  - Automate JD extraction with multiple fallback methods (API → direct fetch → Google cache → search snippet) to maximize evaluation quality

---

## Scoring Distribution (All-Time, 13 Evaluations)

| Score Range | Count | Roles |
|---|---|---|
| 4.0+ | 2 | System One (4.2), Calendly (4.5) |
| 3.5–3.9 | 2 | Leidos (3.5), Cognizant (3.5) |
| 3.0–3.4 | 9 | Trilogy (4.0), Capital Rx (3.4), Distyl (3.4), Ardent (3.3), TTEC (3.3), Arlo (3.3), Slide (3.2), Conversant (3.2), Kasisto (3.0) |

## Pipeline Status

- Evaluated to date: 13 roles
- Applied: 6 (all from Apr 6 batch)
- Pending evaluation: 11 URLs in pipeline
- Strong fits pending PDF/application: 1 (Calendly 4.5/5)
