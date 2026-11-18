# Career-Ops Daily Pipeline — 2026-11-18

## Summary
Scheduled scan completed. Tracked-companies segment continues saturated pattern (3rd+ consecutive scan with diminishing new finds). 6 genuinely new URLs identified from ~400+ search results across all portal queries and tracked companies. No detailed evaluations performed this run due to network policy restrictions blocking career-site WebFetch.

## Scan Coverage
- **Tracked Companies:** 31 (all enabled in portals.yml)
- **Portal Search Queries:** 12 (all enabled)
- **Greenhouse API:** Blocked (boards-api.greenhouse.io not in allowed network domains)
- **Scan Method:** WebSearch only (batch mode — no Playwright)

## New Pipeline Additions (6)
| # | Company | Role | Location | Priority |
|---|---------|------|----------|----------|
| 1 | EY | FS Tech Product Operating Model Transformation Manager | NYC | Medium — Agile delivery practices, CS-1/CS-5 likely |
| 2 | Goldman Sachs | Transaction Banking Delivery Program Manager VP | NYC | Medium — VP delivery PM |
| 3 | Goldman Sachs | VP Digital Transformation PM AI-Driven | NYC | High — AI-adjacent, VP, Jul 2026 posting |
| 4 | Deloitte | Agility & Engineering Lead | NJ/NY (80 locs) | Low — likely Tier-4 Agile coaching cap |
| 5 | UnitedHealth | Technical Project Manager | Remote | Medium — remote TPM, Mar 2026 posting may be stale |
| 6 | UnitedHealth | Senior Technical Project Manager | Cloud Build | Medium-High — cloud initiatives, CS-1/CS-2 likely |

## Skipped (8)
- EY SPM Project Manager Hoboken — domain mismatch (Sales Performance Mgmt)
- Goldman Sachs Associate PM (2 roles) — negative filter ("Associate" = entry-level)
- Goldman Sachs unknown role (179569) — title unconfirmed
- Deloitte Delivery Mgmt Engineer II — mid-level engineer title
- Deloitte SM Project Delivery Analyst — analyst downlevel + Tier-4
- Deloitte Consultant Eng Tech Strategy — consultant junior level

## Dedup Stats
- URLs scanned: ~400+ across all queries
- Already in scan-history from Nov 13 run: ~394
- Genuinely new: 14 (6 added to pipeline, 8 skipped)
- Dedup hit rate: ~97% — confirms saturation pattern

## Pipeline Health
- verify-pipeline.mjs: 0 errors, 1 warning (known #108/#109 Glean false positive)
- No pending tracker additions to merge
- 287 entries in applications.md, all statuses canonical

## Existing Pending Pipeline (from Nov 13)
~65 URLs still in pipeline Pending section. Key high-priority items awaiting evaluation:
- Citi — TPM Applied AI & Agents SVP (scored 4.0/5, entry #433)
- Deloitte — Delivery Mgmt TPM DevOps/Cloud Sr Manager (scored 4.2/5, entry #429)
- Multiple Deloitte, Citi, UnitedHealth, J&J roles

## Network Policy Notes
Blocked domains: boards-api.greenhouse.io, higher.gs.com, careers.ey.com, jobs.citi.com (WebFetch). WebSearch works for all. Career-site JD verification not possible in this session.

## Next Steps
1. Evaluate 6 new pipeline entries when WebFetch access is available
2. Generate PDFs for high-priority roles scored 3.5+
3. Consider reducing scan cadence for saturated company segments
4. Next scheduled scan: per configured interval
