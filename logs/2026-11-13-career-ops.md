# Career-Ops Daily Scan — 2026-11-13

## Summary

- **Scan gap:** 46 days since last scan (2026-09-28)
- **New URLs found:** 153 (across all segments, including skipped/filtered)
- **URLs evaluated:** 12 (reports #427-#438)
- **Reports generated:** 12
- **PDFs generated:** 0 (batch mode — no Playwright)
- **Applications submitted:** 0 (NEVER auto-submit rule enforced)
- **Pipeline pending:** ~60 URLs queued for manual review/evaluation

## Scan Coverage

- **Search queries:** 12/12 executed via WebSearch
- **Tracked companies:** 31/31 scanned via WebSearch (2 passes — initial + expanded)
- **Scan method:** WebSearch only (cloud session; career site domains blocked by network policy)
- **Verification:** All evaluations marked "unconfirmed (batch mode)"

## Evaluations Completed (12 reports)

| # | Company | Role | Score | Priority |
|---|---------|------|-------|----------|
| 429 | Deloitte | Delivery Mgmt TPM DevOps/Cloud Sr Manager | **4.2/5** | HIGH — CS-2/CS-3 near-exact match |
| 433 | Citi | TPM Applied AI & Agents SVP | **4.0/5** | HIGH — AI-adjacent, CS-1/CS-5/CS-7 |
| 436 | Deloitte | Senior Consultant — AGILE Coach | 3.9/5 | Tier 4 cap risk but CS-6 strong |
| 439 | Deloitte | Senior Consultant — SM/RTE | 3.8/5 | SPC6 differentiator; RTE direct fit |
| 427 | EY | CT Tech Activation PM | 3.8/5 | Hoboken NJ; $165.8-302.3K |
| 435 | Citi | Director TPM Production Management | 3.8/5 | NYC; CS-3 strong |
| 431 | Deloitte | Sr Manager Lead Delivery Leader | 3.7/5 | JC/Morristown/NYC |
| 437 | Deloitte | Delivery Leader, Core Financial Systems | 3.7/5 | JC/NYC; #LI-Remote |
| 430 | Deloitte | IT Program Manager Strategy & Ops | 3.6/5 | Remote; 0-10% travel |
| 432 | Citi | AI Digital Senior Program Lead SVP | 3.6/5 | NYC; AI-adjacent |
| 441 | Goldman Sachs | VP Project Management — GBM | 3.6/5 | NYC; $157-196K base |
| 428 | EY | AI Project Manager | 3.5/5 | Remote; AI-adjacent |

**Apply-eligible (score >= 3.5):** All 12 roles scored 3.5+.
**HIGH PRIORITY:** #429 (Deloitte DevOps/Cloud TPM, 4.2/5) and #433 (Citi TPM Applied AI, 4.0/5)

## Top Pipeline Leads (Not Yet Evaluated — Pending JD Fetch)

1. **Citi — TPM Applied AI & Agents, SVP** — Already evaluated (#433, 4.0/5)
2. **JPMorgan — Technical PM Exec Dir, AI Product Mgmt** — NYC — HIGH PRIORITY
3. **CoreWeave — TPM Product Engineering** — Livingston NJ/NYC Hybrid
4. **UnitedHealth — Director Tech Project/PM** — Remote — multiple postings
5. **Deloitte — Delivery Mgmt TPM DevOps/Cloud Sr Manager** — Already evaluated (#429, 4.2/5)
6. **J&J — Director Project/Program Mgmt MedTech** — Raritan NJ Hybrid
7. **Palantir — IS Program Manager / TPM** — NYC
8. **Nava — Program Manager Gov SAFe** — Remote — $157K-177K
9. **MetLife — IAM Program Manager** — Remote — $100K-155K
10. **Anthropic — 16 new job IDs** — Needs JD verification (PM/TPM titles unconfirmed)

## Data Quality Notes

- Network policy blocks: jobs.citi.com, careers.unitedhealthgroup.com, apply.deloitte.com, job-boards.greenhouse.io, boards-api.greenhouse.io, careers.jnj.com, jobs.prudential.com, jobs.metlife.com, careers.microsoft.com, amazon.jobs, careers.boozallen.com — all ENOTFOUND
- JDs for evaluated roles were obtained from WebSearch snippets and aggregator mirrors (TheMuse, BuiltIn, Dice)
- Goldman Sachs direct-query still non-functional (3+ scans); found via alternate aggregator
- IBM careers site still JS-rendered/404 pattern
- UHG direct-posting-URL 404 pattern continues
- jobs.kpmg.us returns zero results (3+ scans)
- Consulting+Gov segment produced results this scan (Deloitte, EY, Booz Allen) after 3-scan saturation streak — the 46-day gap helped

## Pipeline Health

- verify-pipeline.mjs: 0 errors, 1 warning (pre-existing: Glean #108/#109 confirmed false positive)
- merge-tracker.mjs: all additions merged, 2 duplicates removed via dedup-tracker.mjs
- scan-history.tsv: 790 lines (was 637, +153 new entries from today)
- applications.md: 289 entries (was 275, +14 net new after dedup)

## Files Modified

- `data/applications.md` — 14 new evaluated entries (#427-#441, minus 2 deduped)
- `data/pipeline.md` — ~60 new URLs in Pending section
- `data/scan-history.tsv` — 153 new entries (date_seen: 2026-11-13)
- `reports/427-438*.md` — 12 evaluation reports
- `batch/tracker-additions/merged/` — 16 TSVs processed
- `logs/2026-11-13-career-ops.md` — this file
