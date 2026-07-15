### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 8 search queries across Greenhouse, Lever, Ashby, Dice/LinkedIn, Anthropic API, JPMorgan/Citi/Prudential, J&J/Merck, AI-adjacent roles
  - New jobs found: 8 new URLs added to pipeline (6 evaluated, 2 rejected)
  - Jobs evaluated: 6
  - Applications prepared: 0 (evaluations only; no auto-submit per safety rule)
  - Primary roles: 4 (CompassX Pharma SM/Coach, NTT DATA SM/Coach, Merck IT PM/SM, CGS Federal Agile Coach)
  - Secondary roles: 2 (Nava Sr. PM, Omada Health AI Transformation PM)
  - Rejected: 2 (G-P Sr. Principal PM - Workday/HRIS domain gap; HealthVerity Senior PM - low CS engagement 2.8/5)

- Key Decisions:
  - Merck IT PM & Scrum Master rated highest (3.9/5) due to direct pharma match with Sanofi experience and NJ hybrid location, but full JD could not be retrieved — flagged for manual verification
  - Nava Sr. Program Manager rated 3.8/5 despite government domain gap — strong delivery scale alignment and good comp ($134-173K)
  - CompassX Group pharma role prioritized as PRIMARY despite coaching-focused framing because of pharma domain premium and 1099/C2C structure
  - G-P AI Transformation role rejected despite attractive comp ($176-221K) because it requires specific Workday ERP/HRIS/Legal experience and $20M+ portfolio management
  - CGS Federal Agile Coach included despite salary below target ($81-110K) because SAFe SPC6 is a direct certification match

- What Worked:
  - WebSearch successfully found relevant postings across all major job board portals
  - Cross-referencing scan-history.tsv effectively prevented duplicate processing
  - Skills model scoring framework produced consistent, defensible evaluations
  - Pharma-aligned roles (CompassX, Merck) surfaced as highest-fit matches, confirming Sanofi experience as a strong differentiator

- What Failed:
  - WebFetch and curl both blocked by proxy for all job board domains (403 Forbidden) — had to rely on WebSearch snippets for JD content instead of full job descriptions
  - Anthropic Greenhouse API also returned 403 — could not scan Anthropic jobs
  - Financial services company career sites (JPMorgan, Citi, Prudential) returned generic aggregator results instead of direct job listings

- Friction:
  - Proxy restrictions significantly limited JD retrieval depth — evaluations based on search result summaries rather than full postings
  - Merge script defaulted "Evaluated" to Spanish "Evaluada" — had to correct manually
  - Verify script hardcodes Spanish canonical statuses despite states.yml having English labels

- Missing Context:
  - Full JD for Merck IT PM & Scrum Master (R303857) — highest-scored role but evaluated on partial information
  - Comp information for CompassX Group 1099 role — rate not disclosed in search results
  - Specific location/clearance requirements for CGS Federal Agile Coach

- What To Do Differently:
  - Consider adding a Playwright-based scraping fallback for environments where WebFetch is blocked by proxy
  - Add search queries specifically targeting NJ pharma companies beyond J&J and Merck (Bristol-Myers Squibb, Novartis NJ, Novo Nordisk)

- Reusable Insight:
  - Pharma domain roles consistently score highest for this candidate profile — Sanofi experience is the strongest differentiator. Future scans should weight pharma portals more heavily.

- Top Mistake:
  - Initially used "Evaluated" (English) status in tracker TSVs, which the merge script converted to "Evaluada" correctly but then I changed it to "Evaluated" which failed verification — wasted a correction cycle.

- Top Improvement Opportunity:
  - Fix verify-pipeline.mjs to accept English canonical labels (Evaluated, Applied, etc.) in addition to Spanish, matching the states.yml structure which lists English as the label and Spanish as aliases.

