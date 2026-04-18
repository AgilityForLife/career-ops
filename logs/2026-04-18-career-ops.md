### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 7 search queries across Greenhouse, Lever, Ashby, Dice, and general contract boards
  - New jobs found: 28 unique URLs (after dedup against 10 existing scan-history entries)
  - Jobs evaluated: 8 full evaluations with reports
  - Applications prepared: 0 (evaluation only — materials ready for candidate review)
  - Primary roles: 6 (Bixal, Nava, Veda Data, HealthVerity, Capital Rx, Komodo Health)
  - Secondary roles: 2 (Calendly, Cerebras)
  - Rejected: 4 (RXR skill mismatch, WPP India location, Rackner clearance, Motive specialization)
  - Pipeline pending: 10 additional URLs queued for future evaluation

- Key Decisions:
  - Prioritized healthcare SM roles (Capital Rx, Komodo Health, HealthVerity) despite borderline scores because they match primary target profile (Scrum Master) and offer location flexibility
  - Scored Calendly highest (4.2/5) despite being a secondary target role because CS-2 + CS-3 + CS-7 premium combination was the strongest alignment
  - Rejected RXR AI Transformation Lead ($120-130K) despite salary fit because the role is AI adoption/evangelism, not program delivery
  - Fixed verify-pipeline.mjs to accept English canonical statuses alongside Spanish, per states.yml label definitions

- What Worked:
  - Parallel WebSearch across multiple job boards yielded 28 new URLs efficiently
  - Greenhouse API search provided good JD summaries when direct fetch was blocked
  - Core Strength Engagement Test consistently differentiated strong fits from borderline roles
  - Bixal role (4.1/5) is an excellent discovery — perfect cert match + federal + remote

- What Failed:
  - WebFetch returned 403 on all job board sites (Greenhouse, Lever, Ashby). Had to rely on WebSearch summaries for JD details, which provide less complete information
  - Anthropic Greenhouse API also returned 403
  - Cannot verify if offers are still active (Playwright not available in batch mode)
  - Normalize-statuses.mjs converts to Spanish instead of English, conflicting with CLAUDE.md canonical states

- Friction:
  - WebFetch 403 errors forced search-based JD extraction — less reliable than direct page reads
  - Merge-tracker.mjs defaults "Evaluated" to "Evaluada" (Spanish) — required manual fix of applications.md
  - Verify script originally rejected English statuses — required code fix

- Missing Context:
  - Salary data for most roles (only HealthVerity $65-155K and RXR $120-130K had explicit ranges)
  - Whether Bixal VA role requires specific clearance level beyond suitability
  - Nava compensation range (civic tech may pay below market)
  - Cerebras remote candidate acceptance rate

- What To Do Differently:
  - Pre-check WebFetch accessibility before scanning to avoid wasted attempts
  - Update normalize-statuses.mjs and merge-tracker.mjs to use English canonical statuses per CLAUDE.md
  - Add salary range verification step before scoring to filter deal-breakers earlier

- Reusable Insight:
  - Healthcare Scrum Master roles are abundant and location-flexible but often lack "Senior" title and may underpay. Screen for salary range before investing evaluation time. The regulated delivery angle (CS-7) from Sanofi is the key differentiator for these roles.

- Top Mistake:
  - Attempted 8 WebFetch calls that all returned 403 before switching to search-based extraction. Should have tested one first.

- Top Improvement Opportunity:
  - Fix the normalize/merge/verify scripts to use English canonical statuses. The current Spanish defaults conflict with CLAUDE.md and create unnecessary manual correction work every run.
