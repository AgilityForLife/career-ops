# Session Log: career-ops daily run — 2026-10-29

## Session: career-ops daily run

- **Objective:** Execute job scan, evaluation, and application prep pipeline
- **Last scan:** 2026-09-28 (31-day gap)
- **Branch:** claude/magical-gauss-d133uc

---

## Portal Scan
- **Portals scanned:** 31 tracked companies + 12 search queries + Greenhouse API (Anthropic/Glean) via WebSearch fallback
- **Segments:** Financial+Healthcare (done), Consulting+Gov (done), BigTech+AI (running), Search Queries (done), Anthropic/Glean API fallback (done)
- **New jobs detected:** 25 URLs logged to scan-history (33 total including existing dupes filtered)
- **Duplicates filtered:** ~20+ URLs already in scan-history.tsv from prior scans
- **Anomalies:**
  - WebFetch DNS blocked for ALL career site domains (ENOTFOUND) — evaluations based on WebSearch snippets only, marked "unconfirmed (batch mode)"
  - Greenhouse API (boards-api.greenhouse.io) also blocked — Anthropic/Glean evaluated via WebSearch
  - Goldman Sachs scan_query non-functional for 3+ consecutive scans (returns aggregator noise only)
  - MetLife stale index (2021-2023 vintage only); Merck returns 410-Gone only

---

## Execution Summary
- **Reports generated:** #427, #486–495 (11 reports total: 1 coordinator + 5 finance-health + 5 consulting-gov)
- **Jobs evaluated:** 11 (7 scored 3.0+, 4 below threshold or skipped)
- **Applications prepared:** 0 (evaluations only — no auto-submit per policy)
- **Primary roles found:** 4
  - Cognizant Sr. TPM / Delivery Manager, NJ — 3.6/5 (HIGH PRIORITY, exact title match)
  - Anthropic TPM, Enterprise Readiness, NYC/SF — 3.5/5 ($365K-$435K; may be closed — VERIFY)
  - Citi TPM Applied AI & Agents (SVP), NYC — 3.3/5 ($192K-$288K)
  - EY CT Tech Activation PM, Hoboken NJ — 3.2/5
- **Secondary roles found:** 4
  - Cognizant Consulting Manager Healthcare PM, Edison NJ — 3.3/5
  - Deloitte Technical Project and Program Manager — 3.3/5 (SAFe RTE, location risk)
  - Citi AI Digital Senior Program Lead — 3.1/5 (likely closed)
  - Deloitte IT Program Manager Strategy & Ops — 3.0/5
- **Rejected/Skipped:** 14
  - Prudential Director AI Product & MarTech — 2.0/5 (domain wall)
  - UnitedHealth TPM Remote — 2.5/5 (comp below floor)
  - UnitedHealth Sr PM Cardiology — 2.4/5 (comp + domain)
  - Leidos Sr PM/PMO Lead — clearance required (TS/SCI)
  - Deloitte Scrum Master PDM Engineer II — mid-level
  - Anthropic TPM Billing — 2.5/5 (billing domain, 2 CS)
  - Anthropic TPM GTM Systems — 2.5/5 (Salesforce/GTM, Tier 4)
  - Anthropic TPM Discovery — 2.0/5 (ML/research background required)
  - Glean Sr TPM Billing — posting unclear
  - Glean Manager Delivery Excellence — customer-facing PS
  - Glean Sr TPM Connectors — Palo Alto/SF location
  - Glean AI Success Manager East — 2.0/5 (customer success, underlevels)
  - Parsons NEPA/PD&E PM — domain mismatch
  - Deloitte Tax Transformation PM — domain mismatch

---

## Key Decisions
- Evaluated from WebSearch snippets only (WebFetch blocked) — all reports marked "unconfirmed (batch mode)"
- Skipped Leidos CISA role despite strong PM title — TS/SCI clearance is a hard deal-breaker
- Skipped Parsons NEPA/PD&E PM — environmental assessment domain mismatch
- Skipped Deloitte Tax Transformation PM — tax domain mismatch
- Prioritized Cognizant Sr TPM/DM as #1 action item — exact title + NJ location match

## What Worked
- Parallel agent scanning across 4 segments reduced wall-clock time
- Dedup against scan-history.tsv effectively filtered ~20+ previously seen URLs
- CS Engagement Test correctly identified high-priority Cognizant Sr TPM role

## What Failed
- WebFetch DNS resolution blocked for all career site domains — unable to fetch JD text for deeper evaluation
- 31-day scan gap means some postings may have closed between posting and this scan

## Friction
- Cloud environment network policy blocks direct career site access (WebFetch ENOTFOUND)
- Merge script created duplicate tracker entries when TSV files overlapped with pre-numbered entries

## Missing Context
- Full JD text for all candidates (WebFetch blocked)
- Comp ranges for EY, Cognizant, and Deloitte roles
- Remote eligibility confirmation for Deloitte Williamsville NY role

## What To Do Differently
- Pre-check WebFetch availability before launching parallel agents
- Consider shorter scan intervals (weekly) to reduce stale posting risk
- Number TSV files based on latest report count at write time, not pre-allocated

## Reusable Insight
- NJ-headquartered companies (Cognizant Teaneck, Prudential Newark, EY Hoboken) consistently produce location-matched results
- Healthcare vertical continues to be a strong fit vector via Sanofi experience (CS-5/CS-7)

## Top Mistake
- TSV numbering collision created duplicate tracker entries (fixed manually)

## Top Improvement Opportunity
- Implement WebFetch fallback detection at scan start — if blocked, switch to WebSearch-only mode immediately and adjust evaluation depth expectations upfront
