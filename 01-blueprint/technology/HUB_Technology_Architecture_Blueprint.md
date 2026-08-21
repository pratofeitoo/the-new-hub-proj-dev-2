---
title: "HUB Technology Architecture Blueprint"
blueprint_id: BP-004
status: draft
layer: blueprint
area: technology
source_task: "[[04-project-management/tasks/BP-004_HUB_Technology_Architecture_Blueprint]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [TEC-001, TEC-002, TEC-003, TEC-004, TEC-005, TEC-006, TEC-007]
---

# BP-004 — HUB Technology Architecture Blueprint

> [!warning] Maturity boundary
> This is a target-architecture blueprint. It describes boundaries, responsibilities and requirements for refinement; it does not describe a deployed system, selected vendors, an implementation commitment or production readiness. The current evidence explicitly says that no production implementation is evidenced in [[01-blueprint/strategy/HUB_Project_Blueprint_Foundation]].

## 1. Platform, warehouse/lakehouse, intelligence, consent and integration boundaries

### Target platform boundary

The **Plataforma HUB** is the product and workflow boundary for tenant-aware configuration, onboarding, diagnosis, evidence review, journeys, recommendations, solutions, connections, learning and recognition workflows. It should expose stable domain services rather than make every offer a bespoke integration. The six conceptual modules are [[HUB Intelligence]], [[HUB Journey]], [[HUB Solutions]], [[HUB Connections]], [[HUB Academy]] and [[HUB Recognition]], with C.A.O.S. stages represented as traceable workflow states.

The platform owns operational commands and user-facing state: tenant/context configuration, actor and role assignment, questionnaire and evidence workflow state, journey actions, curated recommendations, match and introduction state, review decisions, audit events and operator queues. High-impact interpretation, matching, curation and recognition remain human-controlled until their evidence and approval gates exist. A platform record is not automatically a financial or causal claim.

The target platform is a modular application boundary, not a commitment to microservices. Refinement must choose the simplest deployable shape that preserves domain ownership, tenant isolation, auditability and independent evolution of integration-heavy workloads. Synchronous APIs serve interactive commands and queries; asynchronous processing serves imports, evidence processing, metric computation, notifications and downstream propagation.

### Warehouse/lakehouse boundary

The warehouse/lakehouse is the analytical and evidence boundary. It receives governed source extracts and platform events through ELT, preserves immutable landing/raw data, and produces standardized, curated and serving layers. It owns analytical history, cross-source joins, metric computation, lineage, reproducible snapshots and value/evidence marts; it does not become the operational source of truth for workflow state.

The target layers are:

1. **Landing/raw** — source-faithful payloads, ingestion metadata, consent/purpose context and immutable arrival identifiers.
2. **Standardized** — typed, normalized and deduplicated records with source keys, canonical keys, schema version and quality status.
3. **Curated semantic** — canonical entities, relationships, events, indicators, cohorts, model versions and temporal validity aligned to [[HUB_Project_Blueprint_Foundation]].
4. **Serving marts** — approved operational, product, finance and impact views, each with owner, denominator, lineage and evidence status.

The physical design remains subject to [[DAT-001 — Canonical entity model]] and [[DAT-003 — Canonical event envelope]] refinement. Corrected records must retain source provenance; derived metrics must never overwrite source evidence. The lakehouse may support graph or feature-serving workloads, but those are downstream projections, not alternate authorities without an explicit ownership decision.

### Intelligence boundary

HUB Intelligence is a governed capability across platform and data layers. Descriptive diagnostics, evidence quality checks, cohorting, recommendations and matching may be progressively automated; high-impact outcomes require accountable human review, explainability, override and appeal paths. Model or rules outputs must carry model/rule version, input snapshot, purpose, confidence or quality status, reviewer state and expiry/revalidation metadata.

The intelligence boundary separates potential, influenced, validated and realized value. It cannot claim realized financial impact merely from activity, adoption, pipeline or a match. The metric and model lineage required by [[DAT-004 — Traceable value lineage]] and [[DAT-007 — Measurement and model validation]] is a prerequisite for public or financial claims. Predictive, uplift and anonymous benchmark capabilities are target stages, not currently available capabilities.

