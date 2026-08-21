---
title: "HUB Operating Model Blueprint"
blueprint_id: BP-005
status: draft
layer: blueprint
area: operations
source_task: "[[04-project-management/tasks/BP-005_HUB_Operating_Model_Blueprint]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [STR-007, PRD-005, PRD-007, GOV-008, LCH-002]
---

# BP-005 — HUB Operating Model Blueprint

> [!warning] Maturity boundary
> This is an operating blueprint and target-state design. It describes the minimum accountable system that must be refined, staffed, instrumented and approved; it does not claim that the [[Plataforma HUB]] or any service level is currently in production.

This model turns the HUB chain — **diagnosticar → planejar → conectar → implementar → medir → reconhecer → evoluir** — into a repeatable delivery system across HUB brand and strategy, [[HUB Negócios]], [[Instituto HUB]] and [[Plataforma HUB]]. It preserves human accountability for interpretation, curation, matching, high-impact decisions and recognition while distinguishing manual work, partner work and future automation.

## 1. C.A.O.S. stages mapped to operating roles, activities, artifacts and decisions

The stages below are service-operating states, not merely customer-facing screens. Every stage has one accountable operating owner, named contributors, an artifact that proves the handoff and a decision that permits progression. Role titles are capability placeholders until the authority map closes [[STR-007]] and [[GOV-008]].

| C.A.O.S. stage | Accountable role | Core activities | Required artifacts / evidence | Gate decision |
|---|---|---|---|---|
| **Contexto** | Engagement Lead | Qualify the institution or company, define sponsor and scope, map actors, consent and constraints, establish baseline and success question. | Opportunity brief; stakeholder/tenant map; consent and purpose record; baseline data inventory; risk and dependency log. | Accept, re-scope or reject the engagement; confirm sponsor, lawful operating basis and diagnostic scope. |
| **Arquitetura** | Solution Architect / Method Lead | Translate diagnosis into target state, journey, intervention portfolio, measures, service blueprint, responsibilities and commercial boundary. | C.A.O.S. plan; capability and gap map; prioritized backlog; metric contract; RACI/decision-rights draft; statement of work. | Approve the plan, budget, measures, decision rights and readiness prerequisites before execution. |
| **Operação** | Delivery Lead | Run recruitment/onboarding, evidence collection, curation, matching, implementation and follow-through; manage queues, partner work and exceptions. | Onboarding checklist; evidence register; curated shortlist; match rationale; action plan; implementation log; issue and escalation records. | Continue, pause, override, replace or escalate an intervention based on evidence, risk and capacity. |
| **Sustentação** | Outcomes & Trust Lead | Measure adoption and outcomes, reconcile evidence, support users, manage incidents, recognize only through independent controls, capture learning and renew or close. | Outcome report; lineage and reconciliation pack; support/incident log; Selo HUB review packet where applicable; lessons-learned record; renewal/closure decision. | Publish, restrict or withdraw a result; renew, redesign, graduate or close the journey. |

### Stage handoffs and operating modes

1. **Manual baseline (initial delivery):** operators use controlled templates, queues and review checklists. A second person reviews high-impact outputs. No spreadsheet or conversation is the sole system of record once a production workflow is approved.
2. **Partner-assisted delivery:** partners may recruit participants, supply specialist capacity, implement an intervention or provide source data. The HUB accountable owner retains acceptance, evidence, conflict and escalation responsibility; partners cannot silently alter definitions, claims or decision gates.
3. **Future automation:** [[HUB Intelligence]], [[HUB Journey]], [[HUB Solutions]], [[HUB Connections]], [[HUB Academy]] and [[HUB Recognition]] may automate routing, reminders, validation and low-risk recommendations only after a documented gate demonstrates quality, reversibility, auditability, LGPD compliance and a human override. Automation proposes; accountable humans approve high-impact decisions.

### Operating record and decision states

Each case, program or opportunity has a stable identifier, owner, current stage, next action, due date, evidence status, risk status and decision history. Valid states are **draft, ready, active, blocked, under-review, approved, rejected, paused, withdrawn, completed** and **closed**. A transition requires actor, timestamp, reason, evidence references and (where relevant) reviewer. This gives the platform and operators a common event vocabulary without implying that the event implementation already exists.

## 2. Responsibilities for sales, onboarding, diagnosis, curation, matching, implementation, measurement, support and escalation

The following service blueprint makes critical handoffs visible. “Manual” is the default target for initial operations; “partner” identifies externally delivered work; “future automation” identifies an eligible assist, not a current promise.

