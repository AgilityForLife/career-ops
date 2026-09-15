# Career-Ops Session Log — 2026-09-15

## Pipeline Run Summary

**Run type:** Scheduled automated daily scan + evaluation
**Branch:** `claude/magical-gauss-l18pta`
**Scan coverage:** All 12 search queries + 30+ tracked companies from `portals.yml`
**Previous scan:** 2026-09-11

## Scan Results

- **Total new URLs found:** 84
- **Added for evaluation:** 54
- **Skipped/rejected:** 30 (duplicates, aggregators, wrong domain, closed)
- **Scan-history entries:** 364 → 448

## Evaluation Results

- **Reports generated:** 60 (reports 256-315)
- **Tracker entries added:** 57 new + 2 updated + 1 skipped (duplicate)
- **Total tracker entries:** 237

### Score Distribution

| Range | Count |
|-------|-------|
| 4.0+ | 2 |
| 3.5-3.9 | 13 |
| 3.0-3.4 | 22 |
| 2.5-2.9 | 10 |
| Below 2.5 | 13 |

### Top 15 Candidates (score ≥ 3.5)

| # | Score | Company | Role | Recommendation |
|---|-------|---------|------|----------------|
| 271 | 4.3/5 | UnitedHealth Group | Director, Program Management | APPLY w/ caveats |
| 308 | 4.0/5 | Allwyn Corp | Technical Project Manager | APPLY |
| 270 | 3.9/5 | UnitedHealth Group | Principal Tech Project - PM | APPLY |
| 303 | 3.9/5 | Glean | Technical Project Manager | APPLY |
| 257 | 3.9/5 | Citi | TPM Lead for Ops Tech | APPLY |
| 260 | 3.9/5 | Citi | TPM Head, Wealth Operations | APPLY |
| 278 | 3.8/5 | Confluent (IBM) | Senior TPM | APPLY |
| 309 | 3.8/5 | AHEAD | Senior Project Manager | APPLY |
| 299 | 3.7/5 | UnitedHealth Group | Technical Implementation PM | APPLY |
| 305 | 3.7/5 | ON.energy | PM, AI Enablement | APPLY w/ caveats |
| 297 | 3.6/5 | UnitedHealth Group | Medicaid Pharmacy Network PM | APPLY w/ caveats |
| 298 | 3.5/5 | UnitedHealth Group | Sr PBM Client Implementation PM | APPLY w/ caveats |
| 295 | 3.5/5 | Cognizant | Project Manager - Remote | SKIP (expired) |
| 276 | 3.5/5 | Anthropic | TPM, External Technical Partnerships | APPLY w/ caveats |
| 306 | 3.5/5 | Amplify | PM Platform (Contractor) | APPLY w/ caveats |

### Key Observations

1. **Strongest fit this run:** UHG Director PM (#271, 4.3/5) — 6/7 CS engaged, cloud migration + exec narratives, $134K-$230K remote. Director title may be a stretch but worth applying.
2. **Citi Jersey City cluster:** 11 roles evaluated. #257 and #260 are twin GWM PM head roles (both 3.9/5) requiring SAFe — direct SPC6 match.
3. **CS-2 gap pattern:** Most Citi and consulting roles don't engage CS-2 (Cloud/Data), which drags scores below 4.0. The best fits engage cloud/data modernization.
4. **Proxy limitations:** All job board domains were blocked by egress proxy. Evaluations based on WebSearch snippets. All reports marked `unconfirmed (batch mode)`.
5. **No applications submitted** per Section 15 SUBMISSION GATE.

## Pipeline Health

- **Verify result:** 0 errors, 2 warnings (known Amazon TPM II duplicate, pre-existing Glean duplicate)
- **Status:** 🟡 OK with warnings

## Files Changed

- `data/scan-history.tsv` — 84 new entries (448 total)
- `data/applications.md` — 57 new rows, 2 updated (237 total)
- `reports/256-*` through `reports/315-*` — 60 new evaluation reports
- `batch/tracker-additions/` — 60 TSVs (merged and moved to `merged/`)