### Consent and privacy boundary

Consent management is a policy and propagation boundary, not merely a checkbox in the platform. Every data flow must carry purpose, lawful-basis status, scope, actor/tenant, collection source, retention class and effective/revoked timestamps. Consent and purpose decisions must be enforced at ingestion, operational access, analytical transformation, model use, exports, notifications and partner delivery.

The target design supports purpose limitation, minimization, DSAR/deletion, portability, correction, derivative-data treatment and exit propagation across platform, lakehouse, caches, backups and suppliers. Controller/processor roles and LGPD treatment remain governance decisions per flow. Instituto HUB restricted activity, HUB Negócios commercial activity and recognition-related evaluation must not be conflated by a shared data path without an approved legal and operational basis.

### Integration boundary and sequencing

The integration boundary contains adapters, contract validation, identity mapping, consent enforcement, rate controls, retries, quarantine and delivery telemetry. It isolates external volatility from core domain logic. Candidate M0 integrations are CRM, platform, consent, entity/identity and warehouse backbone; M1 adds HRIS, ATS, LMS, finance, procurement, intelligence and marketing; M2 adds client finance, client BI and risk/control systems. This is sequencing logic, not a commitment to vendors or dates.

Integration contracts must define payloads, endpoints/topics, authentication, ownership, versioning, idempotency, error semantics, rate limits, data classification and deprecation. No named partner or external system is assumed available. A critical launch path cannot depend on an unconfirmed partner; each adapter needs a fallback or an explicit launch exclusion.

## 2. Systems of record, producers, consumers, interfaces and ownership

The following is a target ownership map for refinement. “System of record” means the authoritative owner of a business fact, not necessarily the system where a copy is easiest to query. Owners are capability roles pending assignment to named teams or legal entities.

| Domain fact | Target system of record | Producers | Consumers | Interface | Accountable owner (to assign) |
|---|---|---|---|---|---|
| Tenant, context, roles and workflow state | HUB platform | HUB operators, approved admins, platform services | Platform UI, operations, audit, analytics | Versioned API + domain events | Platform/product owner |
| Canonical person, company, entity and relationship identity | Identity/master-data service with governed warehouse projection | Platform, CRM, HRIS/ATS, partner imports | All modules, integrations, analytics | Identity API + identity events + reconciliation files | Data owner |
| Consent, purpose and privacy decisions | Consent/policy service | Participants, admins, privacy operations, integrations | Gateway, platform, ELT, exports, model services | Policy API + consent events | Privacy/data-governance owner |
| Diagnostic answers and evidence | Platform evidence service; source evidence retained in landing | Participants, operators, document/import connectors | Intelligence, journey, recognition, audit | API + evidence events + object storage references | Product/operations owner |
| Opportunities, solutions, matches and introductions | HUB platform | Buyers, curators, operators, partner feeds | Participants, CRM, journey, analytics | Command/query API + events/webhooks | Connections/solutions owner |
| Learning content and completion | Academy/content service or approved LMS | HUB Academy, LMS connector, participants | Journey, intelligence, reporting | xAPI/event contract + API | Academy/product owner |
| Contracts, invoices, transactions and financial ledger facts | ERP/finance system of each relevant entity | Finance staff, ERP, payment/provider connectors | Finance marts, platform summaries, reporting | Authenticated API + controlled ELT | Finance owner |
| Procurement and supplier facts | Procurement/SRM system or approved platform module | Procurement, suppliers, client systems | Solutions, finance, risk, analytics | API/webhook + ELT | Procurement/business owner |
| HR, recruitment and talent facts | Client HRIS/ATS; HUB retains permitted projections | Client HR/ATS, approved connectors | Academy, intelligence, journey, reporting | API/webhook/SFTP + ELT | Client/source steward |
| Metrics, cohorts, models and lineage | Governed warehouse/lakehouse semantic layer | ELT jobs, metric pipelines, model services | Dashboards, platform, finance, claims review | Query API/exports + lineage metadata | Data/intelligence owner |
| Audit, security and delivery telemetry | Central observability/audit store | Every service, gateway, IAM and pipeline | Security, operations, governance, incident response | Structured logs/events + restricted queries | Security/operations owner |
| Recognition decisions and Selo evidence | Independent recognition workflow boundary | Evaluators, evidence service, operators | Approved public output, appeals, audit | Restricted API + immutable decision events | Independent recognition governance |

