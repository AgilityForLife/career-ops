# Session Log: 2026-09-01

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12+ search queries across Greenhouse, Ashby, Lever boards + tracked companies (Anthropic, OpenAI, sFOX, Agile Six, Accenture FS, etc.)
  - New jobs found: 29 new candidates identified (not in scan-history)
  - Jobs evaluated: 7 full evaluation reports generated (053-059)
  - Applications prepared: 0 (all dispositions are PREPARE ONLY or APPLY w/ caveats — no auto-submit per safety rules)
  - Primary roles: 1 (Agile Six Delivery Manager 3.6/5)
  - Secondary roles: 6 (Anthropic Launches 3.4, Anthropic Databases 3.4, OpenAI Privacy 3.5, sFOX TPM 3.2, Anthropic API Platform 3.2, Anthropic Security 3.0)
  - Rejected/Skipped: 22 (location/domain/hardware/backlog/title filters)

- **Key Decisions:**
  - Evaluated all 7 Anthropic TPM roles discovered; only Launches, Databases, API Platform, and Security scored high enough for reports; Silicon, Recruiting Tech, RL Research, Apps Platform, Research skipped on domain/location
  - OpenAI TPM Privacy was the only OpenAI role evaluated — remaining 7 OpenAI roles were hardware/facilities/SF-only
  - Agile Six Delivery Manager scored highest at 3.6/5 — best fit pattern (gov tech + regulated + agile delivery)
  - No resumes generated this batch — no candidates reached APPLY threshold without manual review

- **What Worked:**
  - Parallel WebSearch across multiple portals efficiently identified new candidates
  - Scan history dedup prevented re-evaluating ~166 previously seen postings
  - Skills model scoring consistently differentiated fit levels (Agile Six's CS-1/5/6/7 engagement vs. Anthropic's domain-specific gaps)

- **What Failed:**
  - WebFetch blocked for ALL job board domains (Greenhouse, Ashby, Lever, boards-api.greenhouse.io) — 3rd consecutive scan with this constraint
  - Evaluations limited to WebSearch JD summaries — some roles (MojoRank, OpenAI Support Delivery) had insufficient detail for proper scoring
  - No Greenhouse/Ashby board APIs accessible for comprehensive job listing enumeration

- **Friction:**
  - Egress proxy blocks all ATS domains, forcing reliance on WebSearch snippets instead of full JDs
  - Volume of Anthropic/OpenAI TPM roles (16+ combined) required significant triage time; most turned out to be domain-specific hardware/ML roles with material gaps

- **Missing Context:**
  - Full JDs for evaluated roles (could improve scoring accuracy by 0.2-0.3 points)
  - Comp data for several roles (MojoRank, Agile Six networking-domain specifics)
  - Whether Erick has updated preferences since 2026-08-11 (e.g., willingness to consider SF 25% hybrid, crypto/fintech domain)

- **What To Do Differently:**
  - Consider Playwright-based scanning in a local environment where WebFetch/egress restrictions don't apply
  - Pre-filter Anthropic/OpenAI roles by checking if NYC is listed before fetching full JDs — saves time on SF-only roles
  - Add a "seen this session" marker to prevent re-searching the same company multiple times

- **Reusable Insight:**
  - Gov tech (VA/CMS/CDC) delivery manager roles remain the strongest pattern match for Erick's CS-1/CS-5/CS-6/CS-7 combination. The $115-128K comp is below target but the role-fit is superior to aspirational AI company roles that pay 2-3x but require domain expertise he lacks.
  - Anthropic/OpenAI increasingly post domain-specific TPM roles (silicon, databases, security, compute infrastructure) rather than general program management roles — the "general enterprise TPM" openings are rare at these companies.

- **Top Mistake:**
  - None critical. The batch ran cleanly within egress constraints.

- **Top Improvement Opportunity:**
  - Gaining access to full JDs via Playwright or unrestricted WebFetch would improve evaluation accuracy and catch requirements (clearance, specific technical depth, degree requirements) that WebSearch summaries miss.
