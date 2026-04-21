# Session Log: career-ops daily run

---

### Session: career-ops daily run

- **Objective:**
  Execute job scan, evaluation, and application prep pipeline

- **Execution Summary:**
  - Portals scanned: 12 search queries across Greenhouse, Lever, Ashby, Dice, LinkedIn, AI/PMO portals
  - New jobs found: 30+ unique postings discovered, 8 evaluated in detail
  - Jobs evaluated: 6 full reports generated (007–012)
  - Applications prepared: 2 strong fits ready (Calendly 4.3/5, Syner-G 4.2/5)
  - Primary roles: 2 (Veda Data Senior SM, HealthVerity Senior PM/SM)
  - Secondary roles: 4 (Calendly Senior TPM, Syner-G Sr. PM, Jencap Senior PM PMO, Nava Sr. PM)
  - Rejected: 2 (Capital Rx — seniority mismatch 2.9/5, RXR — not program delivery 2.5/5)

- **Key Decisions:**
  - Prioritized pharma + Power BI (Syner-G) as highest-value match due to direct Sanofi overlap
  - Calendly scored highest (4.3/5) due to 6-7 Core Strengths engaged
  - Rejected Capital Rx SM as too junior (team-level, not program-level)
  - Flagged HealthVerity as conditional due to Philadelphia commute + wide comp band
  - Selected Technical PM resume for cloud/compliance roles, Agile resume for SM roles

- **What Worked:**
  - WebSearch provided sufficient detail for evaluations despite WebFetch being blocked
  - Greenhouse API format allowed targeted company searches
  - Core Strength Engagement Test cleanly differentiated strong vs. weak fits
  - Scan-history dedup correctly filtered 10 previously-evaluated roles

- **What Failed:**
  - WebFetch returned 403 on ALL job board URLs (Greenhouse, Lever, Ashby, Dice)
  - Could not generate tailored PDFs without full JD text
  - Normalize-statuses script converts to Spanish aliases instead of English canonical labels
  - Greenhouse API endpoints also returned 403 (sandbox restriction)

- **Friction:**
  - No access to actual JD pages reduced evaluation confidence from ~9 to ~6 on average
  - Merge-tracker script defaults status to Spanish alias "Evaluada" instead of English "Evaluated"

- **Missing Context:**
  - Full JD text for Calendly (salary range), Syner-G (comp, specific years of experience), Veda Data (comp)
  - Whether Nava's comp matches $100K+ minimum
  - Calendly's actual comp range for Senior TPM (estimated $140K-$180K from market data)

- **What To Do Differently:**
  - Pre-cache JD text via curl/puppeteer in a separate prep step before evaluation
  - Fix normalize-statuses.mjs to use English canonical labels
  - Run portal scan with Playwright when available (non-batch mode) for verification

- **Reusable Insight:**
  - Pharma + Power BI is a rare combination that few candidates can demonstrate. Syner-G and similar pharma PMO roles should always be prioritized when found.
  - SOC 2/ISO compliance roles are strong secondary targets — Verisk CAB/release governance directly maps.

- **Top Mistake:**
  - Attempted WebFetch on 6 URLs simultaneously before discovering the 403 pattern. Should have tested one first.

- **Top Improvement Opportunity:**
  - Build a local JD cache by running Playwright-based scraping in interactive sessions. This would enable full evaluations in batch mode.

---

## Pipeline Health (post-run)

| Metric | Value |
|--------|-------|
| Total tracked | 12 |
| Evaluated (today) | 6 |
| Applied (prior) | 6 |
| Rejected (today) | 2 |
| Strong fits (≥4.0) | 2 |
| Average score (today) | 3.65/5 |
| Pipeline verification | ✅ Clean |
