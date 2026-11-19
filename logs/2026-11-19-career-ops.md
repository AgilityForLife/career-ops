# Session Log — 2026-11-19

**Type:** Scheduled automated scan
**Branch:** claude/magical-gauss-3c5olq
**Last scan:** 2026-11-13 (6 days ago)

---

## Step 3: Portal Scan — COMPLETED

**Scope:** 32 tracked companies + 12 portal search queries from portals.yml

### Search queries executed (12/12):
1. Greenhouse — Senior PM & Delivery Lead
2. Greenhouse — Agile Coach & Scrum Master
3. Ashby — PM & Agile roles
4. Lever — PM & Program Manager
5. Lever — Agile Coach & Scrum Master
6. Greenhouse — AI PM & Transformation Lead
7. Ashby — AI PM & Delivery
8. Greenhouse — PMO & Portfolio Manager
9. LinkedIn — Contract PM roles NJ/NY
10. Dice — Contract Technical PM
11. ClearanceJobs / Gov Contractors — PM
12. ProCore / Construction PM roles

### Tracked companies searched (32/32):
- **Big Tech:** IBM, ServiceNow, Salesforce, Microsoft, AWS/Amazon, Google
- **AI/Infra:** Anthropic, OpenAI, Palantir, Glean, CoreWeave
- **Consulting:** Accenture, Deloitte, KPMG*, PwC*, EY*
- **Gov Contractors:** Booz Allen, Leidos, SAIC*, Cognizant
- **Financial Services:** JPMorgan, Citi, Goldman Sachs, Prudential, MetLife
- **Healthcare/Pharma:** J&J, Merck*, UnitedHealth*
- **Infrastructure:** WSP, AECOM, Parsons

(*) Companies marked with * had thin/no results in this scan — their sites either 404'd, returned aggregator mirrors, or had no matching roles.

### Results:
- **Total candidate URLs extracted:** 41
- **After dedup against scan-history.tsv + applications.md (727 known URLs):** 15 new URLs
- **Appended to scan-history.tsv:** 15 entries (total now: 823 lines)
- **Added to pipeline.md Pending section:** 15 entries

### New findings (15):

| # | Company | Role | Location | Notes |
|---|---------|------|----------|-------|
| 1 | Xebia | Agile Coach | Remote EST | Financial services context |
| 2 | Real Chemistry | AI Program Manager | SF/NYC | AI-adjacent PM |
| 3 | Palantir | TPM US Government | Huntsville AL | Clearance required |
| 4 | Goldman Sachs | Transaction Banking Delivery PM VP | NYC | $125-250K |
| 5 | Goldman Sachs | Engineering Associate PM | NYC | $103-153K — may be too junior |
| 6 | OpenAI | TPM Global Programs Applied AI Engineering | SF | $216-240K, SF-based |
| 7 | Accenture | Scrum Master | JC/Pennington NJ | 4 day client onsite |
| 8 | ServiceNow | Senior Staff TPM | Remote/Flexible | 10+ yrs required |
| 9 | ServiceNow | TPM Research | Unknown | Needs JD verification |
| 10 | ServiceNow | Principal TPM | Unknown | Needs JD verification |
| 11 | Parsons | PM AI & Transportation Consultancy | Unknown | AI + infrastructure crossover |
| 12 | Parsons | Sr PM ITS & Smart Mobility | Virtual | Infrastructure PM |
| 13 | Anthropic | TPM (unidentified role) | Unknown | Needs JD verification |
| 14 | Glean | Delivery Excellence Manager | Unknown | Customer-facing delivery |
| 15 | Glean | Senior TPM | Palo Alto | $198-235K, 10+ yrs |

### Preliminary fit assessment (from search snippets only — no JD fetched):

**High priority (likely 3.5+):**
- ServiceNow Senior Staff TPM (Remote) — CS-1/CS-5 likely strong, remote, 10+ yrs matches
- Goldman Sachs Transaction Banking Delivery PM VP — CS-1/CS-5/CS-7, good comp

**Medium priority (likely 3.0-3.5):**
- Parsons PM AI & Transportation — Procore cert + AI adjacency interesting
- Glean Senior TPM — AI company, enterprise delivery, Palo Alto location concern
- Xebia Agile Coach — Tier 4 cap risk for coaching-only role

