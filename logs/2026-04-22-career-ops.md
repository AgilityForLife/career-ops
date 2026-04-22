# Session Log: career-ops daily run — 2026-04-22

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries + 30+ tracked companies across Greenhouse, Ashby, Lever, Dice, LinkedIn
  - New jobs found: 15 new URLs not in scan-history.tsv
  - Jobs evaluated: 8 (reports 007–014)
  - Applications prepared: 8 (pending user review — no auto-submission per safety rules)
  - Primary roles: 6 (Nava, Slide Insurance, NIH-NCBI, Capital Rx, Wellfit, Ardent)
  - Secondary roles: 2 (Calendly, Rula)
  - Rejected: 7 (TTEC Digital, OpenAI Site Delivery, Cerebras, RXR, Vonage, Thumbtack, Komodo Health)

- Key Decisions:
  - Rejected OpenAI TPM Site Delivery despite being a tracked company — role requires construction/datacenter management, not software TPM
  - Classified Thumbtack Sr TPM as rejected despite strong comp ($160-$243K) — requires deep AI developer tooling expertise and platform engineering depth beyond candidate profile
  - Included Ardent DHS Scrum Master despite thin JD — strategic value for government sector entry
  - Used WebSearch as fallback for JD extraction after WebFetch returned 403 on all job board URLs

- What Worked:
  - Parallel batch search across 12 portal queries surfaced good variety of roles
  - Core Strength Engagement Test consistently identified strong vs weak fits
  - Government/federal roles (Nava, NIH-NCBI, Ardent) continue to be strong primary targets
  - Scan history dedup worked correctly — no re-evaluation of 2026-04-06 batch

- What Failed:
  - WebFetch blocked by 403 on all job board direct URLs (Greenhouse, Lever, Ashby) and Greenhouse API
  - JD details obtained via WebSearch secondary sources — less complete than direct page scraping
  - Thin JDs for Ardent and Wellfit limited evaluation confidence

- Friction:
  - 403 blocks forced multi-step JD extraction (search → aggregator → piece together details)
  - Normalize and verify scripts use Spanish canonical statuses while states.yml defines English labels — caused status mapping confusion
  - Merge script defaulted "Evaluated" to "Evaluada" requiring manual correction

- Missing Context:
  - Salary data missing for 6 of 8 roles — comp assessment based on market estimates
  - Clearance requirements unclear for Ardent DHS role
  - Location/remote status unclear for Capital Rx, Slide Insurance, Wellfit

- What To Do Differently:
  - Pre-cache Greenhouse API URLs or use browser-based scraping for next scan
  - Fix normalize-statuses.mjs and verify-pipeline.mjs to recognize English canonical labels from states.yml
  - Add salary research step before evaluation to filter out below-minimum roles earlier

- Reusable Insight:
  - Government tech modernization (Nava model) is a high-fit archetype: it combines CS-1 (enterprise delivery), CS-5 (regulated stakeholders), and CS-7 (compliance) in a way that directly leverages the candidate's differentiation. Should become a priority search category.

- Top Mistake:
  - Initially attempted direct WebFetch on all job boards (6 parallel calls) — all returned 403. Should have started with API/search fallback approach to avoid wasted calls.

- Top Improvement Opportunity:
  - Government/federal PM pipeline is under-developed. Adding USAJobs, ClearanceJobs direct search, and government contractor career pages (Booz Allen, Leidos, SAIC, Nava) as priority portals would surface more high-fit roles matching CS-5 + CS-7 strengths.

---

## Validation Check

- No vague language: ✅
- At least 1 insight: ✅ (government tech as priority archetype)
- Numeric fields filled: ✅
- File written successfully: ✅
