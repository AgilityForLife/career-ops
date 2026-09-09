# Session: career-ops daily run — 2026-09-09

- **Objective:**
  Execute job scan, evaluation, application prep, and submission pipeline (headless, launchd-triggered).

- **Execution Summary:**
  - Portals scanned: all 12 `search_queries` entries in portals.yml + all 24 `tracked_companies`
    entries (2 via direct Greenhouse API, 22 via WebSearch), via 4 parallel scan agents.
  - New jobs found: 45 raw candidates surfaced; 5 skipped pre-evaluation (3 Jobgether aggregator +
    1 Atrium Staffing agency, all undisclosed-employer; 1 10x Team freelance gig, not a role-fit).
    40 assigned to evaluation; 2 resolved as duplicates during evaluation (Leidos re-listing of an
    already-Applied role, Palantir near-duplicate of an already-rejected req) — 38 net-new
    evaluations, reports 085-124.
  - Jobs evaluated: 38 (+2 discarded-as-duplicate = 40 assigned total)
  - Applications prepared: 12 (all roles scoring 3.0+), each with a tailored resume PDF
  - Applications submitted: **0** — SUBMISSION GATE in section 15 is still active (not removed
    this run); every apply-eligible role held for Erick's review
  - Primary roles: 5 (GovCIO 3.6, Salesforce TPM 3.5, JPMorgan Embedded Finance 3.6, UnitedHealth
    Agile Practitioner 4 3.8, Parsons Sr IT PM 3.6)
  - Secondary roles: 7 (Twilio Agile PM 3.0, AWS Sr TPM 3.6, Cognizant IT/OT 3.5, JPMorgan Lead
    TPM 3.4, UnitedHealth TPM 3.1, Palantir Defense 3.1, Palantir Autonomous C2 3.3)
  - Rejected: 24 scored-and-rejected (1.0-2.8) + 4 discarded (2 duplicate, 2 confirmed
    closed/stale: Merck 410 Gone, 2 AECOM removed Dec 2025)

