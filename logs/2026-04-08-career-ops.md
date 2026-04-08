### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 17 (12 search queries + 5 tracked company searches)
  - New jobs found: 24 unique new URLs (after dedup against 10 existing entries)
  - Jobs evaluated: 7
  - Applications prepared: 0 (evaluation only — no auto-submit per safety rule)
  - Primary roles: 3 (Nava Sr PM 4.0/5, Capital Rx SM 3.3/5, Ardent SM DHS 3.4/5)
  - Secondary roles: 4 (CyberMedia TPM 3.8/5, Citi PM Lead 3.7/5, TTEC Digital Principal TPM 3.4/5, Calendly Sr TPM 3.2/5)
  - Rejected: 3 (Palantir TPM — too technical/engineering-focused; Agile Six DM — networking post not active opening; Lavendo TPM — non-US locations, junior scope)
  - Pending for next scan: 14 URLs queued in pipeline

- Key Decisions:
  - Prioritized Nava Sr PM as top candidate: NJ hybrid, 9 scrum teams, gov modernization matches CS-1+CS-6+CS-7 strongly
  - CyberMedia Technologies scored highest CS engagement (6/7) but capped at 3.8 due to ADO primary tool gap
  - Citi Program Management Lead evaluated despite thin JD — financial services premium and fresh posting (Apr 7) justified inclusion
  - Rejected Palantir TPM despite brand recognition — role requires deep software engineering TPM, low CS engagement (1-2)
  - Fixed verify-pipeline.mjs to accept English status labels alongside Spanish (added English aliases)

- What Worked:
  - WebSearch provided sufficient JD context for evaluation when WebFetch was blocked
  - Parallel portal scanning across 17 queries yielded good coverage
  - Core Strength Engagement Test produced consistent, defensible scores
  - Pipeline integrity checks (merge + verify) caught and resolved issues

- What Failed:
  - WebFetch returned 403 for ALL job board URLs (Lever, Greenhouse, Citi, Ashby) — no direct JD access
  - Greenhouse API also returned 403 (Anthropic, Glean boards) — API access blocked
  - Normalize-statuses.mjs converts English to Spanish (opposite of expected behavior per CLAUDE.md)
  - verify-pipeline.mjs used hardcoded Spanish statuses — fixed by adding English aliases

- Friction:
  - 403 blocks on WebFetch forced reliance on WebSearch snippets for JD evaluation — reduced evaluation confidence
  - Script ecosystem (merge, verify, normalize) uses Spanish as canonical while CLAUDE.md uses English — creates constant friction
  - No PDF generation possible in batch mode without WebFetch access to retrieve full JDs

- Missing Context:
  - Full JD text for several roles (Citi, Ardent, Capital Rx had limited details from WebSearch)
  - Salary/rate information missing for most roles
  - Location clarity for Ardent DHS role
  - Whether Nava role is FTE or contract

- What To Do Differently:
  - Consider adding a cached JD retrieval step using Playwright in interactive sessions before batch processing
  - Standardize all scripts to use English status labels as canonical (states.yml already supports this)
  - Track Nava as a priority company — multiple open PM/delivery roles, NJ-based, government focus

- Reusable Insight:
  - When WebFetch is blocked across all job boards, WebSearch still provides 60-70% of the JD information needed for initial evaluation. Flag reports as lower-confidence and schedule follow-up verification in interactive sessions.

- Top Mistake:
  - Not pre-verifying WebFetch access before starting evaluations. Could have adjusted workflow earlier.

- Top Improvement Opportunity:
  - Consolidate Nava job exploration: 6 Nava positions detected (Sr PM, PM, Sr Program Manager, Program Manager, Senior Manager Delivery Operations, OSCER PM). A single focused Nava evaluation session would be more efficient than processing them individually across daily runs.