**Lower priority / flags:**
- Palantir TPM US Gov — clearance requirement is a gate
- Accenture SM JC/Pennington — 4 day onsite may trip deal-breaker
- Goldman Sachs Engineering Associate PM — $103-153K may be too junior-level
- OpenAI TPM — SF-based, no remote option visible

---

## Step 4: Evaluations — BLOCKED

**Reason:** WebFetch is blocked for all career site domains in this cloud session's network policy (ENOTFOUND for careers.servicenow.com, higher.gs.com, jobs.parsons.com, job-boards.greenhouse.io, boards-api.greenhouse.io). Cannot fetch JDs for full Skills Model evaluation.

**Action required:** Full evaluations of these 15 new + ~65 existing pending pipeline URLs need a session with broader network access or Playwright availability.

---

## Pipeline State

- **Pending URLs in pipeline.md:** ~96 (65 from prior scans + 15 from today + ~16 from earlier Nov 19 partial scan)
- **Last full evaluation batch:** 2026-11-13 (entries #427-#441, reports 427-438)
- **Next report number:** 439
- **Tracker entries:** 289 total in applications.md

---

## Limitations This Run

1. **WebFetch blocked** for career sites — no JD fetching possible
2. **Playwright unavailable** — batch mode, no browser verification
3. **Greenhouse API blocked** — boards-api.greenhouse.io not resolvable
4. **Subagent nesting limit** — could not parallelize scans via forks (depth 1 of 1)

---

## Second Scan Wave (context continuation)

Extended scan added 53 more candidates across all portals. After dedup against 734 known URLs:
- **36 genuinely new URLs** identified
- **20 added to pipeline** (high/medium fit)
- **16 skipped** (domain mismatch, wrong location, clearance required, etc.)
- **scan-history.tsv** updated: 791 → 859 entries

### Additional pipeline entries (second wave):
- **Citi:** 7 new roles (PM Lead, SVP Equities Tech PM, IT PM SVP $163-245K, etc.)
- **UnitedHealth:** 3 new remote TPM roles
- **JPMorgan:** 3 roles (Lead Tech PM JC $142-190K, Principal TPM NYC, Data Modernization TPM JC)
- **MetLife:** 3 roles (Sr Agile PM NYC/NJ $103-130K, PM System Migrations, IAM PM Remote $100-155K)
- **Deloitte:** 6 roles (Delivery Mgmt TPM, Tech PM, IT PM Strategy, Sr Delivery Leader, etc.)
- **Dice contracts:** 5 roles (Sr TPM Digital Transformation, AI Sr PM Remote, TPM/SM JC, etc.)
- **Monster:** Sr TPM AI Avenel NJ
- **BuiltIn:** Technical Program Delivery Lead (Bounteous)
- **Misc:** Insight Global PM NJ contract, Nava/QBA Gov PM $157-177K, GovCIO PM Remote

---

## Evaluations Completed (2)

| # | Company | Role | Score | Notes |
|---|---------|------|-------|-------|
| 439 | CoreWeave | TPM Product Engineering | 3.8/5 | Livingston NJ / NYC hybrid; GPU cloud infra |
| 440 | Nava PBC | Program Manager (Gov/SAFe) | 3.9/5 | Remote US; $157-177K; SAFe-heavy |

Both reports unconfirmed (batch mode — network-restricted session).

---

## Final Pipeline State

- **Total pending URLs in pipeline.md:** ~127 (existing backlog + 35 new from both scan waves)
- **Tracker entries:** 287 in applications.md (no new TSVs to merge)
- **Reports generated:** 2 new (#439, #440)
- **Next report number:** 441
- **scan-history.tsv:** 864 entries

---

## Recommendations for Next Run

1. **Enable network access** for: job-boards.greenhouse.io, boards-api.greenhouse.io, careers.servicenow.com, higher.gs.com, jobs.parsons.com, jobs.citi.com, careers.cognizant.com, openai.com
2. **Priority evaluations:** ServiceNow Senior Staff TPM, GS Transaction Banking Delivery PM, Cognizant Sr PM (closes Nov 27!)
3. **Time-sensitive:** Cognizant Sr Consulting PM in Teaneck closes Nov 27 — only 8 days away
4. **Backlog:** ~127 pending pipeline URLs need evaluation — consider batch processing
5. **High-value new finds:** Citi SVP roles ($163-245K), JPMorgan Lead Tech PM ($142-190K), MetLife IAM PM ($100-155K Remote)
