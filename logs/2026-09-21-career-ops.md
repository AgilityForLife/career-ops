# Session: career-ops daily run — 2026-09-21

- Objective:
  Execute job scan, evaluation, application prep, and submission pipeline (headless launchd run,
  no human attached). Report-only this run — submission gate active per section 15.

- Execution Summary:
  - Portals scanned: all 12 portals.yml search_queries + all 24 tracked_companies (IBM through
    Parsons) via 4 parallel research-only scan agents (WebSearch + WebFetch only — no Playwright/
    browser tool available in this environment, consistent with prior runs). Last scan was
    2026-09-18, a 3-day gap.
  - New jobs found: 19 genuinely new candidates after title-filter + scan-history dedup (2 of those
    disqualified at scan stage on confirmed deal-breakers, 5 more skipped as undisclosed-employer
    aggregator listings — neither spent an eval slot, consistent with prior-run precedent).
  - Jobs evaluated: 12 (reports 285-296, 3 parallel evaluation batches of 4)
  - Applications prepared: 4 (tailored resume PDF generated, score 3.0+): Element Critical PMO
    Manager IT/Compliance (3.9), Anthropic Technical Program Manager Public Sector (3.5), GovCIO
    Scrum Master VA Data Modernization (3.3), GHX Director Enterprise AI Enablement & Execution (3.2)
  - Applications submitted: 0 — SUBMISSION GATE (section 15) is still active this run; all 4
    apply-eligible roles are "prepared, awaiting Erick's go"
  - Primary roles: 1 (GovCIO Scrum Master, VA Data Modernization)
  - Secondary roles: 3 (Element Critical, Anthropic, GHX)
  - Rejected: 8 (Amazon Sr. TPM Lead Management Services 1.4 [hard-deal-breaker override, mandatory
    5-day RTO], Myriad360 PMO Manager 2.5, PerfectServe Manager PMO 2.1, Adswerve PMO Manager 2.9,
    Jencap Senior PM PMO 2.4, Unreal Snacks Manager PMO 2.2 [comp deal-breaker], Cytora Delivery
    Manager 1.8 [UK-residency-only deal-breaker], Anthropic Lead Data Center Security Delivery 1.6)

- Key Decisions:
  - Kept the 2026-09-18 pattern: 4 parallel research-only scan agents (no file writes), orchestrator
    merges findings into scan-history.tsv/pipeline.md centrally. Zero race conditions again.
  - Pre-filtered 7 of the 19 raw new candidates at scan stage rather than spending an eval slot: 2
    confirmed deal-breakers (Western Magnetics onsite-SF relocation, Metropolitan Commercial Bank
    title-filter false-positive/lending role) and 5 undisclosed-employer aggregator listings
    (ClearanceJobs x4, LinkedIn-ApTask, BuiltIn) where the actual hiring company could not be
    confirmed — matches established precedent for not evaluating unverifiable employer identity.
  - Split the 12 eval-worthy candidates into 3 parallel batches of 4 (vs. 2 batches of 5 on
    2026-09-18) to keep individual agent context smaller given this run's higher new-candidate count.
  - Explicitly instructed evaluation-batch agents not to touch data/scan-history.tsv or
    data/applications.md — reserved for the orchestrator, continuing the 2026-09-17/09-18 fix for
    concurrent-write races.

- What Worked:
  - The research-only scan + orchestrator-writes pattern held up again at higher volume (4 scan
    agents + 3 eval agents = 7 subagents total, 0 file conflicts).
  - Deal-breaker override logic correctly caught a new variant this run: Cytora's UK-residency-only
    requirement (no US remote/sponsorship path) is distinct from the relocation and clearance
    overrides seen in prior runs, and the evaluation agent applied it correctly without being
    explicitly told about this exact scenario in advance.
  - The recurring Myriad360/PerfectServe-style "PMO Manager = people-manager of other PMs" gap
    (first identified in report 031) was independently re-confirmed by a fresh agent with no memory
    of that report, suggesting the gap is a genuine, stable pattern in cv.md rather than an artifact
    of one evaluator's judgment.
  - merge-tracker.mjs, verify-pipeline.mjs, normalize-statuses.mjs, and dedup-tracker.mjs all ran
    clean in one pass — 0 errors, 1 pre-existing unrelated warning (Glean #108/#109 possible
    duplicate, not from this run's data).

- What Failed:
  - None — both scan and evaluation phases completed without infrastructure errors this run.

- Friction:
  - WebFetch failed to render the specific job posting for roughly half of this run's
    Greenhouse-hosted URLs, redirecting instead to the company's board index page rather than the
    individual requisition. All affected reports were corroborated via WebSearch fallback and marked
    "unconfirmed (batch mode)," but this is a higher failure rate than prior runs reported for
    Greenhouse specifically (previously the main friction was Ashby/ClearanceJobs, not Greenhouse).
  - merge-tracker.mjs's tracker-row numbering (currently landing at #297) has drifted further from
    the reports/ filename numbering (currently at #296) — a pre-existing, multi-run offset (tracker
    #280 already mapped to report 279 as of 2026-09-18) that this run's merge order (alphabetical by
    TSV filename, not strictly numeric) widened slightly further when Myriad360's TSV landed last in
    merge order. Cosmetic only — all report links in applications.md remain correct and valid per
    verify-pipeline.mjs — but worth a permanent fix so the two numbering schemes don't keep diverging.

- Missing Context:
  - No Playwright/browser tool was available in this environment, so all 12 evaluations ran in
    "batch mode" per the CLAUDE.md exception (WebFetch fallback, unconfirmed-verification header)
    rather than live browser verification.
  - GovCIO Scrum Master and Element Critical PMO Manager both have unconfirmed comp and/or
    onsite/remote status for their specific requisition — flagged explicitly in their reports for
    Erick to verify before applying, per the section 15 apply-eligible caveat process.

- What To Do Differently:
  - Fix merge-tracker.mjs to process batch/tracker-additions/*.tsv files in strict numeric order by
    their leading report number, not alphabetical/filesystem order, so tracker-row numbers stop
    drifting further away from report filename numbers on runs with out-of-sequence merge timing.
  - Consider a scan-stage liveness probe specifically for Greenhouse job-boards.greenhouse.io URLs
    given today's elevated WebFetch-redirects-to-index-page rate, to catch this earlier than the
    evaluation stage.

- Reusable Insight:
  - Splitting evaluation into smaller parallel batches (4 jobs/agent instead of 5) scales cleanly
    with new-candidate volume and keeps individual agent transcripts manageable without adding
    orchestration overhead — worth defaulting to ~4/batch going forward rather than a fixed 2-batch
    split regardless of volume.

- Top Mistake:
  - None identified this run — no process error occurred. The tracker-numbering drift is a pipeline
    design gap carried forward from prior runs, not a new mistake introduced today.

- Top Improvement Opportunity:
  - Fix merge-tracker.mjs's file-processing order to strictly follow numeric report-number order,
    stopping the tracker-row-number vs. report-filename-number drift before it grows any further.
