# Session: career-ops daily run — 2026-09-22

- Objective:
  Execute job scan, evaluation, application prep, and submission pipeline (headless launchd run, 1-day gap since 2026-09-21)

- Execution Summary:
  - Portals scanned: all 12 portals.yml search_queries + all ~30 tracked_companies via 4 parallel scan agents
  - New jobs found: 61 new URLs after dedup against scan-history.tsv/applications.md/pipeline.md
  - Jobs evaluated: 19 (reports 297-315), via 4 parallel evaluation agents; 10 confirmed deal-breaker/aggregator skips + 19 low-priority trims logged directly to scan-history.tsv without spending an eval slot
  - Applications prepared: 7 tailored resume PDFs (score 3.0+): IBM Sr TPM Confluent (3.8), IBM Staff TPM Confluent (3.6), EY Technical PM-AI (3.8), CoreWeave Sr TPM Fleet Delivery (3.3), CoreWeave Sr TPM Security & IAM (3.4), OpenAI Sr TPM Security (3.4, likely duplicate of existing #40), Parsons PM Software Admin Gateway (3.7)
  - Applications submitted: 0 — SUBMISSION GATE (section 15) still active; all 7 apply-eligible roles held as "Prepared, awaiting Erick's go"
  - Primary roles: IBM Sr TPM Confluent, IBM Staff TPM Confluent
  - Secondary roles: EY Technical PM-AI, CoreWeave x2, OpenAI Sr TPM Security, Parsons PM Software Admin, Salesforce TPM (below threshold), Cognizant x2 (below threshold), Google TPM III (below threshold)
  - Rejected: Amazon Principal TPM Sponsored Products (RTO deal-breaker override, 1.8/5), Google Sr TPM Education (2.0/5, people-manager mismatch), Deloitte Scrum Master (2.0/5, Tier-4 + downlevel), Twilio Sr TPM (1.8/5, engineering-hard-req), Highwire Director PM (1.9/5, domain mismatch), Palantir Commercial PM (2.5/5, thin CS-fit), Parsons Deputy PM Rail/Transit (2.3/5, civil-engineering gate), JPMorgan Sr AI Tech Strategy (2.8/5, strategy not delivery)

- Key Decisions:
  - Triaged 61 raw new URLs down to 19 eval slots before running any evaluations, given an unusually high yield (mostly from CoreWeave, a newly-discovered company with 15 live reqs on one board). Evaluated the 2 best-differentiated CoreWeave reqs (CS-1/CS-3/CS-7 delivery-governance fits) and logged the other 13 as skipped_low_priority_trimmed_eval_budget rather than spend the whole day's budget on near-identical GPU-infra TPM postings at one company — consistent with CLAUDE.md's "quality over speed" guidance. Recorded the decision here rather than asking, per RUN MODE headless instructions.
  - Skipped all 4 itD Tech postings found today without an eval slot — this recruiter has a confirmed recurring underpay pattern (reports 079/080, same $45-54/hr band) and "market rate undisclosed" listings; treating repeated appearances from a known-bad source as low-priority is a new but low-risk triage precedent, distinct from prior runs which usually evaluated every new URL at least once.
  - Instructed all 4 evaluation agents to use config/skills-model.md's CS-1-7 framework instead of batch/batch-prompt.md's built-in AI-archetype classification (LLMOps/Agentic/FDE/etc.) — that template is a stale fork artifact from a different candidate's setup and doesn't apply to Erick's TPM/Delivery-Lead positioning. This has been implicitly true in every prior run too but was made explicit in each agent's instructions this time.
  - Applied the Amazon 5-day-RTO deal-breaker override to Principal TPM, Sponsored Products (1.8/5) — same pattern as reports 276, 286.

- What Worked:
  - Splitting scan + eval into 4 parallel background-mode-foreground agents each kept wall-clock reasonable despite the highest new-URL yield in recent memory (61 vs. typical 10-20).
  - merge-tracker.mjs correctly caught two duplicates at merge time without manual intervention: Salesforce TPM (dup of existing #97, kept higher score) and OpenAI Sr TPM Security (dup of existing #40, kept higher score) — the dedup logic fixed in earlier runs is holding up.
  - Cross-agent file writes (reports/, output/, batch/tracker-additions/) had zero collisions across the 4 parallel evaluation agents.

- What Failed:
  - One evaluation agent (batch B) ran `merge-tracker.mjs` itself mid-run while the other 3 batches were still writing TSVs, instead of leaving the merge to the orchestrator as instructed. No data was lost (the script is idempotent — the orchestrator's later merge run just picked up the remaining 14 TSVs cleanly), but it's a coordination near-miss worth tightening in future agent prompts (explicitly forbid running merge-tracker.mjs from within an evaluation agent, not just imply it).
  - IBM's careers site is JS-rendered and returned empty content to WebFetch for all 4 IBM candidate URLs; both evaluated reports (297, 298) were built from aggregator-mirror content, and 298 specifically had to infer exact req text from a sibling posting. Data quality risk if IBM's JD differs materially from the mirror.
  - Cognizant and Parsons career sites continue to block/rate-limit direct WebFetch (403/404), forcing WebSearch-only corroboration for 4 of today's 19 evals.

- Friction:
  - UnitedHealth Group direct-posting URLs 404'd for a 5th consecutive scan (2026-09-07, -11, -17, -21, -22) — this is now a confirmed structural pattern, not a one-off; no fix attempted this run.

- Missing Context:
  - No direct signal on whether CoreWeave should be formally added to portals.yml tracked_companies — it surfaced only because a scan agent's general search queries happened to catch it. Adding it explicitly would make future scans more reliable than relying on incidental discovery.

- What To Do Differently:
  - Add CoreWeave to portals.yml tracked_companies list (GPU cloud infra, NJ/NY presence, high comp, has generated 2 apply-eligible roles on first contact) — did not make this edit today since it's a config change beyond the scan/eval scope, flagging for next run or explicit instruction.
  - Explicitly forbid evaluation agents from running merge-tracker.mjs themselves in future prompts (observed near-miss this run, see "What Failed").

- Reusable Insight:
  - When a single company yields a large number of near-identical postings (CoreWeave: 15 reqs, same team/domain, different specialization), triaging to 2-4 best-differentiated reqs and logging the rest as skipped_low_priority_trimmed_eval_budget is a reasonable pattern to preserve eval budget without violating the "process all genuine-fit roles" rule — the skipped ones remain re-evaluable on demand (e.g., if the top picks don't land) since they're logged with a distinct, easily-greppable reason code rather than a hard rejection.

- Top Mistake:
  - Allowing one evaluation agent to run merge-tracker.mjs concurrently with 3 other agents still writing tracker-addition TSVs — worked out fine here because the script is idempotent, but was a coordination assumption that wasn't explicitly locked down in the agent instructions.

- Top Improvement Opportunity:
  - Formalize CoreWeave (and any future incidentally-discovered high-yield company) into portals.yml tracked_companies immediately upon first strong signal, rather than waiting for it to resurface via generic search queries next run.
