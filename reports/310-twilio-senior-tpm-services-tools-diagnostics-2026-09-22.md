# Evaluation: Twilio — Senior Technical Program Manager, Services Tools & Diagnostics

**Date:** 2026-09-22
**Score:** 1.8/5
**URL:** https://job-boards.greenhouse.io/twilio/jobs/8067440
**Verification:** unconfirmed (batch mode) — WebFetch retrieved full JD content directly from the Greenhouse posting. **Deadline discrepancy flagged:** the posting lists an application deadline of "July 25th (subject to change)," which is in the past relative to today (2026-09-22). WebSearch corroborates the posting is still live and indexed as of this evaluation — the same role (identical title, comp band, and description) appears on jobs.twilio.com directly, Glassdoor, and multiple third-party mirrors, with one source noting it was posted July 17, 2026. This strongly suggests the July 25 date is stale evergreen-posting boilerplate rather than an active close date, but **this could not be confirmed with certainty in batch mode (no Playwright access to check for a live "Apply" button or a closed-posting banner)**. Recommend the candidate verify directly before investing further time, independent of the CS-fit score below.
**Label:** [PRIMARY]

---

## Core Strength Engagement Test

| CS | Engaged? | Evidence from JD |
|---|---|---|
| CS-1 Enterprise Technical Program Delivery | PARTIAL | "Partner daily with GCS Program Managers, Technical Account Management, Professional Services and Twilio Engineering teams to turn director-level business requirements into reliable, auditable systems" — cross-functional coordination exists, but the role's core function is hands-on system-building, not program-level delivery ownership at Verisk's scale. |
| CS-2 Cloud & Data Platform (AWS + Snowflake) | NOT VISIBLE | JD names Grafana, Salesforce, Tableau, Looker, Airtable, and ClickHouse — no AWS or Snowflake. Treated as absent. −0.3. |
| CS-3 DevOps Delivery Governance | NOT VISIBLE | No CI/CD pipeline ownership, CAB, or release-governance language — the role is building diagnostic/automation tooling, not governing software release processes. |
| CS-4 Executive Reporting | PARTIAL | "Develop dashboards and analytics across Grafana, Salesforce, Tableau, Looker, and Airtable"; "instrument systems to measure technical and business outcomes" — dashboard-building is conceptually close to CS-4's Power BI evidence, though the JD's ask is building the analytics infrastructure itself (as an engineer), not consuming/designing executive-facing dashboards from a program-management seat. |
| CS-5 Cross-Functional Stakeholder Alignment in Regulated Environments | PARTIAL | Partners with GCS PMs, TAM, Professional Services, Engineering — real cross-functional pattern, but not framed as a regulated environment. |
| CS-6 SAFe / SPC6 | NO | Not mentioned. |
| CS-7 Regulated & Compliance-Aware Delivery | NO | Not mentioned. |

**CS engaged: 0 clean YES + 3 PARTIAL (CS-1, CS-4, CS-5)** → falls in the "1–2 engaged" band (below 3.0), and arguably closer to "0" given none of the PARTIALs are strong. CS-2 absent → −0.3.

## Role Summary

- **Title:** Senior Technical Program Manager, Services Tools & Diagnostics (Global Customer Success / GCS Strategy & Operations org).
- **Company:** Twilio.
- **Locations:** Remote-US (excludes San Francisco Bay Area, Oakland, San Jose).
- **Comp by region:** CO/HI/IL/MD/MA/MN/VT/DC $188,240–$235,300; **NY/NJ/WA/CA (outside Bay Area) $199,280–$249,100**; SF Bay Area $221,360–$276,700. Plus equity and bonus eligibility.
- **Scope:** Architect and build systems for account health monitoring, intelligent routing, knowledge retrieval, and workflow automation across TAM, Professional Services, and Engagement Management motions, including cost optimization. Explicitly: "Build AI workflows using the Anthropic Claude API, Claude Agent SDK." Design decision frameworks balancing autonomous systems with human oversight. Develop dashboards/analytics across Grafana, Salesforce, Tableau, Looker, Airtable.
- **Required:** 7+ years building production software or technical systems (platform engineering, solutions architecture, or hands-on TPM); production proficiency in Python and/or TypeScript with REST API expertise; hands-on experience building AI systems with LLMs; advanced SQL and ClickHouse; dashboard development across multiple platforms; strong engineering practices and ability to communicate technical concepts to executives. Per WebSearch corroboration, this is explicitly framed as: **"you'll write code every week, but your success is measured in GCS outcomes for customers, not a technology roadmap."**
- **Preferred:** Support/professional-services organization experience; Zendesk familiarity; AI system metrics/A-B testing; Twilio product or CPaaS/SaaS domain knowledge.

## CV Match

