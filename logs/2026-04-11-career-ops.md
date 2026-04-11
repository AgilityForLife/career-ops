# Session Log: 2026-04-11

### Session: career-ops daily run

- Objective:
  Execute job scan, evaluation, and application prep pipeline

- Execution Summary:
  - Portals scanned: 12 search queries + 3 tracked company APIs
  - New jobs found: 28+ unique URLs (after dedup against 10 prior entries)
  - Jobs evaluated: 8 full evaluations with reports
  - Jobs rejected: 4 (location, timezone, junior scope, inactive posting)
  - Jobs noted for future: 6 (Slide Insurance, Ardent, itD Tech, Bixal, HighlightTA, Dev Technology)
  - Applications prepared: 0 (evaluation-only mode — user review pending)
  - Primary roles: 4 (Nava 4.0, HealthVerity 3.8, Veda Data 3.6, Capital Rx 3.2)
  - Secondary roles: 4 (Calendly 4.5, CyberMedia 3.9, Cognite 3.8, Accela 3.7)
  - Rejected: 4 (Vonage UK location, Apply Digital PT timezone, Rithum junior, Agile Six inactive)

- Key Decisions:
  - Used WebSearch fallback for JD extraction when WebFetch and Greenhouse APIs returned 403
  - Classified Nava as PRIMARY despite gov tech being new domain — NJ location match is high strategic value
  - Scored Calendly at 4.5/5 (highest this session) — 7/7 Core Strength engagement, cloud-native + compliance
  - Scored Capital Rx at 3.2/5 (lowest evaluated) — thin JD limited assessment quality
  - Rejected Apply Digital at 3.0/5 despite title match — PT timezone requirement is a dealbreaker for ET-based candidate

- What Worked:
  - Parallel web searches across 12 queries yielded strong results in a single pass
  - Skills-model.md Core Strength Engagement Test provided consistent scoring framework
  - Scan-history dedup effectively filtered all 10 prior URLs
  - Pipeline verification passed clean (0 errors, 0 warnings) after status normalization

- What Failed:
  - All Greenhouse API endpoints returned 403 (boards-api.greenhouse.io)
  - WebFetch blocked by Lever, Greenhouse, and Ashby job board pages (403)
  - Normalize script uses Spanish canonical statuses (Evaluada/Aplicado) — initially wrote English "Evaluated" causing 8 verify errors
  - JPMorgan careers site search returned 0 results (likely dynamic content not indexed)

- Friction:
  - Job board 403 blocks required WebSearch fallback — JD extraction less complete than direct fetch
  - Spanish vs English status normalization required extra fix cycle
  - Some JDs (Capital Rx, Accela) were thin on details, limiting scoring confidence

- Missing Context:
  - Salary data for Nava, Veda Data, CyberMedia, Cognite — not disclosed in JDs
  - Cognite office location and remote policy unclear
  - Capital Rx Scrum Master scope and team size unknown
  - Whether candidate prefers Agile/SM roles or TPM/delivery roles for prioritization

- What To Do Differently:
  - Pre-populate a WebSearch template for "site:X job title requirements qualifications salary" to get maximum JD detail when WebFetch fails
  - Use Spanish canonical statuses from the start (the scripts expect Evaluada, not Evaluated)
  - Add salary research step for roles that don't disclose comp
  - Consider adding cached JD storage (save to jds/ directory) for future reference

- Reusable Insight:
  - When job board APIs and WebFetch both fail, WebSearch with "{company} {title} job description requirements qualifications" reliably extracts 70-80% of JD content from cached search results and third-party job aggregators

- Top Mistake:
  - Using English "Evaluated" status when pipeline scripts expect Spanish "Evaluada" — caused 8 verify errors requiring an extra fix cycle

- Top Improvement Opportunity:
  - Automating JD caching: when a JD is extracted via WebSearch, save it to jds/{company}-{role}.md for reliable future reference and re-evaluation

---

## Score Distribution

| Score | Count | Roles |
|-------|-------|-------|
| 4.5 | 1 | Calendly Sr. TPM |
| 4.0 | 1 | Nava Sr. PM |
| 3.8-3.9 | 3 | HealthVerity, Cognite, CyberMedia |
| 3.6-3.7 | 2 | Veda Data, Accela |
| 3.2 | 1 | Capital Rx |

## Priority Actions (for user review)
1. **Calendly (4.5/5)** — Apply immediately. Best fit this session. 7/7 CS match.
2. **Nava (4.0/5)** — Apply promptly. NJ location match is rare and strategic.
3. **CyberMedia (3.9/5)** — Strong secondary. Azure/ADO gap manageable.
4. **HealthVerity (3.8/5)** — Good primary SM role. NJ-eligible remote.
5. **Cognite (3.8/5)** — AI career growth path. Worth the investment.
6. **Accela (3.7/5)** — Decent secondary. Thin JD needs clarification.
7. **Veda Data (3.6/5)** — Solid SM role. Education req may be a factor.
8. **Capital Rx (3.2/5)** — Borderline. Apply only if interested in health tech PBM.
