# Career-Ops Daily Pipeline — 2026-09-08

## Execution Summary

| Metric | Value |
|--------|-------|
| Date | 2026-09-08 |
| Branch | `claude/magical-gauss-8bdgsh` |
| Portals scanned | 10 search queries (Greenhouse, Ashby, Lever, Dice, LinkedIn, company-specific) |
| New URLs discovered | 33 (logged to scan-history.tsv) |
| Evaluations completed | 11 (reports 085–095) |
| Strong fits (≥3.0) | 6 |
| Rejected (<3.0) | 5 |
| Skipped (location/domain/aggregator) | ~17 |
| PDFs generated | 0 |
| Applications submitted | 0 (all held per Section 15) |
| Tracker entries added | 10 (1 skipped as duplicate — GitLab P&D = existing #84) |
| Pipeline health | Clean (0 errors, 0 warnings) |

## Evaluated Roles

### Strong Fits (≥3.0)

| # | Company | Role | Score | Classification | Key Notes |
|---|---------|------|-------|---------------|-----------|
| 085 | Anthropic | TPM, Security | 3.5/5 | SECONDARY | 4 CS engaged (CS-1,3,5,7); ~$290-365K; governance bridge genuine but security tenure gap |
| 088 | Filevine | TPM, LOIS | 3.5/5 | SECONDARY | 3-4 CS engaged; remote US; legal tech regulated-adjacent; program governance = core strength |
| 086 | Anthropic | TPM, API Platform | 3.2/5 | SECONDARY | 2-3 CS engaged; ~$290-435K; API infrastructure depth gap material |
| 089 | Nimble Gravity | Scrum Master, AI Delivery | 3.2/5 | PRIMARY | 2-3 CS engaged; remote; SPC6+PMP+PMI-ACP exceed cert req |
| 090 | Capital Tech Group | Scrum Master (USCIS) | 3.2/5 | PRIMARY | 3 CS engaged; US-citizenship + Public Trust = Section 15 STOP; $55-69/hr |
| 087 | Anthropic | TPM, Launches | 3.0/5 | SECONDARY | 2-3 CS engaged; deep technical fluency req; lowest priority |

### Rejected (<3.0)

| # | Company | Role | Score | Reason |
|---|---------|------|-------|--------|
| 091 | Anthropic | TPM, Security CVD | 2.8/5 | CVD-specific security expertise hard gate |
| 092 | SavvyMoney | PM, Enterprise AI Adoption | 2.8/5 | Change management/AI coaching = Tier 4 cap |
| 093 | RainFocus | Technical Project Manager | 2.5/5 | Business systems team-level, below scale |
| 095 | Flywheel Digital | Manager, Technical PM | 2.5/5 | Media/marketing tech domain mismatch |
| 094 | GitLab | AI Transformation Owner, P&D | 1.8/5 | 0/7 CS engaged (duplicate of CRO assessment) |

## Technical Notes

- **WebFetch BLOCKED**: All job board domains (greenhouse.io, lever.co, ashbyhq.com) blocked by network egress proxy. Evaluations based on WebSearch JD summaries from aggregator sites.
- **Verification**: All reports marked `unconfirmed (batch mode)` — Playwright not available for live ATS verification.
- **Merge-tracker**: 10 new entries added, 1 skipped (GitLab P&D = existing #84 at same score). Status mapped to "Evaluada" via alias.
- **Pipeline health**: verify-pipeline.mjs reports 0 errors, 0 warnings after merge.

## Recommendations for User Review

1. **Anthropic TPM, Security (3.5/5)** — Best fit of this batch. CS-3→CS-7 governance bridge is genuine. Worth preparing a tailored resume if security-adjacent experience can be strengthened in framing.
2. **Filevine TPM, LOIS (3.5/5)** — Legal tech is regulated-adjacent. Program governance infrastructure matches core strength. Verify compensation clears floor.
3. **Nimble Gravity SM, AI Delivery (3.2/5)** — PRIMARY archetype. AI delivery framing is timely. Verify comp clears $100K floor.
4. **Capital Tech Group SM (3.2/5)** — MANUAL REVIEW REQUIRED: US-citizenship + Public Trust clearance = Section 15 STOP condition.

## Pipeline State

- Total tracker entries: 97
- Cumulative reports: 095
- Next report number: 096
- Last scan: 2026-09-08