Interfaces should be cataloged in one registry linked to canonical entity and event definitions. Each interface entry must identify producer, consumer, system-of-record fact, data classification, consent purpose, owner, contract version, support tier, test suite and retirement date. This directly addresses TEC-001 and TEC-006; the map is a blueprint artifact, not an assertion that these services exist.

## 3. Conceptual requirements for APIs, events, webhooks, ELT, replay, reconciliation and rollback

### APIs

APIs should be contract-first and resource/domain-oriented. They require explicit authentication and authorization scopes, tenant/context scoping, stable identifiers, correlation/request IDs, schema version, idempotency keys for commands, pagination/filter limits, validation errors, audit metadata and documented timeout behavior. Reads must not silently cross tenant or purpose boundaries. Writes should return an operation/result status that distinguishes accepted, completed, rejected and pending review.

External APIs must be behind an integration gateway or adapter layer that applies secret handling, rate limiting, payload validation, consent checks, retries and telemetry. Breaking changes require a versioned contract, consumer notice and migration window. Interface approval requires contract tests, security review, ownership acceptance and evidence that the system-of-record direction is unambiguous (TEC-001).

### Events

Events should use a canonical envelope containing event ID, event type, schema version, occurred-at and observed-at timestamps, producer, tenant/context, actor or service principal, subject/entity key, correlation/causation IDs, consent/purpose classification, payload, and lineage/source reference. Producers must publish only events they own; consumers must be idempotent and record processing outcome.

The event catalog and schema registry must govern compatibility, retention, replay eligibility and sensitive-field handling. Events represent facts or state transitions, not unapproved assertions of value. Event versioning and replay tests depend on [[DAT-003 — Canonical event envelope]].

### Webhooks and external delivery

Webhooks are delivery mechanisms, not systems of record. They require signed requests, timestamp/replay protection, endpoint ownership, allow-listing where appropriate, idempotency, bounded retries, exponential backoff, dead-letter handling and a delivery log. Consumers must acknowledge quickly and process asynchronously. A webhook receiver must tolerate duplicates, reordering and delayed delivery; the source event ID remains the deduplication key.

### ELT and data quality

ELT pipelines must land source-faithful records before transformation, capture extraction watermark and source cursor, preserve raw payload and schema version, and make every transformation traceable to a job/version. Quality gates should cover completeness, freshness, uniqueness, referential integrity, validity, consent status and identity-match confidence. Failed records move to quarantine with reason, owner and remediation state rather than disappearing or contaminating curated marts.

Each pipeline needs an explicit load mode (snapshot, incremental, CDC or event-driven), late-arrival policy, deletion/correction policy, cost and volume baseline, rate-limit behavior and reconciliation cadence. Those requirements remain unvalidated until technical baselines exist (TEC-005).

### Replay and reconciliation

Replay must be bounded, authorized and observable. A replay request identifies source range/event IDs, reason, requester, target projection, consent policy, expected impact and rollback plan. Consumers must be idempotent; side effects such as notifications, external writes or recognition decisions require a replay-suppression or compensating-action policy.

Reconciliation compares source counts, checksums or business totals, identity mappings, event offsets, failed/quarantined records and curated outputs. It produces a signed reconciliation result, variance classification, owner and disposition. Identity merges, corrections and survivorship must be reversible and preserve aliases and provenance, as required by [[DAT-002 — Identity resolution]].

### Rollback and recovery

Rollback is defined per change type: code release, schema, configuration, data correction, model/rule version and external delivery. Prefer forward-fix or compensating events for append-only facts; restore or projection rebuild is allowed only with evidence of consistency and approved data-loss boundaries. A rollback must not erase audit history or conceal a prior output.

Every critical flow needs a runbook for dependency outage, malformed payload, credential failure, queue backlog, data-quality breach, tenant-isolation suspicion and accidental disclosure. SLOs, RTO/RPO, alert thresholds, failure ownership, on-call coverage and recovery drills are future approval conditions, not approved NFRs today (TEC-002). Recovery approval requires drills meeting approved service and data-integrity thresholds.

