# Session: career-ops daily run — 2026-07-06

## Objective
Execute job scan, evaluation, and application prep pipeline.

## Portal Scan
- Portals scanned: 12 search queries + 6 tracked company searches
- Portals covered: Greenhouse, Lever, Ashby, Dice, LinkedIn, Indeed, ZipRecruiter, plus tracked companies (Anthropic, JPMorgan, CGS Federal, Nava, CompassX, Encora)
- New jobs detected: 7 evaluated (from ~40+ raw results)
- Duplicates filtered: 10 (already in scan-history.tsv from 2026-04-06 batch)
- Anomalies: WebFetch blocked by proxy (403) for all job board domains; used WebSearch for JD extraction instead; all reports marked unconfirmed (batch mode)

## Batch Summary
- Total processed: 7
- Strong fits (4.0+): 2 (CompassX 4.3, Stand Together 4.0)
- Moderate fits (3.0-3.9): 5 (Nava 3.6, Ardent 3.6, CGS Federal 3.3, Toast 3.1, Neon One 3.0)
- Weak fits (<3.0): 0
- Rejected: 0 (all 7 passed minimum threshold)
- Unclear roles: 0

## Job Evaluations

### 007 — CompassX: SM & Agile Coach – Pharma [PRIMARY] — 4.3/5
- Role: Player-Coach Scrum Master + Agile Coach for biotech client
- Why strong: Pharma domain matches Sanofi experience exactly; 1099/C2C preferred format; Jira expertise required; cross-functional delivery across IT/data/regulatory
- CS engaged: CS-1, CS-2 (partial), CS-5, CS-6, CS-7 (5/7)
- Resume: Agile resume, lead with Sanofi pharma experience
- Gaps: Consulting pedigree preferred (Erick is enterprise-internal)
- Confidence: 8/10

### 008 — Stand Together: Agile Practice Lead [PRIMARY] — 4.0/5
- Role: Build Agile practice from scratch, hire/manage Scrum Masters, Jira governance
- Why strong: $151K-$204K; Jira expertise matches perfectly; SPC6 differentiator; leadership dashboards align with Power BI
- CS engaged: CS-1, CS-3 (partial), CS-4, CS-6 (4/7)
- Resume: Agile resume, lead with Verisk ART coaching + Jira enterprise config
- Gaps: Greenfield practice building vs org transformation; direct SM hiring authority unclear
- Confidence: 7/10

### 009 — Nava: Sr. PM (NJ Hybrid) [SECONDARY] — 3.6/5
- Role: Senior PM / Contract Lead for government tech modernization
- Why moderate: NJ hybrid 2-3 days ideal location; Agile+traditional PM match; government health tech
- CS engaged: CS-1, CS-3 (partial), CS-4 (partial), CS-5, CS-7 (partial) (3-4/7)
- Resume: Technical PM resume, lead with Verisk program delivery + stakeholder governance
- Gaps: CMS/Medicare domain unfamiliar; may require citizenship; comp uncertain
- Confidence: 6/10

### 010 — Ardent: Scrum Master (DHS) [PRIMARY] — 3.6/5
- Role: Scrum Master for Department of Homeland Security program
- Why moderate: Remote; SAFe/LeSS valued; government Agile transformation; SPC6 exceeds cert requirement
- CS engaged: CS-1, CS-5, CS-6, CS-7 (4/7)
- Resume: Agile resume, lead with Verisk Agile transformation + regulated delivery
- Gaps: No DHS domain experience; background investigation required; advanced Scrum cert preferred
- Confidence: 7/10

### 011 — CGS Federal: Agile Coach [PRIMARY] — 3.3/5
- Role: Agile Coach for large federal agency DevSecOps transformation
- Why moderate: SAFe SPC match is perfect; enterprise Agile transformation at team+program level
- CS engaged: CS-1, CS-3 (partial), CS-5, CS-6, CS-7 (4-5/7)
- Resume: Agile resume, lead with Verisk ART coaching + SPC6
- Gaps: Master's degree required (significant gap); full-time only; comp ~$67/hr avg
- Confidence: 5/10

