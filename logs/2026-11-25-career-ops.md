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

## Files Changed

- `data/scan-history.tsv` — 21 new entries appended
- `data/pipeline.md` — 7 new URLs added to Pending section, scan comment updated
- `reports/468-citi-pm-senior-lead-nyc-2026-11-25.md` — Renumbered from duplicate #464
- `logs/2026-11-25-career-ops.md` — This session log
