# Career-Ops Scan Log — 2026-11-04

**Scan type:** Scheduled daily pipeline (automated)
**Last scan:** 2026-09-28 (37-day gap)
**Branch:** `claude/magical-gauss-75i316`

---

## Summary

- **Total new URLs found:** 78 (across search queries + tracked companies)
- **Marked "evaluate" (highest priority):** 16
- **Marked "added" (queue for review):** ~15
- **Skipped (with reason):** ~25 (location-only, domain mismatch, clearance required, marketing/HR roles, CoreWeave saturation)
- **Duplicate entries removed:** 35 (overlap between search queries and tracked-company agents)
- **Reports generated:** 19 (427-447; main agent + background agents evaluated via WebSearch-based JD reconstruction)
- **Tracker entries added:** 427-451 (19 reports, some tracker numbering offset from report numbering)
- **Top leads (score 3.5+):** 4 — Citi AI (4.1), Tessera Labs (3.9), GitLab (3.8), UnitedHealth (3.5)
- **Applications submitted:** 0 (NEVER auto-submit)

## Network Policy Limitation

All external job board domains were blocked by the cloud session's network policy:
- jobs.ashbyhq.com, job-boards.greenhouse.io, boards.greenhouse.io, jobs.lever.co
- jobs.citi.com, amazon.jobs, builtin.com, smartrecruiters.com
- careers.unitedhealthgroup.com, apply.deloitte.com, careers.leidos.com
- www.accenture.com, www.metlifecareers.com

**Impact:** WebSearch found URLs successfully, but WebFetch could not retrieve individual JDs for evaluation. All 16 evaluate-priority URLs are queued in `data/pipeline.md` → Pending for manual evaluation in a session with broader network access.

## Channels Scanned

### Search Queries (12 queries from portals.yml)
All 12 executed via WebSearch in 3 parallel batches of 4:
1. Greenhouse PM & Delivery Lead → 2 new URLs
2. Greenhouse Agile Coach & Scrum Master → 3 new URLs
3. Ashby PM & Agile → 4 new URLs
4. Lever PM & Program Manager → 2 new URLs
5. Lever Agile Coach & Scrum Master → 1 new URL
6. Greenhouse AI PM & Transformation → 7 new URLs
7. Ashby AI PM & Delivery → 5 new URLs
8. Greenhouse PMO & Portfolio → 2 new URLs
9. LinkedIn Contract PM → 0 (aggregator pages only)
10. Dice Contract Technical PM → 0 (aggregator pages only)
11. ClearanceJobs/Gov PM → 0 (aggregator pages only)
12. ProCore/Construction PM → 0 (aggregator pages only)

### Tracked Companies (31 companies, 3 parallel agents)
**Big Tech & AI agent:** IBM, ServiceNow, Salesforce, Microsoft, AWS, Google, Anthropic, OpenAI, Palantir, Glean, CoreWeave
- Found: Anthropic TPM Enterprise Readiness, GitLab Principal TPM, Amazon/Audible Senior TPM, Amazon TPM III & Senior TPM, Glean TPM Connectors + Delivery Excellence Manager, CoreWeave TPM
- Skipped: OpenAI (all SF-only), CoreWeave (saturated), Anthropic non-delivery roles

**Consulting & Gov agent:** Accenture, Deloitte, KPMG, PwC, EY, Booz Allen, Leidos, SAIC, Cognizant, WSP, AECOM, Parsons
- Found: Accenture SM Morristown NJ, Deloitte Technical SM/PM/BA Remote, Leidos Sr PM GIS Newark NJ
- Skipped: AECOM (civil eng PE required), Booz Allen (onsite-only stale)

**Finance & Healthcare agent:** JPMorgan, Citi, Goldman, Prudential, MetLife, J&J, Merck, UnitedHealth
- Found: Citi TPM Applied AI & Agents SVP, UnitedHealth Technical PM Remote, MetLife Agile PM + Senior Agile PM, ServiceNow Sr Portfolio Release Manager
- Skipped: J&J (Australia location), Microsoft (Redmond no remote), Leidos (Newark onsite-only)

## Top 16 Evaluate-Priority Leads

| # | Company | Role | Why Priority |
|---|---------|------|-------------|
| 1 | Citi | TPM Applied AI & Agents (SVP) | AI + financial services = CS-1/CS-5/CS-7 |
| 2 | Anthropic | TPM Enterprise Readiness | Premium AI company, enterprise delivery |
| 3 | Tessera Labs | Senior TPM Enterprise Modernization & AI Delivery | Enterprise mod + AI = CS-1/CS-2 |
| 4 | GitLab | Principal TPM | Principal-level, DevOps platform = CS-3 |
| 5 | Amazon/Audible | Senior TPM | Big tech, strong CS-1 |
| 6 | UnitedHealth | Technical PM (Remote) | Healthcare = CS-7, remote |
| 7 | Glean | TPM Connectors | AI search platform |
| 8 | Glean | Delivery Excellence Manager (Remote) | AI company, delivery-focused |
| 9 | ServiceNow | Sr Portfolio Release Manager (Remote) | CS-1/CS-3, remote |
| 10 | Veeva Systems | Senior PM (NJ Lyndhurst) | NJ, pharma platform = CS-5/CS-7 |
| 11 | Deloitte | Technical SM/PM/BA (Remote) | Major consulting, remote |
| 12 | MetLife | Senior Agile PM | Financial services = CS-5/CS-7 |
| 13 | MetLife | Agile PM (NYC) | Financial services |
| 14 | Accenture | Scrum Master (Morristown NJ) | NJ location, consulting |
| 15 | Leidos | Sr PM GIS (Newark NJ) | Gov contractor, NJ |
| 16 | CoreWeave | TPM | AI infra (saturated) |

## Recommendations

1. **Run next evaluation in a session with broader network access** — the 16 evaluate-priority URLs need JD fetching to score against CS-1 through CS-7
2. **Top 5 to evaluate first:** Citi SVP AI, Anthropic Enterprise Readiness, Tessera Labs, GitLab Principal TPM, Amazon/Audible Senior TPM
3. **Contract/Gov/Construction queries remain low-yield** — only return aggregator category pages; consider disabling or refreshing query phrasing
4. **37-day gap produced significant new leads** — suggests weekly scan cadence is sufficient; the market refreshes meaningfully over 4+ weeks
5. **Add network domains to session allowlist** for future automated scans: `jobs.ashbyhq.com`, `job-boards.greenhouse.io`, `boards.greenhouse.io`, `jobs.lever.co`, `jobs.citi.com`, `amazon.jobs`, `smartrecruiters.com`

## Files Modified
- `data/scan-history.tsv` — 43 net new entries (78 found, 35 deduped)
- `data/pipeline.md` — 28+ URLs queued in Pending section
- `data/applications.md` — 19 new evaluated entries (427-451)
- `reports/` — 19 new evaluation reports (427-447)
- `batch/tracker-additions/` — TSV additions merged
- `logs/2026-11-04-career-ops.md` — this file

## Pipeline Health
- verify-pipeline.mjs: 0 errors, 1 warning (known #108/#109 Glean false positive)
- All report links valid
- All scores valid
- No pending TSVs
