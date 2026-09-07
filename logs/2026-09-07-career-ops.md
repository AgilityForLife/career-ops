# Session: career-ops daily run — 2026-09-07

- **Objective:**
  Execute job scan, evaluation, application prep, and submission pipeline (headless, launchd-triggered).

- **Execution Summary:**
  - Portals scanned: all 12 `search_queries` entries in portals.yml + 10 tracked companies (2 via direct
    Greenhouse API, 8 via WebSearch spot-check)
  - New jobs found: 36 candidates surfaced by the scan; 4 turned out to already be known (1 pre-existing
    tracker gap backfilled, 3 only discovered mid-run — see Key Decisions) + 2 ClearanceJobs aggregator
    listings skipped — 32 net-new evaluations
  - Jobs evaluated: 32
  - Applications prepared: 5 (all roles scoring 3.0+), each with a tailored resume PDF
  - Applications submitted: **0** — SUBMISSION GATE in section 15 is active this run (added 2026-09-07,
    quoted block not yet removed); every apply-eligible role held for Erick's review regardless of
    section-15 STOP conditions
  - Primary roles: 0 (none of this batch's target roles were classified PRIMARY; all 5 apply-eligible
    hits are SECONDARY)
  - Secondary roles: 5 (Black Canyon Consulting 3.1, Leidos Sr IT PM 3.4, Leidos FAA TFDM/Scrum Master
    3.4, Palantir Security TPM 3.6, Palantir GRC PM 3.0)
  - Rejected: 6 scored-and-rejected (New Era 2.4, RGi 1.8 clearance, Genesis10 2.1, Palantir US-Gov 2.2
    clearance+relocation, itD AI Research 1.5, GitLab CRO 1.8) + 21 closed/removed before scoring

