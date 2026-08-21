---
title: "HUB Product and Capability Blueprint"
blueprint_id: BP-002
status: draft
layer: blueprint
area: product
source_task: "[[04-project-management/tasks/BP-002_HUB_Product_and_Capability_Blueprint]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [PRD-001, PRD-002, PRD-003, PRD-004, PRD-005, PRD-007]
---

# BP-002 — HUB Product and Capability Blueprint

> [!warning] Maturity and accountability boundary
> This is a product blueprint, not evidence of a production implementation. Existing sketches, dashboards and workflows are design references only. Any high-impact interpretation, recommendation, match, eligibility decision, assessment, public claim or recognition decision remains the responsibility of an identified human reviewer until approved controls and evidence exist.

This blueprint defines [[Plataforma HUB]] as a connected capability system supporting [[HUB Negócios]], [[Instituto HUB]] and the wider HUB ecosystem. It preserves the chain `diagnosticar → planejar → conectar → implementar → medir → reconhecer → evoluir` and the C.A.O.S. method while keeping offer boundaries, data permissions, and service delivery explicit. **Depends on BP-001:** offer names, commercial packaging, buyer commitments and revenue mechanics must be reconciled with the offer architecture when BP-001 is approved; this document does not invent them.

## 1. Shared platform core and module boundaries

### 1.1 Shared platform core

The core is the reusable operating substrate, not a seventh customer-facing module. Its capabilities are:

| Core capability | Actors | Inputs | Outputs | Dependencies | Unresolved assumption |
|---|---|---|---|---|---|
| Tenant and workspace management | HUB platform administrator; institution administrator | Contracted workspace, legal entity, brand, region, policy | Isolated tenant/workspace, configuration, lifecycle state | Identity, legal/entity model, billing/offer decisions | Whether an institution can own multiple sub-tenants and how white-label boundaries work (`PRD-001`, `PRD-003`). |
| Identity and entity registry | Operators; participants; integration owners | Person, company, entity, supplier and relationship records; consent | Canonical IDs, aliases, links, merge/correction history | Canonical data model, source systems, LGPD controls | Which system is authoritative for each identity and who approves merges (`PRD-003`). |
| Taxonomy, configuration and versioning | Method owner; product owner; analysts | C.A.O.S. definitions, questionnaires, skills, indicators, stages, policies | Versioned configurations with effective dates | Governance, data contracts, BP-001 offer configuration | Whether configurations are global, tenant-specific or forkable without method drift (`PRD-001`, `PRD-004`). |
| Workflow and case orchestration | Operators; implementers; support | Journey cases, tasks, approvals, deadlines, events | State transitions, queues, notifications, escalations and audit events | Journey modules, support model, event catalog | Whether one case may span legal units and who owns cross-tenant cases (`PRD-002`, `PRD-005`). |
| Evidence, consent and audit ledger | Participants; reviewers; governance; support | Submissions, files, sources, consent, decisions and corrections | Provenance, evidence status, access history, retention/deletion actions | LGPD, storage, data governance, human review | Retention periods and derivative-data treatment remain to be approved (`PRD-004`, `PRD-007`). |
| Search, notifications and reporting primitives | All authorized users; operators | Authorized entities, events, measures and preferences | Search results, alerts, exports and operational views | Permissions, metric definitions, integrations | Which channels and service levels are launch-supported (`PRD-002`, `PRD-005`). |

The core establishes stable IDs, tenant isolation, purpose limitation, versioned definitions, event history, evidence lineage, reversible corrections and role-aware views. It does not decide what a customer buys, certify an outcome, autonomously select a supplier, or issue the [[Selo HUB]]. Those are configured or operated through bounded capabilities and accountable service processes.

### 1.2 Module contracts

Each module owns a distinct capability contract. A module may consume another module's published output but must not silently mutate its source of truth or conceal a dependency.

