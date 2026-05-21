# Session Log: career-ops daily run — 2026-05-21

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 16 search queries across Greenhouse, Ashby, Lever, Dice, Indeed/LinkedIn, and 20+ tracked companies
  - New jobs found: 10 (curated from ~50+ raw search results)
  - Jobs evaluated: 10
  - Applications prepared: 0 (evaluation-only batch — no auto-submit per safety rules)
  - Primary roles: 4 (Citi VP PM 4.3, Citi Risk SM/Coach 4.1, Nava Sr PM 3.9, Neon One ADM 3.8)
  - Secondary roles: 6 (Toast IT DM 4.0, Roku AI PM 3.7, TTEC Digital 3.6, Coretelligent 3.6, CentralReach 3.5, Mercury 3.4)
  - Rejected: 0 (all 10 scored 3.4+ — none below the 3.0 threshold)

- Key Decisions:
  - Prioritized Citi roles highest: VP-level PM + Scrum Master/Coach in regulated financial services engage 4-5 Core Strengths each and match the Jersey City/NYC location
  - Classified Toast IT Delivery Manager as secondary despite 4.0 score because delivery manager archetype is secondary per target_roles config
  - Included Mercury (3.4) despite hands-on technical coding gap because fintech + equity comp could be strategic
  - Selected Agile resume for 2 coaching-primary roles (Citi Risk SM, Neon One ADM); Technical PM resume for remaining 8

- What Worked:
  - WebSearch as fallback for JD extraction when WebFetch was network-blocked — got sufficient content for scoring from search snippets, cached job board pages, and third-party mirrors
  - Core Strength Engagement Test scoring produced differentiated, defensible scores (3.4 to 4.3 range) with clear rationale
  - Scan-history.tsv deduplication prevented re-processing of all 10 jobs from the April 6 batch

- What Failed:
  - WebFetch returned 403 on all job board URLs — network allowlist restricts outbound HTTP to search engine proxy only
  - No PDF generation possible (Playwright unavailable in batch mode) — all 10 reports have PDF ❌

- Friction:
  - Merge script uses Spanish canonical states (Evaluada, Aplicado) while states.yml defines English labels (Evaluated, Applied) — normalize-statuses.mjs converted existing English statuses to Spanish, which may confuse the user

- Missing Context:
  - Full JD text for several roles (CentralReach especially was thin) — would improve scoring accuracy
  - Salary data for Citi, Nava, Neon One, Coretelligent — had to estimate from market data
  - Verification of whether roles are still open (batch mode limitation)

- What To Do Differently:
  - Run with Playwright-enabled environment next time for full JD fetching and PDF generation
  - Consider adding Google cache or web archive URLs as fallback in portals.yml for when direct fetches fail

- Reusable Insight:
  - Financial services roles (Citi) consistently score highest because CS-5 (regulated stakeholder alignment) + CS-7 (compliance-aware delivery) engage simultaneously — this sector should be scanned more frequently
  - AI-adjacent roles consistently hit the same wall: 3+ years AI experience requirement — candidate should consider building AI PM portfolio pieces to close this gap

- Top Mistake:
  - Did not attempt Greenhouse API endpoint format variations (JSON API returned 403 too, but different URL structures or headers might have worked)

- Top Improvement Opportunity:
  - Financial services focused scan — add more banks, insurance companies, and fintech firms to portals.yml (Goldman Sachs, Morgan Stanley, BNY Mellon, AIG, TIAA) as this sector shows highest score correlation

---

## Validation Check

- No vague language: Yes
- At least 1 insight: Yes (financial services sector insight + AI experience gap pattern)
- Numeric fields filled: Yes (all counts, scores, confidence levels)
- File written successfully: Yes
