# Session Log: 2026-04-17

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 (Greenhouse x4, Ashby, Lever x2, AI/Transformation, LinkedIn/Contract, Dice, Anthropic, Palantir, JPMorgan, Gov/Federal)
  - New jobs found: 30+ URLs detected; 7 selected for full evaluation after dedup and filtering
  - Jobs evaluated: 7
  - Applications prepared: 0 (evaluation only — safety rule: never auto-submit)
  - Primary roles: 3 (Capital Rx SM 3.2, Ardent SM DHS 3.5, Komodo Health SM 3.1)
  - Secondary roles: 4 (Calendly Sr TPM 4.1, Accela TPM 3.8, Nava Sr PM 3.6, TTEC Principal TPM 3.3)
  - Rejected: 0 (all 7 evaluated roles scored above 3.0)

- Key Decisions:
  - Prioritized Calendly Sr TPM (4.1/5) as top recommendation — engages 6/7 Core Strengths
  - Selected Accela TPM (3.8/5) as second-strongest based on $140K-$160K comp match and remote-first policy
  - Included all roles scoring 3.0+ per targeting logic — did not over-filter
  - Used WebSearch snippets for evaluation since WebFetch and curl were blocked by job board 403s
  - Skipped Vonage AI PM (likely London-based FTC) and several aggregator listings (Jobgether)

- What Worked:
  - WebSearch portal scans successfully identified 30+ new URLs across all major job boards
  - Core Strength Engagement Test provided clear, defensible scoring differentiation
  - Batch processing 7 evaluations in one session is efficient
  - Scan-history dedup successfully filtered all 10 previously-seen URLs

- What Failed:
  - WebFetch returned 403 for all job board domains (Greenhouse, Lever, Ashby, Dice)
  - Greenhouse JSON API also blocked
  - curl blocked by host allowlist
  - JD details limited to WebSearch snippets — evaluations based on partial information

- Friction:
  - Multiple fallback attempts for JD fetching wasted time (WebFetch → API → curl → WebSearch)
  - normalize-statuses.mjs converts to Spanish aliases instead of English canonical labels
  - merge-tracker.mjs reports "non-canonical" for English "Evaluated" status

- Missing Context:
  - Full JD text for all 7 roles (only had search snippets)
  - Salary/rate info for 5 of 7 roles (only Accela disclosed $140K-$160K)
  - Specific location requirements for Ardent DHS role
  - Whether candidate has applied to any of these companies previously via other channels

- What To Do Differently:
  - Fix normalize-statuses.mjs to use English canonical labels from states.yml (Evaluated, Applied, etc.) instead of Spanish aliases
  - Consider adding a Playwright-based JD scraper script that can be run separately to pre-fetch JDs before evaluation
  - Batch the WebSearch queries more efficiently — some portals returned overlapping results

- Reusable Insight:
  - CS-2 + CS-3 + CS-7 trifecta (cloud + DevOps + compliance) consistently produces scores above 4.0 — should prioritize scanning for roles that explicitly mention all three

- Top Mistake:
  - Spent 4 fallback attempts on JD fetching before accepting WebSearch as the only viable option — should have recognized the 403 pattern after the first batch

- Top Improvement Opportunity:
  - Build a local JD cache script (Playwright or similar) that can pre-fetch and store JDs from pipeline URLs, making batch evaluation faster and more accurate
