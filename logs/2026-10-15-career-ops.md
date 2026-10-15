# Career-Ops Session Log — 2026-10-15

## Run Type
Scheduled cloud pipeline run (17-day gap since last scan 2026-09-28)

## Portal Scan Results
- **Segments scanned:** 4 parallel agents
  - Search Queries: 12 queries → 14 new candidates
  - Big Tech + AI: 11 companies → 6 unresolved Anthropic IDs + ServiceNow, Palantir, CoreWeave, Glean
  - Consulting + Gov: 12 companies → 2 strong (EY, Cognizant) + 8 moderate
  - Financial + Healthcare: 8 companies → 9 strong (4 Citi, 5 UHG) + 5 moderate
- **Total new URLs logged:** 55
- **Total deduped/filtered:** ~160+
- **scan-history.tsv:** Updated from 638 to 693 entries

## Evaluations Completed (5)
| Report | Company | Role | Score | Location | Comp |
|--------|---------|------|-------|----------|------|
| 427 | Citi | IT PM, SVP | 3.5/5 | Jersey City, NJ | $163.6-245.4K |
| 428 | UHG/Optum | Principal TPM | 3.7/5 | Remote US | $112.7-193.2K |
| 429 | EY | Program Manager | 3.3/5 | Hoboken, NJ | Unconfirmed |
| 430 | Cognizant | TPM | 3.4/5 | Jersey City, NJ | $113-181K |
| 431 | Amount | Senior TPM | 3.8/5 | Remote US | $138.7-185K |

## Pipeline Queue
21 Tier B candidates added to pipeline.md Pending section for future evaluation, including:
- 3 additional Citi JC/NYC roles
- 4 additional UHG remote roles (incl. Optum AI Agentic Platform TPM)
- 2 MetLife (Principal Tech PM, Senior Agile PM)
- 4 Nava federal/remote roles
- 2 Palantir NYC roles
- CoreWeave Infra Ops PM
- Experis Sr TPM/Delivery Lead NYC contract
- Deloitte SM/RTE
- Others

## Infrastructure Issues
1. Greenhouse API DNS failure (boards-api.greenhouse.io) — 6 Anthropic IDs unresolved
2. Goldman Sachs portal non-functional (4th+ scan) — needs higher.gs.com
3. JPMorgan careers not indexing — needs eightfold.ai domain
4. Merck 410 Gone pattern continues
5. UHG direct URLs 404 but productive via aggregators
6. KPMG portal 0 results (3rd consecutive)

## Pipeline Integrity
- merge-tracker.mjs: 5 additions merged successfully
- verify-pipeline.mjs: 0 errors, 1 warning (pre-existing Glean duplicate #108/#109)
- applications.md: 280 entries (was 275)

## Files Changed
- data/scan-history.tsv (55 new entries)
- data/pipeline.md (21 pending entries + Done section note)
- data/applications.md (5 new evaluations merged)
- reports/427-431 (5 new evaluation reports)
- batch/tracker-additions/ (5 TSVs merged)
- logs/tmp-2026-10-15.md (daily log)
- logs/2026-10-15-career-ops.md (this file)
