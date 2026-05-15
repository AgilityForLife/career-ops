# Session Log: career-ops daily run

**Date:** 2026-05-15
**Branch:** claude/magical-gauss-7xom3

---

## Portal Scan
- Portals scanned: 9 search queries (Greenhouse PM, Greenhouse Agile/SM, Ashby, Lever PM, Lever Agile, Greenhouse AI/Transformation, Dice, LinkedIn/Contract, Greenhouse PMO)
- New jobs detected: 22 unique URLs (after dedup against scan-history.tsv of 10 prior entries)
- Duplicates filtered: 10 (all from 2026-04-06 scan)
- Any anomalies: WebFetch returned 403 Forbidden for all job board domains (Greenhouse, Lever, Ashby). Environment network policy blocks curl to external hosts. Used WebSearch summaries for JD evaluation instead.

---

## Batch Summary
- Total processed: 12 new URLs evaluated
- Evaluated with reports: 8
- Rejected without reports: 4
- Strong fits (3.4+): 3 (Nava, Mercury, prior batch had stronger fits)
- Moderate fits (3.0-3.3): 5 (TTEC Digital, CentralReach, Roku, Ardent, Slide Insurance, Ripple)
- Weak fits / Rejected: 4 (Vonage UK-based, RXR trainer role, Redaptive insufficient info, Energy Solutions closed)
- Patterns noticed: Heavy PM/SM market across Greenhouse and Lever. AI-adjacent roles increasing but require domain-specific AI experience. Government contractor roles (Ardent, Ardent DHS) align well with regulated delivery background. NJ-specific opportunities exist (Nava, CentralReach).

---

## Job Evaluations

### Job Evaluation: Nava — Sr. Project Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: NJ hybrid (2-3 days), Agile+traditional PM, cross-functional delivery leadership, government digital services
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise delivery), CS-5 (stakeholder alignment), risk management
- Key gaps: No government/civic tech experience, no cloud/data focus
- Confidence: 7/10

### Job Evaluation: TTEC Digital — Principal Technical Project Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Principal-level, remote with NJ eligibility, PMP preferred, financial reporting dashboards
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise delivery), CS-4 (financial dashboards), CS-5 (executive stakeholders)
- Key gaps: Contact center/CX domain, consulting model vs in-house, travel requirement
- Confidence: 6/10

### Job Evaluation: CentralReach — Technical Project Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Holmdel NJ location (excellent), TPM title match
- Resume chosen: Technical PM
- Key strengths match: CS-1 partial (enterprise PM team), healthcare regulated context
- Key gaps: Thin JD, limited CS engagement, possibly below Erick's scale
- Confidence: 5/10

### Job Evaluation: Roku — AI Program Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: AI-adjacent secondary target, $140K-$170K, NYC, enterprise scale
- Resume chosen: Technical PM (AI-adjacent framing)
- Key strengths match: CS-1 (enterprise delivery), CS-5 (cross-functional), AI-adjacent targeting
- Key gaps: AI/ML domain expertise, streaming industry, limited JD detail
- Confidence: 5/10

### Job Evaluation: Ardent — Scrum Master (DHS)
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: SAFe/LeSS preferred, DHS government regulated delivery, Agile transformation
- Resume chosen: Agile
- Key strengths match: CS-6 (SPC6 exceeds SAFe/LeSS preference), CS-7 (regulated delivery), CS-5 (gov stakeholders)
- Key gaps: No government experience, education requirement, specific Scrum Alliance certs
- Confidence: 7/10

### Job Evaluation: Mercury — Senior Technical Program Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Remote US, $118K-$148K, multi-team delivery, Salesforce integration, fintech
- Resume chosen: Technical PM
- Key strengths match: CS-1 (multi-team initiatives), CS-5 (cross-functional), Salesforce experience
- Key gaps: Fintech domain, Linear tool, RevOps specific focus, startup culture
- Confidence: 6/10

### Job Evaluation: Slide Insurance — Scrum Master
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: PI Planning + SAFe alignment, P&C insurance (Verisk adjacency)
- Resume chosen: Agile
- Key strengths match: CS-6 (PI Planning, SAFe ceremonies), insurance industry adjacency via Verisk
- Key gaps: Location uncertainty (Tampa FL?), scope may be single team, no Jira mention
- Confidence: 6/10

### Job Evaluation: Ripple — Principal Technical Program Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Exceptional comp ($216K-$270K), NYC, Principal level, regulated environment
- Resume chosen: Technical PM
- Key strengths match: CS-1 (cross-functional programs), CS-5 (stakeholder alignment), CS-7 (fintech regulatory)
- Key gaps: Blockchain/crypto domain expertise, highly competitive at this comp level
- Confidence: 4/10

