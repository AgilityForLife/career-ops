### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries + 24 tracked companies (all portals.yml entries)
  - New jobs found: 29 raw new candidates (after dedup against 449 known URLs)
  - Pre-filtered at scan stage: 10 (2 Amazon RTO, 2 aggregator/undisclosed, 3 agency/backlog, 1 expired, 2 backlog)
  - Jobs evaluated: 19 (reports 297-315, tracker entries 298-316)
  - Applications prepared: 0 (no PDFs generated — batch mode, no Playwright; all JDs inaccessible via egress proxy)
  - Primary roles: 2 (Citi TPM Lead Ops Tech 3.7/5, Citi TPM SVP 3.5/5)
  - Secondary roles: 12 (scores 3.0-3.6)
  - Rejected: 5 (scores 2.5-2.8)

- Key Decisions:
  - Pre-filtered Amazon Last Mile TPM roles (10414911, 10414913) at scan stage per established 5-day RTO deal-breaker precedent
  - Pre-filtered 2 aggregator/staffing listings (Jobgether, HighlightTA) per undisclosed-employer precedent
  - Skipped 6 additional URLs at scan stage: Apply Digital (agency), VML/WPP (ad agency PMO), Strata Info Group (niche ERP), Accenture ServiceNow (likely expired), MojoRank (unknown), Nimble Gravity (LATAM focus)
  - Scored all 19 evaluations conservatively from title/company alone due to JD inaccessibility

- What Worked:
  - 3 parallel evaluation agents completed all 19 evaluations efficiently
  - Scan dedup against 449 prior URLs prevented re-processing known candidates
  - Merge-tracker.mjs handled all 19 additions cleanly with correct renumbering

- What Failed:
  - **Greenhouse boards-api.greenhouse.io blocked by egress proxy** — API-based scanning for Anthropic and Glean unavailable
  - **All job portal domains blocked by egress proxy for WebFetch** — every JD was inaccessible; no evaluations had full JD content
  - **git remote set-url with PAT blocked by credential safety classifier** — used existing remote config instead
  - No PDFs generated (Playwright not available in batch mode)

- Friction:
  - Egress proxy restrictions were the dominant friction this run — effectively blind-scoring from titles alone reduces evaluation confidence significantly
  - Stop hooks triggered mid-evaluation requiring interim commits while agents were still running

- Missing Context:
  - Full JD text for all 19 candidates would have dramatically improved scoring accuracy
  - Compensation data for most roles unknown — could not verify against $60/hr C2C / $100K FTE floor

- What To Do Differently:
  - Consider running evaluations on a machine with direct internet access to job portals
  - Cache or pre-fetch JD content from a less restricted environment
  - The 4 Citi Jersey City roles and 2 Deloitte roles should be re-evaluated with full JD content

- Reusable Insight:
  - When egress proxy blocks all job board domains, conservative title-only scoring produces a tight score band (2.5-3.7) with limited differentiation — the scoring model relies on JD specifics (CS engagement evidence, comp, location details) for meaningful separation

- Top Mistake:
  - None critical; the egress proxy limitation was environmental, not a process error

- Top Improvement Opportunity:
  - Pre-fetch and cache JDs in an unrestricted environment, then run evaluations against cached content in the restricted environment

## Portal Scan
- Portals scanned: 12 search queries + 24 tracked companies
- New jobs detected: 29 (after title-filter + scan-history dedup)
- Duplicates filtered: ~90% of raw search results were known URLs
- Anomalies: Greenhouse API egress-blocked; all WebFetch calls to job portals blocked

## Batch Summary
- Total processed: 19
- Strong fits (3.5+): 4 (Citi TPM Lead Ops Tech 3.7, Deloitte Delivery TPM 3.6, Citi TPM SVP 3.5, Deloitte Manager PPM 3.5)
- Moderate fits (3.0-3.4): 10
- Weak fits (<3.0): 5
- Unclear roles: All 19 — JDs inaccessible, scored from title only
- Patterns noticed: Citi Jersey City remains a strong location+company match (4 new postings); Deloitte has 2 promising delivery management roles; healthcare (UHG) continues steady PM hiring

## Resume Decision
- Resume used: None (no PDFs generated this run)
- Reason: Batch mode — no Playwright for PDF generation
- Missing data from cv.md: N/A

## Final State
- Total outputs: 19 evaluation reports + 19 tracker additions + scan-history updates
- Reports generated: 19 (reports 297-315)
- Applications prepared: 0 (all held per safety rule — no auto-submission)
- Failed steps: JD fetching (egress proxy), PDF generation (batch mode), Greenhouse API scanning (egress proxy)
- Skipped steps: None critical
- Confidence (1-10): 4 — low confidence due to blind-scoring all 19 candidates without JD content