- **Key Decisions:**
  1. **Ran `git fetch origin && git status -sb` as the literal first step**, per the 2026-09-07
     run's own "Top Improvement Opportunity." Local `main` was `ahead 1` of `origin/main` — clean,
     no divergence, no stale-clone recovery needed. This closes out that run's top open item.
  2. **Applied the vault's canonical positioning rule directly, since skills-model.md still has a
     stale line.** `config/skills-model.md`'s "Never lead with" bullet still says "training/
     instruction," which the vault page `~/Documents/Business/06-PORTFOLIO/Positioning-Decision-
     Rule.md` (status: approved, 2026-08-31) explicitly supersedes and says governs on conflict.
     Read that vault page directly and passed its actual rule — lead resume summaries with the
     adoption/rollout/implementation outcome, then delivery scale — into every evaluation batch's
     instructions, rather than following the stale skills-model.md line or leaving the ambiguity
     for four independent subagents to resolve four different ways. Did not edit skills-model.md
     itself this run (that specific text edit is one of three "downstream changes required" the
     vault page lists as not-yet-applied, and editing the primary scoring-framework file was out
     of scope for a scan-and-evaluate run) — flagging it below as still open.
  3. **Delegated the 45-candidate scan to 4 parallel agents and the 40-job evaluation to 4 more**,
     keeping this session's own context on orchestration, integrity checks (dedup, positioning
     conflict, git sync), and tooling fixes rather than 40 rounds of JD-reading. Each evaluation
     agent got the full scoring framework, deal-breaker list, exact report/TSV format, and its own
     assigned report-number range (085-094 / 095-104 / 105-114 / 115-124) to avoid collisions.
  4. **Two evaluation-batch agents independently caught duplicates the scan phase's own dedup
     missed**: report 101 (Leidos "Scrum Master," Gaithersburg MD, req 17492469) turned out to be
     the same underlying role as the already-Applied Leidos NJ Scrum Master (req 17492470, report
     003) — same program re-listed per-site; report 119 (Palantir "TPM - US Government," req
     2f618c30) was near-identical to an already-rejected Palantir US-Gov req (d3b2f261, report
     072) and was correctly skipped by `merge-tracker.mjs`'s dedup as a match against existing
     tracker row #73. Both were logged as discarded/duplicate rather than double-counted.
  5. **Distinguished "willingness to obtain clearance" from "active clearance required" rather
     than auto-rejecting both.** Two Palantir Defense-vertical reqs (117, 118) ask for eligibility/
     willingness to obtain a Secret-or-above clearance — a softer, common-in-industry ask, not a
     hard gate the candidate (who holds no clearance) automatically fails. Per instruction, these
     were scored normally, prepared, and flagged as Section 15 STOPs requiring Erick's explicit
     sign-off before submission — not silently rejected the way the harder "active clearance
     required" Palantir US-Gov and RGi reqs were in this and prior runs.
  6. **Discovered two orphaned, unmerged sibling branches with colliding report numbers and one
     unreviewed safety-gate change — flagged, not acted on.** `git branch --all --contains` on
     commits appearing in `git log --all` surfaced two remote branches
     (`origin/claude/magical-gauss-8bdgsh`, `origin/claude/magical-gauss-flrn7d`) both diverging
     from the same point as this run (`main`/`origin/main` @ `1ea0f64`, the 2026-09-07 commit),
     each containing an independent, apparently-automated career-ops run never merged into main
     and never opened as a PR (`gh pr list --state all` shows only one PR, merged 2026-08-11):
     - `8bdgsh`: dated 2026-09-08, "11 evaluated, 33 new URLs logged," reports 085-095, **plus a
       second commit (`ea27e86`) titled "Update submission rules: allow direct application
       submission on request"** that edits `CLAUDE.md` to remove the hard "never submit without
       user review" gate this exact run operates under, replacing it with "submit when the user
       requests it" and dropping the low-fit recommend-against threshold from 4.0 to 3.0. Commit
       message references a `claude.ai/code/session_...` URL, consistent with an interactive
       session where Erick may have asked for this — but it was never merged or reviewed via PR,
       so main's (and this run's) CLAUDE.md still has the original hard gate.
     - `flrn7d`: dated 2026-09-09 (**today**), "7 evaluated, 0 prepared, market thin for CS-1+CS-2
       roles," reports 085-091.
     Both ranges collide with this run's own reports/085-124. Did NOT attempt to merge, rebase, or
     delete either branch, and did NOT treat the loosened submission rule on `8bdgsh` as
     authoritative — this run continued operating under the Section 15 gate exactly as given,
     since that branch's edit was never merged into main. Chose not to renumber this run's own
     085-124 to dodge the collision: main's actual max report number is 084, so 085-124 is the
     numerically correct "max existing + 1" from main's own history, and mechanically renumbering
     40 already-cross-referenced files in a headless run (no one to catch a renumbering mistake)
     seemed like a worse risk than leaving a documented, resolvable collision for whoever
     eventually reviews those branches. **This needs Erick's attention directly**: it suggests
     more than one automated/scheduled trigger may be running this same pipeline independently
     (this local launchd run plus at least two cloud-session runs that dead-ended on unmerged
     branches), meaning 18 evaluations' worth of work from 2026-09-08/09 are currently invisible
     to anyone looking only at `main`, and a real change to the submission-safety-gate language
     is sitting live on a branch with no review trail.
  7. **Found and fixed a latent status-mapping bug in `merge-tracker.mjs`.** Its status-alias
     table only recognized Spanish canonical terms (Evaluada/Descartado/Rechazado/etc.) plus a
     handful of English ones (applied/sent/skip/monitor/hold). But `templates/states.yml` — which
     CLAUDE.md instructs every batch worker to write directly into tracker TSVs — uses English
     canonical ids (Evaluated/Discarded/Rejected/Interview/Offer). Any TSV that wrote "Discarded"
     fell through to the "non-canonical → default Evaluada" branch and silently mislabeled closed/
     removed postings as still-pending evaluations. One instance (2 AECOM rows) was caught and
     hand-patched mid-run by the E4 evaluation batch; fixed the alias table itself afterward
     (added discarded/evaluated/rejected/interview/offer as recognized aliases) so this can't
     recur on every future run the way the 2026-08-02 stopword-list bug did before this pipeline
     added "scrum"/"master"/"agile"/"coach" to it.

- **What Worked:**
  - The pre-flight `git fetch` closed out last run's top-priority fix with zero incident this time.
  - Reading the vault's canonical positioning page directly, rather than trusting skills-model.md's
    stale bullet or guessing, meant all 4 evaluation batches used one consistent, currently-correct
    resume-opening rule instead of drifting on an unresolved internal contradiction.
  - Giving each evaluation batch its own pre-assigned report-number range avoided any collision
    even though all 4 batches were writing files concurrently.
  - The two mid-evaluation duplicate catches (Key Decision 4) show the report-writing agents were
    actually cross-checking against existing reports/tracker rows, not just pattern-matching URLs.

- **What Failed:**
  - E3 ran `merge-tracker.mjs`/`normalize-statuses.mjs`/`verify-pipeline.mjs` before E4 had
    finished writing its own TSVs. This happened to be harmless here (merge-tracker moves
    processed TSVs to `batch/tracker-additions/merged/`, so E4's later run picked up only its own
    un-merged files with no double-processing) but it was a race condition that got lucky rather
    than a coordinated hand-off. A future run with different batch-completion timing could merge
    a partial tracker state and need a second corrective pass.
  - The status-mapping bug (Key Decision 6) is the second time this class of bug has surfaced
    (after the 2026-08-02/2026-09-07 stopword-list bugs in the same two tracker scripts) — the
    root pattern (scripts written against an assumed vocabulary that a later spec change,
    states.yml going English, silently invalidated) still isn't caught by any test.

- **Friction:**
  - None significant. Unlike 2026-09-07, this run had no mid-run recovery, no git divergence, and
    no context-window pressure from doing evaluations serially.

- **Missing Context:**
  - `skills-model.md`'s "Never lead with" line (training/instruction) is still stale in the file
    itself, even though this run worked around it correctly by reading the vault page directly.
    The vault page lists this exact edit as one of three "downstream changes this approval
    requires" and marks it "Not yet applied." Someone should make that edit directly in
    `config/skills-model.md` so future runs don't need to re-discover and work around the same
    conflict — this run treated it as out of scope for a scan/evaluate pass, but it's now been
    worked around twice.
  - `cv.md`'s education section still reads "available upon request" — not re-flagged by name this
    run, but the underlying gap (degree-adjacent JD requirements) is the same one noted in the
    2026-09-07 log and still unresolved.
  - Report 052 (Airtable, 2026-08-11, 3.2/5, apply-eligible) still has no PDF — flagged again in
    2026-09-07's log as a deliberate follow-up that didn't happen; still open.
  - No portals.yml-level mechanism exists to filter out stale/removed listings before they reach
    evaluation (J&J x2 this run, AECOM x2 this run, similar findings in 2026-09-07's run) — each
    run re-discovers the same class of stale postings and burns evaluation effort confirming
    closure rather than filtering upstream.

- **What To Do Differently:**
  Sequence the tracker-merge step explicitly after ALL parallel evaluation batches report
  complete, rather than letting individual batches run it opportunistically "per repo convention"
  mid-flight — it worked this time because of how `merge-tracker.mjs` happens to handle already-
  merged files, not because of a coordinated design. Separately: the pre-flight sync check this
  run added (`git fetch && git status -sb`) only compares local `main` against `origin/main` — it
  would NOT have caught the two orphaned sibling branches (Key Decision 6). A real pre-flight check
  needs `git branch --all --contains $(git rev-parse origin/main)` or equivalent, to surface any
  branch that diverged from the same point main is currently at and never merged back.

- **Reusable Insight:**
  When a governing document (here, skills-model.md) is known-stale against a more recent, explicit
  decision recorded elsewhere (the vault's Positioning-Decision-Rule.md), don't let independent
  subagents each resolve the conflict on their own — read the canonical source once, extract the
  actual rule, and inject it directly into every downstream agent's instructions. That guarantees
  consistency across parallel work in a way that "read skills-model.md, note the caveat, use your
  judgment" per-agent would not.

- **Top Mistake:**
  Letting E3 run the tracker-merge chain before E4 had finished. It didn't cause damage this run,
  but it was unplanned coordination that happened to work rather than a designed sequencing step.

- **Top Improvement Opportunity:**
  Erick should look at the two orphaned branches directly (Key Decision 6) and decide, per branch:
  merge it (resolving the report-number collision with this run's 085-124), or delete it as
  abandoned. The `8bdgsh` branch's submission-rule change in particular needs an explicit decision
  either way — right now it's neither adopted nor rejected, just sitting unreviewed. Separately,
  and lower-priority: fix `config/skills-model.md`'s stale "Never lead with training/instruction"
  line directly (per the vault page's own "downstream changes required" list) so future runs stop
  needing to rediscover and work around the same known conflict every time.

---

## Validation Check
- No vague language: ✅ — every claim carries a number, a file, or a named requirement
- At least 1 insight OR explicitly "None": ✅ — Reusable Insight + Top Improvement Opportunity both populated
- Numeric fields filled where possible: ✅ — 45 surfaced / 38 net-new evaluated / 12 prepared / 0 submitted / 24 rejected-scored / 4 discarded
- File written successfully: ✅
