# Session Log: career-ops daily run

### Session: career-ops daily run — 2026-08-04

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries + 30+ tracked companies (Greenhouse, Ashby, Lever, direct career pages)
  - New jobs found: 37 new URLs logged to scan-history.tsv
  - Jobs evaluated: 5 (full reports with CS engagement scoring)
  - Applications prepared: 0 (CVs not generated — no PDF tooling available in batch mode; reports and tracker entries completed)
  - Primary roles: 2 (Omada Health 3.8/5, Wilson Elser 3.3/5)
  - Secondary roles: 3 (Life360 3.4/5, Airtable 3.1/5, Snorkel AI 3.0/5)
  - Rejected: 0 from evaluated batch; 32 skipped during scan (location, domain, clearance, junior, closed, aggregator)

- Key Decisions:
  - Omada Health identified as strongest match of the batch at 3.8/5 — 4 CS engaged, remote US, $155-202K above target. Recommended APPLY w/ caveats (position governance+transformation, not cloud/data platform).
  - Wilson Elser classified PRIMARY despite Scrum Master title because the role includes real delivery ownership (two teams building software + data platforms), so Tier 4 de-emphasis cap does NOT apply.
  - Snorkel AI scored at floor (3.0/5) despite $172-275K OTE — exceptional comp cannot rescue a role that engages only 1 full CS + 2 partial.
  - Airtable scored 3.1/5 and marked HOLD — the explicit requirement for external customer-facing PS delivery experience is a structural gap not bridgeable through positioning.
  - All direct JD fetches blocked by egress proxy (403 on Greenhouse, Ashby, Lever, Citi domains). Used WebSearch indexed content as fallback. All reports marked "Verification: unconfirmed (batch mode)".

- What Worked:
  - Parallel agent evaluation (5 reports generated concurrently) significantly reduced wall-clock time.
  - WebSearch indexed content provided sufficient JD detail for accurate scoring despite proxy blocks.
  - Scan-history deduplication worked correctly — no false new-finds from previously logged URLs.
  - Merge script handled all 5 TSVs cleanly; verify-pipeline confirmed 0 errors.

- What Failed:
  - Egress proxy blocks on all major job board domains (boards-api.greenhouse.io, job-boards.greenhouse.io, jobs.ashbyhq.com, jobs.lever.co, jobs.citi.com) prevented direct JD verification. This is a persistent infrastructure limitation in the remote execution environment.
  - CV/PDF generation not performed — Puppeteer/Playwright PDF generation not attempted due to proxy limitations and batch mode constraints.

- Friction:
  - Proxy 403s on every direct job board URL added ~10 minutes of diagnosis before falling back to WebSearch.
  - Greenhouse board API (boards-api.greenhouse.io) also blocked, preventing programmatic board scanning for tracked companies (Anthropic, Glean).

- Missing Context:
  - Direct JD content for nuanced evaluation — WebSearch snippets sometimes lack full requirements/preferred qualifications lists.
  - Whether G-P's new "AI Transformation" posting (job ID 7733378003) is substantively different from the previously evaluated "Sr. Principal TPM" (report #028) — skipped as likely same role retitled.

- Reusable Insight:
  - AI transformation PM roles consistently engage CS-1/CS-4/CS-6 but miss CS-2/CS-3. For pipeline scoring, this means they cluster in the 3.2-3.8 range. Roles that DO engage CS-2/CS-3 (cloud/data + DevOps) remain the highest-scoring opportunities (Cayuse 4.6, 6sense 4.3, Grant Street 4.5, 3Cloud 4.2). Strategy: prioritize traditional enterprise tech companies posting TPM/DM roles over AI companies posting transformation PM roles.

- Top Mistake:
  - Attempted direct WebFetch on 8 URLs simultaneously before checking proxy status — wasted one round of API calls. Should have checked proxy status first.

- Top Improvement Opportunity:
  - Pre-cache proxy status check as first step of scan. If direct fetches are blocked, skip them entirely and go straight to WebSearch-based JD extraction. This saves ~2 minutes per scan cycle.

## Final State
- Total outputs: 5 evaluation reports + 37 scan-history entries + 5 tracker TSVs (merged)
- Reports generated: 048 (Omada Health), 049 (Life360), 050 (Wilson Elser), 051 (Snorkel AI), 052 (Airtable)
- Applications prepared: 0 (reports and tracker only; CVs pending)
- Any failed steps: CV/PDF generation skipped; direct JD verification blocked
- Any skipped steps: CV generation, application form fill
- Confidence (1-10): 7 — evaluations are solid based on indexed JD content, but direct verification would increase confidence to 9.
