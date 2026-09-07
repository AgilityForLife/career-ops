### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries across Greenhouse, Ashby, Lever + Anthropic/Glean APIs (blocked by proxy) + company-specific searches
  - New jobs found: 49 new candidates logged to scan-history
  - Jobs evaluated: 8 full evaluation reports generated (053-060)
  - Applications prepared: 0 (batch mode — no PDFs generated; 2 PRIMARY roles flagged APPLY)
  - Primary roles: 2 (Datadog Senior TPM 3.7/5, Nava PBC 1099 PM/SM 3.8/5)
  - Secondary roles: 4 (NetBox Labs TPM 3.5/5, Supabase Founding TPM 3.4/5, Nava Sr. PM 3.3/5, PerfectServe Manager PMO 3.0/5)
  - Rejected: 2 (Corbalt Technical PM 2.9/5, Scale AI TPM Platform 2.6/5)
  - Additional skipped: 41 (location/domain/aggregator/backlog/title filters)

- Key Decisions:
  - Nava PBC 1099 PM/SM scored highest (3.8/5) — SAFe credentials + 1099 preferred format + government regulated delivery make this a strong fit
  - Datadog Senior TPM (3.7/5) is the strongest comp opportunity (~$200K+ vs $130-150K target)
  - Scale AI rejected despite excellent comp due to hard SWE-to-PM transition requirement
  - GitLab AI Transformation Owner roles skipped — these are AI implementation/product roles, not traditional PM delivery
  - RainFocus skipped — Salesforce-centric events/marketing tech domain
  - Flywheel Digital / Omni skipped — media/marketing tech domain requirement

- What Worked:
  - WebSearch-based JD retrieval provided sufficient detail for scoring despite WebFetch being blocked on all job board domains
  - 49 candidates efficiently triaged through title/location/domain/comp filters
  - Skills-model scoring framework produced consistent, defensible scores

- What Failed:
  - WebFetch blocked on all job board domains (boards.greenhouse.io, jobs.ashbyhq.com, jobs.lever.co, boards-api.greenhouse.io)
  - Greenhouse and Glean board APIs also blocked by egress proxy
  - No PDFs generated in batch mode

- Friction:
  - Egress proxy blocks all ATS domains — cannot fetch full JDs, forced to rely on WebSearch summaries which may miss requirements
  - Some comp info missing for evaluated roles (Supabase, Nava Sr. PM)

- Missing Context:
  - Full JD text for Datadog and Nava PBC would improve confidence in scoring
  - Degree/education requirements at Datadog unclear from WebSearch summary
  - Clearance requirements for Nava PBC government work not confirmed

- What To Do Differently:
  - Consider running Playwright-based JD fetch for top candidates if available in future sessions
  - Prioritize verifying comp and clearance requirements for the two PRIMARY roles before applying

- Reusable Insight:
  - 1099/C2C government PM roles (Nava PBC, Trilogy Federal) consistently score well for Erick's profile due to SAFe SPC6 + regulated delivery alignment. Government tech should be a standing search category.

- Top Mistake:
  - None significant. Pipeline processed cleanly.

- Top Improvement Opportunity:
  - Backlog of ~15 "skipped_backlog" roles from this scan could be evaluated in a future session if pipeline is thin. Priority candidates: Adswerve PMO Manager, Jencap Senior PM PMO, Myriad360 PMO Manager, AHEAD Senior PM.

---

## Portal Scan
- Portals scanned: 12 search queries (Greenhouse PM/Agile/AI, Ashby PM/TPM, Lever PM/Agile, LinkedIn/Dice contract, Greenhouse PMO/Portfolio, Company APIs)
- New jobs detected: 49
- Duplicates filtered: ~20 already in scan-history from previous runs
- Any anomalies: WebFetch and Greenhouse/Glean board APIs blocked by egress proxy

## Batch Summary
- Total processed: 8 full evaluations
- Strong fits: 2 PRIMARY (Nava PBC 3.8/5, Datadog 3.7/5)
- Weak fits: 4 SECONDARY (NetBox Labs 3.5/5, Supabase 3.4/5, Nava Sr. PM 3.3/5, PerfectServe 3.0/5)
- Unclear roles: 0
- Patterns noticed: Government PM roles continue to be strong fits (CS-7 + SAFe). DevOps/observability platforms (Datadog) provide CS-3 bridge to Verisk experience. AI-specific TPM roles increasingly require SWE background (Scale AI). AI Transformation Owner titles are product roles, not PM roles.

## Resume Decision
- Resume used: N/A (no PDFs generated in batch mode)
- Reason: Batch mode — evaluations only
- Any ambiguity: None
- Missing data from cv.md: None

## Final State
- Total outputs: 8 evaluation reports + 49 scan-history entries + pipeline.md updated
- Reports generated: 053-060
- Applications prepared: 0 (evaluations only; 2 flagged APPLY for manual follow-up)
- Any failed steps: WebFetch blocked for JD retrieval; no PDF generation
- Any skipped steps: PDF generation (batch mode); application submission (per safety rule)
- Confidence (1–10): 7 — scoring is solid based on WebSearch summaries, but full JD text would increase confidence for the two PRIMARY candidates
