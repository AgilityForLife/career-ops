# Session Log: career-ops daily run

**Date:** 2026-05-06

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby + 6 tracked companies (Anthropic, JPMorgan, Amazon, J&J, Merck, Roku)
  - New jobs found: 21 new unique URLs identified, 10 duplicates filtered from scan-history
  - Jobs evaluated: 7 (reports #007–#013)
  - Applications prepared: 0 (all at Evaluated status pending candidate review)
  - Primary roles: 4 (Capital Rx SM 3.4, Ardent SM 3.2, Komodo Health SM 3.1, Slide Insurance SM 3.5)
  - Secondary roles: 3 (Energy Solutions Sr TPM 3.5, CentralReach TPM 3.3, Roku AI PM 3.3)
  - Rejected: 6 (Vonage UK-based, Nava closed, TTEC Digital Google CCAI req, 3Cloud Philippines, WPP India, Rackner Secret clearance)

- **Key Decisions:**
  - Used WebSearch JD extraction as fallback when all Greenhouse/Lever direct fetches returned 403
  - Rejected Vonage AI PM despite good title match — FTC terminology and Built In London posting confirmed UK location
  - Rejected TTEC Digital despite Principal TPM title — requires 2+ years Google Contact Center AI specific experience
  - Included Ardent DHS SM despite clearance risk — flagged for manual verification
  - Included CentralReach despite overqualification risk and possible closure — NJ location is valuable

- **What Worked:**
  - Parallel WebSearch across 12+ queries efficiently surfaced 21 new listings
  - Scan-history dedup correctly filtered all 10 previously-seen URLs
  - Skills-model Core Strength Engagement Test provided consistent scoring framework
  - Pipeline verification caught status normalization issues (scripts expected Spanish; fixed verify-pipeline.mjs)

- **What Failed:**
  - Direct job board page fetching: 100% failure rate (403) across Greenhouse and Lever boards — no JD could be fetched via WebFetch or curl
  - This forced reliance on WebSearch snippets for JD data, reducing evaluation confidence (especially Roku at confidence 4/10)

- **Friction:**
  - merge-tracker.mjs and normalize-statuses.mjs convert canonical English statuses (Evaluated, Applied) to Spanish aliases (Evaluada, Aplicado), while CLAUDE.md documents English as canonical
  - verify-pipeline.mjs had hardcoded Spanish canonical statuses — fixed to also accept English labels

- **Missing Context:**
  - Full JD text for all 7 evaluated roles (403 blocked all fetches)
  - Roku AI PM: salary range confirmed but role details minimal
  - Slide Insurance: location/remote policy unknown
  - Ardent DHS: clearance requirements unknown

- **What To Do Differently:**
  - Consider adding a Playwright-based JD fetch step for future batch runs where Playwright is available
  - Pre-cache JDs during interactive sessions when access isn't blocked
  - Fix the Spanish/English status normalization inconsistency at the script level (merge-tracker, normalize-statuses)

- **Reusable Insight:**
  - Greenhouse and Lever boards now consistently block automated access; plan for WebSearch-based extraction as primary JD source in batch mode
  - Healthcare/regulated sector SM roles are the most frequent new listing type — consider adding healthcare-specific search queries to portals.yml

- **Top Mistake:**
  - Not attempting a Playwright-based approach first (even though batch mode disclaims it) — could have tried before falling back to WebSearch

- **Top Improvement Opportunity:**
  - Normalize the status language across all scripts to match CLAUDE.md English canonical labels — eliminates friction in every pipeline run
