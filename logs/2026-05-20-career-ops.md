# Session Log — 2026-05-20

---

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries (Greenhouse, Ashby, Lever, LinkedIn/Dice, AI-specific, Contract/C2C)
  - New jobs found: 18 unique URLs added to pipeline
  - Jobs evaluated: 8 (full evaluation with reports)
  - Applications prepared: 0 (evaluation-only pass; PDFs pending user review)
  - Primary roles: 5 (HealthVerity, Veda Data, Bixal, Ardent, plus 10 pending in pipeline)
  - Secondary roles: 3 (TTEC Digital, Toast, NICE)
  - Rejected: 1 (Roku — AI exp gap + 4-day on-site)

- Key Decisions:
  - Prioritized 8 highest-fit URLs for evaluation from 18 total; left 10 in pipeline pending for next run
  - Used WebSearch aggregated sources after all direct job board fetches returned 403
  - Rejected Roku despite $140-170K comp due to hard AI experience gap and 4-day NYC on-site near deal-breaker
  - Marked NICE as borderline SECONDARY (3.0/5) — AI PM pivot opportunity but real skill gap

- What Worked:
  - Parallel WebSearch queries across 6 portal categories found 18 new URLs efficiently
  - Skills-model CS engagement test provided clear scoring differentiation between similar roles
  - Federal sector roles (Bixal VA, Ardent DHS) map well to CS-6 + CS-7 combination
  - TTEC Digital scored highest new entry (3.6/5) due to Power BI dashboard requirement matching CS-4

- What Failed:
  - Greenhouse API endpoints (Anthropic, Glean) returned 403 Forbidden
  - All 8 direct Lever/Greenhouse URL fetches returned 403 — had to rely on WebSearch cache
  - Normalize-statuses.mjs uses Spanish canonical forms; "Evaluated" was flagged as non-canonical

- Friction:
  - Job board anti-scraping measures forced indirect JD retrieval via search cache, reducing JD detail quality
  - Verify-pipeline.mjs uses hardcoded Spanish statuses not matching states.yml English labels
  - 10 pipeline URLs remain unevaluated — would need another session or batch processing

- Missing Context:
  - Erick's education details (degree, institution) — relevant for roles requiring BS in CS/Engineering
  - Salary data for 4 of 8 evaluated roles (Veda, Toast, Bixal, Ardent) — can't confirm meets $100K minimum
  - NICE office location — needed to assess commute feasibility

- What To Do Differently:
  - Pre-cache JDs from job aggregator sites (echojobs.io, remotive.com, jobgether.com) which have better availability than direct board URLs
  - Add "evaluated" as an English alias in verify-pipeline.mjs CANONICAL_STATUSES
  - Consider batch processing remaining 10 pipeline URLs as a follow-up run

- Reusable Insight:
  - WebSearch via aggregator sites (echojobs.io, remoterocketship.com, remotive.com, jobgether.com) reliably return JD content when direct board URLs are 403-blocked. Build this into scan workflow.

- Top Mistake:
  - Attempted direct URL fetches for all 8 boards before pivoting to WebSearch — wasted time on 403 errors. Should default to WebSearch for JD retrieval.

- Top Improvement Opportunity:
  - Add aggregator sites to portals.yml as secondary scan sources. Their JD caching means better retrieval success rate and they often include salary data the original boards don't show.

---

## Evaluation Scorecard

| # | Company | Role | Score | Category | Key Factor |
|---|---------|------|-------|----------|------------|
| 8 | TTEC Digital | Principal Technical PM | 3.6/5 | SECONDARY | CS-4 dashboard match + $140-165K |
| 7 | HealthVerity | Senior PM (Scrum Master) | 3.4/5 | PRIMARY | PM+SM hybrid, remote EST NJ |
| 12 | Bixal | Sr PM / Scrum Master | 3.4/5 | PRIMARY | VA SPRUCE IDIQ, remote, regulated |
| 10 | Toast | IT Delivery Manager | 3.3/5 | SECONDARY | Remote, player-coach delivery |
| 9 | Veda Data | Senior Scrum Master | 3.2/5 | PRIMARY | Remote US, portfolio SM |
| 13 | Ardent | Scrum Master (DHS) | 3.1/5 | PRIMARY | DHS federal, regulated |
| 14 | NICE | Technical AI PM | 3.0/5 | SECONDARY | Borderline — AI gap |
| 11 | Roku | AI Program Manager | 2.8/5 | REJECTED | AI exp gap + on-site 4-day |

## Pipeline Status
- Total tracked: 14 evaluated (6 from Apr 6 + 8 from May 20)
- Pending evaluation: 10 URLs in pipeline
- Next actions: User review of new evaluations, PDF generation for strong fits, evaluate remaining pipeline
