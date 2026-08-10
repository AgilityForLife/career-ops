# Session Log: 2026-08-10 — career-ops daily run

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries across Greenhouse, Ashby, Lever, Dice, LinkedIn/Indeed + Anthropic & OpenAI targeted searches
  - New jobs found: 36 new URLs identified (6 evaluated, 30 logged as skipped)
  - Jobs evaluated: 6
  - Applications prepared: 0 (all HELD for manual review or pending verification)
  - Primary roles: 2 (Ardent DHS Scrum Master 3.6/5, Edgesource National Security SM 3.3/5)
  - Secondary roles: 3 (Snorkel AI TPM 3.5/5, Anthropic TPM Security 3.5/5, Anthropic TPM Launches 3.4/5)
  - Rejected: 1 (Airtable PM Pro Services 3.2/5 — hard prerequisite gaps)

- **Key Decisions:**
  - Focused evaluation on 6 most promising candidates from 36 new URLs; remaining 30 were domain walls (silicon, hardware, robotics, DC construction), location blocks (SF 3-day, UK, India), or aggregators
  - Classified Anthropic TPM Security as highest-potential role despite domain gap (5/7 CS engaged — structural best match)
  - Did NOT over-filter: included SM roles at Ardent and Edgesource because CS-6/CS-7 context elevates them above generic SM
  - Rejected Airtable despite CS-1 match because consulting delivery + platform fluency are explicit hard prerequisites

- **What Worked:**
  - WebSearch provided sufficient JD detail for evaluation despite WebFetch being blocked for job board domains
  - Anthropic and OpenAI targeted searches surfaced 17+ new TPM roles not previously in scan history
  - Scan-history deduplication correctly filtered ~15 previously-seen URLs

- **What Failed:**
  - WebFetch blocked for greenhouse.io, ashbyhq.com, and boards-api.greenhouse.io — unable to fetch full JDs or verify postings via API
  - Cannot generate PDFs without full JD text (all reports marked ❌ for PDF)
  - Anthropic Greenhouse API (boards-api.greenhouse.io) blocked — had to use WebSearch as fallback

- **Friction:**
  - Egress proxy blocks all major ATS domains (Greenhouse, Ashby, Lever APIs) — limits verification capability
  - Unable to confirm posting freshness for older listings (Edgesource April 2026)

- **Missing Context:**
  - Full JD text for Ardent DHS SM (clearance requirements, exact comp range)
  - Full JD text for Edgesource SM (clearance level, detailed requirements)
  - Snorkel AI comp range not publicly listed

- **What To Do Differently:**
  - Consider running scans from an environment where WebFetch is not egress-blocked for ATS domains
  - Batch the Anthropic/OpenAI searches together since they consistently produce 5-10+ TPM roles per scan

- **Reusable Insight:**
  - Anthropic and OpenAI alone produce 15-20 TPM roles per scan cycle, but 80%+ are domain-specific (silicon, hardware, DC infrastructure, robotics) or SF-office-only — worth maintaining a pre-filter to skip known domain walls faster
  - The "willingness to learn" qualifier in cybersecurity JDs (like Anthropic TPM Security) may be an intentional signal to attract governance/compliance TPMs — worth leveraging CS-3/CS-7 as a bridge

- **Top Mistake:**
  - None critical; the main limitation was environmental (egress proxy), not decision-based

- **Top Improvement Opportunity:**
  - Build a pre-filter map of Anthropic/OpenAI domain-specific TPM roles to auto-skip silicon/hardware/DC/robotics on future scans, saving ~10 minutes per cycle

---

## Portal Scan
- Portals scanned: Greenhouse (PM/Delivery, Agile/SM, AI PM, PMO), Ashby (PM/Agile/TPM), Lever (PM/Agile), Dice (Contract PM/Agile NJ), LinkedIn/Indeed (Contract C2C NJ/NY), Anthropic API, OpenAI careers
- New jobs detected: 36
- Duplicates filtered: ~15 (previously seen in scan-history.tsv)
- Any anomalies: WebFetch blocked for all ATS domains (greenhouse.io, ashbyhq.com); Greenhouse API (boards-api) also blocked

