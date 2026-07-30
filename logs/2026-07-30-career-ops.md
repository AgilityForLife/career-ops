### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, LinkedIn, and company-specific portals
  - New jobs found: 23 unique URLs identified across all portals
  - Jobs evaluated: 8 full evaluation reports generated
  - Applications prepared: 0 (evaluations only; no auto-submit per safety rule)
  - Primary roles: 5 (Nava PBC, Wilson Elser, Capital Technology Group, AHEAD, HealthVerity)
  - Secondary roles: 3 (CentralReach, Grant Street Group, Wikimedia Foundation)
  - Rejected: 3 (webAI 2.7/5 low CS, Flywheel Digital 2.4/5 wrong domain, North Point Technology clearance required)
  - Skipped (insufficient info/wrong location/domain): 10 (3Cloud Philippines, Hudl Chicago, AccuWeather mobile domain, Airtable product role, G-P seniority mismatch, Omada Health AI transformation, Life360 AI product, Apply Digital insufficient info, Capital Rx insufficient, WPP insufficient, Edgesource insufficient)

- Key Decisions:
  - Included Wikimedia Foundation (2.8/5) and HealthVerity (2.9/5) as borderline/strategic exceptions despite being below 3.0 threshold — Wikimedia for exceptional comp ($126K-$192K), HealthVerity for healthcare domain adjacency to Sanofi experience
  - Rejected webAI despite being an AI company (secondary target) because only 2 CS engaged and insufficient JD detail
  - Classified Grant Street Group as SECONDARY despite excellent comp ($150K-$225K) because client-facing SaaS implementation delivery differs from Erick's internal enterprise delivery background
  - Used Agile resume for all PRIMARY SM/Agile roles; Technical PM resume for SECONDARY TPM/PM roles

- What Worked:
  - WebSearch successfully retrieved JD details from Google cache when Greenhouse/Lever direct fetches returned 403 errors
  - Parallel search across 12 portal queries produced 23 unique new URLs in a single batch
  - Skills-model.md scoring framework provided consistent, defensible evaluations across all 8 reports

- What Failed:
  - WebFetch returned 403 Forbidden for all direct Greenhouse and Lever URLs (both board pages and API endpoints) — proxy blocking
  - Greenhouse boards API also blocked (403) — previously available in earlier sessions
  - Could not generate PDFs in batch mode (no Playwright available)

- Friction:
  - 403 errors on job board direct fetches required fallback to Google search for JD details — this added latency and resulted in less complete JD information for some roles
  - Normalize-statuses.mjs converts English canonical labels to Spanish aliases ("Evaluated" → "Evaluada") — minor cosmetic issue but could confuse English-only users

- Missing Context:
  - Full JD text for several roles (only search snippet summaries available due to 403 blocks)
  - webAI qualifications section not found in search results
  - Exact compensation details for Nava PBC and some other roles

- What To Do Differently:
  - Consider adding Google cached URL fetching as a primary fallback strategy when direct board fetches fail
  - Explore whether Playwright-based scraping can be scheduled separately for full JD retrieval

- Reusable Insight:
  - The 3-4 CS engagement range (score 3.0-3.9) produces the highest volume of genuine-fit candidates — most roles below 3.0 have fundamental positioning mismatches, while 4.0+ roles are rare. Focus pipeline energy on the 3.0-3.9 band and optimize application quality there.

- Top Mistake:
  - Attempted direct Greenhouse API calls before discovering the proxy blocks them — wasted 5 API calls that could have been Google searches instead

- Top Improvement Opportunity:
  - Automate the WebSearch-based JD extraction as the default path (skip WebFetch for Greenhouse/Lever entirely) to eliminate the 403 failure mode and reduce latency

## Portal Scan
- Portals scanned: 12 queries (Greenhouse TPM/PM, Greenhouse Agile/SM, Ashby PM/SM, Lever PM/SM, Greenhouse AI PM, LinkedIn Contract, Dice Contract, Anthropic API, G-P AI, company-specific)
- New jobs detected: 23 unique URLs
- Duplicates filtered: 1 (Arlo Solutions already in scan-history from 2026-04-06)
- Any anomalies: All Greenhouse/Lever direct fetches returned 403 (proxy block); Anthropic API returned 403; used Google search fallback for JD details

## Batch Summary
- Total processed: 8 evaluations + 3 rejections + 12 skips = 23 URLs reviewed
- Strong fits (3.5+): 2 (Nava PBC 3.7/5, Wilson Elser 3.5/5)
- Moderate fits (3.0-3.4): 4 (Capital Technology Group 3.2/5, AHEAD 3.1/5, Grant Street Group 3.1/5, CentralReach 3.0/5)
- Weak fits (below 3.0): 2 (HealthVerity 2.9/5, Wikimedia Foundation 2.8/5 — both included as strategic exceptions)
- Unclear roles: 0
- Patterns noticed: Strong market demand for Scrum Master + Agile Coach roles; many now require SAFe experience (aligns well with SPC6). Remote PM/SM roles with $100K-$150K comp are common. Contract/1099 PM roles appearing more frequently than last scan. Government contractor roles (Nava, Capital Technology Group) are a growing segment.