## 4. Tenant isolation, IAM, secrets, environments, observability and security assumptions

### Tenant isolation

Tenant/context must be a mandatory security boundary in tokens, API requests, event envelopes, storage keys, query policies and analytical projections. The target model should use defense in depth: service authorization, row/object-level policy, tenant-aware encryption/key boundaries where warranted, isolated queues or namespaces for sensitive workloads, and automated cross-tenant access tests. Shared taxonomies may be global only when explicitly classified as non-tenant data; participant, evidence, contract and outcome data default to tenant-scoped.

Cross-tenant aggregation requires approved purpose, anonymization or minimum-cell rules, suppression of re-identification risk and a defined owner. White-label configuration may alter presentation and branding, but cannot bypass identity, consent, methodology, audit or recognition controls.

### IAM and privileged access

IAM should use centralized identity federation where available, least privilege, scoped service identities, role/attribute-based authorization, short-lived credentials, MFA for privileged and operator access, separation of duties and periodic access recertification. Roles must distinguish participant, client admin, operator, analyst, evaluator, integration service, support and security investigator. Break-glass access requires time-bound approval, enhanced logging and post-incident review.

Authorization decisions must be testable against the product role/tenant matrix from [[PRD-003 — Role, permission and tenancy model]]. No automated intelligence output can grant itself authority to publish, match, recognize, delete or change financial facts.

### Secrets and cryptography

Secrets belong in a managed secret store, never source code, logs, payloads or ordinary configuration. The refinement design must specify issuance, rotation, revocation, ownership, emergency replacement, partner credential boundaries and audit evidence. Encryption in transit and at rest is expected as a target control; key management, regionality and field-level encryption decisions require threat-model evidence. Secret rotation tests and incident procedures are part of TEC-004 approval.

### Environments and release controls

The target lifecycle separates local/development, test/contract, staging/UAT and production environments; production data is not copied into lower environments without approved masking and purpose. Environment configuration, schemas, feature flags, migrations and infrastructure are version-controlled and promoted through review. Production access and deployments are restricted, observable and reversible. No environment exists today merely because this blueprint names it.

Release gates should include unit/integration/contract tests, migration rehearsal, security checks, data-quality checks, observability validation, backup/restore evidence, change owner and rollback plan. Release, support and operational ownership remain unresolved until the delivery lifecycle and launch runbook are approved (TEC-007).

### Observability and incident response

Every request, event, pipeline run and model job should emit structured telemetry with correlation ID, tenant/context (protected), actor/service, version, latency, status, retry count and lineage reference. Metrics should cover availability, latency, error rate, queue lag, freshness, data-quality variance, identity-match outcomes, cost, rate-limit usage and security events. Traces must avoid sensitive payloads; logs require classification, retention and access controls.

Alerts need thresholds, severity, owner, escalation and runbook links. Security incidents require triage, containment, evidence preservation, notification decision, remediation and lessons learned. Observability and security evidence must be retained sufficiently for LGPD, contractual and audit obligations, subject to approved retention. TEC-002 and TEC-004 remain open until operational tests and security remediation evidence exist.

### Approved nonfunctional requirements versus assumptions

At blueprint maturity, the following are **expectations requiring approval**, not approved requirements: availability/SLO targets, latency budgets, throughput and volume ceilings, RTO/RPO, recovery point, cost envelope, rate limits, supported regions, retention periods, encryption/key standards, vulnerability remediation times and staffing/on-call coverage. Architecture review must approve these values with product, data, operations, finance, privacy and security evidence (TEC-003 and TEC-005).

## 5. Architecture choices connected to product, data, operations, finance and launch dependencies

Architecture follows the project chain `diagnosticar → planejar → conectar → implementar → medir → reconhecer → evoluir` and the data chain `fontes → identidades → sinais → inteligência → ação → resultado → valor financeiro`. The choices above preserve a stable operational core, governed analytical history and explicit human controls rather than allowing integrations or models to define product behavior implicitly.