| Module and boundary | Primary actors | Inputs | Outputs | Dependencies | Unresolved assumptions |
|---|---|---|---|---|---|
| **HUB Intelligence** — context, diagnosis, evidence, indicators, maturity and insights. It interprets authorized evidence; it does not make unreviewed high-impact decisions. | Analyst, institution lead, participant, reviewer | Context, questionnaire responses, evidence, events, benchmarks, definitions | Diagnosis, maturity view, evidence status, indicator views, explainable insight | Core registry, consent, metric catalog, human review | Which maturity scales and benchmarks are valid by cohort and which results can be published (`PRD-004`, `PRD-007`). |
| **HUB Journey** — plans, stages, recommendations, actions, progress and outcome follow-through. It coordinates work; it does not guarantee delivery. | Journey owner, implementer, participant, support operator | Approved diagnosis, goals, actions, milestones, dependencies, decisions | Journey plan, tasks, status, reminders, exception queue, progress and outcome record | Intelligence, Solutions, Connections, support workflows | Whether a journey is customer-owned, HUB-owned or shared, and the minimum service commitment (`PRD-001`, `PRD-005`). |
| **HUB Solutions** — curated suppliers, specialists, content and interventions. It presents candidates; curation and suitability stay accountable to humans. | Curator, supplier, specialist, buyer, participant | Need, capability gap, supplier profile, evidence, availability, conflicts | Curated solution set, rationale, terms, suitability status, feedback | Registry, Academy, governance, commercial rules | Curation criteria, commercial conflicts, supplier liability and whether marketplace behavior is in scope (`PRD-001`, `PRD-004`, `PRD-007`). |
| **HUB Connections** — opportunities, matching, introductions and follow-through. It facilitates a relationship; it does not promise fit, procurement or revenue. | Opportunity owner, buyer, participant, match reviewer, partner | Opportunity brief, eligibility, skills, consent, relationship constraints | Candidate matches, rationale, introduction, acceptance, interaction and outcome status | Intelligence, Solutions, registry, permissions, support | Match explainability threshold, opt-in rules, conflict handling and owner of failed introductions (`PRD-003`, `PRD-004`, `PRD-007`). |
| **HUB Academy** — learning, capability development and enablement. It records learning activity and evidence; it does not equate completion with business impact. | Learner, facilitator, content owner, evaluator, operator | Capability gap, curriculum, content, enrollment, activity and assessment | Learning plan, completion, assessment evidence, capability signal | Journey, Intelligence, content governance, identity | Which credentials are meaningful and how learning evidence can be used in recognition or recommendations (`PRD-004`, `PRD-007`). |
| **HUB Recognition** — evidence-based recognition and [[Selo HUB]]. It administers an independent review process, not a sales entitlement. | Applicant, evaluator, independent governance, institution, public audience | Eligibility, evidence package, review criteria, conflict declarations, appeals | Decision, rationale, validity period, public/private claim, withdrawal/appeal record | Intelligence evidence, governance, audit, legal independence | Evaluator appointment/payment, separation from commercial delivery, appeal authority and public claims (`PRD-004`, `PRD-007`). |

### 1.3 Boundary rules and sequencing

1. A module may be launched as a human-led service using the core ledger before its complete software experience exists, but the service boundary must be documented and auditable.
2. A recommendation, match or insight is a proposed output with provenance and confidence, never an entitlement or guarantee.
3. A Journey action must reference an approved source need, owner, due date and success measure; free-floating tasks are operational notes, not product outcomes.
4. Recognition consumes evidence and independent review; commercial implementation cannot automatically create recognition eligibility.
5. Each module publishes versioned contracts for inputs, outputs, states, permissions and audit events. Refinement must turn these contracts into acceptance criteria before implementation claims are made.

## 2. Actors, roles, tenants, entities, permissions and data visibility

### 2.1 Tenant and entity model

The product distinguishes **tenant**, **workspace**, **legal entity**, and **person**. A tenant is an isolation and policy boundary. A workspace is a program, account, ecosystem or deployment context inside a tenant. A legal entity is a governed organization with contractual and data responsibilities. A person may participate in several workspaces only through explicit relationships and permissions. A company, supplier, association, program, project, opportunity, journey, assessment, recommendation, match, contract, transaction, metric and recognition case are separate entities with stable IDs and temporal history.

Proposed tenancy hierarchy:

```text
HUB platform operator
└── tenant (institution / client / ecosystem owner)
    ├── workspace(s) / program(s)
    ├── legal entities and organizational units
    ├── participants, suppliers and partners
    └── journeys, opportunities, evidence, measures and cases
```

