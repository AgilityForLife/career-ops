# Career-Ops Daily Pipeline — 2026-10-01

**Trigger:** Scheduled (trig_01Bofp9xKjSeVHx4mGSgduQb) @ 05:06 UTC
**Last scan:** 2026-09-28 (3-day gap)
**Branch:** claude/magical-gauss-bp4co7

---

## Scan Summary

**Agents deployed:** 4 parallel scanners + 11 parallel evaluators
- Search Queries: 12 queries across Greenhouse, Ashby, Lever, LinkedIn, Dice, ClearanceJobs, ProCore
- Big Tech + AI: IBM, ServiceNow, Salesforce, Microsoft, AWS, Google, Anthropic, OpenAI, Palantir, Glean, CoreWeave
- Consulting + Gov: Accenture, Deloitte, KPMG, PwC, EY, Booz Allen, Leidos, SAIC, Cognizant, WSP, AECOM, Parsons
- Financial + Healthcare: JPMorgan Chase, Citi, Goldman Sachs, Prudential, MetLife, J&J, Merck, UHG

**Raw URLs found:** ~70+ new (after dedup against 637-entry scan-history.tsv)
**Scan-history.tsv:** 637 → 707 entries (+70)
**Evaluated:** 25 roles (#427-#452)
**Reports generated:** 25 (all in reports/)
**Tracker entries added:** 25 (via merge-tracker.mjs)

---

## Score Distribution

| Score Range | Count | Roles |
|-------------|-------|-------|
| 3.5+ | 5 | FutureFit AI (3.8), Foursquare (3.8), Roboyo (3.8*), Deloitte Sr Mgr (3.5), Deloitte DRM (3.5) |
| 3.0-3.4 | 7 | CoreWeave SOX (3.4), Success Academy (3.3), SAIC (3.2), Salesforce (3.2), ServiceNow Sr Staff (3.1), Anthropic (3.1), Workday (3.0), Oura (3.0) |
| 2.5-2.9 | 7 | SkySlope (2.9), Deloitte GES (2.8), ServiceNow Principal (2.8), Redhorse (2.8), Delinea (2.5), Citi (2.5), Princeton10 (2.5) |
| < 2.5 | 4 | Cognizant (2.4), Take-Two (2.4), ServiceNow Staff (2.3), GT (2.2), Volta (1.5) |

*Roboyo scored 3.8 but posting is expired

---

## Actionable Roles

### PRIMARY APPLY
| # | Company | Role | Score | Comp | Location | Action |
|---|---------|------|-------|------|----------|--------|
| 440 | FutureFit AI | Technical Project Manager | 3.8/5 | $125-165K | Remote/NYC | APPLY — 3.5 CS engaged, AI workforce platform, systems integrator framing matches Sanofi integration delivery |

### CONDITIONAL APPLY
| # | Company | Role | Score | Comp | Location | Condition |
|---|---------|------|-------|------|----------|-----------|
| 444 | Foursquare | Senior Program Manager | 3.8/5 | $155-200K est | Remote?/Seattle | Confirm remote availability from NJ |
| 431 | Deloitte | Senior Mgr PM DT Product Owner | 3.5/5 | $148-250K | Chicago hybrid | Verify location flexibility to NJ/remote |
| 449 | Deloitte | Digital Release Manager | 3.5/5 | $119-226K | NYC hybrid | Apply if pipeline thin; narrow scope risk |
| 446 | Success Academy | AI Technical PM | 3.3/5 | $130-150K | NYC | Apply if AI-adjacent PM path is strategic |

### DO NOT APPLY (scores below threshold or hard blockers)
20 roles — see individual reports for details.

---

## Patterns & Anomalies

1. **No 4.0+ scores this cycle.** Best score 3.8/5 (FutureFit AI + Foursquare). Pipeline quality declining vs earlier scans.
2. **Search queries fully saturated.** All 12 portals.yml queries return 100% known URLs. New finds come exclusively from tracked_companies.
3. **OpenAI confirmed SF-only.** All 14 PM/TPM roles require San Francisco. No remote exceptions found.
4. **Amazon 5-day RTO.** 4 NYC roles skipped due to mandatory 5-day return-to-office policy.
5. **Accenture below-floor.** 7 Delivery Lead/Program Mgmt roles at $47-57/hr (below $60/hr C2C floor).
6. **Proxy blocking all career sites.** WebFetch 403 on: careers.servicenow.com, careers.salesforce.com, amazon.jobs, apply.deloitte.com, accenture.com, coreweave.com, greenhouse.io boards. All evaluations assembled from WebSearch snippets.
7. **Greenhouse API fully blocked.** boards-api.greenhouse.io returns 403 from egress proxy.

---

## Files Modified
- `data/scan-history.tsv` (+70 entries, 707 total)
- `data/applications.md` (+25 entries, 300 total)
- `data/pipeline.md` (scan summary added)
- `reports/427-*.md` through `reports/451-*.md` (25 new reports)
- `batch/tracker-additions/merged/` (25 TSVs processed)
- `logs/2026-10-01-career-ops.md` (this file)

---

## Safety Check
- No applications auto-submitted
- No forms filled
- No emails sent
- All evaluations are PREPARE + TRACK only
