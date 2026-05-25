# Session Log: 2026-05-25 — career-ops daily run

---

## Portal Scan
- Portals scanned: 12 search queries across Greenhouse, Ashby, Lever, Dice, LinkedIn, and company-specific portals
- New jobs detected: 10 (9 evaluated + 1 rejected)
- Duplicates filtered: 10 (all previous scan-history entries from 2026-04-06)
- Any anomalies: All job board direct fetches (WebFetch) returned 403 Forbidden; used WebSearch for JD detail extraction as fallback

---

## Job Evaluation: Toast — IT Delivery Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Power BI + Snowflake explicitly required; enterprise delivery at scale (7K+ users); remote; $111K-$178K
- Resume chosen: Technical PM
- Key strengths match: CS-1, CS-2, CS-4 (Power BI!), CS-5
- Key gaps: ITIL cert preferred; IT operations focus vs product delivery
- Confidence (1–10): 8

## Job Evaluation: HealthVerity — Senior PM (Scrum Master)
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: SM + PM combo; NJ eligible; healthcare regulated; Jira/Confluence primary tools
- Resume chosen: Agile
- Key strengths match: CS-1, CS-5, CS-6, CS-7
- Key gaps: SmartSheet; Philadelphia commute 2 days/week
- Confidence (1–10): 8

## Job Evaluation: Nava — Sr. Project Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: NJ hybrid (perfect location); Agile + traditional PM dual expertise; client-facing
- Resume chosen: Agile
- Key strengths match: CS-1, CS-5, CS-6
- Key gaps: No cloud/data component; comp undisclosed
- Confidence (1–10): 7

## Job Evaluation: Ardent — Scrum Master (DHS)
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Federal SM; SAFe/LeSS valued; background check only (not clearance)
- Resume chosen: Agile
- Key strengths match: CS-5, CS-6, CS-7
- Key gaps: Federal experience preferred; location unclear
- Confidence (1–10): 6

## Job Evaluation: TTEC Digital — Principal Technical PM
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: $140K-$165K strong comp; PMP preferred; remote; Principal-level
- Resume chosen: Technical PM
- Key strengths match: CS-1, CS-5
- Key gaps: NICE CXone domain; no Agile/SAFe requirement
- Confidence (1–10): 7

## Job Evaluation: Jencap — Senior PM, PMO
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: NJ/NY/Remote perfect location; $110K-$175K; PMO governance
- Resume chosen: Technical PM
- Key strengths match: CS-1, CS-5, CS-7 (partial — insurance regulated)
- Key gaps: No technical delivery; insurance domain new
- Confidence (1–10): 7

## Job Evaluation: Veda Data Solutions — Senior Scrum Master
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote US; 8+ yrs matches; PMP/Agile certs valued; enterprise software
- Resume chosen: Agile
- Key strengths match: CS-1, CS-5, CS-6
- Key gaps: Comp unknown; company scale unknown
- Confidence (1–10): 6

## Job Evaluation: CentralReach — Technical Project Manager
- Role classification: [SECONDARY TARGET ROLE]
- Why selected: Holmdel NJ (local!); healthcare SaaS; $110K-$125K
- Resume chosen: Technical PM
- Key strengths match: CS-1, CS-5
- Key gaps: No cloud/data; ABA/IDD niche; $125K ceiling
- Confidence (1–10): 7

## Job Evaluation: Neon One — Agile Delivery Manager
- Role classification: [PRIMARY TARGET ROLE]
- Why selected: Remote; lead Scrum Masters; Agile delivery management
- Resume chosen: Agile
- Key strengths match: CS-1, CS-5, CS-6
- Key gaps: Non-profit comp risk; scale may be small
- Confidence (1–10): 6

## Job REJECTED: Airtable — PM AI Programs
- Role classification: [REJECTED]
- Why rejected: Facilitator/evangelist role disguised as PM; maps to Tier 4 de-emphasized skills (workshop facilitation, training); not a delivery management role
- Score: 2.8/5

---

## Batch Summary
- Total processed: 10 (9 evaluated + 1 rejected)
- Strong fits (4.0+): 1 (Toast)
- Good fits (3.5-3.9): 2 (HealthVerity, Nava/Ardent tie)
- Moderate fits (3.0-3.4): 6 (TTEC, Jencap, Veda, CentralReach, Neon One, Ardent)
- Rejected: 1 (Airtable — facilitator role)
- Patterns noticed: Power BI + Snowflake alignment is rare and valuable when found; NJ/NY market has strong PMO and healthcare PM demand; Scrum Master roles remain the most common PRIMARY target available

---

## Resume Decision
- Technical PM resume used for: Toast, TTEC Digital, Jencap, CentralReach (4 roles)
- Agile resume used for: HealthVerity, Nava, Ardent, Veda Data, Neon One (5 roles)
- Reason: Role type drives selection — delivery/TPM roles get Technical PM; SM/Agile roles get Agile resume
- Any ambiguity: None — clear distinction between PM and SM roles in this batch
- Missing data from cv.md: None

---

## Final State
- Total outputs: 9 evaluation reports + 9 tracker entries + 10 scan-history entries
- Reports generated: 9 (007–015)
- Applications prepared: 0 (evaluation only; no auto-submit per safety rules)
- Any failed steps: WebFetch returned 403 on all job board URLs (Greenhouse, Lever, Ashby all blocked direct access)
- Any skipped steps: PDF generation skipped (no auto-apply)
- Confidence (1–10): 8

---

### Session: career-ops daily run

- Objective: Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries
  - New jobs found: 10
  - Jobs evaluated: 9
  - Applications prepared: 0 (evaluate only)
  - Primary roles: 5 (HealthVerity, Nava, Ardent, Veda Data, Neon One)
  - Secondary roles: 4 (Toast, TTEC Digital, Jencap, CentralReach)
  - Rejected: 1 (Airtable)

- Key Decisions:
  - Used WebSearch as fallback when WebFetch returned 403 on all job boards
  - Applied Tier 4 de-emphasis rule to reject Airtable facilitator/evangelist role
  - Scored Toast highest (4.0/5) due to explicit Power BI + Snowflake requirement

- What Worked:
  - WebSearch returned rich enough data to evaluate roles accurately
  - Skills-model scoring framework provided clear, consistent evaluations
  - Multi-query scan strategy caught roles across Greenhouse, Lever, and Ashby platforms

- What Failed:
  - WebFetch 403 on ALL job board URLs — cannot retrieve full JDs directly

- Friction:
  - Had to use WebSearch summaries instead of full JDs, which may miss nuances in requirements

- Missing Context:
  - Compensation data for Nava, Ardent, Veda Data, and Neon One roles
  - Full JD text for more detailed requirements matching

- What To Do Differently:
  - Consider caching Greenhouse API responses or using alternative fetch methods
  - Pre-filter by comp data availability to prioritize roles with transparent pay

- Reusable Insight:
  - Power BI + Snowflake in a JD is the strongest CS-4 signal and should be prioritized immediately; it's the rarest and most differentiating match for this candidate

- Top Mistake:
  - None significant — pipeline ran cleanly

- Top Improvement Opportunity:
  - Add comp floor filter to scan queries to avoid evaluating roles that might pay below $100K FTE / $60/hr C2C
