# Career-Ops Daily Pipeline — 2026-11-26

## Run Summary

| Metric | Value |
|--------|-------|
| Search queries executed | 12 |
| Tracked companies scanned | 32 |
| New URLs found (deduped) | 12 |
| URLs added to pipeline | 12 |
| URLs skipped | 19 |
| Evaluations completed | 0 (JD fetch blocked by network policy) |
| Reports generated | 0 |
| PDFs generated | 0 |
| Scan-history entries added | ~36 |
| Total scan-history entries | ~948 |
| Pipeline pending URLs | ~326 |

## Scan Results

### Pass 1 (earlier context window)
- Ran all 12 search queries + 32 tracked companies
- 7 new pipeline URLs added: Cognizant Sr TPM/DM (JC NJ), Deloitte Mobile Device Migration PM, MetLife Principal RTE + Agile Enablement Lead (NJ), Prudential Lead TPM + Lead SM (Newark NJ), Box Agile Practitioner
- Search queries fully saturated — zero net new from ATS board queries

### Pass 2 (resumed context)
- Re-validated all 32 tracked company searches
- 5 new J&J Transcend/RTE pipeline URLs found and added
- 7 additional URLs triaged and skipped (domain mismatch, wrong location)

### High-Priority New Finds

| # | Company | Role | Location | CS Engagement | Priority |
|---|---------|------|----------|---------------|----------|
| 1 | J&J | Sr Manager Release Train Engineer | Raritan/NB NJ | CS-6 (SAFe SPC6) | **HIGH** |
| 2 | Cognizant | Sr TPM/Delivery Manager | Jersey City NJ | CS-1, CS-5 | HIGH |
| 3 | Prudential | Lead Technical Program Management | Newark NJ | CS-1 | HIGH |
| 4 | Prudential | Lead Scrum Master | Newark NJ | CS-6 | HIGH |
| 5 | MetLife | Principal RTE Composite AI | Whippany NJ | CS-6 | HIGH |
| 6 | MetLife | Agile Enablement Lead | NJ | CS-6 | MEDIUM |
| 7 | J&J | Transcend Cutover & Hypercare Mgr | Titusville NJ | CS-1, CS-7 | MEDIUM |
| 8 | J&J | Transcend PMO Senior Ops Mgr | Titusville NJ | CS-1 | MEDIUM |
| 9 | Box | Agile Practitioner/Leader | Remote | CS-6 | MEDIUM |

## Blockers

- **Network policy blocks JD fetch**: WebFetch cannot reach any career site domains (jnj.com, cognizant.com, builtin.com, greenhouse.io, lever.co, etc.). Evaluations require JD text. Next run needs these domains allowed, or manual JD pasting.
- **Pipeline backlog**: 326 pending URLs, ~113 genuinely unevaluated. Evaluation debt growing.

## Recommendations

1. **Evaluate J&J RTE role ASAP** (r-092471) — strongest CS-6 match found in weeks. SAFe SPC6 + PMP directly relevant. NJ location.
2. **Evaluate Cognizant Sr TPM** — application deadline Nov 27 (tomorrow). $134.5-158.5K, Jersey City hybrid.
3. **Batch evaluate** the 5 Prudential/MetLife NJ roles — all strong local fits.
4. **Consider allowing career domains** in network policy for future automated runs.

## Files Modified

- `data/pipeline.md` — 12 new URLs added (2 passes)
- `data/scan-history.tsv` — ~36 new entries
- `logs/tmp-2026-11-26.md` — micro log updated with pass 2 results
- `logs/2026-11-26-career-ops.md` — this session log
