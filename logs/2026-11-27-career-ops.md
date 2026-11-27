# Career-Ops Daily Pipeline — 2026-11-27

## Summary
- **Portal Scan**: 51+ new URLs discovered across 3 scan groups (Financial Services, Healthcare+Tech, Consulting+ATS)
- **Evaluations**: 20 offers evaluated (reports #484-505)
- **High-Priority Leads**: 3 offers scored 4.1/5 — actionable
- **Tracker**: 332 total entries (19 added, 1 updated)
- **Pipeline Health**: Green (0 errors, 1 known warning)

## Scan Results

### Financial Services (33 new URLs)
- **JPMorgan Chase**: 16 URLs via TheMuse (Lead/Principal TPM roles — many may be duplicate slugs)
- **Prudential Financial**: 6 URLs (PM/SM roles including Newark NJ)
- **MetLife**: 8 URLs via BuiltIn (Agile Coach, RTE, Sr PM)
- **Goldman Sachs**: 3 URLs (flagged possibly too junior)
- **Citi**: Saturated — no new results

### Healthcare + Tech (18 new URLs)
- **UHG**: 6 new (Agile Practitioner 2 & 3, plus 4 unverified)
- **J&J**: 4 new (Finance RTE, Assoc Dir Portfolio, Director MedTech, Sr Leader)
- **ServiceNow**: 2 new (Sr Staff TPM Moveworks)
- **Glean**: 6 new (all titles unverified)
- **IBM, Merck**: Zero yield (known stale portals)

### Consulting + ATS (processed by background agent)
- EY, Cocoon, SuccessKPI, Bloomreach, Transcarent, Box, Deloitte, Citi Getzville evaluated

## Evaluations — Score Board

### HIGH PRIORITY (4.0+) — APPLY
| # | Company | Role | Score | Location | Key Fit |
|---|---------|------|-------|----------|---------|
| 504 | UnitedHealth Group | Agile Practitioner 3 AI Enablement | 4.1/5 | Remote | SPC6 direct, AI-adjacent, $113K-$193K, healthcare regulated |
| 464 | Cognizant | Sr TPM/Delivery Manager | 4.1/5 | Jersey City NJ | SAFe PI Planning, 4 CS + 2 partial, local |
| 491 | Johnson & Johnson | Finance RTE Manager | 4.1/5 | Raritan NJ | SPC6 premium, Sanofi pharma maps, NJ location |

### CONDITIONAL (3.5+) — Verify Before Applying
| # | Company | Role | Score | Gate |
|---|---------|------|-------|------|
| 490 | MetLife | Sr Agile PM | 3.5/5 | Must confirm NYC location (Cary NC = deal-breaker) |
| 494 | EY | Service Delivery Manager | 3.5/5 | Verify JD scope (ITSM vs delivery) |
| 501 | Deloitte | Software Product Delivery Mgr | 3.6/5 | Check domain fit |

### MODERATE (3.0-3.4) — Lower Priority
| # | Company | Role | Score | Notes |
|---|---------|------|-------|-------|
| 489 | JPMorgan | TPM AI-Enabled Tech Delivery | 3.2/5 | Columbus OH deal-breaker |
| 492 | ServiceNow | Sr Staff TPM Moveworks | 3.2/5 | Mountain View CA deal-breaker |
| 496 | SuccessKPI | Sr Technical Program Director | 3.3/5 | Remote; may be closed |
| 497 | Bloomreach | Director TPM | 3.4/5 | Remote; posting may be stale |
| 499 | Box | Agile Practitioner/Leader | 3.2/5 | Remote; 10+ yrs |
| 500 | J&J | Manager PM Capabilities | 3.4/5 | Closing Dec 3 |
| 503 | J&J | Manager Implementation | 3.3/5 | Remote |
| 485 | MetLife | Sr Agile Coach II | 3.0/5 | Cary NC — location deal-breaker |

### SKIP (< 3.0) — Do Not Apply
| # | Company | Role | Score | Reason |
|---|---------|------|-------|--------|
| 487 | Prudential | Scrum Master/PM IMO | 2.2/5 | Marketing PM, zero CS engagement |
| 493/505 | UHG | Agile Practitioner 2 | 2.8/5 | Seniority downlevel |
| 495 | Cocoon | TPM | 2.8/5 | Startup first TPM hire |
| 498 | Transcarent | TPM | 2.7/5 | 3-5yr req under-levels |
| 502 | Citi | PM Lead VP Getzville | 2.4/5 | Getzville NY location |
| 486 | MetLife | RTE Data & Analytics | 1.0/5 | Posting expired Aug 2025 |

## Pipeline State
- **Total pending URLs**: ~150+ (many from prior scans still unevaluated)
- **Scan saturation**: Most portals returning known results 3-4 scans in a row
- **Next priority**: Remaining J&J NJ roles (RTE, Transcend PMO, Hypercare), remaining JPMorgan Lead/Principal TPMs, Citi senior roles

## Actions for Erick
1. **Apply immediately**: UHG Agile Practitioner 3 AI (#504), Cognizant Sr TPM JC (#464), J&J Finance RTE (#491) — all 4.1/5
2. **Verify then apply**: MetLife Sr Agile PM (#490 — confirm NYC), EY SDM Hoboken (#494 — verify scope)
3. **Monitor**: MetLife D&A for similar RTE postings (original was 4.4 potential)
4. **Low priority**: ~150 pending pipeline URLs, mostly aggregator/location-mismatch

## Technical Notes
- Numbering conflict resolved: consulting/ATS agent reports renumbered 494-503
- Report #483 (Deloitte) skipped by merge — duplicate of existing #431
- Cognizant #464 updated from 3.6 to 4.1 with fresh evaluation
- All evaluations in batch mode (WebFetch blocked for all career sites — WebSearch fallback used, no Playwright)
- Pipeline health: 0 errors, 1 warning (pre-existing #108/#109 Glean false positive)
- Session: cloud environment, context continuation (original context window exhausted mid-pipeline)
- Commit pushed to branch `claude/magical-gauss-nljuvv`
