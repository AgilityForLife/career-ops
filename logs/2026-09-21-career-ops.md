# Career-Ops Pipeline Log — 2026-09-21

**Trigger:** Scheduled (daily pipeline)
**Fired:** 2026-09-21 05:11:18 UTC
**Branch:** claude/magical-gauss-0xtirm

## Scan Summary

- **Portals scanned:** 12 search queries (Greenhouse, Lever, Ashby, LinkedIn, Dice, ClearanceJobs, ProCore)
- **Raw candidates surfaced:** 46 (after title-filter)
- **After dedup vs scan-history.tsv:** 27 genuinely new
- **Pre-filtered (no eval spent):** 7 (DKatalis, Nimble Gravity, Similarweb, Western Magnetics, ON.energy, HighlightTA, Amplify)
- **Evaluated:** 20 candidates → 21 reports (#285–305)
- **Duplicates identified:** 2 (Palantir GRC = Report 073, Palantir TPM C2 = Report 118/167)

## Evaluation Results

| # | Company | Role | Score | Classification |
|---|---------|------|-------|---------------|
| 285 | Capital Technology Group | Scrum Master | 3.4/5 | PRIMARY — APPLY w/ caveats |
| 286 | Flywheel Digital | Technical Project Manager | 2.3/5 | REJECTED |
| 287 | itD Tech | TPM IV #6280 | 1.8/5 | REJECTED |
| 288 | VantageScore | Agile Scrum Master/PM | 1.5/5 | REJECTED |
| 289 | Litmos | AI Program Manager | 2.2/5 | REJECTED |
| 290 | Foursquare | Senior Program Manager | 2.8/5 | REJECTED |
| 291 | MojoRank | Technical Program Manager | 2.5/5 | REJECTED |
| 292 | Citi | Global Program Manager SVP | 3.4/5 | SECONDARY — PREPARE ONLY |
| 293 | Citi | Program Management Lead AVP | 2.5/5 | REJECTED |
| 294 | Citi | Senior Project Manager VP | 3.1/5 | REJECTED (mortgage domain gate) |
| 295 | Citi | IT Project Manager Lead C14 | 3.4/5 | SECONDARY — PREPARE ONLY |
| 296 | Anthropic | TPM Launches | 3.0/5 | SECONDARY — PREPARE ONLY |
| 297 | AHEAD | Senior Project Manager | 2.5/5 | REJECTED |
| 298 | Prelim | Technical Project Manager | 2.5/5 | REJECTED |
| 299 | RainFocus | Technical Project Manager | 2.0/5 | REJECTED |
| 300 | SkySlope | Scrum Master | 2.0/5 | REJECTED |
| 301 | Palantir | PM Commercial Deployments | 2.8/5 | REJECTED |
| 302 | Palantir | GRC Program Manager | 3.0/5 | DUPLICATE (Report 073) |
| 303 | Palantir | TPM Autonomous Systems C2 | 3.3/5 | DUPLICATE (Report 118/167) |
| 304 | Leidos | Scrum Master Remote | 3.0/5 | SECONDARY — PREPARE ONLY |
| 305 | Tria Federal | Scrum Master | 3.1/5 | SECONDARY — PREPARE ONLY |

## Score Distribution

- **3.0+ (actionable):** 7 roles (1 PRIMARY, 6 SECONDARY/PREPARE ONLY)
- **Below 3.0 (rejected):** 14 roles
- **Average score:** 2.6/5
- **Highest:** Capital Technology Group 3.4/5 (tie with Citi Global PM SVP and Citi IT PM C14)

## Key Observations

1. **No 4.0+ scores** — market continues to show limited enterprise TPM opportunities matching full CS profile
2. **Citi heavy batch** — 4 Citi roles evaluated; only 2 worth monitoring (SVP and C14 levels)
3. **Palantir rotation** — 3 Palantir URLs were new req IDs for previously evaluated roles (2 confirmed duplicates, 1 new commercial PM role rejected)
4. **Tier 4 filtering** — 4 roles rejected specifically for Tier 4 de-emphasis (SkySlope SM, itD Tech, VantageScore, RainFocus Salesforce)
5. **Network proxy blocks** — all job board domains blocked; all evaluations from WebSearch summaries, marked unconfirmed

## Pipeline State

- **Total entries in applications.md:** 227
- **Total URLs in scan-history.tsv:** 456
- **Pipeline health:** OK (1 pre-existing warning)
- **Applications submitted:** 0 (Section 15 SUBMISSION GATE active)

## Artifacts

- 21 reports in `reports/` (#285–305)
- 21 TSV files processed via merge-tracker.mjs (19 added, 2 skipped as duplicates)
- 28 URLs added to scan-history.tsv (21 evaluated + 7 pre-filtered)
- pipeline.md Done section updated
