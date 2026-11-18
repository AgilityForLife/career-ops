import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const BASE = '/home/user/career-ops';
const REPORTS = join(BASE, 'reports');
const TSV_DIR = join(BASE, 'batch', 'tracker-additions');
mkdirSync(TSV_DIR, { recursive: true });

const DATE = '2026-11-18';

const evals = [
  {
    num: 439, company: 'Nava/QBA', slug: 'nava-qba-program-manager-gov-safe',
    role: 'Program Manager (Gov SAFe)',
    url: 'https://wellfound.com/jobs/4689860-program-manager',
    score: '4.0', cs: 'CS-1, CS-5, CS-6, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** 150+ person multi-team Agile organization — directly maps to Verisk 15–17 team scale\n- **CS-5 (Stakeholder Alignment):** Owns client relationship with agency leadership — mirrors executive reporting experience\n- **CS-6 (SAFe SPC6):** SAFe and PgMP explicitly listed as skills; Active PMP required — exact cert match (PMP + SPC6)\n- **CS-7 (Regulated/Compliance):** Government program delivery — regulated environment parallel to pharma R&D`,
    fit: 'Strong fit across 4+ core strengths. The 150+ person Agile org mirrors Verisk program scale directly. SAFe + PMP requirements are an exact credential match. Government regulated delivery parallels pharma compliance experience. Remote + $157–177K clears anchor.',
    rec: 'APPLY — HIGH PRIORITY. Lead with CS-1 (enterprise scale) + CS-6 (SAFe SPC6 at portfolio scale). PMP + SPC6 credentials are differentiators here.',
    comp: '$157,500–$177,300/year (FTE). Clears anchor ($105K+). Remote.',
    notes: 'HIGH PRIORITY; remote; $157–177K; SAFe+PMP exact match; 150+ person org mirrors Verisk scale; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 440, company: 'JPMorgan', slug: 'jpmorgan-data-modernization-technical-pm-jc',
    role: 'Data Modernization Technical PM',
    url: 'https://www.ihireengineering.com/jobs/view/523189677',
    score: '3.8', cs: 'CS-1, CS-2, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Data modernization program at JPMorgan — enterprise scale certain\n- **CS-2 (Cloud/Data Platform):** Data modernization maps directly to Snowflake OneMesh migration experience at Sanofi\n- **CS-5 (Stakeholder Alignment):** Cross-functional at a Tier 1 financial institution\n- **CS-7 (Regulated/Compliance):** Financial services — heavily regulated delivery environment`,
    fit: 'Data modernization is the strongest CS-2 hook available in this batch — directly parallels Sanofi Snowflake OneMesh migration. Jersey City location is commutable. Financial services regulated environment engages CS-7.',
    rec: 'APPLY — lead with CS-2 (Snowflake OneMesh data migration) + CS-1 (enterprise delivery scale). Data modernization narrative is the most natural positioning of any role in this pipeline batch.',
    comp: '$142,000–$190,000/year (per Dice listing). Clears anchor ($105K+).',
    notes: 'APPLY-ELIGIBLE; JC; $142–190K; CS-2 data modernization is strongest hook in batch; Snowflake OneMesh parallel; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 441, company: 'UnitedHealth', slug: 'unitedhealth-director-tech-project-pm-remote',
    role: 'Director, Technical Project/Program Management — Remote',
    url: 'https://careers.unitedhealthgroup.com/job/eden-prairie/director-technical-project-program-management-remote/34088/100343446992',
    score: '3.7', cs: 'CS-1, CS-4, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Director leading high-priority technology portfolios — program scale match\n- **CS-4 (Executive Reporting):** Portfolio-level strategic implementation implies exec dashboards\n- **CS-5 (Stakeholder Alignment):** Cross-functional leadership at portfolio level\n- **CS-7 (Regulated/Compliance):** Federal/state/military compliant tech environments explicitly required — strong parallel to pharma R&D regulated delivery`,
    fit: 'Director-level portfolio leadership with explicit federal/state compliance requirement is a strong CS-7 match. PMP/PgMP/Agile cert required = exact credential fit. Gap: 5+ years direct people leadership required — Erick cv shows matrix leadership, not formal direct reports.',
    rec: 'APPLY w/ caveats — clarify people leadership as matrix/dotted-line management of 15–17 teams rather than formal direct reports. Lead with CS-1 + CS-7.',
    comp: '$134,600–$230,800/year (based on comparable UHG Director postings). Clears anchor.',
    notes: 'APPLY-ELIGIBLE w/ caveats; remote; ~$134–231K; people-leadership gap (matrix vs direct); federal/state compliance match; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 442, company: 'UnitedHealth', slug: 'unitedhealth-director-tech-project-mgmt-remote-2',
    role: 'Director, Technical Project Management — Remote',
    url: 'https://careers.unitedhealthgroup.com/job/eden-prairie/director-technical-project-management-remote/34088/92872151872',
    score: '3.7', cs: 'CS-1, CS-4, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Director-level technical project management — portfolio scale\n- **CS-4 (Executive Reporting):** Director role implies strategic reporting\n- **CS-5 (Stakeholder Alignment):** Cross-functional at enterprise level\n- **CS-7 (Regulated/Compliance):** Healthcare/insurance regulated environment`,
    fit: 'Similar profile to the other UHG Director posting (report 441). Director-level scope with healthcare compliance. Same people-leadership caveat applies. Remote is a strong plus.',
    rec: 'APPLY w/ caveats — same positioning as report 441. If applying to both, tailor slightly to differentiate.',
    comp: '$134,600–$230,800/year (comparable UHG band). Clears anchor.',
    notes: 'APPLY-ELIGIBLE w/ caveats; remote; ~$134–231K; similar to 441; people-leadership gap; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 443, company: 'JPMorgan', slug: 'jpmorgan-technical-pm-exec-dir-ai-product-mgmt',
    role: 'Technical PM, Executive Director — AI Product Management',
    url: 'https://www.themuse.com/jobs/jpmorganchase/technical-project-manager-executive-director-ai-product-management-team',
    score: '3.7', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Executive Director level at JPMorgan — maximum enterprise scale\n- **CS-5 (Stakeholder Alignment):** AI product management team = cross-functional by definition\n- **CS-7 (Regulated/Compliance):** Financial services regulated environment\n- CS-2 partial: AI product management is tech-adjacent but not direct cloud/data platform delivery`,
    fit: 'Executive Director is a very senior level at JPMorgan. AI product management team is attractive but may require hands-on AI/ML experience not in cv.md. Financial services regulation engages CS-7. NYC location commutable.',
    rec: 'APPLY w/ caveats — verify AI/ML hands-on requirements. Lead with CS-1 (enterprise delivery at scale) + CS-7 (regulated delivery). Position AI tool adoption (BTII experience) as bridge.',
    comp: 'Not confirmed; Executive Director at JPMorgan typically $180K–$280K+ base. Expected to clear anchor.',
    notes: 'APPLY-ELIGIBLE w/ caveats; NYC; exec director level; AI product mgmt team; verify AI/ML depth req; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 444, company: 'CoreWeave', slug: 'coreweave-tpm-product-engineering',
    role: 'Technical Program Manager — Product Engineering',
    url: 'https://job-boards.greenhouse.io/coreweave/jobs/4435058006',
    score: '3.6', cs: 'CS-1, CS-2, CS-5',
    csDetail: `- **CS-1 (Enterprise Delivery):** TPM managing scope, risk, and delivery across engineering/product/ops/security teams\n- **CS-2 (Cloud/Data Platform):** GPU cloud infrastructure company — cloud-adjacent delivery\n- **CS-5 (Stakeholder Alignment):** Cross-functional (engineering, product, operations, security teams)`,
    fit: 'CoreWeave is a high-growth GPU cloud infrastructure company with NJ/NYC presence. TPM Product Engineering role sets program scope and manages risk across multiple teams — classic CS-1 delivery. Cloud infrastructure context engages CS-2 partially. Hybrid within 30 miles of Livingston NJ office is feasible.',
    rec: 'APPLY — lead with CS-1 (enterprise delivery) + CS-2 (cloud platform delivery). CoreWeave hybrid NJ is excellent location fit. Verify posting is still live (some aggregators show older dates).',
    comp: '$150,000–$237,000/year (range across aggregator listings). Clears anchor.',
    notes: 'APPLY-ELIGIBLE; Livingston NJ hybrid; $150–237K; GPU cloud infra; verify posting still live; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 445, company: 'JPMorgan', slug: 'jpmorgan-lead-tpm-strategic-initiatives',
    role: 'Lead TPM, Strategic Initiatives & Delivery Office',
    url: 'https://www.themuse.com/jobs/jpmorganchase/lead-technical-program-manager-strategic-initiatives-and-delivery-office',
    score: '3.6', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Complex technology programs from planning through delivery — budget, timeline, risk management\n- **CS-5 (Stakeholder Alignment):** Cross-functional stakeholder management at a Tier 1 bank\n- **CS-7 (Regulated/Compliance):** Financial services — regulated delivery environment`,
    fit: 'Lead TPM in Strategic Initiatives & Delivery Office is a natural CS-1 fit. The "delivery office" framing maps well to Verisk PMO/delivery governance experience. NYC/JC location commutable. 5+ years TPM experience — clears the bar.',
    rec: 'APPLY — lead with CS-1 (enterprise delivery governance) + CS-4 (executive dashboards for strategic initiatives). Delivery Office framing is a direct parallel.',
    comp: '$135,000–$160,000/year (from aggregator listings). Clears anchor.',
    notes: 'APPLY-ELIGIBLE; NYC/JC; $135–160K; strategic initiatives delivery office; CS-1 direct parallel; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 446, company: 'JPMorgan', slug: 'jpmorgan-lead-technology-pm-jc',
    role: 'Lead Technology PM',
    url: 'https://www.dice.com/job-detail/aeff164d-f8f4-4050-95a8-4984f13ffe2a',
    score: '3.6', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Lead technology PM at JPMorgan — program-level delivery\n- **CS-5 (Stakeholder Alignment):** Cross-functional leadership\n- **CS-7 (Regulated/Compliance):** Financial services regulated delivery`,
    fit: 'Jersey City location is a strong geographic plus. Lead Technology PM at JPMorgan aligns with CS-1 enterprise delivery. Comp range clears anchor. Financial services regulated context engages CS-7.',
    rec: 'APPLY — lead with CS-1 + CS-5. Jersey City is excellent commute.',
    comp: '$142,000–$190,000/year. Clears anchor.',
    notes: 'APPLY-ELIGIBLE; JC; $142–190K; CS-1/CS-5/CS-7; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 447, company: 'JPMorgan', slug: 'jpmorgan-principal-technical-pm',
    role: 'Principal Technical PM',
    url: 'https://www.themuse.com/jobs/jpmorganchase/principal-technical-program-manager-e633e6',
    score: '3.6', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Principal-level TPM at Tier 1 bank\n- **CS-5 (Stakeholder Alignment):** Cross-functional at enterprise level\n- **CS-7 (Regulated/Compliance):** Financial services regulated environment`,
    fit: 'Principal level is senior — strong seniority match. NYC/JC dual location provides flexibility. Financial services regulated delivery is consistent CS-7 engagement.',
    rec: 'APPLY — lead with CS-1 + CS-5. Principal level matches 15+ year experience profile well.',
    comp: 'Not confirmed; Principal TPM at JPMorgan typically $160K–$220K+. Expected to clear anchor.',
    notes: 'APPLY-ELIGIBLE; NYC/JC; principal level; CS-1/CS-5/CS-7; comp unconfirmed but expected above anchor; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 448, company: 'Citi', slug: 'citi-transformation-pm-lead-markets-vp',
    role: 'Transformation PM Lead, Markets — VP',
    url: 'https://jobs.citi.com/job/new-york/transformation-program-management-lead-markets-vp/287/100186124528',
    score: '3.6', cs: 'CS-1, CS-5, CS-6, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Transformation program management at VP level — enterprise scale\n- **CS-5 (Stakeholder Alignment):** Markets division = complex stakeholder landscape\n- **CS-6 (SAFe/Agile):** Agile/Scrum explicitly mentioned in pipeline annotation\n- **CS-7 (Regulated/Compliance):** Financial services — Markets division is heavily regulated`,
    fit: 'Transformation program management is a natural fit for Verisk-to-Sanofi transformation narrative. VP level at Citi matches seniority. Agile/Scrum mention engages CS-6. Markets domain requires capital markets fluency not in cv.md but transformation methodology transfers.',
    rec: 'APPLY w/ caveats — lead with transformation delivery experience (Verisk DevOps + Sanofi data platform). Capital markets domain is a gap to acknowledge.',
    comp: 'Not confirmed; VP at Citi Markets typically $150K–$250K+. Expected to clear anchor.',
    notes: 'APPLY-ELIGIBLE; NYC; VP; Agile/Scrum mentioned; transformation PM; capital markets domain gap; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 449, company: 'Cognizant', slug: 'cognizant-sr-consulting-pm-teaneck',
    role: 'Sr Consulting Project Manager',
    url: 'https://careers.cognizant.com/us-en/jobs/00071127041/',
    score: '3.5', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Senior consulting PM at major IT services firm — large-scale programs\n- **CS-5 (Stakeholder Alignment):** Consulting role = client-facing stakeholder management\n- **CS-7 (Regulated/Compliance):** Related postings in insurance transformation suggest regulated domain`,
    fit: 'Teaneck NJ is local — excellent geographic fit. Hybrid 2–3 days/week is acceptable. Comp $134.5–158.5K clears anchor. Consulting PM role engages CS-1/CS-5. Potential gap: consulting pedigree/methodology if Cognizant-specific frameworks required.',
    rec: 'APPLY — local NJ, comp above anchor, CS-1/CS-5 fit. Closes Nov 27 — time-sensitive.',
    comp: '$134,500–$158,500/year. Clears anchor ($105K+).',
    notes: 'APPLY-ELIGIBLE; Teaneck NJ hybrid; $134.5–158.5K; CLOSES NOV 27; local; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 450, company: 'Booz Allen', slug: 'booz-allen-ai-project-manager',
    role: 'AI Project Manager',
    url: 'https://careers.boozallen.com/jobs/JobDetail/McLean-AI-Project-Manager-R0228219/116919',
    score: '3.5', cs: 'CS-1, CS-5, CS-6, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Multi-disciplinary AI programs supporting client strategy\n- **CS-5 (Stakeholder Alignment):** Client-facing strategic program delivery\n- **CS-6 (SAFe/Agile):** SAFe Program Consultant certification preferred — SPC6 is a differentiator\n- **CS-7 (Regulated/Compliance):** Government/DoD-adjacent — regulated delivery`,
    fit: '8+ years Agile experience matches. SAFe cert preferred = SPC6 differentiator. PMP grouped with SAFe cert — dual credential match. Gap: 3+ years AI/ML project management required. McLean VA hybrid is a geographic concern (not NJ/NY).',
    rec: 'APPLY w/ caveats — SAFe SPC6 + PMP dual cert is rare and valuable here. Address AI/ML PM gap honestly (position BTII AI-driven automation as bridge). Confirm hybrid schedule / remote possibility.',
    comp: '$99,000–$225,000/year. Wide range; mid-point clears anchor.',
    notes: 'APPLY-ELIGIBLE w/ caveats; McLean VA hybrid (location concern); $99–225K; SAFe+PMP preferred = SPC6 differentiator; 3yr AI/ML PM gap; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 451, company: 'UnitedHealth', slug: 'unitedhealth-principal-tech-project-pm',
    role: 'Principal Technical Project/Program Manager',
    url: 'https://careers.unitedhealthgroup.com/job/eden-prairie/principal-technical-project-program-manager/34088/97439879232',
    score: '3.5', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Principal-level technical project/program management\n- **CS-5 (Stakeholder Alignment):** Cross-functional at enterprise healthcare scale\n- **CS-7 (Regulated/Compliance):** Healthcare — regulated delivery environment`,
    fit: 'Principal level matches 15+ year experience. Healthcare regulated environment engages CS-7. Without full JD, scoring conservatively based on title + UHG pattern.',
    rec: 'APPLY — standard UHG TPM positioning. Lead CS-1 + CS-7.',
    comp: 'Not confirmed; comparable UHG roles $106K–$194K+. Expected to clear anchor.',
    notes: 'APPLY-ELIGIBLE; location unclear (verify remote); principal level; CS-1/CS-5/CS-7; JD unavailable — scored from title; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 452, company: 'UnitedHealth', slug: 'unitedhealth-sr-manager-tpm-remote',
    role: 'Sr Manager, Technical Project & Program Management — Remote',
    url: 'https://careers.unitedhealthgroup.com/job/austin/senior-manager-of-technical-project-and-program-management-remote/34088/97613515552',
    score: '3.5', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Senior Manager of technical project/program management — portfolio/program oversight\n- **CS-5 (Stakeholder Alignment):** Cross-functional at enterprise level\n- **CS-7 (Regulated/Compliance):** Healthcare regulated environment`,
    fit: 'Senior Manager is a solid seniority match. Remote is a strong plus. Healthcare regulation engages CS-7.',
    rec: 'APPLY — lead with CS-1 + CS-7. Remote.',
    comp: 'Not confirmed; comparable UHG roles $106K–$194K+. Expected to clear anchor.',
    notes: 'APPLY-ELIGIBLE; remote; sr manager level; CS-1/CS-5/CS-7; JD unavailable — scored from title; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 453, company: 'GovCIO', slug: 'govcio-program-manager-remote',
    role: 'Program Manager — Remote (Federal)',
    url: 'https://careers-govcio.icims.com/jobs/6808/program-manager-%28remote%29/job',
    score: '3.5', cs: 'CS-1, CS-5, CS-6, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Federal program management — enterprise government delivery\n- **CS-5 (Stakeholder Alignment):** Government agency stakeholders\n- **CS-6 (SAFe/Agile):** Federal Agile programs typically require SAFe framework\n- **CS-7 (Regulated/Compliance):** Federal government — maximally regulated environment`,
    fit: 'Federal government PM role engages CS-7 strongly. Remote is a plus. SAFe/Agile likely required or preferred for federal IT modernization. PMP + SPC6 credentials match gov contractor requirements.',
    rec: 'APPLY — lead with CS-6 (SAFe SPC6) + CS-7 (regulated delivery). Federal PM credentials (PMP) are differentiators.',
    comp: 'Not confirmed. Verify clears $100K floor.',
    notes: 'APPLY-ELIGIBLE; remote; federal; CS-1/CS-5/CS-6/CS-7; verify comp clears floor; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 454, company: 'Deloitte', slug: 'deloitte-technical-program-manager-nyc',
    role: 'Technical Program Manager',
    url: 'https://apply.deloitte.com/en_US/careers/JobDetail/Technical-Program-Manager/356701',
    score: '3.5', cs: 'CS-1, CS-5',
    csDetail: `- **CS-1 (Enterprise Delivery):** TPM at Deloitte — large consulting programs\n- **CS-5 (Stakeholder Alignment):** Consulting = complex multi-stakeholder delivery`,
    fit: 'Deloitte TPM role matches CS-1 enterprise delivery. NYC location commutable. Without full JD, scoring conservatively.',
    rec: 'APPLY — standard Deloitte TPM positioning. Lead CS-1.',
    comp: 'Not confirmed; Deloitte TPM/Manager typically $130K–$200K+.',
    notes: 'APPLY-ELIGIBLE; NYC; Deloitte TPM; CS-1/CS-5; JD unavailable — scored from title; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 455, company: 'Deloitte', slug: 'deloitte-tech-strategy-delivery-transformation-mgr',
    role: 'Technology Strategy, Innovation & Delivery Transformation Manager',
    url: 'https://apply.deloitte.com/en_US/careers/JobDetail/Technology-Strategy-Innovation-and-Delivery-Transformation-Manager/355545',
    score: '3.5', cs: 'CS-1, CS-5',
    csDetail: `- **CS-1 (Enterprise Delivery):** Delivery transformation at Deloitte — enterprise-scale transformation programs\n- **CS-5 (Stakeholder Alignment):** Strategy + transformation = multi-stakeholder engagement`,
    fit: 'Delivery transformation framing maps well to Verisk DevOps transformation narrative. NJ/NY location per pipeline annotation. Technology strategy component may require consulting-specific methodology.',
    rec: 'APPLY — lead with Verisk DevOps transformation story as CS-1 proof point.',
    comp: 'Not confirmed; Deloitte Manager typically $130K–$180K+.',
    notes: 'APPLY-ELIGIBLE; NJ/NY; delivery transformation; CS-1/CS-5; JD unavailable — scored from title; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 456, company: 'MetLife', slug: 'metlife-senior-agile-pm',
    role: 'Senior Agile Project Manager',
    url: 'https://www.builtinnyc.com/job/senior-agile-project-manager/299212',
    score: '3.5', cs: 'CS-1, CS-5, CS-6',
    csDetail: `- **CS-1 (Enterprise Delivery):** Senior Agile PM at MetLife — enterprise insurance scale\n- **CS-5 (Stakeholder Alignment):** Cross-functional project delivery\n- **CS-6 (SAFe/Agile):** Agile PM role — SAFe SPC6 differentiator`,
    fit: 'MetLife is local NJ/NYC. Senior Agile PM engages CS-6 directly. Insurance regulated environment is CS-7 adjacent. Comp $103–130K clears floor but is at/below anchor for FTE.',
    rec: 'APPLY — local NJ/NYC hybrid. Lead with CS-6 (SAFe SPC6) + CS-1. Comp is modest but above floor.',
    comp: '$103,000–$130,000/year. Clears floor ($100K); at/below anchor ($105K) on low end.',
    notes: 'APPLY-ELIGIBLE; NYC/NJ hybrid; $103–130K (at floor); CS-1/CS-5/CS-6; local; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 457, company: 'J&J', slug: 'jnj-director-project-pm-medtech',
    role: 'Director, Project/Program Management — MedTech',
    url: 'https://www.careers.jnj.com/en/jobs/r-082849/director-projectprogram-management-wound-closure-and-healing-medtech/',
    score: '3.5', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1 (Enterprise Delivery):** Director-level project/program management — enterprise pharma/MedTech scale\n- **CS-5 (Stakeholder Alignment):** Cross-functional at director level\n- **CS-7 (Regulated/Compliance):** Pharma/MedTech — maximally regulated delivery environment (parallels Sanofi R&D)`,
    fit: 'Director level at J&J MedTech — Raritan NJ hybrid is local. Pharma/MedTech regulated delivery directly parallels Sanofi R&D experience. MedTech wound closure domain is specialized but PM methodology transfers.',
    rec: 'APPLY w/ caveats — lead with Sanofi pharma R&D regulated delivery as proof point. Acknowledge MedTech product domain gap.',
    comp: 'Not confirmed; J&J Director PM typically $150K–$220K+.',
    notes: 'APPLY-ELIGIBLE w/ caveats; Raritan NJ hybrid; director level; CS-7 Sanofi parallel; MedTech domain gap; unconfirmed batch mode',
    status: 'Evaluada'
  },
  // --- Below 3.5 threshold: brief reports ---
  {
    num: 458, company: 'Citi', slug: 'citi-pm-lead-product-dev-transformation-vp',
    role: 'PM Lead, Product Development Transformation — VP',
    url: 'https://jobs.citi.com/job/new-york/program-management-lead-product-development-transformation-vice-president/287/99017418464',
    score: '3.4', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1:** VP-level product dev transformation\n- **CS-5:** Cross-functional\n- **CS-7:** Financial services regulated\n- CS-2 absent → -0.3 applied`,
    fit: 'Product development transformation at VP level engages CS-1. Financial services context. No explicit cloud/data hook reduces score.',
    rec: 'APPLY w/ caveats — lower priority. Lead with transformation experience.',
    comp: 'Not confirmed; Citi VP typically $150K–$250K+.',
    notes: 'SECONDARY; NYC; VP; CS-2 absent; product dev transformation; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 459, company: 'Palantir', slug: 'palantir-tpm-nyc',
    role: 'Technical Program Manager',
    url: 'https://jobs.lever.co/palantir/34e30387-4469-41e4-9e69-6cc8a179af3b',
    score: '3.4', cs: 'CS-1, CS-5',
    csDetail: `- **CS-1:** TPM at Palantir — complex tech delivery\n- **CS-5:** Cross-functional stakeholder management`,
    fit: 'Palantir TPM engages CS-1. NYC location commutable. Prior evaluation (report 038) scored Palantir TPM at 3.6 — this may be the same or similar role. Verify if Secret clearance still required.',
    rec: 'APPLY w/ caveats — verify clearance requirements. May be duplicate of prior evaluated role.',
    comp: 'Not confirmed; Palantir TPM typically $135K–$200K+.',
    notes: 'SECONDARY; NYC; verify clearance req; may duplicate report 038; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 460, company: 'UnitedHealth', slug: 'unitedhealth-sr-tpm-cybersecurity-remote',
    role: 'Senior TPM — Cybersecurity (Remote/Hybrid)',
    url: 'https://careers.unitedhealthgroup.com/job/eden-prairie/senior-technical-project-manager-remote-or-hybrid-in-mn-or-dc/34088/92872144384',
    score: '3.4', cs: 'CS-1, CS-3, CS-7',
    csDetail: `- **CS-1:** Senior TPM\n- **CS-3:** Cybersecurity parallels DevOps governance/security\n- **CS-7:** Healthcare + cybersecurity = dual regulated context`,
    fit: 'Cybersecurity TPM engages CS-3 (DevOps governance security dimension) and CS-7. Remote/Hybrid MN or DC — DC is commutable concern, remote is fine.',
    rec: 'APPLY w/ caveats — cybersecurity domain gap but governance methodology transfers. Verify remote eligibility from NJ.',
    comp: 'Not confirmed; comparable UHG roles $106K–$194K+.',
    notes: 'SECONDARY; remote/hybrid MN or DC; cybersecurity domain; CS-3 governance transfer; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 461, company: 'UnitedHealth', slug: 'unitedhealth-technical-program-leader',
    role: 'Technical Program Leader',
    url: 'https://careers.unitedhealthgroup.com/job/eden-prairie/technical-program-leader/34088/100045687744',
    score: '3.5', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1:** Technical Program Leader — enterprise delivery\n- **CS-5:** Cross-functional program leadership\n- **CS-7:** Healthcare regulated delivery`,
    fit: '"Program Leader" title suggests senior individual contributor or lead role. Healthcare context engages CS-7.',
    rec: 'APPLY — standard UHG positioning. Verify remote/location.',
    comp: 'Not confirmed; comparable UHG roles $106K–$194K+.',
    notes: 'APPLY-ELIGIBLE; location unclear; CS-1/CS-5/CS-7; JD unavailable; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 462, company: 'Citi', slug: 'citi-payments-tech-pm-quality-lead-svp',
    role: 'Citi Direct Payments Tech PM/Quality Lead — SVP',
    url: 'https://jobs.citi.com/job/jersey-city/citi-direct-payments-tech-program-manager-quality-lead-senior-vice-president/287/100816127536',
    score: '3.3', cs: 'CS-1, CS-3, CS-7',
    csDetail: `- **CS-1:** SVP-level tech PM\n- **CS-3:** Quality lead parallels DevOps governance\n- **CS-7:** Financial services regulated`,
    fit: 'SVP at Citi is senior. Quality lead dimension engages CS-3. Payments domain is specialized but PM methodology transfers. JC location commutable.',
    rec: 'APPLY w/ caveats — payments domain gap. Lead with CS-3 quality/governance experience.',
    comp: 'Not confirmed; Citi SVP typically $170K–$300K+.',
    notes: 'SECONDARY; JC; SVP; payments domain gap; CS-3 quality lead angle; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 463, company: 'Citi', slug: 'citi-low-latency-infra-sr-pm',
    role: 'Low-Latency Infrastructure Senior Program Manager',
    url: 'https://jobs.citi.com/job/jersey-city/low-latency-infrastructure-senior-program-manager/287/95863915072',
    score: '3.2', cs: 'CS-1, CS-2, CS-7',
    csDetail: `- **CS-1:** Senior PM\n- **CS-2:** Infrastructure is cloud-adjacent\n- **CS-7:** Financial services regulated`,
    fit: 'Low-latency trading infrastructure is a highly specialized domain. Infrastructure context is CS-2 adjacent but requires specific network/systems expertise. JC location good.',
    rec: 'APPLY w/ caveats — specialized domain. Only if comfortable positioning general infra PM experience.',
    comp: 'Not confirmed; likely $150K–$250K+.',
    notes: 'SECONDARY; JC; specialized low-latency domain; CS-2 adjacent; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 464, company: 'UnitedHealth', slug: 'unitedhealth-sr-tech-project-manager-remote',
    role: 'Sr Tech Project Manager — Remote',
    url: 'https://careers.unitedhealthgroup.com/job/eden-prairie/sr-tech-project-manager-remote/34088/93369671408',
    score: '3.3', cs: 'CS-1, CS-5',
    csDetail: `- **CS-1:** Senior tech project manager\n- **CS-5:** Cross-functional delivery`,
    fit: 'Senior tech PM at UHG. Remote. Standard mid-senior role. Without JD details, may be below Director/Principal level.',
    rec: 'APPLY — remote is good. Verify seniority level matches expectations.',
    comp: 'Not confirmed; likely $100K–$160K.',
    notes: 'SECONDARY; remote; mid-senior level; CS-1/CS-5; JD unavailable; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 465, company: 'UnitedHealth', slug: 'unitedhealth-senior-technical-project-manager',
    role: 'Senior Technical Project Manager',
    url: 'https://careers.unitedhealthgroup.com/job/eden-prairie/senior-technical-project-manager/34088/97581065728',
    score: '3.3', cs: 'CS-1, CS-5',
    csDetail: `- **CS-1:** Senior technical project manager\n- **CS-5:** Cross-functional delivery`,
    fit: 'Similar to report 464. Senior TPM at UHG. Location unclear — verify remote.',
    rec: 'APPLY — verify remote/location.',
    comp: 'Not confirmed; likely $100K–$160K.',
    notes: 'SECONDARY; location unclear; CS-1/CS-5; JD unavailable; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 466, company: 'UnitedHealth', slug: 'unitedhealth-agile-practitioner-3-remote',
    role: 'Agile Practitioner 3 — Remote',
    url: 'https://careers.unitedhealthgroup.com/job/eden-prairie/agile-practitioner-3-remote/34088/95017291216',
    score: '3.0', cs: 'CS-6',
    csDetail: `- **CS-6 (SAFe/Agile):** Agile Practitioner role — SPC6 differentiator\n- Tier 4 positioning risk: pure Agile/coaching role caps at 3.5 per skills model`,
    fit: 'Agile Practitioner is primarily a coaching/Scrum Master role. While CS-6 is engaged, the skills model warns against leading with coaching identity. Remote is good.',
    rec: 'APPLY w/ caveats — only if Agile coaching is acceptable positioning. SPC6 is a differentiator but Tier 4 cap applies.',
    comp: 'Not confirmed; likely $90K–$130K.',
    notes: 'SECONDARY; remote; Agile Practitioner (Tier 4 positioning risk); CS-6 only; JD unavailable; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 467, company: 'Palantir', slug: 'palantir-is-program-manager-nyc',
    role: 'IS Program Manager',
    url: 'https://jobs.lever.co/palantir/301e82dc-b70f-49a9-80d7-cc80ae49ff02',
    score: '3.3', cs: 'CS-1, CS-5',
    csDetail: `- **CS-1:** Program management at Palantir\n- **CS-5:** Cross-functional, client-facing`,
    fit: 'Information Systems PM at Palantir. NYC location commutable. IS scope may be internal IT vs delivery — verify.',
    rec: 'APPLY w/ caveats — verify scope (IS = internal tech or external delivery).',
    comp: 'Not confirmed; Palantir typically $135K–$200K+.',
    notes: 'SECONDARY; NYC; IS PM — verify scope; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 468, company: 'OpenAI', slug: 'openai-security-pm-remote',
    role: 'Security Program Manager (M&A focus) — Remote US',
    url: 'https://openai.com/careers/security-program-manager-us-remote/',
    score: '3.0', cs: 'CS-1, CS-7',
    csDetail: `- **CS-1:** Program management\n- **CS-7:** Security + M&A due diligence — compliance-adjacent`,
    fit: 'Security PM with M&A focus is a specialized domain. While CS-7 (compliance) has some parallel, M&A security due diligence is not in cv.md. Remote US is good.',
    rec: 'APPLY w/ caveats — specialized domain. Only if security/M&A experience can be bridged through governance narrative.',
    comp: 'Not confirmed; OpenAI typically $180K–$300K+.',
    notes: 'SECONDARY; remote US; M&A security focus; specialized domain; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 469, company: 'J&J', slug: 'jnj-program-manager-hcs-remote',
    role: 'Program Manager HCS — Remote US',
    url: 'https://www.careers.jnj.com/en/jobs/r-073343/program-manager-hcs/',
    score: '3.4', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1:** Program management at J&J\n- **CS-5:** Cross-functional healthcare delivery\n- **CS-7:** Pharma/healthcare regulated delivery — Sanofi parallel`,
    fit: 'Remote US is a plus. Healthcare services PM engages CS-7 through Sanofi pharma parallel. HCS domain specifics unknown.',
    rec: 'APPLY — lead with Sanofi R&D regulated delivery experience.',
    comp: 'Not confirmed.',
    notes: 'SECONDARY; remote US; healthcare services; CS-7 Sanofi parallel; JD unavailable; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 470, company: 'MetLife', slug: 'metlife-iam-program-manager-remote',
    role: 'IAM Program Manager — Remote',
    url: 'https://builtinnyc.com/job/iam-program-manager/291377',
    score: '3.3', cs: 'CS-1, CS-5',
    csDetail: `- **CS-1:** Program management\n- **CS-5:** Cross-functional IAM program delivery`,
    fit: 'Identity & Access Management PM is a specialized security domain. Remote is good. Comp $100–155K spans floor to above anchor. IAM domain gap but PM methodology transfers.',
    rec: 'APPLY w/ caveats — IAM domain is specialized. Verify depth of technical IAM knowledge required.',
    comp: '$100,000–$155,000/year. Low end at floor.',
    notes: 'SECONDARY; remote; $100–155K; IAM domain gap; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 471, company: 'Citi', slug: 'citi-vp-technology-lead-pm-jc',
    role: 'VP Technology Lead Project Manager — Cash Equities',
    url: 'https://jobs.citi.com/job/jersey-city/vp-technology-lead-project-manager/287/95130175456',
    score: '3.3', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1:** VP-level tech PM\n- **CS-5:** Cross-functional\n- **CS-7:** Financial services regulated`,
    fit: 'VP Technology Lead at Citi. Cash Equities is specialized trading domain. JC location commutable.',
    rec: 'APPLY w/ caveats — capital markets/cash equities domain gap.',
    comp: 'Not confirmed; Citi VP typically $150K–$250K+.',
    notes: 'SECONDARY; JC; VP; cash equities domain gap; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 472, company: 'Deloitte', slug: 'deloitte-tech-project-program-manager',
    role: 'Technical Project & Program Manager',
    url: 'https://apply.deloitte.com/en_US/careers/JobDetail/Technical-Project-and-Program-Manager/357211',
    score: '3.3', cs: 'CS-1, CS-5',
    csDetail: `- **CS-1:** Technical project/program management at Deloitte\n- **CS-5:** Cross-functional consulting delivery`,
    fit: 'Deloitte TPM role. 48 locations per pipeline annotation including NY. Standard consulting PM scope.',
    rec: 'APPLY — standard positioning.',
    comp: 'Not confirmed; Deloitte Manager typically $120K–$180K+.',
    notes: 'SECONDARY; 48 locs incl NY; CS-1/CS-5; JD unavailable; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 473, company: 'Insight Global', slug: 'insight-global-pm-remote-cranbury-nj',
    role: 'Project Manager — Remote Cranbury NJ (Contract)',
    url: 'https://jobs.insightglobal.com/find_a_job/new-jersey/job-565371/',
    score: '3.2', cs: 'CS-1',
    csDetail: `- **CS-1:** Project management — staffing agency contract role`,
    fit: 'Insight Global is a staffing agency — the actual client and scope are unknown. Cranbury NJ is local. Contract aligns with C2C preference. Without JD details, scoring conservatively.',
    rec: 'APPLY w/ caveats — verify client, scope, rate, and duration. Contract/C2C is preferred comp structure.',
    comp: 'Not confirmed; verify rate clears $60/hr C2C floor.',
    notes: 'SECONDARY; Cranbury NJ contract; staffing agency — verify client/rate; C2C possible; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 474, company: 'Citi', slug: 'citi-pm-lead-alumni-network-vp',
    role: 'PM Lead, Alumni Network — VP',
    url: 'https://jobs.citi.com/job/new-york/program-management-lead-alumni-network-vice-president/287/102261625120',
    score: '2.5', cs: '',
    csDetail: `- No core strengths meaningfully engaged\n- Alumni network is an HR/people ops program, not technical delivery\n- CS-1 not engaged: scope is HR program management, not enterprise technical delivery`,
    fit: 'Alumni network program management is an HR/people operations domain — fundamentally different from technical delivery. None of the 7 Core Strengths are meaningfully engaged. VP title does not rescue the domain mismatch.',
    rec: 'DO NOT APPLY — domain mismatch. HR/alumni program management engages none of the technical delivery core strengths.',
    comp: 'Not confirmed; irrelevant given recommendation.',
    notes: 'REJECTED; NYC; HR/alumni domain mismatch; 0/7 CS engaged; unconfirmed batch mode',
    status: 'Descartado'
  },
  {
    num: 475, company: 'CoreWeave', slug: 'coreweave-ops-pm-maintenance-rmas',
    role: 'Ops PM, Maintenance & RMAs',
    url: 'https://job-boards.greenhouse.io/coreweave/jobs/4433363006',
    score: '2.8', cs: 'CS-1',
    csDetail: `- **CS-1:** Partial — operational PM but maintenance/RMA scope is narrow\n- Not enterprise delivery at scale; operational maintenance focus`,
    fit: 'Maintenance & RMAs operations PM is a specialized hardware ops role. Not enterprise program delivery. CoreWeave NJ location is good but scope doesn\'t match target roles.',
    rec: 'DO NOT APPLY — operational maintenance scope doesn\'t match enterprise delivery target.',
    comp: 'Not confirmed.',
    notes: 'REJECTED; hybrid; maintenance/RMA ops scope; not enterprise delivery; unconfirmed batch mode',
    status: 'Descartado'
  },
  {
    num: 476, company: 'J&J', slug: 'jnj-med-tech-supply-chain-pmo-excellence-lead',
    role: 'Med Tech Supply Chain PMO Excellence Lead',
    url: 'https://www.careers.jnj.com/en/jobs/r-096342/med-tech-supply-chain-pmo-excellence-lead/',
    score: '2.8', cs: 'CS-1, CS-7',
    csDetail: `- **CS-1:** Partial — PMO excellence but supply chain domain\n- **CS-7:** Pharma regulated environment`,
    fit: 'Supply chain PMO is a specialized domain outside technical delivery. While J&J NJ location is good and pharma regulation engages CS-7, the supply chain focus doesn\'t match target TPM/delivery roles.',
    rec: 'DO NOT APPLY — supply chain PMO domain mismatch.',
    comp: 'Not confirmed.',
    notes: 'REJECTED; NJ; supply chain PMO — domain mismatch; CS-7 only; unconfirmed batch mode',
    status: 'Descartado'
  },
  {
    num: 477, company: 'Palantir', slug: 'palantir-grc-program-manager-dc',
    role: 'GRC Program Manager — DC Hybrid',
    url: 'https://jobs.lever.co/palantir/def1573d-c2b6-42a7-963b-e13c3587b5e9',
    score: '3.0', cs: 'CS-7',
    csDetail: `- **CS-7:** GRC (Governance, Risk, Compliance) — regulated delivery\n- DC hybrid location is a concern (not NJ/NY)`,
    fit: 'GRC PM engages CS-7 through compliance/governance. However DC hybrid is outside preferred NJ/NY geography. Specialized GRC domain.',
    rec: 'DO NOT APPLY — DC location concern + specialized GRC domain.',
    comp: 'Not confirmed.',
    notes: 'REJECTED; DC hybrid (location concern); GRC specialized domain; CS-7 only; unconfirmed batch mode',
    status: 'Descartado'
  },
  {
    num: 478, company: 'Palantir', slug: 'palantir-tpm-autonomous-systems-c2',
    role: 'TPM, Autonomous Systems C2',
    url: 'https://jobs.lever.co/palantir/9da1a482-4f3a-4804-8b5f-b9697d85fe61',
    score: '2.8', cs: 'CS-1',
    csDetail: `- **CS-1:** TPM role\n- Autonomous systems / command-and-control is highly specialized defense domain`,
    fit: 'Autonomous Systems C2 (command and control) is a highly specialized defense/military domain. While Palantir TPM engages CS-1, the domain specificity is too far from enterprise delivery.',
    rec: 'DO NOT APPLY — specialized defense/autonomy domain with no cv.md evidence.',
    comp: 'Not confirmed.',
    notes: 'REJECTED; specialized autonomous systems C2 domain; likely requires clearance; unconfirmed batch mode',
    status: 'Descartado'
  },
  {
    num: 479, company: 'MetLife', slug: 'metlife-pm-system-migrations-remote',
    role: 'Project Manager, System Migrations — NYC Remote',
    url: 'https://builtinnyc.com/job/project-manager-system-migrations/310842',
    score: '3.0', cs: 'CS-1, CS-2',
    csDetail: `- **CS-1:** PM for system migrations\n- **CS-2:** System migrations are cloud/data adjacent`,
    fit: 'System migrations PM could engage CS-2 through migration experience. However comp $66K–112K has low end well below floor ($100K FTE). Remote NYC is good.',
    rec: 'APPLY w/ caveats — comp concern: low end ($66K) below floor. Only if confirmed above $100K.',
    comp: '$66,000–$112,000/year. LOW END BELOW FLOOR ($100K).',
    notes: 'SECONDARY w/ COMP CONCERN; NYC remote; $66–112K (low end below floor); verify actual comp; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 480, company: 'J&J', slug: 'jnj-sr-project-manager-medtech-deliver',
    role: 'Sr Project Manager, MedTech Deliver',
    url: 'https://www.careers.jnj.com/en/jobs/r-084008/sr-project-manager-medtech-deliver/',
    score: '3.3', cs: 'CS-1, CS-7',
    csDetail: `- **CS-1:** Senior project management\n- **CS-7:** MedTech pharma regulated delivery`,
    fit: 'Senior PM at J&J MedTech. NJ location is local. Pharma regulation parallels Sanofi. MedTech product domain is specialized.',
    rec: 'APPLY w/ caveats — lead with Sanofi R&D experience.',
    comp: 'Not confirmed.',
    notes: 'SECONDARY; NJ; CS-1/CS-7; MedTech domain; unconfirmed batch mode',
    status: 'Evaluada'
  },
  {
    num: 481, company: 'J&J', slug: 'jnj-director-project-portfolio-mgmt-biosurgery',
    role: 'Director, Project Portfolio Management — Biosurgery',
    url: 'https://www.careers.jnj.com/en/jobs/r-099953/director-project-portfolio-management-biosurgery-ppmg-medtech-surgery/',
    score: '3.3', cs: 'CS-1, CS-5, CS-7',
    csDetail: `- **CS-1:** Director-level portfolio management\n- **CS-5:** Cross-functional at director level\n- **CS-7:** MedTech regulated delivery`,
    fit: 'Director Project Portfolio Management is a strong seniority match. NJ Hybrid location is local. Biosurgery domain is specialized. Portfolio management maps to program delivery at scale.',
    rec: 'APPLY w/ caveats — portfolio management maps to CS-1 at scale. Biosurgery domain gap.',
    comp: 'Not confirmed; J&J Director typically $150K–$220K+.',
    notes: 'SECONDARY; NJ hybrid; director level; biosurgery domain gap; CS-1/CS-5/CS-7; unconfirmed batch mode',
    status: 'Evaluada'
  },
];

for (const e of evals) {
  const reportContent = `# ${e.num} — ${e.company} — ${e.role}

**Date:** ${DATE}
**URL:** ${e.url}
**Score:** ${e.score}/5
**Verification:** unconfirmed (batch mode)
**PDF:** ❌

## Core Strength Engagement
${e.csDetail}

## Fit Assessment
${e.fit}

## Recommendation
${e.rec}

## Compensation
${e.comp}

## Notes
${e.notes}
`;

  const reportFile = join(REPORTS, `${String(e.num).padStart(3, '0')}-${e.slug}-${DATE}.md`);
  writeFileSync(reportFile, reportContent, 'utf8');

  const tsvLine = `${e.num}\t${DATE}\t${e.company}\t${e.role}\t${e.status}\t${e.score}/5\t❌\t[${e.num}](reports/${String(e.num).padStart(3, '0')}-${e.slug}-${DATE}.md)\t${e.notes}\n`;
  const tsvFile = join(TSV_DIR, `${String(e.num).padStart(3, '0')}-${e.slug}.tsv`);
  writeFileSync(tsvFile, tsvLine, 'utf8');
}

console.log(`Generated ${evals.length} reports and TSVs.`);
console.log(`Reports: ${REPORTS}`);
console.log(`TSVs: ${TSV_DIR}`);

const highPriority = evals.filter(e => parseFloat(e.score) >= 3.8);
const applyEligible = evals.filter(e => parseFloat(e.score) >= 3.5 && parseFloat(e.score) < 3.8);
const secondary = evals.filter(e => parseFloat(e.score) >= 3.0 && parseFloat(e.score) < 3.5);
const rejected = evals.filter(e => parseFloat(e.score) < 3.0 || e.status === 'Descartado');

console.log(`\nHIGH PRIORITY (3.8+): ${highPriority.length}`);
highPriority.forEach(e => console.log(`  ${e.num}: ${e.company} — ${e.role} (${e.score}/5)`));
console.log(`\nAPPLY-ELIGIBLE (3.5-3.7): ${applyEligible.length}`);
applyEligible.forEach(e => console.log(`  ${e.num}: ${e.company} — ${e.role} (${e.score}/5)`));
console.log(`\nSECONDARY (3.0-3.4): ${secondary.length}`);
secondary.forEach(e => console.log(`  ${e.num}: ${e.company} — ${e.role} (${e.score}/5)`));
console.log(`\nREJECTED (<3.0): ${rejected.length}`);
rejected.forEach(e => console.log(`  ${e.num}: ${e.company} — ${e.role} (${e.score}/5)`));
