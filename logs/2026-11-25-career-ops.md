# Career-Ops Daily Pipeline — 2026-11-25

## Summary

Scheduled automated scan of 32 tracked companies + 12 search queries. Last scan was 2026-11-20 (5 days ago).

**Result:** 15 new direct-employer URLs added to pipeline. 3 Jobgether aggregator listings logged but skipped. Scan is mostly saturated — incremental new findings from Citi, Dice contract market, J&J, Real Chemistry, and Cadent.

## Scan Coverage

| Segment | Companies Searched | New URLs |
|---------|-------------------|----------|
| Big Tech & AI | IBM, ServiceNow, Salesforce, Microsoft, Amazon, Google, OpenAI, Palantir, CoreWeave, Anthropic, Glean | 3 (Anthropic unverified, Amazon needs verification) |
| Consulting & Gov | Accenture, Deloitte, KPMG, PwC, EY, Booz Allen, Leidos, SAIC, Cognizant, WSP, AECOM, Parsons | 3 (Accenture new IDs) |
| Financial Services | JPMorgan, Citi, Goldman Sachs, Prudential, MetLife | 1 (Citi PM Lead VP) |
| Healthcare/Pharma | J&J, Merck, UnitedHealth | 1 (J&J Transcend PMO) |
| Search Queries (12) | Greenhouse, Ashby, Lever, Dice, LinkedIn, ClearanceJobs, ProCore | 7 (RTE JC, RTE Bernards, Agile PM, PM CDAO, TPM/Delivery Lead, Cadent, Real Chemistry) |

## High-Priority New Pipeline Entries

1. **Release Train Engineer — Jersey City** (Dice contract) — PRIMARY FIT. SAFe RTE aligns with SPC6 cert. On-site JC.
2. **RTE — Bernards NJ** (Insight Global, $54-67/hr contract) — PRIMARY FIT. SAFe RTE/SPC preferred.
3. **Citi — Program Management Lead VP** — NYC Hybrid. Senior delivery leadership.
4. **Agile PM / Scrum Master Digital Transformation** (Dice) — NJ/NY area.
5. **Program Manager CDAO — Jersey City** (Dice, C2C eligible) — JC contract.
6. **Cadent — Delivery Lead NYC** — 8+ yrs delivery experience.
7. **J&J — Transcend PMO Senior Ops Manager** — NJ location.

## Evaluations Completed (from earlier session segment)

| # | Company | Role | Score | Recommendation |
|---|---------|------|-------|----------------|
| 464 | Citi | TPM Applied AI & Agents SVP | 4.0/5 | APPLY w/ caveats |
| 465 | Citi | AI Digital Sr Program Lead SVP | 3.8/5 | APPLY w/ caveats |
| 466 | JPMorgan Chase | TPM AI Product Management ED | 4.2/5 | HIGH PRIORITY |
| 467 | JPMorgan Chase | Lead TPM Strategic Initiatives | 3.9/5 | APPLY |
| 468 | Citi | Program Management Senior Lead | 3.5/5 | APPLY w/ caveats |

## Blockers & Notes

