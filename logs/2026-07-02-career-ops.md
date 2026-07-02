### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, LinkedIn, and tracked companies (Anthropic, Glean, JPMorgan, J&J, Merck)
  - New jobs found: 19 new URLs added to scan-history (5 evaluated, 1 rejected, 10 queued as pending, 1 closed, 2 skipped)
  - Jobs evaluated: 5 (CompassX, Grant Street Group, Omada Health, Toast, Nava)
  - Applications prepared: 0 (evaluations complete; user review needed before applying)
  - Primary roles: 1 (CompassX — Scrum Master & Agile Coach Pharma, 3.8/5)
  - Secondary roles: 4 (Grant Street Group 3.5/5, Omada Health 3.4/5, Toast 2.9/5, Nava 2.8/5)
  - Rejected: 2 (G-P — requires Workday/HRIS expertise; Energy Solutions — position closed)

- Key Decisions:
  - CompassX Group (3.8/5) identified as the strongest new match — pharma domain directly maps to Sanofi experience, 1099/C2C structure matches preference, and Agile Coach title is a PRIMARY target role
  - Grant Street Group (3.5/5) is the highest-comp opportunity at $150K-$225K but is FTE only, not C2C; government + financial services regulated match is strong
  - G-P Sr. Principal PM rejected despite $176K-$221K comp because it requires deep Workday ERP/HRIS and CaptivateIQ experience not in candidate's background
  - Toast and Nava evaluated but scored below 3.0 — borderline fits included per "do not over-filter" instruction
  - 10 additional URLs queued in pipeline for future evaluation (Redaptive, Encora, Ardent, Cyara, AHEAD, Grow Therapy, Hinge Health, Axle, Real Chemistry, Flywheel Digital)

- What Worked:
  - WebSearch successfully retrieved JD details for most roles when direct WebFetch was blocked (403 Forbidden on all job board direct fetches)
  - Greenhouse API, Lever, and Ashby all blocked by proxy — WebSearch fallback provided sufficient detail for evaluations
  - Core Strength Engagement Test scoring produced consistent, defensible scores across all 5 evaluations
  - Scan-history deduplication worked correctly — all 11 previously seen URLs filtered out

- What Failed:
  - All direct WebFetch calls to job board URLs returned 403 Forbidden (proxy/Cloudflare blocking)
  - Greenhouse boards-api.greenhouse.io JSON API also returned 403
  - This means JD details came from search snippets and third-party aggregators, not original postings — some detail may be incomplete

- Friction:
  - The verify-pipeline.mjs and normalize-statuses.mjs scripts use Spanish canonical statuses (evaluada, aplicado) while the states.yml labels are in English (Evaluated, Applied). Had to manually fix status values after merge.
  - WebFetch blocking required multiple WebSearch queries to gather JD details for each role, significantly increasing scan time

- Missing Context:
  - Exact compensation for CompassX (hourly rate unclear), Nava (not disclosed), and ASSYST (not disclosed)
  - Whether Ardent DHS Scrum Master requires security clearance (key blocker if so)
  - Full JD details for the 10 pending pipeline URLs — only titles and snippets available

- What To Do Differently:
  - Pre-filter URLs by domain before attempting WebFetch — skip Greenhouse/Lever/Ashby direct fetches entirely and go straight to WebSearch
  - Consider using Playwright-based scraping when available (not in batch mode) for accurate JD extraction

- Reusable Insight:
  - CompassX Group (pharma consulting) is a new channel worth monitoring — consulting firms placing Agile Coaches into pharma clients overlap heavily with candidate's Sanofi experience

- Top Mistake:
  - Attempted direct WebFetch on all job board URLs before falling back to WebSearch, wasting ~10 API calls on 403 responses

- Top Improvement Opportunity:
  - Add "evaluated → evaluada" alias to the verify-pipeline.mjs ALIASES map so English status names are accepted without manual correction

---

## Portal Scan
- Portals scanned: 12 queries (Greenhouse PM, Greenhouse Agile, Ashby, Lever PM, Lever Agile, Greenhouse AI, Contract/C2C, Dice, Gov/Federal, Anthropic API, Glean API, JPMorgan, J&J/Merck)
- New jobs detected: 19
- Duplicates filtered: 11 (all from 2026-04-06 batch)
- Any anomalies: All direct job board fetches blocked (403); Greenhouse/Glean API also blocked; Energy Solutions position confirmed closed (removed April 28, 2026)

