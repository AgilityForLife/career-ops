# Session Log — 2026-11-26

## Run Type
Scheduled daily pipeline run (automated)

## Scan Summary
- **Portals scanned:** 32 tracked companies + 12 search queries (4 segments)
- **New URLs found:** 38+ across all segments
- **Scan-history entries logged:** 55+ new entries
- **Total scan-history:** ~970+ entries

### Segment Results
| Segment | Companies | New URLs | Notes |
|---------|-----------|----------|-------|
| Consulting + Gov | 12 | 7 | Cognizant JC NJ high priority; J&J Transcend/RTE x5 |
| Financial + Healthcare | 8 | 19 | Citi 2, Goldman 6, Prudential 2, MetLife 4, J&J 2, UHG 9 |
| Big Tech + AI | 12 | 5+ | Mostly saturated; Box Agile role added |
| Search Queries | 12 queries | 7 | Minimal net new; site: filters unreliable |

## Evaluation Summary
- **Roles evaluated:** 8 (reports #464-#469, #477-#478)
- **Apply-eligible (3.5+):** 5
- **Below threshold:** 2 (Prudential Lead TPM 2.8, MetLife Agile Lead 2.8)
- **Duplicate reports removed:** 3 (#474≈#464, #475≈#466, #476≈#467)

### Top Roles — Apply-Eligible
| # | Company | Role | Score | Location | Action |
|---|---------|------|-------|----------|--------|
| 467 | MetLife | Principal RTE Composite AI | 3.9/5 | Whippany NJ | **APPLY** — 4 CS, SAFe RTE, $140K-$195K |
| 465 | J&J | Sr Manager RTE (Finance) | 3.8/5 | Raritan NJ | **APPLY** — 4 CS, SPC6 bullseye |
| 478 | Prudential | Lead Scrum Master | 3.7/5 | Newark NJ | **APPLY** — CS-5/CS-6, SAFe fit |
| 464 | Cognizant | Sr TPM/Delivery Manager | 3.6/5 | Jersey City NJ | APPLY w/ caveats |
| 469 | J&J | Transcend Cutover & Hypercare | 3.5/5 | Titusville NJ | APPLY w/ caveats |

### Below Threshold
| # | Company | Role | Score | Reason |
|---|---------|------|-------|--------|
| 468 | Citi | Program Mgmt Senior Lead SVP | 3.4/5 | DTCC equities domain gap |
| 466 | Prudential | Lead TPM (Cybersecurity) | 2.8/5 | Cybersecurity domain mismatch |
| 477 | MetLife | Agile Enablement Lead | 2.8/5 | Tier 4 coaching emphasis; possibly stale |

## Pipeline Health
- verify-pipeline.mjs: **0 errors, 3 warnings**
  - Duplicate #467/#476 (overlapping eval agents)
  - Known false positive #108/#109 Glean
  - 4 false-positive pending TSVs (already merged)
- Pipeline backlog: ~83 unevaluated pending URLs remain from Nov 13-20 scans
- 31 previously-evaluated pending URLs identified for cleanup (move to Done)

## Blockers
- **WebFetch blocked** for all career site domains (network policy restriction)
- All evaluations based on WebSearch snippets — marked "unconfirmed (batch mode)"
- JD detail limited; scores may change on full JD review

## Applications
- **0 submitted** (SUBMISSION GATE enforced)
- 5 roles marked "apply-eligible" for Erick's review
- No PDFs generated (batch mode)

## Key Observations
1. SAFe RTE roles are emerging as the strongest channel — MetLife Principal RTE (3.9) and J&J RTE (3.8) both directly engage CS-6
2. NJ-local pipeline strengthening: 10 of 12 new finds from Consulting+Gov segment are NJ-based
3. Portal saturation continues: search queries and most tracked companies returning same roles since Nov 13
4. Financial/Healthcare (esp. Citi, UHG) remain the most productive scan channels for volume
5. Goldman Sachs higher.gs.com yields URLs but titles require individual fetch (not in search snippets)
