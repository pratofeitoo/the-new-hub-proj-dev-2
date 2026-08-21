---
title: "HUB Governance and Legal Blueprint"
blueprint_id: BP-006
status: draft
layer: blueprint
area: governance-legal
source_task: "[[04-project-management/tasks/BP-006_HUB_Governance_and_Legal_Blueprint]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [GOV-001, GOV-002, GOV-003, GOV-004, GOV-005, GOV-006, GOV-007, GOV-008, GOV-009]
---

# BP-006 — HUB Governance and Legal Blueprint

> [!warning] Status and legal boundary
> This is a governance and legal **blueprint**, not legal advice, legal approval, a legal opinion, a compliance certification or launch authorization. It records proposed controls and unresolved questions for qualified legal, privacy, tax, accounting, risk and independent Selo review. No entity, role, right, claim or contract described here should be treated as an established fact until the relevant professional approval and evidence exist.

## 1. Responsibilities and boundaries of the four conceptual units

The four units are conceptual boundaries, not evidence that four legal entities already exist. [[01-blueprint/strategy/HUB_Project_Blueprint_Foundation]] identifies their intended roles while [[00-project-control/gap-register/gaps/GOV-001|GOV-001]] remains open. Refinement must decide whether each unit is a separate entity, a brand, a cost center, a contractual role or another structure.

| Conceptual unit | Governance responsibility | Boundary and prohibited assumption | Required interface |
|---|---|---|---|
| **HUB brand and strategy** | Own or control positioning, method standards, narrative, group direction, naming and cross-unit policy. Maintain the approved claims, methodology and brand registers. | Does not silently become the contracting seller, data controller, service operator or Selo evaluator. Brand use must follow written licenses and approval gates. | Policy and IP licenses to [[HUB Negócios]], [[Instituto HUB]] and [[Plataforma HUB]]; claims and escalation forum across all units. |
| **HUB Negócios** | Contract commercial services, implementation, relationships, solutions, marketplace or other approved business offers; accept commercial delivery and customer obligations. | Cannot promise platform behavior, impact outcomes, financial results or recognition beyond approved evidence and contract scope. Cannot purchase, condition or guarantee Selo recognition. | Statements of work, service levels, supplier terms, indemnity/insurance allocation and data-flow schedules. Coordinate with BP-005: operating handoffs, staffing, support and delivery controls remain to be specified there. |
| **Instituto HUB** | Conduct restricted impact, education or mission-oriented activity only under a separately approved mandate, funding policy, reporting model and stewardship arrangement. | Must not be assumed to be a charity, public-interest entity, tax-exempt body or recipient of restricted funds until legally and financially confirmed. Restricted resources and beneficiaries cannot be used as an informal subsidy for commercial activity. | Funding agreements, grant restrictions, arm’s-length intercompany terms, safeguarding and outcome reporting. Coordinate with BP-005: operational separation and service handoffs are open points. |
| **Plataforma HUB** | Provide software, data, workflows, intelligence services, access controls, auditability, exports, support boundaries and technical release controls. | Must not be assumed to own every customer dataset, decision, recommendation or derived insight. Platform availability does not equal accuracy, suitability, supplier quality or outcome guarantee. | Product terms, DPA/data schedules, API and system-of-record contracts, incident process, deletion/portability and model-release gates. |

Shared capabilities (identity, taxonomy, C.A.O.S., evidence, finance, security and governance) require an explicit owner and access model. Unit boundaries must connect to business offer ownership, product capability boundaries, data stewardship and operating accountability—not merely to an organization chart. No unit may use another’s name, data, personnel, IP, bank account or authority without an approved agreement. The final structure must document incorporation, ownership, bank accounts, signing authority, tax treatment, intercompany pricing, insurance and records responsibilities (GOV-001).

## 2. Contracts, IP, data rights, controller/processor roles, retention and portability

### Contract architecture

The contract stack should be modular, with a controlled template/version register and legal review before use:

1. **Customer and institution framework agreement:** scope, parties, authority, fees, term, acceptable use, confidentiality, warranties, liability cap, insurance, audit, suspension, termination and exit.
2. **Statement of work / journey order:** objectives, deliverables, data sources, roles, measures, evidence standard, human approvals, assumptions, dependencies, change control and acceptance.
3. **Platform terms and service levels:** user permissions, tenant isolation, uptime/support boundary, security, integrations, model/recommendation disclaimers, export and deletion.
4. **Data processing addendum and flow schedule:** categories, subjects, purposes, fields, legal basis, instructions, subprocessors, transfers, security, incidents, retention and deletion evidence.
5. **Supplier, evaluator and specialist agreements:** qualification, confidentiality, IP, conflicts, safety, insurance, service quality, non-circumvention where appropriate, and incident cooperation.
6. **Partner, funder and Institute agreements:** roles, branding, restricted-use terms, reporting, allocation, beneficiary safeguards and independence controls.
7. **Selo participation and recognition terms:** criteria, evidence, evaluator independence, fees (if any), conflicts, appeals, suspension, withdrawal, publication and claim restrictions.

Contracts must allocate—not obscure—responsibility for recommendations, matches, suppliers, data incidents, public claims, financial claims and third-party dependencies (GOV-004). No disclaimer can replace reasonable controls or make a mandatory legal obligation disappear. Contract templates remain proposed until professional review.

### IP and chain of title

Create an IP register covering HUB names and marks; C.A.O.S. method materials; questionnaires, taxonomies and rubrics; content and training; software and configuration; schemas, event definitions and documentation; model prompts, code, weights and model cards; customer contributions; datasets and data products; reports and dashboards; and derivative works. Each item needs origin, creator/contributor, owner or licensee, permitted use, territory, term, exclusivity, attribution, third-party/open-source obligations, restrictions and exit treatment.

Contributor, employee, contractor, partner and customer agreements must establish rights consistent with applicable law without assuming assignment is automatic. Customer data access is not ownership of customer data; a license to process is not a license to repurpose. Derivatives (aggregates, scores, embeddings, benchmarks, model features and reports) require an explicit rights and confidentiality analysis rather than implied platform ownership. Brand and method integrity must survive white-label deployment (GOV-006).

### Data roles and rights

Roles must be assigned flow by flow, not by product label. For each source, purpose and output, record who determines purpose/means, who acts on documented instructions, who jointly determines decisions, who receives data, and who is a subprocessor or independent controller. Potential roles include customer/institution controller, a HUB unit processor, a separate HUB controller for its own legitimate operational purposes, joint controllers, suppliers and independent Selo governance. These are hypotheses requiring LGPD review; no role is settled here (GOV-002).

The flow register must map data subjects, sensitive data risk, purpose, minimum fields, lawful basis, notice/consent where applicable, objection/withdrawal, access/correction/deletion, recipient, cross-border processing, derived-data use, model training/use, retention trigger and accountable steward. Purpose limitation, minimization, security, transparency, accuracy, prevention, non-discrimination and accountability apply throughout the lifecycle. Consent, where used, must be specific, demonstrable, revocable and propagated; it must not be presumed from participation.

### Retention, deletion and portability

Retention schedules must be purpose- and event-based (for example, contract end, last activity, legal hold or appeal closure), with separate periods for source records, evidence, audit logs, billing, model artefacts, reports, backups, caches and security records. Legal holds and regulatory retention must be documented and narrowly scoped. Deletion or anonymization must propagate through production stores, derivatives, indexes, exports, subprocessors, backups and caches, with exceptions logged and time-bounded.

An exit runbook must identify request intake, identity verification, scope, holds, affected tenants, notices, export format, delivery security, deletion propagation, supplier confirmations, residual backups and closure evidence. Portability must distinguish a person’s or customer’s export rights from confidential HUB IP, third-party rights, security data and genuinely anonymized aggregates. Test the full path against approved SLAs before launch (GOV-007); do not promise a format or deadline until validated.

## 3. Accountability, decision rights, RACI, escalation and incident governance

### Decision-rights model

Every critical activity has exactly one **Accountable** owner, even when several teams execute or advise. Decision records must state the decision, scope, evidence, assumptions, approver, dissent, effective date, expiry/review date and rollback/appeal route. No approval may be inferred from participation, silence or a draft artifact.

