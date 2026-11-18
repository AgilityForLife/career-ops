# Career-Ops Daily Pipeline — 2026-11-18

## Summary
Scheduled scan via 4 parallel agents (Big Tech+AI, Finance+Healthcare, Consulting+Gov, Search Queries). **14 new URLs** added to pipeline. **55 evaluations** completed (reports #439-493). 337 total entries in applications.md. Saturation pattern continues (~97% dedup rate).

## Scan Coverage
- **Tracked Companies:** 31 (all enabled in portals.yml)
- **Portal Search Queries:** 12 (all enabled)
- **Greenhouse API:** Blocked (boards-api.greenhouse.io not in allowed network domains)
- **Scan Method:** WebSearch only (batch mode — no Playwright)

## New Pipeline Additions (14)

### From Big Tech+AI Agent (6)
| # | Company | Role | Location | Priority |
|---|---------|------|----------|----------|
| 1 | EY | FS Tech Product Operating Model Transformation Manager | NYC | Medium |
| 2 | Goldman Sachs | Transaction Banking Delivery Program Manager VP | NYC | High — VP delivery PM, CS-1 fit |
| 3 | Goldman Sachs | VP Digital Transformation PM AI-Driven | NYC | High — AI-adjacent, VP |
| 4 | Deloitte | Agility & Engineering Lead | NJ/NY | Low — Tier-4 Agile coaching cap likely |
| 5 | UnitedHealth | Technical Project Manager | Remote | Medium — Mar 2026, may be stale |
| 6 | UnitedHealth | Senior TPM Cloud Build | Remote | Medium-High — CS-1/CS-2 likely |

### From Finance+Healthcare Agent (8)
| # | Company | Role | Location | Priority |
|---|---------|------|----------|----------|
| 7 | Citi | Program Management Lead (93676913664) | NYC | Medium |
| 8 | Citi | Program Management Lead (94977560096) | NYC | Medium — may duplicate #7 |
| 9 | J&J | Sr Manager, Program Success | NJ | Medium |
| 10 | J&J | Sr PM, Cyber Strategy PMO | NJ | Low-Medium — niche domain |
| 11 | J&J | Manager, Global Security PMO | NJ | Low — may be too specialized |
| 12 | UnitedHealth | Principal Tech Proj/Prgm Mgr | Remote/Hybrid | High — Principal level, remote |
| 13 | MetLife | Principal Technology Program Manager | TBD | Medium — via aggregator |
| 14 | MetLife | Sr Agile Program Manager | TBD | Low — Tier-4 Agile cap risk |

## Evaluations Completed (55 reports, #439-493)

### High-Priority Findings (score >= 3.8)
| Entry | Company | Role | Score | Key Signal |
|-------|---------|------|-------|------------|
| 443 | Nava/QBA | Program Manager (Gov SAFe) | 4.0/5 | SAFe+PMP exact match; remote; $157-177K |
| 442 | JPMorgan | Technical PM ED, AI Product Management | 3.9/5 | Building new TPM function; ED level; NYC |
| 488 | UnitedHealth | Senior TPM Cloud Build Initiatives | 3.8/5 | CS-2 direct match; cloud build |
| 444 | JPMorgan | Data Modernization Technical PM | 3.8/5 | CS-2 Snowflake parallel; JC; $142-190K |

### Apply-Eligible (score 3.5-3.7)
| Entry | Company | Role | Score |
|-------|---------|------|-------|
| 446 | UnitedHealth | Director Tech Project/PM Remote | 3.7/5 |
| 448 | JPMorgan | Technical PM Exec Dir AI Product Mgmt | 3.7/5 |
| 486 | UnitedHealth | Director Tech Project Management Remote | 3.7/5 |
| 450 | JPMorgan | Lead Technology PM JC | 3.6/5 |
| 451 | JPMorgan | Lead TPM Strategic Initiatives | 3.6/5 |
| 453 | JPMorgan | Lead Technology PM | 3.6/5 |
| 454 | JPMorgan | Principal Technical PM | 3.6/5 |
| 455 | Cognizant | Sr Consulting PM Teaneck | 3.5/5 |
| 447 | CoreWeave | TPM Product Engineering | 3.5/5 |
| 456 | Booz Allen | AI Project Manager | 3.5/5 |
| 443 (fork) | Goldman Sachs | VP Delivery PM Transaction Banking | 3.5/5 |

### Previously Evaluated (re-scanned)
- Goldman Sachs Transaction Banking Delivery PM VP — already entry #150 (Sep 2026, 3.6/5)
- UnitedHealth Principal Tech PM — already entry #271 (Sep 2026, 3.6/5)
- Citi TPM Applied AI & Agents SVP — already entry #433 (Nov 13, 4.0/5)

## Skipped (8)
- EY SPM Project Manager Hoboken — domain mismatch
- Goldman Sachs Associate PM (2 roles) — negative filter
- Goldman Sachs unknown role (179569) — title unconfirmed
- Deloitte Delivery Mgmt Engineer II — mid-level
- Deloitte SM Project Delivery Analyst — analyst downlevel
- Deloitte Consultant Eng Tech Strategy — junior

## Pipeline Health
- verify-pipeline.mjs: 0 errors, 1 warning (known #108/#109 Glean false positive)
- 337 entries in applications.md, all statuses canonical
- All report links valid

## Network Policy Notes
Blocked domains: boards-api.greenhouse.io, higher.gs.com, careers.ey.com, jobs.citi.com (WebFetch). WebSearch works for all. Career-site JD verification not possible in this session — all reports marked "unconfirmed (batch mode)".

## Action Items for Erick
1. **Review Nava/QBA PM** (#443, 4.0/5) — strongest new find, SAFe+PMP bullseye, remote, $157-177K
2. **Review JPMorgan Technical PM ED AI** (#442, 3.9/5) — building new TPM function, ED level
3. **Review UnitedHealth Senior TPM Cloud Build** (#488, 3.8/5) — CS-2 direct match
4. **Review JPMorgan Data Modernization PM** (#444, 3.8/5) — Snowflake/data parallel
5. **Still pending from Nov 13:** Citi TPM AI & Agents SVP (#433, 4.0/5), Deloitte DevOps/Cloud TPM (#429, 4.2/5)
6. Consider PDF generation for roles 3.5+ before applying