HUB may operate an internal tenant for platform administration and a separate recognition workspace where independence controls require it. [[HUB Negócios]] and [[Instituto HUB]] must not be presumed to share unrestricted data. Cross-tenant exchange requires a declared purpose, lawful basis/consent where applicable, a receiving owner, minimum fields, expiry and audit trail.

### 2.2 Actor and role matrix

| Actor / role | Typical permissions | Data visibility | Accountability and limits |
|---|---|---|---|
| HUB platform administrator | Configure tenants, integrations, support impersonation with approval, manage technical access | Metadata and support diagnostics; no default access to sensitive participant content | Maintains availability and access controls; cannot approve recognition or alter evidence silently. |
| Tenant / institution administrator | Manage workspace members, policies, programs, forms and local configuration | Tenant-scoped records; aggregated participant views according to purpose | Owns local administration and lawful use; cannot view another tenant or override independent decisions. |
| Executive / decision sponsor | View approved dashboards, decisions, outcomes and risks | Aggregated or purpose-limited workspace data | Decides investment/priorities; does not receive unnecessary personal-level data. |
| Journey owner / implementer | Create and manage plans, tasks, milestones, follow-through and escalations | Assigned cases and minimum necessary evidence | Accountable for delivery action and status quality; cannot certify another party's impact without review. |
| Analyst / evaluator | Review evidence, run approved analyses, draft insights and assessments | Evidence needed for assigned case/cohort; protected fields masked where possible | Produces reproducible, explainable work; high-impact output requires second-level approval. |
| Curator / match reviewer | Review solution and match candidates, record rationale and conflicts | Candidate profiles and relevant constraints, not unrelated private data | Human accountability for curation/matching, recusals and reversibility. |
| Participant / learner | Submit profile, evidence, consent, goals, progress and feedback; request correction/appeal | Own records plus explicitly shared opportunity/journey information | Controls consent and accuracy; does not gain access to peers' confidential data. |
| Supplier / specialist / partner | Maintain approved profile, respond to opportunities, deliver assigned work and submit evidence | Own profile, assigned requests and accepted relationship data | Responsible for truthful submissions and delivery terms; no access to client-wide diagnostics. |
| Support operator | Triage tickets, inspect audit metadata, execute approved corrections and escalations | Minimum necessary case data; sensitive content gated | Restores service and records actions; cannot change decisions or suppress audit history. |
| Governance / privacy / legal reviewer | Review access, consent, incidents, claims, appeals and control evidence | Full access only when justified, logged and time-bound | Approves controls and resolves conflicts; preserves independence from commercial pressure. |
| Recognition evaluator / Selo governance | Review eligibility and evidence, issue/withdraw recognition under charter | Recognition case only, with conflict and independence controls | Solely accountable for recognition decision; must recuse, explain, hear appeals and retain trail. |

Roles are assignable at tenant, workspace, case and entity scope. A user's job title is not permission. Every privileged action requires actor, scope, reason, timestamp, before/after state and applicable policy version.

### 2.3 Permission and visibility principles

- **Default deny:** access begins with no visibility and is granted by role, tenant, workspace, entity relationship, purpose and time.
- **Least privilege:** expose the minimum fields needed for the task; use aggregation, masking and pseudonymization for analysis.
- **Purpose binding:** consent or lawful basis follows the data through recommendations, matches, measurement, recognition and derivatives; a new purpose requires a new decision.
- **Separation of duties:** submitter, reviewer, approver, evaluator and publisher should not be the same person for high-impact outputs.
- **Tenant isolation:** search, exports, notifications, caches and support tools must enforce tenant boundaries, including indirect relationship paths.
- **Participant rights:** participants can view relevant records, request correction, withdraw where applicable, appeal decisions and obtain portable outputs subject to legal constraints.
- **Audit and reversibility:** deletion, correction, access grants, overrides, publications and withdrawals are append-only events; derived outputs are re-evaluated rather than silently rewritten.

The authorization matrix remains a refinement deliverable. The blueprint specifies the decision dimensions but does not claim that enforcement exists. This directly addresses [[PRD-003]] and [[PRD-002]].

## 3. End-to-end journey: context, diagnosis, action, measurement, recognition and evolution

The journey is a governed case lifecycle, not merely a screen sequence. It may start with an institution, company, ecosystem owner, participant or opportunity owner, and can return to earlier stages when evidence changes.

