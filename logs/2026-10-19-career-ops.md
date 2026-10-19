# Career-Ops Pipeline Run — 2026-10-19

**Type:** Scheduled automated scan + evaluation pipeline
**Coverage:** 21-day gap since last scan (2026-09-28)
**Branch:** claude/magical-gauss-6cy2iw
**Environment:** Cloud remote execution (claude.ai/code)

---

## Scan Summary

### Portals Scanned
- 12 search_queries from portals.yml (all enabled)
- ~30 tracked_companies across Enterprise Tech, Consulting, Gov, Financial, Healthcare, AI sectors
- 5 parallel scan agents + 1 manual segment

### New URLs Found
- **Total genuinely new:** 55
- **Sent to full evaluation:** 20 reports (427-449, with gaps at 439/446)
- **Filtered at scan stage:** ~35

### Evaluations Completed

| # | Company | Role | Score | Location | Notes |
|---|---------|------|-------|----------|-------|
| 427 | EY | AI Technical Project Manager | 3.6/5 | Atlanta (remote-eligible) | AI delivery + SAFe; $102-213K |
| 428 | EY | PM, Client Tech Activation | 3.5/5 | Hoboken NJ | $167-313K |
| 429 | EY | Program Manager | 3.3/5 | Philadelphia (remote-eligible) | Consulting PM |
| 430 | Cognizant | Sr. TPM/Delivery Manager | 3.8/5 | Jersey City NJ | SAFe/PI Planning; $113-181K |
| 431 | Prudential | Lead, Technical Program Management | 3.5/5 | Newark NJ | InfoSec office; $123.7-204.1K |
| 432 | Citi | PM Lead, Product Dev Transformation VP | 3.4/5 | NYC hybrid | VP-level transformation |
| 433 | Citi | Transformation PM Lead, Markets VP | **2.8/5** | NYC | REJECTED — analytical/quant, Python/SQL |
| 434 | Phizenix | Release Train Engineer | 3.4/5 | NYC hybrid | $70-75/hr 6mo contract; SAFe RTE |
| 435 | Anthropic | TPM, Platform (Security) | 3.4/5 | SF only | Location concern |
| 436 | Anthropic | TPM, Platform (API) | **4.0/5** | SF/NYC/Seattle | **APPLY-ELIGIBLE** — 5/7 CS; $290K-$365K+ |
| 437 | Anthropic | TPM, Consumer Engineering | 3.7/5 | SF/NYC/Seattle | Claude apps; consumer gap |
| 438 | Microsoft | Principal TPM, ISE | 3.8/5 | NYC | $140K-$275K; listing may be closed |
| 440 | CoreWeave | TPM, Customer-Facing Programs | 3.8/5 | Livingston NJ | $135-165K; GPU cloud |
| 441 | CoreWeave | TPM, Program Execution | 3.9/5 | Roseland NJ | $165-200K; priority apply |
| 442 | Palantir | IS Program Manager | 3.0/5 | NYC on-site | Security domain gap |
| 443 | JPMorgan | Principal TPM, Research Tech | 3.9/5 | NYC hybrid | $194-285K; CS-4 Power BI match |
| 444 | UnitedHealth | Senior TPM | 3.7/5 | Remote US | Healthcare TPMO |
| 445 | Microsoft | Senior TPM, AI Infrastructure | **4.0/5** | Remote US | **APPLY-ELIGIBLE** — Azure Compute; $120K-$261K |
| 447 | MetLife | Agile Project Manager | 3.5/5 | NYC/NJ hybrid | $105-120K; comp at floor |
| 449 | Anthropic | TPM, Safeguards | 3.4/5 | SF/NYC | Safety classifiers; ML gap |

## Top Candidates (Score >= 3.8, Apply-Eligible)

1. **Anthropic TPM, Platform API** (436) — 4.0/5, $290K-$365K+, NYC option
   - 5/7 CS engaged; API infrastructure delivery; confirm NYC eligibility before applying
2. **Microsoft Senior TPM, AI Infrastructure** (445) — 4.0/5, $120K-$261K+equity, Remote US
   - CS-1+CS-2 strongly engaged; Azure Specialized Compute; customer cloud migrations
3. **CoreWeave TPM, Program Execution** (441) — 3.9/5, $165-200K, Roseland NJ hybrid
   - GPU cloud infra; excellent NJ location; higher comp than Livingston posting
4. **JPMorgan Principal TPM** (443) — 3.9/5, $194-285K, NYC hybrid
   - CS-4 Power BI match (+0.2); financial services delivery
5. **Cognizant Sr. TPM/Delivery Manager** (430) — 3.8/5, $113-181K, Jersey City NJ
   - SAFe/PI Planning; strong CS-1/CS-6 alignment
6. **CoreWeave TPM, Customer-Facing** (440) — 3.8/5, $135-165K, Livingston NJ
   - GPU cloud infra; NJ location; on-site caveat
7. **Microsoft Principal TPM, ISE** (438) — 3.8/5, $140K-$275K+, NYC
   - 4-5 CS; listing may be closed — monitor for repost

## Scan Anomalies
1. Greenhouse API DNS failure (NEW) — cloud environment restriction
2. WebFetch DNS failures for all direct career sites
3. KPMG jobs.kpmg.us: zero hits, 4th consecutive scan
4. Goldman Sachs scan_query: non-functional, 5+ runs
5. Ashby site: operator completely non-functional
6. EY productivity spike: 5 new URLs after 0 in prior 3 scans
7. Dice was most productive search_query channel

## Data Changes
- scan-history.tsv: 637 → 692 entries (+55 new URLs)
- applications.md: 294 → 295 entries (+1 net after dedup)
- reports/: 20 new evaluation reports
- pipeline.md: updated with scan summary
- logs/: session log created

## Pipeline Integrity
- verify-pipeline.mjs: 0 errors, 2 warnings (MetLife minor dup, Glean pre-existing)
- No applications auto-submitted (SAFETY RULE honored)
- All reports marked **Verification:** unconfirmed (batch mode)
