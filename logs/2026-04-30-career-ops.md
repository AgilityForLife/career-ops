# Session Log — career-ops daily run

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 9 primary search queries + 6 targeted company searches across Greenhouse, Lever, Ashby, Dice, LinkedIn
  - New jobs found: 12 (after dedup against 10 previously evaluated roles)
  - Jobs evaluated: 12
  - Applications prepared: 0 (evaluation only — materials not yet generated, no auto-submit)
  - Primary roles: 9
  - Secondary roles: 3
  - Rejected: 0 (all 12 scored >= 3.0; 6+ roles skipped at scan level due to location/clearance/eligibility)

- **Key Decisions:**
  - Scored Syner-G BioPharma (4.2/5) as top match — pharma PMO with Power BI directly maps to Sanofi + Verisk experience
  - Scored Nava Sr. Program Manager (4.0/5) as strong match — SAFe explicitly required, NJ eligible
  - Included all 12 roles scoring 3.0+ per "do not over-filter" instruction
  - Skipped 3Cloud SM (Philippines location), WPP SM (India), Apply Digital (Pacific Time), Lambda (data center PM), Rackner (Secret clearance), OpenAI TPM Site Delivery (construction/infra)
  - Used WebSearch summaries as JD source since WebFetch/curl blocked by sandbox; all reports marked "Verification: unconfirmed (batch mode)"
  - Split resume selection: Technical PM for program/PMO roles, Agile for SM/coaching roles

- **What Worked:**
  - Parallel WebSearch batches across 9 portals surfaced 40+ URLs efficiently
  - Skills-model.md Core Strength Engagement Test cleanly separated strong fits (4.0+) from borderline (3.0)
  - Scan-history dedup prevented re-evaluation of 10 previously seen roles
  - Tracker merge + verify pipeline ran clean on first pass (after status normalization)

- **What Failed:**
  - WebFetch and curl both blocked by sandbox (403 / "Host not in allowlist") — could not retrieve full JDs
  - Relied entirely on WebSearch result summaries for JD analysis — evaluation confidence lower than with full JDs
  - PDF generation not possible without Playwright in batch mode

- **Friction:**
  - verify-pipeline.mjs uses Spanish canonical statuses (evaluada, aplicado) while CLAUDE.md documents English (Evaluated, Applied) — caused one extra normalization step
  - normalize-statuses.mjs maps English → Spanish (opposite of what CLAUDE.md implies) — confusing for new sessions

- **Missing Context:**
  - Full JD text for all 12 roles (only had WebSearch summaries)
  - Salary information for 7 of 12 roles
  - Exact location/remote policies for some roles (Ardent, Roku)
  - Current application volume / market competitiveness data

- **What To Do Differently:**
  - Pre-cache JD text in jds/ directory during non-sandboxed sessions
  - Add Greenhouse/Lever API endpoints to WebFetch allowlist if possible
  - Consider running portal scan in a non-sandboxed session for full JD retrieval

- **Reusable Insight:**
  - Pharma PMO roles (like Syner-G) that explicitly require Power BI are the highest-scoring matches — they engage CS-1 + CS-4 + CS-5 + CS-7 simultaneously. Prioritize these in future scans.
  - Federal/gov roles (Nava, Bixal, Ardent) consistently score 3.3-4.0 and surface frequently — Erick's regulated delivery background translates well to this sector.

- **Top Mistake:**
  - None critical. Minor: attempted WebFetch 16 times before switching to WebSearch, wasting API calls.

- **Top Improvement Opportunity:**
  - Build a local JD cache (jds/ directory) populated during interactive sessions, so batch runs always have full JD text available regardless of sandbox restrictions.

---

## Score Distribution (2026-04-30 scan)

| Score Range | Count | Roles |
|---|---|---|
| 4.0+ (Strong) | 2 | Syner-G (4.2), Nava Sr. PM (4.0) |
| 3.5-3.9 (Good) | 3 | Nava NJ (3.8), Bixal (3.5), Jencap (3.5) |
| 3.0-3.4 (Moderate) | 7 | HealthVerity (3.3), Ardent (3.3), Veda (3.2), Capital Rx (3.2), Roku (3.0), Mercury (3.0), Energy Solutions (3.0) |

## Cumulative Pipeline (all time)

| Metric | Value |
|---|---|
| Total evaluated | 18 |
| Applied | 6 |
| Pending decision | 12 |
| Primary roles | 14 |
| Secondary roles | 4 |
| Avg score (all) | 3.4/5 |
| Avg score (applied) | 3.6/5 |