| Stage | Human-accountable activity | Product capability | Inputs | Outputs / exit criteria | Dependencies and unresolved assumptions |
|---|---|---|---|---|---|
| **Context** | Sponsor and journey owner define purpose, scope, stakeholders, constraints, legal basis, success hypothesis and decision rights. | Create tenant/workspace/case; configure context; consent and scope checklist. | Organization/context brief, opportunity, participants, contracts, purpose. | Approved case charter with owner, scope, privacy status and baseline plan. | Depends on BP-001: exact offer trigger and buyer commitment. Tenancy and lawful basis unresolved (`PRD-001`, `PRD-003`). |
| **Onboarding** | Operator verifies identities, invitations, roles, accessibility and expectations. | Identity resolution, invitations, profile, consent, support route. | Identity attributes, relationship assertions, permissions, language/preferences. | Reconciled identities, active participants and recorded consent. | Canonical identity, merge and support process unresolved (`PRD-002`, `PRD-003`). |
| **Diagnosis** | Analyst selects/version-approves instrument, reviews context, interprets responses and flags limitations. | Versioned questionnaires, evidence intake, completeness/status and draft diagnosis. | Responses, documents, source data, skill/capability taxonomy, baseline metrics. | Reproducible diagnosis with evidence references, confidence, gaps and reviewer assignment. | Versioning, evidence standards, protected attributes and reviewer thresholds unresolved (`PRD-004`, `PRD-007`). |
| **Prioritization / Architecture** | Sponsor and journey owner choose goals, sequence, owners, measures and risk treatment. | Prioritization workspace and journey plan. | Approved diagnosis, constraints, budget/capacity, target outcomes. | Signed-off plan with milestones, dependencies, decision log and escalation rules. | Offer packaging and service levels depend on BP-001; no automated prioritization of high-impact matters (`PRD-001`, `PRD-005`, `PRD-007`). |
| **Action / Operation** | Implementers deliver interventions, recruit participants, curate solutions, make introductions and record decisions. | Tasks, solution catalog, opportunity/match workflow, communications and case notes. | Plan, candidate set, availability, terms, consent, rationale and approvals. | Accepted action, assigned owner, due date, delivery evidence and unresolved exceptions. | Curation, matching, supplier liability and operational SOPs unresolved (`PRD-004`, `PRD-005`, `PRD-007`). |
| **Follow-through** | Journey owner checks participation, removes blockers, escalates and records non-delivery or changed context. | Progress, reminders, exception queue, escalation and change-control. | Activity events, feedback, milestone status, incidents and updated context. | Current status, decision/exception record, revised plan or closure recommendation. | Escalation authority and support SLAs unresolved (`PRD-002`, `PRD-005`). |
| **Measurement** | Analyst and sponsor agree denominators, compare baseline, review attribution and qualify outcome evidence. | Indicator catalog, outcome capture, evidence lineage and reports. | Baseline, events, business metrics, cohort/benchmark, intervention exposure. | Descriptive/leading/operational/experimental/financial result with evidence state; no automatic causal claim. | Metric definitions, source of truth, attribution and value states depend on data/finance blueprints; product must not overclaim (`PRD-004`, `PRD-007`). |
| **Recognition** | Independent evaluator reviews eligibility, conflicts, evidence, appeals and public/private claim. | Recognition case, review queue, decision, validity and withdrawal trail. | Approved evidence package, criteria version, evaluator declaration. | Recognition decision or reasoned non-recognition, appeal route and controlled claim. | [[Selo HUB]] independence and governance are unresolved; commercial delivery cannot guarantee recognition (`PRD-007`). |
| **Evolution** | Sponsor, participant and HUB review learning, update method/content, renew/close journey and decide next experiment. | Retrospective, feedback, version release, renewal/closure and learning loop. | Outcomes, feedback, incidents, costs, adoption, recognition and open risks. | Decision record, updated configuration, new baseline or safely closed case. | Automation/module expansion gates and offer renewal model depend on BP-001 and PRD-005; preserve old versions for audit. |

At every stage, a state transition is valid only when required fields, permissions, evidence status and approvals are present. A failed transition creates a visible queue item rather than silently advancing. A participant may pause, correct or appeal without losing the full history. A journey may be closed as incomplete; closure is not equivalent to success.

## 4. Operator console, participant experiences, support workflows and exception handling

