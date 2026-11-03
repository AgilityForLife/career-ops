# Career-Ops Scan Log — 2026-11-03

## Run Summary

- **Type:** Scheduled automated scan (cloud session)
- **Gap since last scan:** 36 days (last: 2026-09-28)
- **Branch:** `claude/magical-gauss-dykthw`
- **Session:** Cloud remote execution

## Scan Results

### New Finds: 17 confirmed new URLs

**Citi (7 new):**
1. Technical PM, Applied AI & Agents, SVP, NYC — AI-adjacent, strong CS-1/CS-5 potential
2. Transformation PM Lead, Markets, VP, NYC
3. SVP Program Group Manager, Jersey City
4. Delivery Tech Lead, VP, Jersey City — CS-1 direct match
5. PM Lead, Product Dev Transformation, VP, NYC ($129.8K-$194.8K)
6. IT Project Manager, SVP, Jersey City ($163.6K-$245.4K) — top comp
7. PM Senior Lead, Wealth Lending, SVP, NYC

**UnitedHealth Group (10 new):**
8. Director, Technical Project Management, Remote (AI-enabled) — director level, AI
9. Director, Technical Project/Program Management, Remote
10. Sr Principal Project-Program Manager, Remote
11. Principal TPM, Remote (req 22468116)
12. Principal TPM, Remote (req 22659120)
13. Principal Project-Program Manager, Remote
14. Senior Manager TPM, Remote
15. Senior TPM, Remote (Minneapolis hybrid)
16. Senior Technical Project Manager
17. Senior Project Manager, Remote

### Aggregator-Sourced (no direct URLs — not added to pipeline)
- Prudential: Lead TPM, Newark NJ ($123.7K-$204.1K)
- Merck: Agile PM, Rahway NJ ($111.4K-$175.3K)
- JPMorgan: 3 roles (Lead TPM Trust & Safety SM, Lead TPM Agility Coach Payments, Principal TPM Corp Oversight)

### Evaluations: 0 (portal domains blocked)

Portal domains (jobs.citi.com, careers.unitedhealthgroup.com) were outside the session's allowed network domains. JDs could not be fetched for Core Strength Engagement Test scoring. All 17 URLs queued in pipeline.md Pending section for evaluation when portal access is available.

## Agent Execution

| Agent | Scope | Status | Result |
|-------|-------|--------|--------|
| scan-finance-healthcare | JPMorgan/Citi/Goldman/Prudential/MetLife/J&J/Merck/UnitedHealth | Completed | 14 candidates found, wrote results file |
| scan-search-queries | 12 portals.yml search queries | Running (timed out in session) | Partial — search queries remain saturated |
| scan-bigtech-ai | IBM/ServiceNow/Salesforce/Microsoft/AWS/Google/Anthropic/OpenAI/Palantir/Glean/CoreWeave | Failed | Sub-delegated instead of executing directly |
| scan-consulting-gov | Accenture/Deloitte/KPMG/PwC/EY/Booz Allen/Leidos/SAIC/Cognizant/WSP/AECOM/Parsons | Failed | Sub-delegated instead of executing directly |
| Direct WebSearch (coordinator) | Anthropic, CoreWeave, Citi, UnitedHealth | Completed | Compensated for failed agents |

## Data Quality Notes

- **search_queries saturation:** 4th consecutive scan with zero new finds from the 12 static queries. Needs rotation/refresh.
- **Consulting+Gov saturation:** 4th consecutive scan with zero new evaluable candidates from that segment.
- **Greenhouse API:** boards-api.greenhouse.io still blocked by network policy (consistent with prior runs).
- **Productive channels:** Only Citi (NYC/JC) and UnitedHealth Group (remote) produced new inventory. These remain the most active PM/TPM hirers in the target market.
- **Agent failure mode:** 2 of 4 fork agents sub-delegated instead of executing directly — same failure mode flagged in 2026-09-24 log. Fork prompt needs stronger anti-delegation language.

## Pipeline Integrity

- scan-history.tsv: 637 → 654 entries (+17 new)
- pipeline.md: 17 URLs added to Pending with priority triage notes
- applications.md: 279 entries; #427 updated (3.6→3.8); 5 reports already merged by agents (427-431)
- Reports generated: 5 (427-431) by background agents with WebSearch-recovered JD metadata
- verify-pipeline.mjs: 0 errors, 1 warning (known Glean #108/#109 false positive)
- merge-tracker.mjs: 0 added, 1 updated, 5 skipped (already present)

## Recommendations

1. **Evaluate the 17 pending URLs** — run `/career-ops pipeline` from a session with portal access
2. **Top 5 to prioritize:** Citi AI TPM SVP, Citi IT PM SVP ($163K+), Citi Delivery Tech Lead VP, UnitedHealth Director TPM Remote (AI), UnitedHealth Director TPM Remote
3. **Resolve aggregator-sourced finds** — search Prudential, Merck, JPMorgan career sites directly for the 5 roles identified via aggregators
4. **Refresh portals.yml search_queries** — the static query block has been saturated for 4 consecutive scans
5. **Add network allowlist entries** — jobs.citi.com, careers.unitedhealthgroup.com, jobs.prudential.com, jobs.merck.com, careers.jpmorgan.com for future cloud scans
