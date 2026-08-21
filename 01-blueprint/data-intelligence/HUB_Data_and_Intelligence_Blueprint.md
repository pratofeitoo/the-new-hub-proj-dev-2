---
title: HUB Data and Intelligence Blueprint
blueprint_id: BP-003
status: draft
layer: blueprint
area: data-intelligence
source_task: "[[04-project-management/tasks/BP-003_HUB_Data_and_Intelligence_Blueprint]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [DAT-001, DAT-002, DAT-003, DAT-004, DAT-005, DAT-006, DAT-008, DAT-010]
---

# HUB Data and Intelligence Blueprint

> [!info] Maturity and evidence boundary
> This is a semantic blueprint, not a production schema, certified measurement system, legal determination or financial approval. A cataloged metric, model or ROI pathway is an intended definition until its evidence path, owner, tests and approval state are recorded. The blueprint preserves semantic intent while leaving physical technology choices to refinement.

## 1. Canonical entities, nodes, relationships, keys, object types and temporal rules

The data system represents the chain `fontes → identidades → sinais → inteligência → ação → resultado → valor financeiro` across the six conceptual modules of [[01-blueprint/strategy/HUB_Project_Blueprint_Foundation|HUB Intelligence, HUB Journey, HUB Solutions, HUB Connections, HUB Academy and HUB Recognition]]. Canonical objects are governed by meaning and ownership, not by a particular database, vendor or storage pattern.

### Canonical object families

| Family | Canonical objects | Semantic purpose |
|---|---|---|
| Identity and organization | Person, Company, Entity, Institution, Supplier, Specialist, Relationship | Stable actors and the typed relationships among them. `Entity` is a controlled object type, not a substitute for every actor. |
| Capability and evidence | Skill, Skill Evidence, Assessment, Credential, Cohort | What an actor can do, what supports that claim, how it was assessed and which comparison population applies. |
| Opportunity and interaction | Opportunity, Need, Match, Introduction, Interaction, Participation | Demand, proposed connection and observable engagement; a recommendation or match is not an outcome. |
| Work and offer delivery | Journey, Recommendation, Action, Program, Project, Content/Campaign, Solution | Configured interventions and the actions taken through C.A.O.S. (`Contexto → Arquitetura → Operação → Sustentação`). |
| Commercial and outcomes | Contract, Transaction, Business Metric, Individual Outcome, Ecosystem Outcome, Financial Value | Commercial facts, operational results and value claims with explicit evidence states. |
| Governance and intelligence | Consent, Purpose, Data Source, Event, Indicator, Taxonomy, Formula, Model Version, Evidence Record, Risk/Control, Change/Correction | Permission, provenance, measurement definitions, decision controls and reversible change history. |

### Keys and relationship semantics

Every canonical object has a globally unique, immutable `canonical_id`, an `object_type`, `tenant_id` or ecosystem scope where applicable, `created_at`, `updated_at`, `valid_from`, `valid_to`, `record_status` and provenance reference. Source identifiers remain attached as namespaced aliases (`source_system`, `source_object_type`, `source_id`) and are never silently promoted to canonical identity. A relationship is itself a first-class object when it has a role, evidence, status, effective dates or permissions.

Logical key rules are:

* **Primary key:** `canonical_id` identifies the semantic object and does not change on correction, merge or source migration.
* **Foreign key:** a relationship references the canonical IDs of its subject and object, with `relationship_type`, cardinality, confidence, provenance and temporal validity.
* **Natural/business key:** values such as tax registration, email or contract number may assist matching but are not universal keys; they are sensitive, mutable and scope-bound.
* **Event key:** `event_id` is unique for an occurrence; `event_type`, `schema_version`, `occurred_at`, `recorded_at`, producer and subject identify its interpretation.
* **Metric key:** `indicator_id` plus version identifies a definition; a value also requires observation period, dimensions, population/denominator, formula version and evidence state.
* **Evidence key:** `evidence_id` identifies a source assertion or artifact, with hash/reference, collector, authorization, quality and review status.

