# Session Log: career-ops daily run — 2026-06-26

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries + 6 company-specific scans (Greenhouse, Lever, Ashby, Dice, LinkedIn, gov/federal)
  - New jobs found: 25+ unique listings across all portals
  - Jobs evaluated: 6 full evaluations (reports generated)
  - Jobs rejected: 4 (insufficient fit, domain mismatch, narrow scope)
  - Applications prepared: 6 (reports + tracker entries)
  - Primary roles: 3 (CompassX SM/Agile Coach Pharma, Stand Together Agile Practice Lead, CGS Agile Coach Federal)
  - Secondary roles: 3 (Omada Health AI Transformation PM, Nava Sr. PM NJ, Grow Therapy AI Ops PM)
  - Rejected: 4 (G-P Workday/HRIS gap, Flywheel media domain, Hinge Health narrow AI, Insider One insufficient info)

- **Key Decisions:**
  - Prioritized pharma SM/Agile Coach at CompassX as top match (4.2/5) due to direct Sanofi parallel
  - Included CGS federal Agile Coach despite likely clearance gap — SAFe SPC6 match is strong, clearance may be obtainable
  - Rejected G-P AI Transformation ($176K-$221K) despite excellent comp because Workday/HRIS/Legal experience is a hard requirement
  - Classified Stand Together Agile Practice Lead as acceptable exception to "never lead with coaching" rule since role explicitly requires practice-building

- **What Worked:**
  - Greenhouse API and multi-portal web search approach surfaced diverse listings
  - Skills model scoring framework efficiently filtered 25+ listings down to 6 actionable evaluations
  - Pharma-domain listings surfaced strong match leveraging Sanofi experience

- **What Failed:**
  - WebFetch blocked by proxy (403) for all job board domains — couldn't retrieve full JDs directly
  - Had to rely on WebSearch summaries and cached descriptions for evaluation detail

- **Friction:**
  - Job board 403 blocks forced multi-step workaround (search → summary → evaluate from summary)
  - Verify script CANONICAL_STATUSES used Spanish only; added English aliases to fix

- **Missing Context:**
  - Rate/salary for CompassX (top match) — unknown, need to verify before applying
  - CGS clearance requirement specifics — is it at-hire or obtainable post-hire?
  - Stand Together remote vs Arlington VA on-site requirement unclear

- **What To Do Differently:**
  - Pre-cache Greenhouse API endpoints that work to avoid 403 cycle
  - Add English status aliases to verify-pipeline.mjs permanently (done this run)
  - Consider Playwright-based scraping for direct JD retrieval when WebFetch is blocked

- **Reusable Insight:**
  - Pharma/biotech SM roles are high-value targets due to Sanofi experience — should increase pharma-specific search queries
  - AI Transformation PM roles are emerging strongly across healthtech (Omada, Grow Therapy, Hinge Health) — worth monitoring as a secondary pipeline

- **Top Mistake:**
  - Attempted direct WebFetch on all job boards before discovering proxy blocks — wasted 8 parallel fetch attempts

- **Top Improvement Opportunity:**
  - Add pharma/biotech-specific search queries to portals.yml (e.g., site:lever.co pharma "scrum master", site:greenhouse.io biotech "agile coach")

---

## Portal Scan
- Portals scanned: 12 search queries (Greenhouse PM/Delivery, Greenhouse Agile/SM, Ashby, Lever PM, Lever Agile, Greenhouse AI/Transformation, Greenhouse PMO, LinkedIn contract, Dice, Gov/Federal, Anthropic, Glean) + 6 targeted company scans
- New jobs detected: 25+ unique listings
- Duplicates filtered: 10 (all previously in scan-history.tsv from 2026-04-06 run)
- Any anomalies: WebFetch 403 blocks on all job board domains; used WebSearch summaries as fallback

---

