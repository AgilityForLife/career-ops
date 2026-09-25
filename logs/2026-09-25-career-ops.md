### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, application prep, and submission pipeline

- Execution Summary:
  - Portals scanned: 12/12 search_queries + 31/31 tracked_companies, via 4 parallel background agents
  - New jobs found: ~235 raw candidates surfaced; ~15 genuinely new after dedup against scan-history.tsv/applications.md
  - Jobs evaluated: 2 (full reports 351, 361); 13 other new candidates deliberately filtered without spending an eval slot (title/domain mismatch, relocation deal-breakers, confirmed closed/stale — consistent with quality-over-volume guidance)
  - Applications prepared: 1 (PwC — tailored resume PDF, held per submission gate)
  - Applications submitted: 0 (SUBMISSION GATE active per section 15 — not removed this run)
  - Primary roles: 1 (PwC, Fixed Term - PwC Tech Sr Project Manager Cloud, 3.2/5)
  - Secondary roles: 0
  - Rejected: 1 (Anthropic, Program Manager - Safeguards Workforce Operations, 1.8/5)

- Key Decisions:
  - Split scan work across 4 parallel agents (1 search_queries + 3 tracked_companies groups), each explicitly instructed to execute all search/eval/report/TSV work itself and never spawn further sub-agents — directly addressing the "sub-agent delegation caught" failure flagged in 2026-09-24's log.
  - Assigned each parallel agent a disjoint report-number range (343-350, 351-360, 361-372, 373-382) to prevent numbering collisions before any merge step ran.
  - Removed a stray one-off `build-cv-361-*.mjs` script the PwC-evaluating agent left in the repo root after use — not part of the established PDF-generation pattern (which writes to /tmp then calls generate-pdf.mjs directly); cleaned up before commit.
  - Kept the section 15 SUBMISSION GATE intact (did not delete the quoted block) — the PwC role was prepared and held, not submitted.

- What Worked:
  - The "no further delegation" instruction held across all 4 agents this run — each returned a report of concrete file paths and evaluation numbers, not a report of having delegated to others.
  - Disjoint report-number ranges prevented any collision; merge-tracker.mjs and verify-pipeline.mjs both ran clean on the first attempt.
  - Dedup-before-eval discipline held: 59/59 search_query candidates and the large majority of tracked_company candidates were correctly recognized as already-known before any eval effort was spent on them.

- What Failed:
  - None outright, but see Friction below — a dedup gap allowed 7 of 9 Anthropic candidates to look "new" until a broader grep over reports/ (not just scan-history.tsv/applications.md) caught them.

- Friction:
  - Anthropic/Glean/CoreWeave-style companies re-scanned via direct Greenhouse API produced report-file-only duplicate records not yet propagated into scan-history.tsv, forcing the Big Tech/AI-Infra worker to run an extra `grep -rl` over reports/ mid-task to avoid re-evaluating already-rejected postings.
  - IBM, Microsoft, and Goldman Sachs `scan_query` entries in portals.yml are producing near-zero genuine yield (IBM: consistent 404s on the few leads found; Microsoft: no indexed careers.microsoft.com JD at all; Goldman: query returns only JPMorgan/aggregator noise) — these three portal configs likely need reconfiguration, not just continued scanning.
  - The static `search_queries` block (all 12 entries in portals.yml) is now fully saturated — 100% of the 59 raw candidates it surfaced this run were already known, with identical URLs recurring since 2026-07-07/2026-08-11. This query segment is producing zero marginal value going forward under its current phrasing.

- Missing Context:
  - No visibility into whether Erick has acted on any of the 20+ "prepared, awaiting Erick's go" apply-eligible roles accumulated across the last several scan days (UnitedHealth, Citi, Anthropic, Allwyn, PwC, etc.) — the submission gate means this pipeline keeps accumulating prepared-but-unsubmitted applications without a signal on which, if any, Erick has separately pursued.

- What To Do Differently:
  - Backfill scan-history.tsv from all existing reports/*.md URLs (a one-time housekeeping pass) so future dedup checks against scan-history.tsv alone are sufficient again, without requiring a supplementary grep -rl over reports/.
  - Consider rotating/refreshing the `search_queries` block in portals.yml (recency operators, different niche boards, additional direct company ATS slugs) since it is no longer surfacing new inventory after ~3 months of unchanged near-daily scanning.
  - Reconfigure or drop the Microsoft and Goldman Sachs scan_query entries in portals.yml — as currently written they are not finding genuine postings at all.

- Reusable Insight:
  - The 4-parallel-agent split with disjoint report-number ranges and an explicit "do the work yourself, do not delegate further" instruction is now a proven, repeatable pattern for this pipeline's daily scan step — it produced clean, collision-free, non-delegated output two runs in a row (after being adopted specifically to fix 2026-09-24's failure mode).

- Top Mistake:
  - None significant this run; the closest is the transient dedup gap on Anthropic postings recorded only in report files, which was caught and corrected by the worker itself before it caused a duplicate evaluation.

- Top Improvement Opportunity:
  - Query/portal freshness: three of the pipeline's scan sources (static search_queries, Microsoft, Goldman Sachs) are now confirmed to be producing near-zero or zero marginal value. Refreshing these is the highest-leverage change available to increase new-candidate yield on future runs, since the tracked_companies channel as a whole is also showing signs of saturation (thin single-digit-per-company new-candidate rates across most of the 31 tracked companies this run).