Core cardinalities are deliberately explicit: one Person or Company may have many aliases, skills, interactions, opportunities, contracts and outcomes; a Skill may have many evidence records and assessments; a Journey contains ordered actions and may receive many recommendations; a Match links one opportunity to one or more candidate subjects through a versioned decision; an Outcome may be supported by many evidence records and linked to many actions, but attribution must prevent duplicate value; a Consent may authorize many fields for one purpose and must propagate to every derivative use.

### Temporal rules

The model separates **valid time** (when a fact is true in the represented world), **event time** (when an activity occurred), and **system time** (when HUB received or changed the record). Intervals use explicit inclusive/exclusive conventions and timezone. Late-arriving events retain original occurrence time; corrections append a superseding version rather than overwriting history. Relationships such as employment, membership, consent, recommendation, contract and participation require effective intervals. Metrics use a declared observation window, cutoff, timezone, cohort definition and denominator snapshot. Reprocessing may create a new derived result while preserving the prior result and calculation inputs.

This logical contract addresses [[00-project-control/gap-register/gaps/DAT-001|DAT-001]], but does not claim that physical primary keys, foreign keys, indexes or storage tables are approved. The refinement deliverable is an approved logical and physical model; data architecture sign-off remains pending.

## 2. Source indicator architecture connected to product capabilities and business outcomes

The approximately 73-indicator catalog and 12-lever value tree are treated as a semantic dependency graph, not as a dashboard backlog. Each indicator must connect four layers:

1. **Source and signal:** source system, event or submitted evidence; collection purpose, quality and permission.
2. **Semantic measure:** canonical definition, population, dimensions, formula and version.
3. **Product capability:** the module and workflow that can observe, influence or act on the signal.
4. **Outcome and decision:** the C.A.O.S. stage, decision owner, expected outcome and evidence path to a financial or ecosystem value lever.

| Product capability | Representative source/indicator family | Intended business or ecosystem outcome | Evidence path required |
|---|---|---|---|
| HUB Intelligence: diagnosis and maturity | Assessments, skills, evidence, cohort benchmarks, risk/control signals | Prioritized capability gaps and defensible baseline | Versioned assessment instrument → reviewed evidence → baseline snapshot → decision log. |
| HUB Journey: plans and progress | Journey stages, actions, participation, completion and adoption events | Implementation progress, time-to-productivity, retention or capability development | Action event stream → denominator/cohort rule → progress record → outcome follow-up. |
| HUB Solutions: curation | Supplier, specialist, content, intervention quality and utilization | Better-fit interventions, procurement efficiency and reduced search friction | Curator decision → eligibility/evidence record → usage/fit review → downstream outcome. |
| HUB Connections: matching | Opportunity, profile, skills, match, introduction, interaction and conversion | Qualified relationships, contracts, revenue or ecosystem access | Match version → human review/acceptance → introduction/interactions → contract/transaction or documented non-conversion. |
| HUB Academy: learning | Enrollment, attendance, learning events, assessment and credential evidence | Capability acquisition and time-to-productivity | Authorized learning event → assessment evidence → application in workflow → outcome comparison. |
| HUB Recognition: Selo HUB | Criteria, submissions, evaluator decisions, controls and appeals | Trusted recognition, signaling and ecosystem participation | Criteria version → independent evaluator evidence → approval/appeal record → controlled public claim. |
| Commercial and impact operations | Contract, transaction, finance, procurement, HR, campaign and program data | Productivity, procurement, risk, incremental revenue, recurring HUB revenue and impact | Source ledger → metric lineage → intervention/action link → attribution policy → finance/governance review. |

The intended bridge to offers is: [[HUB Negócios]] owns commercial services and implementation; [[Instituto HUB]] handles restricted impact or mission activity subject to separation; [[Plataforma HUB]] provides shared software, data and workflows; the HUB brand governs method and standards. These links are semantic dependencies only. **Depends on BP-001:** exact offer-to-buyer and unit boundaries. **Depends on BP-002:** product capability and operating contracts. Neither is inferred here.

