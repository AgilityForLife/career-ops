### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries across Greenhouse, Ashby, Lever boards + tracked company searches
  - New jobs found: 45+ candidates surfaced; 5 evaluated, ~40 logged to scan-history
  - Jobs evaluated: 5
  - Applications prepared: 0 (all held for manual review; no PDFs in batch mode)
  - Primary roles: 2 (Nava Sr PM 4.1/5, Nava 1099 PM 4.0/5)
  - Secondary roles: 3 (GitLab 3.8/5, Myriad360 3.6/5, SavvyMoney 3.5/5)
  - Rejected: 0 (all candidates below threshold logged as skipped in scan-history)

- Key Decisions:
  - Evaluated 5 strongest candidates from 45+ surfaced; skipped ~40 on location, domain, clearance, aggregator, or backlog criteria
  - Both Nava PBC roles evaluated despite same company — different roles (1099 SM vs Sr PM), different work modes (remote vs NJ hybrid)
  - Used WebSearch for all JD details since WebFetch and Greenhouse API remain blocked
  - All evaluations marked "unconfirmed (batch mode)" per CLAUDE.md verification rules

- What Worked:
  - Parallel search queries across multiple portals yielded good coverage in limited time
  - Scan-history deduplication prevented re-evaluation of ~20 already-seen postings
  - Nava PBC emerged as a strong corridor — both government digital services roles engage 4-5+ CS

- What Failed:
  - WebFetch and Greenhouse boards API remain blocked — JD details limited to WebSearch summaries
  - No PDFs generated (no Playwright in batch mode)

- Friction:
  - Job board domain blocking means JD details are incomplete; salary ranges often unavailable from search summaries alone
  - Some backlogged postings from prior scans may have expired since; no way to verify without WebFetch

- Missing Context:
  - Exact 1099 hourly rate for Nava PBC posting (critical for $60/hr floor verification)
  - GitLab specific salary band for this PM role (estimated from Levels.fyi)
  - Whether Nimble Gravity and MojoRank roles are US-remote eligible

- What To Do Differently:
  - Consider adding a dedicated government/civic-tech portal search query given Nava PBC fit pattern
  - Prioritize Nava PBC dual application in next manual session (both roles at same company = referral leverage)

- Reusable Insight:
  - Government digital services (USDS/18F-style civic tech) is an underexplored high-fit corridor: regulated delivery (CS-7) + cross-functional alignment (CS-5) + SAFe (CS-6) all map directly; PMP + SPC6 + PMI-ACP triple certification exceeds typical government PM bars

- Top Mistake:
  - None significant; scan execution was clean

- Top Improvement Opportunity:
  - Add Nava PBC careers page + USDS/18F-adjacent companies to portals.yml tracked_companies for systematic government digital services coverage