### 4.1 Operator console

The operator console is the control plane for human delivery. Its minimum conceptual areas are:

1. **Work queue:** cases by stage, priority, SLA, risk, missing evidence and owner; filters must respect tenant and purpose.
2. **Case timeline:** context, submissions, decisions, actions, communications, exceptions and immutable audit events.
3. **Evidence review:** versioned instrument, source references, completeness, reviewer comments, confidence, conflicts and approval controls.
4. **Curation and matching:** candidate comparison, rationale, exclusions, consent, conflicts, human override and follow-through state.
5. **Journey operations:** milestones, dependencies, blockers, escalations, change requests and outcome capture.
6. **Measurement and publication:** metric definitions, denominator, evidence state, reviewer sign-off and claims gate.
7. **Access and support:** role grants, impersonation approval, ticket links, correction requests, DSAR/deletion state and incident handling.

These are capability areas, not an implemented interface. A dashboard sketch or mobile concept cannot be used as evidence that any workflow, permission, or integration exists. [[PRD-002]] requires the console to be converted into system behavior and acceptance criteria.

### 4.2 Participant and partner experiences

Participants need a low-friction, accessible experience to understand purpose, consent, profile, requests, actions, progress, evidence, feedback and rights. Suppliers and specialists need a separate experience for profile verification, opportunities, response, terms, delivery and payment/contract status where in scope. Sponsors need a decision-oriented view of approved progress and risks, not unrestricted raw personal data. Evaluators need a segregated recognition workspace.

All experiences must show status and next action in plain language, distinguish draft from approved outputs, identify who is accountable, and provide correction/appeal/support paths. White-label configuration may change presentation and tenant terminology but cannot remove HUB methodology integrity, evidence labels, auditability, privacy notices or independent recognition safeguards.

### 4.3 Support workflow

Support follows a severity-based service blueprint:

1. **Intake:** authenticate requester, classify tenant/case, capture impact, urgency, sensitive-data flag and consent to investigate.
2. **Triage:** determine how-to, access, data correction, workflow blockage, safety/fairness, privacy, security or service incident.
3. **Containment:** preserve evidence, suspend unsafe publication/access, prevent duplicate actions and notify accountable owner.
4. **Resolution:** provide documented response, correction, reprocessing, rollback, appeal routing or legal/privacy escalation.
5. **Closure:** obtain confirmation where appropriate, record root cause, update status and retain audit evidence.
6. **Learning:** convert recurring issues into product defects, SOP updates, taxonomy changes or a decision to not automate.

Support operators may inspect only minimum necessary data. Impersonation is time-bound, reason-coded, approved and fully logged. No support action may erase an audit event or override an evaluator/approval decision without the designated authority.

### 4.4 Exceptions and escalation

| Exception | Immediate control | Escalation owner | Required record / outcome |
|---|---|---|---|
| Missing, conflicting or low-quality evidence | Mark incomplete; prevent approval/publication; request correction | Analyst lead / journey owner | Source, impact, request, resolution and evidence version. |
| Identity collision or suspected duplicate | Quarantine merge; preserve both records | Identity/data steward | Match rationale, decision, affected derivatives and reversal path. |
| Inappropriate access or tenant leakage | Revoke session/permission; preserve logs; assess incident | Security/privacy owner | Scope, containment, notification and remediation. |
| Unsafe, unfair or unexplained recommendation/match | Pause release; human review; offer alternative | Responsible-intelligence reviewer | Inputs, rationale, protected-impact check, override and appeal. |
| Supplier/participant complaint or failed introduction | Pause next action; collect both accounts; avoid retaliation | Relationship/journey owner | Complaint, conflict check, response, remedy and learning. |
| Missed milestone or delivery blocker | Flag at-risk; replan or escalate, do not silently close | Journey owner / sponsor | Cause, revised commitment, owner and decision. |
| Recognition conflict, challenge or withdrawal request | Recuse evaluator; freeze claim; open appeal | Independent Selo governance | Conflict declaration, review panel, decision and public-claim action. |
| Metric anomaly or disputed value claim | Freeze publication; mark provisional; reconcile lineage | Measurement/finance reviewer | Definition, source, denominator, correction and approval status. |

Exception handling is a core operating requirement, not an edge-only feature. The complete SOP, queue ownership and service levels remain open under [[PRD-005]].