Leading indicators (activity, adoption, completion), operational indicators (cycle time, queue health), descriptive indicators (counts and rates), experimental indicators (comparison-based effects) and financial indicators (ledger-reconciled amounts) must be typed separately. A product dashboard may display all types, but its labels, denominator, freshness and evidence state must make the distinction visible. A metric becomes a business claim only when its evidence record and approval gate permit that use; catalog membership alone never certifies ROI, impact or causality. This closes the semantic connection required by [[00-project-control/gap-register/gaps/DAT-005|DAT-005]] in blueprint terms while leaving implementation and approval open.

## 3. Event, indicator, taxonomy, formula, model and evidence versioning

Versioning is part of meaning. No producer, dashboard, decision or public claim may rely on an unversioned event schema, indicator definition, taxonomy, formula, model or evidence interpretation.

### Canonical event envelope

Every event should carry: `event_id`; `event_type`; `schema_version`; `producer`; `tenant/ecosystem`; `subject_canonical_id` and object references; `occurred_at`; `recorded_at`; `valid_from/to` where applicable; payload; source reference; consent/purpose reference; idempotency key; correlation/causation IDs; quality status; and security classification. Producers must publish contract metadata. Consumers must reject, quarantine or explicitly adapt unknown versions rather than guessing.

Event identity is idempotent on producer namespace plus idempotency key (or a documented deterministic hash). Duplicate delivery does not create duplicate business activity. Event contracts distinguish immutable facts from corrections and withdrawals. Schema changes are classified as compatible, additive, breaking or semantic; breaking and semantic changes require a new major version, migration/adaptor and consumer sign-off. Replay uses the original event versions and a declared code/config snapshot, generating a new derived run identifier.

### Versioned semantic artifacts

| Artifact | Required version contents | Promotion and rollback rule |
|---|---|---|
| Taxonomy | Terms, hierarchy, aliases, object types, inclusion/exclusion, locale and effective dates | New version preserves prior mappings; backfill is explicit and reversible. |
| Indicator | Name, intent, population, numerator, denominator, dimensions, grain, unit, freshness, owner and evidence class | Version changes when meaning or population changes; prior values remain attributable to the old definition. |
| Formula | Expression, dependencies, rounding, null/zero policy, currency/timezone, code/config hash and test fixtures | Recalculation produces a new run/version; published values cannot be silently rewritten. |
| Model | Training data window, features, target, method, model artifact hash, threshold, fairness/drift tests, limitations and approver | Release requires model card and gate; rollback selects a prior approved version and preserves decisions already made. |
| Evidence record | Source, capture time, consent/purpose, artifact hash, reviewer, quality, confidence, linkage and expiry | Corrections supersede or invalidate the record with reason; original remains auditable. |

An indicator dependency graph must expose which events, dimensions, formulas, models, dashboards, decisions and claims depend on each version. Each published value has `definition_version`, `formula_version`, `run_id`, source snapshot, evidence state and reviewer/approval state. This is the intended semantic response to [[00-project-control/gap-register/gaps/DAT-003|DAT-003]] and supports the [[00-project-control/gap-register/gaps/DAT-004|DAT-004]] evidence requirement; contract tests, replay tests and publication controls remain refinement work.

## 4. Potential, influenced, validated and realized value

Value states describe confidence and causal proximity, not a quality ranking. They must never be collapsed into one “impact” or ROI number.

| State | Meaning | Permitted use | Minimum evidence path |
|---|---|---|---|
| **Potential** | A modeled opportunity or capacity if an intervention succeeds under stated assumptions. | Prioritization, scenario planning and hypothesis formation. | Explicit assumptions → baseline/denominator → scenario formula → sensitivity and owner. |
| **Influenced** | An observed change temporally associated with HUB activity, without sufficient counterfactual or attribution proof. | Operational learning and qualified internal reporting. | Source metric → intervention/action link → timing window → confounders and attribution limitations. |
| **Validated** | A result that passed an agreed measurement protocol, comparison or review, with evidence quality and attribution bounds documented. | Conditional customer or governance reporting; not automatically financial certification. | Predefined protocol → baseline/comparison or justified design → reproducible calculation → independent review. |
| **Realized** | A validated value recognized in an authoritative operational or financial record, net of costs, timing and duplicate claims. | Finance-approved reporting, subject to entity and accounting rules. | Validated outcome → contract/ledger/approved operational record → reconciliation → finance sign-off. |

