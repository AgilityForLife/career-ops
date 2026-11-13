# Career-Ops Daily Scan — 2026-11-13

## Summary

- **Scan gap:** 46 days since last scan (2026-09-28)
- **New URLs found:** 153 (across all segments, including skipped/filtered)
- **URLs evaluated:** 18 (reports #427-#438 + #439-#444)
- **Reports generated:** 18
- **PDFs generated:** 0 (batch mode — no Playwright)
- **Applications submitted:** 0 (NEVER auto-submit rule enforced)
- **Pipeline pending:** ~43 URLs queued for manual review/evaluation

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

## Additional Evaluations (6 reports, second pass)

| # (tracker) | Company | Role | Score | Priority |
|---|---------|------|-------|----------|
| 444 | JPMorgan Chase | Lead TPM — Strategic Initiatives & Delivery Office | **4.2/5** | HIGHEST — 6 CS engaged, Delivery Office exact match |
| 442 | JPMorgan Chase | Technical PM Exec Dir, AI Product Mgmt | **4.1/5** | HIGH — AI-adjacent, $166K-$260K, NYC hybrid |
| 443 | CoreWeave | TPM Product Engineering | **4.0/5** | HIGH — CS-2/CS-3, Livingston NJ hybrid |
| 445 | UnitedHealth Group | Director Tech Project/PM | 3.8/5 | Remote, $134K-$230K, healthcare regulated |
| 447 | Nava PBC | Program Manager Gov SAFe | 3.7/5 | Remote, $157K-$177K, SPC6 differentiator |
| 446 | Cognizant | Senior Consulting PM | 3.5/5 | Teaneck NJ, $134K-$158K, deadline Nov 27 |

**All 18 evaluations scored 3.5+ (apply-eligible).**
**Top 5 HIGH PRIORITY roles (score >= 4.0):**
1. #441/tracker 444 — JPMorgan Lead TPM Delivery Office (4.2/5)
2. #429 — Deloitte DevOps/Cloud TPM (4.2/5)
3. #439/tracker 442 — JPMorgan AI PM Exec Dir (4.1/5)
4. #433 — Citi TPM Applied AI & Agents (4.0/5)
5. #440/tracker 443 — CoreWeave TPM Product Engineering (4.0/5)

## Remaining Pipeline Leads (Not Yet Evaluated)

1. **J&J — Director Project/Program Mgmt MedTech** — Raritan NJ Hybrid
2. **Palantir — IS Program Manager / TPM** — NYC
3. **MetLife — IAM Program Manager** — Remote — $100K-155K
4. **JPMorgan — Principal Technical PM / Data Modernization TPM** — NYC/JC
5. **Anthropic — 3 job IDs** — Needs JD verification (PM/TPM titles unconfirmed)
6. **Citi — 5+ VP/SVP PM roles** — NYC/JC
7. **UnitedHealth — 5+ additional PM roles** — Remote
8. **Deloitte — 3 additional TPM/PM roles** — NJ/NY
9. **EY / Booz Allen / Palantir — 4 additional roles**

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
- merge-tracker.mjs: all additions merged (18 TSVs total), 3 duplicates removed via dedup-tracker.mjs
- scan-history.tsv: 790 lines (was 637, +153 new entries from today)
- applications.md: 292 entries (was 275, +17 net new after dedup)

## Files Modified

- `data/applications.md` — 18 evaluated entries (#427-#438 + #439-#444, tracker #427-#447)
- `data/pipeline.md` — ~43 pending URLs for next session
- `data/scan-history.tsv` — 153 new entries (date_seen: 2026-11-13)
- `reports/427-444*.md` — 18 evaluation reports
- `batch/tracker-additions/merged/` — 22 TSVs processed
- `logs/2026-11-13-career-ops.md` — this file

## Run Status

- **Completed:** All 4 scan segments (search queries, Big Tech+AI, Consulting+Gov, Financial+Healthcare) finished
- **Second-pass evaluations:** 6 additional reports (#439-#444) for top pending leads using WebSearch JD snippets
- **Final pipeline state:** 292 tracker entries, 790 scan-history lines, ~43 pending URLs, 18 reports generated
- **Pipeline health:** 0 errors, 1 known false-positive warning (Glean #108/#109)
- **Git:** All changes committed and pushed to `claude/magical-gauss-2nrnz1`
- **Applications submitted:** 0 (NEVER auto-submit rule enforced)