| Capability | HUB accountable owner | Manual responsibilities | Partner responsibilities | Future automation boundary | Handoff / evidence |
|---|---|---|---|---|---|
| Sales and qualification | Commercial Lead | Qualify buyer, budget, use case, sponsor, route and claims; avoid promising unsupported ROI or Selo outcomes. | Introduce qualified opportunities and disclose relationship or commercial dependency. | Lead scoring and reminders may prioritize work; no automatic acceptance or claim. | Qualified opportunity brief → Contexto owner. |
| Onboarding and recruitment | Client Success / Onboarding Lead | Confirm contract, roles, consent, access, cohort, training and support channel; recruit participants fairly and document non-response. | Provide participant access or local facilitation under approved scripts and data terms. | Invitations, eligibility checks and reminders may be automated with opt-out and audit. | Onboarding completion record; consent/purpose map; unresolved-access queue. |
| Diagnosis | Diagnosis Lead | Run questionnaire/interviews, validate evidence, interpret context and record uncertainty or missingness. | Provide domain expertise or source evidence, not an unreviewed diagnosis. | Anomaly detection and summarization may assist; diagnosis and sensitive inference require review. | Diagnostic report and evidence register → Architecture gate. |
| Curation | Solutions / Curation Lead | Define selection criteria, vet suppliers/specialists/content, check conflicts, availability, price and fit; maintain approved/rejected rationale. | Submit capabilities, evidence, terms and delivery capacity; comply with quality and conflict controls. | Search, taxonomy suggestions and duplicate detection may assist; ranking cannot replace curator approval. | Versioned shortlist, provenance and conflict declaration → Matching. |
| Matching and connection | Connections Lead | Confirm demand, capacity, consent and fit; explain recommendation; make introduction and track acceptance, refusal and conflict. | Respond within agreed window, disclose conflicts, honour agreed scope and report outcome. | Candidate retrieval and fit scoring may assist; accountable reviewer approves high-impact or consequential matches. | Match record, rationale, consent, response and follow-through task. |
| Implementation | Delivery / Implementation Lead | Translate plan into milestones, assign owners, manage dependencies, verify completion and intervene when adoption lags. | Deliver contracted work, provide status/evidence and escalate delivery risk promptly. | Workflow routing, reminders and progress alerts may automate; scope change stays human-approved. | Statement of work, milestone log, acceptance evidence and change record. |
| Measurement and value | Outcomes & Measurement Lead | Define denominator and baseline, collect evidence, reconcile source lineage, separate potential/influenced/validated/realized value and report caveats. | Supply source data and attest to delivery/outcomes under data-purpose constraints. | Data quality checks, metric calculations and alerts may automate once definitions are versioned. | Metric run, lineage pack, evidence status, approval and publication record. |
| Support | Support Lead | Operate intake, triage, knowledge base, user communications, status updates and closure confirmation. | First-line support only where contractually assigned; route platform, privacy and safety issues to HUB. | Categorization, duplicate detection and status notifications may automate; users retain a human channel. | Ticket, severity, owner, timestamps, resolution and user confirmation. |
| Escalation and incident response | Incident Commander (per incident) | Declare severity, protect participants/data, coordinate technical, legal, client and communications responders, preserve evidence and run post-incident review. | Contain partner-side impact, preserve logs and notify HUB within the agreed window; never investigate its own conflict without independent review. | Monitoring and alerting may detect; automated containment is limited to pre-approved reversible actions. | Incident record, timeline, decisions, notifications, root cause, corrective action and closure approval. |

### Human-in-the-loop, overrides and appeals

The review queue must include diagnosis conclusions, eligibility exclusions, sensitive or high-impact recommendations, matches affecting access or opportunity, measurement claims, public claims and every [[Selo HUB]] decision. The reviewer is accountable for the decision, not merely for clicking approval. A reviewer must be competent, conflict-free, able to inspect source evidence and able to record rationale.

An operator may **override** a recommendation when evidence, context or safety requires it. The override records original result, new result, reason, evidence, reviewer and expiry/review date. A participant, client or partner may **appeal** an exclusion, match, metric or recognition decision through a documented channel. Appeals pause publication or execution where harm could result, route to an independent or differently authorized reviewer, and produce a written outcome. Coordinate with BP-006: define the final authority, independence, retention and legal treatment for these queues without presuming its governance blueprint.

## 3. Founder responsibilities versus delegated capabilities

Founder involvement is a design constraint to manage, not an operating control. Founders set intent and protect coherence; they must not remain the undocumented approval path for routine delivery. The capability map below is the target delegation boundary.