| Decision/activity | Accountable (one owner to assign) | Responsible examples | Consulted / informed | Gate or escalation |
|---|---|---|---|---|
| Unit/entity, tax and intercompany structure | Group governance/board delegate (to assign) | Legal and finance workstream | All four units | Legal/finance approval; unresolved structure blocks launch (GOV-001). |
| Contract template, liability, insurance and claims allocation | Legal/risk owner (to assign) | Commercial and platform contract owners | Data, operations, finance, Selo governance | Escalate non-standard exposure before signature (GOV-004). |
| Data purpose, lawful basis, role and rights flow | Privacy/data governance owner (to assign) | Data stewards and platform | Customer, security, legal, operations | Privacy review; stop affected flow if unclear (GOV-002). |
| Source stewardship, identity correction and metric definition | Data governance owner (to assign) | Source stewards, data/analytics | Product, finance, customer | Reconciliation and evidence review; no silent overwrite. |
| Product release, model/recommendation and high-impact human review | Product/model-risk owner (to assign) | Engineering, analysts, reviewers | Privacy, security, operations, affected stakeholders | Release gate, rollback and appeal (GOV-009). |
| Selo criteria, evaluator appointment and recognition | Independent Selo body/chair (to appoint) | Evaluators and secretariat | Legal, affected participant, ethics/conflicts reviewer | Recusal, appeal and independent review (GOV-003). |
| Privacy/security incident response | Incident commander (to assign per event) | Security, platform, privacy, communications | Affected customers, legal, executives | Severity clock, containment, notification decision and postmortem. |
| Public, impact and financial claims | Claims approver (to assign) | Brand, commercial, data/finance | Legal, method owner, Selo body where relevant | Evidence-linked publication gate; withdrawal if challenged. |

Coordinate with BP-005: the operational model must convert these governance accountabilities into named roles, coverage, runbooks, handoffs, service levels and staffing. BP-006 does not invent those operating details. The final RACI must remove multiple accountables, identify every missing owner, include source stewardship and incident response, and be approved before critical activity begins (GOV-008).

### Escalation and incident governance

Escalation triggers include suspected unlawful processing, rights-request failure, security compromise, material data-quality or identity error, discriminatory or unexplained recommendation, model drift, unsupported claim, supplier failure, Selo conflict, unsafe intervention, contract breach, financial misstatement or loss of required evidence. Any operator may pause publication, automated action, recognition or affected processing when a trigger is credible; the pause itself must be logged and cannot be punished as a delivery failure.

The incident lifecycle is: detect and log → classify severity and affected units/data subjects → contain and preserve evidence → assign incident commander and accountable owner → assess legal/contractual notification → communicate through approved channels → remediate/recover or roll back → validate closure → document root cause, residual risk and corrective actions → independently review recurrence. Maintain an incident register, decision log, evidence retention, customer/partner communications and lessons learned. Notification timing, regulator interaction and individual communications remain professional-review decisions, not assumptions.

## 4. Conceptual independence requirements for Selo HUB

**Selo HUB is a dedicated controlled capability, not merely another feature of HUB Negócios or Plataforma HUB.** It may share infrastructure only where access, decision rights, records and incentives preserve independence. Recognition is not cleared for commercial use while GOV-003 is open.

Minimum conceptual controls:

- **Mandate and charter:** publish purpose, scope, criteria, evidence standard, prohibited influence, evaluator duties, review cadence and authority to suspend or withdraw a seal.
- **Structural separation:** define an independent body or committee, its appointment, tenure, removal, quorum and conflict-free decision process. Commercial implementation teams cannot unilaterally appoint, direct or override evaluators.
- **Evaluator independence:** competency and disclosure requirements; no evaluation where the evaluator has a relevant commercial, financial, employment or personal conflict; documented recusal and replacement.
- **Funding and incentives:** evaluation compensation must not depend on a positive result, customer renewal, marketplace transaction or commercial revenue. Funding and shared-service arrangements require transparency and controls against economic dependence.
- **Evidence and reproducibility:** criteria, versioned rubric, evidence provenance, assessment record, reviewer reasoning, dissent and decision must be retained. Customer-paid implementation cannot substitute for evidence.
- **Due process:** notice of findings, opportunity to respond, accessible appeal, independent appeal review, timelines, correction, suspension and withdrawal; preserve prior public records with clear status rather than silently rewriting history.
- **Publication and use:** controlled mark license, approved directory, validity period, scope and limitations. A Selo cannot imply universal quality, legal compliance, financial performance or guaranteed impact.
- **Information barriers:** evaluator data and deliberations are segregated from sales targeting and implementation incentives; access is least-privilege and audited.
- **External review:** an independent review must approve the model before launch and periodically test conflicts, outcomes, complaints, withdrawal and commercial pressure (GOV-003).