## Job Evaluation: CompassX Group — SM & Agile Coach Pharma
- Role classification: PRIMARY
- Why selected: Direct Sanofi pharma parallel; player-coach SM model; 1099/C2C likely; remote
- Resume chosen: Agile
- Key strengths match: CS-5 (pharma regulated), CS-6 (SPC6 coaching), CS-1 (enterprise delivery), CS-7 (regulated)
- Key gaps: Clinical Development domain specificity; rate unknown
- Confidence: 8/10

## Job Evaluation: Stand Together — Agile Practice Lead
- Role classification: PRIMARY
- Why selected: SPC6 practice-building match; $151K-$204K excellent comp; remote eligible
- Resume chosen: Agile
- Key strengths match: CS-6 (SAFe practice build), CS-1 (enterprise scale), CS-5 (cross-org)
- Key gaps: Non-technical focus; coaching-forward positioning (acceptable for this role)
- Confidence: 7/10

## Job Evaluation: Omada Health — Staff AI Transformation PM
- Role classification: SECONDARY
- Why selected: Governance + executive reporting match; $155K-$202K; remote; healthcare adjacent
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise program), CS-4 (executive reporting/dashboards), CS-5 (cross-functional)
- Key gaps: AI transformation hands-on experience; "Staff" level may expect deeper tech depth
- Confidence: 6/10

## Job Evaluation: CGS — Agile Coach Federal
- Role classification: PRIMARY
- Why selected: SAFe SPC6 enterprise implementation; DevOps culture; federal regulated environment
- Resume chosen: Agile
- Key strengths match: CS-6 (SAFe ARTs/LPM), CS-3 (DevOps governance), CS-7 (regulated), CS-5 (cross-functional)
- Key gaps: Security clearance (likely required, not held); DevSecOps tools depth
- Confidence: 5/10 (clearance uncertainty is major)

## Job Evaluation: Nava — Sr. Project Manager NJ
- Role classification: SECONDARY
- Why selected: NJ local hybrid; Agile + traditional PM blend; client-facing program lead
- Resume chosen: Technical PM
- Key strengths match: CS-1 (program ownership), CS-5 (stakeholder management)
- Key gaps: Limited technical differentiation; salary may be below $130K target
- Confidence: 5/10

## Job Evaluation: Grow Therapy — PM AI Operations Enablement
- Role classification: SECONDARY
- Why selected: AI CoE positioning for career growth; UAT/vendor match; $144K-$168K; healthcare
- Resume chosen: Technical PM
- Key strengths match: CS-1 (program management), CS-5 (cross-functional), UAT coordination
- Key gaps: AI hands-on experience; NYC on-site required
- Confidence: 6/10

---

## Batch Summary
- Total processed: 10 (6 evaluated, 4 rejected)
- Strong fits (≥4.0): 1 (CompassX 4.2/5)
- Moderate fits (3.0-3.9): 5 (Stand Together 3.8, Omada 3.6, CGS 3.5, Grow Therapy 3.4, Nava 3.3)
- Weak fits (<3.0): 0 evaluated (4 rejected pre-evaluation)
- Unclear roles: 0
- Patterns noticed: AI Transformation PM roles are proliferating across healthtech; pharma SM/Agile Coach roles leverage Sanofi experience well; federal roles consistently require clearance

---

## Resume Decision
- Resume used: Agile for PRIMARY roles (CompassX, Stand Together, CGS); Technical PM for SECONDARY roles (Omada, Nava, Grow Therapy)
- Reason: PRIMARY roles engage CS-6 (SAFe/coaching) heavily; SECONDARY roles engage CS-1/CS-4 (delivery + reporting)
- Any ambiguity: Stand Together could be either resume — chose Agile because practice-building is the core function
- Missing data from cv.md: None — all proof points sourced from cv.md

---

## Final State
- Total outputs: 6 evaluation reports + 10 scan-history entries + pipeline updates
- Reports generated: 6 (#007–#012)
- Applications prepared: 6 (pending user review before submission)
- Any failed steps: WebFetch blocked by proxy for all job boards (workaround: WebSearch summaries)
- Any skipped steps: PDF generation skipped (no Playwright in batch mode)
- Confidence: 7/10
