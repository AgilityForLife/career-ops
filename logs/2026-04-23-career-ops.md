# Session Log — 2026-04-23

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries across Greenhouse, Ashby, Lever, Dice, LinkedIn, and 6 tracked companies (Citi, Anthropic, J&J, Merck, JPMorgan, and more)
  - New jobs found: 8 new URLs evaluated from scan results
  - Jobs evaluated: 5 full evaluations with reports
  - Applications prepared: 5 (materials ready, not submitted per safety rules)
  - Primary roles: 3 (Ardent SM, Capital Rx SM, Slide Insurance SM)
  - Secondary roles: 2 (Citi VP PM, Roku AI PM)
  - Rejected: 3 (RXR AI Transformation 2.7/5, TTEC Digital Principal TPM 2.8/5, Komodo Health SM 2.9/5)

- Key Decisions:
  - Evaluated Citi VP PM role as highest-scored new find (4.2/5) — Jersey City location is local, VP-level matches experience, executive reporting requirement is direct CS-4 match
  - Rejected TTEC Digital despite strong title match — Google CCAI 2yr requirement is a hard blocker
  - Rejected Komodo Health SM despite healthcare fit — EoR employment structure is not direct hire
  - Classified Slide Insurance SM as worth applying — Verisk P&C insurance domain overlap is a unique differentiator

- What Worked:
  - Multi-portal parallel scanning covered wide surface area efficiently
  - Core Strength Engagement Test provided consistent, defensible scoring across diverse roles
  - Financial services and government portals continue to surface strong-fit roles
  - Citi find is the strongest new lead since System One on 2026-04-06

- What Failed:
  - WebFetch returned 403 on all 14 direct JD fetch attempts (both page URLs and Greenhouse API endpoints)
  - curl also blocked ("Host not in allowlist") — sandbox networking restrictions
  - This forced evaluation from WebSearch summaries only, reducing confidence in scores by ~0.3 points

- Friction:
  - JD fetch blocking is the primary bottleneck — evaluations without full JD text are inherently lower confidence
  - Merge script converts "Evaluated" to "Evaluada" (Spanish canonical) which required manual awareness

- Missing Context:
  - Full JD text for all 5 evaluated roles (blocked by 403)
  - Citi salary/comp details — VP-level comp range estimated from market data
  - Roku AI PM full requirements — score could shift ±0.3 with full JD
  - Capital Rx remote vs. hybrid confirmation

- What To Do Differently:
  - Consider running Playwright-based JD fetching in a non-sandboxed environment for higher-confidence evaluations
  - Pre-cache JD text via local saves (jds/ directory) before batch evaluation runs

- Reusable Insight:
  - Financial services roles in Jersey City/NYC continue to be the highest-scoring opportunities — Verisk background + Power BI executive reporting + regulated delivery creates a premium positioning that most TPM candidates cannot match
  - Insurance P&C roles (Slide Insurance) should be prioritized due to Verisk domain overlap — this is a unique differentiator

- Top Mistake:
  - None critical. The 403 blocking was environmental, not process-related.

- Top Improvement Opportunity:
  - Set up a pre-scan JD caching step that saves full JD text to jds/ directory before evaluation runs, bypassing fetch issues during evaluation

---

## Pipeline Summary (cumulative)

| Metric | Value |
|--------|-------|
| Total applications tracked | 11 |
| Applied | 6 |
| Evaluated (pending decision) | 5 |
| Rejected/Skipped | 3 (not tracked in applications.md) |
| Highest score | 4.2/5 (System One, Citi) |
| Average score (evaluated) | 3.42/5 |
| Primary target roles | 6 |
| Secondary target roles | 5 |