The blueprint deliberately does not choose the final legal form, accreditation status, certification terminology, fee model or regulatory treatment. Those are open legal and governance decisions, not implied facts.

## 5. Publication, claims, fairness, explainability, human review and model-control principles

### Publication and claims

Use a claims register for every external statement, dashboard, case study, benchmark, model output, financial result, Selo reference and partner endorsement. Each claim needs owner, audience, scope, date, evidence links, metric definition, denominator, caveats, maturity/evidence state, approver, expiry and withdrawal path. Distinguish potential, influenced, validated and realized value; do not present illustrative ROI, correlation, pipeline, activity or model output as realized cash, causal impact or guaranteed outcome. Claims must be consistent across Portuguese and English materials and white-label contexts.

Publication gates should block release when evidence lineage is missing, definitions changed, samples are inadequate, privacy/confidentiality is unresolved, a model is out of control, a Selo conflict exists, or a legal/contractual approval is pending. GOV-005 requires executable control tests and retained sign-offs across data, models, metrics and releases; a policy statement alone is insufficient. Material errors require correction, prominent withdrawal where appropriate, customer notification assessment and a preserved audit trail.

### Responsible intelligence

Before any model, recommendation, ranking, match, risk signal or automated decision is released, classify impact and document intended use, prohibited use, affected populations, data provenance, limitations, human role, evaluation protocol and rollback. Model cards or equivalent records must include version, owner, training/selection data, features or logic at an appropriate level, metrics, subgroup results, known failure modes, drift indicators, review date and approval status.

Fairness controls must define relevant protected groups and proxies with privacy-respecting handling, minimum sample rules, comparison populations, chosen fairness measures, acceptable thresholds, uncertainty treatment, remediation and an exception approver. Do not infer protected attributes casually or claim fairness because an aggregate metric looks balanced. Test for disparate error, exclusion, proxy effects, accessibility and language/context failures. Thresholds are to be set in refinement and independently reviewed (GOV-009).

Explainability must be fit for the decision and audience: disclose that assistance/modeling was used where material; provide meaningful factors, evidence, uncertainty and limitations; allow correction of source data; and avoid fabricated causal explanations. A human reviewer must be able to inspect evidence, challenge or override a result, document reasoning, communicate a comprehensible explanation and route an appeal. High-impact decisions remain human-led until approved controls demonstrate safe operation; automation cannot remove accountability.

Controls include pre-release validation, shadow or limited deployment where appropriate, monitoring for quality/fairness/drift, alert thresholds, periodic review, access/version control, immutable audit events, incident pause, rollback to a known-good version, and post-release evidence. Training on customer data, re-use of derivatives, external model providers and prompt/data retention need explicit purpose and contract review. No model-control claim is approved solely because a model card exists; evidence must show controls operate.

## 6. Open Assumptions and Unresolved Decisions

