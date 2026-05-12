# Session Log — 2026-05-12

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, LinkedIn, 6 company-specific portals, government/DOT, construction/Procore, AI/transformation categories
  - New jobs found: 17 unique new listings identified (after dedup)
  - Jobs evaluated: 7 (full reports with scoring)
  - Applications prepared: 0 (all in Evaluated status — user reviews before applying)
  - Primary roles: 2 (Ardent SM DHS, Center SM)
  - Secondary roles: 5 (TTEC Digital Principal TPM, Nava Sr PM, Coretelligent Sr TPM, Roku AI PM, Energy Solutions Sr TPM)
  - Rejected: 3 (Ripple — crypto negative filter, Vonage — UK FTC, RXR — low CS engagement)
  - Skipped/borderline: 8 (CentralReach, Slide Insurance, Wellfit, Komodo Health, Coretelligent IT PM dup, Rackner clearance, 3Cloud Philippines, WPP India)

- Key Decisions:
  - Rejected Ripple Principal TPM ($216-270K) despite excellent comp because crypto/blockchain triggers negative title filter per portals.yml
  - Rejected Vonage PM AI despite interesting AI+PM fit because role appears UK-based (Built In London reference) and is a fixed-term contract
  - Included Roku AI PM (3.3/5) despite 3yr AI gap because $140-170K comp is strategic and CS-1/CS-5 alignment is strong
  - Fixed verify-pipeline.mjs to accept English canonical statuses (Evaluated, Applied, etc.) alongside existing Spanish equivalents — states.yml already defined both

- What Worked:
  - Parallel WebSearch scanning across 12+ query patterns produced strong coverage
  - WebSearch snippets provided sufficient JD content for evaluation despite WebFetch 403 blocks
  - Core Strength Engagement Test scoring methodology produced consistent, defensible rankings
  - Dedup against scan-history.tsv prevented re-evaluation of 10 previously seen listings

- What Failed:
  - WebFetch returned 403 Forbidden on ALL job board direct URLs (Greenhouse, Lever, Ashby) — no full JD access
  - Greenhouse API endpoints (Anthropic, Glean) returned 403 Forbidden
  - Financial services portals (JPMorgan, Prudential, MetLife) returned generic career pages, no specific listings
  - Pharma portals (J&J, Merck) returned minimal results

- Friction:
  - Job board anti-scraping measures forced reliance on search snippets instead of full JDs — evaluation confidence reduced
  - merge-tracker.mjs converts "Evaluated" to "Evaluada" (Spanish alias) despite states.yml using English labels
  - verify-pipeline.mjs had hardcoded Spanish canonical statuses only — required code fix

- Missing Context:
  - Full JD text for all 7 evaluated roles (only had search snippets)
  - Compensation data for 4 of 7 roles (TTEC Digital, Nava, Ardent, Center)
  - Location specifics for Center SM role
  - Whether Energy Solutions master's degree is hard or preferred requirement

- What To Do Differently:
  - Consider adding Playwright-based scraping in a non-batch session for full JD retrieval
  - Fix merge-tracker.mjs to accept English canonical statuses natively (not just verify script)
  - Add Glassdoor/Levels.fyi comp checks for roles with undisclosed compensation
  - Consider adding more staffing/contract portals (Robert Half, TEKsystems) for C2C opportunities

- Reusable Insight:
  - WebSearch with site: operators + job-specific keywords is a reliable fallback when direct URL fetching is blocked — enough for initial scoring and triage

- Top Mistake:
  - Not checking WebFetch availability against job boards before starting — wasted time on 8 parallel 403 failures

- Top Improvement Opportunity:
  - Build a local JD cache (jds/ directory) by fetching full JDs in interactive sessions with Playwright, then batch can score from local files

## Final State
- Total outputs: 7 reports, 7 tracker TSVs, 18 scan-history entries
- Reports generated: 007 through 013
- Applications prepared: 0 (Evaluated status, pending user review)
- Any failed steps: None (all completed, WebFetch limitation worked around)
- Any skipped steps: PDF generation skipped (no Puppeteer in batch), offer verification skipped (batch mode caveat noted)
- Confidence (1–10): 7
