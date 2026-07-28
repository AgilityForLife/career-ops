# Session Log: career-ops daily run — 2026-07-28

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, LinkedIn, plus tracked company portals
  - New jobs found: 10 unique new listings (8 evaluated, 2 rejected)
  - Jobs evaluated: 8
  - Applications prepared: 0 (evaluations only — user reviews and decides)
  - Primary roles: 5 (CompassX 3.9, Nava PBC 3.7, Wilson Elser 3.5, HealthVerity 3.2, plus Nava as primary via SM)
  - Secondary roles: 3 (Wikimedia 3.7, Grant Street 3.5, G-P 3.3, Real Chemistry 3.0)
  - Rejected: 2 (CentralReach — likely expired; Flywheel Digital — media/marketing domain mismatch)

- **Key Decisions:**
  - Used WebSearch-based JD extraction after all direct WebFetch calls to job boards returned 403
  - Classified CompassX pharma role as highest-scoring new entry (3.9/5) due to direct Sanofi experience alignment
  - Flagged AI experience as a recurring gap across multiple new AI-adjacent roles (G-P, Real Chemistry)
  - Maintained 3.0/5 floor per skills model — did not evaluate below-threshold roles

- **What Worked:**
  - Parallel WebSearch queries across 6+ portals covered a broad surface efficiently
  - Skills model scoring framework consistently identified strong vs borderline fits
  - 3.5-month gap since last scan (April 6) yielded 8 viable new listings — pipeline is still producing

- **What Failed:**
  - WebFetch returned 403 for ALL job board URLs (Greenhouse, Lever, Ashby) — required fallback to WebSearch-based extraction which provides less detailed JD data
  - Greenhouse API endpoints for Anthropic and Glean also returned 403
  - normalize-statuses.mjs script has a bug: converts English canonical labels ("Applied") to Spanish aliases ("Aplicado") — had to manually fix

- **Friction:**
  - 403 errors on job board direct fetches significantly slowed JD extraction and reduced detail quality
  - Merge-tracker script defaults "Evaluated" to "Evaluada" (Spanish alias) — had to fix post-merge

- **Missing Context:**
  - Exact compensation for CompassX consulting role (highest-scoring find)
  - Whether CentralReach posting (May 2026) is actually expired or still accepting
  - Whether candidate has updated preferences since April 2026

- **What To Do Differently:**
  - Fix normalize-statuses.mjs language mapping to use English canonical labels
  - Consider adding Google cached page fetch as fallback for 403'd job board URLs
  - Run scans more frequently (monthly vs quarterly gap) to catch time-sensitive postings

- **Reusable Insight:**
  - Pharma Agile Coach/SM roles remain the strongest fit vertical (Sanofi experience + SPC6 = premium positioning). AI PM roles are growing but candidate's AI gap consistently reduces scores by 0.2-0.3 points. Government tech roles (Nava PBC) align well with regulated delivery background and match 1099 contract preference.

- **Top Mistake:**
  - 3.5-month gap between scans — some strong-fit roles may have closed in that window

- **Top Improvement Opportunity:**
  - Automated weekly scans would catch time-sensitive postings and maintain pipeline momentum

---

## Validation Check
- No vague language: PASS
- At least 1 insight: PASS (pharma vertical insight + AI gap pattern)
- Numeric fields filled: PASS
- File written successfully: PASS