| Decision / capability | Founder responsibility | Delegated owner and evidence of delegation | Escalate to founder only when |
|---|---|---|---|
| Purpose, positioning and method integrity | Set the promise, C.A.O.S. principles and non-negotiable standards. | Strategy/Method Lead maintains versioned method, change log and training. | A proposed change alters the core promise, method or group architecture. |
| Portfolio and commercial priorities | Choose strategic focus and approve exceptional risk appetite. | Commercial and Portfolio Leads maintain offer, capacity and pipeline decisions. | A decision materially changes unit economics, brand risk or a launch-critical route. |
| Client delivery | Sponsor strategic relationships and unblock exceptional institutional issues. | Engagement and Delivery Leads own cases, milestones, quality and renewal evidence. | Contractual, reputational or relationship exposure exceeds delegated threshold. |
| Product and automation | Define outcomes and guardrails; sponsor investment. | Product/Platform Lead owns backlog, release gates, access and rollback evidence. | A release changes high-impact decisions, data purpose, tenant boundaries or public claims. |
| Data, intelligence and measurement | Require evidence discipline and prohibit overstated value. | Data/Measurement Lead owns definitions, lineage, quality exceptions and publication packet. | A claim is contested, causal/financial, materially uncertain or outside approved policy. |
| Trust, legal and recognition | Protect independence and ethical boundaries. | Trust/Governance Lead and independent evaluator own reviews, recusals, appeals and control tests. | A conflict, breach, Selo decision or legal exposure cannot be resolved within the approved forum. Coordinate with BP-006. |
| People, succession and capability | Identify successors and fund capability development. | Capability owners maintain coverage map, runbooks, cross-training and backup assignment. | No qualified delegate exists for a critical activity or a succession event threatens continuity. |

Delegation is valid only when authority, competence, capacity, system access, budget threshold, backup and escalation route are recorded. Every critical activity has exactly one accountable owner even when many contributors participate. This directly addresses [[STR-007]] and [[GOV-008]]; the names and limits remain refinement work until accepted by the relevant governance forum.

## 4. Service levels, exception paths, incident responsibilities and operational evidence

### Target service levels (to be calibrated during refinement)

These are planning targets for a first controlled service, not current performance claims. The final values must be agreed per offer, client tier, timezone and partner contract.

| Service | Target response / completion | Measurement | Breach treatment |
|---|---|---|---|
| Sales qualification acknowledgement | 1 business day; qualification decision within 5 business days after sufficient information. | CRM timestamps and disposition. | Commercial Lead reviews queue and informs buyer; repeated breach triggers capacity review. |
| Onboarding access or issue | Acknowledge within 1 business day; resolve or provide plan within 3 business days. | Onboarding and support events. | Pause stage progression; Client Success Lead owns recovery. |
| Evidence review / diagnosis clarification | Acknowledge within 2 business days; standard review within 10 business days. | Review queue age and evidence completeness. | Mark blocked/under-review; no recommendation released without adequate evidence. |
| Curation or matching request | Acknowledge within 1 business day; shortlist or reasoned no-match within 5 business days. | Queue timestamps, shortlist version and refusal reason. | Escalate capacity/conflict; never substitute an unvetted provider silently. |
| Implementation status | Weekly status for active work; material risk communicated within 1 business day. | Milestone and issue logs. | Delivery Lead invokes change, pause or recovery plan. |
| Support | Urgent/safety/privacy issue acknowledgement within 1 hour target; high priority within 4 business hours; normal within 1 business day. | Ticket severity and timestamps. | Incident Commander or Trust Lead takes ownership based on severity. |
| Incident containment | Declare severity and commander immediately on detection; contain critical impact within approved recovery target. | Incident timeline, monitoring and runbook steps. | Notify affected parties per approved legal/contractual rules; launch post-incident review. |
| Measurement publication | Draft report within agreed reporting cadence; approval before external release. | Metric run, lineage and sign-off records. | Restrict or withdraw claim; open data/measurement exception. |

### Exception paths