## Job Evaluation: Snorkel AI — TPM Enterprise AI Solutions
- Role classification: SECONDARY
- Why selected: AI-adjacent PM role with Remote US option; enterprise customer delivery maps to CS-1
- Resume chosen: Technical PM (lead enterprise delivery + data platform bridge to AI)
- Key strengths match: CS-1 (enterprise delivery), CS-5 (cross-functional alignment)
- Key gaps: Customer-facing delivery model vs internal; AI domain knowledge (agents, RAG); 2+ yr req signals junior
- Confidence (1–10): 6

## Job Evaluation: Ardent — Scrum Master DHS
- Role classification: PRIMARY
- Why selected: Federal DHS program, remote, SAFe preferred — CS-6 + CS-7 strong match
- Resume chosen: Agile resume (lead SPC6 + regulated delivery governance)
- Key strengths match: CS-6 (SPC6 differentiator), CS-7 (DHS regulated), CS-5 (gov/contractor stakeholders)
- Key gaps: SM scope vs TPM; clearance requirements unknown; comp unknown
- Confidence (1–10): 7

## Job Evaluation: Anthropic — TPM Launches
- Role classification: SECONDARY
- Why selected: $290-365K comp, NYC option, CS-1/CS-5 match
- Resume chosen: Technical PM (lead enterprise program delivery + release governance)
- Key strengths match: CS-1 (program orchestration), CS-3 partial (launch governance), CS-5 (stakeholders)
- Key gaps: AI/ML product launches domain; research org tempo; likely office-based
- Confidence (1–10): 5

## Job Evaluation: Anthropic — TPM Security
- Role classification: SECONDARY
- Why selected: Highest CS engagement (5/7) of entire batch; $290-365K; NYC option
- Resume chosen: Technical PM (lead DevOps governance + compliance + data-driven reporting)
- Key strengths match: CS-1, CS-3 (security governance), CS-4 partial (SQL reporting), CS-5, CS-7 (RSP compliance)
- Key gaps: Cybersecurity domain expertise; AI safety/RSP context
- Confidence (1–10): 6

## Job Evaluation: Airtable — PM Professional Services East
- Role classification: REJECTED
- Why rejected: Hard prerequisites unmet — consulting/PS delivery required + Airtable platform fluency required
- Key strengths match: CS-1 (delivery ownership), CS-5 (multi-stakeholder)
- Key gaps: "Not just managed internal projects" explicitly disqualifies internal-only experience; platform fluency prerequisite
- Confidence (1–10): 8 (high confidence in rejection)

## Job Evaluation: Edgesource — Scrum Master National Security
- Role classification: PRIMARY
- Why selected: DevSecOps workstreams (CS-3 direct), national security regulated (CS-7), remote
- Resume chosen: Agile resume (lead SPC6 + DevOps governance metrics + regulated delivery)
- Key strengths match: CS-3 (DevSecOps), CS-5, CS-6 (SM/SPC6), CS-7 (national security)
- Key gaps: Security clearance likely required; posted April 2026 (may be stale)
- Confidence (1–10): 6

## Resume Decision
- Resume used: N/A (no CVs generated this batch — WebFetch limitations prevent full JD capture for tailoring)
- Reason: Reports generated but PDFs deferred pending manual review and full JD access
- Any ambiguity: None
- Missing data from cv.md: None

## Batch Summary
- Total processed: 6 evaluations from 36 new URLs
- Strong fits: 2 (Ardent 3.6/5, Anthropic TPM Security 3.5/5 structural)
- Weak fits: 1 (Airtable 3.2/5 — rejected)
- Unclear roles: 2 (Edgesource clearance unknown, Snorkel AI comp unknown)
- Patterns noticed: AI companies (Anthropic, OpenAI) have large TPM hiring pipelines but ~80% are domain-specific (silicon, hardware, DC, robotics) or SF-office-only; government contractors (Ardent, Edgesource) remain a strong channel for CS-6/CS-7

## Final State
- Total outputs: 6 reports, 6 TSV tracker additions, 36 scan-history entries
- Reports generated: 050-055
- Applications prepared: 0 (all HELD/pending verification)
- Any failed steps: WebFetch blocked for ATS domains; Greenhouse API blocked; no PDFs generated
- Any skipped steps: PDF generation skipped (full JD text unavailable); offer verification skipped (batch mode + egress blocks)
- Confidence (1–10): 7