| Dependency | Architecture consequence | Required coordination / gate |
|---|---|---|
| Product modules and C.A.O.S. | Domain/workflow APIs must represent module boundaries, states, review queues and operator accountability. | Depends on BP-002: confirm capability taxonomy, MVP boundary, role/tenant matrix and human/automated decisions before interface contracts. |
| Data contracts and intelligence | Canonical IDs, events, metrics, lineage and model versions are shared primitives; analytical projections cannot redefine operational facts. | Depends on BP-003: confirm logical/physical entities, keys, event envelope, metric definitions, identity rules and value-state semantics. |
| Operations and support | Every integration and pipeline has an owner, runbook, alert, escalation and recovery path; automation is limited by operational capacity. | Product/operations must approve service blueprints, on-call coverage and exception handling before launch. |
| Finance and value | Financial ledger facts remain authoritative in entity finance systems; value marts expose evidence status and never convert activity to realized value automatically. | Finance must approve cost envelope, KPI dictionary, attribution and evidence standards before financial claims. |
| Governance, LGPD and Selo HUB | Consent, entity boundaries, audit, deletion, portability, evaluator independence and public-claim controls are enforced at interfaces and outputs. | Legal/privacy/independent recognition governance must clear each relevant flow; [[GOV-002 — Data roles and rights]] and [[GOV-003 — Selo independence]] remain dependencies. |
| Partnerships and distribution | External systems are adapters with fallbacks; no hypothetical partner is treated as an available dependency. | Partner commitments, access, limits and data obligations must be evidenced before making an integration launch-critical. |
| Launch and readiness | Release, monitoring, support, rollback, security and contract tests form one integrated gate, not separate technical checklists. | [[LCH-001 — Integrated launch gate]] and [[LCH-002 — Operational readiness]] must approve the complete evidence packet. |

M0–M4 architecture stages are sequencing hypotheses: M0 establishes IDs, taxonomy, event/indicator catalogs and operational dashboards; M1 adds source connections, graph/cohorts/matching; M2 adds value mart and attribution; M3 adds controlled predictive intelligence; M4 adds anonymous benchmarks and multi-ecosystem scale. Exit criteria, owners, denominators, evidence and approval decisions must be defined before treating a stage as delivered.

## 6. Separation of target architecture, implemented technology and approved nonfunctional requirements

This document intentionally uses three maturity labels:

- **Target architecture** — the boundaries, responsibilities, flows and control intent described here. It is a design hypothesis for refinement.
- **Implemented technology** — code, infrastructure, configuration, integrations, tests, runbooks and operational evidence that have actually been built and verified. No such production implementation is evidenced by the foundation; this blueprint does not claim one.
- **Approved nonfunctional requirements** — numeric or enforceable commitments accepted by accountable product, operations, finance, security, privacy and governance owners. The blueprint proposes categories and approval conditions but does not approve values.

Accordingly, “should” and “target” describe architecture intent; they do not mean deployed. A component becomes conditionally approved only when its contract, owner, evidence and dependencies are recorded. It becomes launch-ready only after release, security, recovery, support, data-rights and integrated launch gates pass. Vendor, cloud, framework and database selections are deliberately deferred until capacity, cost, privacy, maintainability and operating evidence are available.

## Open Assumptions and Unresolved Decisions

