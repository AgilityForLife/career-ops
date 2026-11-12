# Session Log: 2026-11-12 career-ops daily run

## Objective
Execute job scan, evaluation, and application prep pipeline.

## Portal Scan
- Portals scanned: 12 search queries + 31 tracked companies (4 parallel agents)
- New jobs detected: 86 raw new URLs (73 after dedup)
- Duplicates filtered: ~180+ known URLs across scan-history.tsv + applications.md
- Anomalies: boards-api.greenhouse.io blocked by network policy (used WebSearch fallback); KPMG zero hits (4th scan); Goldman Sachs scan_query non-functional (4th+); IBM near-zero yield

## Batch Summary
- Total processed: 20 candidates evaluated
- Strong fits (3.0+): 8
- Weak fits (<3.0): 12
- Unclear roles: 0
- Patterns noticed: 45-day gap broke heavy saturation — EY, Cognizant, and search queries 1-8 became productive again

## Job Evaluations

### Apply-Eligible (3.0+)
| # | Company | Role | Score | Classification | Key CS |
|---|---------|------|-------|---------------|--------|
| 430 | GitLab | Principal TPM | 3.5/5 | PRIMARY | CS-1/CS-3/CS-5 |
| 435 | Cognizant | Sr Consulting Mgr, BI & Delivery Lead | 3.5/5 | PRIMARY | CS-1/CS-4/CS-5/CS-6 |
| 427 | Anthropic | TPM, SOX Compliance | 3.4/5 | SECONDARY | CS-1/CS-5/CS-7 |
| 434 | Citi | TPM, Applied AI & Agents SVP | 3.4/5 | SECONDARY | CS-1/CS-5/CS-7 |
| 437 | UHG | Prin Cybersecurity TPM | 3.4/5 | SECONDARY | CS-1/CS-5/CS-7 |
| 433 | EY | Program Manager, Hoboken NJ | 3.3/5 | PRIMARY | CS-1/CS-5 |
| 432 | EY | AI Project Manager Remote | 3.1/5 | SECONDARY | CS-1/CS-5 |
| 441 | Real Chemistry | Senior AI PM | 3.1/5 | SECONDARY | CS-1/CS-5 |

### Rejected (<3.0)
| # | Company | Role | Score | Reason |
|---|---------|------|-------|--------|
| 442 | Megazone Cloud | Sr Cloud Tech PM | 2.8/5 | Location uncertain, project-level scope |
| 431 | Cohere | TPM AI Delivery | 2.8/5 | Customer-facing gap, 2/7 CS |
| 445 | UHG | Technical PM Remote | 2.8/5 | CS-2 absent, comp low end $72.8K |
| 440 | Pencil | Lead TPM | 2.7/5 | Engineering background gap |
| 438 | Deloitte | App Mod PM Manager | 2.5/5 | Posting from 2021, likely stale |
| 444 | Veeva Systems | Senior PM | 2.4/5 | Comp $75-115K below floor |
| 446 | Deloitte | Technical SM/PM/BA | 2.4/5 | Tier-4 SM cap |
| 428 | Anthropic | TPM Discovery | 2.3/5 | ML engineering hard-required |
| 439 | Human Agency | Director AI Transformation | 2.3/5 | Consulting model mismatch |
| 443 | Glean | Manager Delivery Excellence | 2.2/5 | Customer-facing SaaS, 0-1 CS |
| 429 | Amazon | Senior TPM Audible | 2.0/5 | Likely closed + 5-day RTO |
| 436 | JPMorgan | Lead TPM Workplace Tech | 3.0/5 | Likely expired Oct 26 |

## Resume Decision
- Resume used: N/A (batch mode — no PDFs generated)
- Reason: Batch mode without Playwright; PDFs deferred for manual run
- Missing data from cv.md: None

## Execution Summary
- Portals scanned: 43 (12 queries + 31 companies)
- New jobs found: 73 genuinely new (after dedup)
- Jobs evaluated: 20
- Applications prepared: 0 (safety rule: never auto-submit)
- Primary roles: 3 (GitLab, Cognizant, EY Hoboken)
- Secondary roles: 5 (Anthropic SOX, Citi AI, UHG Cyber, EY AI PM, Real Chemistry)
- Rejected: 12

## Key Decisions
- Focused evaluation budget on top 20 of 44 evaluate-worthy candidates; logged 19 others as evaluate-on-demand
- Applied 5-day-RTO deal-breaker override for Amazon Audible despite good NJ location
- Confirmed Deloitte App Mod posting (32437) is from 2021 — scored low, marked stale
- JPMorgan Lead TPM scored 3.0 but flagged as likely expired (valid-through Oct 26)

## What Worked
- 4-agent parallel scan covered all portals efficiently (~2.5 min per agent)
- 4-agent parallel eval processed 20 candidates in ~3 min wall-clock
- 45-day gap broke saturation: queries 1-8 productive, Consulting+Gov segment broke 3-scan drought
- Pre-filtering saved 34 eval slots on clear non-starters

## What Failed
- boards-api.greenhouse.io blocked by network policy — Anthropic/Glean API queries fell back to WebSearch (less precise)
- No Playwright available for live verification — all reports marked "unconfirmed (batch mode)"
- No PDFs generated (batch mode limitation)

## Friction
- Git remote repoint was denied by auto-mode classifier; push succeeded anyway on existing remote
- batch/tracker-additions/ is gitignored, requiring awareness during commit workflow

## Missing Context
- Live verification of all 8 apply-eligible postings (especially UHG with persistent 404 pattern, JPMorgan aggregator-sourced)
- Compensation confirmation for several roles (Cognizant, EY AI PM, Real Chemistry)

## What To Do Differently
- Consider refreshing portals.yml search_queries: queries 9-12 (LinkedIn, Dice, ClearanceJobs, ProCore) produced zero direct postings for 4+ consecutive scans
- Disable KPMG, WSP, AECOM scan queries — permanent zero/mismatch yield
- Add recency qualifiers ("posted this month") to saturated queries as standing practice

## Reusable Insight
- Scanning frequency sweet spot appears to be 1-2 weeks, not daily: daily scans hit saturation within 3 runs, while a 45-day gap produced the richest yield since 2026-09-09

## Top Mistake
- None critical this run

## Top Improvement Opportunity
- Refresh portals.yml: rotate dead queries (9-12), add niche boards, disable permanently non-productive companies

## Final State
- Total outputs: 20 reports + 73 scan-history entries + 1 pipeline.md update
- Reports generated: 20 (427-446)
- Applications prepared: 0 (safety rule)
- Any failed steps: None
- Any skipped steps: PDF generation (batch mode)
- Confidence (1-10): 8
