# Pipeline — Pending URLs

Paste job URLs here to queue them for evaluation.
Format: one URL per line, optionally with a note after a space.

## Pending

<!-- Add URLs below, one per line. Example:
https://jobs.example.com/posting/123  Senior PM role - looks strong
local:jds/company-role-2026.md       Saved JD file
-->

## In Progress

<!-- URLs currently being evaluated -->

## Done

<!-- Processed 2026-09-22 (scan covering since last run 2026-09-21, headless launchd run, 1-day gap).
4 parallel scan agents covered all 12 portals.yml search_queries + all ~30 tracked_companies (IBM
through Parsons). Unusually rich yield despite the 1-day gap and near-daily-scan saturation: 61
genuinely new URLs surfaced, driven mostly by CoreWeave (a company not previously in the tracker —
GPU cloud infrastructure, 15 live PM/TPM reqs on one Greenhouse board, several NJ/NY-eligible with
strong comp) plus a good day for IBM/Amazon/Google/Cognizant/Parsons. Given the volume, applied an
explicit triage step before spending eval slots: of the 61 new URLs, 10 were confirmed deal-breakers
(onsite outside NJ/NY Metro, comp below floor) or undisclosed-employer aggregators (Jobgether x4) and
logged straight to scan-history.tsv without an eval slot, consistent with standing practice; a further
19 were logged as skipped_low_priority_* — same-recruiter recurring underpay pattern (itD Tech x4,
same issue as reports 079/080), clear domain mismatches (Amazon coding-heavy TPM II, Amazon ML-inference
Sequence Models, Deloitte SEO PM, Parsons Subcontract PM), or CoreWeave's 13 lowest-differentiation
reqs out of 15 (kept the 2 best CS-1/CS-3/CS-7 fits, noted the rest as evaluate-on-demand if those two
don't land — evaluating 15 near-identical infra-TPM postings at one company was judged poor use of
eval budget per CLAUDE.md's quality-over-volume guidance). Net 19 evaluated in 4 parallel batches
(reports 297-315). 1 further dedup catch at merge time: OpenAI Sr TPM Security (313) turned out to be
a same-title repost of existing entry #40 (2026-08-02) at a lower comp band ($130-180K vs $165.4-285K
original) — merge-tracker.mjs correctly kept the higher-scored existing entry and skipped adding a
duplicate row; flagged in report 313 so Erick doesn't double-apply to what may be the same req/team.
Salesforce TPM (302) was a similar case — same company+role as existing #97 (2026-09-09, 3.5/5) at a
lower score this pass, entry not duplicated. Amazon Principal TPM Sponsored Products & Brands (299)
triggered the recurring mandatory 5-day-RTO deal-breaker override (same pattern as reports 276, 286,
299) despite strong stated comp ($194.7-263.4K) — weak underlying CS-fit (1/7) made this an easy call
either way. Palantir Program Manager - Commercial Deployments (312) is notable as the first Palantir
req found on the *commercial* track with no clearance requirement at all (all prior Palantir evals
hit the gov-track clearance wall) — still scored below threshold (2.5/5) on thin CS-fit, but confirms
commercial-track Palantir postings are worth continued scanning. 7 of 19 scored 3.0+ and got tailored
resume PDFs — ALL HELD per the section 15 SUBMISSION GATE (still active, not removed this run);
nothing submitted. verify-pipeline.mjs flagged one pre-existing warning unrelated to this run (#108/
#109 Glean duplicate rows, predates 2026-09-22) — not fixed this run, noted for a future cleanup pass.
The 7 apply-eligible roles, all "Prepared, awaiting Erick's go":
https://careers.ibm.com/en_US/careers/JobDetail/Senior-Technical-Program-Manager-Confluent-Remote/118449  IBM | Senior Technical Program Manager - Confluent (3.8/5) [PRIMARY] - APPLY; CV generated; Remote US; IBM careers site is JS-rendered, JD reconstructed via aggregator mirrors + WebSearch, verify live before applying
https://careers.ibm.com/en_US/careers/JobDetail/Staff-Technical-Program-Manager-Confluent/127137  IBM | Staff Technical Program Manager - Confluent (3.6/5) [PRIMARY] - APPLY w/ caveats; CV generated; Hybrid incl. Armonk NY, $118-203K; exact req text unconfirmed (inferred from sibling Senior req), verify before applying
https://lensa.com/job-v1/ey/hoboken-nj/technical-project-manager/0a1508cbb0e22bdbe811edb8c8deac51  EY | Technical Project Manager - AI (3.8/5) - APPLY; CV generated; strongest fit of the run, Hoboken NJ $122.9-213.4K clears anchor; sourced via Lensa mirror, verify live on careers.ey.com before applying
https://job-boards.greenhouse.io/coreweave/jobs/4713653006  CoreWeave | Senior TPM - Fleet Delivery & Capacity Management (3.3/5) - APPLY w/ caveats; CV generated; $182-242K, CS-2 doesn't engage (GPU infra, not AWS/Snowflake named)
https://job-boards.greenhouse.io/coreweave/jobs/4698147006  CoreWeave | Senior TPM, Enterprise Security & IAM (3.4/5) - APPLY w/ caveats; CV generated; Livingston NJ $157-210K, best location fit of the CoreWeave set; gap: hands-on IAM tooling (Okta/Entra/SAML) not in cv.md
https://openai.com/careers/senior-technical-program-manager-security-us-remote/  OpenAI | Senior Technical Program Manager - Security (3.4/5) - APPLY WITH CAUTION; CV generated; may be same req/team as existing entry #40 (2026-08-02) at a lower comp band ($130-180K vs $165.4-285K) - check if original Ashby posting is still live before applying to avoid double-applying
https://jobs.parsons.com/jobs/project-manager-software-administration-gateway-hudson-tunnel-project-new-york-r-181367-jobs--information-technology--  Parsons | Project Manager - Software Administration - Gateway Hudson Tunnel Project (3.7/5) - APPLY; CV generated; NYC, IT/software-governance role (not construction-track), 5/7 CS engaged, $112.2-196.4K, Contract role matches C2C/1099 preference
The other 12 evaluated-and-rejected outcomes (scores 1.8-2.9) are fully detailed in applications.md
and reports/299-301+302-305+307+310-312+314. -->
https://www.amazon.jobs/en/jobs/10430391/principal-technical-program-manager-sponsored-products-and-brands  Amazon/AWS | Principal Technical Program Manager, Sponsored Products and Brands (1.8/5) [REJECTED] - DO NOT APPLY (hard-deal-breaker override: mandatory 5-day RTO; weak 1/7 CS-fit independent of override)
https://job-boards.greenhouse.io/twilio/jobs/8067440  Twilio | Senior Technical Program Manager, Services Tools & Diagnostics (1.8/5) [SKIP] - DO NOT APPLY (JD hard-requires 7+ yrs production software engineering, no evidence in cv.md)
https://job-boards.greenhouse.io/highwire/jobs/4374858009  Highwire | Director, Project Manager (1.9/5) [SKIP] - DO NOT APPLY (PR/marketing agency domain, zero overlap with enterprise tech/pharma/finance delivery background)
https://apply.deloitte.com/en_US/careers/JobDetail/Scrum-Master-Project-Delivery-Senior-Analyst/325977  Deloitte | Scrum Master - Project Delivery Senior Analyst (2.0/5) - DO NOT APPLY (Tier-4 ceremony-facilitation core function + Senior-Analyst downlevel; comp low end $73.1K below floor)
https://www.google.com/about/careers/applications/jobs/results/113210269915587270-senior-technical-program-manager/  Google | Senior Technical Program Manager, Google for Education (2.0/5) - DO NOT APPLY (people-manager-of-TPMs role, structural mismatch vs individual-delivery-owner track in cv.md)
https://jobs.parsons.com/jobs/deputy-project-manager-rail-and-transit-new-york-r-171951-jobs--project-program-management--  Parsons | Deputy Project Manager - Rail and Transit (2.3/5) [Discarded] - DO NOT APPLY (requires engineering/construction-management degree + field supervision, same civil-engineering gate as reports 124, 274)
https://careers.salesforce.com/en/jobs/jr315791/technical-program-manager/  Salesforce | Technical Program Manager (2.5/5) - DO NOT APPLY (JD wants Salesforce Platform/SDLC depth not in cv.md; duplicate of higher-scored existing entry #97)
https://jobs.lever.co/palantir/32579f9c-0088-40cb-bb0b-ed45a35bcb19  Palantir | Program Manager - Commercial Deployments (2.5/5) [Discarded] - DO NOT APPLY (thin CS-fit, only CS-1 engaged; "3+ yrs preferred" signals mid-level downlevel risk); notable as first clearance-free Palantir commercial-track req seen
https://www.google.com/about/careers/applications/jobs/results/127103962615554758-technical-program-manager-iii/  Google | Technical Program Manager III, Infrastructure Software Engineering, Core (2.7/5) - DO NOT APPLY (Google-internal platform, not AWS/Snowflake; below apply threshold)
https://careers.cognizant.com/uki-en/jobs/00065727971/delivery-pmo/  Cognizant | Delivery PMO (2.8/5) - DO NOT APPLY (below threshold; ATS blocked direct fetch, evaluated via WebSearch corroboration only)
https://www.evenbreak.com/job/1486099/senior-ai-technology-strategy-lead-technical-program-manager/?TrackID=10  JPMorgan Chase | Senior AI Technology Strategy - Lead Technical Program Manager (2.8/5) [SKIP] - DO NOT APPLY (strategy/advisory-focused JD, not technical delivery execution)
https://careers.cognizant.com/us-en/jobs/00069746511/senior-program-manager/  Cognizant | Senior Program Manager (2.9/5) - DO NOT APPLY (below threshold; Teaneck NJ $89-162.4K low end near floor; ATS blocked direct fetch)

<!-- Processed 2026-09-21 (scan covering since last run 2026-09-18, headless launchd run, 3-day gap).
4 parallel scan agents covered all 12 portals.yml search_queries + all 24 tracked_companies (IBM
through Parsons). As expected given near-daily scanning since April 2026, most raw results were
exact duplicates already in scan-history.tsv/applications.md. 19 genuinely new candidates surfaced;
7 were pre-filtered at scan stage without spending an eval slot (2 confirmed deal-breakers — Western
Magnetics TPM onsite-SF relocation, Metropolitan Commercial Bank title-filter false-positive/lending
role — plus 5 undisclosed-employer aggregator listings from ClearanceJobs/LinkedIn-ApTask/BuiltIn,
consistent with prior-run precedent of not spending eval budget on unverifiable employer identity).
12 were evaluated in 3 parallel batches (reports 285-296). 4 scored 3.0+ and got tailored resume
PDFs — Element Critical PMO Manager (3.9, strongest of the run — regulated/compliance-delivery fit),
Anthropic TPM Public Sector (3.5, $365-435K comp, one open question: unconfirmed US-citizenship
requirement), GovCIO Scrum Master VA Data Modernization (3.3, primary archetype fit, comp
unconfirmed), GHX Director Enterprise AI Enablement (3.2, hands-on AI/ML depth gap) — ALL HELD per
the section 15 SUBMISSION GATE (still active, not removed this run); nothing submitted. Notable:
Cytora Delivery Manager was UK-residency-only with no US eligibility path — deal-breaker REJECTED
regardless of CS-fit, first time this specific override (foreign-residency-required, not just
relocation) has appeared in this pipeline. Amazon Sr. TPM again triggered the recurring mandatory
5-day-RTO override (same pattern as reports 276, 286 this run). Two PMO-manager-as-people-manager
roles (Myriad360, PerfectServe) confirmed a now-recurring gap first flagged in report 031: cv.md
evidences cross-functional/influence-based leadership across 15-17 teams at Verisk, not direct
people-management of a PM team, which these JDs explicitly require. Data-quality note: WebFetch
failed to render the specific job posting (redirecting to board index pages instead) for roughly
half of this run's Greenhouse-hosted URLs; all were corroborated via WebSearch fallback per the
documented headless-mode exception and marked "unconfirmed (batch mode)" in their reports — worth
flagging if this Greenhouse rendering issue keeps recurring. The 4 apply-eligible roles, all
"Prepared, awaiting Erick's go":
https://job-boards.greenhouse.io/elementcritical/jobs/4684866005  Element Critical | PMO Manager (IT/Compliance) (3.9/5) [SECONDARY] - APPLY; CV generated; strong CS-3/CS-5/CS-7 regulated-delivery fit; comp and onsite/remote status unconfirmed for this specific req, verify before applying
https://job-boards.greenhouse.io/anthropic/jobs/5427834008  Anthropic | Technical Program Manager, Public Sector (3.5/5) [SECONDARY] - APPLY; CV generated; strong CS-1/CS-5/CS-7 fit, $365-435K comp, NYC hybrid-eligible; verify unconfirmed US-citizenship requirement before applying
https://www.clearancejobs.com/jobs/8989224/scrum-master  GovCIO | Scrum Master, VA Data Modernization (3.3/5) [PRIMARY] - APPLY; CV generated; Public Trust suitability only (not blocking active clearance); comp unconfirmed, verify before applying
https://job-boards.greenhouse.io/globalhealthcareexchangeinc/jobs/4711853005  GHX | Director, Enterprise AI Enablement & Execution (3.2/5) [SECONDARY] - APPLY w/ caveats; CV generated; remote FTE ~$150-214K; hands-on AI/ML depth gap and Tier-4 training/enablement overlap
The other 8 evaluated-and-rejected outcomes (scores 1.4-2.9) are fully detailed in applications.md
and reports/286-293+296-297. -->
https://jobs.ashbyhq.com/westmag/5af80aa8-0c4c-4088-95aa-10ae6d07aec0  Western Magnetics | Technical Program Manager (skipped) [REJECTED] - DO NOT APPLY (onsite South San Francisco hardware manufacturing; relocation deal-breaker + domain mismatch)
https://job-boards.greenhouse.io/metropolitancommercialbank/jobs/4697272006  Metropolitan Commercial Bank | AVP Portfolio Manager (C&I) (skipped) [REJECTED] - DO NOT APPLY (title-filter false positive; commercial lending portfolio role, zero delivery/PM relevance)
https://www.amazon.jobs/en/jobs/2580132/sr-technical-program-manager-lead-management-services  Amazon/AWS | Sr. Technical Program Manager, Lead Management Services (1.4/5) [REJECTED] - DO NOT APPLY (hard-deal-breaker override: mandatory 5-day RTO; weak 1/7 CS-fit)
https://job-boards.greenhouse.io/myriad360/jobs/8628749002  Myriad360 | PMO Manager (2.5/5) [REJECTED] - DO NOT APPLY (recurring direct-PM-team people-management gap, see report 031)
https://job-boards.greenhouse.io/perfectserve/jobs/5977945004  PerfectServe | Manager, Project Management Office (2.1/5) [REJECTED] - DO NOT APPLY (weakest CS-fit in batch, no people-mgmt or pre-sales evidence)
https://job-boards.greenhouse.io/adswerveinc/jobs/5117947007  Adswerve | PMO Manager (2.9/5) [REJECTED] - DO NOT APPLY (client-services consultancy PMO, weak CS-fit despite decent comp)
https://job-boards.greenhouse.io/jencapinc/jobs/4365961007  Jencap | Senior Project Manager, PMO (2.4/5) [REJECTED] - DO NOT APPLY (generalist insurance-MGA PMO, no cloud/tech-delivery engagement)
https://job-boards.greenhouse.io/unrealsnacks/jobs/5364645008  Unreal Snacks | Manager, PMO & Continuous Improvement (2.2/5) [REJECTED] - DO NOT APPLY (deal-breaker: comp $82-98K below $100K FTE floor)
https://jobs.ashbyhq.com/cytora.com/fc1365f8-ff84-4795-ae2d-a1bb44675eae  Cytora | Delivery Manager, German Speaker (1.8/5) [REJECTED] - DO NOT APPLY (UK-residency-only, no US eligibility/sponsorship path)
https://job-boards.greenhouse.io/anthropic/jobs/5389773008  Anthropic | Lead, Data Center Security Delivery (Construction to Operations) (1.6/5) [REJECTED] - DO NOT APPLY (physical-security/construction domain, zero CS overlap with software/cloud evidence base)

<!-- Processed 2026-09-18 (scan covering since last run 2026-09-17, headless launchd run, 1-day gap).
4 parallel scan agents covered all 12 portals.yml search_queries + all 16 remaining tracked_companies
(IBM through Parsons). Heavy saturation vs yesterday's scan — most raw results were exact duplicates
already in scan-history.tsv/applications.md; the queries-7-12 agent found zero new candidates at all.
10 genuinely new candidates were evaluated in 2 parallel batches (reports 275-284); 22 others were
pre-filtered at scan stage for confirmed deal-breakers (location/relocation) or low-priority signals
(weak aggregator sourcing + junior titling, Tier-4 core function, unconfirmed employer) and logged
directly to scan-history.tsv without spending an eval slot, consistent with prior-run precedent.
Notable data-quality finding: 4 of the 10 evaluated candidates turned out to be dead/unconfirmable
before scoring even mattered — both AECOM/BuiltIn listings were explicitly marked "removed" on the
aggregator page itself (Dec 2025), the JPMorgan TheMuse-mirrored URL 404'd, and the J&J posting was
confirmed closed — all 4 scored low regardless, but this confirms aggregator-mirror-sourced leads
(BuiltIn, TheMuse, CareerBuilder) have a materially higher dead/stale rate than direct-ATS leads and
may not be worth the eval budget going forward. Amazon Senior TPM (276) is a hard-deal-breaker
override worth noting: CS-fit was strong (~3.6-3.8 pre-override, comp $148.7K-$201.2K excellent) but
Seattle relocation + Amazon's mandatory on-site policy forced REJECTED — same override pattern as
Rackner/Amplify in the 2026-09-17 run. 3 of 10 scored 3.0+ and got tailored resume PDFs — ALL HELD
per the section 15 SUBMISSION GATE (still active, not removed this run); nothing submitted. The 3
apply-eligible roles, all "Prepared, awaiting Erick's go":
https://apply.deloitte.com/careers/JobDetail?jobId=50665  Deloitte | Senior Project Manager - ITS PMO (3.3/5) [SECONDARY] - APPLY w/ caveats; CV generated; comp/location unconfirmed, verify before applying
https://www.themuse.com/jobs/accenture/si-delivery-lead-capital-marketsbanking  Accenture | SI Delivery Lead, Capital Markets/Banking (3.8/5) [SECONDARY] - APPLY; CV generated; strong CS-1/2/5/7 fit; aggregator-sourced (TheMuse), not corroborated on accenture.com — verify live before applying
https://jobs.citi.com/job/jersey-city/technical-ai-delivery-manager-senior-vice-president/287/99357282288  Citi | Technical AI Delivery Manager, SVP (3.8/5) [SECONDARY] - APPLY; CV generated; live/confirmed JD, strong comp $176.7K-$265K, Jersey City NJ; gap: JD hard-requires hands-on Python coding not evidenced in cv.md
The other 7 REJECTED outcomes (scores 1.3-2.6) are fully detailed in applications.md and
reports/275-277 + 281-285. -->
https://jobs.lever.co/cgsfederal/15b0279d-e7e7-44a2-a24f-61acd27a23e0  Agile Coach - CGS (1.9/5) [REJECTED] - DO NOT APPLY (Tier-4 de-emphasis cap, comp straddles/undercuts $100K floor)
https://www.amazon.jobs/en/jobs/1456243/senior-technical-program-manager  Amazon/AWS | Senior Technical Program Manager (1.5/5) [REJECTED] - DO NOT APPLY (hard-deal-breaker override: Seattle relocation + mandatory on-site; CS-fit was strong pre-override)
https://www.careerbuilder.com/job-details/technical-program-manager-dcde-central-operations-partner-programs-ny--14a46e54-1a6d-4d85-8738-862e81b5ce36  Google | TPM, DCDE Central Operations, Partner Programs (2.0/5) [REJECTED] - DO NOT APPLY (data-center construction/facilities domain, not cloud/software delivery)
https://jobs.jnj.com/en/jobs/2306110110w/r-d-project-manager-vision/  Johnson & Johnson | R&D Project Manager - Vision (1.8/5) [REJECTED] - DO NOT APPLY (posting confirmed closed; medical-device R&D domain mismatch even if open)
https://builtin.com/job/construction-resident-engineer-project-manager/7348892  AECOM | Construction Resident Engineer/Project Manager (1.3/5) [REJECTED] - DO NOT APPLY (listing marked removed Dec 2025; requires Civil Engineering degree)
https://builtin.com/job/construction-project-senior-manager/7323932  AECOM | Construction Project Senior Manager (1.8/5) [REJECTED] - DO NOT APPLY (listing marked removed Dec 2025; requires transit/transportation experience not in cv.md)
https://www.themuse.com/jobs/jpmorganchase/lead-technical-program-manager-scrum-master  JPMorgan Chase | Lead Technical Program Manager - Scrum Master (2.6/5) [REJECTED] - DO NOT APPLY (URL 404'd, could not confirm posting exists; scored conservatively on title alone)

<!-- Processed 2026-09-17 (scan covering since last run 2026-09-11, headless launchd run, 6 days dark).
4 parallel scan agents covered all 12 portals.yml search_queries + all 24 tracked_companies (1 agent —
queries 1-6 — needed 2 retries after transient infra failures: a computer-sleep interruption, then a
stalled/no-progress run, before succeeding on the 3rd launch; no data lost, just delay). 34 raw
candidates surfaced after title-filter + scan-history dedup. 15 were excluded at scan stage for
confirmed deal-breaker violations (on-site/hybrid roles requiring relocation outside NJ/NY Metro, or
non-US locations: Citi x8 - Tampa/Pune/Mumbai/Bogota/Chennai/Irving TX/Mississauga/O'Fallon MO; Booz
Allen Arlington VA; Leidos Odenton MD; MetLife Cary NC x2; UHG Hyderabad; Palantir UK) — logged
directly to scan-history.tsv as skipped_location_* rather than spending an eval slot, consistent with
prior-run precedent. Remaining 19 evaluated in 4 parallel batches (reports 256-274): 1 deduped into an
existing tracker row mid-evaluation (GitLab, merged into pre-existing #84) rather than creating a
duplicate. 3 scored 3.0+ and got tailored resume PDFs — Toast IT Delivery Manager (3.7, strong), UHG
Principal Tech Project/Program Manager (3.6), UHG Senior TPM Client Billing & Pharmacy Payments (3.0,
low-confidence, JD inaccessible - recommend re-verify before submitting) — ALL HELD per the section 15
SUBMISSION GATE (still active, not removed this run); nothing submitted. Notable: Rackner TPM (Federal
Health) scored a strong 4.0 on CS-fit alone but was overridden to REJECTED by the active-Secret-
clearance hard deal-breaker (candidate holds none) - override logic worked as designed. Amplify PM
(Contractor) similarly deal-breaker-overridden on confirmed $45-50/hr, below the $60/hr C2C floor.
Confirmed a recurring data-quality issue: UnitedHealth Group's careers portal 404'd on direct posting
URLs for the third consecutive scan (2026-09-07, -11, -17) - worth a portals.yml fix, not re-discovering
each run. Also corrected a stale contradiction in config/skills-model.md's RESUME GENERATION RULES
(still said "open with CS-1+CS-2", superseded by Erick's 2026-08-31 ruling to lead with adoption/
rollout/implementation) - the vault's Positioning-Decision-Rule.md flagged this exact edit as required
and not yet applied; applied it here so this run's resumes followed the correct approved rule. The 3
apply-eligible roles, all "Prepared, awaiting Erick's go":
https://boards.greenhouse.io/toast/jobs/7851279  Toast | IT Delivery Manager (3.7/5) [SECONDARY-strong] - APPLY; CV generated; confirm comp zone (Zone A $111-178K clears anchor, Zone C low end $87K below floor)
https://careers.unitedhealthgroup.com/job/boston/principal-tech-project-program-manager-remote-or-hybrid-in-mn-or-dc/34088/94978224816  UnitedHealth Group | Principal Tech Project/Program Manager (3.6/5) [SECONDARY] - APPLY; CV generated; primary JD 404'd, sourced via aggregation
https://careers.unitedhealthgroup.com/job/eden-prairie/senior-technical-program-manager-client-billing-and-pharmacy-payments/34088/94785175280  UnitedHealth Group | Senior TPM - Client Billing & Pharmacy Payments (3.0/5) [SECONDARY, low-confidence] - APPLY WITH CAVEAT; CV generated; re-verify live JD before submitting
The other 16 non-apply-eligible outcomes (rejected, scores 1.8-2.7, including 2 hard-deal-breaker
overrides at higher CS-fit) are fully detailed in applications.md and reports/256-274. -->

<!-- Processed 2026-09-09 (scan covering since last run 2026-09-07, headless launchd run). 4 parallel
scan agents covered all 12 portals.yml search_queries + all 24 tracked_companies. 45 candidates
surfaced; 5 skipped without a report (3 Jobgether aggregator listings + 1 Atrium Staffing agency
listing, all undisclosed-employer; 1 10x Team freelance gig, not a role-fit) — logged directly to
scan-history.tsv as skipped_aggregator_employer_undisclosed / skipped_gig_not_role_fit. Remaining 40
evaluated in 4 parallel batches (reports 085-124): 1 was a duplicate of an already-applied Leidos req
(101, discarded) and 1 was a near-duplicate of an already-rejected Palantir US-Gov req (119, merge
skipped as duplicate of tracker row #73) — net 38 genuinely new scored evaluations. 12 scored 3.0+ and
got tailored resume PDFs; ALL HELD per the section 15 SUBMISSION GATE (still active, not removed this
run) — nothing submitted. Two real J&J postings (110, 111) turned out to be stale 2023-dated listings
still surfacing in search results (404 on fetch) — flagged for portals.yml data-quality but not fixed
this run. Fixed a real latent bug in merge-tracker.mjs: its status-alias table only recognized Spanish
canonical terms (Evaluada/Descartado/etc.) plus a handful of English ones, but templates/states.yml
(which CLAUDE.md instructs batch workers to write directly) is English — "Discarded", "Evaluated",
"Rejected", "Interview", "Offer" were falling through to the "non-canonical → default Evaluada"
branch, silently mislabeling e.g. two closed/removed AECOM reqs as "Evaluada" instead of "Descartado"
in applications.md. One instance was already caught and hand-patched by the E4 batch; the alias table
itself was fixed here so it doesn't recur on every future run. The 12 apply-eligible roles, all
"Prepared, awaiting Erick's go":
https://boards.greenhouse.io/twilio/jobs/4298811  Twilio | Sr. Manager, Agile Program Management (3.0/5) [SECONDARY] - APPLY w/ caveats; CV generated
https://myjobsny.usnlx.com/trenton-nj/program-manager-remote/70AA5DFF0B52400FB02E9740CC4A4764/job/  GovCIO | Program Manager (Remote) (3.6/5) [PRIMARY] - APPLY; CV generated; Public Trust suitability flagged (Section 15)
https://careers.salesforce.com/en/jobs/jr333198/technical-program-manager/  Salesforce | Technical Program Manager (3.5/5) [PRIMARY] - APPLY; CV generated
https://www.amazon.jobs/en/jobs/10453167/sr-technical-program-manager-ww-tech-partners-solutions-architecture  Amazon/AWS | Sr. TPM, WW Tech Partners Solutions Architecture (3.6/5) [SECONDARY] - APPLY w/ caveats; CV generated; Jersey City NJ option
https://careers.cognizant.com/us-en/jobs/00070033171/itot-delivery-manager/  Cognizant | IT/OT Delivery Manager (3.5/5) [SECONDARY] - APPLY w/ caveats; CV generated; Morris Plains NJ
https://www.careerbuilder.com/job-details/lead-technical-program-manager-new-york-ny--cc627337-c07b-42ab-bc24-d2adb8c677a7  JPMorgan Chase | Lead Technical Program Manager (3.4/5) [SECONDARY] - APPLY w/ caveats; CV generated; mirror listing unconfirmed live
https://builtin.com/job/embedded-finance-solutions-lead-technical-program-manager/3300033  JPMorgan Chase | Embedded Finance & Solutions Lead TPM (3.6/5) [PRIMARY] - APPLY w/ caveats; CV generated; mirror listing unconfirmed live
https://careers.unitedhealthgroup.com/job/16606782/technical-project-manager-remote/  UnitedHealth Group | Technical Project Manager (3.1/5) [SECONDARY] - APPLY w/ caveats; CV generated
https://careers.unitedhealthgroup.com/job/minnetonka/agile-practitioner-4-remote/34088/94311763456  UnitedHealth Group | Agile Practitioner 4 (3.8/5) [PRIMARY] - APPLY; CV generated; best-fit of this run
https://jobs.lever.co/palantir/bd16f7ad-3bee-48fd-9902-b3ee9698b608  Palantir | TPM - Defense (3.1/5) [SECONDARY] - APPLY w/ caveats; CV generated; clearance-eligibility = Section 15 STOP
https://jobs.lever.co/palantir/119ff141-1fa7-4466-a154-da57cf17bd52  Palantir | TPM - Autonomous Systems C2 (3.3/5) [SECONDARY] - APPLY w/ caveats; CV generated; NY hybrid; clearance-eligibility = Section 15 STOP; req ID mismatch flagged
https://jobs.parsons.com/jobs/senior-it-project-manager-remote-virtual-r-175102-jobs--project-program-management--  Parsons | Senior IT Project Manager (Remote) (3.6/5) [PRIMARY] - APPLY; CV generated; best fit of the AECOM/WSP/Parsons group
The other 28 non-apply-eligible outcomes (rejected/discarded, scores 1.0-2.8) are fully detailed in
reports 085-124 and data/scan-history.tsv; not repeated here for space. -->

<!-- Processed 2026-09-07 (scan covering since last run 2026-08-11). 36 candidates surfaced by
this run's scan; 3 turned out to already be known (Airtable already evaluated as report 052 on
2026-08-11 — exact same URL, this run's local scan-history.tsv was stale before a mid-run reset
onto origin/main surfaced the gap; Roboyo and Edgesource were already logged 2026-08-11 as
skipped_backlog, so re-evaluating them here added real information rather than duplicating it).
1 further duplicate excluded (Techtorch L2C, same URL as already-evaluated report 034, backfilled
into scan-history instead of re-evaluated). 2 ClearanceJobs aggregator listings skipped
(undisclosed employer). Net: 32 new evaluations (reports 053-084). 21 of those turned out
closed/removed on ATS-API verification since the search-index snapshot was taken; 5 scored 3.0+
and got tailored resumes (all held per section 15 SUBMISSION GATE — not submitted this run).
Fixed two real bugs in this run: merge-tracker.mjs and dedup-tracker.mjs both lacked
"scrum"/"master"/"agile"/"coach" in their generic-word stopword lists, causing distinct postings
at the same company (Leidos, Palantir, GitLab) to silently collapse into one tracker row. Also
fixed a markdown-table corruption from an unescaped "|" in a job title (Black Canyon Consulting
posting). Also flagged and did NOT apply an uncommitted, unverified edit to
config/skills-model.md that tried to override the CLAUDE.md POSITIONING LOCK. -->
https://job-boards.greenhouse.io/neweratech/jobs/8659526002  New Era Technology | Technical Project Manager - GTI/RES (2.4/5) [REJECTED] - DO NOT APPLY (1/7 CS engaged, onsite client-site MSP role)
https://jobs.lever.co/nava/6f5acea0-0a70-4bd3-9962-ca7470907b8c  Nava | Sr. Project Manager - DISCARDED (posting closed/removed, verified 2026-09-07)
https://jobs.lever.co/skydance/88b76c6f-5bb6-41fc-9840-876024a7eb00  Skydance | Senior Core Tech Project Manager - DISCARDED (posting closed/removed, verified 2026-09-07)
https://jobs.lever.co/insiderone/02c7af40-a326-4d2f-97e4-89cb2ebc4edb  Insider One | Scrum Master (Remote) - DISCARDED (posting closed/removed, verified 2026-09-07)
https://jobs.lever.co/rgi/f3e864d1-a61d-4a00-a5b4-469819a37537  Reinventing Geospatial (RGi) | Senior Release Train Engineer (1.8/5) [REJECTED] - DO NOT APPLY (best skills match in batch but hard-gated by required active TS/SCI clearance + polygraph)
https://jobs.lever.co/cyara/11648579-66f5-4188-aba1-02d54ef8fd76  Cyara | Sr. Scrum Master - DISCARDED (posting closed/removed, verified 2026-09-07)
https://job-boards.greenhouse.io/blackcanyonconsulting/jobs/5385417003  Black Canyon Consulting | Project Manager / Agile Scrum Master (3.1/5) [SECONDARY] - APPLY w/ caveats; CV generated; NIH/NCBI regulated-data fit, verify Bethesda MD remote eligibility
https://jobs.ashbyhq.com/edgesource%20corporation/9b60327e-04d2-4372-8802-cfa56f68a2c5  Edgesource Corporation | Scrum Master - DISCARDED (posting closed/removed, verified 2026-09-07; previously logged 2026-08-11 as skipped_backlog, now confirmed closed rather than just unevaluated)
https://jobs.ashbyhq.com/riveron/10ff98e3-2660-4c09-893a-fd035656272b/application  Riveron | Sr Associate - Scrum Master - DISCARDED (posting closed/removed, verified 2026-09-07)
https://jobs.ashbyhq.com/PAR%20Technology/cfd176ae-435e-4fa7-9375-9bd310405aa1  PAR Technology | Sr. Manager of Agile Delivery - DISCARDED (posting closed/removed, verified 2026-09-07)
https://boards.greenhouse.io/adswerveinc/jobs/4100070007  Adswerve, Inc | Project Manager 2 - DISCARDED (posting closed/removed, verified 2026-09-07)
https://boards.greenhouse.io/embed/job_app?token=4593823006  CoreWeave | Manager, Special Projects - DISCARDED (posting closed/removed, verified 2026-09-07; CoreWeave has other live TPM reqs worth a future look)
https://boards.greenhouse.io/trace3/jobs/5495832  Trace3 | Manager, Program Management (Remote) - DISCARDED (posting closed/removed, verified 2026-09-07)
https://www.dice.com/job-detail/f81f6c33-67e4-473b-97b7-419b6b7e0d89  Genesis10 (Dice) | Agile Scrum Master, Jersey City NJ on-site (2.1/5) [REJECTED] - DO NOT APPLY (Tier-4 ceremony-only scope, likely mandatory on-site, W2-agency not 1099)
https://job-boards.greenhouse.io/navapbc/jobs/4258144009  Nava PBC | 1099 Project Manager (Scrum Master) - DISCARDED (posting closed/removed, verified 2026-09-07; 1099 match lost)
https://jobs.merck.com/us/en/job/R398333/Associate-Director-Clinical-Supply-Project-Manager-Protocol-Hybrid  Merck | Associate Director, Clinical Supply PM - Protocol (Hybrid Rahway NJ) - DISCARDED (HTTP 410 Gone, verified 2026-09-07; strongest apparent fit of batch, worth re-searching Merck's live site)
https://careers.leidos.com/jobs/17564960-senior-it-project-manager  Leidos | Senior IT Project Manager (Remote US) (3.4/5) [SECONDARY] - APPLY w/ caveats; CV generated; exact Power BI/SAFe tool match but no CS-2 cloud/data hook, comp unlisted
https://careers.leidos.com/jobs/17613176-software-technical-manager-and-scrum-master  Leidos | Software Technical Manager & Scrum Master, FAA TFDM (Atlantic City NJ hybrid) (3.4/5) [SECONDARY] - PREPARE ONLY; CV generated; $107.9-195K; Public Trust suitability = Section 15 STOP; commute is a real stretch
https://jobs.lever.co/palantir/b5362bc1-8a07-44e2-9ddc-cb4236aa0f20  Palantir | Technical Program Manager - Security (3.6/5) [SECONDARY] - PREPARE ONLY; CV generated; NYC hybrid $93-160K; clearance-eligibility question = Section 15 STOP
https://jobs.lever.co/palantir/d3b2f261-3f10-4edc-8802-8b3b37977d0a  Palantir | Technical Program Manager - US Government (2.2/5) [REJECTED] - DO NOT APPLY (mandatory DC onsite + hard active Secret/TS-SCI requirement candidate does not hold); no resume
https://jobs.lever.co/palantir/4625019a-479a-41dd-bd5a-21847629772b  Palantir | GRC Program Manager (3.0/5) [SECONDARY] - PREPARE ONLY; CV generated; NYC hybrid $90-160K; borderline (GRC/audit domain stretch); clearance-eligibility = Section 15 STOP
https://jobs.ashbyhq.com/amplify/5c2110c9-58cb-4c9b-b7b0-bd6f2c89ca20  Amplify | Senior Project Manager - DISCARDED (posting closed/removed, verified 2026-09-07)
https://jobs.ashbyhq.com/amplify/f20fa73f-3647-4948-ade2-402653f70f78  Amplify | Senior Project Manager, Platform - DISCARDED (posting closed/removed, verified 2026-09-07)
https://jobs.lever.co/InfrastructureandCapitalProjects/f4d9b3a5-d3b7-4db3-80fd-61a271a23ca9  Accenture Infrastructure and Capital Projects | Senior Project Manager, ANS - DISCARDED (posting closed/removed, verified 2026-09-07)
https://job-boards.greenhouse.io/globalizationpartners/jobs/7733378003  G-P (Globalization Partners) | Sr. Principal PM, AI Transformation - DISCARDED (posting closed/removed, verified 2026-09-07; different req than report 028, which remains open)
https://job-boards.greenhouse.io/itd/jobs/4308941009  itD Tech | Technical Project Manager III, Speech/Voice AI - DISCARDED (posting closed/removed, verified 2026-09-07)
https://job-boards.greenhouse.io/itd/jobs/4393004009  itD Tech | Technical Program Manager, AI Research (1.5/5) [REJECTED] - DO NOT APPLY ($45-54/hr W2 below floor + Menlo Park onsite relocation + near-zero CS engagement despite title)
https://boards.greenhouse.io/seamlessai/jobs/4898399004  Seamless.AI | Program Manager, Business Operations - DISCARDED (posting closed/removed, verified 2026-09-07)
https://job-boards.greenhouse.io/gitlab/jobs/8548105002  GitLab | AI Transformation Owner, Marketing - DISCARDED (posting closed/removed, verified 2026-09-07)
https://job-boards.greenhouse.io/gitlab/jobs/8638232002  GitLab | AI Transformation Owner, CRO (1.8/5) [REJECTED] - DO NOT APPLY (strong comp $139-235K but sales-enablement/GTM role, 0/7 CS engaged despite AI title)
https://jobs.ashbyhq.com/pragmatike/8ee26633-d9e4-40e0-82fc-62576622029e  Pragmatike | Senior Project Manager, Industrial Digitalization - DISCARDED (posting closed/removed, verified 2026-09-07)

<!-- Evaluated URLs (moved here after processing) -->
https://jobs.lever.co/grantstreet/f2f619ce-61b9-4f82-b131-3ebc23a64f60  Senior Project/Program Manager - Grant Street Group (4.5/5) [PRIMARY] - APPLY; CV generated
https://job-boards.greenhouse.io/6sense/jobs/7984438  Sr TPM Platform & Data - 6sense (4.3/5) [PRIMARY] - APPLY; CV generated
https://job-boards.greenhouse.io/lts/jobs/4286870009  Scrum Master VA Health Modernization - LTS (3.7/5) [PRIMARY] - APPLY w/ caveats (verify comp + W2/citizenship); CV generated
https://job-boards.greenhouse.io/quanata/jobs/5994939004  Technical Program Manager II - Quanata (3.6/5) [SECONDARY] - DO NOT APPLY (hard 5+yr SWE-product-dev gap); CV generated
https://jobs.lever.co/compassx/f30596ec-bdbc-46f4-8d15-acc3871c2600  Scrum Master & Agile Coach Pharma - CompassX (3.8/5) [PRIMARY] - APPLY; CV generated
https://job-boards.greenhouse.io/realchemistry/jobs/5276933008  Technical Delivery Manager 21GRAMS - Real Chemistry (2.7/5) [SECONDARY] - DO NOT APPLY (below floor)
https://jobs.lever.co/TrilogyFederal/002b1cb9-e968-4200-a2b1-bb0c8208f372  Scrum Master - Trilogy Federal (4.0/5) [PRIMARY]
https://careers.leidos.com/jobs/17492470-scrum-master  Scrum Master - Leidos NJ (3.5/5) [PRIMARY]
https://jobs.ashbyhq.com/Distyl/5370b67d-3d1c-4f9e-843c-0bf1eb0b71e5  Delivery Manager Enterprise AI - Distyl AI (3.4/5) [SECONDARY]
https://job-boards.greenhouse.io/arlosolutionsllc/jobs/5031911007  Senior Scrum Master - Arlo Solutions (3.3/5) [PRIMARY]
https://job-boards.greenhouse.io/kasisto/jobs/8462035002  TPM Agentic AI - Kasisto (3.0/5) [SECONDARY]
https://careers.leidos.com/jobs/17568628-agile-coach  Agile Coach - Leidos (REJECTED: Secret clearance required)
https://jobs.lever.co/kandji/f48ff45a-a1fd-41f2-9fb7-dbeae507451a  SM/Agile Coach - Kandji (REJECTED: junior scope 2.8/5)
https://jobs.lever.co/accesso/91bdc945-e01f-4399-8574-6ef3121c2dd1  Scrum Master - accesso (REJECTED: insufficient info 2.7/5)
https://job-boards.greenhouse.io/energyhub/jobs/8216461002  TPM - EnergyHub (REJECTED: low fit 2.9/5)
https://job-boards.greenhouse.io/neweratech/jobs/8150788002  TPM - New Era Tech (REJECTED: insufficient info 2.6/5)

<!-- Processed 2026-07-06 (Monday scan queue). 3 active/evaluated, 9 postings expired since queued. -->
https://job-boards.greenhouse.io/stripe/jobs/7985196  Stripe | TPM Service Infrastructure (3.6/5) [SECONDARY] - APPLY w/ caveats; CV generated (cv-stripe-2026-07-06.pdf)
https://jobs.ashbyhq.com/horizon3ai/cd3d8dea-6168-4724-bbf2-43257a07e61f  Horizon3.ai | Staff TPM Engineering Excellence (4.2/5) [PRIMARY] - APPLY; CV generated (cv-horizon3-2026-07-06.pdf); refreshed live URL (orig cb0341cb expired)
https://jobs.lever.co/3pillarglobal/d560d590-0a72-45f1-8279-50c3bf57ee37  3Pillar | Senior Scrum Master (2.4/5) [SECONDARY] - DO NOT APPLY (Romania remote-EMEA relocation deal-breaker + comp below floor); refreshed live URL (orig 57f4adfc expired)
https://job-boards.greenhouse.io/gofundme/jobs/7735983  GoFundMe | Staff TPM Security - DISCARDED (posting expired/removed from board, verified 2026-07-06)
https://jobs.lever.co/healthverity/626fcfa2-61eb-4b2c-95db-58f5d0541898  HealthVerity | Senior PM - DISCARDED (posting expired; board down to 2 postings, verified 2026-07-06)
https://job-boards.greenhouse.io/remotecom/jobs/7684296003  Remote.com | Senior Implementations Program Manager - DISCARDED (posting expired/removed, verified 2026-07-06)
https://jobs.ashbyhq.com/pearlhealth/b97a7ef0-6bb8-4a4e-b575-9bb6699edf4b  Pearl Health | Senior TPM - DISCARDED (posting expired; no TPM/PM role on board, verified 2026-07-06)
https://jobs.ashbyhq.com/opengov/242bb76d-c9bc-45de-92e1-4c522fc6ab0c  OpenGov | TPM II - DISCARDED (posting expired; no TPM/PM role on board, verified 2026-07-06)
https://jobs.ashbyhq.com/deel/d3a3ab3a-d3e5-4b6a-bbb6-e852203894fb  Deel | Senior TPM - DISCARDED (unverifiable; Ashby board API returned empty, could not confirm active 2026-07-06)
https://job-boards.greenhouse.io/i360technologiesinc/jobs/4236603009  i360technologies | Senior PM/CSM - DISCARDED (posting expired; board is all Oracle Federal Financials SME roles, verified 2026-07-06)
https://job-boards.greenhouse.io/verramobility/jobs/4676920006  Verra Mobility | Senior Scrum Master - DISCARDED (posting expired/removed from board, verified 2026-07-06)
https://job-boards.greenhouse.io/fanaticsfbg/jobs/4244063009  Fanatics Betting & Gaming | Senior Staff TPM - DISCARDED (posting expired/removed from board, verified 2026-07-06)

<!-- Processed 2026-07-15 (Monday scan, covering since last run 2026-07-07). 5 new active postings evaluated + CVs generated; ~12 candidates verified expired/ineligible (DoorDash+DoubleVerify redirect-to-board, Fundamental SF/Israel on-site, Twilio excludes NJ residents, etc.) logged to scan-history. -->
https://job-boards.greenhouse.io/3cloud/jobs/8590358002  3Cloud | Delivery Manager, Project Delivery (4.2/5) [PRIMARY] - APPLIED 2026-07-15 via gh_apply (Greenhouse confirmed; cv-3cloud-2026-07-15.pdf); remote US $117.5-170.3K
https://job-boards.greenhouse.io/jrmconstructionmanagementllc/jobs/4689864006  JRM Construction | Enterprise Transformation PM (3.8/5) [SECONDARY] - APPLIED 2026-07-15 via gh_apply (cv-jrm-2026-07-15.pdf); NYC hybrid $120-140K; Procore cert bridges construction; lead governance+dashboards+change mgmt
https://job-boards.greenhouse.io/phaidra/jobs/4703165005  Phaidra | Technical Program Manager (3.5/5) [SECONDARY] - APPLIED 2026-07-15 via gh_apply (cv-phaidra-2026-07-15.pdf); remote US/Canada $96-189K; gaps: external customer-deployment ownership + industrial domain (HVAC/data-center/controls)
https://job-boards.greenhouse.io/parloa/jobs/4877824101  Parloa | Technical Program Manager (3.4/5) [SECONDARY] - APPLIED 2026-07-15 via gh_apply (Erick Rosa Resume - Parloa.pdf); NYC office-based enterprise conversational-AI TPM; CS-1+CS-7 hypercare bullseye; confirm hybrid; base $120-140K OTE
https://job-boards.greenhouse.io/blinkhealth/jobs/8608801002  Blink Health | Senior Technical Program Manager (3.2/5) [PRIMARY skills] - DO NOT APPLY (location); CV generated (cv-blink-health-2026-07-15.pdf); Mon-Thu 4-day in-office NYC/Pittsburgh clashes w/ remote-preferred; comp unlisted (~$180-190K mkt)

<!-- Processed 2026-07-07 (Tuesday scan). 3 new active postings evaluated + CVs generated; ~11 candidates verified expired (redirect-to-board-index / 404) and logged to scan-history. -->
https://job-boards.greenhouse.io/cayuse/jobs/8519982002  Cayuse | Technical Program Manager (4.6/5) [PRIMARY] - APPLY; CV generated (cv-cayuse-2026-07-07.pdf); textbook Senior TPM platform-migration; verify comp (not listed) + C2C eligibility
https://jobs.ashbyhq.com/blooming-health/070cb5b4-176c-45cb-b0e1-5d9fa44c5211  Blooming Health | Senior TPM (3.8/5) [PRIMARY] - APPLY w/ honest AI-adjacent + greenfield framing; CV generated (cv-blooming-health-2026-07-07.pdf); gaps: required hands-on AI/ML+agentic & startup-scaling-from-PMF; verify comp
https://jobs.ashbyhq.com/spruceid/130c2bb1-35f4-4c19-b252-f64614b4bcb0  Spruce Systems | Technical Program Manager (3.4/5) [SECONDARY] - APPLY w/ caveats; CV generated (cv-spruce-2026-07-07.pdf); customer-ownership + SOW-interpretation gaps; confirm comp clears floor + FTE/C2C (bg check implies W2)

<!-- Processed 2026-08-02 (scan covering since last run 2026-07-17). 13 active postings evaluated + 8 tailored CVs generated; 7 verified closed via live ATS board APIs; ~15 skipped on location/clearance/aggregator and logged to scan-history. Also backfilled reports 024-034 (2026-07-17 batch) into applications.md — that run wrote reports but never merged the tracker or built PDFs. -->
https://stripe.com/jobs/search?gh_jid=7589234  Stripe | TPM, Core Infrastructure (4.0/5) [PRIMARY] - APPLY; best CS-2/CS-3 match of batch; CV "Erick Rosa Resume - Stripe (Core Infrastructure).pdf"; HELD for manual review (custom written questions)
https://stripe.com/jobs/search?gh_jid=7685855  Stripe | TPM, Risk (3.8/5) [SECONDARY] - APPLY; CS-7 regulated-delivery thesis; CV "Erick Rosa Resume - Stripe (Risk).pdf"; HELD for manual review
https://stripe.com/jobs/search?gh_jid=8042055  Stripe | TPM, Money-as-a-Service (3.7/5) [SECONDARY] - APPLY; CS-1/CS-5 + AFR order-mgmt hook; CV "Erick Rosa Resume - Stripe (Money-as-a-Service).pdf"; HELD for manual review
https://jobs.lever.co/palantir/7eb0dedb-37ee-4175-b29f-10a9e4340076  Palantir | TPM NYC (3.6/5) [SECONDARY] - PREPARE ONLY; CV generated; MANUAL REVIEW REQUIRED (Secret-clearance attestation = section 15 STOP; also confirm degree details, cv.md says "available upon request")
https://job-boards.greenhouse.io/anthropic/jobs/5301958008  Anthropic | TPM, Enterprise Commerce (3.6/5) [SECONDARY] - PREPARE ONLY; sleeper fit (SOX/controls + order-mgmt systems); $290-365K; NYC 25% office; CV generated; HELD for manual review
https://jobs.ashbyhq.com/openai/c414f15f-60c4-40b5-a896-d2ad6c7f4415  OpenAI | Senior TPM, Security (3.5/5) [SECONDARY] - PREPARE ONLY; CS-3/CS-7 governance bridge real, security-program tenure is not; Remote-US $165.4-285K; CV generated; HELD for manual review
https://job-boards.greenhouse.io/anthropic/jobs/5201264008  Anthropic | TPM, Cloud Inference (3.2/5) [SECONDARY] - PREPARE ONLY, low priority; $290-435K but ML-inference + hyperscaler-AI-platform domains absent; CV generated; HELD for manual review
https://job-boards.greenhouse.io/energyhub/jobs/8638949002  EnergyHub | TPM, Platform Integrations (3.0/5) [SECONDARY] - PREPARE ONLY, lowest priority; $115-135K below target midpoint; external-customer-facing gap recurs; CV generated
https://jobs.lever.co/cgsfederal/5ee0100f-f3f1-4e87-912c-e93c62b20154  CGS Federal | Agile Coach NYC (2.8/5) - REJECTED (comp $81.5-110.7K breaches $100K floor + pure Tier 4 coaching/training = de-emphasis cap). Useful evidence: coach framing prices ~$40-70K under TPM framing in the same city.
https://job-boards.greenhouse.io/fortrobotics/jobs/4716269005  FORT Robotics | TPM (2.6/5) - REJECTED (must be based in Philadelphia or relocate = deal-breaker; robotics/hardware domain; 4-7yr under-levels)
https://jobs.ashbyhq.com/openai/713a9469-fb35-49db-809e-36f67c920880  OpenAI | TPM, Rack Delivery (2.5/5) - REJECTED (Ashby label says "Remote - US" but JD body requires SF 3 days/week; manufacturing-ops domain wall)
https://job-boards.greenhouse.io/anthropic/jobs/5013743008  Anthropic | TPM, Data Center Infrastructure (2.4/5) - REJECTED (7+yr hyperscale DC construction + TPM people-management both hard-required; $365-435K irrelevant)
https://jobs.ashbyhq.com/openai/e6ddb290-3585-48ec-a331-d4fc4761af20  OpenAI | Program Manager Lead (2.3/5) - REJECTED (Marketing org: campaigns/brand/OOH/experiential, not technical delivery; engages no differentiator)

<!-- Processed 2026-08-11 (Monday scan, covering since last run 2026-08-02). 5 new active postings evaluated; ~27 candidates logged to scan-history (location/aggregator/backlog/expired/title filters). WebFetch blocked for all job board domains — evaluations based on WebSearch JD summaries only. -->
https://job-boards.greenhouse.io/omadahealth/jobs/7963790  Omada Health | Staff AI Transformation PM (3.6/5) [SECONDARY] - APPLY w/ caveats; strongest CS-4 match (dashboards/KPIs/governance); AI transformation depth gap; remote US; verify comp
https://job-boards.greenhouse.io/wilsonelser/jobs/5288359008  Wilson Elser | Senior SM/Agile PM (3.6/5) [PRIMARY] - APPLY; direct SM/PM hybrid fit; SAFe SSM+PMP exceed CSM bar; NYC $135-150K contractor; verify hybrid/remote + C2C
https://job-boards.greenhouse.io/life360/jobs/8627517002  Life360 | Staff TPM AI Native (3.4/5) [SECONDARY] - PREPARE ONLY; CS-1/CS-4/CS-5 engaged; AI-native framing uncertain; remote US/Canada; limited JD detail
https://job-boards.greenhouse.io/snorkelai/jobs/6132370004  Snorkel AI | TPM Enterprise AI (3.2/5) [SECONDARY] - PREPARE ONLY; customer-facing delivery + AI technical fluency are material gaps; remote US
https://job-boards.greenhouse.io/airtable/jobs/8586863002  Airtable | PM Professional Services East (3.2/5) [SECONDARY] - PREPARE ONLY; exceptional comp $179.5-221.5K but PS/consulting + platform + AI tool fluency triple gates; NYC/remote
