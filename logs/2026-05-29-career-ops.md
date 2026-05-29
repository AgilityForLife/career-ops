# Session Log: career-ops daily run — 2026-05-29

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries across Greenhouse, Ashby, Lever, Dice, LinkedIn, Indeed, and 30+ tracked companies
  - New jobs found: 27 unique URLs identified; 17 new (not in scan history)
  - Jobs evaluated: 7 full evaluation reports generated
  - Applications prepared: 0 (evaluation only — user decision pending per safety rule)
  - Primary roles: 3 (AHEAD Senior SM, Edgesource SM, Ardent SM DHS)
  - Secondary roles: 4 (Nava Sr. PM, Grant Street Group Sr. PM, TTEC Digital Principal TPM, Toast IT Delivery Mgr)
  - Rejected: 8 (location mismatch x2, domain gap x3, too technical x1, high bar x2)

- **Key Decisions:**
  - Used WebSearch instead of WebFetch for JD extraction due to network policy blocking direct job board fetches (403 Forbidden and host-not-in-allowlist)
  - Classified roles per task Step 5: Agile roles as PRIMARY, TPM/PM/Delivery as SECONDARY
  - Rejected CrossCountry Consulting (requires 7+ yrs Market Risk/Capital Markets domain), Accenture Federal Services (deep HPC/GPU infrastructure engineering), Flywheel Digital (10+ yrs media/marketing tech)
  - Added English aliases to verify-pipeline.mjs to resolve status validation mismatch between states.yml (English) and verify script (Spanish)

- **What Worked:**
  - WebSearch provided sufficient JD detail for scoring without direct page fetches
  - Greenhouse API board IDs from portals.yml enabled targeted searches
  - Scan-history dedup prevented re-evaluation of 10 previously processed URLs
  - Core Strength Engagement Test consistently identified genuine-fit vs weak-fit roles

- **What Failed:**
  - WebFetch returned 403 Forbidden for all job board URLs (Lever, Greenhouse, Ashby, Toast)
  - curl to Greenhouse API returned "Host not in allowlist" — network policy blocks external API calls
  - verify-pipeline.mjs did not recognize "Evaluated" as canonical — required alias fix

- **Friction:**
  - Network policy limitations forced reliance on WebSearch summaries instead of full JD text, reducing evaluation confidence for some roles
  - Merge-tracker.mjs converts "Evaluated" to "Evaluada" (Spanish) while CLAUDE.md specifies English labels — system inconsistency

- **Missing Context:**
  - Full JD text for all 7 evaluated roles (could only get WebSearch summaries)
  - Salary/rate info for Nava, Edgesource, and Ardent
  - Location specifics for Ardent (DHS) — remote/hybrid/onsite unclear

- **What To Do Differently:**
  - Pre-download JDs to jds/ directory when running from an environment with unrestricted network access
  - Consider adding Dice and Indeed as direct scan sources with saved search URLs
  - Update merge-tracker.mjs to use English canonical labels consistently with states.yml

- **Reusable Insight:**
  - Government/regulated sector roles consistently surface as the strongest fits due to CS-7 (regulated delivery at Sanofi + Verisk). This is a reliable hiring signal — prioritize gov contractor portals in future scans.

- **Top Mistake:**
  - Initially changed all "Evaluada" statuses back to "Evaluated" before understanding the verify script expected Spanish canonicals. Should have checked tooling compatibility first.

- **Top Improvement Opportunity:**
  - Align all pipeline scripts (merge-tracker, verify-pipeline, normalize-statuses) to use states.yml as single source of truth instead of hardcoded status lists. This would eliminate the English/Spanish mismatch.

---

## Score Summary

| # | Company | Role | Score | Category |
|---|---------|------|-------|----------|
| 7 | Nava | Sr. Project Manager | 3.8/5 | SECONDARY |
| 8 | Grant Street Group | Senior Project/Program Manager | 3.5/5 | SECONDARY |
| 9 | TTEC Digital | Principal Technical Project Manager | 3.5/5 | SECONDARY |
| 10 | AHEAD | Senior Scrum Master | 3.2/5 | PRIMARY |
| 11 | Edgesource | Scrum Master | 3.6/5 | PRIMARY |
| 12 | Toast | IT Delivery Manager | 3.4/5 | SECONDARY |
| 13 | Ardent | Scrum Master (DHS) | 3.3/5 | PRIMARY |

**Top picks for application (≥3.5):** Nava (3.8), Edgesource (3.6), Grant Street Group (3.5), TTEC Digital (3.5)
