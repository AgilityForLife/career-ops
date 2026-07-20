### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 5 search queries across Greenhouse, Lever, Ashby, Dice/LinkedIn, and AI-specific boards
  - New jobs found: 10 new unique URLs (8 evaluated, 2 rejected)
  - Jobs evaluated: 8 full evaluation reports generated (#007–#014)
  - Applications prepared: 0 (materials ready for candidate review; no auto-submission per safety rules)
  - Primary roles: 5 (Wilson Elser 3.9, CompassX 3.8, HealthVerity 3.5, NTT DATA 3.2, + pipeline tracking)
  - Secondary roles: 3 (Grant Street Group 3.7, webAI 3.5, Roboyo 3.5, Bixal 3.4)
  - Rejected: 2 (Airtable AI Programs — evangelist/facilitator role not PM 2.8/5; 3Pillar — pure coaching role, uncertain US location 2.7/5)

- Key Decisions:
  - Classified CompassX pharma role as PRIMARY despite consulting nature — Sanofi background is a direct match for biotech client engagement
  - Scored Grant Street Group at 3.7 despite limited CS-2 engagement — exceptional comp ($150-225K) and govtech/financial services alignment justified the secondary classification
  - Rejected Airtable AI Programs despite strong salary ($142-205K) — role is customer evangelist/facilitator/workshop leader, not PM; de-emphasis rule applied
  - Rejected 3Pillar Senior SM — pure coaching role with unclear US location availability (India/Costa Rica results in search)

- What Worked:
  - Parallel web search across 5 portal categories surfaced 10 new genuine-fit URLs efficiently
  - Parallel agent-based report writing produced all 8 reports in ~3 minutes
  - CompassX pharma role is an excellent Sanofi-experience match with C2C/1099 preferred comp structure

- What Failed:
  - WebFetch returned 403 for all job board URLs (Greenhouse, Lever, Ashby) — proxy blocks direct fetching
  - Greenhouse JSON API also blocked by proxy (CONNECT tunnel 403)
  - Had to rely on WebSearch summaries for JD details instead of full job descriptions
  - Merge script defaulted statuses to Spanish ("Evaluada"/"Aplicado") — required manual correction

- Friction:
  - Network proxy restrictions prevented direct JD fetching — all evaluations based on search-extracted summaries rather than full job descriptions
  - Verify-pipeline.mjs and normalize-statuses.mjs scripts treat Spanish labels as canonical, conflicting with English labels in states.yml

- Missing Context:
  - Full job descriptions for all 8 evaluated roles (only search summaries available)
  - Salary data missing for webAI (#013) and Roboyo (#014)
  - 3Pillar location eligibility unclear — US vs international
  - Previous scan run date unknown (last scan was 2026-04-06, 3.5 months ago)

- What To Do Differently:
  - Fix verify-pipeline.mjs and normalize-statuses.mjs to use English canonical labels from states.yml instead of Spanish aliases
  - Consider adding Playwright-based JD fetching as fallback when proxy allows
  - Run scans more frequently than every 3.5 months to avoid large backlogs

- Reusable Insight:
  - WebSearch-only evaluations are viable for batch scanning: search results provide enough title, location, salary, and requirements data for accurate scoring, though full JD access would improve gap analysis precision

- Top Mistake:
  - Long gap since last scan (April 6 to July 20) means many earlier-posted roles may have already closed — verification step would catch this but is unavailable in batch mode

- Top Improvement Opportunity:
  - Schedule automated weekly scans to catch roles while they're fresh — the 3.5-month gap risks evaluating expired listings

## Portal Scan
- Portals scanned: Greenhouse (PM+Agile, AI/Transformation, PMO), Lever (PM+Agile), Ashby (PM+Agile), Dice/LinkedIn (Contract), AI-specific (Greenhouse AI)
- New jobs detected: 10 unique URLs not in scan-history.tsv
- Duplicates filtered: 0 (all 10 were genuinely new)
- Any anomalies: All direct URL fetches blocked by proxy (403); relied on WebSearch summaries

## Batch Summary
- Total processed: 10 URLs (8 evaluated + 2 rejected)
- Strong fits (3.5+): 5 — Wilson Elser (3.9), CompassX (3.8), Grant Street Group (3.7), HealthVerity (3.5), webAI (3.5), Roboyo (3.5)
- Weak fits (3.0-3.4): 3 — Bixal (3.4), NTT DATA (3.2)
- Unclear roles: 0
- Patterns noticed: Strong market demand for Scrum Master/Agile Coach + PM hybrid roles; pharma/biotech and AI/automation are active verticals; C2C/contract opportunities in pharma consulting (CompassX) align well with comp preferences

## Final State
- Total outputs: 8 evaluation reports, 8 TSV tracker additions, updated pipeline.md, updated scan-history.tsv
- Reports generated: 8 (#007–#014)
- Applications prepared: 0 (evaluation only; candidate review needed before application)
- Any failed steps: WebFetch 403 on all direct JD URLs; normalize-statuses.mjs applied wrong language defaults
- Any skipped steps: PDF generation skipped (batch mode); offer verification skipped (batch mode)
- Confidence (1–10): 7 — Scoring is reliable based on search-extracted JD summaries, but full JD access would increase confidence to 8-9

## Resume Decision
- Resume used: Agile resume recommended for 5 primary roles (Wilson Elser, CompassX, HealthVerity, NTT DATA, Bixal); Technical PM resume for 3 secondary roles (Grant Street Group, webAI, Roboyo)
- Reason: Primary roles are Scrum Master/Agile Coach/PM hybrids where SPC6 + PMP credentials and Agile delivery narrative lead; secondary roles are program/TPM positions where enterprise delivery scale and technical platform depth lead
- Any ambiguity: CompassX could go either way (Agile vs Technical PM) due to dual SM+Coach+PM nature — chose Agile resume to emphasize Sanofi pharma match
- Missing data from cv.md: None — all metrics and evidence drawn from cv.md
