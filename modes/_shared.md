# Shared Context -- career-ops

<!-- ============================================================
     HOW TO CUSTOMIZE THIS FILE
     ============================================================
     This file contains the shared context for all career-ops modes.
     Before using career-ops, you MUST:
     1. Fill in config/profile.yml with your personal data
     2. Create your cv.md in the project root
     3. (Optional) Create article-digest.md with your proof points
     4. Customize the sections below marked with [CUSTOMIZE]
     ============================================================ -->

## Sources of Truth (ALWAYS read before evaluating)

| File | Path | When |
|------|------|------|
| cv.md | `cv.md` (project root) | ALWAYS |
| article-digest.md | `article-digest.md` (if exists) | ALWAYS (detailed proof points) |
| profile.yml | `config/profile.yml` | ALWAYS (candidate identity and targets) |
| **skills-model.md** | `config/skills-model.md` | **ALWAYS — primary decision framework for scoring, resume generation, and interview prep** |

**RULE: NEVER hardcode metrics from proof points.** Read them from cv.md + article-digest.md at evaluation time.
**RULE: For article/project metrics, article-digest.md takes precedence over cv.md** (cv.md may have older numbers).
**RULE: skills-model.md defines Core Strengths (CS-1 through CS-7). NEVER override Tier 1 without explicit candidate instruction.**
**RULE: All resume outputs must open with CS-1 + CS-2 in the summary. Never open with Agile coaching identity.**
**RULE: Tier 4 skills (coaching/instruction, Salesforce admin, non-profit PM, MS Access) are excluded from all senior TPM outputs by default.**

---

## North Star -- Target Roles

Roles are prioritized by alignment to Core Strengths (see `config/skills-model.md`). Roles engaging CS-1, CS-2, CS-3 simultaneously are highest priority. Coaching-primary roles are lowest priority unless comp and title justify it.

| Priority | Archetype | Core Strengths Engaged | What they buy |
|----------|-----------|----------------------|---------------|
| **1 — Primary** | **Senior Technical Program Manager / Delivery Lead** | CS-1, CS-2, CS-3, CS-4, CS-5, CS-7 | End-to-end delivery owner across cloud, DevOps, and data programs at enterprise scale |
| **1 — Primary** | **Program Manager** | CS-1, CS-4, CS-5 | Multi-workstream program driver with VP-level reporting and $500K–$3M budget accountability |
| **2 — High** | **AI / Claude AI PM or Architect** | CS-1, CS-4, CS-5 | PM who bridges enterprise delivery discipline with AI adoption and tooling governance |
| **3 — Standard** | **Agile Coach / SAFe Consultant (SPC6)** | CS-6, CS-5, CS-1 | SPC6-certified transformation lead — org-level, not team-level; must be at $130K+ to qualify |
| **3 — Standard** | **Scrum Master** | CS-6, CS-1 (partially) | Delivery-focused SM with data-driven retrospectives and backlog governance; viable at $90K+ C2C |
| **4 — Fallback** | **Project Coordinator** | CS-5 (partially) | Operational backbone for multi-team programs; only if comp compensates for lower title ceiling |

### Adaptive Framing by Archetype

> **Concrete metrics: read from `cv.md` + `article-digest.md` at evaluation time. NEVER hardcode numbers here.**

| If the role is... | Emphasize about the candidate... | Proof point sources |
|-------------------|----------------------------------|---------------------|
| Platform / LLMOps | Production systems builder, observability, evals, closed-loop | article-digest.md + cv.md |
| Agentic / Automation | Multi-agent orchestration, HITL, reliability, cost | article-digest.md + cv.md |
| Technical AI PM | Product discovery, PRDs, metrics, stakeholder mgmt | cv.md + article-digest.md |
| Solutions Architect | System design, integrations, enterprise-ready | article-digest.md + cv.md |
| Forward Deployed Engineer | Fast delivery, client-facing, prototype to prod | cv.md + article-digest.md |
| AI Transformation Lead | Change management, team enablement, adoption | cv.md + article-digest.md |

<!-- [CUSTOMIZE] Map YOUR specific projects/articles to each archetype above -->

### Exit Narrative (use in ALL framings)

<!-- [CUSTOMIZE] Replace with YOUR narrative. Examples:
     - "Built and sold my SaaS after 5 years. Now focused on applied AI at scale."
     - "Led engineering at a Series B startup through 10x growth. Now seeking my next challenge."
     - "Transitioned from consulting to building product. Looking for high-ownership roles."
     Read from config/profile.yml → narrative.exit_story -->

Use the candidate's exit story from `config/profile.yml` to frame ALL content:
- **In PDF Summaries:** Bridge from past to future -- "Now applying the same [skill] to [JD domain]."
- **In STAR stories:** Reference proof points from article-digest.md
- **In Draft Answers (Section G):** The transition narrative should appear in the first response.
- **When the JD asks for "entrepreneurial", "ownership", "builder", "end-to-end":** This is the #1 differentiator. Increase match weight.

### Cross-cutting Advantage