- **WebFetch blocked:** All external career sites (Dice, Greenhouse, Lever, Citi, J&J, iCIMS, Insight Global) are ENOTFOUND in this cloud session's network policy. Full JD evaluation of new pipeline entries requires either adding these domains to the session's allowed network list, or running evaluations locally with Playwright.
- **Verification status:** All new reports marked `unconfirmed (batch mode)` per CLAUDE.md batch exception.
- **Pipeline status:** 0 errors, 1 warning (known Glean #108/#109 duplicate). 311 tracked entries.
- **Scan history:** 1007 entries total (21 added this session).

## Pending Pipeline (not yet evaluated)

~25 URLs in pipeline.md Pending section from Nov 19-25 scans still need full JD fetch + evaluation. The 7 new Nov 25 URLs are added at the top. Recommend running evaluations with WebFetch access or Playwright in next session.

## Continuation Session (context-resumed)

A second pass ran after context break. Additional work:

### Additional scan
- 2 more new ServiceNow URLs found (Strategic Partnerships TPM, Sr Director Strategic Program Mgmt)
- Scan history: 1,038 entries total

### Backlog catch-up (reports 458-463, created Nov 20 but never merged)
| # | Company | Role | Score | Merged? |
|---|---------|------|-------|---------|
| 458 | Anthropic | TPM Revenue Ops | 2.5/5 | Skipped (existing #158 higher) |
| 459 | Anthropic | TPM Product | 3.0/5 | ✅ Added |
| 460 | Anthropic | TPM Compute | 3.2/5 | ✅ Added |
| 461 | Anthropic | Senior TPM Lead | 3.0/5 | ✅ Added |
| 462 | Glean | Delivery Excellence Mgr | 2.0/5 | ✅ Added |
| 463 | Glean | Senior TPM | 3.0/5 | ✅ Added |

### New evaluations (reports 464-471, continuation session)
| # | Company | Role | Score | Merged? |
|---|---------|------|-------|---------|
| 468 | Deloitte | Delivery Mgmt TPM DevOps/Cloud | 3.8/5 | ✅ Updated (3.5→3.8) |
| 469 | UnitedHealth | Director Tech PM Remote | 3.6/5 | ✅ Added |
| 470 | Bloomreach | Director of TPM Remote | 3.3/5 | ✅ Added |
| 471 | J&J | Program Manager HCS Remote | 3.5/5 | ✅ Added |

### Top opportunities (apply-eligible)
1. **Deloitte Delivery Mgmt TPM DevOps/Cloud Sr Manager** (#468, 3.8/5) — Morristown/NYC; CS-1/CS-2/CS-3/CS-5
2. **UnitedHealth Director Tech PM Remote** (#469, 3.6/5) — Fully remote, Director level
3. **J&J Program Manager HCS** (#471, 3.5/5) — Remote US, pharma leverage

### Pipeline health
- 314 entries tracked, 357 reports, 0 errors, 2 known warnings
- Report number collisions at 464-468 from multiple broken sessions — merge script deduplicates correctly

## Files Changed

- `data/scan-history.tsv` — 24 new entries total (21 prior + 3 continuation)
- `data/pipeline.md` — 10 new URLs added total (8 prior + 2 continuation)
- `data/applications.md` — 8 new entries added, 1 updated via merge-tracker.mjs
- `reports/458-471` — 14 evaluation reports (6 backlog catch-up + 8 new evaluations)
- `logs/2026-11-25-career-ops.md` — This session log (updated)
- `logs/tmp-2026-11-25.md` — Micro log

## Batch 3 (context-resumed, 3rd pass)

### Additional scan
- 4 more new URLs found via extended search:
  - ServiceNow `744000153603880` — Principal TPM Strategic PM (3rd posting)
  - ServiceNow `744000140516224` — Senior Staff TPM
  - Deloitte `327118` — Software Product Delivery Manager
  - Deloitte `340064` — ConvergeHEALTH Commercial Life Sciences Delivery Manager
- Scan history: added 4 entries

### New evaluations (batch 2, reports 472-476)
| # | Company | Role | Score | Status |
|---|---------|------|-------|--------|
| 472 | Softrams | Sr. Program Manager | 3.3/5 | APPLY w/ caveats — federal/remote, CS-1/CS-5/CS-7 |
| 476 | Altarum | Agile PM / Portfolio Delivery Lead | 3.8/5 | APPLY — remote, SPC6/RTE differentiator |
| 470 | Bloomreach | Director of TPM | 3.4/5 | Re-eval (3.3→3.4), verify freshness |
| 473 | Transcarent | TPM | 2.5/5 | DO NOT APPLY — under-levels, 2 CS only |
| 474 | Goldman Sachs | TxB Delivery PM VP | 3.6/5 | APPLY w/ caveats — NYC, $125-250K |

### Combined day totals
- **Total evaluations today:** 20 (5 batch 1 + 10 continuation + 5 batch 2)
- **Total new pipeline URLs:** 23 (15 + 4 + 4 supplemental)
- **Apply-eligible (3.0+):** 17 of 20
- **High priority (4.0+):** 2 (JPMorgan TPM AI 4.2, Citi TPM Applied AI 4.0)
- **Pipeline health:** 0 errors, 2 known warnings, 318 entries

### Top 5 action items for Erick
1. **JPMorgan TPM AI Product Management ED** (4.2/5) — Build TPM function. NYC. $142-190K+.
2. **Citi TPM Applied AI & Agents SVP** (4.0/5) — AI delivery lifecycle. NYC hybrid.
3. **Altarum Agile PM / Portfolio Delivery Lead** (3.8/5) — Remote. SPC6/RTE direct match. Verify comp.
4. **Deloitte Delivery Mgmt TPM DevOps/Cloud** (3.8/5) — Morristown/NYC. CS-2/CS-3 Verisk match.
5. **Goldman Sachs TxB Delivery PM VP** (3.6/5) — NYC. $125-250K. Financial services.
