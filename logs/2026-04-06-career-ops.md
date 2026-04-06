### Session: career-ops daily run

- **Date:** 2026-04-06
- **Model:** claude-opus-4-6
- **Mode:** Automated daily pipeline (no user interaction during run)

- **Objective:**
  Execute full job scan, evaluation, and application preparation pipeline per CLAUDE.md instructions.

- **Execution Summary:**
  - Portals scanned: 12 search queries + 30+ tracked company career pages (42+ total searches)
  - New jobs found: 10 candidate URLs added to pipeline
  - Jobs evaluated: 5 (reports #002–#006)
  - Applications prepared: 0 (no auto-submit; materials staged for review)
  - Primary roles: 3 (Trilogy Federal SM 4.0, Leidos SM NJ 3.5, Arlo Solutions Sr SM 3.3)
  - Secondary roles: 2 (Distyl AI DM 3.4, Kasisto TPM 3.0)
  - Rejected: 5 (Leidos AC clearance, Kandji 2.8, accesso 2.7, EnergyHub 2.9, New Era 2.6)

- **Key Decisions:**
  - Rejected Leidos Agile Coach (Remote, 5/7 CS engaged) solely due to Secret clearance requirement not present in candidate profile. This was the strongest-fit JD of the batch but clearance is a hard blocker.
  - Scored Trilogy Federal SM at 4.0/5 despite no direct federal/VA experience, because regulated delivery at Sanofi (pharma R&D, FISMA-equivalent governance) and Verisk (compliance infrastructure) translate credibly to VA FISMA/NIST/HIPAA environment.
  - Rejected Kandji despite "Scrum Master (Agile Coach)" title match because the role engages only 1-2 Core Strengths and lacks enterprise complexity. Tier 4 de-emphasis rule was considered but not applied since the role isn't primarily coaching — it's just small-scope.
  - Did not generate tailored resumes (PDFs) in this run. WebFetch returned 403 on all 10 job board URLs, limiting JD detail available for precise resume tailoring. Resume generation deferred to next run with more JD context.

- **What Worked:**
  - Parallel WebSearch batching: ran 10 searches simultaneously per batch, completing 42+ searches in 4 batches. Total scan phase took ~4 tool rounds.
  - Core Strength Engagement Test applied consistently across all 10 roles before scoring. CS-2 absence penalty (-0.3) and CS-6 explicit requirement bonus (+0.2) applied correctly.
  - Merge-tracker + verify-pipeline scripts ran clean on first attempt (0 errors, 0 warnings).
  - Scan-history.tsv deduplication framework is in place for future runs (was empty, now has 10 entries).

- **What Failed:**
  - WebFetch returned HTTP 403 on all 10 job board URLs (Greenhouse, Lever, Ashby, Leidos careers). This forced fallback to WebSearch for JD extraction, which yields incomplete/summarized descriptions.
  - Greenhouse boards-api.greenhouse.io/v1/boards/{company}/jobs/{id} endpoints also returned 403 (4 attempts). These APIs were previously public — may now require auth or have rate limiting.
  - The merge-tracker script mapped "Evaluated" status to "Evaluada" (Spanish alias). This is technically valid per states.yml but inconsistent with the English-language CLAUDE.md instructions. The normalize script did not change it back because "Evaluada" is a canonical alias.
  - Existing entry #1 (System One) was not re-sorted to maintain sequential order in applications.md — it appears at the bottom after the 5 new entries.

- **Friction:**
  - JD retrieval is the primary bottleneck. Without Playwright (batch mode) and with WebFetch blocked, JD quality depends entirely on what WebSearch snippets and third-party aggregator sites (Glassdoor, Lensa, Himalayas, Talentify) surface. This introduces risk of evaluating against incomplete or outdated JD summaries.
  - The portals.yml has 30+ tracked companies, but site-specific searches (site:careers.jpmorgan.com, site:jobs.jnj.com, etc.) returned 0 results for ~40% of companies. These career portals use dynamic JS rendering that search engines don't index well. The scan coverage for these companies is effectively zero.
  - Secret clearance requirement for Leidos Agile Coach was only discovered during JD retrieval. No way to pre-filter for clearance requirements during the portal scan phase.

- **Missing Context:**
  - Candidate's education details (degree type/field) — the Leidos SM NJ role requires "Bachelor's in Computer Science." cv.md says "Details available upon request." This gap affects scoring accuracy for roles with strict degree requirements.
  - Candidate's clearance status — would allow pre-filtering clearance-required roles during scan.
  - Candidate's willingness to commute to Egg Harbor City NJ (120 miles from NYC Metro) or DC area — affects viability of Leidos NJ and Arlo Solutions roles.
  - accesso and Kandji full JDs — WebFetch failures meant these were evaluated on generic market data, not actual JD content.

- **What To Do Differently:**
  - Add a clearance_status field to config/profile.yml (e.g., "None", "Public Trust", "Secret") and use it to pre-filter during scan phase. This would have saved the Leidos AC evaluation cycle.
  - For companies where site: searches consistently return 0 results (JPMorgan, J&J, Goldman Sachs, MetLife, Booz Allen, AECOM), switch scan_method from websearch to direct career page fetch or remove from enabled portals to avoid wasted search quota.
  - Try Google cache URLs (cache:url) or third-party JD aggregators (Himalayas, Lensa, Talentify) as WebFetch fallback before falling back to WebSearch snippets.
  - Request education details from candidate to resolve the CS degree gap question that affects multiple gov/defense contractor roles.

- **Reusable Insight:**
  - The 403-everywhere pattern for job board direct fetching appears to be a new industry-wide anti-scraping measure (Greenhouse, Lever, Ashby, Leidos all blocked). Future pipeline runs should assume WebFetch will fail for job boards and build the evaluation workflow around WebSearch snippet extraction + third-party aggregator sites as the primary JD source. This is a structural constraint, not a transient error.
  - Government contractor roles (Leidos, Trilogy Federal, SAIC, Booz Allen) consistently surface SAFe + Scrum Master + PMP requirements that align strongly with the candidate's certification stack. These should be weighted higher in scan prioritization — the cert-to-requirement match rate is higher than commercial enterprise roles.
  - The "Evaluada" alias issue in merge-tracker suggests the script was originally built for Spanish-language status labels. If the system is being used in English, the merge script's default fallback should be updated from "Evaluada" to "Evaluated" to avoid confusion.
