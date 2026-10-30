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

## Blockers

- **Network access**: External domains (greenhouse.io, careers.*.com, jobs.*.com) blocked by session network policy. Cannot verify listings or fetch JDs for evaluation.
- **No evaluations this run**: Full evaluations deferred. Pipeline.md populated for next session with network access.

## Action Items for Next Run

1. Verify all 45 pending URLs (are they still active? what are the actual titles?)
2. Evaluate top candidates against skills model (CS-1 through CS-7)
3. Focus on: UHG remote TPM roles (strong CS-1 fit), Citi NY PM leads (CS-5/CS-7 regulated delivery), Anthropic PM/TPM roles (AI-adjacent)
4. Consider adding recency qualifiers to search queries (technique from 2026-09-28 scan)
5. Enable network access for the cloud session to allow full verification

## Stats

- Scan-history entries: 636 → 957 (after dedup)
- Pipeline pending: 0 → 45
- Reports generated: 0 (network-blocked)
- Tracker additions: 0 (no evaluations possible)
