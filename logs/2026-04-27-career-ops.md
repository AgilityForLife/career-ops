# Session Log — 2026-04-27

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries across Greenhouse, Ashby, Lever, Dice, LinkedIn, government, construction, and company-specific portals (Anthropic, JPMorgan, Roku)
  - New jobs found: 8 (from 20+ candidate URLs after dedup and location/clearance filtering)
  - Jobs evaluated: 8
  - Applications prepared: 0 (evaluation-only batch; no PDFs generated)
  - Primary roles: 3 (Ardent SM/DHS 3.7, Capital Rx SM 3.4, Neon One Agile DM 3.9)
  - Secondary roles: 5 (Roku AI PM 3.3, Cayuse TPM 3.8, Nava Sr PM 3.6, TTEC Digital Principal TPM 3.5, Rula TPM 3.5)
  - Rejected: 4 during scan (3Cloud Philippines, WPP India, Rackner Secret clearance, Vonage possibly closed)

- Key Decisions:
  - Relied on WebSearch snippets for JD extraction after all WebFetch calls returned 403 on Greenhouse, Ashby, and Lever. Evaluations are based on partial JD data from search results, not full JDs.
  - Marked all reports as "unconfirmed (batch mode)" per CLAUDE.md rules since Playwright was not available.
  - Prioritized 8 strongest candidates from 20+ raw scan results using location fit, title match, and compensation alignment.

- What Worked:
  - Multi-portal search approach surfaced diverse pipeline (federal, health tech, SaaS, nonprofit tech, government consulting).
  - Dedup against scan-history.tsv effectively prevented re-evaluation of 10 known URLs.
  - Merge-tracker and verify-pipeline scripts ran cleanly after status normalization.

- What Failed:
  - WebFetch returned 403 on all three major ATS platforms (Greenhouse, Ashby, Lever). Full JD extraction was impossible. Evaluations based on search snippet data have lower confidence than full-JD evaluations.

- Friction:
  - Status mapping between CLAUDE.md (English "Evaluated") and verify-pipeline.mjs (Spanish "Evaluada") caused initial pipeline health check failure. Required manual status correction.

- Missing Context:
  - Full JDs for all 8 evaluated roles (only had search snippets). Salary data for most positions (only Roku had explicit range). Specific location details for Ardent DHS role.

- What To Do Differently:
  - Explore Greenhouse API (boards-api.greenhouse.io) as alternative to direct scraping for next scan cycle. Consider caching JDs locally when available.
  - Align verify-pipeline.mjs canonical statuses with CLAUDE.md English labels to prevent status mapping friction.

- Reusable Insight:
  - Federal contractor roles (Ardent, Trilogy Federal from prior batch) are a viable pipeline channel for SAFe-certified candidates. DHS and VA programs value SPC6. Background investigation requirements are achievable without existing clearance.

- Top Mistake:
  - Using "Evaluated" instead of "Evaluada" in TSV status column, causing pipeline verification failure. The verify script expects Spanish canonical forms despite CLAUDE.md documenting English labels.

- Top Improvement Opportunity:
  - Build a JD caching layer that stores full job descriptions when initially discovered (before 403 blocks tighten). This would improve evaluation confidence from ~70% (search snippets) to ~95% (full JD).

---

## Pipeline Health After Run

| Metric | Value |
|--------|-------|
| Total tracked applications | 14 |
| Previously applied | 6 |
| New evaluations this run | 8 |
| Highest new score | 3.9/5 (Neon One — Agile Delivery Manager) |
| Average new score | 3.59/5 |
| Pipeline verification | Clean (0 errors, 0 warnings) |
| Reports directory | 007–014 |
| Scan history entries | 19 total |
