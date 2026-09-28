# Career-Ops Session Log — 2026-09-28

**Trigger:** Scheduled (trig_01Bofp9xKjSeVHx4mGSgduQb) at 05:17 UTC
**Branch:** claude/magical-gauss-v413fx
**Last scan:** 2026-09-25 (3-day gap)

---

## Scan Summary

| Source | Queries | Raw Results | Already Known | New URLs |
|--------|---------|-------------|---------------|----------|
| Portal search queries (12) | 12 | 78 | 46 | 17 |
| Big Tech/AI companies (11) | 11 | ~120 | ~100 | 18 |
| Consulting/Finance/Healthcare | 14 | ~30 | ~20 | 9+ |
| **Total** | **37** | **~228** | **~166** | **55** |

Scan-history.tsv: 595 → 650 entries

### Technical Notes
- WebFetch blocked by egress proxy for ALL career site domains
- All JD retrieval via WebSearch snippets and aggregator mirrors
- Reports marked "Verification: unconfirmed (batch mode)"
- `boards-api.greenhouse.io` API also blocked

---

## Evaluations (Reports 362-371)

| # | Company | Role | Score | CS | Recommendation |
|---|---------|------|-------|----|----------------|
| 362 | Trunk Tools | Program Manager, AI Transformation | 3.4/5 | 3 | EVALUATE FURTHER — $210-261K comp |
| 363 | ON.energy | Program Manager, AI Enablement | 2.5/5 | 2 | DO NOT APPLY |
| 364 | Citi | C15 Lead PM, Finance Transformation | 4.0/5 | 4-5 | APPLY-ELIGIBLE |
| 365 | UnitedHealth/Optum | Senior Technical Data Analytics PM | 4.3/5 | 5 | EVALUATE FURTHER — Medicaid req gap |
| 366 | FutureFit AI | Technical Project Manager | 2.5/5 | 2 | DO NOT APPLY |
| 367 | SADA | Senior Project Manager | 2.5/5 | 1-2 | DO NOT APPLY |
| 368 | Prelim | Technical Project Manager | 2.7/5 | 1-2 | DO NOT APPLY |
| 369 | Neon One | Agile Delivery Manager | 2.8/5 | 1-2 | DO NOT APPLY — Tier 4 cap |
| 370 | Citi | Senior Project Manager VP | 3.5/5 | 3 | EVALUATE FURTHER |
| 371 | Citi | Director Senior PM, Modern & Simple | 4.0/5 | 4+ | APPLY-ELIGIBLE — verify not stale |

### Highlights
- **3 actionable roles** (364 Citi C15, 365 Optum, 371 Citi Director) — highest CS engagement this batch
- **1 high-comp opportunity** (362 Trunk Tools $210-261K) worth further evaluation despite moderate fit
- **6 roles below 3.0** — DO NOT APPLY
- **Anthropic bulk-logged:** 13 new TPM/PM roles, all historically 1.5-2.5 for this profile (pure tech/product PM, not delivery-governance fit)

---

## Pipeline Operations
- [x] Scan-history updated: +55 URLs
- [x] Pipeline.md scan log added
- [x] 10 reports written (362-371)
- [x] 10 tracker TSVs merged via merge-tracker.mjs
- [x] verify-pipeline.mjs: 0 errors, 1 warning (pre-existing #108/#109 Glean duplicate)
- [x] applications.md: 266 → 276 entries
