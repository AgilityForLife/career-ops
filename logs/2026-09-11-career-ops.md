# Session: career-ops daily run — 2026-09-11

- Objective:
  Execute job scan, evaluation, application prep, and submission pipeline (headless,
  launchd-triggered, no human attached).

- Execution Summary:
  - Portals scanned: all 12 portals.yml search_queries + 29 unique tracked_companies (41
    sources total), via 4 parallel background agents.
  - New jobs found: 119 genuinely new URLs (of 201 examined; 82 were exact duplicates of
    prior-run URLs, correctly skipped).
  - Jobs evaluated: 18 (reports 199-207, 224-225, 249-255; one of these, report 252, was a
    re-evaluation that updated existing tracker row #154 rather than adding a new row).
  - Applications prepared (score 3.0+, tailored resume PDF generated): 10 today, all held
    under the active Section 15 submission gate.
  - Applications submitted: 0.
  - Primary roles: 0 of today's batch classified PRIMARY (Agile Coach/SM/SPC archetypes) —
    today's surfaced candidates skewed Secondary (TPM/Delivery/Cloud-Data-Platform),
    consistent with portals.yml's current company mix. SAIC Agile Coach (Chantilly VA,
    1.3/5) was the closest PRIMARY archetype match of the batch but is hard-gated by a
    TS/SCI-with-polygraph clearance requirement Erick does not hold.
  - Secondary roles: 10 evaluated and apply-eligible — Kobie Marketing Sr. TPM (3.1),
    Anaplan AI Transformation Manager (3.6), SavvyMoney Program Manager Enterprise AI
    Adoption (3.4), Anthropic TPM API Platform (3.7), Anthropic TPM Apps Platform (3.6),
    Anthropic TPM Databases (3.9), Anthropic TPM Security re-eval (3.8, was 3.5), Anthropic
    TPM Safeguards/Infrastructure & Evals (4.0 — top score this run), Anthropic TPM
    Manager-Infrastructure (3.1, caveat), UnitedHealth Group Delivery Manager ESS/Core
    (3.1, caveat: JD access blocked, scored on WebSearch snippet only).
  - Rejected: 8 — 3x Booz Allen Hamilton (clearance/location/comp), SAIC Agile Coach
    (clearance), 3x Deloitte (title-filter false positive, forced relocation, non-target
    onsite), Mercor (5-day-onsite deal-breaker).

- Key Decisions:
  1. Recovered a fully-completed but never-committed 2026-09-10 batch (49 evaluations,
     reports 125-173, 22 resume PDFs) found sitting uncommitted in the working tree at
     session start. Verified integrity before committing as-is (commit 1a6eae1, pushed
     immediately) rather than discarding or silently re-running it.
  2. Split today's scan across 4 parallel background agents with pre-allocated,
     non-overlapping report-number ranges (174-198 / 199-223 / 224-248 / 249-273) and
     per-agent scan-log files, merged into data/scan-history.tsv only after checking for
     cross-agent collisions (none found) and filtering out URLs the agents had themselves
     already flagged as duplicates of prior-run history.
  3. Discovered and remediated a systemic, historical data-integrity issue (see below) —
     fixed the 3 tracked source files carrying it (story-bank.md, skills-model.md,
     modes/_shared.md) rather than only flagging it, since two of those files actively
     drive future interview-prep and resume-generation output.
  4. Did NOT edit historical evaluation reports (009-023 range) or delete
     build-cvs-2026-07-15.mjs, even though both still contain the same fabricated language
     — editing historical report records would misrepresent what was actually used at
     decision time; flagged for Erick instead of unilaterally rewriting the paper trail.
  5. Did NOT touch the ~120 orphaned `claude/magical-gauss-*` remote branches (flagged
     again, not newly discovered — see 2026-09-09 log Key Decision 6, still unresolved).

- What Worked:
  - The 4-way parallel scan split with pre-allocated report-number ranges produced zero
    collisions and zero wasted evaluation effort — every agent correctly skipped
    already-known URLs rather than re-evaluating them.
  - merge-tracker.mjs correctly detected report 252 (Anthropic Security re-scan) as an
    update to existing tracker row #154 rather than creating a duplicate row, and preserved
    the score-change history in the notes field (3.5→3.8).
  - Batch D's agent independently caught the fabricated-metrics issue in a 2026-09-10
    output file while building its own resume and explicitly excluded the invented numbers
    from its new output — this is what surfaced the finding in the first place.