- **Insufficient evidence:** mark the case blocked, state the missing evidence and owner, offer a bounded discovery activity, and prohibit a definitive diagnosis, match or value claim.
- **Capacity shortage:** queue by agreed priority and fairness rule, offer a partner or alternate intervention only after vetting, or re-scope with client approval. No silent substitution.
- **Conflict of interest:** declare and remove the conflicted person/partner; assign an independent reviewer; preserve the decision record. Selo work cannot be commercially conditioned.
- **Consent, privacy or access failure:** stop the affected data flow, minimize exposure, record the incident/DSAR path and resume only after an authorized decision. Coordinate with BP-006 on legal authority and controls.
- **Unsafe, discriminatory or materially harmful result:** suppress release, notify the Incident Commander and Trust Lead, investigate, allow appeal and retain the complete audit trail.
- **Partner failure:** activate a fallback provider or internal operator, preserve client continuity, record contractual impact and review concentration risk.
- **Metric disagreement:** freeze publication, compare definitions and lineage, label uncertainty, obtain measurement review and version the corrected result.
- **System outage or bad release:** use the release runbook to isolate, roll back or invoke manual fallback; reconcile events after recovery. This is a required target under [[LCH-002]], not evidence of present deployability.

### Incident responsibilities

The first person detecting a credible incident records it and alerts the Support Lead or on-call channel. The Incident Commander owns coordination and timeline; the Platform/Technology owner owns containment and restoration; the Data Steward owns source integrity, replay and reconciliation; the Trust/Governance owner assesses LGPD, contractual and notification implications; the Client Lead communicates with the affected institution; Communications releases only approved statements; the accountable executive accepts residual risk and closure. No partner or operator may close an incident affecting its own accountability without independent review. Coordinate with BP-006: finalize forum membership, notification authority and retention requirements.

### Operational evidence pack

Readiness evidence must be independently inspectable and linked to the case or release: owner/backup matrix; SOP and runbook version; training/competence record; consent and access record; source and evidence lineage; queue and SLA timestamps; decision, override and appeal log; partner vetting and conflict check; implementation acceptance; metric calculation and approval; support tickets; incident timeline; release, rollback and reconciliation results; retrospective actions. Evidence retention, access and deletion follow approved [[LGPD]] purpose and lifecycle rules. A green dashboard alone is not evidence of causal impact, financial value or operational readiness.

## 5. Connections to product capabilities, data events, financial assumptions and governance controls

### Product and data traceability

Every operating action should map to a platform capability and canonical event, even while the initial workflow is manual. At minimum: `case_created`, `consent_recorded`, `participant_onboarded`, `diagnosis_submitted`, `evidence_reviewed`, `plan_approved`, `solution_curated`, `match_proposed`, `match_accepted`, `implementation_milestone_updated`, `support_ticket_opened`, `incident_declared`, `metric_calculated`, `claim_approved`, `recognition_reviewed` and `journey_closed`. Events require stable identity, actor, tenant/entity, timestamp, version, purpose, source, decision status and correlation ID. DAT-* contracts, canonical keys and lineage are dependencies of refinement; this blueprint does not invent their schema.

The operator console must expose queues, ownership, evidence completeness, next action, risk, SLA age, review status, overrides, appeals and audit history. Participant and client experiences must expose only the data and decisions appropriate to their role. Future automation is admitted through a capability gate: defined input/output, quality baseline, human owner, fallback, monitoring, rollback, audit and data-purpose review.

### Financial connection

Operating records feed commercial and financial logic without conflating activity with value. Sales and contracts identify revenue type (subscription, implementation, marketplace, media/experience or restricted [[Instituto HUB]] funding); implementation effort supplies cost-to-serve and capacity assumptions; measurement supplies evidence for potential, influenced, validated and realized value. The operating model must not convert a match, recommendation, adoption event or illustrative ROI into realized cash or causal impact without the approved financial and measurement method. Finance receives a monthly reconciliation pack: contracted scope, delivery status, recognized revenue, direct effort, partner cost, unresolved credits, evidence status and forecast confidence. Coordinate with BP-001 and the financial blueprint on thresholds and recognition rules.

### Governance connection

Operational owners execute controls; governance approves the rules and independent challenge. Critical controls include purpose limitation and consent propagation, tenant and role access, source stewardship, correction/replay, retention/deletion, conflict/recusal, human review, claims publication, incident notification, partner liability and Selo independence. Each control has an owner, test, frequency, evidence location, exception treatment and approval state. Coordinate with BP-006: governance-boundary items in this section are explicit handoff points, not settled governance policy.

## 6. Open Assumptions and Unresolved Decisions

All assumptions below remain open and are linked to the supplied gap IDs. They are operating hypotheses for refinement, not claims of capability.

