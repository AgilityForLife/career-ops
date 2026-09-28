### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, application prep, and submission pipeline

- Execution Summary:
  - Portals scanned: 12/12 search_queries + 31/31 tracked_companies, via 4 parallel background agents
  - New jobs found: ~30 genuinely new URLs surfaced after dedup against scan-history.tsv/applications.md (out of a much larger raw yield, most of it duplicate)
  - Jobs evaluated: 9 (full reports 362, 381-382, 421-426); ~21 other new candidates deliberately filtered without spending an eval slot (dead/closed mirrors, title/domain mismatch, CoreWeave low-priority-similar reqs, non-functional scan_query hits)
  - Applications prepared: 5 (Citi x3 + UnitedHealth Group x2 — tailored resume PDFs generated, held per submission gate)
  - Applications submitted: 0 (SUBMISSION GATE active per section 15 — not removed this run)
  - Primary roles: 5 (Citi Technical Project Management Head Wealth Ops 3.2/5; Citi Senior IT Project Lead Wealth Investment Solutions 3.1/5; Citi Technical Program Management Lead Ops Tech 3.8/5; UHG Director Program Management Enterprise Imaging 4.0/5; UHG Director Tech Project-Program Mgmt IBMi 3.3/5)
  - Secondary roles: 0
  - Rejected: 4 (Mercury Senior TPM Credit & Lending 2.8/5; IBM Iteration Manager CIO Azure AD 2.4/5; IBM Project Manager Complex Programs Paramus 2.6/5; UHG Senior Director Product & Portfolio Mgmt 2.5/5)

- Key Decisions:
  - Split scan work across 4 parallel agents (1 search_queries + 3 tracked_companies groups), each explicitly instructed to execute all search/eval/report/TSV work itself and never spawn further sub-agents — continuing the pattern adopted 2026-09-24/-25 to prevent delegation-without-execution.
  - Assigned each parallel agent a disjoint report-number range (362-380, 381-400, 401-420, 421-440) to prevent numbering collisions before any merge step ran; zero collisions occurred.
  - Instructed the search_queries agent to try recency-qualified rephrasing on 2 of the 12 static queries as a direct response to the saturation flagged in the 2026-09-25 log — it surfaced 7 URLs the literal phrasing didn't reach, confirming the technique has value even though most of those 7 turned out closed on verification.
  - Kept the section 15 SUBMISSION GATE intact (did not delete the quoted block) — all 5 apply-eligible roles were prepared and held, not submitted.

- What Worked:
  - The "no further delegation" instruction held across all 4 agents again — each returned a report of concrete file paths and evaluation numbers, not a report of having delegated to others.
  - Disjoint report-number ranges prevented any collision; merge-tracker.mjs and verify-pipeline.mjs both ran clean on the first attempt (max #426, 0 errors).
  - The recency-qualifier experiment on the saturated search_queries block worked as a low-cost mitigation — worth adopting as standing practice rather than a one-off fix.
  - Citi and UnitedHealth Group both remained productive once agents broadened past the stock portals.yml scan_query phrasing (Jersey-City-specific and Director-level-specific searches respectively) — the two highest-yield channels of the run.

- What Failed:
  - None. All 4 agents completed and self-reported concretely verifiable output (reports, TSVs, PDFs all confirmed present on disk by the orchestrator after the fact).

- Friction:
  - The Consulting + Gov tracked_companies group (Accenture, Deloitte, KPMG, PwC, EY, Booz Allen, Leidos, SAIC, Cognizant, WSP, AECOM, Parsons) returned zero genuinely new evaluable candidates for the 3rd consecutive scan — its static scan_query strings appear to have exhausted supply at the current daily/near-daily cadence.
  - jobs.kpmg.us continues to return zero live hits via `scan_method: websearch` (2 scans running) — the scan method itself, not just the query text, may be the wrong tool for this specific portal.
  - Goldman Sachs scan_query remains non-functional (2+ consecutive scans, zero genuine Goldman postings returned — only JPMorgan/aggregator noise).
  - IBM's careers.ibm.com continues to 404 on direct WebFetch across many consecutive scans; both IBM evaluations this run relied on WebSearch/aggregator corroboration only, and one (report 382) could not recover a canonical careers.ibm.com URL/requisition ID at all despite triangulating 3 independent sources describing the same posting.
  - UnitedHealth Group's direct-posting-URL 404 pattern held again — every UHG lead this run required 2-3 independent mirror sources to corroborate before scoring.

- Missing Context:
  - No visibility into whether Erick has acted on any of the 25+ "prepared, awaiting Erick's go" apply-eligible roles accumulated across the last several scan days — the submission gate means this pipeline keeps accumulating prepared-but-unsubmitted applications with no signal on which, if any, Erick has separately pursued or discarded.

- What To Do Differently:
  - Rotate or refresh the Consulting + Gov tracked_companies query set (or extend its re-scan interval) since it has now produced zero new evaluable candidates for 3 straight runs — the current daily cadence is wasted effort on that specific segment.
  - Change `scan_method` for jobs.kpmg.us from `websearch` to a direct-fetch or ATS-API approach if one exists, since websearch has returned zero live hits for 2 consecutive scans.
  - Reconfigure or drop the Goldman Sachs scan_query entry in portals.yml — as currently written it is not finding genuine postings at all, same conclusion reached and not yet acted on in the 2026-09-25 log.
  - Adopt recency-qualified query phrasing (added "posted this week" / a month name) as a standing addition to the search_queries scan step going forward, not a one-off experiment, given it produced marginal new yield where the literal phrasing produced none.

- Reusable Insight:
  - The 4-parallel-agent split with disjoint report-number ranges and an explicit "do the work yourself, do not delegate further" instruction remains a proven, repeatable pattern for this pipeline's daily scan step — clean, collision-free, non-delegated output for the 3rd run in a row since being adopted.
  - When a tracked-company group returns zero new candidates for multiple consecutive runs while another (Citi, UHG) stays productive by broadening past the stock query text, that is a signal to differentiate scan cadence/effort per company group rather than treating all 31 tracked companies as equally worth a full daily pass.

- Top Mistake:
  - None significant this run.

- Top Improvement Opportunity:
  - Portal/query freshness triage: Consulting+Gov (whole group), Goldman Sachs, and jobs.kpmg.us are now confirmed low-or-zero marginal value at current configuration/cadence, while Citi, UnitedHealth Group, and recency-qualified search_queries are confirmed productive. Reallocating scan effort toward the productive channels and away from the saturated ones is the highest-leverage change available for the next run.