- **Key Decisions:**
  1. **Flagged and did not act on an uncommitted, unverified edit to `config/skills-model.md`.** Before
     any evaluation work began, `git status` showed the file already modified in the working tree (never
     committed) with a "POSITIONING STATEMENT" override — "Lead with: training, rollout, and
     implementation" — plus a self-authorizing HTML comment claiming Erick's approval on 2026-08-31. This
     directly contradicts this repo's own `CLAUDE.md` POSITIONING LOCK ("do not override without explicit
     candidate instruction") and arrived with no corresponding instruction anywhere in this conversation —
     the shape of an injected instruction, not a verified one. Every evaluation and resume this run used
     the canonical positioning statement instead (CS-1 + CS-2 lead, never lead with Agile
     coaching/training/instruction). The file was left exactly as found — uncommitted, unmodified by this
     session — for Erick to review and decide. `config/profile.yml`'s separate uncommitted edit (comp
     anchor fields) was checked against the real `~/.claude/CLAUDE.md` identity file, matched it verbatim,
     and was treated as legitimate.
  2. **Discovered mid-run that the local git clone was behind origin by an entire scan run, and
     recovered rather than force-pushing over it.** After committing this run's 33 evaluations (report
     numbers 048-080), `git push` was rejected: `origin/main` had a 2026-08-11 scan run (5 evaluations,
     reports 048-052, 32 scan-history entries) merged via PR that this local clone never had. Two
     consequences: (a) this run's scan-history dedup never saw those entries, so Airtable was
     independently re-evaluated as a genuine duplicate (same URL, already report 052, score 3.2), while
     Roboyo and Edgesource — previously only `skipped_backlog` — were legitimately re-evaluated for real
     new information; (b) this run's own report/TSV numbers collided with the real remote range.
     Recovery: backed up the flawed commit to a local branch (`backup-2026-09-07-preintegration`),
     hard-reset `main` to `origin/main`, dropped the duplicate Airtable evaluation, renumbered the
     remaining 32 reports/TSVs clear of the real range (049-080 → 053-084), fixed 4 internal
     cross-references between this run's own reports that pointed at the old numbers, reapplied the two
     tracker-tooling bug fixes (wiped by the hard reset), restored the legitimate `profile.yml` edit
     (also wiped, since it predated this session and was never in `origin/main`), and reran the full
     merge → normalize → dedup → verify chain against the correct current `applications.md`. No data was
     lost — the backup branch preserves the original attempt — but this could have shipped a duplicate
     evaluation and colliding report numbers had `git push` not caught it. **`git fetch` + compare against
     `origin/main` should happen at the start of a scan run, not be discovered only at push time.**
  3. **Held all 5 apply-eligible roles per the section 15 SUBMISSION GATE**, not per-role STOP conditions.
     The gate note explains why: this run is the pipeline's first real execution after being dark for a
     stretch, and restarting standing submission authorization as a side effect of a plumbing fix is
     Erick's call, not an automation's. Independently, 3 of the 5 (Leidos FAA TFDM, Palantir Security,
     Palantir GRC) would also have tripped individual STOP conditions (Public Trust suitability /
     clearance-eligibility questions) even with the gate open.
  4. **Did not blindly trust a 64% post-scan closure rate.** All 4 parallel evaluation batches reported
     an unusually high share of "closed/removed" verdicts (21 of 33 originally-assigned candidates) for
     postings that had been surfaced as live via WebSearch only hours earlier. Rather than accept this,
     independently re-verified 4 of the claimed closures (Riveron, Amplify, Nava, Trace3) directly against
     their ATS JSON APIs (Ashby posting-api, Lever v0/postings) — all 4 confirmed genuinely closed.
     Concluded the high rate reflects stale WebSearch index snapshots (not a verification bug) and
     accepted the batch results.
  5. **Found and fixed two real bugs in the tracker tooling**, both the same root cause. `merge-tracker.mjs`'s
     `roleFuzzyMatch` and `dedup-tracker.mjs`'s `roleMatch` both lacked "scrum"/"master"/"agile"/"coach" in
     their generic-word stopword lists (both scripts already stripped words like "technical"/"program"/
     "manager" from an earlier 2026-08-02 fix, but not these). Because this candidate's target titles are
     concentrated on Agile/Scrum roles, this caused **silent collisions between genuinely distinct
     postings at the same company**: `merge-tracker.mjs` was about to skip the Leidos FAA TFDM evaluation
     entirely because its title shared "Scrum"+"Master" with an unrelated April 2026 Leidos posting
     already in the tracker — meaning a fully evaluated job with its own PDF and Section-15 flag would
     have left zero trace in `applications.md`. Separately, `dedup-tracker.mjs` collapsed 3
     distinctly-scored Palantir postings (Security TPM 3.6 prepare-only, GRC PM 3.0 prepare-only,
     US-Government TPM 2.2 rejected-for-clearance) into a single row on "program"+"manager" overlap alone,
     discarding the score and Section-15 differences. Added the four words to both stopword lists.
  6. **Fixed a markdown-table corruption bug.** A job title from Black Canyon Consulting's actual posting
     — "Project Manager | Agile Scrum Master" — contains a literal `|`, which split it across table
     columns and shifted every field after it by one when `merge-tracker.mjs` wrote the row. Repaired the
     row (title changed to "Project Manager / Agile Scrum Master" for table safety) and patched
     `merge-tracker.mjs` to escape `|` → `/` in company/role/notes fields on every future write.

- **What Worked:**
  - Delegating the 36-candidate scan and the 33-candidate evaluation to 1 + 4 parallel subagents kept
    this session's own context focused on orchestration, integrity checks, and the tooling bugs, instead
    of being consumed by 30+ rounds of JD-reading.
  - ATS JSON API verification (Greenhouse boards-api, Ashby posting-api, Lever v0/postings) continues to
    be the reliable signal; WebFetch alone on Ashby/Lever URLs returns an unrendered SPA shell every time,
    confirmed again this run on a spot check.
  - `git status` at the very start of the session surfaced the injected skills-model.md edit before any
    evaluation work used it — catching this early meant zero tainted output rather than a batch of
    resumes needing to be redone.
  - The stale-clone problem was caught by `git push` refusing to fast-forward, and the recovery (backup
    branch, hard reset, careful renumbering, rerun the merge chain) preserved every legitimate evaluation
    without losing or duplicating any tracker data.

