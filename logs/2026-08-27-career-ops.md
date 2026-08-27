# Session Log — 2026-08-27

**Type:** Scheduled daily pipeline (automated)
**Branch:** claude/magical-gauss-1u812p

---

## Portal Scan

- **Portals scanned:** 12 search queries + 30+ tracked companies (Greenhouse, Lever, Ashby, LinkedIn, Dice)
- **Raw postings found:** ~69
- **Logged to scan-history:** 68 entries
- **Sent to evaluation:** 11 (after triage on location, domain, title, dedup)
- **Skipped reasons:** location/relocation, domain mismatch, backlog, aggregator duplicates, title filters

## Evaluations (11)

### PRIMARY (strong fits — APPLY)
| # | Company | Role | Score | Key Strengths |
|---|---------|------|-------|---------------|
| 058 | ION Group | Technical Delivery Manager/Lead | 4.2/5 | 5+ CS engaged; cloud/data delivery in regulated fintech; NYC/NJ hybrid |
| 056 | Citi | AI & Digital Senior Program Lead | 4.1/5 | 5 CS engaged; AI/digital transformation + regulated finance; NYC hybrid; $170-250K |

### SECONDARY (apply with caveats or prepare)
| # | Company | Role | Score | Notes |
|---|---------|------|-------|-------|
| 060 | Nava | Sr. Project Manager | 3.9/5 | Borderline PRIMARY; Power BI required; NJ hybrid; civic tech comp may trail |
| 061 | Hims & Hers | Sr. TPM, Data Platform (MarTech) | 3.8/5 | Snowflake match via Sanofi+Verisk; MarTech domain gap; remote US; $170-185K+equity |
| 053 | GitLab | Senior PM, Enterprise Technology & AI | 3.3/5 | CS-1/CS-5/CS-7 engaged; AI transformation depth gap; remote US; $103-220K |
| 055 | Amazon | Sr. TPM, WW Tech Partners | 3.2/5 | CS-1/CS-2/CS-5 engaged; partner ecosystem gap; Seattle/Austin relocation risk |
| 057 | Salesforce | Technical Program Manager | 3.0/5 | PREPARE ONLY; Salesforce platform depth required; SF-based |

### REJECTED
| # | Company | Role | Score | Reason |
|---|---------|------|-------|--------|
| 062 | Rula | Security TPM | 2.7/5 | Security domain gap too wide |
| 054 | Anthropic | TPM, Launches | 2.5/5 | Software eng background required |
| 059 | Ramp | TPM (Founding) | 2.5/5 | Software eng background required; identity/auth domain |
| 063 | Harvey | TPM, Quality & Reliability | 2.3/5 | SF relocation + QA/Test Engineer requirement (two deal-breakers) |

## Pipeline Integrity
- Tracker TSVs written: 11 (053-063)
- `merge-tracker.mjs`: 11 added, 0 updated, 0 skipped
- `verify-pipeline.mjs`: 0 errors, 0 warnings — pipeline clean
- Nava PBC 1099 PM (Greenhouse) corrected from "evaluated" to "skipped_backlog_1099_contractor"

## Batch Summary
- **Total evaluated:** 11
- **Primary targets:** 2 (ION Group 4.2/5, Citi 4.1/5)
- **Secondary targets:** 5 (Nava 3.9, Hims&Hers 3.8, GitLab 3.3, Amazon 3.2, Salesforce 3.0)
- **Rejected:** 4 (Rula 2.7, Anthropic 2.5, Ramp 2.5, Harvey 2.3)
- **PDFs generated:** 0 (batch mode — no Playwright)
- **Applications submitted:** 0 (safety rule: never auto-submit)

## Notes
- All evaluations done via WebSearch JD summaries (WebFetch blocked for job board domains)
- All reports marked `Verification: unconfirmed (batch mode)`
- ION Group and Citi are strong PRIMARY fits worth immediate attention
- Nava is a borderline PRIMARY with rare Power BI requirement and NJ hybrid location