Frame profile as **"Senior TPM who delivers cloud and data platform programs at enterprise scale"** — adapts framing to role context, never to coaching identity:
- For Senior TPM: "end-to-end delivery owner — roadmap to production, $3M budget, 15-17 cross-functional teams, 4 releases/year"
- For Program Manager: "multi-workstream program driver with Power BI executive visibility and VP-level stakeholder alignment"
- For AI PM: "enterprise delivery discipline applied to AI adoption programs — governance, reporting, cross-functional coordination"
- For Agile Coach / RTE: "SPC6 transformation lead — coached ARTs at portfolio scale, not classroom theory"

**CRITICAL: Never frame as trainer or instructor in high-value applications. BTII is a current role but must not define the positioning.**

### Portfolio as Proof Point (use in high-value applications)

<!-- [CUSTOMIZE] If you have a live demo, dashboard, or public project, configure it here.
     Example:
     dashboard:
       url: "https://yoursite.dev/demo"
       password: "demo-2026"
       when_to_share: "LLMOps, AI Platform, observability roles"
     Read from config/profile.yml → narrative.proof_points and narrative.dashboard -->

If the candidate has a live demo/dashboard (check profile.yml), offer access in applications for relevant roles.

### Comp Intelligence

<!-- [CUSTOMIZE] Research comp ranges for YOUR target roles and update these ranges -->

**General guidance:**
- Use WebSearch for current market data (Glassdoor, Levels.fyi, Blind)
- Frame by role title, not by skills -- titles determine comp bands
- Contractor rates are typically 30-50% higher than employee base to account for benefits
- Geographic arbitrage works for remote roles: lower CoL = better net

### Negotiation Scripts

<!-- [CUSTOMIZE] Adapt these to your situation -->

**Salary expectations (general framework):**
> "Based on market data for this role, I'm targeting [RANGE from profile.yml]. I'm flexible on structure -- what matters is the total package and the opportunity."

**Geographic discount pushback:**
> "The roles I'm competitive for are output-based, not location-based. My track record doesn't change based on postal code."

**When offered below target:**
> "I'm comparing with opportunities in the [higher range]. I'm drawn to [company] because of [reason]. Can we explore [target]?"

### Location Policy

<!-- [CUSTOMIZE] Adapt to your situation. Read from config/profile.yml → location -->

**In forms:**
- Binary "can you be on-site?" questions: follow your actual availability from profile.yml
- In free-text fields: specify your timezone overlap and availability

**In evaluations (scoring):**
- Remote dimension for hybrid outside your country: score **3.0** (not 1.0)
- Only score 1.0 if JD explicitly says "must be on-site 4-5 days/week, no exceptions"

### Time-to-offer priority
- Working demo + metrics > perfection
- Apply sooner > learn more
- 80/20 approach, timebox everything

---

## Global Rules

### NEVER

1. Invent experience or metrics
2. Modify cv.md or portfolio files
3. Submit applications on behalf of the candidate
4. Share phone number in generated messages
5. Recommend comp below market rate
6. Generate a PDF without reading the JD first
7. Use corporate-speak
8. Ignore the tracker (every evaluated offer gets registered)

### ALWAYS

0. **Cover letter:** If the form has an option to attach or write a cover letter, ALWAYS include one. Generate PDF with the same visual design as the CV. Content: JD quotes mapped to proof points, links to relevant case studies. 1 page max.
1. Read cv.md, article-digest.md (if exists), and **config/skills-model.md** before evaluating any offer.
1b. **First evaluation of each session:** Run `node cv-sync-check.mjs` with Bash. If it reports warnings, notify the candidate before continuing.
2. **Apply skills-model.md Core Strength Engagement Test before scoring.** Count CS-1 through CS-7 engaged by the role. Use as score floor (see skills-model.md Scoring Rules).
3. Detect the role archetype and adapt framing per skills-model.md Interview Prep Rules.
4. Cite exact lines from CV when matching.
5. Use WebSearch for comp and company data.
6. Register in tracker after evaluating.
7. Generate content in the language of the JD (EN default).
8. Be direct and actionable -- no fluff.
9. When generating English text (PDF summaries, bullets, LinkedIn messages, STAR stories): native tech English. Short sentences, action verbs, no unnecessary passive voice.
9b. **Case study URLs in PDF Professional Summary:** If the PDF mentions case studies or demos, URLs MUST appear in the first paragraph. All URLs with `white-space: nowrap` in HTML.
10. **Tracker additions as TSV** -- NEVER edit applications.md to add new entries. Write TSV in `batch/tracker-additions/` and `merge-tracker.mjs` handles the merge.
11. **Include `**URL:**` in every report header** -- between Score and PDF.
12. **Resume summaries always open with CS-1 + CS-2.** Never open any resume or cover letter with Agile coaching or training identity.
13. **BTII (current role) is always listed last** in experience sections and never used as a lead proof point in summaries or highlights.

### Tools

| Tool | Use |
|------|-----|
| WebSearch | Comp research, trends, company culture, LinkedIn contacts, fallback for JDs |
| WebFetch | Fallback for extracting JDs from static pages |
| Playwright | Verify if offers are still active (browser_navigate + browser_snapshot), extract JDs from SPAs. **CRITICAL: NEVER launch 2+ agents with Playwright in parallel -- they share a single browser instance.** |
| Read | cv.md, article-digest.md, cv-template.html |
| Write | Temporary HTML for PDF, applications.md, reports .md |
| Edit | Update tracker |
| Bash | `node generate-pdf.mjs` |