| Assumption / unresolved decision | Affected gap IDs | Refinement action |
|---|---|---|
| The four conceptual units can be made legally, tax-wise and operationally coherent, with clear ownership, signing authority and intercompany economics. | GOV-001, GOV-008 | Commission entity architecture; decide entity/brand/cost-center treatment; approve responsibility and authority matrix with legal and finance. |
| A flow-by-flow LGPD analysis will determine controller, processor, joint-controller and subprocessor roles, lawful bases and derivative-data rights. | GOV-002, GOV-007 | Build purpose/field/role/lifecycle map; obtain privacy review; test rights propagation, deletion and portability. |
| Selo HUB can operate independently while sharing selected HUB infrastructure without conflicted incentives or information leakage. | GOV-003, GOV-004, GOV-005 | Draft charter, evaluator/conflict/appeal rules, funding model and information barriers; obtain independent review and run control tests. |
| Commercial contracts can allocate recommendation, match, supplier, claim, data-incident and third-party risk with insurable residual exposure. | GOV-004, GOV-001 | Build liability/insurance/indemnity matrix; draft templates and non-standard approval route; secure legal/risk sign-off. |
| Governance controls can produce executable, retained evidence across data, metrics, models, publication and release. | GOV-005, GOV-009 | Define control catalogue, test cases, evidence repository, sign-off workflow, model cards, thresholds and rollback drills. |
| Brand, C.A.O.S., content, software, schemas, data products and derivatives have a complete enforceable chain of title and license boundary. | GOV-006, GOV-001 | Create IP register; obtain contributor/contractor/customer agreements; audit third-party and open-source terms. |
| Retention, DSAR, deletion, anonymization and portability can propagate through backups, caches, suppliers and partner exits within approved SLAs. | GOV-007, GOV-002, GOV-005 | Implement lifecycle runbook; execute propagation tests; retain confirmations and document exceptions/legal holds. |
| Each critical activity can have one named accountable owner, including source stewardship and incident response, with operational handoffs that work in practice. | GOV-008, GOV-005 | Rebuild decision-rights/RACI matrix; coordinate with BP-005 on role coverage, runbooks, SLAs and escalation drills. |
| Responsible-intelligence thresholds, protected-group treatment, explainability, human review and rollback are appropriate for each use case and jurisdiction. | GOV-009, GOV-002, GOV-005 | Establish impact classification and review protocol; validate subgroup results and appeal paths before release. |

These assumptions are deliberately visible. None is an approval, legal conclusion, production control or launch authorization. Closure requires the gap-register definition: missing element defined/implemented, dependencies connected, traceable evidence, accepted accountability, passed approval condition and no unresolved contradiction.

## 7. Cross-Blueprint Dependencies

- **[[01-blueprint/strategy/HUB_Project_Blueprint_Foundation]]:** source of the four-unit architecture, C.A.O.S., platform modules, value/evidence maturity and Selo sensitivity; this blueprint adds controls without converting concepts into facts.
- **BP-001 / business and offer architecture:** must specify who buys, contracts and receives each offer, revenue boundaries, customer promises and claim surfaces. Governance boundaries feed offer terms and prohibited promises.
- **BP-002 / product blueprint:** must convert platform modules, permissions, human review, audit events, publication gates and export/delete behavior into product requirements. Governance approves boundaries; it does not invent UX or implementation detail.
- **BP-003 / data and intelligence blueprint:** must provide canonical entities, data lineage, purpose-to-field map, model versions, evidence states and responsible-intelligence metrics needed for GOV-002, GOV-005, GOV-007 and GOV-009.
- **BP-004 / technology architecture:** must implement tenancy, IAM, audit logs, encryption, retention/deletion propagation, backups, release controls, rollback, secrets and incident telemetry required by this blueprint.
- **BP-005 / operating model:** coordinate role coverage, SOPs, service/support handoffs, escalation, incident command, evaluator administration and operational RACI. Open handoff items are explicitly not invented here.
- **Finance and value workstream:** must separate commercial and restricted Institute economics, validate claims, define evidence-certified financial metrics and support intercompany/insurance decisions.
- **Brand, communications and GTM workstreams:** must use the claims register, approved terminology, evidence states, white-label limits and Selo mark controls; no deck or campaign may outrun approval status.
- **Launch and project-control workstreams:** must connect each GOV gap to an owner, evidence packet, decision record, approval authority and integrated launch gate. GOV-005 controls should be a launch blocker when critical evidence is absent.

The dependency order is explicit: unit and offer boundaries → product and data flows → contracts/IP and technical controls → operating ownership → evidence and independent review → integrated launch approval. Parallel work is permitted only when interfaces and unresolved decisions remain visible.
