# Session: career-ops daily run — 2026-09-17

- Objective:
  Execute job scan, evaluation, application prep, and submission pipeline (headless launchd run,
  no human attached). Report-only this run — submission gate active per section 15.

- Execution Summary:
  - Portals scanned: all 12 portals.yml search_queries + all 24 tracked_companies (4 parallel scan
    agents; last scan was 2026-09-11, so this covered a 6-day gap)
  - New jobs found: 34 raw candidates (post title-filter, post scan-history dedup)
  - Jobs evaluated: 19 (15 excluded pre-evaluation for confirmed deal-breaker violations — off-target
    location/relocation/non-US, logged directly to scan-history.tsv rather than spending an eval slot)
  - Applications prepared: 3 (tailored resume PDF generated, score 3.0+): Toast IT Delivery Manager
    (3.7), UHG Principal Tech Project/Program Manager (3.6), UHG Senior TPM Client Billing & Pharmacy
    Payments (3.0, low-confidence)
  - Applications submitted: 0 — SUBMISSION GATE (section 15) is still active this run; all 3
    apply-eligible roles are "prepared, awaiting Erick's go"
  - Primary roles: 0 (none of the 19 evaluated this run hit PRIMARY tier)
  - Secondary roles: 3 (Toast, UHG Principal TPM, UHG Senior TPM — see above)
  - Rejected: 16 (2 of which were hard-deal-breaker overrides on otherwise strong CS-fit scores:
    Rackner TPM at 4.0 CS-fit overridden for requiring an active Secret clearance the candidate
    doesn't hold; Amplify PM Contractor overridden for confirmed $45-50/hr, below the $60/hr C2C floor)

- Key Decisions:
  - Pre-filtered 15 of 34 scan candidates at scan stage (not eval stage) for confirmed deal-breaker
    violations — location/relocation outside NJ/NY Metro or non-US with no remote option. This
    matches prior-run precedent (skipped_domain_mismatch etc. in scan-history.tsv) and conserves
    eval effort for genuinely viable candidates. Logged with `skipped_location_*` status codes.
  - Corrected a stale contradiction in `config/skills-model.md`: RESUME GENERATION RULES rule 1 still
    said "Summary must open with CS-1 + CS-2," which directly contradicted Erick's approved 2026-08-31
    ruling (lead with adoption/rollout/implementation outcome, then CS-1/CS-2 as supporting scale).
    The vault's `06-PORTFOLIO/Positioning-Decision-Rule.md` explicitly flagged this exact line as a
    required, not-yet-applied downstream edit. Applied it before dispatching evaluation agents so
    every resume generated this run followed the correct, currently-approved rule instead of the
    superseded one. This is a config-hygiene fix consistent with an explicit candidate ruling, not a
    scope-creep edit — flagging it clearly here per the file's own history of an automated run once
    `git reset`-ing an uncommitted version of this exact line as an "unverified override."
  - Let 3 of 4 evaluation-batch subagents run `merge-tracker.mjs` themselves mid-run rather than only
    at the end (I had only instructed them to write TSV files, not merge). This created a
    theoretical race-condition risk since multiple agents were writing to `batch/tracker-additions/`
    concurrently. Verified after the fact: `verify-pipeline.mjs` shows 0 errors, all 19 reports
    correctly present, all TSVs correctly merged into `data/applications.md` (one, GitLab, correctly
    deduped into a pre-existing row #84 rather than creating a duplicate; one, VO2 Group, was
    auto-renumbered to tracker row #275 by the merge script, distinct from its report number #267 —
    expected behavior, not a defect). No data loss or corruption resulted, but future prompts to
    batch workers should more explicitly reserve the merge step for the orchestrator.

- What Worked:
  - The 4-parallel-scan-agent / 4-parallel-eval-batch pattern from prior runs continued to hold up at
    this volume (34 scan candidates, 19 full evaluations) without manual intervention.
  - Deal-breaker pre-filtering at scan stage kept the eval batch focused and avoided wasting PDF/report
    effort on postings that were never going to be apply-eligible regardless of CS fit.
  - The hard-deal-breaker override logic (clearance, comp floor) correctly suppressed apply-eligibility
    even for a role (Rackner) that scored well above the eval threshold on CS-fit alone.

- What Failed:
  - One scan agent (search queries 1-6) failed twice before succeeding: first a genuine
    infrastructure interruption (host machine went to sleep mid-response), then a stalled/no-progress
    run on the immediate retry. Third launch succeeded. No data was lost — just added latency to the
    scan phase — but this is the second run in a row with scan-agent infra flakiness worth watching.

- Friction:
  - UnitedHealth Group's careers portal 404'd on direct job-posting URLs for the third consecutive
    scan (2026-09-07, 2026-09-11, 2026-09-17). This is now a confirmed recurring pattern, not a
    one-off — evaluations keep having to fall back to WebSearch-aggregated snippets for UHG postings,
    which lowers confidence on every UHG report this pipeline produces.
  - GovCIO report 261 uncovered a genuine posting-integrity issue: the page title said "Project
    Manager (Remote)" but the actual JD body described a "Lead, Enterprise Clinical Informatics & AI
    Programs" role requiring 12+ years of clinical informatics/EHR experience — a completely
    different role than the title/comp band advertised. Scored against the real body content
    (REJECTED), but this is worth knowing about as a source-reliability flag for GovCIO specifically.

- Missing Context:
  - No Playwright/browser tool was available in this environment, so every one of the 19 reports had
    to run in "batch mode" per the CLAUDE.md exception (WebFetch fallback, `Verification: unconfirmed
    (batch mode)` header) rather than doing live browser verification per the section-titled
    "Offer Verification — MANDATORY" Playwright-first rule. Several evaluations (GovCIO, Roku, Parsons,
    both UHG postings, Supabase) were materially constrained by this — direct JD text was either
    blocked, 404'd, or JS-rendered-empty, forcing evaluation on WebSearch snippets alone.

- What To Do Differently:
  - Fix the UHG-specific URL pattern in `portals.yml`/scan instructions so future scans either skip
    known-stale UHG URL formats or proactively use a WebSearch-snippet-first approach for that company
    instead of re-discovering the 404 issue on every run.
  - When dispatching parallel evaluation-batch subagents in future runs, explicitly instruct them NOT
    to run `merge-tracker.mjs` themselves and reserve that step for the orchestrator after all batches
    report back, to eliminate the race-condition risk observed this run (even though it resolved
    cleanly this time).

- Reusable Insight:
  - Config contradictions between `skills-model.md` and the Obsidian vault's decision-rule pages can
    persist for weeks (this one dated to 2026-08-31, still unfixed as of 2026-09-17) unless a session
    happens to read both and notice the mismatch. Worth a periodic explicit cross-check step rather
    than relying on incidental discovery.

- Top Mistake:
  - Not explicitly telling the 4 evaluation-batch subagents to leave `merge-tracker.mjs` to the
    orchestrator — 3 of 4 ran it themselves anyway, creating an avoidable (if ultimately harmless)
    concurrent-write risk on `data/applications.md`.

- Top Improvement Opportunity:
  - The recurring UHG 404 issue is the highest-leverage fix available: it has now degraded evaluation
    confidence on UHG postings across three consecutive runs and is a known, reproducible pattern, not
    a transient failure.
