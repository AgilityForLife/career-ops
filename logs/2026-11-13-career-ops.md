# Career-Ops Daily Scan — 2026-11-13

## Summary

- **Scan gap:** 46 days since last scan (2026-09-28)
- **New URLs found:** 40
- **URLs evaluated:** 0 (blocked — see below)
- **Reports generated:** 0
- **PDFs generated:** 0
- **Applications submitted:** 0 (NEVER auto-submit rule enforced)

## Scan Coverage

- **Search queries:** 12/12 executed via WebSearch
- **Tracked companies:** 31/31 scanned via WebSearch
- **Scan method:** WebSearch only (cloud session; Greenhouse API and all career site domains blocked by network policy — ENOTFOUND)

## New URLs by Company

| Company | Count | Notes |
|---------|-------|-------|
| Citi | 9 | 2x SVP Applied AI/Digital (HIGH PRIORITY), 3x Director/VP NYC, 4x JC/NYC |
| UnitedHealth | 7 | 2x Director Remote, 1x Principal, 1x Sr Manager, 3x Sr TPM/Program Leader |
| Deloitte | 9 | 1x Delivery Mgmt TPM DevOps Sr Mgr (CS-1/CS-3), 1x Delivery Leader, 6x PM/TPM various, 1x SM/RTE |
| Palantir | 4 | 2x TPM NYC, 1x IS PM, 1x GRC PM DC |
| JPMorgan | 2 | 1x Exec Dir AI Product Mgmt (HIGH PRIORITY), 1x Lead TPM Strategic Initiatives |
| CoreWeave | 2 | 1x TPM Product Engineering NJ/NYC (HIGH PRIORITY), 1x Ops PM |
| EY | 2 | 1x Program Manager Hoboken, 1x Project Manager Hoboken |
| Goldman Sachs | 1 | VP Project Management GBM NYC |
| Cognizant | 1 | Sr Consulting PM Teaneck NJ — $134.5-158.5K — closes Nov 27 |
| OpenAI | 1 | Security PM Remote (M&A focus — lower fit) |
| Booz Allen | 1 | AI Project Manager McLean VA — SAFe req |
| Anthropic | 0 | Many open roles but none PM/TPM-titled |

## Top Priority Leads (estimated CS alignment)

1. **Citi — TPM Applied AI & Agents, SVP** — NYC — AI + delivery + enterprise scale (CS-1/CS-2/CS-5)
2. **JPMorgan — Technical PM Exec Dir, AI Product Mgmt** — NYC — AI + TPM leadership (CS-1/CS-5)
3. **CoreWeave — TPM Product Engineering** — Livingston NJ/NYC — GPU infra + NJ hybrid (CS-1/CS-3)
4. **UnitedHealth — Director Tech Project/PM** — Remote — $134K-230K range if similar to prior postings (CS-1/CS-5/CS-7)
5. **Deloitte — Delivery Mgmt TPM DevOps/Cloud Sr Manager** — NJ/NY — DevOps + Cloud (CS-1/CS-3)
6. **Cognizant — Sr Consulting PM** — Teaneck NJ — $134.5-158.5K confirmed — closes Nov 27 (URGENT)

## Blocking Issue

All career site domains (jobs.citi.com, careers.unitedhealthgroup.com, apply.deloitte.com, job-boards.greenhouse.io, careers.cognizant.com, etc.) return ENOTFOUND in this cloud execution environment. JDs cannot be fetched, so no evaluations, scoring, reports, or resume generation could be performed.

**Action needed:** Process the 40 pending URLs in a local session or update the cloud environment's network policy to allow career site access.

## Pipeline Health

- verify-pipeline.mjs: 0 errors, 2 warnings (pre-existing: Glean #108/#109 and Deloitte #437/#438 duplicates)
- merge-tracker.mjs: no pending additions
- scan-history.tsv: 749 lines (was 638, +40 new + header)

## Files Modified

- `data/pipeline.md` — 40 new URLs added to Pending section
- `data/scan-history.tsv` — 40 new entries appended (date_seen: 2026-11-13, status: added)
- `logs/2026-11-13-career-ops.md` — this file
