# Session: career-ops daily run — 2026-08-24

## Objective
Execute job scan, evaluation, and application prep pipeline.

## Portal Scan
- Portals scanned: 12 search queries across Greenhouse, Ashby, Lever, Dice (PM/TPM/SM, Agile Coach, AI Transformation, PMO/Portfolio, contract roles)
- Tracked companies checked: Anthropic (10 new TPM roles found), plus broad ATS scans
- New jobs detected: ~48 unique new postings identified
- Duplicates filtered: Cross-referenced all results against 166 existing entries in scan-history.tsv
- Any anomalies: WebFetch blocked for all job board domains (Greenhouse, Ashby, Lever) — same as 2026-08-11 run. All evaluations based on WebSearch JD summaries only.

## Job Evaluations

### 053 — GitLab | Senior PM, Enterprise Technology & AI
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote async-first, enterprise tech + AI programs, 6+ years PM, partners across Finance/Sales/Marketing/People/Product/Security
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise delivery scale), CS-2 (data platforms), CS-4 (exec reporting), CS-5 (cross-functional alignment)
- Key gaps: AI-enabled workflow depth, async-native documentation culture
- Score: 4.1/5
- Confidence: 8/10

### 054 — Toast | Senior Technical Program Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Remote US, 7+ years TPM, complex R&D delivery, SDLC depth required
- Resume chosen: Technical PM
- Key strengths match: CS-1 (program delivery), CS-3 (SDLC/DevOps governance), CS-5 (cross-functional)
- Key gaps: Restaurant domain, product-feature delivery vs infrastructure, no CS-2 leverage
- Score: 3.6/5
- Confidence: 7/10

### 055 — Myriad360 | PMO Manager (Remote)
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote, manages PM team across cloud/DC/security practices, $140-195K, executive portfolio reviews
- Resume chosen: Technical PM
- Key strengths match: CS-1 (program delivery), CS-2 (cloud/data center), CS-3 (governance), CS-4 (exec reporting), CS-5 (cross-functional)
- Key gaps: People-management of PM team (vs coaching teams), professional services delivery model (vs internal enterprise)
- Score: 3.8/5
- Confidence: 7/10

### 056 — Jencap | Senior Project Manager, PMO
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: NY/NJ hybrid or remote, insurance PMO (Verisk domain overlap), $110-175K
- Resume chosen: Technical PM (leaning PM)
- Key strengths match: CS-1 (program delivery), CS-4 (exec reporting), CS-5 (stakeholder alignment), CS-7 (regulated insurance)
- Key gaps: "Basic PM methodology" may underlevel, no technical platform delivery, comp low end
- Score: 3.4/5
- Confidence: 6/10

### 057 — Rula | Security TPM (Remote)
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Remote US, security governance at intersection of Security/Engineering/Compliance, healthcare regulated
- Resume chosen: Technical PM
- Key strengths match: CS-1 (program delivery), CS-3 (governance), CS-5 (cross-functional), CS-7 (compliance/regulated)
- Key gaps: Security-program domain depth, no CS-2 leverage, reporting to CISO requires security fluency
- Score: 3.3/5
- Confidence: 6/10

## Batch Summary
- Total processed: 5 evaluated + 43 logged to scan-history
- Strong fits (4.0+): 1 (GitLab 4.1/5)
- Solid fits (3.5-3.9): 2 (Myriad360 3.8/5, Toast 3.6/5)
- Marginal fits (3.0-3.4): 2 (Jencap 3.4/5, Rula 3.3/5)
- Rejected: 0 (below-threshold candidates logged directly to scan-history)
- Patterns noticed: Market continues to show strong demand for TPM/PM roles with AI-adjacent framing; Anthropic has 10+ active TPM positions but all require SF/NYC office presence + specialized domains; remote-first companies (GitLab, Toast) offer best location fit; PMO leadership roles emerging as a viable trajectory

## Resume Decision
- Resume used: Technical PM for all 5 evaluations
- Reason: All roles are TPM/PM/PMO roles fitting the technical delivery lead framing
- Any ambiguity: GitLab role could also benefit from an Agile-flavored resume given the transformation aspect, but CS-1+CS-2 lead is stronger
- Missing data from cv.md: None

## Final State
- Total outputs: 5 reports + 5 tracker additions + 48 scan-history entries
- Reports generated: 053-057
- Applications prepared: 0 (evaluation only; no auto-submit per safety rules)
- Any failed steps: WebFetch blocked for all job board domains (mitigated with WebSearch summaries)
- Any skipped steps: PDF generation (WebFetch blocked prevents full JD retrieval for tailored CVs)
- Confidence: 7/10

## Execution Summary
- Portals scanned: 12 search queries
- New jobs found: 48
- Jobs evaluated: 5
- Applications prepared: 0 (evaluate + prepare only)
- Primary roles: 2 (GitLab 4.1, Myriad360 3.8)
- Secondary roles: 3 (Toast 3.6, Jencap 3.4, Rula 3.3)
- Rejected: 0

## Key Decisions
- Prioritized GitLab as top target — best CS engagement (5/7) + remote-first + excellent comp range
- Logged 10 new Anthropic TPM roles to scan-history without full evaluation — all require SF/NYC office + specialized domains (Silicon, Research, Compute, etc.) that are hard mismatches
- Classified Myriad360 PMO Manager as PRIMARY despite people-management gap — PMO leadership is natural career evolution

## What Worked
- Parallel WebSearch queries across 12 portal configurations covered broad surface area efficiently
- Cross-referencing against 166-entry scan-history prevented duplicate evaluations
- Core Strength Engagement Test provided consistent scoring framework across diverse roles

## What Failed
- WebFetch blocked for all job board domains — cannot retrieve full JDs for detailed evaluation or tailored CV generation
- Cannot verify if postings are still active without Playwright or WebFetch

## Friction
- WebFetch egress blocking forces evaluation on WebSearch snippets only — lower confidence in scoring accuracy

## Missing Context
- Full JD text for all 5 evaluated roles (WebFetch blocked)
- Exact compensation data for Toast and GitLab roles
- Whether Anaplan AI Transformation role is remote-eligible or SF-only

## What To Do Differently
- Consider using Greenhouse board API endpoints (boards-api.greenhouse.io) which may not be egress-blocked, to retrieve structured JD data
- Batch API calls for Anthropic/Ashby boards to get comprehensive role listings in one query

## Reusable Insight
- GitLab's "Enterprise Technology & AI" framing is the ideal archetype: PM role that combines enterprise delivery + AI without requiring deep ML/AI engineering. Look for this "tech + AI governance" pattern in future scans.

## Top Mistake
- None critical. Minor: could have started with board API endpoints before falling back to WebSearch.

## Top Improvement Opportunity
- Implement Greenhouse/Ashby board API integration to bypass WebFetch egress blocks and get structured JD data directly.
