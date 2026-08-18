### Session: career-ops daily run — 2026-08-18

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, and company-specific portals
  - New jobs found: 25 new candidates not in scan-history
  - Jobs evaluated: 4 (full reports generated)
  - Applications prepared: 0 (evaluations only, no auto-submit per safety rules)
  - Primary roles: 1 (Nava PBC 4.0/5)
  - Secondary roles: 3 (Toast 3.2/5, Jencap 3.0/5, Anthropic GTM 2.8/5)
  - Rejected/Skipped: 21 (location, domain mismatch, comp below floor, insufficient JD, specialized domains)

- Key Decisions:
  - Evaluated Nava PBC as strongest find: 5/7 CS engaged, 1099 contract matches preferred type, $157-177K well above floor. Flagged NJ eligibility for manual verification.
  - Skipped 8 new Anthropic TPM roles: most require specialized domain expertise (silicon, databases, compute, security engineering, vulnerability disclosure) that doesn't match Erick's delivery-governance lane. GTM Systems was the closest fit of the batch and still scored only 2.8/5 due to CPQ/revenue-ops domain gap.
  - Logged Vonage AI Implementation role as UK-based (location deal-breaker).
  - Skipped Ruby Labs ($70-100K below floor), ON.energy (Houston + Tier 4 enablement), Flywheel Digital (agency domain), G-P AI Transformation (HRIS/Legal/Workday domain).

- What Worked:
  - Parallel agent evaluation allowed all 4 reports to generate simultaneously
  - WebSearch fallback provided sufficient JD detail for scoring despite WebFetch + Greenhouse API being blocked
  - Scan-history dedup prevented re-evaluating previously processed candidates

- What Failed:
  - WebFetch AND Greenhouse API both blocked by egress proxy — this has been consistent since 2026-08-11. Evaluations rely on WebSearch summaries which may miss JD nuances.

- Friction:
  - No direct access to job board content means evaluation confidence is lower (scoring based on search summaries vs full JD text)

- Missing Context:
  - NJ eligibility for Nava PBC role — "and others" in state list is ambiguous
  - Roku AI Program Manager JD was not retrievable from any source

- What To Do Differently:
  - For roles where NJ eligibility is uncertain, include a pre-application verification step in the recommendation

- Reusable Insight:
  - Government/civic-tech (Nava PBC pattern) is an emerging viable lane: 1099 structure, cloud infrastructure delivery, SAFe frameworks, regulated environments — all of Erick's differentiators apply. Worth adding gov-tech portals (USDS, Nava, Ad Hoc, Skylight, CivicActions) to scan queries.

- Top Mistake:
  - None significant — pipeline ran cleanly

- Top Improvement Opportunity:
  - Add government/civic-tech companies to portals.yml (Nava PBC, Ad Hoc, Skylight, CivicActions, Agile Six) — this sector consistently matches 5+ CS and offers 1099/contract structures at premium rates