Attribution must declare unit of analysis, treatment/action window, baseline, counterfactual or comparison method, attribution share, confidence/uncertainty, lag, exclusions and stopping rules. Deduplication uses a value-claim registry keyed by beneficiary, lever, period, intervention and source; overlapping claims require allocation or are rejected. Value cannot be counted both as incremental revenue and marketplace value without an explicit non-overlap rule. Temporal rules prevent post-period outcomes from being claimed before the observation window closes.

The value tree levers (productivity, time-to-productivity, retention, recruitment, procurement, risk, incremental revenue, HUB recurring revenue, marketplace, entity/association, marketing and innovation/new markets) are hypotheses until each has a defined source and evidence path. The illustrative ROI values in the foundation remain illustrative and uncertified. This blueprint does not convert influenced revenue, matches, adoption or cataloged formulas into cash or margin. Formal calculation policies and finance/data governance approval are the open requirements of [[00-project-control/gap-register/gaps/DAT-006|DAT-006]].

## 5. Identity resolution, lineage, consent, retention, deletion, replay and correction concepts

### Identity resolution

Identity resolution maps source records to canonical objects while preserving uncertainty and reversibility. Matching uses deterministic keys where lawful and reliable, followed by explainable probabilistic or human review where needed. Each candidate match stores evidence, score/confidence, rule/model version, reviewer, timestamp and decision. Merge creates a surviving canonical identity plus a merge event; aliases and source links remain queryable. Splits and unmerges are first-class corrections. Survivorship is field-specific, source-authorized and time-aware; it must not erase contradictory source facts. Resolution tests must measure false merges, missed matches, manual review rate and reversibility on representative datasets, as required by [[00-project-control/gap-register/gaps/DAT-002|DAT-002]].

### Lineage and source authority

Lineage is a directed chain: source record/event → normalized record → canonical identity/object → evidence/observation → indicator/formula/model run → dashboard/decision → action → outcome → value claim. Every edge records transformation, version, actor/service, time, quality and authorization. Raw source artifacts are retained as immutable provenance where permitted; corrected artifacts are separate, reasoned and linked; derived artifacts declare inputs and run IDs. The logical source-of-truth policy is: source systems remain authoritative for their own operational facts, the HUB canonical layer is authoritative for resolved identities and cross-system semantics, and derived marts/dashboards are authoritative only for their declared presentation scope. No layer silently overwrites another. [[00-project-control/gap-register/gaps/DAT-010|DAT-010]] remains open until correction-register contradictions and provenance status are resolved.

### Consent, purpose and derivative data

Each field/use edge maps to purpose, lawful basis, controller/processor role, data subject scope, sensitivity, recipients, retention class and permitted derivatives. Consent (when the lawful basis is consent) is versioned, granular, time-bounded where applicable and revocable. Purpose restrictions propagate to normalized, canonical, feature, metric, model, export, cache and public-claim artifacts. Aggregation or anonymization is not assumed to remove obligations; the transformation and re-identification risk are recorded. Access and publication decisions evaluate both object permissions and purpose permissions. This semantic contract is subject to LGPD/legal confirmation and addresses [[00-project-control/gap-register/gaps/DAT-008|DAT-008]].

### Retention, deletion and portability

Retention classes define minimum and maximum periods, trigger events, legal holds and responsible owner. Deletion requests or expiry create a traceable lifecycle job covering source-linked records, aliases, canonical objects, evidence, features, caches, search indexes, backups, exports and partner copies, subject to lawful exceptions. Where deletion of a shared aggregate is not possible, the system documents anonymization, residual risk and policy basis. Deletion does not rewrite audit evidence beyond what law permits; audit entries retain event type, authorization and irreversibly minimized references. Portability exports use a declared schema and include provenance and interpretation metadata without exposing another subject’s data.

