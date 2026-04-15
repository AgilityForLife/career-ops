# Session: career-ops daily run

**Date:** 2026-04-15
**Branch:** claude/magical-gauss-j9rHP

---

## Objective

Execute job scan, evaluation, and application prep pipeline.

---

## Portal Scan

- Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, LinkedIn, ClearanceJobs, Construction PM portals + 7 tracked company searches (Anthropic, gov/federal, contract market)
- New jobs detected: 27 unique new URLs (not in scan-history.tsv)
- Duplicates filtered: 11 URLs already in scan-history (prior 2026-04-06 batch)
- Any anomalies: All job board direct fetches returned 403 (Greenhouse, Lever, Ashby blocked WebFetch). Used WebSearch for JD extraction instead — sufficient detail obtained for evaluation but some fields incomplete.

---

## Job Evaluations

### 007 — Aprio: Senior PM, Agile Management Office
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Power BI explicitly required (CS-4 premium); 10+ yrs enterprise PM; remote FT
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise delivery), CS-4 (Power BI), CS-5 (stakeholders), CS-6 (Agile PMO)
- Key gaps: Professional services domain is new; salary not disclosed
- Confidence (1–10): 8
- **Score: 4.3/5**

### 008 — Accela: Technical Program Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote-first; $140K-$160K FTE; government tech; 5 CS engaged
- Resume chosen: Technical PM
- Key strengths match: CS-1, CS-2 (data/analytics), CS-5, CS-6, CS-7 (gov tech)
- Key gaps: SaaS product context gap; may be over-qualified (15+ vs. 8-10 required)
- Confidence (1–10): 8
- **Score: 4.1/5**

### 009 — Calendly: Senior Technical Program Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: 6/7 CS engaged; cloud-native + CI/CD direct match; remote US
- Resume chosen: Technical PM
- Key strengths match: CS-1, CS-2, CS-3, CS-4, CS-5, CS-7 (SOC 2/ISO 27001)
- Key gaps: NJ = Tier 3 compensation (lower band); SaaS product TPM context gap
- Confidence (1–10): 7
- **Score: 4.0/5**

### 010 — Nava: Sr. Project Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: NJ hybrid 2-3 days (ideal location); government delivery; Agile + traditional PM
- Resume chosen: Technical PM
- Key strengths match: CS-1, CS-5, CS-6, CS-7 (government)
- Key gaps: Public benefit corporation/consulting context; salary unknown
- Confidence (1–10): 8
- **Score: 4.0/5**

### 011 — HealthVerity: Senior PM (Scrum Master)
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote (NJ approved); healthcare data; Sanofi pharma experience transfers
- Resume chosen: Agile resume
- Key strengths match: CS-1, CS-5, CS-6, CS-7 (healthcare regulated)
- Key gaps: Wide salary range ($65K-$155K) — floor is below minimum; may be junior-tilted
- Confidence (1–10): 6
- **Score: 3.7/5**

### 012 — Vonage: PM AI Implementation & Change Management
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: AI-adjacent; enterprise scale (3,000+ org); AI tool rollout (Glean)
- Resume chosen: Technical PM
- Key strengths match: CS-1, CS-5, CS-6 (transformation)
- Key gaps: FTC 6-12 months (not C2C); change management focus (not pure PM); no AI tool deployment experience
- Confidence (1–10): 6
- **Score: 3.5/5**

### 013 — AHEAD: Senior Scrum Master
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote; $125K-$140K in target range; Senior SM title
- Resume chosen: Agile resume
- Key strengths match: CS-6 (Agile facilitation)
- Key gaps: Salesforce dev focus (Tier 4 de-emphasis risk); only 1/7 CS strongly engaged; ADO depth concern
- Confidence (1–10): 5
- **Score: 3.3/5**

### 014 — Veda Data Solutions: Senior Scrum Master
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote US; 8+ yrs; data solutions domain; portfolio management
- Resume chosen: Agile resume
- Key strengths match: CS-1, CS-5, CS-6
- Key gaps: Salary unknown; smaller company; degree requirement concern
- Confidence (1–10): 6
- **Score: 3.6/5**

### 015 — Bixal: Sr. PM/Scrum Master (VADS)
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote US; VA government; $2.4B SPRUCE IDIQ enterprise scale
- Resume chosen: Agile resume
- Key strengths match: CS-1, CS-5, CS-6, CS-7 (government VA)
- Key gaps: Contingent on contract award; VA Design System is UX domain; 1-year performance period
- Confidence (1–10): 6
- **Score: 3.7/5**

### 016 — Bixal: Senior Program Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote US; federal CMS migration; 5/7 CS engaged; platform migration parallels Sanofi
- Resume chosen: Technical PM
- Key strengths match: CS-1, CS-2 (migration), CS-5, CS-6, CS-7 (federal)
- Key gaps: CMS-specific knowledge gap; federal contractor comp uncertainty; website redesign domain
- Confidence (1–10): 7
- **Score: 3.8/5**

