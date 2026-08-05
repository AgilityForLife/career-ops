# Session Log: 2026-08-05 career-ops daily run

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries across Greenhouse, Ashby, Lever + targeted company searches (Anthropic, OpenAI, Samsara, Life360, Omada Health, CentralReach, Airtable, Snorkel AI, Voleon, NetBox Labs, Flywheel Digital)
  - New jobs found: ~58 unique new URLs identified
  - Jobs evaluated: 8 full evaluation reports written (reports 048–055)
  - Applications prepared: 0 (no PDFs generated — proxy blocked ATS access)
  - Primary roles: 1 (CentralReach TPM, Holmdel NJ)
  - Secondary roles: 7 (Airtable, Life360, Omada Health, Anthropic Launches, Anthropic GTM, Snorkel AI, Voleon)
  - Rejected: 0 (all 8 evaluated candidates scored 3.0+)
  - Skipped: ~50 (location, domain, clearance, aggregator, non-technical, junior)

- **Key Decisions:**
  - Proceeded with snippet-based evaluations despite proxy blocking full JD retrieval — better to triage and score than to skip the daily run entirely
  - Classified CentralReach (Holmdel NJ, $140-170K, healthcare) as PRIMARY due to local geography + Sanofi healthcare bridge — the only role in this batch with a NJ-local angle
  - Flagged Anthropic Launches and GTM Systems as PREPARE ONLY despite excellent comp ($290-435K) — the bar at Anthropic is extremely high and both roles require domain expertise Erick lacks
  - Skipped Samsara Manager TPM ($92-132K) despite Remote US — comp falls below the $100K FTE floor for a Manager-level role

- **What Worked:**
  - WebSearch successfully retrieved job titles, companies, locations, and salary ranges for triage despite proxy restrictions
  - Targeted follow-up searches on specific companies yielded detailed comp data (Life360, Omada Health, Airtable, Anthropic, Samsara)
  - The Core Strength Engagement Test framework effectively differentiated between strong fits (Airtable 3.8, CentralReach 3.6) and reaches (Snorkel AI 3.2)

- **What Failed:**
  - **Egress proxy blocks all job board domains** — boards-api.greenhouse.io, job-boards.greenhouse.io, jobs.ashbyhq.com, jobs.lever.co all return HTTP 403 from the proxy gateway. WebFetch and curl both blocked. This prevents full JD retrieval, offer verification via Playwright, and PDF generation.
  - No tailored CVs or application PDFs generated this run
  - Evaluations are snippet-based only — confidence is 6/10 vs. typical 8/10 for full-JD evaluations

- **Friction:**
  - Proxy restrictions added ~30 minutes of troubleshooting before accepting the limitation
  - Without full JDs, some evaluations may have missed requirements that would change the score (e.g., specific certifications, clearance requirements, degree requirements)

- **Missing Context:**
  - Full JD text for all 8 evaluated roles — would improve evaluation confidence by 20-30%
  - Offer verification (active vs. closed) — all 8 are marked unconfirmed
  - Application requirements (custom questions, cover letters, essay prompts) — unknown until JDs can be fetched

- **What To Do Differently:**
  - If proxy restrictions persist, consider pre-saving JDs as local files (jds/) during sessions that have ATS access
  - Add a proxy-check step at the start of the pipeline to fail fast and adjust strategy
  - Consider running the daily scan from a non-proxied environment if available

- **Reusable Insight:**
  - AI transformation PM is now a distinct and growing role category — Life360, Omada Health, Snorkel AI, and others are creating "AI Transformation" program manager titles separate from traditional TPM. Erick's BTII AI adoption coaching + Verisk enterprise delivery could be positioned as a bridge for these roles. Consider adding an "AI Transformation PM" archetype to the target roles in profile.yml.

- **Top Mistake:**
  - Not checking proxy accessibility before attempting bulk JD retrieval — wasted several attempts before diagnosing the 403 block

- **Top Improvement Opportunity:**
  - Create a pre-scan proxy health check that tests ATS domain accessibility and switches to snippet-only mode automatically, logging the limitation upfront