### Replay, reconciliation and correction

Replay is deterministic reprocessing of an immutable event/source snapshot with declared artifact versions. It must be isolated from live publication until reconciliation compares counts, keys, totals, duplicates, late events and expected deltas. A correction records reason, requester, approver, affected objects, old/new interpretation, effective time and downstream artifacts. Corrections do not delete the original claim; they supersede, invalidate or amend it. A correction register links to reprocessing runs and publication withdrawals. This allows source, corrected and derived artifacts to remain distinguishable while providing an authoritative lineage path; executable controls, DSAR tests and replay tests are refinement/approval work under the related gaps.

## Open Assumptions and Unresolved Decisions

| Assumption | Affected gap IDs | Refinement action |
|---|---|---|
| A shared canonical identity can span HUB offers and partner systems without violating tenant, purpose or legal boundaries. | DAT-001, DAT-002, DAT-008 | Approve logical entity/tenancy model, run representative matching tests and obtain LGPD/legal review. |
| Source systems, the HUB canonical layer and corrected layer can have explicitly bounded authority without contradictory dashboards. | DAT-001, DAT-004, DAT-010 | Produce source-of-truth matrix, correction policy, provenance tests and owner sign-off. |
| A common event envelope can support CRM, platform, HRIS, ATS, LMS, ERP/finance, procurement, media and impact workflows. | DAT-003, DAT-005 | Inventory producers/consumers, specify contracts and pass compatibility, idempotency and replay tests. |
| The existing indicator catalog can be reduced to one canonical semantic layer without losing offer-specific context. | DAT-005 | Build metric dependency graph, identify duplicate definitions and approve owner/denominator conventions. |
| Outcome attribution can separate association from causation and prevent double counting across value levers. | DAT-004, DAT-006 | Define protocols, comparison/counterfactual rules, claim registry and finance/data governance approval. |
| Consent, purpose restrictions and deletion can propagate to derived metrics, models, caches, backups and partner exports. | DAT-008 | Build purpose-to-field/lifecycle matrix and execute propagation, deletion and portability tests. |
| Versioned formulas and models can be replayed reproducibly despite late events, corrected data and changing dependencies. | DAT-003, DAT-004, DAT-010 | Define snapshot/run contracts, registry controls, reconciliation thresholds and rollback procedures. |
| Product and offer boundaries will supply stable capability owners and decision contexts for indicators. | DAT-005, DAT-006 | **Depends on BP-001/BP-002:** publish offer-to-capability and owner mapping before metric approval. |

All assumptions remain open until the linked gap’s definition, dependency, evidence, accountable owner and approval condition are satisfied. No assumption above is a certified fact.

## Cross-Blueprint Dependencies

* **Depends on BP-001:** offer architecture, buyer/value exchange, unit boundaries and commercial ownership. Data semantics must not invent which offer owns a metric or realized value.
* **Depends on BP-002:** product capability taxonomy, journey states, roles, permissions, tenant behavior and human/automated boundaries. Events and indicators require those stable contexts.
* **Depends on governance/legal blueprint:** controller/processor roles, lawful bases, LGPD notices, Selo HUB independence, retention exceptions, IP and public-claim authority.
* **Depends on finance/value blueprint:** ledger authority, revenue classification, accounting treatment, cost allocation, benefit recognition and approval of realized value.
* **Depends on technology/integration blueprint:** system-of-record assignments, interface contracts, deployment boundaries, security controls, reliability targets and physical replay mechanisms.
* **Feeds launch and approval blueprints:** evidence packets, metric/model publication gates, data-rights tests, operational dashboards and integrated readiness criteria.

Until these dependencies are resolved, this note defines the semantic contract and intended evidence paths only. It does not authorize production implementation, public claims, Selo HUB decisions, financial certification or launch.
