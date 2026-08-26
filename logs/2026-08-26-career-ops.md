# Session Log: 2026-08-26

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 6 search queries across Greenhouse, Ashby, Lever + 3 targeted company/AI queries + 6 JD detail queries
  - New jobs found: 33 new URLs logged to scan-history
  - Jobs evaluated: 4 full evaluation reports (053–056)
  - Applications prepared: 0 (no auto-submit; materials ready for Nava and Nimble Gravity)
  - Primary roles: 2 (Nava 4.0/5, Nimble Gravity 3.5/5)
  - Secondary roles: 2 (Anthropic TPM Security 3.4/5, Anthropic TPM Launches 3.3/5)
  - Rejected: 0 (all 4 evaluated postings cleared minimum thresholds)
  - Skipped/filtered: 29 (location, aggregator, backlog, closed, title, domain filters)

- **Key Decisions:**
  - WebFetch blocked for all job board domains (same as 2026-08-11 scan) — all evaluations based on WebSearch JD summaries only
  - Focused evaluation on 4 strongest new candidates out of 33 total new URLs detected
  - Classified Nava as strongest fit of batch due to NJ location + $140-158K comp + Agile+PM hybrid alignment
  - Logged 8 new Anthropic TPM roles; evaluated 2 with NYC options, skipped 6 on location (Seattle/SF only) or domain (ML research, partnerships)
  - Carried forward VantageScore and Coder TPM as backlog items needing location verification

- **What Worked:**
  - Multi-query parallel WebSearch strategy covered Greenhouse, Ashby, and Lever portals efficiently
  - Cross-referencing against scan-history.tsv correctly filtered 100% of previously-seen postings
  - Pipeline verify script confirms clean state with 0 errors

- **What Failed:**
  - WebFetch egress blocked for all job board domains — can only get JD details from WebSearch snippets, which limits evaluation depth
  - Some JDs (VantageScore, Coder, Augmodo) had insufficient detail from search to make go/no-go calls

- **Friction:**
  - Network egress proxy blocks direct JD fetching; evaluations are shallower than ideal
  - Anthropic posted Jan 2026 roles may be filled — no way to verify without direct board access

- **Missing Context:**
  - Comp data for Nimble Gravity (not listed)
  - VantageScore office location (Stamford CT? remote?)
  - Whether Anthropic TPM Launches (Jan 2026 posting) is still actively recruiting

- **What To Do Differently:**
  - Consider using Greenhouse Boards API for Anthropic (boards-api.greenhouse.io/v1/boards/anthropic/jobs) to verify which postings are still live
  - Prioritize Nava application — strongest location + comp fit of recent scans

- **Reusable Insight:**
  - NJ hybrid roles are rare at this level; Nava represents a premium opportunity because geographic convenience compounds with comp alignment. Flag for immediate follow-up.

- **Top Mistake:**
  - None critical this run; could have narrowed search queries earlier to avoid processing known-skip aggregators (Jobgether appeared 3 times)

- **Top Improvement Opportunity:**
  - Build a pre-filter that auto-skips Jobgether/aggregator URLs in scan results before manual review

---

## Portal Scan
- Portals scanned: Greenhouse (3 queries), Ashby (1 query), Lever (1 query), AI/Transformation (1 query), Anthropic direct (1 query), Contract/C2C (1 query), plus 6 targeted JD detail queries
- New jobs detected: 33 new URLs not in scan-history
- Duplicates filtered: ~15 URLs already in scan-history correctly skipped
- Any anomalies: WebFetch blocked for all job board domains; TTEC Digital posting closed since Feb 2026

## Batch Summary
- Total processed: 4 full evaluations
- Strong fits: 1 (Nava 4.0/5 — strongest of batch)
- Weak fits: 0 (all 4 cleared 3.0 threshold)
- Unclear roles: 2 backlog (VantageScore, Coder — need location verification)
- Patterns noticed: Anthropic continues to post heavily for TPMs but most require SF/Seattle; NYC options are the exception. NJ hybrid roles remain extremely rare.

## Job Evaluation: Nava — Sr. Project Manager
- Role classification: PRIMARY
- Why selected: NJ hybrid location bullseye + $140-158K in target band + Agile+PM hybrid matching PMP+SPC6
- Resume chosen: Technical PM
- Key strengths match: CS-1 (enterprise delivery), CS-4 (reporting systems), CS-5 (stakeholder alignment), CS-6 (Agile frameworks)
- Key gaps: External customer-facing experience (bridgeable via Sanofi), consulting pedigree
- Confidence (1–10): 8

## Job Evaluation: Nimble Gravity — SM AI Delivery
- Role classification: PRIMARY
- Why selected: Remote US, PMP/SAFe certs explicitly required, regulated industries valued
- Resume chosen: Agile resume
- Key strengths match: CS-6 (SAFe SPC6), CS-7 (regulated industries), CS-5 (cross-functional)
- Key gaps: AI/ML delivery depth, consulting/client-facing, comp unknown
- Confidence (1–10): 6

## Job Evaluation: Anthropic — TPM Launches
- Role classification: SECONDARY
- Why selected: NYC option, exceptional comp $290-365K, cross-functional orchestration matches CS-1
- Resume chosen: Technical PM (no coaching/SAFe)
- Key strengths match: CS-1 (cross-functional orchestration), CS-5 (cross-org alignment)
- Key gaps: AI research domain, product launch specificity, engineering depth bar, posted Jan 2026
- Confidence (1–10): 4

## Job Evaluation: Anthropic — TPM Security
- Role classification: SECONDARY
- Why selected: NYC option, CS-3/CS-7 governance bridge (CAB + incident mgmt + compliance)
- Resume chosen: Technical PM (governance/compliance focused)
- Key strengths match: CS-3 (security governance parallel), CS-7 (RSP compliance), CS-1 (program delivery)
- Key gaps: Security-specific domain depth, AI safety/RSP novelty, engineering depth bar
- Confidence (1–10): 5

## Resume Decision
- Resume used: Technical PM for Nava, Anthropic roles; Agile for Nimble Gravity
- Reason: Nava and Anthropic roles value enterprise delivery governance, not coaching; Nimble Gravity explicitly requires SAFe/Agile certs
- Any ambiguity: None
- Missing data from cv.md: None

## Final State
- Total outputs: 4 evaluation reports + 4 tracker TSVs + scan-history updated (33 entries) + pipeline.md updated
- Reports generated: 053, 054, 055, 056
- Applications prepared: 0 (evaluation only; no auto-submit per safety rules)
- Any failed steps: None
- Any skipped steps: PDF generation skipped (WebFetch blocked = no full JDs for tailored CVs)
- Confidence (1–10): 7