| Assumption / unresolved decision | Affected gap IDs | Refinement action |
|---|---|---|
| The product boundary between shared platform core, offer configuration and service operations is still unsettled. | TEC-003, TEC-007 | Depends on BP-002: approve capability taxonomy, module contracts, workflow states and operating ownership. |
| Canonical entities, keys, event envelope and metric/value semantics can support all target modules without hidden alternate authorities. | TEC-001, TEC-003, TEC-006 | Depends on BP-003: approve logical/physical model, event registry, identity resolution and lineage contracts. |
| CRM, consent, identity and warehouse are the correct M0 integration priorities and can be accessed under acceptable terms. | TEC-001, TEC-005, TEC-006 | Validate source access, partner commitments, payloads, volumes, rate limits, cost and fallback before sequencing. |
| Required availability, latency, throughput, RTO/RPO, retention and cost targets are achievable with the intended operating model. | TEC-002, TEC-003, TEC-005 | Establish baselines, capacity model, SLO proposal and recovery drills; obtain architecture, finance and operations approval. |
| A single identity/master-data boundary can resolve aliases, merges and survivorship across tenants and source systems reversibly. | TEC-001, TEC-005, TEC-006 | Define matching thresholds, stewardship, correction workflow and representative test datasets. |
| Tenant isolation, cross-tenant aggregation and white-label boundaries can satisfy LGPD, contractual and methodology constraints. | TEC-003, TEC-004 | Complete threat model, authorization matrix, privacy flow map and isolation tests. |
| Legal entity/controller-processor boundaries for HUB Negócios, Instituto HUB, Plataforma HUB and Selo HUB can be reflected in systems and data flows. | TEC-004, TEC-006 | Depends on governance/legal refinement: approve entity, data-role, IP, retention and exit decisions before shared services. |
| Human review capacity and independent evaluator governance are sufficient for recommendations, matching and recognition before automation expands. | TEC-002, TEC-004, TEC-007 | Define review queues, SLAs, override/appeal controls, evaluator independence and incident escalation. |
| External partner APIs, HRIS/ATS/LMS/ERP/procurement/risk systems will provide stable, supportable interfaces. | TEC-001, TEC-005, TEC-007 | Create partner/interface inventory, contract tests, deprecation policy and fallback path; do not treat hypotheses as dependencies. |
| Replay, reconciliation and rollback can preserve auditability while compensating for side effects and late corrections. | TEC-002, TEC-003, TEC-006 | Prototype failure/recovery drills with event, ELT, identity and external-delivery test cases. |
| Finance can distinguish ledger facts, potential/influenced/validated/realized value and HUB revenue without double counting. | TEC-003, TEC-005 | Depends on BP-003 and finance refinement: approve metric lineage, attribution, source-of-truth ledger and evidence status. |
| A deployable environment strategy, support model and on-call ownership can be staffed before launch. | TEC-002, TEC-003, TEC-007 | Define environment controls, release runbook, support tiers, escalation and operational readiness evidence. |

All assumptions remain open until the linked gap’s missing element, dependency, evidence, accountable owner and approval condition are satisfied. This blueprint does not close TEC-001 through TEC-007.

## Cross-Blueprint Dependencies

- **Depends on BP-002:** product and operating blueprint must establish the capability taxonomy, MVP boundary, actor/role model, tenant behavior, C.A.O.S. traceability, human-in-the-loop decisions and service ownership. Until then, the platform boundaries and API surface remain coordination points.
- **Depends on BP-003:** data and intelligence blueprint must establish canonical entities, keys, event contracts, metric/value semantics, identity resolution, lineage, consent propagation and model governance. Until then, this document cannot claim approved schemas or NFRs.
- **Depends on governance/legal blueprint work:** controller/processor roles, entity separation, IP, retention/deletion, portability, liability and Selo HUB independence must constrain interfaces and storage before launch-critical integration approval.
- **Depends on finance and offer architecture work:** revenue engine, cost envelope, financial ledger authority, attribution and technical economics must be approved before capacity or availability targets become commitments.
- **Depends on operations and launch work:** named owners, support tiers, on-call, runbooks, incident response, release controls and the integrated launch gate must exist before any target component is represented as deployable or production-ready.

## Traceability to TEC gaps

- [[TEC-001]] — addressed through interface registry, system-of-record matrix, contract-first APIs/events/webhooks and security review conditions.
- [[TEC-002]] — addressed through SLO approval conditions, failure ownership, runbooks, alerting, replay/rollback and recovery drills.
- [[TEC-003]] — addressed through target boundaries, environments and explicit separation from implemented technology and approved NFRs.
- [[TEC-004]] — addressed through tenant isolation, IAM, secret management, observability, audit and incident process assumptions.
- [[TEC-005]] — addressed through cost/latency/volume/rate-limit/availability baselines and capacity approval conditions.
- [[TEC-006]] — addressed through cross-system identity, ownership and system-of-record mapping.
- [[TEC-007]] — addressed through release lifecycle, environment controls, support model and operational readiness dependencies.
