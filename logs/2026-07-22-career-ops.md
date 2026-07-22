# Session Log: 2026-07-22

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries + 30+ tracked companies (Greenhouse, Lever, Ashby, Dice, LinkedIn, government portals)
  - New jobs found: 21 unique new URLs (not in scan history)
  - Jobs evaluated: 7 full evaluations with reports
  - Applications prepared: 0 (all pending candidate review in Evaluated status)
  - Primary roles: 4 (CompassX SM/Agile Coach Pharma 3.8, Capco Agile Delivery Lead 3.7, HealthVerity Sr PM/SM 3.3, and noted roles pending evaluation)
  - Secondary roles: 3 (Grant Street Group Sr PM 3.9, ASSYST TPM Data/AI 3.5, Real Chemistry Sr AI PM 3.4, Wikimedia Lead TPgM 3.2)
  - Rejected: 5 (G-P over-qualified gap, Tribe AI experience gap, Airtable low-fit, 3Pillar wrong location, Flywheel domain mismatch)
  - Noted for future evaluation: 8 URLs added to pipeline pending queue

- Key Decisions:
  - Prioritized pharma and Agile Coach roles as PRIMARY targets per skills-model.md positioning
  - Rejected G-P despite AI Transformation title due to $20M+ portfolio experience requirement ($3M max on CV)
  - Included Grant Street Group ($150K-$225K) despite being SECONDARY because comp substantially exceeds target
  - Fixed verify-pipeline.mjs to accept English status labels (Evaluated, Responded, etc.) as aliases of Spanish canonical statuses

- What Worked:
  - WebSearch successfully retrieved JD details when WebFetch was blocked (403) on all job board URLs
  - Greenhouse API structure (boards-api.greenhouse.io) provided direct JD access for some listings
  - Scoring model (Core Strength Engagement Test) efficiently filtered 21 leads down to 7 evaluations + 5 rejects
  - Pipeline integrity checks caught the status label inconsistency early

- What Failed:
  - WebFetch returned HTTP 403 on all Greenhouse, Lever, and Ashby URLs — direct JD retrieval failed entirely
  - PDF generation not available in batch mode (no Playwright)
  - Offer verification not possible (batch mode, no Playwright)

- Friction:
  - The merge-tracker.mjs and verify-pipeline.mjs scripts use Spanish canonical status labels but CLAUDE.md documents English labels — mismatch causes false validation failures
  - WebFetch proxy blocks all major job board domains, requiring multi-step WebSearch workarounds that provide incomplete JD data

- Missing Context:
  - Exact salary/rate for CompassX Group, Capco, ASSYST Inc, and Wikimedia Foundation roles
  - Remote vs on-site confirmation for ASSYST (Austin TX)
  - Actual on-site frequency for HealthVerity (NJ approved but Philly HQ mentioned)

- What To Do Differently:
  - Pre-configure a Playwright-based JD scraper that runs before evaluations to cache full JD text
  - Add English status labels as first-class canonical statuses in verify/merge scripts, not just aliases

- Reusable Insight:
  - AI-adjacent PM roles (AI Transformation, AI Delivery Lead, AI Project Manager) are growing rapidly but most require direct AI delivery track record — candidate should consider building an AI delivery case study or pursuing 1-2 AI-adjacent contract roles to fill this gap

- Top Mistake:
  - None critical — the status label mismatch was caught and fixed in-session

- Top Improvement Opportunity:
  - Build a lightweight AI project delivery proof point (e.g., a case study from BTII AI curriculum work or a personal AI automation project) to unlock the AI-adjacent PM roles that are increasingly common at $150K+ comp levels
