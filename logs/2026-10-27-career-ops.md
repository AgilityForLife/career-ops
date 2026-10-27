# Career-Ops Daily Pipeline — 2026-10-27

**Trigger:** Scheduled routine (Career-Ops Daily Pipeline)
**Start:** 2026-10-27 05:08 UTC
**Branch:** claude/magical-gauss-xs3bse
**Gap since last scan:** 29 days (2026-09-28)

## Scan Summary

| Segment | Companies Scanned | New URLs | Evaluated | Top Score |
|---------|------------------|----------|-----------|-----------|
| Search Queries (12) | Greenhouse, Ashby, Lever, LinkedIn, Dice, ClearanceJobs | ~14 | 0 (queued) | — |
| Big Tech + AI (11) | IBM, ServiceNow, Salesforce, Microsoft, AWS, Google, Anthropic, OpenAI, Palantir, Glean, CoreWeave | ~23 | 5 | 4.3/5 |
| Consulting + Gov (12) | Accenture, Deloitte, KPMG, PwC, EY, Booz Allen, Leidos, SAIC, Cognizant, WSP, AECOM, Parsons | ~12 | 1 | 3.1/5 |
| Financial + Healthcare (8) | JPMorgan, Citi, Goldman, Prudential, MetLife, J&J, Merck, UnitedHealth | ~13 | 4 | 4.3/5 |
| **TOTAL** | **43 companies + 12 queries** | **~67** | **10** | **4.3/5** |

## Evaluated Roles (10 reports: #427-436)

| # | Company | Role | Score | Recommendation |
|---|---------|------|-------|----------------|
| 427 | Citi | AI Digital Senior Program Lead SVP | 3.4/5 | APPLY w/ caveats |
| 428 | Amazon (Audible) | Senior TPM, Newark NJ | 3.8/5 | APPLY |
| 429 | UnitedHealth Group | Director TPM Remote | 3.5/5 | APPLY w/ caveats |
| **430** | **Citi** | **TPM Applied AI & Agents SVP** | **4.3/5** | **APPLY — BEST OF RUN** |
| 431 | OpenAI | Security PM Remote | 2.6/5 | SKIP (domain mismatch) |
| 432 | EY | CT Tech Activation PM Hoboken | 3.1/5 | APPLY w/ caveats |
| 433 | Anthropic | TPM Revenue Operations | 3.2/5 | Borderline |
| 434 | Anthropic | TPM Corporate Engineering | 3.0/5 | SKIP |
| 435 | OpenAI | TPM Demand Planning & S&OP | 2.5/5 | SKIP (location deal-breaker) |
| 436 | CoreWeave | Staff TPM Infra & Node Delivery | 3.4/5 | Borderline |

## Apply-Eligible (score >= 3.0, no deal-breakers): 8 of 10

**Top Priority (3.5+):**
1. Citi TPM Applied AI & Agents SVP — 4.3/5, NYC, 5/7 CS engaged
2. Amazon (Audible) Senior TPM — 3.8/5, Newark NJ, $163K-$221K, target location
3. UnitedHealth Director TPM — 3.5/5, Remote, healthcare regulated

**Standard (3.0-3.4):**
4. Citi AI Digital Senior Program Lead — 3.4/5, NYC
5. CoreWeave Staff TPM — 3.4/5, NYC, hardware NPI gap
6. Anthropic TPM Revenue Operations — 3.2/5, NYC, $365K-$435K, GTM domain
7. EY CT Tech Activation PM — 3.1/5, Hoboken NJ
8. Anthropic TPM Corporate Engineering — 3.0/5, NYC, domain mismatch

**Rejected (< 3.0 or deal-breaker):**
- OpenAI Security PM — 2.6/5, security domain mismatch
- OpenAI TPM Demand Planning — 2.5/5, SF hybrid = location deal-breaker

## Queued for Next Cycle (~57 URLs in pipeline.md Pending)

Key groups still to evaluate:
- 4 more Anthropic TPMs (Billing, GTM Systems, Discovery, Strategic Deals)
- 5 Amazon TPMs (non-Newark locations)
- 6 CoreWeave TPMs (saturation precedent — evaluate selectively)
- 5 Glean unknown-title Greenhouse IDs (need title verification)
- 4 Deloitte PMO roles (Jersey City, NJ/NY)
- 3 Citi SVP roles (Jersey City)
- 3 UnitedHealth roles (Remote)
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

- verify-pipeline.mjs: 0 errors, 1 warning (pre-existing #108/#109 Glean false positive)
- applications.md: 284 entries
- scan-history.tsv: 708 entries (was 637, +71 this scan)