- What Failed:
  - The core finding of this run: a fabricated pair of Verisk metrics ("5 concurrent
    delivery teams (~50 engineers)" and "70% faster provisioning") plus a wrong Verisk end
    date ("August 2018 – March 2024" instead of "August 2018 – May 2023") trace back to the
    earliest onboarding commit (3522172, 2026-04-06) and were never corrected in downstream
    generated artifacts even after cv.md and config/profile.yml themselves were fixed at
    some later point. All 10 of Erick's actually-submitted applications to date carry the
    wrong Verisk end date; 8 of the 10 also carry the fabricated team-size reframing; 4 of
    the 10 (Phaidra, 3Cloud, JRM Construction, Parloa) additionally carry the specific
    invented "70% faster provisioning" claim. interview-prep/story-bank.md carried the same
    fabricated metric in a live STAR story used for interview prep.

- Friction:
  - Google Careers (careers.google.com) is not WebFetch-scrapable in this environment
    (JS-rendered shell only) — no Google TPM roles could be evaluated this run regardless
    of relevance. Same class of problem on jobs.lever.co, careers.leidos.com,
    jobs.saic.com, careers.boozallen.com, careers.openai.com (403s on most direct fetches;
    WebSearch-snippet fallback used per batch-mode rules).
  - JPMorgan, Citi, and Goldman Sachs direct-domain searches returned no genuine
    company-site postings at all this run — only third-party aggregator mirrors, 2 of
    which were confirmed closed via explicit "removed" timestamps.

- Missing Context:
  - No way to know, from inside this pipeline, whether any of the 10 already-submitted
    applications are still under active review with the employer — that materially changes
    how urgent the fabricated-metrics exposure is for each one, and only Erick can assess
    it (recruiter conversations, application status pages, etc. are outside this system).
  - report 052 (Airtable, 2026-08-11, 3.2/5, apply-eligible) still has no PDF — flagged in
    both the 2026-09-07 and 2026-09-09 logs as an open follow-up; still open.

- What To Do Differently:
  Whenever a future run generates or touches a Verisk-experience bullet, diff it against
  cv.md's actual language before writing it to a report or resume, rather than trusting
  pattern-matching against prior "similar-looking" outputs — that's exactly the mechanism
  that let a 2026-04-06 onboarding error propagate through 5+ months and 10 real
  applications without ever being caught, because every subsequent generation had a
  plausible-looking prior example to copy from instead of the source file itself.

- Reusable Insight:
  A source-of-truth file (cv.md, profile.yml) being correct is not sufficient — if
  generated artifacts (resumes, interview prep, dashboard docs) are only ever produced by
  pattern-matching against previous generated artifacts rather than re-deriving from the
  source file each time, a single early error can outlive every subsequent correction to
  the actual source of truth. Worth a periodic "does every generated artifact still trace
  cleanly to cv.md" audit, not just a "is cv.md itself correct" check.

- Top Mistake:
  Not this run's own — but the run should be judged partly on catching a 5-month-old,
  10-application-wide fabrication that no prior run's normal verification steps
  (verify-pipeline.mjs, dedup-tracker.mjs) were ever going to catch, since those check
  tracker structure, not resume content against cv.md.

- Top Improvement Opportunity:
  Erick should decide, per already-submitted application, whether the Verisk date
  discrepancy (showing Verisk running through March 2024, which overlaps his real Sanofi
  tenure Jun 2023-Feb 2024 and BTII tenure Mar 2024-present) is something worth proactively
  correcting with any employer still actively engaging with him — a recruiter fact-checking
  dates would find an internal contradiction across the resume's own timeline. Separately,
  and lower-priority: the Cognizant AWS Cloud Program Manager application (report 143,
  4.4/5, 7/7 Core Strengths engaged, prepared 2026-09-10) has an application deadline of
  today, 2026-09-11 — it is fully prepared and awaiting Erick's go under the submission
  gate; if he wants to apply, today is the last day.

---

## Validation Check
- No vague language: yes — every claim carries a number, a file, or a named requirement.
- At least 1 insight OR explicitly "None": yes — Reusable Insight + Top Improvement
  Opportunity both populated.
- Numeric fields filled where possible: yes — 201 examined / 119 new / 18 evaluated / 10
  prepared / 0 submitted / 8 rejected / 3 files corrected / 10 already-submitted
  applications carrying the fabrication.
- File written successfully: yes.
