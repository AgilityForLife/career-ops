# Session: career-ops daily run — 2026-09-23

- Objective:
  Execute job scan, evaluation, application prep, and submission pipeline (headless launchd run, 1-day gap since 2026-09-22)

- Execution Summary:
  - Portals scanned: all 12 portals.yml search_queries + all ~31 tracked_companies via 3 parallel scan agents (generic queries / enterprise+consulting companies / financial+pharma+AI+gov companies). Added CoreWeave to portals.yml tracked_companies this run, per 2026-09-22's flagged "What To Do Differently" improvement.
  - New jobs found: ~90 raw candidates surfaced by search; after dedup against scan-history.tsv (521 lines pre-run) + applications.md, 13 were genuinely new and evaluation-worthy. 11 additional near-misses (downlevel/duplicate/low-priority/clearance-risk/aggregator-unconfirmed) logged straight to scan-history.tsv without an eval slot.
  - Jobs evaluated: 13 (reports 316-328), via 3 parallel evaluation agents
  - Applications prepared: 5 tailored resume PDFs (score 3.0+): Citi Technical Program Manager SVP (3.0), Citi Senior Program/Project Manager VP NAM Issuer Services (3.2), UnitedHealth Group Senior Manager Technical Program Delivery - Cloud/Data (4.5), Anthropic Technical Program Manager Cloud Partnerships (3.7), Allwyn Corp Technical Project Manager (4.0)
  - Applications submitted: 0 — SUBMISSION GATE (section 15) still active; all 5 apply-eligible roles held as "Prepared, awaiting Erick's go"
  - Primary roles: UnitedHealth Group Sr Manager TPM Cloud/Data (4.5, standout of the run), Allwyn Corp TPM (4.0)
  - Secondary roles: Anthropic TPM Cloud Partnerships (3.7), Citi Senior PM/PM VP Issuer Services (3.2), Citi TPM SVP (3.0)
  - Rejected: Citi Global PM & Business Ops Lead SVP (2.7/5, PMO/business-ops core function not technical delivery), Anthropic PM AI Deployment Infrastructure (2.7/5, JD unretrievable, scored conservatively from title alone), PwC Agile Coach Senior Associate (2.8/5, Tier-4 de-emphasis cap applied honestly despite strongest CS-6 match of the run), Salesforce Engagement Director Strategic Transformation (2.2/5, pre-sales consulting core function not evidenced in cv.md), Trace3 Sr. Project Manager (2.2/5, single-SOW VAR/consulting PM, only CS-1 partially engages), Johnson & Johnson Enterprise Product Coaching Director (2.4/5, verified as product-management coaching not Agile/delivery coaching, domain mismatch), Similarweb Operational Excellence & PMO Manager (1.8/5, Tel Aviv Israel location = relocation deal-breaker), CoreWeave Data Center Commissioning/Quality Manager (1.7/5, hard MEP-commissioning domain mismatch, same failure pattern as report #296)

- Key Decisions:
  - Added CoreWeave to portals.yml tracked_companies (config edit) at session start, closing out 2026-09-22's explicitly flagged improvement item rather than deferring it again.
  - Given Citi surfaced 5 new postings in one company (highest single-company yield of the day), triaged to the 3 best-differentiated reqs (SVP Technical PM, SVP Global PM/BizOps Lead, VP Senior PM Issuer Services) and logged the AVP-downlevel req plus one title-overlapping req to scan-history without spending eval slots — same triage precedent set for CoreWeave 2026-09-22, now applied a second time to a different company, suggesting this is becoming a stable pattern rather than a one-off.
  - Scored PwC Agile Coach, Senior Associate honestly against skills-model.md's Tier-4 de-emphasis cap (2.8/5) even though it had the strongest single Core-Strength (CS-6/SPC6) match of the run and Agile Coach is listed as a PRIMARY target role type in CLAUDE.md's general role-targeting logic — the cap requires $130K+ comp and NJ/NY-Metro location to lift, neither was confirmed for this specific req, so no resume was built. This is the same tension flagged in skills-model.md's own history (the 2026-08-31 positioning-lock note) between the framework's Tier-4 caution and the runbook's "process all genuine-fit roles" instruction; resolved in favor of the framework since CLAUDE.md designates it the PRIMARY decision framework.
  - Rejected Anthropic Program Manager, AI Deployment Infrastructure at 2.7/5 despite being unable to retrieve the actual JD (Greenhouse index-only, API 404, no search snippet) — scored conservatively from title + structurally similar live Anthropic postings rather than skip the eval outright, and flagged the report as low-confidence/recommend-re-verify rather than silently dropping it. Chose "evaluate with an honest confidence caveat" over "skip for lack of data," consistent with the pipeline's "process all genuine-fit roles" instruction — an information gap isn't grounds to not attempt scoring.
  - Left the pre-existing #108/#109 Glean "duplicate" warning from verify-pipeline.mjs unfixed after confirming it's a false positive (two distinct sibling reports for SF vs. Mountain View postings, each with its own URL) — no actual duplicate exists to fix.

- What Worked:
  - The scan/dedup/triage pattern established on 2026-09-22 (grep scan-history.tsv by company/URL fragment before committing any eval slot) scaled cleanly to a ~90-raw-candidate day and correctly identified that ~85% of raw search hits were re-discoveries, keeping the actual eval workload focused and proportionate (13 jobs, not 90).
  - Splitting scan into 3 parallel agents and eval into 3 parallel agents (rather than 4+4 like 2026-09-22) matched today's smaller true-new-URL count without under- or over-provisioning agents.
  - All 3 evaluation agents correctly avoided running merge-tracker.mjs themselves and avoided editing applications.md directly — the explicit hard-rule instruction added to this run's agent prompts (in response to 2026-09-22's near-miss) held.
  - merge-tracker.mjs and verify-pipeline.mjs both ran clean on the first attempt post-merge (13 added, 0 updated, 0 skipped, 0 errors).

