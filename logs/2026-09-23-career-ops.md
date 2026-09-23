# Career-Ops Session Log — 2026-09-23

**Type:** Scheduled cloud run (daily pipeline)
**Gap:** 1 day (last run: 2026-09-22)

## Pipeline Summary

| Step | Status |
|------|--------|
| Git remote setup | Skipped (PAT blocked by auto mode) |
| Load system context | Done (skills-model, profile, cv) |
| Install dependencies | Not needed |
| Portal scan | Done (4 parallel agents, 12 queries + 30 companies) |
| Dedup | Done (510 → 551 scan-history entries) |
| Triage | Done (41 new → 12 evaluated, 29 skipped) |
| Evaluate | Done (reports 316-327) |
| Merge tracker | Done (10 added, 2 skipped as existing) |
| Verify pipeline | Passed (1 pre-existing warning: Glean #108/#109 dupe) |
| Session log | Done |
| Commit & push | Pending |

## Scan Results

- **Raw results:** ~140 URLs across 4 batch agents
- **After dedup:** 41 genuinely new URLs
- **Evaluated:** 12 (reports 316-327, tracker entries 320-329)
- **Skipped at scan:** 29 (location, aggregator, small co, staffing, niche)

## Evaluation Scores

| # | Company | Role | Score | Rec |
|---|---------|------|-------|-----|
| 316 | Anthropic | TPM, Launches | 3.0/5 | Consider |
| 317 | Anthropic | TPM, Revenue Operations | 2.7/5 | Skip |
| 318 | Vanta | PM, AI Transformation GTM | 3.2/5 | Consider |
| 319 | Prudential | SM/PM - IMO | 3.4/5 | Consider |
| 320 | J&J | Senior Manager Digital PMO | 3.6/5 | Consider (strong) |
| 321 | Turing | AI Engagement/Delivery Mgr | 2.5/5 | Skip |
| 322 | Litmos | AI Program Manager | 2.5/5 | Skip |
| 323 | ON.energy | PM, AI Enablement | 2.3/5 | Skip |
| 324 | SADA | Senior Project Manager | 3.0/5 | Consider |
| 325 | Mission Lane | Delivery Manager | 2.8/5 | Skip |
| 326 | Thumbtack | Sr Engineering TPM | 3.7/5 | Consider |
| 327 | Success Academy | AI Technical PM | 2.8/5 | Skip |

## Top Apply-Eligible (3.0+, all held per submission gate)

1. **Thumbtack Sr Engineering TPM** (3.7/5) — Remote, $160-207K, 4 CS engaged, dev platform domain gap
2. **J&J Senior Manager Digital Programs PMO** (3.6/5) — NJ pharma, parallels Sanofi, 4 CS
3. **Prudential SM/PM IMO** (3.4/5) — Newark NJ, financial services, 4 CS
4. **Vanta PM AI Transformation GTM** (3.2/5) — Remote, $154-181K, 2-3 CS, GTM domain departure

## Technical Notes

- Greenhouse.io domains blocked by egress proxy — JDs retrieved via WebSearch mirrors
- All reports marked "unconfirmed (batch mode)" per CLAUDE.md batch worker exception
- Recommend re-fetching full JDs for top 3 roles when egress allows (interactive session)
- No applications submitted (section 15 submission gate active)

## Files Changed

- `data/scan-history.tsv` — +41 entries (510 → 551)
- `data/applications.md` — +10 entries (237 → 247)
- `data/pipeline.md` — Added 2026-09-23 Done section
- `reports/316-327` — 12 new evaluation reports
- `logs/tmp-2026-09-23.md` — Micro log
- `logs/2026-09-23-career-ops.md` — This file