## 5. Human-led, assisted and future-automation activities

Automation classification is a governance boundary. “Assisted” means a system may propose, summarize, prioritize or detect, but a qualified human verifies the result and owns the decision. “Future candidate” means no automation should be released until evidence, fairness, explainability, reversibility, security, legal basis and operating capacity are approved.

| Activity | Current blueprint boundary | Inputs / outputs | Human accountability | Dependencies / gate |
|---|---|---|---|---|
| Tenant setup, role assignment and consent | Human-led; assisted validation may flag missing fields | Contract/context → tenant, roles, consent | Administrator and privacy owner approve | Authorization and LGPD review (`PRD-002`, `PRD-003`). |
| Identity resolution and deduplication | Assisted candidate suggestions; human merge approval | Identity records → proposed link/merge | Data steward owns merge and reversal | Test resolution, provenance and correction (`PRD-003`). |
| Questionnaire selection and diagnosis interpretation | Human-led; assisted completeness and comparison | Context/evidence → diagnosis draft | Analyst signs evidence interpretation | Versioned instruments and reproducibility (`PRD-004`). |
| Evidence extraction and summarization | Assisted only; source links and uncertainty required | Documents/events → draft facts | Reviewer verifies every material fact | Evidence lineage, privacy, model/version audit (`PRD-004`, `PRD-007`). |
| Prioritization and journey planning | Human-led; assisted sequencing suggestions | Diagnosis/goals → proposed plan | Sponsor and journey owner approve priorities | Offer/service boundary and impact review (`PRD-001`, `PRD-007`). |
| Solution curation | Human-led; assisted search/filter | Need/catalog → candidate set | Curator decides inclusion and conflict/fit | Supplier governance, explainability and liability (`PRD-004`, `PRD-007`). |
| Matching and introductions | Human-led; assisted ranking allowed only as draft | Opportunity/profiles → rationale and candidates | Match reviewer approves, participant opts in | Fairness, consent, appeals and reversible release (`PRD-003`, `PRD-007`). |
| Reminders, task routing and SLA alerts | Assisted operational automation | Events/status → notifications/queues | Journey/support owner handles exceptions | Notification preferences, escalation SOP (`PRD-002`, `PRD-005`). |
| Progress aggregation and descriptive reporting | Assisted/automated after metric approval | Events → status and descriptive indicators | Analyst validates anomalies and publication | Metric catalog and data lineage (`PRD-004`). |
| Outcome attribution, financial value and public claims | Human-led; no autonomous causal or financial claims | Measures/evidence → reviewed result/claim | Measurement, finance and claims approvers sign off | Evidence-certified methodology; related finance/governance controls. |
| Recognition eligibility and Selo decision | Human-led and independent | Evidence/criteria → decision and claim | Independent evaluator/governance decides | Independence, conflicts, appeal and withdrawal (`PRD-007`). |
| Support classification and suggested replies | Assisted; safety/privacy cases always escalated | Ticket → suggested category/response | Support operator validates and sends | Incident, privacy and exception SOP (`PRD-002`, `PRD-005`, `PRD-007`). |
| Predictive recommendations, uplift or autonomous action | Future candidate only | Approved historical/context data → proposal | Named accountable reviewer; no silent execution | Baselines, fairness, drift, rollback, model cards and approval. |

Future automation must earn scope through measured performance against human baselines, subgroup checks, clear uncertainty, versioning, kill switch, rollback, appeals, incident response and an approval record. Founder convenience is not an automation gate. High-impact decisions remain human-led even if a model performs well.

## 6. Assumptions, unresolved product decisions and gap traceability

The following assumptions are deliberately open. Each is linked to one or more registered gaps and must be converted into a refinement decision, evidence package or explicit scope exclusion.

## Open Assumptions and Unresolved Decisions

