### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 8 search queries across Greenhouse, Ashby, Lever, Dice, LinkedIn, and contract portals + 3 company-specific searches (Anthropic, contract/C2C, AI transformation)
  - New jobs found: 8 new roles identified and processed (5 evaluated, 3 rejected)
  - Jobs evaluated: 5 full evaluations with reports generated
  - Applications prepared: 5 roles have evaluation reports ready for candidate review
  - Primary roles: 4 (Grant Street Group, CompassX Group, Capital Technology Group, HealthVerity)
  - Secondary roles: 1 (Toast)
  - Rejected: 3 (Flywheel Digital — wrong domain/short contract, G-P — HRIS/Workday domain mismatch, Palantir — security clearance required)

- Key Decisions:
  - Prioritized pharma-domain role (CompassX) due to direct Sanofi experience transfer
  - Classified Grant Street Group as highest-scoring new role (4.0/5) due to enterprise delivery + gov/finserv regulated domain
  - Rejected G-P AI Transformation despite $176K-$221K comp because Workday/HRIS/Legal domain requirements have no candidate match
  - Rejected Palantir despite high profile — security clearance (Secret+) is a hard blocker

- What Worked:
  - WebSearch provided sufficient JD detail for evaluation when WebFetch/curl were blocked by proxy egress policy
  - Parallel agent report generation completed all 5 reports efficiently
  - Pipeline verification and tracker merge scripts ran cleanly after status normalization

- What Failed:
  - WebFetch returned HTTP 403 on all job board domains (Greenhouse, Lever, Ashby) — proxy egress policy blocks these
  - curl to Greenhouse API also blocked (CONNECT tunnel 403)
  - Had to rely entirely on WebSearch summaries for JD content — less detailed than direct JD fetches
  - Normalize script converted "Applied" to "Aplicado" (Spanish) — scripts use Spanish canonical forms

- Friction:
  - Proxy egress restrictions prevented direct JD fetching — required multiple WebSearch queries per role to gather sufficient detail
  - Status normalization scripts use Spanish canonical forms (Evaluada, Aplicado) while the CLAUDE.md and states.yml define English labels — caused initial verify failures

- Missing Context:
  - Compensation data for Toast and CompassX roles — not published in JD summaries
  - Security clearance status for Capital Technology Group USCIS role — may be a blocker
  - Whether Grant Street Group allows C2C/1099 — listed as FTE only

- What To Do Differently:
  - Pre-filter search results against scan-history.tsv before fetching JDs to avoid wasted searches
  - Use Spanish status labels from the start to avoid normalize/verify friction

- Reusable Insight:
  - When proxy blocks job board domains, WebSearch with company-specific queries (e.g., "CompanyName 'role title' job description requirements salary") provides 80%+ of the JD info needed for evaluation

- Top Mistake:
  - Using English "Evaluated" status instead of Spanish "Evaluada" — caused verify failures and required manual correction

- Top Improvement Opportunity:
  - Fix verify-pipeline.mjs to accept English status labels as aliases (add "evaluated" → "evaluada" mapping) for consistency with CLAUDE.md documentation

---

## Portal Scan

- Portals scanned: 8 search query categories + 3 company-specific
- New jobs detected: 8
- Duplicates filtered: 0 (all new, no overlap with scan-history.tsv)
- Any anomalies: Proxy egress policy blocks all job board domains (greenhouse.io, lever.co, ashbyhq.com, dice.com) — WebFetch and curl both return 403

## Job Evaluation: Grant Street Group — Senior Project/Program Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Enterprise-scale software program delivery in gov/finserv regulated sector (CS-1, CS-5, CS-7); $150K-$225K comp
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise delivery), CS-5 (cross-functional alignment), CS-7 (regulated delivery)
- Key gaps: CS-2 absent (no cloud/data platform); new SaaS domain (tax/bonds/payments)
- Confidence (1–10): 7

## Job Evaluation: CompassX Group — Scrum Master & Agile Coach Pharma
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Direct pharma domain match to Sanofi experience; 1099 contract preference; dual-hat SM+PM role
- Resume chosen: Agile
- Key strengths match: CS-5 (pharma stakeholders), CS-6 (Agile Coach), CS-7 (pharma regulated)
- Key gaps: CS-2 absent; coaching identity framing risk (Tier 4 per skills model); comp unknown
- Confidence (1–10): 7

## Job Evaluation: Toast — Senior Technical Program Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Strong CS-1 match (enterprise delivery, R&D programs); remote; 7+ yr seniority
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise delivery), CS-5 (cross-functional alignment)
- Key gaps: Restaurant tech domain new; no regulated environment; no SAFe
- Confidence (1–10): 6

## Job Evaluation: Capital Technology Group — Scrum Master
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: USCIS federal program (CS-7); SAFe certification valued (CS-6); $110K-$140K within target
- Resume chosen: Agile
- Key strengths match: CS-6 (SAFe/Scrum), CS-7 (federal regulated delivery)
- Key gaps: IAM/SSO niche domain; may require security clearance; facilitation vs delivery ownership
- Confidence (1–10): 5

## Job Evaluation: HealthVerity — Senior Project Manager (Scrum Master)
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: NJ/NY eligible remote; healthcare data (partial CS-7); PMP/CSM credentials match
- Resume chosen: Agile
- Key strengths match: CS-6 (Agile/Scrum), partial CS-7 (healthcare)
- Key gaps: Salary floor $65K below minimum; 3+ yr requirement suggests mid-level scope
- Confidence (1–10): 5

## Resume Decision
- Resume used: Technical PM (Grant Street Group, Toast) / Agile (CompassX, Capital Tech, HealthVerity)
- Reason: Role-type alignment per skills-model rules — TPM/PM roles get Technical PM resume, SM/AC roles get Agile resume
- Any ambiguity: None — clear role-type separation
- Missing data from cv.md: None — all metrics sourced from cv.md

## Batch Summary
- Total processed: 8 roles (5 evaluated, 3 rejected)
- Strong fits: 2 (Grant Street Group 4.0/5, CompassX 3.7/5)
- Weak fits: 3 (Toast 3.6/5, Capital Tech 3.3/5, HealthVerity 3.2/5)
- Unclear roles: 0
- Patterns noticed: Strong market for Scrum Master/Agile Coach roles in government and pharma sectors; PM/TPM roles at public tech companies continue to be remote-first; pharma domain experience remains a high-value differentiator

## Final State
- Total outputs: 8 roles processed
- Reports generated: 5 (007-011)
- Applications prepared: 5 evaluations ready for candidate review
- Any failed steps: WebFetch/curl JD retrieval (proxy 403) — mitigated via WebSearch
- Any skipped steps: PDF generation (no PDFs generated this run — batch mode)
- Confidence (1–10): 7
