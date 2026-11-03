# Career-Ops Scan Log — 2026-11-03

## Run Summary

- **Type:** Scheduled automated scan (cloud session)
- **Gap since last scan:** 36 days (last: 2026-09-28)
- **Branch:** `claude/magical-gauss-dykthw`
- **Session:** Cloud remote execution

## Scan Results

### New Finds: 17 new URLs identified (Finance+Healthcare group)

**Citi (7 new):**
1. Technical PM, Applied AI & Agents, SVP, NYC — AI-adjacent, strong CS-1/CS-5 potential
2. Transformation PM Lead, Markets, VP, NYC
3. SVP Program Group Manager, Jersey City
4. Delivery Tech Lead, VP, Jersey City
5. PM Lead, Product Dev Transformation, VP, NYC ($129.8K-$194.8K)
6. IT Project Manager, SVP, Jersey City ($163.6K-$245.4K) — top comp
7. PM Senior Lead, Wealth Lending, SVP, NYC

**UnitedHealth Group (10 new):**
8. Director, Technical Project Management, Remote (AI-enabled)
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
- Prudential: Lead TPM, Newark NJ ($123.7K-$204.1K) — via anitab.org
- Merck: Agile PM, Rahway NJ ($111.4K-$175.3K) — via aggregator
- JPMorgan: 3 roles via aggregator (no direct URLs recovered)

### Evaluations: 5 completed (WebSearch-recovered JDs, batch mode)

Portal domains blocked by session network policy. JDs recovered via WebSearch. All reports marked `**Verification:** unconfirmed (batch mode)`.

| # | Company | Role | Score | Recommendation |
|---|---------|------|-------|---------------|
| 427 | Citi | TPM Applied AI & Agents, SVP | 3.6/5 | APPLY-ELIGIBLE — top find, AI-adjacent |
| 428 | Citi | Transformation PM Lead, Markets VP | 3.2/5 | Merge-skipped (duplicate of existing #148) |
| 429 | UHG | Principal TPM (Remote) | 3.3/5 | APPLY-ELIGIBLE — Optum, fully remote |
| 430 | UHG | Principal TPM (Remote) #2 | 3.4/5 | APPLY-ELIGIBLE — possible AI/data scope |
| 431 | Prudential | Lead TPM (InfoSec, Newark NJ) | 3.1/5 | APPLY-ELIGIBLE (verify if still open) |

### Fast-Skipped at Scan Stage (6 candidates)
- Citi — SVP Program Group Manager (JC) — thin JD, stale req #24810821
- Citi — Delivery Tech Lead VP (JC) — stale 2025 posting, engineering lead not TPM
- UHG — Senior PM #22194021 — remote not guaranteed, Pharmacy Services
- UHG — Senior Technical PM #93815078800 — lower priority, added to scan-history
- UHG — Senior Technical PM #96863594208 — lower priority, added to scan-history
- Merck — Agile PM Rahway NJ — aggregator-only URL, manufacturing IT domain mismatch

### Search-Query Scan: Partial (from earlier session phase)

Earlier in this session before context compaction, the search queries agent processed the 12 portals.yml queries. Results:
- 3 added for future evaluation (Salt Director AI Transformation, Marqeta Sr Manager Transformation, Phizenix RTE NYC)
- Remaining filtered out by location, domain mismatch, comp floor, or duplicates
- Search queries remain saturated (4th consecutive scan)

## Agent Execution

| Agent | Scope | Status | Result |
|-------|-------|--------|--------|
| Finance+Healthcare (manual) | Citi/UHG/Goldman/Prudential/MetLife/J&J/Merck/JPMorgan | Complete | 11 candidates in scan-history, 5 evaluated |
| Search queries | 12 portals.yml queries | Partial | Ran before context compaction; stalled after |
| BigTech+AI/Infra | IBM/ServiceNow/Salesforce/Microsoft/AWS/Google/Anthropic/OpenAI/Palantir/Glean/CoreWeave | Stalled | Agent stalled after context compaction |
| Consulting+Gov | Accenture/Deloitte/KPMG/PwC/EY/Booz Allen/Leidos/SAIC/Cognizant/WSP/AECOM/Parsons | Stalled | Agent stalled after context compaction |

## Pipeline Integrity

- scan-history.tsv: 654 → 665 entries (+11 new from Finance+Healthcare)
- pipeline.md: 10 URLs remain in Pending for Erick's manual evaluation
- applications.md: 275 → 279 entries (+4 from merge; 1 skipped as dup)
- Reports generated: 5 (427-431)
- verify-pipeline.mjs: 0 errors, 1 warning (known Glean #108/#109 false positive)
- merge-tracker.mjs: 4 added, 0 updated, 1 skipped

## Recommendations for Erick

1. **PRIORITY: #427 Citi TPM Applied AI & Agents** — possible Nov 30 deadline, AI-adjacent career positioning
2. **Evaluate remaining 10 pipeline URLs** — includes 2 UHG Director-level remote roles and Citi SVP IT PM ($163.6K+)
3. **Verify #431 Prudential Lead TPM** — Jun 2026 posting, may be closed
4. **Schedule next scan sooner** — BigTech/Consulting/SearchQuery segments weren't fully scanned due to agent stalls
5. **Add network allowlist** — jobs.citi.com, careers.unitedhealthgroup.com for future cloud scans
6. **Refresh portals.yml search_queries** — saturated for 4 consecutive scans

## Data Quality Notes

- Goldman Sachs scan_query: non-functional (4+ scans)
- jobs.kpmg.us: zero results via websearch (3+ scans)
- UHG direct-posting-URL 404 pattern: persistent
- IBM careers.ibm.com: 404s on WebFetch
- Greenhouse API (boards-api.greenhouse.io): blocked by network policy
- Agent failure mode: context compaction during long-running session stalled 3 of 4 background agents