## Job Evaluations

### Job Evaluation: Nava PBC — 1099 PM (Scrum Master)
- Role classification: PRIMARY
- Why selected: 1099 contract (preferred comp type), remote, SAFe+SM requirements, government delivery, 4 CS engaged
- Resume chosen: Agile
- Key strengths match: SAFe SPC6+SSM, enterprise delivery scale, cloud infrastructure programs, regulated delivery
- Key gaps: No direct federal government experience (mitigated by pharma+financial regulated delivery)
- Confidence (1–10): 8

### Job Evaluation: Wilson Elser — Senior SM/Agile PM
- Role classification: PRIMARY
- Why selected: $135K-$150K strong comp, NYC accessible, DevOps+CI/CD requirement matches CS-3, 4 CS engaged
- Resume chosen: Agile
- Key strengths match: SAFe coaching, DevOps governance, organizational transformation, cross-functional delivery
- Key gaps: Legal industry domain, no direct legal software experience
- Confidence (1–10): 7

### Job Evaluation: Capital Technology Group — Scrum Master
- Role classification: PRIMARY
- Why selected: Remote, $110K-$140K, SAFe explicitly required, federal gov experience desired
- Resume chosen: Agile
- Key strengths match: SAFe SPC6, enterprise delivery scale, stakeholder engagement
- Key gaps: No direct federal government experience, technology consulting context differs from product delivery
- Confidence (1–10): 6

### Job Evaluation: CentralReach — Technical PM
- Role classification: SECONDARY
- Why selected: Holmdel NJ local, $110K-$125K, healthcare/HIPAA regulated, enterprise PMO
- Resume chosen: Technical PM
- Key strengths match: Enterprise PM, cross-functional stakeholder alignment, regulated delivery (Sanofi pharma)
- Key gaps: ABA/IDD healthcare domain, no Agile/SAFe emphasis (underutilizes SPC6), HIPAA-specific experience
- Confidence (1–10): 5

### Job Evaluation: AHEAD — Senior Scrum Master
- Role classification: PRIMARY
- Why selected: Remote, $125K-$140K strong comp, Agile facilitation + coaching focus
- Resume chosen: Agile
- Key strengths match: Multi-team Agile coaching (ARTs at Verisk), Scrum framework mastery, SAFe SPC6
- Key gaps: IT consulting context, no cloud/DevOps emphasis (strongest differentiators not engaged)
- Confidence (1–10): 6

### Job Evaluation: Grant Street Group — Senior PM
- Role classification: SECONDARY
- Why selected: Remote, $150K-$225K exceptional comp, government+financial regulated delivery
- Resume chosen: Technical PM
- Key strengths match: Enterprise program delivery scale, regulated environments, multiple concurrent programs
- Key gaps: Client-facing SaaS implementation vs internal enterprise delivery, no Agile/SAFe emphasis
- Confidence (1–10): 6

### Job Evaluation: Wikimedia Foundation — Lead TPM
- Role classification: SECONDARY (strategic exception)
- Why selected: Remote, $126K-$192K exceptional comp, CS-1+CS-5 strongly engaged
- Resume chosen: Technical PM
- Key strengths match: Cross-functional/cross-departmental programs, complex systems, enterprise delivery at scale
- Key gaps: Only 2 CS engaged (below 3.0 threshold), non-profit/open-source context, no cloud/data/SAFe engagement
- Confidence (1–10): 4

### Job Evaluation: HealthVerity — Senior PM (SM)
- Role classification: SECONDARY (borderline)
- Why selected: Healthcare/pharma-adjacent, PM+SM hybrid, PMP/CSM preferred
- Resume chosen: Agile
- Key strengths match: PMP+SAFe SSM, Jira/Confluence expertise, healthcare-adjacent (Sanofi R&D)
- Key gaps: Philadelphia 2x/week hybrid, wide salary range ($65K-$155K), potentially junior scope
- Confidence (1–10): 4

## Resume Decision
- Resume used: Agile resume (5 roles) / Technical PM resume (3 roles)
- Reason: Agile resume for PRIMARY SM/Agile roles; Technical PM resume for SECONDARY TPM/PM roles
- Any ambiguity: Wilson Elser could go either way but DevOps+CI/CD+organizational transformation emphasis favors Agile resume
- Missing data from cv.md: None

## Final State
- Total outputs: 8 evaluation reports, 8 tracker additions, 23 scan-history entries, pipeline updated
- Reports generated: 8 (007-014)
- Applications prepared: 0 (evaluations only; no PDFs in batch mode)
- Any failed steps: PDF generation (no Playwright in batch mode), direct job board URL fetches (403 proxy blocks)
- Any skipped steps: None
- Confidence (1–10): 7
