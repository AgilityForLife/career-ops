# Career-Ops Daily Pipeline — 2026-10-30

**Last scan:** 2026-09-28 (32-day gap)
**Branch:** claude/magical-gauss-npx15u
**Mode:** Scheduled cloud session (network-restricted)

## Timeline

- **05:07 UTC** — Session started. Loaded portals.yml (12 queries, 31 tracked companies), cv.md, config/profile.yml, config/skills-model.md.
- **05:08 UTC** — Launched 4 parallel scan forks: search-queries, bigtech-ai, consulting-gov, finance-healthcare.
- **05:10 UTC** — Context reset (long conversation). Forks continued in background.
- **05:11 UTC** — Second context reset. Forks completed. Collected 920 raw URLs into scratchpad.
- **05:12 UTC** — Dedup pass: 615 known URLs in scan-history + applications; 342 new after dedup.
- **05:13 UTC** — Filtered to 45 curated URLs from direct career sites of tracked companies.
- **05:14 UTC** — Updated pipeline.md with 45 new pending URLs grouped by company.
- **05:14 UTC** — Appended all 920 scanned URLs to scan-history.tsv.
- **05:15 UTC** — Network verification blocked (session network policy). All URLs marked unconfirmed.
- **05:25 UTC** — Context restored after summarization. Deduped scan-history.tsv (957 entries after dedup).

## Scan Results

| Company | New URLs | Notes |
|---------|----------|-------|
| Anthropic | 13 | Greenhouse board — likely mix of TPM/PM roles (IDs not resolvable without network) |
| UnitedHealth Group | 8 | Remote TPM/PM roles. Principal + Senior levels. |
| Palantir | 10 | Lever board — deployment/PM roles. |
| Citi | 5 | NY-based PM/TPM leads. Transformation + program management. |
| Glean | 5 | Greenhouse board — TPM roles likely. |
| Salesforce | 1 | Salesforce PM role. |
| Microsoft | 1 | Single job ID 1802899. |
| PwC | 1 | Fixed-term Sr Project Manager Cloud (remote). |
| Amazon | 1 | Principal TPM. |

**Total curated:** 45 URLs
**Total raw scanned:** 920 URLs
**Total new (deduped):** 342 URLs

## Orchestrator Pass (post-fork)

After forks completed, orchestrator ran targeted WebSearch for remaining tracked companies not fully covered by fork agents. Found 17 additional URLs:

| Company | New URLs | Notes |
|---------|----------|-------|
| Goldman Sachs | 3 | higher.gs.com — VP PM NYC, Assoc PM NYC, Sr TPM Dallas |
| Johnson & Johnson | 5 | careers.jnj.com — Director Deployment Lead + Director PM (Raritan NJ), PM HCS (Remote), Sr PM Software, Sr Mgr PMO |
| Deloitte | 4 | apply.deloitte.com — SM PDM Eng II (Morristown), Agile Coach (JC/Morristown/NYC), SM/RTE (JC/Princeton), TPM |
| Accenture | 3 | accenture.com — PM Team Lead (Morristown), ServiceNow Delivery Lead (Morristown/NYC), Strategic Program Lead |
| Cognizant | 1 | Sr TPM/Delivery Manager, Jersey City NJ hybrid |
| ServiceNow | 1 | Sr Manager TPM, Experience Team |

**Updated total curated:** 62 URLs (45 fork + 17 orchestrator)

## Blockers

- **Network access**: All external career site domains blocked by session network policy (ENOTFOUND). WebSearch worked for snippet collection but WebFetch/Playwright verification impossible.
- **No evaluations this run**: Full evaluations deferred. Pipeline.md populated for next session with network access.

## Priority Queue for Next Session

1. **J&J Director Deployment Lead** (r-098999, Raritan NJ) — pharma Agile, CS-5/CS-6/CS-7
2. **J&J Director Program Management** (r-069992, Raritan NJ) — pharma R&D, CS-1/CS-5/CS-7
3. **Goldman Sachs VP PM** (172262, NYC) — Global Banking & Markets, CS-1/CS-5/CS-7
4. **Deloitte SM/RTE** (353916, JC/Princeton NJ) — CS-6 SPC6 match
5. **Accenture ServiceNow Delivery Lead** (14838460, Morristown/NYC) — CS-1/CS-3
6. **UHG 8 remote TPM/PM roles** — CS-1/CS-2 match, remote-eligible
7. **Citi Transformation PM Lead** (NYC) — CS-5/CS-7 regulated
8. **13 Anthropic Greenhouse listings** — AI-adjacent, titles unknown

## Stats

- Scan-history entries: 636 → 974 (957 deduped by fork + 17 from orchestrator)
- Pipeline pending: 0 → 62
- Reports generated: 0 (network-blocked)
- Tracker additions: 0 (no evaluations possible)
- Companies searched: 31 tracked + 12 portals.yml queries
