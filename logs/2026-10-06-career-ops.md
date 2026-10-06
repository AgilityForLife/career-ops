# Session Log — 2026-10-06 Career-Ops Automated Daily Run

## Run Summary
- **Type:** Scheduled automated pipeline run
- **Gap since last scan:** 8 days (2026-09-28 → 2026-10-06)
- **Total new URLs found:** 34
- **URLs evaluated:** 22 (across 4 parallel agents)
- **Reports written:** 24 (reports 427-450)
- **Tracker entries added:** 22 (5 by Agent B self-merge + 17 by orchestrator)
- **Scan history entries added:** 34 (22 evaluated + 12 fast-skipped)
- **Submissions:** 0 (SUBMISSION GATE active — all held)

## Scores Distribution
| Score Range | Count | Action |
|-------------|-------|--------|
| 4.0+ | 2 | PRIMARY TARGET — APPLY |
| 3.5-3.9 | 3 (1 blocked) | SECONDARY — APPLY w/ caveats |
| 3.0-3.4 | 5 | SECONDARY — APPLY w/ caveats |
| Below 3.0 | 12 | REJECTED / SKIP |

## Top Picks
1. **Microsoft Sr TPM Cloud for Industry/FinServ** (4.2/5) — Report #430 — NYC hybrid — $158-258K — CS-1/CS-2/CS-5/CS-7 — Best single fit of scan
2. **GitLab Principal TPM** (4.2/5) — Report #445 — Remote US — $203-345K — 5/7 CS (CS-1/2/3/5/7) — DevSecOps + infra modernization textbook fit — Principal level stretch

## Pipeline Observations
- **search_queries saturation:** 4th consecutive scan with zero new evaluable results from all 12 static queries. Strongly recommend query refresh (recency operators, niche boards, new company Greenhouse/Ashby/Lever slugs).
- **tracked_companies channels:** Productive — Citi, ServiceNow, Microsoft, Amazon, OpenAI, GitLab, Anthropic, Oura, Real Chemistry, Leidos, Workday, FutureFit AI all surfaced new postings in the 8-day gap.
- **Egress proxy blocks:** careers.servicenow.com, careers.microsoft.com, amazon.jobs, openai.com all blocked by proxy. JDs retrieved via WebSearch aggregator mirrors. All reports marked "unconfirmed (batch mode)."
- **Numbering collision:** Agent B independently used 427-431; orchestrator initially used 431-433. Resolved by renumbering orchestrator reports to 434+. Gap at 432-433.

## Data Integrity
- verify-pipeline.mjs: 0 errors, 1 warning (pre-existing Glean #108/#109 false positive)
- All 297 entries valid after merge
- Scan history: 671 total entries (637 → 671)

## Files Modified
- `data/applications.md` — 22 new entries (427-431 by Agent B, 434-450 by orchestrator)
- `data/scan-history.tsv` — 34 new entries
- `data/pipeline.md` — Added processed scan block for 2026-10-06
- `reports/427-450` — 24 new evaluation reports
- `logs/tmp-2026-10-06.md` — Micro log
- `logs/2026-10-06-career-ops.md` — This session log
