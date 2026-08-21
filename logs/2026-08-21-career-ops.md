### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 10 search queries across Greenhouse, Ashby, Lever, Dice, LinkedIn + 3 tracked company checks (Anthropic API, Glean API — both blocked by egress proxy) + WebSearch for Anthropic TPM roles
  - New jobs found: 35 new candidates identified (not previously in scan-history)
  - Jobs evaluated: 4 (Nava PBC, Toast, sFOX, Black Canyon Consulting)
  - Applications prepared: 0 PDFs this run (batch mode)
  - Primary roles: 2 (Nava PBC 4.1/5, Black Canyon Consulting 3.5/5)
  - Secondary roles: 2 (Toast 3.3/5, sFOX 3.2/5)
  - Rejected: 0 (below 3.0 threshold)
  - Skipped/backlogged: 31 candidates logged to scan-history (location/aggregator/domain/title/clearance/comp filters)

- Key Decisions:
  - Nava PBC 1099 PM/SM rated highest at 4.1/5 — the 1099 contract structure is the first time a role has perfectly matched the candidate's C2C/1099 preference since pipeline inception. Recommended APPLY.
  - Black Canyon Consulting NIH-NCBI PM/Agile SM rated 3.5/5 PRIMARY — strong regulated-delivery + Agile SM match. Sanofi R&D governance is the best bridge narrative for NIH's scientific environment.
  - Toast and sFOX rated SECONDARY / PREPARE ONLY. Toast lacks technical differentiators; sFOX has a material fintech domain gap.
  - Anthropic has 3 new TPM roles (Launches, Research, Apps Platform) but all are deep-tech/research coordination — consistent with previous Anthropic evaluations showing SECONDARY fit. Backlogged.
  - GitLab AI Transformation Owner roles skipped as non-PM titles (product/operations ownership, not program delivery).
  - WebFetch continues to be blocked for ALL job board domains (Greenhouse, Ashby, Lever). Evaluations based on WebSearch JD summaries only.

- What Worked:
  - Cross-referencing scan-history.tsv caught 15+ duplicates efficiently
  - Search query coverage across 10 queries + company-specific searches yielded good breadth
  - Pipeline verification passed clean (0 errors, 0 warnings) on first run

- What Failed:
  - WebFetch blocked for all job board domains — cannot verify posting status or read full JDs
  - Greenhouse boards-api.greenhouse.io also blocked — cannot pull structured job lists from Anthropic/Glean APIs
  - All reports marked "unconfirmed (batch mode)"

- Friction:
  - Egress proxy blocking all job board domains forces reliance on WebSearch summaries, which miss compensation details, exact requirements, and fine-grained location details for some roles
  - Some candidates (MojoRank, HighlightTA/Neon One) had insufficient detail from WebSearch to evaluate — backlogged

- Missing Context:
  - Full JD text for Toast (comp not listed — had to estimate from Glassdoor)
  - Nava PBC role details beyond WebSearch summaries — 1099 terms, benefits specifics
  - Cyara location eligibility (Australian company — unclear if US hiring for this role)

- What To Do Differently:
  - Consider adding a "backlog review" step that re-checks previously backlogged candidates (there are ~15 from across multiple scans that were deferred for insufficient info or location verification)

- Reusable Insight:
  - 1099/C2C roles are rare in ATS postings (most are FTE). When they appear and match, they should be treated as high-priority regardless of marginal score considerations.

- Top Mistake:
  - None critical this run. Minor: could have been more aggressive searching contract-specific boards (Dice, staffing aggregators) since the candidate's first preference is C2C/1099.

- Top Improvement Opportunity:
  - Build a contract/C2C-specific search query set targeting staffing firms and 1099 platforms. Current search queries are ATS-heavy (Greenhouse/Ashby/Lever) which skew toward FTE postings.

## Portal Scan
- Portals scanned: 10 search queries (Greenhouse PM, Greenhouse Agile, Ashby, Lever PM, Lever Agile, Greenhouse AI/Transformation, Greenhouse recent, general TPM/SM, Dice contract, LinkedIn/Indeed contract)
- New jobs detected: 35 new candidates not in scan-history
- Duplicates filtered: 15+ (already in scan-history from previous runs)
- Any anomalies: WebFetch + boards-api blocked by egress proxy; all evaluations based on WebSearch summaries

## Batch Summary
- Total processed: 4 evaluated + 31 skipped/backlogged = 35 total
- Strong fits: 1 (Nava PBC 4.1/5)
- Weak fits: 1 (sFOX 3.2/5 — fintech domain gap)
- Unclear roles: 3 backlogged for insufficient info (MojoRank, HighlightTA, Awetomaton)
- Patterns noticed: Government/regulated delivery roles continue to be the strongest fit category. 1099/contract roles are rare on major ATS boards but extremely high-value when they appear.

## Final State
- Total outputs: 4 reports + 4 tracker entries + 35 scan-history entries + pipeline update
- Reports generated: 053-056
- Applications prepared: 0 (batch mode — no PDFs generated)
- Any failed steps: WebFetch/API calls blocked (expected)
- Any skipped steps: PDF generation (batch mode limitation)
- Confidence (1-10): 7 — solid evaluations from WebSearch summaries but lack of full JD text introduces uncertainty in scoring precision
