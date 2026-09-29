# Career-Ops Daily Pipeline — 2026-09-29

**Trigger:** Scheduled (trig_01Bofp9xKjSeVHx4mGSgduQb) at 05:06 UTC
**Branch:** claude/magical-gauss-v0m25b

---

## Scan Results

- **Queries executed:** 12 search queries across portals.yml
- **New URLs found:** 33 (search queries + Big Tech trackers)
- **Portal saturation:** Both search-query and consulting/gov segments confirmed saturated (0 new for 3-4+ scans)
- **scan-history.tsv:** 670 → 681 entries (+11 batch 2 logged this commit)

## Pre-Filter (Deal-Breaker Triage)

| Reason | Count | Examples |
|--------|-------|---------|
| Amazon 5-day RTO | 7 | Multiple TPM/PM roles |
| SF relocation | 5 | OpenAI (4), Anthropic (1) |
| Onsite-only | 3 | Glean Palo Alto, Amazon NYC |
| Location mismatch | 3 | Santa Clara, other |
| Clearance required | 1 | Palantir Gov |
| Domain/info insufficient | 2 | VantageScore, MojoRank |
| **Total skipped** | **21** | |

## Evaluations

### Batch 1 — Search Query Finds (10 evaluated)

| # | Company | Role | Score | Rec |
|---|---------|------|-------|-----|
| 428 | Coretelligent | Senior TPM | 3.0/5 | APPLY w/ caveats |
| 430 | Capital Technology Group | Scrum Master (USCIS) | 2.7/5 | REJECTED |
| 434 | Lazer | Sr Delivery Mgr, Enterprise AI | 2.6/5 | REJECTED |
| 435 | Orium | Director, PMO | 2.5/5 | REJECTED |
| 427 | Omni | Technical PM (Contract) | 2.5/5 | REJECTED |
| 429 | Nimble Gravity | Scrum Master AI Delivery | 2.5/5 | REJECTED |
| 431 | Prelim | Technical PM (NY Remote) | 2.4/5 | REJECTED |
| 432 | RainFocus | Technical PM (Remote) | 2.3/5 | REJECTED |
| 433 | SkySlope | Scrum Master | 1.9/5 | REJECTED |
| 436 | Take-Two Interactive | Director, PMO IT HR | 1.9/5 | REJECTED |

### Batch 2 — Big Tech & AI Trackers (11 evaluated)

| # | Company | Role | Score | Rec |
|---|---------|------|-------|-----|
| 439 | ServiceNow | Staff PM - Platform & AI | 3.7/5 | APPLY w/ caveats |
| 447 | Palantir | TPM - Security | 3.6/5 | PREPARE ONLY (clearance STOP) |
| 441 | ServiceNow | Implementation Mgr - Moveworks | 3.4/5 | APPLY w/ caveats |
| 442 | Microsoft | Technical Program Manager | 3.3/5 | APPLY w/ caveats (low confidence) |
| 443 | CoreWeave | Director, Security TPM | 3.2/5 | APPLY w/ caveats |
| 446 | CoreWeave | Security Compliance TPM | 3.1/5 | APPLY w/ caveats |
| 440 | ServiceNow | Staff TPM - Outbound PM | 3.0/5 | DO NOT APPLY |
| 448 | OpenAI | TPM - Demand Planning S&OP | 2.9/5 | DO NOT APPLY (SF) |
| 444 | CoreWeave | Security Risk TPM | 2.8/5 | DO NOT APPLY |
| 449 | OpenAI | TPM - Sr Support Engineering | 2.7/5 | DO NOT APPLY (SF) |
| 445 | CoreWeave | Staff TPM - Infra & Node | 2.6/5 | DO NOT APPLY |

## Summary

- **Total evaluated:** 21
- **Apply-eligible (≥3.0):** 7
  - ServiceNow Staff PM Platform & AI (3.7) — best find this run
  - Palantir TPM Security (3.6) — repost of #071, clearance STOP
  - ServiceNow Implementation Mgr Moveworks (3.4)
  - Microsoft TPM (3.3) — low confidence, verify location
  - CoreWeave Director Security TPM (3.2) — NJ/Remote
  - CoreWeave Security Compliance TPM (3.1) — may be closed
  - Coretelligent Senior TPM (3.0)
- **Rejected (<3.0 or deal-breaker):** 14
- **Pre-filtered (deal-breaker):** 21
- **Applications.md:** 275 → 296 entries
- **Reports written:** 427-436, 439-449 (gap at 437-438 = skipped candidates)

## Network/Proxy Issues

- All job board domains (greenhouse.io, lever.co, ashbyhq.com, careers.servicenow.com, etc.) blocked by egress proxy (HTTP 403)
- Evaluations used WebSearch fallback for JD summaries
- All reports marked "unconfirmed (batch mode)"

## Pipeline Health

- verify-pipeline.mjs: 0 errors, 1 warning (pre-existing Glean duplicate #108/#109)
- All statuses canonical, all report links valid
