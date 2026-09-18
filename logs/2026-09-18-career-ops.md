# Career-Ops Daily Pipeline — 2026-09-18

## Portal Scan
- **Queries run:** 12+ search queries across Greenhouse, Ashby, Lever, LinkedIn, Dice, ClearanceJobs, Procore + 24 tracked companies
- **Raw results:** ~50+ URLs surfaced
- **After dedup:** 39 new entries added to scan-history.tsv (lines 398-437)
  - 13 marked "added" → queued for evaluation
  - 26 skipped (location, domain, overlevel, staffing agency, already evaluated)
- **Note:** 1 additional posting (Prudential Scrum Master/PM - IMO) was scanned but not evaluated this run

## Evaluations (12 jobs → reports 275-286)

### PRIMARY — APPLY (3 roles)
| # | Company | Role | Score | Comp | Location |
|---|---------|------|-------|------|----------|
| 275 | Goldman Sachs | VP, PM - Compliance Technology | 4.0/5 | $115-250K+bonus | NYC |
| 279 | Citi | AI Digital Senior Program Lead (SVP) | 4.2/5 | $163.6-245.4K | NYC |
| 280 | JPMorgan Chase | Lead TPM, Cloud Platforms | 4.0/5 | $142.5-190K | Jersey City NJ |

### SECONDARY — PREPARE / CONSIDER (5 roles)
| # | Company | Role | Score | Key Issue |
|---|---------|------|-------|-----------|
| 276 | JPMorgan Chase | Principal TPM - COS, CDAS | 3.8/5 | Seniority stretch (Principal + COS) |
| 286 | Amwell | Sr TPM, Domain Delivery | 3.5/5 | CS-2 absent; healthcare regulated |
| 281 | JPMorgan Chase | Lead TPM, Trust & Safety SM | 3.4/5 | Tampa FL location risk |
| 283 | GitLab | Sr PM, Enterprise Tech & AI | 3.4/5 | CIO org IT delivery; $126-213K |
| 278 | IBM Octo | PM / Change Manager | 3.3/5 | Comp uncertainty + clearance |

### REJECTED (4 roles)
| # | Company | Role | Score | Reason |
|---|---------|------|-------|--------|
| 282 | IBM (Confluent) | Sr TPM (Remote) | 2.9/5 | Post-sales CS role, not delivery |
| 277 | CGS Federal | Agile Coach | 2.8/5 | Comp floor breach + Tier 4 cap |
| 285 | Mission Lane | Delivery Manager | 2.6/5 | Scale mismatch, comp below target |
| 284 | Samsara | Strategic PM | 2.3/5 | NYC Metro excluded + CS ops role |

## Resume Decisions
- No PDFs generated this run (batch mode, no Playwright)
- Recommended for resume prep: Goldman Sachs (#275), Citi (#279), JPMorgan Cloud (#280)

## Pipeline Health
- **verify-pipeline.mjs:** 0 errors, 1 warning (pre-existing Glean duplicate)
- **Tracker:** 210 entries total in applications.md
- **Scan history:** 437 entries total

## Batch Summary
- **New postings scanned:** 39
- **Evaluated:** 12
- **Reports written:** 275-286
- **Top opportunities:** Goldman Sachs Compliance (4.0), Citi AI Digital (4.2), JPMorgan Cloud (4.0)
- **Branch:** claude/magical-gauss-3sqlfc (4 commits pushed)
