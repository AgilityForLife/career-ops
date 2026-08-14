# Session Log: 2026-08-14

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: Greenhouse (boards + job-boards), Ashby, Lever, OpenAI careers, Palantir careers, Anthropic (blocked)
  - New jobs found: 25 unique new URLs across all portals
  - Jobs evaluated: 6 (full reports with CS Engagement Test)
  - Applications prepared: 0 (no auto-submit; PREPARE ONLY for top candidates)
  - Primary roles: 1 (NTT DATA Scrum Master/Agile Coach — de-emphasis cap at 3.0)
  - Secondary roles: 2 (Nava Sr. PM 3.5/5, Spear AI PM 3.2/5)
  - Rejected: 3 (TTEC Digital 2.8, NICE 2.9, CRA 2.7)

- Key Decisions:
  - Applied Tier 4 de-emphasis cap to NTT DATA Agile Coach role (3.0/5 max) — SPC6 is premium but coaching framing caps comp
  - Rejected TTEC Digital despite strong comp ($140-165K) and NJ-eligible remote because of hard 2+ yr Google CCAI requirement
  - Classified Nava as SECONDARY (consulting/client-facing PM) rather than PRIMARY despite 9-scrum-team scale
  - Logged all 8 OpenAI TPM roles as SF-based location skips — no remote-US options available
  - Flagged G-P AI Transformation listing as duplicate/refresh of existing report 028

- What Worked:
  - Scan-to-evaluate pipeline ran end-to-end autonomously
  - WebSearch provided enough JD detail for scoring despite WebFetch being blocked on all job board domains
  - Parallel agent for report writing completed all 6 reports successfully
  - Tracker merge + verify-pipeline both clean (0 errors, 0 warnings)

- What Failed:
  - WebFetch blocked for ALL job board domains (Greenhouse, Ashby, Lever) — 3rd consecutive scan with this limitation
  - Anthropic boards-api.greenhouse.io also blocked — cannot pull structured API data
  - JD evaluations based on WebSearch snippets only — may miss key requirements or deal-breakers

- Friction:
  - WebFetch egress block continues to degrade evaluation confidence — scoring from search summaries vs full JDs
  - Merge script auto-renumbers entries (53-58 in TSV → 56-61 in tracker) creating discrepancy between report file number and tracker row number
  - Merge script mapped "Discarded" → "Evaluada" instead of "Descartado" — required manual fix

- Missing Context:
  - Full JDs would improve scoring accuracy by 1-2 points on confidence scale
  - Compensation data missing for 4 of 6 evaluated roles (only TTEC Digital listed $140-165K)
  - Clearance requirements for Spear AI unconfirmed — maritime defense company likely requires at minimum Public Trust

- What To Do Differently:
  - Consider adding WebSearch queries specifically targeting salary data for comp-unlisted roles
  - Pre-map TSV status values to canonical states (Evaluada/Descartado) to avoid merge script normalization issues

- Reusable Insight:
  - AI PM roles (NICE, CRA) are growing but tend to value product/AI-native skills over enterprise delivery program management — Erick's CS-1/CS-2 differentiators don't map well to these roles
  - Consulting PM roles (Nava, TTEC) require client-facing delivery pedigree that Erick's primarily internal-delivery experience doesn't fully cover — worth strengthening consulting/client-facing framing in resume

- Top Mistake:
  - TSV status values used English ("Evaluated"/"Discarded") instead of system canonical ("Evaluada"/"Descartado") causing merge script warnings

- Top Improvement Opportunity:
  - Solve WebFetch egress block — this has been the limiting factor for 3 consecutive scans and will continue to degrade evaluation quality until resolved

---

## Validation Check
- No vague language: confirmed
- Insights present: 2 reusable insights documented
- Numeric fields filled: all populated
- File written successfully: yes