| JD Requirement | cv.md Evidence |
|---|---|
| 7+ years building production software, writing code weekly | **Hard gap.** cv.md shows zero hands-on software-engineering or coding evidence anywhere across 15+ years — Erick's background is technical program/delivery management, not engineering. |
| Production proficiency in Python/TypeScript, REST APIs | **Hard gap.** No coding-language evidence in cv.md. |
| Hands-on experience building AI systems with LLMs | BTII: "Led AI-driven business process automation initiatives using tools including Claude, ChatGPT, PowerApps, PowerAutomate and Microsoft Copilot" — real but tool-usage/adoption-level, not systems-building/engineering-level (BTII is also the de-emphasized current role). |
| Advanced SQL and ClickHouse | Sanofi/Verisk: SQL listed as a tool; no ClickHouse or "advanced" hands-on SQL engineering evidence. |
| Dashboard development (Grafana, Salesforce, Tableau, Looker, Airtable) | Verisk/Sanofi: Power BI (primary, strong), Tableau (Sanofi) — real dashboard evidence, but as a program-management consumer/designer of dashboards, not as the engineer building the underlying instrumentation. |
| Cross-functional partnership with PMs, TAM, Professional Services, Engineering | Verisk/Sanofi: extensive cross-functional coordination — transferable pattern. |

### Gaps
- **The role's own framing — "you'll write code every week" and "7+ years building production software" — is a hard, disqualifying gap.** This is fundamentally a hands-on engineering/technical-builder role wearing a "TPM" title, not a technical program manager role in the sense Erick's evidence base supports. This mirrors the pattern flagged in report #296 (Anthropic physical security): a title-match that masks a different core profession.
- No production coding language evidence anywhere in cv.md (Python, TypeScript, or otherwise).
- No ClickHouse or advanced SQL engineering evidence.

## Deal-Breaker Check

| Deal-breaker | Status |
|---|---|
| Below $60/hr C2C or $100K FTE | PASS — $199,280–$249,100 NY/NJ band FTE, well above floor and anchor. |
| Relocation outside NJ/NY Metro | PASS — remote-US eligible, NJ included. |
| On-site 4–5 days/week mandatory, no flexibility | PASS — remote-first role. |
| No Agile/Scrum practices | PASS — nothing suggests absence. |

No deal-breaker triggered — comp and location are both excellent. This is a clean CS-fit/hard-skills-gap reject, not a policy-driven one.

## Level and Positioning Strategy

- **Level detected:** Senior IC, engineering-adjacent — not aligned to Erick's natural level, which is delivery/program ownership rather than hands-on coding.
- **"Sell senior without lying" plan:** Not viable for this role. The JD's own qualifying language ("write code every week," "production proficiency in Python and/or TypeScript") is a bar cv.md cannot honestly clear. Attempting to bridge via BTII's AI-tool-adoption experience would overstate a de-emphasized, tool-usage-level activity as production engineering — this is explicitly against the positioning rules (BTII is never a lead proof point, and Tier 4 framing risk applies).
- **"If downleveled" plan:** Not applicable — there is no viable path to this role via downleveling; the gap is a different profession, not a seniority mismatch.

## Comp Assessment

$199,280–$249,100 (NY/NJ band, FTE) is excellent — well above both the $105K+ anchor and the $130–150K aspirational target ceiling. Comp alone does not justify pursuing a role the candidate cannot honestly qualify for on its stated minimum requirements.

## Resume Personalization Plan

**Not apply-eligible — score is below the 3.0 PDF-generation threshold. No PDF generated.**

This role should not be pursued regardless of comp strength: the qualifying bar ("7+ years building production software," "write code every week") cannot be honestly met from cv.md. Forcing a resume angle here would require either fabricating engineering depth or leading with BTII's AI-tool-adoption work as if it were systems engineering — both violate standing rules (never invent experience; BTII never a lead proof point). Recommend a clean skip.

## Interview Prep — STAR Story Priority

Not recommended to pursue this role, but if the candidate wants to explore a screening conversation regardless:
1. **Verisk cloud/DevOps modernization** (CS-1, CS-2, CS-3) — the only story that comes close to "technical systems" credibility, though it's infrastructure/program delivery, not application coding.
2. **Verisk Power BI executive dashboard implementation** (CS-4) — supports the dashboard-development ask, with the honest caveat that Erick designed/consumed dashboards as a program owner, not built the underlying data pipelines as an engineer.
3. **Sanofi Snowflake OneMesh migration** (CS-2, CS-5) — supports "technical systems" and cross-functional partnership themes.

**Red-flag question to expect:** "Show me code you've written in production." Erick has no answer to this — this is the clearest signal this role is not a fit, and it should be surfaced to the candidate as a reason to skip rather than something to prep around.

## Score Breakdown

| Dimension | Score |
|---|---|
| CS engagement (0 YES + 3 weak PARTIAL) | 2.1 base |
| CS-2 absent | −0.3 |
| Hard-skills disqualifier (no production coding evidence against the JD's own stated minimum qualification) | included in base — not force-scored higher despite strong comp |
| Comp (excellent, but not the blocking issue) | no positive adjustment |
| Deal-breaker override | none |
| **Global** | **1.8/5 — SKIP recommended (core function is hands-on software engineering, not TPM/delivery; hard qualifications gap). Verify posting is still accepting applications (stale July 25 deadline) before any further consideration.** |
