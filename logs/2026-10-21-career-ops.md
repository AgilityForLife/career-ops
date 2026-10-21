# Career-Ops Session Log — 2026-10-21

**Type:** Scheduled automated scan (remote cloud session)
**Gap since last scan:** 23 days (2026-09-28 → 2026-10-21) — longest in pipeline history
**Branch:** claude/magical-gauss-180pif

---

## Pipeline Summary

| Metric | Value |
|--------|-------|
| New URLs scanned | 74 |
| Fully evaluated | 13 (reports 427-439) |
| Fast-skipped | 61 |
| Scored 3.0+ (apply-eligible) | 7 |
| Scored <3.0 (rejected) | 6 |
| PDFs generated | 0 (proxy blocked JD fetch; unconfirmed batch mode) |
| Applications submitted | 0 (SUBMISSION GATE active) |
| scan-history.tsv | 637→711 entries |
| applications.md | 275→284 entries |

## Scan Method

Outbound HTTPS proxy blocked direct access to job boards (403 policy denial). All evaluations
from WebSearch snippet data only. Reports marked "unconfirmed (batch mode)." WebFetch also
failed (DNS ENOTFOUND). Background fork agents from prior context stalled; scanning done
directly via 18 parallel extended WebSearch calls.

## Top Candidates (Apply-Eligible, Awaiting Erick's Go)

### 1. 3Cloud — Delivery Manager, Project Delivery (3.8/5) ⭐ BEST OF RUN
- **URL:** https://job-boards.greenhouse.io/3cloud/jobs/8590358002
- **Location:** Remote US
- **Why:** Azure cloud consultancy = direct CS-2/CS-3 fit. Cloud platform delivery is the
  core business. Delivery governance in Azure maps to Verisk DevOps patterns.
- **Lead with:** "Delivered cloud platform adoption across 15-17 cross-functional teams
  with 40% outage reduction and 60% stability improvement"

### 2. GitLab — Principal TPM (3.7/5)
- **URL:** https://job-boards.greenhouse.io/gitlab/jobs/8693068002
- **Location:** All-remote (GitLab is fully remote)
- **Why:** DevOps platform company makes CS-3 uniquely relevant. Principal level matches
  seniority. All-remote perfect for NJ.
- **Lead with:** Verisk DevOps governance outcomes + enterprise scale

### 3. Omada Health — Staff AI Transformation PM (3.6/5)
- **URL:** https://job-boards.greenhouse.io/omadahealth/jobs/7963790
- **Location:** Remote USA
- **Why:** AI transformation + healthcare regulation engages 4+ CS. Staff level = senior IC.
- **Caveat:** ~145 days old — verify still open before pursuing

### 4. Airtable — PM Professional Services East (3.5/5)
- **URL:** https://job-boards.greenhouse.io/airtable/jobs/8586863002
- **Location:** NYC or Remote US
- **Comp:** $179,500–$221,500
- **Why:** Exceptional comp. Enterprise customer project delivery at scale.

### 5. Cognizant — Sr Consulting Manager, BI & Delivery Lead (3.5/5)
- **URL:** https://careers.cognizant.com/global-en/jobs/00070746661
- **Location:** Bridgewater, NJ (local!)
- **Why:** CS-4 (BI/Power BI) is the rare differentiator here. SAFe required. Fresh posting (~15d).

### 6. Leidos — Senior PM/PMO Lead (3.4/5)
- **URL:** https://careers.leidos.com/jobs/17816750
- **Location:** Remote US (hybrid remote)
- **Comp:** $116,350–$210,325
- **Why:** PMP required (direct match). Government regulated = CS-7.

### 7. Amazon — Principal TPM, Demand Tech (3.3/5)
- **URL:** https://www.amazon.jobs/en/jobs/10379630
- **Location:** NYC
- **Why:** Principal level at Amazon. AWS native. CS-1/CS-2 engaged.
- **Caveat:** Ad-tech domain gap

## Rejected

| # | Company | Role | Score | Reason |
|---|---------|------|-------|--------|
| 438 | CoreWeave | TPM, Inference | 3.0/5 | APPLY w/ caveats; NJ hybrid $198-264K; domain gap pattern recurs from #308/#309 |
| 429 | Corbalt | Technical Project Manager | 2.8/5 | CMS healthcare remote; only 2.5/7 CS; comp below anchor |
| 434 | Anthropic | PM, Responsible Scaling Policy | 2.6/5 | Policy ops ≠ technical delivery; 2/7 CS |
| 427 | Anthropic | TPM, Corporate Engineering | 2.5/5 | Internal IT scope (HR tools, office buildouts); 1.5/7 CS |
| 439 | OpenAI | TPM, Support Delivery | 2.0/5 | Support engineering ≠ delivery; re-eval confirms #172 rejection |
| 436 | Anthropic | TPM, Discovery | 1.8/5 | ML engineering/research background required; hard domain mismatch |

## Data Quality Notes

- Goldman Sachs: scan_query non-functional (3+ consecutive scans)
- KPMG: jobs.kpmg.us zero hits (3+ scans)
- Merck: stale index confirmed again
- IBM: careers.ibm.com 404/proxy pattern continues
- EY: careers.ey.com zero results
- **NEW:** Deloitte postings mostly closing Aug-Sep 2026 (all stale)
- **NEW:** Prudential listings appear years old
- **NEW:** MetLife only returned Tokyo result
- **NEW:** Proxy environment blocks direct JD fetching — all future scans from this environment will be unconfirmed batch mode

## Recommendations for Next Scan

1. **Verify the 6 apply-eligible roles** — Erick should review and decide which to pursue
2. **Rotate search queries** — the static portals.yml queries are fully saturated for the 4th consecutive scan
3. **Add recency qualifiers** — "posted this month" or date-range operators to surface fresh-only results
4. **Consider new tracked companies** — the current list has several dead channels (Goldman, KPMG, Merck, EY)
5. **Shorten scan gap** — 23 days is too long; aim for 5-7 day cadence
