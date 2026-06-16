# Session Log: career-ops daily run

### Session: career-ops daily run — 2026-06-16

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 8 search query groups across Greenhouse, Ashby, Lever, Dice, LinkedIn/contract boards, company-specific (Leidos, Merck, J&J, Cognizant/Booz Allen), AI/Transformation
  - New jobs found: 12 unique new URLs (not in scan-history.tsv)
  - Jobs evaluated: 9 full evaluation reports generated (#007–#015)
  - Applications prepared: 0 (evaluation phase — materials pending user review)
  - Primary roles: 6 (Leidos Sr SM Remote, Merck IT PM/SM, Leidos SW Tech Mgr Atlantic City, NTT DATA SM/Agile Coach, HealthVerity Sr PM/SM, AHEAD Sr SM)
  - Secondary roles: 3 (Grant Street Group Sr PM, Parloa TPM Agentic AI, DoubleVerify Sr TPM)
  - Rejected: 3 pre-evaluation (G-P: skill gap; Synthesia: UK only; J&J MedTech: CA only)

- Key Decisions:
  - Used WebSearch for JD extraction because WebFetch and Greenhouse API are blocked by network egress policy (all returned 403). Reports marked as unconfirmed (batch mode).
  - Scored AHEAD Sr SM at 2.9/5 below threshold but included report since Agile Coach is a primary target role per profile.yml. Marked as borderline.
  - Restored Leidos Scrum Master NJ (#3) after merge script incorrectly matched it with the new Leidos Sr SM Remote (#7) — same company, different roles.
  - Fixed normalize-statuses.mjs Spanish alias issue by manually restoring "Applied" / "Evaluated" canonical English labels.

- What Worked:
  - Parallel WebSearch queries efficiently scanned 8 portal groups in 2 rounds
  - Skills model Core Strength Engagement Test produced consistent, defensible scores across 9 evaluations
  - Strong pipeline of pharma (Merck) and gov contractor (Leidos x2) roles that leverage existing experience
  - Grant Street Group found at $150K-$225K remote — strongest comp in pipeline

- What Failed:
  - WebFetch blocked on ALL job board domains (Greenhouse, Lever, Ashby, Leidos, Merck, DoubleVerify). Network egress allowlist does not include these hosts. This limits JD detail for evaluations.
  - merge-tracker.mjs matched Leidos entries by company name alone, causing incorrect data overwrite. Manual correction required.
  - normalize-statuses.mjs converts canonical "Applied" to Spanish "Aplicado" and rejects "Evaluated" — scripts expect Spanish labels despite states.yml defining English as canonical.

- Friction:
  - Network egress restrictions required switching from direct WebFetch to indirect WebSearch-based JD extraction, reducing JD detail quality for scoring
  - Merge script company-matching logic caused data corruption requiring manual fix

- Missing Context:
  - Full JD text for all 9 roles (blocked by 403s) — evaluations based on WebSearch snippets and aggregator summaries
  - Salary data for NTT DATA, Parloa, AHEAD roles
  - Remote vs. hybrid specifics for DoubleVerify and AHEAD

- What To Do Differently:
  - Add job board domains (boards.greenhouse.io, boards-api.greenhouse.io, jobs.lever.co, jobs.ashbyhq.com, careers.leidos.com, jobs.merck.com) to network egress allowlist for future runs
  - Fix merge-tracker.mjs to match on company+role (not company alone) to prevent cross-role overwrites
  - Fix normalize-statuses.mjs to use English canonical labels per states.yml

- Reusable Insight:
  - WebSearch provides sufficient JD detail for initial scoring when WebFetch is blocked — search "[company] [title] [job ID] job description requirements salary" on aggregator sites (ZipRecruiter, Dice, Glassdoor, Remotive) returns structured JD data. Not perfect but workable.

- Top Mistake:
  - Not catching that merge-tracker.mjs matches on company name alone before running it — the Leidos NJ entry was overwritten. Fixed manually but could have been prevented.

- Top Improvement Opportunity:
  - Adding job board domains to network egress allowlist would unlock full JD access via WebFetch, dramatically improving evaluation quality and enabling PDF generation in the same session.