---

## Resume Decision

- Resumes used: Technical PM (6 evaluations: 007, 008, 009, 010, 012, 016), Agile (4 evaluations: 011, 013, 014, 015)
- Reason: Roles with cloud/data/infrastructure focus → Technical PM; roles with Scrum Master/coaching focus → Agile
- Any ambiguity: None — clear role signals drove resume selection
- Missing data from cv.md: Education details (degree level) — relevant for Veda requirement

---

## Batch Summary

- Total processed: 10 evaluations
- Strong fits (4.0+): 4 — Aprio (4.3), Accela (4.1), Calendly (4.0), Nava (4.0)
- Decent fits (3.5-3.9): 4 — Bixal PM (3.8), HealthVerity (3.7), Bixal VADS (3.7), Veda (3.6)
- Marginal fits (3.0-3.4): 2 — Vonage (3.5), AHEAD (3.3)
- Weak fits (<3.0): 0
- Rejected (scan phase): 5 — Rackner (clearance), Cognite (Europe), CompassX (LA), Egen (Canada), Motive (hardware)
- Unclear roles: 0
- Patterns noticed:
  - Government/federal sector has strong demand for PM/Scrum Master roles with Agile + traditional PM
  - Power BI is emerging as a rare differentiator in PM roles (Aprio explicitly requires it)
  - Most job boards now block direct WebFetch — need alternative JD extraction strategy
  - Remote-first is becoming standard for senior PM roles
  - Multiple Bixal openings suggest active VA contract hiring wave

---

## Final State

- Total outputs: 10 evaluation reports + 27 new scan-history entries + 12 pending pipeline URLs
- Reports generated: 10 (reports/007 through 016)
- Applications prepared: 0 (all in "Evaluada" status — pending candidate review)
- Any failed steps: WebFetch blocked by all job boards (403) — used WebSearch as fallback
- Any skipped steps: None
- Confidence (1–10): 7

---

## Execution Summary

- Portals scanned: 12 search queries + 7 company-specific searches
- New jobs found: 27
- Jobs evaluated: 10
- Applications prepared: 0 (pending candidate decision)
- Primary roles: 8 (Aprio, Accela, Nava, HealthVerity, AHEAD, Veda, Bixal VADS, Bixal PM)
- Secondary roles: 2 (Calendly, Vonage)
- Rejected: 5 (clearance, location, hardware)

---

## Key Decisions

- Prioritized 10 strongest-fit roles from 27 new discoveries for full evaluation
- Deferred 12 URLs to pipeline pending queue for next batch
- Used WebSearch as fallback for JD extraction when WebFetch returned 403
- Scored Aprio highest (4.3/5) due to rare Power BI requirement matching CS-4 premium

---

## What Worked

- Parallel web search across multiple portals yielded 27 new unique URLs
- Skills-model CS engagement scoring provided clear differentiation between candidates
- Pipeline/scan-history dedup worked correctly — no duplicates from prior batch

---

## What Failed

- WebFetch blocked by all major job boards (Greenhouse, Lever, Ashby) — 403 errors on every direct URL fetch
- JD details obtained via WebSearch are less complete than direct page reads — some salary/location fields missing

---

## Friction

- 403 blocks on job board URLs required multiple WebSearch queries per role to gather equivalent information
- Merge script uses Spanish canonical states ("Evaluada") while CLAUDE.md documents English states ("Evaluated") — minor inconsistency

---

## Missing Context

- Salary information for 5/10 evaluated roles (Aprio, Nava, Veda, Bixal VADS, Bixal PM)
- Education details in cv.md (degree level) — needed for Veda's Bachelor's/Master's requirement
- Candidate's current application status for roles 1-6 (to inform prioritization)

---

## What To Do Differently

- Pre-cache Greenhouse API calls in a script (boards-api.greenhouse.io may have different rate limits)
- Consider using Playwright for JD extraction in interactive sessions (CLAUDE.md mandates this)
- Build a JD extraction script that handles 403 fallback automatically

---

## Reusable Insight

- Power BI requirement in PM roles is a rare premium differentiator — actively search for "Power BI" in JD scans to surface CS-4 match opportunities
- Government/federal PM roles have strong alignment with CS-7 regulated delivery — consider increasing weight of federal portal scans

---

## Top Mistake

- No critical mistakes this session. Minor issue: used "Evaluated" in TSVs which the merge script converted to "Evaluada" — should use the script's canonical language directly.

---

## Top Improvement Opportunity

- Build a dedicated JD fetcher script that handles 403 with fallback to cached search results, reducing the manual WebSearch-per-role overhead from ~2 minutes to <10 seconds per URL.