### Rejected: Vonage — PM AI Implementation & Change Management
- Role classification: [REJECTED]
- Why rejected: FTC (Fixed Term Contract) terminology indicates UK-based role. "Built In London" listing confirms. Location deal-breaker.

### Rejected: RXR — Project Lead, AI Transformation & Enablement
- Role classification: [REJECTED]
- Why rejected: Role is AI evangelist/trainer (live demos, workshops, prompt engineering). Primarily Tier 4 skills (training, facilitation). Score 2.9/5.

### Rejected: Redaptive — Agile Coach & Scrum Master
- Role classification: [REJECTED]
- Why rejected: Insufficient JD detail to evaluate properly. Agile coaching as primary function. Score 2.8/5.

### Rejected: Energy Solutions — Senior Technical Project Manager
- Role classification: [REJECTED]
- Why rejected: Posting closed as of April 28, 2026 (17 days ago). Also requires master's degree (gap). Would have scored ~3.0/5 if open.

---

## Resume Decision
- Resume used: Technical PM for 5 roles (Nava, TTEC Digital, CentralReach, Roku, Mercury, Ripple); Agile for 2 roles (Ardent, Slide Insurance)
- Reason: Role-by-role matching per CLAUDE.md rules — Agile resume for explicit SM/Agile Coach roles, Technical PM for TPM/PM/Program Manager titles
- Any ambiguity: Nava could go either way (Agile+traditional required) — chose Technical PM given delivery focus
- Missing data from cv.md: Education details ("available upon request") — matters for Ardent (Bachelor's required) and Energy Solutions (Master's required)

---

## Final State
- Total outputs: 8 evaluation reports + 8 tracker TSV files + pipeline updates + scan history updates
- Reports generated: 8 (007 through 014)
- Applications prepared: 0 (all at "Evaluated" status pending user review — no auto-submit per safety rule)
- Any failed steps: WebFetch blocked by 403 for all job board domains; used WebSearch summaries as fallback
- Any skipped steps: PDF generation skipped (no strong-fit roles scoring 4.0+; all evaluations pending user decision)
- Confidence: 7/10

---

### Session: career-ops daily run

- Objective: Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 9
  - New jobs found: 22 unique URLs
  - Jobs evaluated: 12 (8 with full reports, 4 rejected)
  - Applications prepared: 0 (pending user review)
  - Primary roles: 3 (Nava, Ardent, Slide Insurance)
  - Secondary roles: 5 (TTEC Digital, CentralReach, Roku, Mercury, Ripple)
  - Rejected: 4 (Vonage, RXR, Redaptive, Energy Solutions)

- Key Decisions:
  - Used WebSearch summaries instead of WebFetch (403 blocked) — all reports marked "unconfirmed (batch mode)"
  - Rejected Vonage based on FTC terminology indicating UK location
  - Rejected RXR based on Tier 4 skill de-emphasis (trainer/facilitator role)
  - Included CentralReach (3.0/5) despite borderline score due to excellent NJ location

- What Worked:
  - Parallel WebSearch across 9 portal queries yielded broad coverage
  - Greenhouse, Lever, and Ashby portals returned relevant results
  - Core Strength Engagement Test provided consistent scoring framework
  - Scan-history dedup prevented re-evaluation of 10 prior entries

- What Failed:
  - WebFetch returned 403 for ALL job board domains (Greenhouse, Lever, Ashby)
  - Greenhouse API also blocked (boards-api.greenhouse.io returned 403)
  - curl blocked by environment network allowlist
  - Result: evaluations based on WebSearch snippets, not full JDs — lower confidence

- Friction:
  - Network restrictions in cloud execution environment severely limit JD retrieval
  - verify-pipeline.mjs used Spanish canonical statuses; had to add English aliases

- Missing Context:
  - Full JD text for all 8 evaluated roles (would improve scoring confidence from 5-7 to 8-9)
  - Erick's education details (matters for degree requirements)
  - Location details for Slide Insurance and Redaptive
  - Comp details for Nava, TTEC Digital, CentralReach, Ardent

- What To Do Differently:
  - Pre-cache JD text via local files when running in restricted environments
  - Save JDs to jds/ directory for future reference
  - Consider adding Greenhouse API as allowed domain in environment network policy

- Reusable Insight:
  - WebSearch provides sufficient JD summary data for initial evaluation when WebFetch is blocked
  - Government contractor roles (Ardent, Arlo Solutions, Trilogy Federal) consistently score 3.3-4.0 due to CS-6 and CS-7 alignment
  - NJ-specific opportunities are rare but high-value (Nava, CentralReach)

- Top Mistake:
  - Could not retrieve full JDs — evaluations are lower confidence than they should be

- Top Improvement Opportunity:
  - Add a pre-fetch step that saves JDs to local files (jds/ directory) so evaluation can work from full text even in restricted environments
