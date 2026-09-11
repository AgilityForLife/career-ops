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

<!-- Processed 2026-09-11 (scan covering since last run 2026-09-09). 3 parallel scan agents covered
all 12 portals.yml search_queries + all 24 tracked_companies. 58 candidate URLs surfaced; 29 deduped
or skipped (location, domain mismatch, overlevel, prior low-fit evals, backlog) — logged to
scan-history.tsv. 29 new unique candidates identified; 9 additional triage skips applied. 20 sent to
4 parallel evaluation agents. ALL EVALUATIONS LOW CONFIDENCE: egress proxy blocked all job board
domains (greenhouse.io, lever.co, ashbyhq.com, jobs.citi.com, jobs.jpmorganchase.com,
apply.deloitte.com, jobs.jnj.com, remotejobs.org) — scores based on title/company analysis and
web search snippets only. 12 scored 3.0+; no CVs generated this run; no applications submitted.
Top opportunities (apply-eligible):
https://jobs.jnj.com/en/jobs/2506238476w/sr-program-manager-medtech-digital/  J&J | Sr. PM MedTech Digital (4.2/5) [PRIMARY] - APPLY; pharma regulated delivery, Sanofi experience transferable, NJ local
https://apply.deloitte.com/en_US/careers/JobDetail/Senior-Project-Manager-MMIS/340312  Deloitte | Sr. PM MMIS (4.0/5) [PRIMARY] - PREPARE_ONLY; exceptional CS alignment but 8yr Medicaid-specific hard req
https://job-boards.greenhouse.io/capitaltg/jobs/5142942007  Capital TG | Scrum Master Remote (3.6/5) [SECONDARY] - APPLY_WITH_CAVEATS; SAFe SPC6 valued
https://careers.ibm.com/en_US/careers/JobDetail/Senior-Technical-Program-Manager-Confluent-Remote/118449  IBM | Sr. TPM Confluent Remote (3.5/5) [PRIMARY] - APPLY_WITH_CAVEATS; enterprise TPM, $118-203K, remote
https://remotejobs.org/remote-jobs/agile-project-manager-guidehouse  Guidehouse | Agile PM Remote (3.5/5) [SECONDARY] - PREPARE_ONLY; gov consulting
https://jobs.jnj.com/en/jobs/2506234991w/project-manager-transact/  J&J | PM TransAct (3.4/5) [SECONDARY] - PREPARE_ONLY; pharma fit but narrower scope
https://jobs.citi.com/job/jersey-city/it-project-manager-lead-c14/287/16153496736  Citi | IT PM Lead C14 Jersey City (3.4/5) [PRIMARY] - APPLY; financial services enterprise IT
https://jobs.ashbyhq.com/HighlightTA/508ed838-9ccf-4a53-bc0d-ae33055bd3b9  Neon One | Agile Delivery Manager Remote (3.4/5) [PRIMARY] - APPLY_WITH_CAVEATS; delivery manager framing
https://jobs.citi.com/job/new-york/senior-project-manager-vice-president/287/90837804128  Citi | Sr PM VP NYC (3.3/5) [PRIMARY] - APPLY_WITH_CAVEATS; VP-level seniority match
https://jobs.citi.com/job/new-york/program-manager/287/26646143872  Citi | PM NYC (3.2/5) [PRIMARY] - PREPARE_ONLY; lower level than C14/VP roles
https://apply.deloitte.com/en_US/careers/JobDetail/Technical-Program-Manager/356701  Deloitte | TPM Retail Transformation (3.2/5) [SECONDARY] - DO_NOT_APPLY; retail domain + likely closed (deadline 08/10/2026)
https://job-boards.greenhouse.io/flywheeldigital/jobs/5195229008  Flywheel Digital | TPM Contract Jersey City (3.0/5) [SECONDARY] - APPLY_WITH_CAVEATS; borderline, JC local
The other 8 non-apply-eligible outcomes (scores 2.0-2.8) are fully detailed in reports 137-144 and
scan-history.tsv; not repeated here for space. -->

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
