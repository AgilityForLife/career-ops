# Session Log: 2026-05-01

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries across Greenhouse, Ashby, Lever, Dice, LinkedIn/Indeed, gov/federal, Anthropic, Nava/Bixal, Cognite
  - New jobs found: 49 unique new URLs (not in scan-history.tsv)
  - Jobs evaluated: 8 full evaluations with Core Strength Engagement Test
  - Applications prepared: 0 (evaluations complete; no auto-submit per safety rules)
  - Primary roles: 7 (Nava, Bixal, Ardent, HealthVerity, Veda Data, Slide Insurance, Capital Rx)
  - Secondary roles: 1 (Mercury)
  - Rejected: 7 (Roku, RXR, Vonage, Rackner, CyberMedia, Pareto.AI, Prelim)
  - Pending (not yet evaluated): 24 URLs in pipeline awaiting JD fetch

- Key Decisions:
  - WebFetch blocked by 403 errors from all job board domains (Greenhouse, Lever, Ashby). Used WebSearch to extract JD details from search result snippets and third-party aggregators (echojobs, builtin, remotive). Reports marked as "unconfirmed (batch mode)".
  - Fixed merge-tracker.mjs, verify-pipeline.mjs, and normalize-statuses.mjs to use English canonical states (Evaluated, Applied, etc.) instead of Spanish (Evaluada, Aplicado, etc.) to match states.yml source of truth.
  - Prioritized 8 roles with strongest title/description match from search results for full evaluation; remaining 24 queued as Pending for next session.
  - Capital Rx scored 2.9/5 (below 3.0 threshold) but included as borderline primary since it's a remote SM role in healthcare.

- What Worked:
  - Portal scan across 12 queries surfaced 49 new unique URLs — strong coverage
  - Bixal and Nava yielded multiple strong SM/PM roles in federal/gov space
  - SAFe-preferring roles (Ardent DHS) are high-value finds for SPC6 credential
  - WebSearch fallback for JD extraction worked well enough to score 8 roles

- What Failed:
  - WebFetch returned 403 for every job board URL attempted (Greenhouse, Lever, Ashby, Dice)
  - curl also blocked ("Host not in allowlist") — sandbox networking restriction
  - Could not verify if offers are still active (CLAUDE.md requires Playwright, unavailable in batch)
  - 24 URLs remain unprocessed — JDs needed for proper evaluation

- Friction:
  - Merge script (merge-tracker.mjs) mapped "Evaluated" → "Evaluada" due to hardcoded Spanish states — required script fix before pipeline passed verification
  - verify-pipeline.mjs and normalize-statuses.mjs also had Spanish-only canonical states — fixed all three scripts

- Missing Context:
  - Full JD text for the 8 evaluated roles (only search snippets available)
  - Compensation data for most roles (only HealthVerity $65-155K and Mercury $118-148K disclosed)
  - Remote/location specifics for Ardent, Slide Insurance, Capital Rx
  - Whether Bixal accepts SAFe SSM as equivalent to required CSM

- What To Do Differently:
  - Pre-cache JDs by fetching in a non-sandboxed environment before batch processing
  - Consider using Greenhouse board APIs (boards-api.greenhouse.io) from a machine without network restrictions
  - Process the 24 pending URLs in next session when WebFetch may be available

- Reusable Insight:
  - Bixal and Nava are prolific federal PM/SM employers with many open roles — worth tracking as recurring sources. Both are fully remote USA and accept NJ-based candidates.
  - SAFe-preferring federal roles (DHS, VA) are the highest-value targets for Erick's SPC6 credential — these should be prioritized in future scans.

- Top Mistake:
  - Not discovering the Spanish canonical states bug in the pipeline scripts earlier. This affected all 8 new entries and required manual cleanup.

- Top Improvement Opportunity:
  - Process the 24 pending pipeline URLs. Bixal alone has 5+ open PM/SM roles that could be strong fits. Next session should prioritize fetching these JDs.

---

## Portal Scan
- Portals scanned: 12 search queries
- New jobs detected: 49 unique URLs
- Duplicates filtered: 10 (all from April 6 scan-history)
- Any anomalies: WebFetch 403 blocked all direct JD retrieval

## Batch Summary
- Total processed: 8 evaluations
- Strong fits (3.5+): 3 (Nava 3.5, Bixal 3.6, Ardent 3.6)
- Weak fits (3.0-3.4): 4 (HealthVerity 3.4, Veda Data 3.2, Slide Insurance 3.1, Mercury 3.1)
- Unclear roles: 24 pending (insufficient JD data)
- Patterns noticed: Federal/gov SM roles are the strongest fits; Bixal and Nava are top employers

## Resume Decision
- Resume used: Agile resume for all 7 primary roles; Technical PM resume for Mercury (secondary)
- Reason: Primary roles are SM/Agile Coach/PM roles; Mercury is a TPM fintech role
- Any ambiguity: HealthVerity could use either resume (hybrid PM/SM role)
- Missing data from cv.md: None — all metrics referenced from canonical source

## Final State
- Total outputs: 8 reports + pipeline update + scan history + 3 script fixes
- Reports generated: 007 through 014
- Applications prepared: 0 (evaluation only — user decides which to apply)
- Any failed steps: WebFetch JD retrieval (403 blocked)
- Any skipped steps: PDF generation (no PDFs generated this session)
- Confidence (1–10): 6 — evaluations are solid but based on search snippets, not full JDs
