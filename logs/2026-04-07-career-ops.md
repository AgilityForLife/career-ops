### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries + 6 tracked company searches = 18 total
  - New jobs found: 17 new URLs (after dedup against 10 existing in scan-history.tsv)
  - Jobs evaluated: 8 full evaluations (reports 007-014)
  - Applications prepared: 0 (all in Evaluated status pending user review)
  - Primary roles: 3 (Ardent SM DHS 3.2, Slide Insurance SM 2.8, Capital Rx SM 2.5-SKIP)
  - Secondary roles: 5 (Accela TPM 3.8, Ema TPM 3.7, Cognizant PMO 3.5, Nava Sr PM 3.2, Hudl SM 2.5-SKIP)
  - Rejected: 5 total (2 SKIP + 3 pre-evaluation rejects: itD Tech, TTEC Digital, WPP)
  - Deferred: 6 (insufficient JD from batch mode)

- Key Decisions:
  - Rejected itD Tech (Anaplan specialization req), TTEC Digital (Google CCAI req), WPP (London-based)
  - Marked Capital Rx and Hudl as SKIP — both are coaching-first roles with <3.0 scores
  - Prioritized Accela TPM (3.8/5) as strongest new find: remote-first, $140-160K, government software
  - Deferred 6 pipeline entries where JDs could not be retrieved for manual follow-up
  - Used search summaries for all evaluations due to WebFetch 403 blocks

- What Worked:
  - Parallel portal scanning across 18 queries efficiently covered the full search space
  - Parallel agent evaluation processed 8 jobs simultaneously
  - Scoring model correctly identified low-fit coaching-first roles (Capital Rx, Hudl scored 2.5)
  - Pipeline integrity scripts caught status normalization issues (Evaluated → Evaluada)

- What Failed:
  - WebFetch returned 403 on ALL job board URLs (Greenhouse, Lever, Ashby direct + API)
  - This forced reliance on WebSearch summaries which provide incomplete JD information
  - 6 jobs deferred because even search summaries were insufficient

- Friction:
  - Status normalization: scripts expected Spanish labels (Evaluada, Aplicado) not English (Evaluated, Applied)
  - Merge-tracker placed new entries above existing ones (had to reorder manually)
  - 403 blocks on job board APIs significantly reduced evaluation confidence

- Missing Context:
  - Full JDs for all 8 evaluated roles (would improve score accuracy by ~0.5 points)
  - Salary/comp data for most roles (only Accela $140-160K and Cognizant $98-158K confirmed)
  - Full JDs for 6 deferred roles (Vonage, Conversant, CyberMedia, Agile Six, Synthflow, GT)

- What To Do Differently:
  - Pre-cache JDs during scan phase using a browser-based tool (Playwright) if available
  - Consider adding Google cache fallback for 403-blocked URLs
  - Add salary estimation heuristics when comp data is missing

- Reusable Insight:
  - WebSearch + skills-model scoring is a viable evaluation path even without full JDs, but reduces confidence to 5-7/10; flag all such evaluations as "unconfirmed (batch mode)" for manual review
  - The scoring model correctly filters coaching-first SM roles (2.5/5) from delivery-oriented TPM roles (3.5-3.8/5)

- Top Mistake:
  - Did not attempt Google cache or alternative URL patterns for blocked job boards

- Top Improvement Opportunity:
  - Implement a JD caching layer: on first scan, save JD text to local files (jds/ directory) to avoid re-fetching and to handle 403 blocks
