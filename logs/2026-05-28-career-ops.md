# Session Log: 2026-05-28

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 7 search queries across Greenhouse, Ashby, Lever, AI-specific, contract/C2C, PMO, and Amazon
  - New jobs found: 20 new URLs identified (not in scan-history.tsv)
  - Jobs evaluated: 9 reports generated (007-015)
  - Applications prepared: 0 (JD fetching blocked — preliminary evaluations only)
  - Primary roles: 2 (HealthVerity Senior PM/Scrum Master, Veda Data Senior Scrum Master)
  - Secondary roles: 7 (Flywheel Digital, Roku, CentralReach, Toast, TTEC Digital, Nava, Mercury)
  - Rejected: 0 (all 20 found roles passed title filter; no clear weak-fit roles)

- Key Decisions:
  - Network allowlist blocked all job board hosts (Greenhouse, Lever, Ashby) — could not fetch full JDs
  - Proceeded with search-snippet-based preliminary evaluations for top 9 roles
  - Remaining 11 URLs queued in pipeline.md Pending for next session when JD access is available
  - Fixed verify-pipeline.mjs, merge-tracker.mjs, and normalize-statuses.mjs to use English canonical states instead of Spanish

- What Worked:
  - WebSearch successfully found 20 new job URLs across 7 portal queries
  - Search snippets provided enough info for meaningful preliminary scoring using skills model
  - Title filtering from portals.yml effectively identified relevant roles
  - Merge/verify pipeline scripts worked correctly after canonical state fix

- What Failed:
  - WebFetch returned 403 Forbidden for all job board URLs (Greenhouse, Lever, Ashby APIs all blocked)
  - curl directly also blocked: "Host not in allowlist" — environment network policy restriction
  - Could not generate PDFs (no JDs to build resumes from)
  - Evaluations are preliminary — scores may shift +/-0.3 once full JDs are reviewed

- Friction:
  - Network allowlist is the primary bottleneck — prevents fetching JDs from any ATS
  - Merge/verify/normalize scripts were hardcoded to Spanish canonical states — had to fix 3 scripts
  - Normalize script was converting English→Spanish instead of Spanish→English

- Missing Context:
  - Full JDs for all 20 roles would enable precise scoring and resume tailoring
  - Comp ranges for most roles (only Roku disclosed $140-170K)
  - On-site/hybrid requirements for several roles

- What To Do Differently:
  - Run pipeline from environment with unrestricted network access to fetch JDs
  - Consider saving JDs to jds/ directory locally during manual browsing sessions
  - Pre-fetch JDs via a separate mechanism before running the evaluation pipeline

- Reusable Insight:
  - WebSearch works in restricted environments even when WebFetch is blocked; use search snippets as fallback data source for preliminary evaluations
  - Scripts should always use English canonical states per CLAUDE.md; Spanish aliases should only appear in alias mappings

- Top Mistake:
  - Did not verify network access to job board hosts early enough — could have pivoted strategy sooner

- Top Improvement Opportunity:
  - Add a JD caching layer: when user manually visits job URLs, save JDs to jds/ directory, then pipeline can evaluate from local files even when network is restricted

---

## Portal Scan
- Portals scanned: 7 (Greenhouse PM, Greenhouse Agile, Ashby, Lever, AI/Transformation, Contract/C2C, PMO/Portfolio)
- New jobs detected: 20
- Duplicates filtered: 0 (all URLs new vs scan-history.tsv)
- Any anomalies: All job board hosts blocked by network allowlist (403/Host not in allowlist)

## Batch Summary
- Total processed: 9 (reports 007-015)
- Strong fits (3.7+): 4 (Roku 3.8, HealthVerity 3.8, Mercury 3.8, TTEC Digital 3.7, Nava 3.7)
- Weak fits (below 3.5): 0
- Unclear roles: 11 (queued in Pending — JDs needed for full evaluation)
- Patterns noticed: Strong supply of Senior PM, TPM, and SM roles across Greenhouse/Lever; NJ/NYC market active; AI PM roles emerging at multiple companies

## Resume Decision
- Resume used: Not generated (JDs not fetched)
- Reason: Cannot tailor resume without full JD; preliminary reports include resume recommendations for when JDs become available
- Any ambiguity: HealthVerity role (PM + SM dual title) would use Agile resume; all others would use Technical PM resume
- Missing data from cv.md: None — cv.md is comprehensive for all target roles

## Final State
- Total outputs: 9 reports, 20 scan-history entries, 11 pending pipeline URLs
- Reports generated: 9 (007-015)
- Applications prepared: 0 (blocked by network; preliminary evaluations only)
- Any failed steps: JD fetching (network restriction), PDF generation (no JDs)
- Any skipped steps: Full resume tailoring, application form prep
- Confidence (1-10): 5 (preliminary evaluations are directionally correct but scores may shift once full JDs are reviewed)
