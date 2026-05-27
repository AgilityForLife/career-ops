# Session Log: career-ops daily run

### Session: career-ops daily run — 2026-05-27

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, LinkedIn + 30+ tracked companies
  - New jobs found: 18 unique new URLs (8 evaluated, 7 skipped, 3 rejected)
  - Jobs evaluated: 8
  - Applications prepared: 0 (evaluation stage only — no auto-submit)
  - Primary roles: 4 (Bixal 3.6, Ardent 3.4, HealthVerity 3.3, Veda Data 3.0)
  - Secondary roles: 4 (Nava 3.5, Toast 3.5, Grant Street Group 3.5, Jencap 3.2)
  - Rejected: 3 (location: Philippines, India, TX-only)
  - Skipped: 7 (too technical, borderline, insufficient info, masters required, EoR contractor, AI product focus)

- **Key Decisions:**
  - Used WebSearch as fallback for all JD extraction since WebFetch and direct Greenhouse/Lever APIs returned 403 due to environment network allowlist restrictions
  - Prioritized roles with NJ/NY/remote alignment and $100K+ compensation signals
  - Split resume selection cleanly: Agile resume for SM/SAFe roles, Technical PM for delivery/program roles
  - Scored conservatively per skills-model.md — no scores inflated; CS-2 absence consistently penalized by -0.3

- **What Worked:**
  - Parallel WebSearch queries across all 12 portal configurations surfaced a diverse set of 18 new URLs efficiently
  - Scan history dedup worked cleanly — zero false duplicates
  - The Core Strength Engagement Test produced consistent, defensible scores across all 8 evaluations
  - Grant Street Group ($150K-$225K) identified as highest-comp opportunity in the pipeline to date

- **What Failed:**
  - WebFetch returned 403 for ALL job board URLs (Greenhouse, Lever, Ashby) — environment network allowlist blocks direct fetching
  - PDF generation not possible without Playwright in this environment
  - Some JDs only partially captured via search snippets (Coretelligent, CentralReach details thin)

- **Friction:**
  - Network allowlist restrictions forced exclusive reliance on WebSearch for JD content — JDs captured from search snippets rather than full page content, so some evaluation details may be incomplete
  - The normalize-statuses.mjs script converts English canonical labels to Spanish aliases, creating a confusing state for pipeline verification

- **Missing Context:**
  - Full JD text for several roles (CentralReach, Coretelligent, NICE) — only search snippets available
  - Salary data missing for 4 of 8 evaluated roles (Bixal, Nava, Ardent, Veda Data)
  - Whether candidate has applied to any roles since the April 2026 batch (tracker still shows April roles as "Applied")

- **What To Do Differently:**
  - Pre-configure environment network allowlist to include boards.greenhouse.io, jobs.lever.co, jobs.ashbyhq.com for direct WebFetch access
  - Consider running PDF generation in a separate session with Playwright access
  - Add a "last verified" date column to scan-history.tsv to track which posted roles have been confirmed still active

- **Reusable Insight:**
  - Federal/government SM roles (Bixal, Ardent) are a consistent pipeline source for PRIMARY matches due to SAFe + PMP requirement alignment. These should be prioritized in future scans.
  - Enterprise SaaS delivery manager roles (Toast) offer $110K-$180K remote positions that value Agile + ITIL hybrid — a growing secondary pipeline.
  - Grant Street Group at $150K-$225K demonstrates that govtech/finserv senior PM roles can command premium comp even fully remote.

- **Top Mistake:**
  - Initially wrote "Evaluated" in English as status in applications.md, but the verify-pipeline.mjs script expects Spanish canonical forms ("Evaluada"). This caused 8 verification errors requiring a manual fix. The states.yml labels are English but the scripts expect Spanish.

- **Top Improvement Opportunity:**
  - Align verify-pipeline.mjs canonical statuses with states.yml English labels (or vice versa) to eliminate the Spanish/English status confusion across the codebase.