- What Failed:
  - None this run — no coordination near-misses, no failed merges, no lost data.

- Friction:
  - Direct WebFetch failed (404 or JS-rendered index-only page) for the majority of today's 13 target URLs, including all 3 Citi postings, the UHG posting, and both Anthropic postings — every one required WebSearch/mirror corroboration under the batch-mode exception. This is now a consistent pattern across ATS platforms (Citi's jobs.citi.com, UHG's careers.unitedhealthgroup.com, Anthropic's Greenhouse board for specific job IDs) rather than isolated incidents.
  - UnitedHealth Group's direct-posting-URL 404 pattern extended to a 6th consecutive scan (2026-09-07, -11, -17, -21, -22, -23) — despite this, the one UHG posting evaluated this run scored the highest of the day (4.5/5), so the structural fetch problem is not a signal to deprioritize the company, just its URLs.

- Missing Context:
  - No way to independently confirm the Anthropic Cloud Partnerships (320) comp figure ($435-565K) against a primary source — it's meaningfully higher than a comparable Anthropic TPM band from report #295 (2026-09-21, $365-435K) and flagged in the report for manual verification before use in any negotiation.

- What To Do Differently:
  - Consider whether Citi should be added to portals.yml tracked_companies given today's 5-posting yield in one pass (parallel to the CoreWeave precedent) — not done this run since it's a config change beyond scan/eval scope; flagging for next run or explicit instruction, same handoff pattern used successfully for CoreWeave last time.

- Reusable Insight:
  - The single-company triage pattern (evaluate 2-3 best-differentiated reqs, log the rest to scan-history as skipped_low_priority_trimmed_eval_budget) is now confirmed across two independent companies (CoreWeave 2026-09-22, Citi 2026-09-23) and should be treated as a standing rule whenever one company yields 4+ new postings in a single scan, not just a one-off judgment call.

- Top Mistake:
  - None identified this run.

- Top Improvement Opportunity:
  - Formalize a repeatable "add tracked company" checklist (triggered whenever a company yields 3+ apply-eligible-or-close reqs in a single scan) so the CoreWeave-then-Citi pattern doesn't require a human/flagged-note round-trip each time before the config actually gets updated.
