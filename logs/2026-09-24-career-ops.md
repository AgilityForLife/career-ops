# Session: career-ops daily run — 2026-09-24

- Objective:
  Execute job scan, evaluation, application prep, and submission pipeline (headless launchd run, 1-day gap since 2026-09-23)

- Execution Summary:
  - Portals scanned: all 12 portals.yml search_queries + all ~32 tracked_companies. Split across 1 direct scan/eval agent (search_queries — did dedup+eval itself correctly) and 4 research-only sub-agents spawned by a delegating "tracked_companies" agent (Big Tech / Consulting+Gov / Financial+Healthcare / AI+Infra+Gov-Transport company groups), followed by an orchestrator dedup pass and a final consolidated evaluation agent.
  - New jobs found: ~25 raw "new" candidates claimed by the research agents; after the orchestrator cross-checked every URL against data/scan-history.tsv and data/applications.md directly, only 13 were confirmed genuinely new (11+ were exact-URL duplicates already logged in prior runs — AWS Jersey City TPM #10453167 from 2026-09-09, all 3 Palantir TPM/Security/GRC reqs from 2026-08-02, Salesforce Director TPM jr314681 and Google Privacy PM from 2026-09-09, 3 of 5 Parsons reqs). Plus 1 genuinely new from the direct search_queries agent (Pareto.AI). Total evaluated: 14.
  - Jobs evaluated: 14 (reports 329-342)
  - Applications prepared: 1 tailored resume PDF (score 3.0+): UnitedHealth Group (Optum Tech CDDO), Dir, Tech Proj-Prgm Mgmt (3.5/5)
  - Applications submitted: 0 — SUBMISSION GATE (section 15) still active; the 1 apply-eligible role held as "Prepared, awaiting Erick's go"
  - Primary roles: UnitedHealth Group (Optum Tech CDDO) Dir, Tech Proj-Prgm Mgmt (3.5/5)
  - Secondary roles: Deloitte Scrum Master, Req 325332 (2.8/5, borderline — comp clears floor but Tier-4 cap + location risk keep it below apply threshold)
  - Rejected: Pareto.AI PM Global Remote (1.6, AI-ops title false-positive), Merck Senior Specialist PMO Support/Scrum Master (2.3, closed/410), Merck Scrum Master Branchburg (1.8, unconfirmed/redirects), Leidos Scrum Master Remote (2.7, Tier-4 cap + clearance risk), Cognizant TPM Bridgewater (2.4, comp below floor), Glean TPM AI & Cloud Efficiency (2.1, Bangalore India location deal-breaker), AECOM Project Director/Sr PM NY (1.5, closed + PE-license requirement), AECOM Sr PM Transportation Bloomfield (1.4, closed + PE-license requirement), AECOM Sr PM Transportation Philadelphia (1.4, closed + PE-license + location), Prudential Site Merchandising PM (1.9, marketing domain mismatch), Accenture Program Project Manager Seattle (1.5, closed), Accenture Scrum Master Senior Manager Philadelphia (1.4, closed ~21mo)

- Key Decisions:
  - The "tracked_companies" scan agent delegated its work to 4 of its own sub-agents instead of executing the scan+eval pipeline itself, then self-reported "completed" before those children had produced any files (they returned research-only text, no reports/TSVs/resumes). Rather than trust that agent's "completed" status at face value, verified against the filesystem (no new reports, no new TSVs, no new scan-history rows) before proceeding — confirmed it was a dud handoff, not actual progress.
  - Consolidated the 4 sub-agents' raw "new" candidate claims (~25 URLs) and personally re-verified every one against data/scan-history.tsv and data/applications.md via grep before spending any further eval slot, rather than trusting the sub-agents' own dedup claims — this caught 11+ false "new" claims that were actually exact-URL duplicates of postings evaluated in prior runs (as far back as 2026-08-02 for the Palantir reqs), which would have wasted eval slots and potentially produced confusing duplicate tracker rows had they gone through unchecked.
  - Launched one consolidated follow-up evaluation agent with the pre-verified 13-URL list (explicit URLs, no further searching) rather than re-delegating to more research agents, to close the loop efficiently once the true candidate set was known.
  - Kept report numbering collision-free across 3 parallel/sequential agent waves by pre-assigning non-overlapping ranges (329-360 to the search_queries agent, which used only 329; 330-350 to the follow-up evaluation agent, which used 330-342) — no collisions occurred.

- What Worked:
  - The direct search_queries agent (no delegation) executed its full scope end-to-end correctly on the first pass: dedup, evaluation, report, TSV, scan-history logging, no orchestrator intervention needed.
  - Orchestrator-level dedup verification against scan-history.tsv/applications.md via direct grep caught a meaningful number of false "new" claims before any eval slot was wasted — same pattern that's proven valuable in several recent runs, now also validated as a safety net against sub-agent delegation errors, not just search-engine cache staleness.
  - merge-tracker.mjs, normalize-statuses.mjs, dedup-tracker.mjs, and verify-pipeline.mjs all ran clean on the first attempt post-merge (14 added, 0 updated, 0 skipped, 0 errors).

- What Failed:
  - The "tracked_companies" scan agent's delegation-then-premature-completion pattern was a genuine process failure — it consumed a full agent invocation and produced zero usable files, requiring the orchestrator to redo the consolidation and evaluation work that agent was supposed to deliver. No data was lost (caught before any downstream step relied on it), but it added a full extra round-trip to the run.

- Friction:
  - 7 of the 13 confirmed-new candidates in the final evaluation batch turned out to be closed/stale postings (ranging from ~6 to ~21 months closed) despite surfacing as fresh hits in today's WebSearch results — concentrated in builtin.com and themuse.com mirror sources specifically for Merck, AECOM, and Accenture. This mirrors a data-quality pattern flagged in earlier runs for other aggregators (BuiltIn, TheMuse, CareerBuilder having a materially higher dead/stale rate than direct-ATS leads) but confirms it recurring for these three companies specifically today.

- Missing Context:
  - No way to independently confirm NJ-based remote eligibility for the UnitedHealth Group (Optum Tech CDDO) Director role — the posting's "Remote or Hybrid in MN and DC" phrasing is ambiguous about whether a New Jersey remote worker qualifies; flagged in report 339 for manual recruiter confirmation before applying.

- What To Do Differently:
  - Explicitly forbid scan/eval agent prompts from spawning their own sub-agents mid-task without completing the full file-writing pipeline themselves — today's prompts didn't prohibit this, and one agent used it as a shortcut that produced a premature "completed" status with no actual output. Add an explicit instruction next run: "do this work yourself; if you delegate, you are responsible for waiting on and completing what your delegates return before reporting done."
  - Consider deprioritizing builtin.com/themuse.com mirror-sourced leads specifically for Merck, AECOM, and Accenture given today's 7-of-13 stale rate from those combinations, similar to the existing BuiltIn/TheMuse/CareerBuilder caution already noted for other companies.

- Reusable Insight:
  - Orchestrator-level dedup verification (direct grep against scan-history.tsv/applications.md, not trusting any agent's self-reported dedup) is now confirmed valuable for two distinct failure modes: search-engine result-set staleness (the original reason it was adopted) and sub-agent delegation/verification errors (newly observed today). Worth treating as a standing, non-negotiable checkpoint before any eval slot is spent, regardless of which agent or how many hops produced the "new" claim.

- Top Mistake:
  - Not explicitly instructing agents against uncontrolled self-delegation up front — this is on the orchestrator's prompt design, not the sub-agent, since nothing in the original instructions ruled it out.

- Top Improvement Opportunity:
  - Add a standing rule to future batch/scan agent prompts: "Do not spawn further sub-agents and report done before they finish — either do the work directly, or if you delegate, block on and verify their file output before returning your own summary." This closes the exact gap that cost a full extra round-trip this run.
