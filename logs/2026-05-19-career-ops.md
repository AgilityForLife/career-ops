# Session Log — 2026-05-19

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries + 6 tracked company searches + 2 Greenhouse API attempts
  - New jobs found: 21 unique new URLs across Greenhouse, Lever, Ashby, and general job boards
  - Jobs evaluated: 8 (reports 007–014)
  - Applications prepared: 0 (evaluation only — no auto-submit per safety rule)
  - Primary roles: 2 (Neon One Agile Delivery Manager 3.5/5, Ardent Scrum Master DHS 3.4/5)
  - Secondary roles: 6 (Rula TPM 3.9/5, Mercury Sr TPM 3.8/5, Nava Sr PM 3.7/5, Roku AI PM 3.4/5, CentralReach TPM 3.3/5, Toast IT DM 3.2/5)
  - Rejected: 5 (TTEC Digital, CrossCountry Consulting, Synthesia, Energy Solutions, Coretelligent)

- Key Decisions:
  - Evaluated all 8 genuine-fit roles despite limited JD data (WebFetch blocked by 403)
  - Used WebSearch snippets and third-party job aggregator descriptions for evaluations
  - Classified Agile Delivery Manager and Scrum Master as PRIMARY per task targeting logic
  - Classified TPM/PM/AI PM roles as SECONDARY per skills-model.md positioning
  - Added English aliases to verify-pipeline.mjs to fix canonical status recognition
  - Two roles (Toast, CentralReach) flagged for manual verification due to insufficient JD data

- What Worked:
  - WebSearch effectively gathered JD details when WebFetch was blocked
  - Parallel portal scanning covered 18+ search queries efficiently
  - Skills-model.md scoring rubric produced consistent, defensible scores
  - Pipeline integrity tools (merge, verify) caught and resolved status mapping issues

- What Failed:
  - WebFetch returned 403 Forbidden on ALL job board URLs (Greenhouse, Lever, Ashby)
  - Greenhouse boards API also returned 403 (Anthropic, Glean)
  - JPMorgan site search returned 0 results
  - This limited evaluation confidence — all reports marked "unconfirmed (batch mode)"

- Friction:
  - Job board 403 blocks required fallback to WebSearch, which provides partial JD data
  - Verify script used Spanish canonical statuses but English was used in tracker — required alias additions
  - Merge script auto-mapped "Evaluated" to "Evaluada" — required manual correction back to English

- Missing Context:
  - Full JD text for Toast and CentralReach roles
  - Salary information for 4 of 8 roles (Nava, Neon One, Ardent, CentralReach)
  - Specific technical requirements for roles with limited JD data
  - Whether candidate has updated preferences since 2026-04-06 session

- What To Do Differently:
  - Consider using Playwright/browser-based scraping instead of WebFetch for job boards
  - Pre-build a cache of common job board workarounds (API endpoints, aggregator mirrors)
  - Add all English status labels as aliases in verify-pipeline.mjs and merge-tracker.mjs upfront

- Reusable Insight:
  - Third-party aggregators (RemoteRocketship, Himalayas, BuiltIn, Startup.jobs) often mirror job postings and are not 403-blocked — use them as fallback data sources for JD details

- Top Mistake:
  - Initially changed merge script's "Evaluada" output to "Evaluated" before checking that verify script didn't recognize "Evaluated" — caused a pipeline verification failure that required a code fix

- Top Improvement Opportunity:
  - Standardize all pipeline scripts to use English canonical statuses (matching states.yml labels) rather than Spanish — eliminates the constant mapping friction between states.yml, merge, and verify scripts
