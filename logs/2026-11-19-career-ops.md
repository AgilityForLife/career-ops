# Career-Ops Daily Pipeline Log — 2026-11-19

## Run Summary

| Metric | Value |
|--------|-------|
| Run Date | 2026-11-19 |
| Last Scan | 2026-11-13 (6 days ago) |
| Session Type | Scheduled routine (cloud, network-restricted) |
| Scan Groups | 4 (Big Tech+AI, Consulting+Gov, Financial+Healthcare, 12 portals queries) |
| New URLs Found | 19 (7 Citi, 3 UnitedHealth, 7 Anthropic unverified, 1 CoreWeave, 1 RxSense) |
| New URLs Added to Pipeline | 11 |
| Evaluations Completed | 13 (reports 439-447, re-eval #343) |
| Tracker Entries Added | 11 new + 1 updated (#343) |
| Pipeline Warnings | 1 (known false positive: Glean #108/#109 dup) |
| Applications Submitted | 0 (per SUBMISSION GATE rule) |

## Network Limitations

Career sites (jobs.citi.com, careers.cognizant.com, job-boards.greenhouse.io, wellfound.com, etc.) were unreachable via WebFetch due to cloud session network policy restrictions. All evaluations done via WebSearch context only. Reports marked: `**Verification:** unconfirmed (batch mode — network-restricted session)`.

## Evaluations (13 reports: #439-#447 + re-eval #343)

| Tracker # | Company | Role | Score | Recommendation |
|-----------|---------|------|-------|----------------|
| 447 | JPMorgan Chase | AI Principal TPM | 4.2/5 | **TOP PICK** — NYC hybrid; $194.7-285K; closes Dec 10; CS-1/CS-2/CS-5/CS-7 |
| 450 | EvolutionIQ | PM (AI/Insurtech SaaS) | 4.0/5 | APPLY — NYC/Remote; security+compliance; CS-1/CS-2/CS-5/CS-7 |
| 443 | Nava PBC | Program Manager (Gov/SAFe) | 3.9/5 | APPLY — Remote US; $157.5-177.3K; SAFe=SPC6 differentiator |
| 442 | CoreWeave | TPM Product Engineering | 3.8/5 | APPLY — Livingston NJ/NYC; ~$150-190K; CS-1/CS-2/CS-5 |
| 444 | JPMorgan Chase | Lead TPM Strategic Initiatives | 3.7/5 | APPLY — NYC/JC; $142.5-190K; CS-1/CS-3/CS-5/CS-7 |
| 343 | UnitedHealth | Director Tech TPM | 3.7/5 | APPLY — Remote; ~$134.6-230.8K; re-eval 3.5→3.7 |
| 449 | UnitedHealth | Principal Cybersecurity TPM | 3.7/5 | APPLY — Remote; $113-193K; M&A due diligence |
| 453 | Citi | Program Management Lead VP | 3.7/5 | APPLY — NYC hybrid; VP; AI/workflow automation |
| 448 | EY | Technical PM - AI | 3.4/5 | APPLY w/ caveats — Hoboken NJ; $102.5-187.9K |
| 445 | Citi | PM Lead Product Dev Transform VP | 3.4/5 | APPLY w/ caveats — NYC; VP/C13; CS-2 absent |
| 446 | Cognizant | Sr Consulting PM Teaneck | 3.3/5 | APPLY — Teaneck NJ; $134.5-158.5K; URGENT closes Nov 27 |
| 452 | Phizenix | Release Train Engineer | 3.0/5 | Borderline — NYC contract; $70-75/hr; SAFe RTE; Tier 4 capped |
| 451 | Airtable | PM AI Programs | 2.8/5 | SKIP — SF only; weak CS engagement |

## Scan Results — New URLs by Source

### Big Tech + AI/Infra
- CoreWeave: 1 new (Bare Metal TPM — Sunnyvale/Bellevue, not NJ/NY)
- Anthropic: 7 new unverified Greenhouse IDs (titles unknown)
- Others: 0 genuinely new (IBM, ServiceNow, Salesforce, Microsoft, AWS, Google, OpenAI, Palantir, Glean all saturated)

### Financial Services
- Citi: 7 new URLs (PM Senior Lead Wealth Lending SVP, PM Senior Lead $203-240K, SVP Equities Tech PM, IT PM SVP $163-245K, PM Lead x2, Program Sr Group Mgr Director)
- JPMorgan, Goldman Sachs, Prudential, MetLife: 0 new

### UnitedHealth Group
- 3 new URLs: TPM Remote (Richardson), Sr TPM Remote (Minneapolis), Principal TPM Remote/Hybrid MN/DC

### Consulting + Gov / Healthcare
- No genuinely new URLs (Deloitte, EY, Cognizant, Booz Allen, J&J all returning same entries)

## Pipeline State

- **Pending URLs total:** ~74 (63 from Nov 13 + 11 new from Nov 19)
- **Evaluated this run:** 13 (11 new + 1 re-eval + 1 SKIP)
- **Previously evaluated (Nov 13):** 12 (reports 427-438)
- **Still pending (unevaluated):** ~50
- **Apply-eligible (3.0+ score) from this run:** 12 of 13 (Airtable 2.8 → SKIP)

## High-Priority Action Items for Erick

1. **TOP PICK — JPMorgan AI Principal TPM (#447):** 4.2/5, NYC hybrid, $194.7-285K. Closes Dec 10. AI+Data Platforms, CS-1/CS-2/CS-5/CS-7 all engaged.
2. **EvolutionIQ PM (#450):** 4.0/5, NYC/Remote. AI insurtech + security/compliance. Strong CS match.
3. **URGENT — Cognizant Teaneck (#446):** 3.3/5, closes Nov 27. 8 days left. $134.5-158.5K.
4. **Nava Gov/SAFe (#443):** 3.9/5, Remote, $157-177K. SAFe = SPC6 differentiator. Verify still open.
5. **CoreWeave TPM (#442):** 3.8/5, Livingston NJ, ~$150-190K. Best NJ-local option.
6. From Nov 13 backlog: Deloitte DevOps TPM (#429, 4.2/5) and Citi TPM Applied AI (#433, 4.0/5) remain highest-priority unapplied.

## Pipeline Health Check (Final)

- `merge-tracker.mjs`: all TSVs merged successfully (0 added, 0 updated, 2 skipped — already present)
- `verify-pipeline.mjs`: 0 errors, 1 warning (pre-existing Glean #108/#109 duplicate)
- `normalize-statuses.mjs`: 0 changes needed (Evaluada alias recognized)
- Tracker: 294 rows total

## Submission Gate

**NO applications were auto-submitted.** All 6 evaluations are "Evaluated" status, held for Erick's review per Section 15 SUBMISSION GATE rule.