| Assumption / unresolved decision | Affected gap IDs | Refinement action |
|---|---|---|
| Shared core capabilities can serve [[HUB Negócios]], [[Instituto HUB]] and [[Plataforma HUB]] without violating legal, financial, data or independence boundaries. | PRD-001, PRD-003, PRD-007 | Produce unit-to-capability and data-flow matrix; obtain legal, governance and offer architecture review. |
| BP-001 will define a coherent buyer, offer, activation and service boundary for each first release; BP-002 must not imply an unapproved commercial package. | PRD-001, PRD-005 | Reconcile module contracts with BP-001; record any capability as platform primitive, configured offer or human service. |
| A tenant/workspace hierarchy can support institutional, client, program and white-label deployments while preserving isolation. | PRD-002, PRD-003 | Test authorization/tenancy matrix across direct, delegated and cross-tenant relationships; approve export and exit behavior. |
| Canonical identities, entities and relationships can be resolved with acceptable accuracy and reversible corrections. | PRD-003, PRD-004 | Define identity steward, keys, merge thresholds, quarantine, survivorship and test dataset. |
| Versioned questionnaires, taxonomies, indicators and criteria can make results reproducible across tenants and time. | PRD-001, PRD-004 | Specify schema/version lifecycle, effective dates, migration rules and acceptance tests. |
| Participants will provide evidence and consent when purpose, benefit, visibility, retention and withdrawal are clear. | PRD-002, PRD-003, PRD-004 | Validate onboarding, consent language, data minimization, correction and withdrawal journeys. |
| Assisted diagnosis, curation and matching can improve operator throughput without displacing accountable judgment or creating unfair outcomes. | PRD-004, PRD-007 | Establish human baseline, explanation standard, fairness review, override and incident protocol before release. |
| Operational delivery can run through documented queues and SOPs without undocumented founder intervention. | PRD-002, PRD-005 | Service-blueprint each stage, assign one accountable owner, run controlled pilot and record exceptions. |
| Progress and outcome measures can remain distinct from causal impact, realized cash, margin and recognition. | PRD-004, PRD-007 | Connect metric/value semantics to data and finance blueprints; enforce evidence labels and publication gates. |
| [[Selo HUB]] can remain independent while using evidence produced in the wider HUB ecosystem. | PRD-004, PRD-007 | Draft evaluator charter, conflict rules, payment separation, appeals, withdrawal and public-claim controls. |
| Support, correction, appeal and incident workflows can preserve user trust without exposing unrelated confidential data. | PRD-002, PRD-003, PRD-005, PRD-007 | Define severity/SLA matrix, minimum-necessary access, escalation tree, audit and test cases. |
| Future module expansion or automation will be gated by evidence rather than roadmap pressure. | PRD-001, PRD-004, PRD-005, PRD-007 | Create expansion decision record with performance, safety, fairness, capacity, cost and reversibility thresholds. |

## Cross-Blueprint Dependencies

| Dependency | Product impact | Coordination rule |
|---|---|---|
| **BP-001 — HUB offer/revenue architecture** | Determines who buys which journey, required service levels, packaging, commercial owner and renewal motion. | Depends on BP-001: reconcile before approving module scope or claiming a launch offer; do not invent BP-001 content. |
| **BP-003 — data/intelligence blueprint** | Defines canonical entities, event and metric contracts, lineage, identity resolution, measurement and model controls. | Product contracts must consume approved semantics; no product result may imply a data contract that is not approved. |
| **BP-004 — technology/architecture blueprint** | Defines environments, integrations, IAM, tenancy enforcement, reliability, observability, release and support tooling. | Treat all technical behaviors here as requirements, not implementation evidence; bind acceptance criteria to BP-004. |
| **BP-005 — operating model** | Defines accountable owners, service blueprints, staffing, RACI, queues, escalation and delivery capacity. | Product workflows must have named human owners and SOPs; PRD-005 remains open until operational proof exists. |
| **BP-006 — governance/legal/trust** | Determines entity separation, LGPD roles, IP, liability, claims, Selo independence, appeals and audit obligations. | No high-impact or public-facing capability clears product approval without governance sign-off. |
| **BP-007 — brand/market** | Determines naming, white-label rules, target contexts, approved claims, audience language and category boundaries. | Visuals and copy must match evidence maturity; no interface sketch or narrative implies implemented functionality. |
| **BP-008 — launch/evolution** | Defines sequencing, release gates, adoption evidence, change control and evolution reviews. | Product capability is launch-ready only when integrated gates, support and rollback criteria pass. |

The product boundary is therefore coherent only as a connected system: offer intent → product capability → data evidence → technical enforcement → operating accountability → governance approval → launch and learning. Any contradiction discovered downstream reopens the affected product assumption rather than being hidden in a local module.
