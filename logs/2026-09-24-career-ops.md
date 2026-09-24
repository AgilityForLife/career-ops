# Session Log: 2026-09-24 career-ops daily run

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries + 31 tracked companies (all enabled portals.yml entries)
  - New jobs found: ~90 raw candidates across 3 parallel scan agents; 10 queued for evaluation after dedup
  - Jobs evaluated: 10 (reports 329-338); 2 were re-evaluations of already-tracked postings (Anthropic #334/#335 = duplicates of #155/#160)
  - Applications prepared: 0 (all held per section 15 SUBMISSION GATE)
  - Primary roles: 2 (Merck IT PM & Scrum Master 3.4/5, CoreWeave TPM CPU Compute 3.2/5)
  - Secondary roles: 1 (Citi AI Digital Senior Program Lead 3.2/5)
  - Rejected: 5 (ServiceNow 2.8/5, N2 Company 2.8/5, Anthropic GTM Systems 2.9/5, plus 2 Anthropic duplicates removed)

- **Key Decisions:**
  - Applied aggressive scan-stage triage: ~80 URLs logged directly to scan-history.tsv without eval slots — location deal-breakers (SF-only OpenAI x7, Glean Bay Area x3, VA/CO military locations x5), domain mismatches (transit/rail, marketing, events, gaming), junior-level roles, aggregator mirrors, and security-domain gaps (CoreWeave security roles x4)
  - Removed 2 duplicate TSV files (Anthropic GTM Systems #334 and TPM Launches #335) before merge to prevent duplicate tracker entries — both were already evaluated as reports #155 and #160 on 2026-09-10
  - Prioritized Merck roles (2) for evaluation despite JD inaccessibility because hybrid NJ pharma matches CS-5/CS-7 strongly and Sanofi experience provides direct calibration
  - Amazon roles skipped at scan stage due to recurring mandatory 5-day RTO deal-breaker pattern (same override as reports 276, 286, 299)

- **What Worked:**
  - 3-agent parallel scan architecture completed all portals in ~6 minutes wall-clock
  - Dedup against 521-entry scan-history.tsv effectively filtered most rediscoveries from 1-day-gap saturation
  - Merck IT PM & Scrum Master is a genuinely strong find — dual PM+SM title at a NJ pharma company directly mirrors the Sanofi role evidence base

- **What Failed:**
  - Network egress proxy blocked WebFetch for ALL major job board domains (greenhouse.io, ashbyhq.com, builtinnyc.com, merck.com, citi.com) — all 10 evaluations are conservative estimates from metadata only
  - 2 Anthropic postings that were already evaluated slipped through scan-stage dedup (agents didn't catch that these specific Greenhouse job IDs existed in scan-history under different scan dates)

- **Friction:**
  - JD inaccessibility materially reduced evaluation confidence — scores are +/- 0.3 vs what a full JD read would produce
  - git remote URL setup was blocked by credential-leakage protection; push worked via existing GitHub App integration

- **Missing Context:**
  - Full JD text for all 10 evaluated roles — recommend re-fetching when proxy allows
  - Merck posting liveness: prior Merck reqs (2026-09-18 scan) went HTTP 410; these may be similarly stale

- **What To Do Differently:**
  - Pre-check Anthropic Greenhouse job IDs against scan-history before queueing for evaluation — the API returns stable IDs that should catch duplicates
  - Consider adding a WebFetch fallback strategy (WebSearch for JD snippets when direct fetch is blocked) at the evaluation stage, not just scan stage

- **Reusable Insight:**
  - Merck hybrid-NJ pharma roles are consistently the best CS-5/CS-7 engagement for this candidate — the Sanofi R&D evidence base creates a direct narrative bridge that other pharma companies don't require additional positioning for

- **Top Mistake:**
  - Queued 2 Anthropic roles for evaluation that were already tracked, wasting eval budget on duplicates

- **Top Improvement Opportunity:**
  - Add a pre-evaluation dedup pass that checks both scan-history.tsv AND applications.md by Greenhouse/Lever/Ashby job ID, not just URL string match — would have caught the Anthropic duplicates

---

## Portal Scan
- Portals scanned: 12 search queries + 31 tracked companies
- New jobs detected: ~90 raw, 10 after dedup
- Duplicates filtered: ~80 (location, domain, aggregator, junior, security-domain, already-tracked)
- Any anomalies: Network proxy blocked all WebFetch to job boards; 2 Anthropic duplicates slipped through

## Batch Summary
- Total processed: 10 evaluations (8 net-new after removing 2 duplicates)
- Strong fits: 3 (Merck IT PM+SM 3.4/5, Citi AI Digital 3.2/5, CoreWeave TPM 3.2/5)
- Weak fits: 5 (ServiceNow 2.8/5, N2 Company 2.8/5, Anthropic GTM 2.9/5, Ramp 3.0/5, VantageScore 3.1/5)
- Unclear roles: 0 (all classified)
- Patterns noticed: Pharma-NJ hybrid roles continue to be the strongest CS engagement pattern; fintech TPM roles (Ramp, VantageScore) score borderline due to startup culture gap and absence of regulated-environment signal

## Resume Decision
- Resume used: None generated (batch mode, JDs inaccessible)
- Reason: All evaluations marked "JD inaccessible"; CV generation deferred until JDs can be verified live
- Any ambiguity: None
- Missing data from cv.md: N/A

## Final State
- Total outputs: 10 reports + 8 tracker entries + 93 scan-history entries
- Reports generated: 10 (329-338)
- Applications prepared: 0 (held per section 15)
- Any failed steps: npm install initially blocked by credential protection (resolved on retry); git remote URL setup blocked (push worked via existing auth)
- Any skipped steps: PDF generation skipped (JDs inaccessible, no tailored CVs generated)
- Confidence (1-10): 6 — evaluations are directionally correct but scores have +/- 0.3 uncertainty due to JD inaccessibility; Merck and CoreWeave scores would likely hold or improve with full JD access
