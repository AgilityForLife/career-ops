# Career-Ops Daily Pipeline — 2026-10-16

**Triggered:** 2026-10-16 05:06 UTC (scheduled routine)
**Scan gap:** 18 days (last scan: 2026-09-28)
**Environment:** Remote cloud container, all job board domains DNS-blocked (greenhouse.io, ashbyhq.com, lever.co, amazon.jobs)

---

## Scan Summary

| Metric | Value |
|--------|-------|
| Search queries executed | 12 (portals.yml) |
| Tracked companies scanned | ~31 |
| New candidate URLs found | ~44 |
| Formally evaluated | 5 (reports #427-#431) |
| Logged to scan-history | 44 (5 evaluated + 39 skipped/rejected) |
| Total scan-history entries | 681 |
| Total applications.md entries | 280 |

## Evaluations

| # | Company | Role | Score | Label | Recommendation |
|---|---------|------|-------|-------|----------------|
| 427 | GitLab | Principal Technical Program Manager | 4.2/5 | SECONDARY | PREPARE ONLY |
| 428 | UnitedHealth Group | AI Governance Program Manager | 3.5/5 | SECONDARY | PREPARE ONLY |
| 429 | Citi | Release & Deployment Manager (VP) | 3.7/5 | SECONDARY | PREPARE ONLY |
| 430 | MetLife | Senior Agile Project Manager | 3.5/5 | PRIMARY | APPLY |
| 431 | UnitedHealth Group | Senior PM Cardiology Implementation | 3.0/5 | SECONDARY | DO NOT APPLY |

### Top Finds

1. **GitLab Principal TPM (4.2/5)** — Best find of this scan. Remote, $203K-$346K, AI DevSecOps R&D PMO. Engages CS-1/CS-2/CS-3/CS-5. Concern: Principal-level seniority bar. Manual review recommended.

2. **Citi Release & Deployment Manager VP (3.7/5)** — Strong CS-3 match (CAB/release governance directly maps). $142K-$213K. Risk: full-time onsite Jersey City may be deal-breaker.

3. **MetLife Senior Agile PM (3.5/5)** — Only APPLY recommendation. PRIMARY label (Agile PM role). Hybrid NY, $103K-$130K. PMP + SAFe SPC6 exceed requirements. Regulated insurance environment.

### Skipped/Rejected Highlights

- **Citi GenAI Group Manager SVP** — Requires hands-on AI/ML + CS degree; domain mismatch
- **Cognizant Consulting Manager API Integration** — Actually a BA role, not PM/delivery
- **Amazon roles** — Continued 5-day RTO pattern
- **OpenAI SF-only roles** — Relocation deal-breaker
- **SAIC, Booz Allen, ClearanceJobs** — Clearance required
- **Most tracked companies** — No new PM/Agile postings beyond what was evaluated in prior scans

## Pipeline Health

- `merge-tracker.mjs`: 5 added, 0 updated, 0 skipped
- `verify-pipeline.mjs`: 0 errors, 1 warning (pre-existing Glean duplicate #108/#109)
- Status: 🟢 Healthy

## Environment Notes

- Git remote set-url blocked by classifier (PAT in URL); used existing git config
- All job board domains DNS-blocked; all evaluations based on WebSearch aggregator mirrors
- Reports marked "Verification: unconfirmed (batch mode)"
- npm install succeeded on retry

## Action Items for Erick

1. **Review GitLab Principal TPM** — Highest-scoring find at 4.2/5. Verify if Principal-level bar is achievable with current experience depth. If yes, prioritize application.
2. **Apply to MetLife Senior Agile PM** — PRIMARY role, APPLY recommended. Hybrid NY, above-floor comp.
3. **Verify Citi Release & Deployment Manager onsite policy** — Strong CS-3 match but onsite Jersey City could be a deal-breaker if 5 days/week mandatory.
4. **Review UHG AI Governance PM** — Growing AI governance field, CS-7 compliance translates. Verify comp range.