## Portal Scan
- Portals scanned: Greenhouse (3 queries), Lever (2 queries), Ashby (1 query), Dice/LinkedIn (1 query), Anthropic API, J&J/Merck, financial services, AI-adjacent
- New jobs detected: 30+ results across all queries
- Duplicates filtered: 10 previously seen URLs in scan-history.tsv
- Any anomalies: Proxy blocked all direct URL fetches (WebFetch/curl returned 403); Anthropic API also blocked

## Job Evaluation: CompassX Group - SM & Agile Coach Pharma
- Role classification: PRIMARY
- Why selected: Pharma domain (R&D/Clinical), dual SM/PM role, 1099/C2C available
- Resume chosen: Agile
- Key strengths match: CS-5 (Sanofi pharma R&D), CS-6 (SAFe), CS-7 (regulated)
- Key gaps: No cloud/data component (CS-2 absent), consulting pedigree preferred
- Confidence: 7/10

## Job Evaluation: NTT DATA - SM/Agile Coach NYC
- Role classification: PRIMARY
- Why selected: SAFe SPC6 is strong differentiator, enterprise consulting environment
- Resume chosen: Agile
- Key strengths match: CS-5 (stakeholder alignment), CS-6 (SAFe nice-to-have)
- Key gaps: Onsite NYC, no regulated environment signal, salary ceiling $130K
- Confidence: 6/10

## Job Evaluation: Nava - Sr. Program Manager
- Role classification: SECONDARY
- Why selected: Remote NJ eligible, government contracts, SAFe/Scrum required, strong comp
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise delivery), CS-5 (government stakeholders), CS-6 (SAFe), CS-7 (regulated)
- Key gaps: Paid Family Leave domain experience, custom software delivery focus
- Confidence: 7/10

## Job Evaluation: Merck - IT PM & Scrum Master
- Role classification: PRIMARY
- Why selected: Pharma NJ hybrid, dual PM/SM, strong comp potential, direct Sanofi match
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise IT), CS-5 (pharma), CS-6 (SM), CS-7 (regulated pharma)
- Key gaps: Full JD not retrieved, may require scientific degree
- Confidence: 8/10 (but JD verification needed)

## Job Evaluation: CGS Federal - Agile Coach
- Role classification: PRIMARY
- Why selected: SAFe SPC specifically listed as qualifying certification
- Resume chosen: Agile
- Key strengths match: CS-5 (federal agency), CS-6 (SPC required), CS-7 (federal)
- Key gaps: Salary below target ($81-110K), pure coaching focus
- Confidence: 5/10

## Job Evaluation: Omada Health - Staff AI Transformation PM
- Role classification: SECONDARY
- Why selected: AI-adjacent, enterprise PM scope, executive reporting match
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise initiatives), CS-4 (executive reporting), CS-5 (cross-functional)
- Key gaps: Process mining expertise, AI automation depth, no SAFe
- Confidence: 5/10

## Resume Decision
- Resume used: Mixed (4 Agile, 2 Technical PM based on role alignment)
- Reason: Agile resume for SM/Coach-focused roles; Technical PM for program management and AI-adjacent roles
- Any ambiguity: Merck role could go either way — chose Technical PM to lead with pharma delivery credentials over coaching
- Missing data from cv.md: None — all metrics and experiences verified against canonical source

## Batch Summary
- Total processed: 8 URLs (6 evaluated, 2 rejected)
- Strong fits: 2 (Merck 3.9/5, Nava 3.8/5)
- Weak fits: 2 (CGS Federal 3.2/5, Omada Health 3.2/5)
- Unclear roles: 1 (Merck — full JD not retrieved)
- Patterns noticed: Pharma roles continue to be strongest match; AI-adjacent roles score lower due to process mining/AI automation gaps; federal Agile Coach roles exist but pay below target

## Final State
- Total outputs: 6 evaluation reports, 8 scan-history entries, 8 pipeline entries
- Reports generated: 6 (reports/007 through 012)
- Applications prepared: 0 (evaluations only per safety rule)
- Any failed steps: WebFetch blocked for all job board URLs due to proxy restrictions
- Any skipped steps: PDF generation skipped (batch mode, no Playwright available)
- Confidence: 7/10
