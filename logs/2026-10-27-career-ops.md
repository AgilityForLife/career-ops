# Career-Ops Daily Pipeline — 2026-10-27

**Trigger:** Scheduled routine (Career-Ops Daily Pipeline)
**Start:** 2026-10-27 05:08 UTC
**Branch:** claude/magical-gauss-xs3bse
**Gap since last scan:** 29 days (2026-09-28)

## Scan Summary

| Segment | Companies Scanned | New URLs | Evaluated | Top Score |
|---------|------------------|----------|-----------|-----------|
| Search Queries (12) | Greenhouse, Ashby, Lever, LinkedIn, Dice, ClearanceJobs | ~14 | 0 (queued) | — |
| Big Tech + AI (11) | IBM, ServiceNow, Salesforce, Microsoft, AWS, Google, Anthropic, OpenAI, Palantir, Glean, CoreWeave | ~23 | 10 | 4.3/5 |
| Consulting + Gov (12) | Accenture, Deloitte, KPMG, PwC, EY, Booz Allen, Leidos, SAIC, Cognizant, WSP, AECOM, Parsons | ~12 | 5 | 3.3/5 |
| Financial + Healthcare (8) | JPMorgan, Citi, Goldman, Prudential, MetLife, J&J, Merck, UnitedHealth | ~18 | 4 | 4.3/5 |
| **TOTAL** | **43 companies + 12 queries** | **~67** | **19** | **4.3/5** |

## Evaluated Roles (19 reports: #427-445)

| # | Company | Role | Score | Recommendation |
|---|---------|------|-------|----------------|
| **430** | **Citi** | **TPM Applied AI & Agents SVP** | **4.3/5** | **APPLY — BEST OF RUN** |
| 428 | Amazon (Audible) | Senior TPM, Newark NJ | 3.8/5 | APPLY |
| 429 | UnitedHealth Group | Director TPM Remote | 3.5/5 | APPLY w/ caveats |
| 427 | Citi | AI Digital Senior Program Lead SVP | 3.4/5 | APPLY w/ caveats |
| 436 | CoreWeave | Staff TPM Infra & Node Delivery | 3.4/5 | Borderline |
| 445 | Cognizant | Sr Consulting Mgr BI & Delivery Lead | 3.3/5 | APPLY w/ caveats |
| 433 | Anthropic | TPM Revenue Operations | 3.2/5 | Borderline |
| 439 | Citi | SVP Equities Technology PM | 3.2/5 | APPLY w/ caveats |
| 432 | EY | CT Tech Activation PM Hoboken | 3.1/5 | APPLY w/ caveats |
| 442 | Deloitte | PM ITS PMO M&A Jersey City | 3.1/5 | APPLY w/ caveats |
| 441 | UnitedHealth | Sr Mgr TPM AI Patrol Remote | 3.1/5 | APPLY w/ caveats |
| 434 | Anthropic | TPM Corporate Engineering | 3.0/5 | SKIP |
| 437 | Citi | SVP Program Group Manager | 2.8/5 | REJECTED |
| 444 | Deloitte | Mgr PM Digital Transformation | 2.8/5 | REJECTED |
| 443 | Deloitte | PM ITS PMO Consulting/Audit | 2.7/5 | REJECTED |
| 431 | OpenAI | Security PM Remote | 2.6/5 | SKIP (domain mismatch) |
| 438 | Citi | IT PM SVP | 2.6/5 | REJECTED |
| 435 | OpenAI | TPM Demand Planning & S&OP | 2.5/5 | SKIP (location deal-breaker) |
| 440 | UnitedHealth | Technical PM Remote | 2.3/5 | REJECTED (downlevel + comp) |

## Apply-Eligible (score >= 3.0, no deal-breakers): 12 of 19

**Top Priority (3.5+):**
1. Citi TPM Applied AI & Agents SVP — 4.3/5, NYC, 5/7 CS engaged
2. Amazon (Audible) Senior TPM — 3.8/5, Newark NJ, $163K-$221K, target location
3. UnitedHealth Director TPM — 3.5/5, Remote, healthcare regulated

**Standard (3.0-3.4):**
4. Citi AI Digital Senior Program Lead — 3.4/5, NYC
5. CoreWeave Staff TPM — 3.4/5, NYC, hardware NPI gap
6. Cognizant Sr Consulting Mgr BI & Delivery — 3.3/5, Bridgewater NJ
7. Anthropic TPM Revenue Operations — 3.2/5, NYC, $365K-$435K, GTM domain
8. Citi SVP Equities Technology PM — 3.2/5, Jersey City NJ
9. EY CT Tech Activation PM — 3.1/5, Hoboken NJ
10. Deloitte PM ITS PMO M&A — 3.1/5, Jersey City NJ
11. UnitedHealth Sr Mgr TPM AI Patrol — 3.1/5, Remote
12. Anthropic TPM Corporate Engineering — 3.0/5, NYC, domain mismatch

**Rejected (< 3.0 or deal-breaker):**
- Citi SVP Program Group Manager — 2.8/5, weak CS engagement
- Deloitte Mgr PM Digital Transformation — 2.8/5, consulting-heavy
- Deloitte PM ITS PMO Consulting/Audit — 2.7/5, audit-focused
- OpenAI Security PM — 2.6/5, security domain mismatch
- Citi IT PM SVP — 2.6/5, legacy infrastructure
- OpenAI TPM Demand Planning — 2.5/5, SF hybrid = location deal-breaker
- UnitedHealth Technical PM Remote — 2.3/5, downlevel + comp risk

## Queued for Next Cycle (~48 URLs in pipeline.md Pending)

Key groups still to evaluate:
- 4 more Anthropic TPMs (Billing, GTM Systems, Discovery, Strategic Deals)
- 5 Amazon TPMs (non-Newark locations)
- 6 CoreWeave TPMs (saturation precedent — evaluate selectively)
- 5 Glean unknown-title Greenhouse IDs (need title verification)
- Various search query ATS links (Veeva, Corbalt, Avalere, etc.)

## Data Quality Issues

1. **DNS broken:** WebFetch could not resolve external hosts (greenhouse.io, openai.com, amazon.jobs, etc.) — all verification via WebSearch aggregator mirrors
2. **Greenhouse Board API:** boards-api.greenhouse.io ENOTFOUND — API calls completely non-functional
3. **KPMG portal:** jobs.kpmg.us returns zero live hits (4th consecutive scan)
4. **Goldman Sachs scan_query:** Still non-functional (3+ scans)
5. **IBM careers:** careers.ibm.com still 404s on WebFetch
6. **Merck:** 410-Gone pattern persists

## Submission Gate

**ALL roles HELD.** No applications submitted. No resumes generated (batch mode, no Playwright for PDF generation). Awaiting Erick's review and go decision.

## Pipeline Health

- verify-pipeline.mjs: 0 errors, 2 warnings (pre-existing Glean false positives)
- applications.md: 294 entries (was 274, +20 this scan)
- scan-history.tsv: 708 entries (was 637, +71 this scan)
- Reports generated: 19 (427-445)