| Assumption / unresolved decision | Affected gap IDs | Refinement action |
|---|---|---|
| One accountable owner and qualified backup can be assigned to every critical activity. | [[STR-007]], [[GOV-008]] | Build and approve the capability, authority, coverage and succession map; test a no-founder handoff. |
| Initial delivery can be staffed with trained operators before automation is available. | [[PRD-005]], [[LCH-002]] | Cost and capacity-model the manual service; write SOPs, training checks and queue coverage targets. |
| Exact C.A.O.S. stage exit criteria and evidence thresholds can be standardized across offers. | [[PRD-005]], [[PRD-007]] | Run at least one service blueprint per launch offer and approve common state transitions and exceptions. |
| High-impact diagnosis, matching, measurement and recognition decisions can be reviewed without conflicts. | [[PRD-007]], [[GOV-008]] | Define review queues, competency rules, recusals, override/appeal policy and audit tests; coordinate with BP-006. |
| Partner capacity and data contributions can be governed with fallback routes and concentration limits. | [[PRD-005]], [[GOV-008]] | Create partner operating agreements, vetting checklist, SLA, evidence contract, exit and fallback playbook. |
| Target service levels are economically viable and can be measured from reliable timestamps. | [[PRD-005]], [[LCH-002]] | Baseline demand, queue volume, staffing, partner response, support load and recovery targets before committing externally. |
| The platform can expose the queues, audit trail, events, permissions and rollback needed by operators. | [[PRD-007]], [[LCH-002]] | Convert the operating blueprint into product acceptance criteria, event contracts, environment controls and a release runbook. |
| Incident command, legal notification, data stewardship and client communication can operate within one forum. | [[GOV-008]], [[LCH-002]] | Define on-call roster, severity matrix, notification decision rights, drills, evidence retention and post-incident review. Coordinate with BP-006. |
| Measurement and financial evidence will be sufficient to support approved value claims without double counting. | [[PRD-005]], [[PRD-007]] | Link operational evidence to metric lineage, value-state rules and finance sign-off; label uncertainty in every report. |
| Selo HUB evaluation can remain independent from commercial implementation and sales incentives. | [[PRD-007]], [[GOV-008]] | Produce the independent evaluator, conflict, appeal, withdrawal, payment and publication controls with BP-006. |

## 7. Cross-Blueprint Dependencies

| Dependency | Operating impact | Coordination rule |
|---|---|---|
| [[01-blueprint/strategy/HUB_Project_Blueprint_Foundation]] | Supplies C.A.O.S., units, modules, actors, maturity boundary and evidence principles. | This document operationalizes the foundation; later approved strategy decisions supersede assumptions here. |
| BP-001 — offer/revenue blueprint | Defines buyer, offer, revenue type, pricing and delivery economics. | Align qualification, scope, cost-to-serve, renewal and financial evidence; do not invent final prices or recognition rules. |
| BP-002 — product/journey blueprint | Defines user journeys, product boundaries and module behavior. | Translate journey states into queues, SOPs, acceptance criteria and human/automation boundaries; resolve [[PRD-005]] and [[PRD-007]] jointly. |
| BP-003 — data/intelligence blueprint | Defines canonical entities, events, metrics, lineage and model controls. | Align operational evidence and event vocabulary; do not treat conceptual events as implemented capability. |
| BP-004 — technology architecture blueprint | Defines environments, integrations, reliability, security and observability. | Use its contracts for release, monitoring, replay, rollback and support; [[LCH-002]] remains open until tested. |
| BP-006 — governance/legal/trust blueprint | Defines authority, entity boundaries, LGPD, liability, IP, human review and Selo independence. | **Coordinate with BP-006:** all decision rights, incident notification, appeals, recusal, retention and Selo boundaries are open points here; this model assigns operating touchpoints only. |
| BP-008 — launch/readiness blueprint | Defines integrated launch gates, evidence package and approval workflow. | Feed SOP, staffing, SLA, support, incident, rollback and operational evidence into the readiness review. |
| [[00-project-control/gap-register/HUB_Project_Gap_Register]] and individual gaps | Provides closure conditions and traceability. | Keep [[STR-007]], [[PRD-005]], [[PRD-007]], [[GOV-008]] and [[LCH-002]] open until evidence, owner acceptance and approval conditions pass. |

### Blueprint exit condition

BP-005 is ready to move from blueprint to refinement when each critical activity has one accountable owner and backup, each C.A.O.S. handoff has a service blueprint and evidence contract, exception and incident paths have been exercised on paper, manual/partner/automation boundaries are approved, and launch operations can demonstrate a deployable, supportable, monitorable and reversible workflow. Until then, the HUB operating model is a target to be tested—not a claim that current capability exists.