### 012 — Neon One: Agile Delivery Manager [PRIMARY] — 3.0/5
- Role: Lead Scrum Masters, Agile delivery for mission-driven tech
- Why borderline: Remote; Agile delivery leadership; PMI-ACP/Jira match
- CS engaged: CS-1 (partial), CS-2 (partial), CS-6 (2-3/7)
- Resume: Agile resume
- Gaps: Smaller organization scale; nonprofit tech; no regulated environment; lower comp likely
- Confidence: 5/10

### 013 — Toast: Senior TPM [SECONDARY] — 3.1/5
- Role: Senior TPM for R&D delivery, restaurant tech platform
- Why borderline: Remote US; Senior TPM title matches; cross-functional program management
- CS engaged: CS-1, CS-2 (partial), CS-3 (partial), CS-5 (partial) (2-3/7)
- Resume: Technical PM resume
- Gaps: Restaurant domain (no regulatory); no SAFe/Agile coaching; comp lower end ($115K-$161K)
- Confidence: 5/10

## Resume Decisions
- Agile resume used: 5 roles (CompassX, Stand Together, Ardent, CGS Federal, Neon One)
- Technical PM resume used: 2 roles (Nava, Toast)
- No resume merging performed (per rules)
- Missing data from cv.md: None — all metrics sourced from cv.md

## Patterns Noticed
- Pharma/biotech Agile Coach demand remains strong — Sanofi experience is a key differentiator
- Federal/government Agile Coach roles consistently value SAFe SPC, but many require advanced degrees or clearances
- Agile Practice Lead / Delivery Manager roles are emerging as a step above Scrum Master, aligning well with Erick's experience level
- Contract/1099 roles are available but less common on traditional job boards — staffing firms like CompassX are the primary channel
- Most job board direct-fetch is blocked from cloud environments — WebSearch provides sufficient JD data for batch evaluation

## Execution Summary
- Portals scanned: 18 total queries
- New jobs found: 7
- Jobs evaluated: 7
- Applications prepared: 0 (PDFs not generated — evaluation only)
- Primary roles: 5 (CompassX, Stand Together, Ardent, CGS Federal, Neon One)
- Secondary roles: 2 (Nava, Toast)
- Rejected: 0

## Key Decisions
- Focused on roles scoring 3.0+ to avoid over-filtering per instructions
- Used WebSearch for JD extraction when WebFetch was blocked by proxy
- Marked all reports as unconfirmed (batch mode) since Playwright verification was not possible

## What Worked
- WebSearch provided sufficient JD detail for meaningful evaluations
- Parallel agent report writing accelerated output
- Scan-history dedup prevented re-evaluating 10 previously processed roles

## What Failed
- WebFetch and curl both blocked by proxy for all job board domains (Greenhouse, Lever, Ashby)
- Could not verify if older evaluated offers (from April) are still active

## Friction
- Proxy restrictions limited JD depth — some evaluations based on search summaries rather than full JDs

## Missing Context
- Erick's education level (Master's degree or not) — affects CGS Federal eligibility
- Whether Erick can pass DHS background investigation — affects Ardent eligibility
- Current status of April applications (responded? interviewed?)

## What To Do Differently
- Pre-configure allowed domains in proxy for job board APIs
- Consider Playwright-based scanning in non-cloud environments for richer JD data

## Reusable Insight
- Greenhouse API (boards-api.greenhouse.io) is the most reliable programmatic source but requires proxy allowlisting; WebSearch is a viable fallback

## Top Mistake
- None critical; all evaluations completed despite proxy limitations

## Top Improvement Opportunity
- Resolve proxy access to job board domains to enable full JD fetching and offer verification

## Final State
- Total outputs: 7 evaluation reports + 7 TSV tracker entries
- Reports generated: 7 (007-013)
- Applications prepared: 0 (evaluation phase only)
- Failed steps: WebFetch/curl for all job board domains
- Skipped steps: PDF generation, offer verification (Playwright not available in batch)
- Confidence: 7/10