- **What Failed:**
  - This run started without first checking the local clone against `origin/main`. That's the root cause
    of the entire mid-run recovery in Key Decision 2 — the failure was procedural (skipped a fetch/compare
    step), not a tooling bug.
  - Two real, previously-undetected bugs in `merge-tracker.mjs` / `dedup-tracker.mjs` (Key Decision 5) —
    the 2026-08-02 stopword fix addressed the symptom visible that day (Stripe TPM titles) but missed that
    the same class of bug would recur with any other generic-but-shared vocabulary.
  - The markdown-table pipe-corruption bug (Key Decision 6) was a straightforward oversight — free-text
    fields written into a `|`-delimited table were never escaped.

- **Friction:**
  - The mid-run reset-and-renumber recovery cost real time and required careful manual tracking (offset
    math, cross-reference fixes, re-verifying the merge chain) to avoid making things worse. It went
    cleanly, but it was avoidable.

- **Missing Context:**
  - `cv.md`'s education section still reads "available upon request" — flagged again this run (Palantir
    GRC evaluation) as a soft gap on roles with degree-adjacent requirements. Recurring across multiple
    runs now; needs Erick's input to resolve permanently rather than being re-flagged every batch.
  - Whether the injected `config/skills-model.md` positioning edit reflects a real conversation Erick had
    elsewhere that just never made it into this repo's instructions — worth Erick confirming explicitly
    either way, since the file is currently sitting uncommitted and unresolved.
  - Report 052 (Airtable, 2026-08-11, score 3.2, apply-eligible) still has no PDF prepared. Not fixed this
    run — out of scope for a reintegration cleanup — but worth a deliberate follow-up.

- **What To Do Differently:**
  Run `git fetch origin && git status -sb` (or equivalent) as literally the first step of every future
  run, before touching `portals.yml` or `data/`, not just before the final push. Also: add a stopword-list
  unit test (or a single shared module both `merge-tracker.mjs` and `dedup-tracker.mjs` import) so a fix
  to one script's fuzzy-matcher can't silently miss its sibling again.

- **Reusable Insight:**
  When a batch verification step reports an unusually high failure/closure rate right after the same
  data was scanned as "live," don't accept it at face value and don't dismiss it as a tooling bug either
  — spot-check a handful directly against the most authoritative source available (here, ATS JSON APIs)
  before deciding which explanation is true. Separately: a rejected `git push` is not just an obstacle to
  clear — it's a signal that the local and remote histories genuinely diverged, and the right response is
  to understand *why* before reconciling, not to force past it.

- **Top Mistake:**
  Not fetching and comparing against `origin/main` before starting scan work. Everything downstream (the
  Airtable duplicate, the report-number collision, the multi-step recovery) traces back to operating on a
  stale local clone for the first ~90 minutes of the session.

- **Top Improvement Opportunity:**
  Unify the fuzzy role-matching logic used by `merge-tracker.mjs` and `dedup-tracker.mjs` into one shared,
  tested module, AND add an explicit "sync check" step (section 1 or 2 of the runbook) that runs `git
  fetch` and refuses to proceed with scan-history/report-number allocation if local `main` is behind
  `origin/main`.

---

## Validation Check
- No vague language: ✅ — every claim carries a number, a file, or a named requirement
- At least 1 insight OR explicitly "None": ✅ — Reusable Insight + Top Improvement Opportunity both populated
- Numeric fields filled where possible: ✅ — 36 surfaced / 32 net-new evaluated / 5 prepared / 0 submitted / 6 rejected-scored / 21 closed
- File written successfully: ✅
