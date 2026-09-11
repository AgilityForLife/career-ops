# Session: career-ops daily run — 2026-09-11

- **Objective:**
  Execute job scan, evaluation, and reporting pipeline (scheduled cloud session).

- **Execution Summary:**
  - Portals scanned: all 12 `search_queries` entries in portals.yml + all 24 `tracked_companies`
    entries, via 3 parallel scan agents.
  - New jobs found: 58 raw candidate URLs surfaced; 27 immediately skipped (location, domain
    mismatch, overlevel, prior low-fit evals, duplicates); 9 additional backlog skips. 20 sent to
    4 parallel evaluation agents (batches A-D).
  - Jobs evaluated: 20
  - Applications prepared: **0** — no CVs generated this run (LOW CONFIDENCE evaluations; egress
    proxy blocked all JD fetches)
  - Applications submitted: **0** — per ethics rules, no auto-submission
  - Evaluations above 3.0: 12
  - Evaluations below 3.0: 8
  - Reports written: 125-144 (20 reports)
  - Tracker entries: 127-146 (20 entries)

- **Scoring Summary:**

  | # | Company | Role | Score | Verdict |
  |---|---------|------|-------|---------|
  | 127 | Johnson & Johnson | Sr. PM MedTech Digital | 4.2/5 | APPLY |
  | 128 | Deloitte | Sr. PM MMIS | 4.0/5 | PREPARE_ONLY |
  | 129 | Capital TG | Scrum Master Remote | 3.6/5 | APPLY_WITH_CAVEATS |
  | 130 | IBM | Sr. TPM Confluent Remote | 3.5/5 | APPLY_WITH_CAVEATS |
  | 131 | Guidehouse | Agile PM Remote | 3.5/5 | PREPARE_ONLY |
  | 132 | Citi | IT PM Lead C14 Jersey City | 3.4/5 | APPLY |
  | 133 | J&J | PM TransAct | 3.4/5 | PREPARE_ONLY |
  | 134 | Neon One | Agile Delivery Manager Remote | 3.4/5 | APPLY_WITH_CAVEATS |
  | 135 | Citi | Sr PM VP NYC | 3.3/5 | APPLY_WITH_CAVEATS |
  | 136 | Citi | PM NYC | 3.2/5 | PREPARE_ONLY |
  | 137 | Deloitte | TPM Retail Transformation | 3.2/5 | DO_NOT_APPLY |
  | 138 | Flywheel Digital | TPM Contract Jersey City | 3.0/5 | APPLY_WITH_CAVEATS |
  | 139 | Anaplan | AI Transformation PM | 2.8/5 | DO_NOT_APPLY |
  | 140 | Citi | PM Lead AVP Jersey City | 2.8/5 | DO_NOT_APPLY |
  | 141 | Deloitte | Tech Project & Program Mgr | 2.5/5 | DO_NOT_APPLY |
  | 142 | JPMorgan Chase | Enterprise Scrum Master | 2.5/5 | DO_NOT_APPLY |
  | 143 | Twilio | Sr PM People | 2.5/5 | DO_NOT_APPLY |
  | 144 | VantageScore | SM/PM | 2.3/5 | DO_NOT_APPLY |
  | 145 | GitLab | AI Transformation Owner | 2.2/5 | DO_NOT_APPLY |
  | 146 | Deloitte | PM Jersey City/NYC | 2.0/5 | DO_NOT_APPLY |

- **Key Decisions:**
  1. **All evaluations marked LOW CONFIDENCE.** The egress proxy blocked every job board domain
     (greenhouse.io, lever.co, ashbyhq.com, jobs.citi.com, jobs.jpmorganchase.com,
     apply.deloitte.com, jobs.jnj.com, remotejobs.org). Evaluations relied on title/company
     analysis and web search snippets. No full JDs were retrieved. Scores could shift significantly
     with full JD access.
  2. **No CVs generated.** Given low-confidence evaluations, generating tailored resumes without
     full JD content would produce poorly targeted documents. Deferred to a future run with JD
     access or manual review by Erick.
  3. **Triage reduced 58 candidates to 20 evaluations.** Applied the skills-model scoring rules to
     pre-filter: 27 were immediate skips (prior evaluations, location deal-breakers, domain
     mismatches like QA/testing, underlevel roles, nurse staffing/healthcare-specific roles), 9
     more were backlog skips (aggregator listings, ambiguous remote policies). Only genuinely
     plausible matches were sent to evaluation agents.
  4. **skills-model.md positioning rule applied correctly.** The 2026-08-31 update (lead with
     training/rollout/implementation for adoption outcomes) was in the committed file and applied
     consistently across all evaluation batches.

- **Top Opportunity:**
  **J&J Sr. Program Manager, MedTech Digital (4.2/5)** — Best fit this scan. Pharma/MedTech
  regulated delivery at enterprise scale; NJ location; Sanofi pharma experience directly
  transferable. Engages CS-1, CS-2 (partial), CS-4 (partial), CS-5, CS-7. PRIMARY classification.
  Recommend full JD retrieval and tailored CV generation as next action.

- **Infrastructure Issues:**
  - Egress proxy blocked all job board domains — this is the primary limiter on evaluation quality.
    Consider running scans from a local machine with direct internet access for higher confidence.
  - Git branch `claude/magical-gauss-irzz4h` used for all changes.

- **Open Items for Next Run:**
  1. Retrieve full JDs for the 12 roles scoring 3.0+ and re-evaluate with full content.
  2. Generate tailored CVs for confirmed 3.5+ roles (J&J MedTech Digital, IBM Confluent, Capital TG).
  3. Verify posting status for all 12 apply-eligible roles (several may have closed since scan).
  4. Monitor Citi IT PM Lead C14 and Citi Sr PM VP — both in commutable NJ/NYC geography with
     strong financial services CS alignment.
