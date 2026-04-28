# Session Log: career-ops daily run

**Date:** 2026-04-28
**Branch:** claude/magical-gauss-5GsNd

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, Indeed, government/federal portals, and tracked companies (Anthropic, Roku, Glean, Cognite, RXR)
  - New jobs found: 10 new unique listings after dedup against scan-history.tsv
  - Jobs evaluated: 10
  - Applications prepared: 0 (evaluations only — user reviews before applying)
  - Primary roles: 8 (Bixal, Slide Insurance, Nava, HealthVerity, Veda Data, Neon One, Capital Rx, Apply Digital)
  - Secondary roles: 2 (Calendly, Roku)
  - Rejected: 0 (all found roles scored 3.0+ after filtering)

- **Key Decisions:**
  - Classified Calendly Senior TPM as SECONDARY per task role targeting (TPM = secondary) despite being the strongest overall fit (4.4/5, all 7 CS engaged)
  - Scored HealthVerity lower (3.5) despite 5 CS engaged due to wide salary band and low minimum experience threshold suggesting potential under-leveling
  - Applied Pacific Time penalty (-0.2) to Apply Digital for NJ-based candidate friction
  - Did not generate PDFs since Playwright unavailable in batch mode — all reports marked "unconfirmed (batch mode)"
  - Used Spanish canonical statuses (Evaluada/Aplicado) per verify-pipeline.mjs validation requirements

- **What Worked:**
  - Parallel WebSearch across 12 queries covered broad portal landscape efficiently
  - Skills model scoring framework consistently differentiated roles by fit quality
  - Search snippets provided enough JD detail for reliable scoring in most cases
  - Pipeline integrity scripts (merge-tracker, verify-pipeline) caught issues early

- **What Failed:**
  - WebFetch returned 403 for ALL job board URLs (Greenhouse, Lever, Ashby). Could not fetch full JDs directly. Had to rely on search snippet extracts, which provide ~60-70% of JD content.
  - Normalize-statuses.mjs converts English canonical labels to Spanish aliases, opposite of what states.yml defines. Pre-existing bug.
  - Verify-pipeline.mjs hardcodes Spanish canonical statuses instead of reading from states.yml. Pre-existing inconsistency.

- **Friction:**
  - WebFetch 403 blocks were the primary bottleneck. Each JD required a secondary WebSearch to extract details from cached pages. Added 10+ extra search calls.
  - Status normalization confusion between English (states.yml labels) and Spanish (verify script canonicals) added manual correction steps.

- **Missing Context:**
  - Full JD text for Slide Insurance, Neon One, and Capital Rx — limited search snippets reduced scoring confidence
  - Salary data missing for 6 of 10 roles — comp alignment unconfirmed
  - Erick's education details (needed for Veda Data "Bachelor's required" assessment)

- **What To Do Differently:**
  - Pre-cache job board URLs before pipeline run to avoid 403 blocks
  - Fix states.yml / verify-pipeline.mjs inconsistency (align on English OR Spanish, not both)
  - Add salary range estimation model based on role title + company size + location

- **Reusable Insight:**
  - Healthcare + government sectors are producing the most PM/SM openings with SAFe requirements. These are the highest-probability sectors for Erick's profile given CS-6 (SPC6) and CS-7 (regulated delivery).

- **Top Mistake:**
  - Initially used English "Evaluated" status which failed pipeline verification. Should have checked verify script expectations before writing tracker.

- **Top Improvement Opportunity:**
  - Add Greenhouse API fetching as primary JD source (boards-api.greenhouse.io returns JSON with full JD text) — would eliminate WebFetch 403 dependency for ~40% of listings.

---

## Score Distribution (This Run)

| Score | Count | Roles |
|-------|-------|-------|
| 4.0+ | 2 | Calendly (4.4), Bixal (4.1) |
| 3.5–3.9 | 3 | Slide Insurance (3.8), Nava (3.6), HealthVerity (3.5) |
| 3.0–3.4 | 5 | Veda Data (3.4), Neon One (3.4), Apply Digital (3.4), Capital Rx (3.3), Roku (3.2) |
| Below 3.0 | 0 | — |

## Pipeline Totals (Cumulative)

| Metric | Value |
|--------|-------|
| Total entries | 16 |
| Applied | 6 |
| Evaluated (pending decision) | 10 |
| Rejected | 0 |
| Highest score | 4.4/5 (Calendly) |
| Lowest score | 3.0/5 (Kasisto) |