---

## Job Evaluation: CompassX Group — Scrum Master & Agile Coach – Pharmaceuticals

- Role classification: PRIMARY
- Why selected: Pharma domain directly maps to Sanofi experience; Agile Coach + Scrum Master is exact PRIMARY target role; 1099/C2C structure matches compensation preference
- Resume chosen: Agile resume
- Key strengths match: CS-5 (pharma regulated), CS-7 (pharma compliance), CS-1 (enterprise delivery), CS-6 (SPC6)
- Key gaps: No consulting pedigree; Sanofi was R&D/MDM not Clinical Development
- Confidence (1–10): 8

## Job Evaluation: Grant Street Group — Senior Project/Program Manager

- Role classification: SECONDARY
- Why selected: Exceptional comp ($150K-$225K); government + financial services = regulated industry match; PMP/SAFe valued; remote-first
- Resume chosen: Technical PM resume
- Key strengths match: CS-1 (enterprise delivery), CS-5 (regulated), CS-7 (gov + financial services)
- Key gaps: No cloud/data platform delivery (CS-2); FTE only (candidate prefers C2C); up to 25% travel
- Confidence (1–10): 7

## Job Evaluation: Omada Health — Staff AI Transformation Program Manager

- Role classification: SECONDARY
- Why selected: Strong comp ($155K-$202K); healthcare regulated; executive reporting requirement matches CS-4; AI transformation is career-expanding
- Resume chosen: Technical PM resume
- Key strengths match: CS-1 (enterprise delivery), CS-4 (executive reporting), CS-5 (healthcare regulated), CS-7 (healthcare compliance)
- Key gaps: AI transformation experience gap; startup culture vs. enterprise background; FTE only
- Confidence (1–10): 6

## Job Evaluation: Toast — Senior Technical Program Manager

- Role classification: SECONDARY
- Why selected: Strong TPM role; remote; good comp ($149K-$219K total)
- Resume chosen: Technical PM resume
- Key strengths match: CS-1 (enterprise delivery)
- Key gaps: Restaurant tech = no regulated industry premium; no cloud/data platform; low CS engagement (only 1 full + 2 partial)
- Confidence (1–10): 5

## Job Evaluation: Nava — Sr. Project Manager / Contract Lead

- Role classification: SECONDARY
- Why selected: NJ hybrid in candidate's home market; government services context
- Resume chosen: Technical PM resume
- Key strengths match: CS-1 (enterprise delivery)
- Key gaps: No cloud/data platform; comp unknown; vague JD
- Confidence (1–10): 4

---

## Resume Decision
- Resume used: Agile resume for CompassX (PRIMARY pharma Agile Coach role); Technical PM resume for all SECONDARY roles (Grant Street, Omada, Toast, Nava)
- Reason: CompassX explicitly requires Agile Coach/Scrum Master skills — lead with SPC6 and Sanofi pharma experience. All other roles are PM/TPM titles — lead with enterprise delivery and regulated industry experience
- Any ambiguity: None — role titles clearly indicate which resume to use
- Missing data from cv.md: None — all metrics and experience verified against cv.md

---

## Batch Summary
- Total processed: 5 evaluated + 1 rejected + 1 closed = 7 decisions
- Strong fits: 1 (CompassX at 3.8/5 — recommend applying)
- Weak fits: 4 (Grant Street 3.5, Omada 3.4, Toast 2.9, Nava 2.8 — mixed recommendation)
- Unclear roles: 10 pending in pipeline (need JD fetch to evaluate)
- Patterns noticed: Pharma + Agile Coach roles remain the strongest match channel. AI Transformation PM roles are emerging but require experience bridge. High-comp remote FTE roles ($150K+) are available in gov/financial/healthcare but lack cloud/data platform alignment.

---

## Final State
- Total outputs: 5 evaluation reports + 5 tracker additions + 19 scan-history entries + pipeline updates
- Reports generated: 007, 008, 009, 010, 011
- Applications prepared: 0 (evaluation stage only — user review required before applying)
- Any failed steps: WebFetch blocked on all job boards (workaround: WebSearch)
- Any skipped steps: PDF generation skipped (no applications prepared yet)
- Confidence (1–10): 7
