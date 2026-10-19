# Career-Ops Session Log — 2026-10-19

**Type:** Scheduled cloud run (automated pipeline)
**Coverage:** 21-day gap since last scan (2026-09-28)
**Branch:** claude/magical-gauss-6cy2iw

## Scan Summary

| Segment | Companies/Queries | New URLs | Evaluated | Skipped |
|---------|-------------------|----------|-----------|---------|
| Search Queries (12) | Greenhouse, Ashby, Lever, Dice, LinkedIn, Gov, ProCore | 14 | 1 (Phizenix) | 13 (location, aggregator, domain, comp, negative filter) |
| Big Tech + AI (11) | IBM, ServiceNow, Salesforce, Microsoft, AWS, Google, Anthropic, OpenAI, Palantir, Glean, CoreWeave | 19 | 10 | 9 (SF-only, Huntsville, likely RTO, closed, unconfirmed) |
| Consulting + Gov (12) | Accenture, Deloitte, KPMG, PwC, EY, Booz Allen, Leidos, SAIC, Cognizant, WSP, AECOM, Parsons | 11 | 5 | 6 (domain mismatch, downlevel, sales domain) |
| Financial + Healthcare (9) | JPMorgan, Citi, Goldman, Prudential, MetLife, J&J, Merck, UHG | 7 | 5 | 2 (stale, aggregator mirror) |
| **TOTALS** | **~44 sources** | **51** | **21** | **30** |

## Evaluations Produced (21 reports)

| # | Company | Role | Score | Key Signal |
|---|---------|------|-------|------------|
| 427 | EY | AI Technical Project Manager | 3.6/5 | Atlanta remote-eligible; AI delivery + SAFe |
| 428 | EY | PM, Client Tech Activation | 3.5/5 | Hoboken NJ; client technology commercials |
| 429 | EY | Program Manager (Philadelphia) | 3.3/5 | Remote-eligible; JD unconfirmed |
| 430 | Cognizant | Sr. TPM / Delivery Manager | 3.8/5 | Jersey City NJ; SAFe/PI Planning |
| 431 | Prudential | Lead, Technical Program Mgmt | 3.5/5 | Newark NJ; $123.7-204.1K; InfoSec office |
| 432 | Citi | PM Lead, Product Dev Transformation VP | 3.4/5 | NYC hybrid; JD unconfirmed |
| 433 | Citi | Transformation PM Lead, Markets VP | — | NYC hybrid |
| 434 | Phizenix | Release Train Engineer | 3.4/5 | NYC hybrid $70-75/hr, 6mo, SAFe RTE |
| 435 | Anthropic | TPM, Security | 3.4/5 | SF-only concern; security domain gap |
| 436 | Anthropic | TPM, Platform (API) | **4.0/5** | NYC option; 5/7 CS; $290K+ — **APPLY-ELIGIBLE** |
| 437 | Anthropic | TPM, Consumer Engineering | 3.7/5 | NYC; consumer product domain gap |
| 438 | Microsoft | Principal TPM, ISE | 3.8/5 | NYC $188-304K; may be closed |
| 440 | CoreWeave | TPM, Customer-Facing Programs | 3.8/5 | Livingston NJ; $135-165K; GPU cloud |
| 441 | CoreWeave | TPM, Program Execution | 3.9/5 | Roseland NJ hybrid; $165-200K |
| 442 | Palantir | IS Program Manager | 3.0/5 | NYC on-site; clearance risk |
| 443 | JPMorgan Chase | Principal TPM | 3.9/5 | NYC $194-285K; CS-4 Power BI — **APPLY-ELIGIBLE** |
| 444 | UnitedHealth Group | Senior TPM | 3.7/5 | Remote; healthcare; $92-164K |
| 445 | Microsoft | Senior TPM, AI Infrastructure | **4.0/5** | Remote US; Azure GPU/HPC — **APPLY-ELIGIBLE** |
| 446 | MetLife | Agile Project Manager | 3.5/5 | NYC/NJ hybrid; $105-120K; comp at floor |
| 448 | Anthropic | TPM, Safeguards | 3.4/5 | NYC; ML safety domain gap |
| 449 | Anthropic | TPM, Safeguards (alt eval) | 3.4/5 | Same role, different evaluation |

## Top Candidates (Score ≥ 3.8)

1. **Anthropic TPM, Platform (API)** — 4.0/5 — 5/7 CS engaged, $290K+, NYC option
2. **Microsoft Senior TPM, AI Infrastructure** — 4.0/5 — Remote US, Azure GPU/HPC, $120-261K
3. **JPMorgan Principal TPM** — 3.9/5 — NYC $194-285K, CS-4 Power BI match
4. **CoreWeave TPM, Program Execution (Roseland NJ)** — 3.9/5 — NJ hybrid, $165-200K
5. **Cognizant Sr. TPM / Delivery Manager** — 3.8/5 — Jersey City NJ, SAFe/PI Planning
6. **CoreWeave TPM, Customer-Facing (Livingston NJ)** — 3.8/5 — NJ on-site, $135-165K
7. **Microsoft Principal TPM, ISE** — 3.8/5 — NYC $188-304K (may be closed)

## Environment & Anomalies

- **WebFetch DNS-blocked**: All direct career site fetches failed (ENOTFOUND). Used WebSearch extended mode as fallback. All JDs marked "unconfirmed (batch mode)".
- **Greenhouse API DNS failure**: boards-api.greenhouse.io unreachable from cloud environment. Anthropic/Glean direct API fetches blocked.
- **site: operator continues non-functional**: 5+ consecutive runs of degraded Google site: filtering for ATS domains. Ashby queries return zero Ashby results.
- **KPMG**: Zero hits for 4th consecutive scan. Portal confirmed non-functional.
- **Goldman Sachs**: Scan query non-functional for 5+ runs.
- **EY productivity spike**: 5 new URLs after 0 in prior 3 scans — 21-day gap allowed posting turnover.
- **Dice most productive search query channel**: 6 new NJ/NY contract postings (though mostly staffing agencies).

## Pipeline Stats

- Tracker entries: 294 total (+21 today)
- Reports: 21 new (427-449 range, with gaps due to agent parallelism)
- Scan history: 800 URLs (+55 today)
- Pipeline status: ✅ Healthy (0 errors, 1 pre-existing warning)
