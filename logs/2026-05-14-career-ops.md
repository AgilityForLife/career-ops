# Session Log: career-ops daily run — 2026-05-14

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, LinkedIn, and general web (covering 45+ tracked companies)
  - New jobs found: 19 unique URLs (12 added to scan-history, 7 evaluated, 6 rejected)
  - Jobs evaluated: 7
  - Applications prepared: 0 (evaluation-only; no PDFs generated in batch mode)
  - Primary roles: 2 (Nava Sr. PM 3.8/5, Ardent SM DHS 3.5/5)
  - Secondary roles: 5 (Roku AI PM 3.4/5, TTEC Digital Principal TPM 3.3/5, Mercury Sr TPM 3.2/5, Coretelligent Sr TPM 3.2/5, CentralReach TPM 3.0/5)
  - Rejected: 6 (Ripple domain gap, Wellfit small scope, 3Cloud Philippines, Vonage UK-based, Rackner clearance required, Cognite India/Indianapolis)

- **Key Decisions:**
  - Used WebSearch cached data instead of direct WebFetch (all job boards returned 403 Forbidden)
  - Classified Nava as PRIMARY due to strong 4-CS engagement and NJ hybrid location
  - Classified Ardent DHS as PRIMARY due to SPC6 differentiator in federal/regulated context
  - Rejected Ripple despite $216-270K comp due to crypto/blockchain domain gap scoring below 3.0
  - Set CentralReach at borderline 3.0/5 due to thin JD — marked for comp verification before applying

- **What Worked:**
  - WebSearch provided enough JD detail from cached/aggregated sources to evaluate roles despite 403 blocks
  - Skills-model.md scoring rules provided consistent, defensible scoring across all 7 evaluations
  - Scan-history dedup effectively filtered out 10 previously-seen URLs from April batch

- **What Failed:**
  - WebFetch returned 403 Forbidden on ALL Greenhouse and Lever direct URLs
  - Greenhouse Board API also returned 403 Forbidden (previously worked)
  - Limited JD details for several roles (CentralReach, Roku) reduced evaluation confidence

- **Friction:**
  - 403 blocks on job boards forced reliance on search snippets, reducing evaluation depth
  - Normalize script uses Spanish canonical statuses (Evaluada, Aplicado) while CLAUDE.md references English (Evaluated, Applied) — caused initial verify-pipeline failure

- **Missing Context:**
  - Full JD text for Roku AI PM (comp is strong but role details are thin)
  - Comp information for Nava, Ardent, Coretelligent, CentralReach
  - Whether Nava role is contract or FTE

- **What To Do Differently:**
  - Pre-cache JDs via Playwright browser automation before batch evaluation (not available in headless mode)
  - Consider adding Google cached page URLs as fallback JD source
  - Add comp research step (Glassdoor, Levels.fyi) for roles with undisclosed compensation

- **Reusable Insight:**
  - Government/federal regulated roles (DHS, VA, DOT) consistently score 3.5+ due to strong CS-5/CS-7 alignment. These should be prioritized in future scans. The SAFe SPC6 certification is a rare differentiator in this space.

- **Top Mistake:**
  - Attempting direct WebFetch on all job board URLs before discovering 403 blocks. Should have tested one URL first and pivoted to WebSearch-based JD extraction immediately.

- **Top Improvement Opportunity:**
  - Build a JD caching pipeline: when a URL is first discovered via scan, immediately attempt to fetch and store the JD locally (in jds/ directory). This decouples JD retrieval from evaluation and prevents 403 issues from blocking the entire pipeline.

---

## Evaluation Summary Table

| # | Company | Role | Score | Classification | CS Engaged | Comp |
|---|---------|------|-------|----------------|------------|------|
| 7 | Nava | Sr. Project Manager | 3.8/5 | PRIMARY | CS-1,CS-4,CS-5,CS-7 | Unknown (gov consulting) |
| 8 | Ardent | Scrum Master (DHS) | 3.5/5 | PRIMARY | CS-5,CS-6,CS-7 | Unknown (federal) |
| 9 | Roku | AI Program Manager | 3.4/5 | SECONDARY | CS-1,CS-5 | $140-170K |
| 10 | TTEC Digital | Principal TPM | 3.3/5 | SECONDARY | CS-1,CS-4,CS-5 | $120-135K+incentive |
| 11 | Mercury | Senior TPM | 3.2/5 | SECONDARY | CS-1,CS-5 | $118-148K |
| 12 | Coretelligent | Senior TPM | 3.2/5 | SECONDARY | CS-1,CS-2,CS-5 | Unknown |
| 13 | CentralReach | TPM | 3.0/5 | SECONDARY | CS-5 | Unknown (NJ hybrid) |

## Rejected Summary

| Company | Role | Reason |
|---------|------|--------|
| Ripple | Principal TPM | Crypto/blockchain domain gap (2.8/5) |
| Wellfit | Agile SM | Small scope, 2-3 teams only (2.5/5) |
| 3Cloud | Scrum Master | Philippines location |
| Vonage | PM AI Implementation | UK-based FTC |
| Rackner | TPM Federal Health | Secret Clearance required |
| Cognite | TPM SaaS/Engineering | India/Indianapolis location |
