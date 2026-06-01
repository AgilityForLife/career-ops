# Session Log: career-ops daily run

### Session: career-ops daily run — 2026-06-01

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries + 6 tracked companies actively searched
  - New jobs found: 22 new unique URLs
  - Jobs evaluated: 6 full evaluations + 1 rejected
  - Applications prepared: 0 (evaluation only — no auto-submit)
  - Primary roles: 2 (Leidos SW Tech Mgr NJ 3.8/5, AHEAD Sr SM Remote 3.5/5)
  - Secondary roles: 4 (Roku AI PM 3.5/5, TTEC Digital Principal TPM 3.4/5, Toast Sr TPM 3.3/5, Bloomberg PM 3.0/5)
  - Rejected: 1 (Flywheel Digital — domain mismatch, media/marketing tech)
  - Queued for future: 14 URLs added to pipeline.md pending evaluation

- Key Decisions:
  - Prioritized Leidos NJ (FAA/TFDM) as strongest new PRIMARY — engages 5 of 7 Core Strengths
  - AHEAD Sr SM selected as solid Agile-path primary despite lower CS engagement — exact title match + comp target
  - Bloomberg Philanthropies marked low-priority despite AI/data theme — 10+ years public-sector requirement is effectively disqualifying
  - Toast included despite only 2 CS engaged — CRM platform preference uniquely leverages Salesforce background (normally Tier 4)
  - Used "Evaluada" (Spanish) for status labels to match pipeline script expectations

- What Worked:
  - WebSearch reliably returned fresh job listings from all major boards (Greenhouse, Lever, Ashby)
  - Cached job details from aggregator sites (Remotive, BuiltIn, ZipRecruiter) provided enough info when direct fetches failed
  - Scoring framework (Core Strength Engagement Test) produced consistent, defensible scores
  - Scan deduplication worked correctly — no false matches against prior history

- What Failed:
  - WebFetch returned 403 Forbidden on ALL job board URLs (Greenhouse, Lever, Ashby, Leidos, Roku)
  - Greenhouse API (boards-api.greenhouse.io) also returned 403
  - No PDF generation possible in batch/headless mode
  - merge-tracker.mjs incorrectly matched new Leidos role to existing entry #3 by company name (different position) — required manual fix

- Friction:
  - 403 blocks forced reliance on search-derived metadata instead of full JD text — reduced evaluation confidence
  - Normalize/verify scripts use Spanish labels but CLAUDE.md documents English labels — creates confusion
  - merge-tracker.mjs matching logic too aggressive on company name (merges different roles at same company)

- Missing Context:
  - Full JD text for Roku AI Program Manager (would significantly improve evaluation confidence)
  - AHEAD Sr SM full requirements list (ADO vs Jira primary tool unknown)
  - TTEC Digital specific requirements and comp range
  - Clearance obtainability timeline for Leidos Public Trust role

- What To Do Differently:
  - Pre-verify that WebFetch can reach target domains before starting batch — if all 403, switch to search-only evaluation earlier
  - For company-duplicate roles (e.g., multiple Leidos positions), add role title to merge key, not just company name
  - Request Playwright/browser access for future pipeline runs to get full JD text

- Reusable Insight:
  - Job board direct-fetch is unreliable in headless batch mode; aggregator sites (BuiltIn, Remotive, Himalayas, ZipRecruiter) often have cached JD text that WebSearch can surface

- Top Mistake:
  - Relying on WebFetch for JD retrieval without a fallback plan — should have immediately pivoted to search-derived details after first 403

- Top Improvement Opportunity:
  - Build a JD cache: when a job is found via WebSearch and details are in the snippet/aggregator, immediately save to jds/ as markdown for reliable offline evaluation
