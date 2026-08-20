---
title: "HUB v2 product and MVP research"
subtitle: "Pilot product, sequencing, scalability, and compounding advantage"
date: 2026-08
status: research artifact
source_documents:
  - "HUB_Escopo_Estrategico_Documento_Mae_v1.md"
  - "HUB_Escopo_Estrategico_Documento_Mae_v2_Investor_Readiness_Plan.md"
  - "HUB_v2_beachhead_research.md"
tags:
  - hub
  - investor-readiness
  - product
  - mvp
  - scalability
---

# HUB v2 Product and MVP Research

## Executive recommendation

Build a narrow, institution-sponsored workflow for a defined cohort of small businesses facing one real buyer opportunity or procurement pathway. The product proves this loop:

> onboard -> diagnose readiness -> collect basic evidence -> prioritize the smallest gap-closing action -> curate a solution or buyer connection -> track follow-through -> report the outcome.

The pilot is not a national marketplace, a general-purpose maturity platform, an autonomous AI adviser, or a certification product. It is a software-supported service with a deliberately manual operating layer. Product investment should follow evidence that the workflow creates measurable value and can be repeated without manual effort growing in direct proportion to revenue.

This recommendation is a working decision, not evidence of customer demand, traction, willingness to pay, or engineering capacity. The selected institutional buyer, budget, opportunity, cohort, and numeric success thresholds remain to be validated before a pilot begins.

## Source-grounded design constraints

V1 defines six central modules: HUB Intelligence, Journey, Solutions, Connections, Academy, and Recognition. It also defines the broader journey as diagnose, plan, connect, implement, measure, recognize, and evolve. The approved v2 plan requires proving only the smallest complete journey and gates every additional module on repeated demand, measurable usage, revenue contribution, reduced manual effort, reusable core functionality, and acceptable data/support burden.

The beachhead research recommends an institutional license for demand-led small-business opportunity readiness, with implementation-led pilot economics and annual ecosystem licensing as the primary hypothesis. Human-assisted matching is explicitly preferred before marketplace liquidity exists. No named institution should be treated as committed until an interview and a written paid or formally funded pilot confirm it.

## Smallest journey that proves value

### Pilot actor and object model

- **Institution:** owns the program, cohort access, buyer/opportunity context, and aggregate outcome review.
- **Participant business:** submits readiness information and evidence, receives a prioritized plan, and completes agreed actions.
- **Opportunity/buyer:** supplies a defined demand or procurement pathway; it is not a generic marketplace listing.
- **HUB operator:** configures the diagnostic, reviews evidence, curates recommendations, performs matching, supports exceptions, and produces the report.
- **Solution or specialist:** receives a qualified, consented referral only when it addresses an observed gap.

### Minimum end-to-end flow

1. **Program setup:** create one institution, one opportunity theme, one cohort, one reporting cycle, roles, consent language, and baseline/outcome definitions.
2. **Onboarding:** invite or register businesses, capture only fields required for this opportunity, and record participation consent.
3. **Readiness diagnosis:** complete a configurable questionnaire tied to the opportunity; attach basic evidence where needed.
4. **Review and result:** calculate a transparent readiness result using fixed rules and a human review queue; show missing evidence and confidence/limitations.
5. **Prioritized plan:** produce a short plan with the fewest actions likely to improve readiness, an owner, due date, and required evidence.
6. **Curated intervention:** recommend a specific content item, specialist, supplier, preparation activity, or buyer introduction. Recommendations are curated and explainable.
7. **Human-assisted connection:** operator checks fit, consent, availability, and opportunity requirements; records introduction and status.
8. **Follow-through:** participant and operator record actions, meetings, proposals, and blockers. No claim of business conversion is made without an agreed definition and evidence.
9. **Outcome report:** compare baseline and endline measures, report delivery effort and exceptions, document attribution limits, and present a renewal/expansion decision.

The pilot proves value if the institution receives a credible program and outcome report, participants complete useful readiness actions, and at least one agreed opportunity/conversion signal improves against a pre-registered baseline. The exact thresholds must be written into the pilot scorecard before results are known.

## MVP scope and manual-versus-automated boundary

### Build now

| Capability | MVP behavior | Why it is sufficient |
|---|---|---|
| Access and roles | Basic authentication, institution/operator/participant roles, and cohort-level access | Protects data without building enterprise identity infrastructure |
| Program configuration | One opportunity theme, questionnaire version, evidence list, dates, and reporting fields | Makes the pilot repeatable while limiting custom surface area |
| Diagnosis | Form-based, versioned questionnaire with required/optional evidence | Tests whether diagnosis is completed and useful |
| Result | Rule-based readiness view with explanations, missing items, and review status | Avoids opaque scoring and autonomous high-impact decisions |
| Journey | Prioritized actions, owners, due dates, status, and notes | Tests whether diagnosis changes behavior |
| Curation | Small catalog of approved solutions/content/specialists with fit criteria | Tests recommendations without marketplace liquidity |
| Connections | Operator-managed introduction records, consent, status, meeting/proposal outcome | Tests demand-led matching with human judgment |
| Progress | Participant and operator status views; institution aggregate counts | Supports delivery and baseline/endline review |
| Reporting | Exportable cohort outcome report with definitions and caveats | Supplies the buyer's renewal decision asset |
| Operations | Review queue, support notes, audit trail, and data export/delete workflow | Makes manual service safe and measurable |

### Keep manual in the pilot

- Opportunity qualification and buyer-demand confirmation.
- Questionnaire design and changes between cohorts.
- Evidence review, exceptions, and score overrides with reasons.
- Solution/specialist vetting and recommendation selection.
- Match ranking, warm introductions, and follow-up escalation.
- Participant recruitment and incentive management.
- Baseline/endline interpretation and attribution judgment.
- White-label configuration approval and partner-specific content.
- Any recognition or seal decision.

Manual work is not a hidden failure: it is an instrument for learning the decision rules, exception rates, data burden, and true cost-to-serve. Every operator action must be logged by type and elapsed effort so automation candidates are evidence-based.

### Explicitly do not build for the first pilot

- Autonomous generative recommendations, matching, scoring, or recognition.
- Open national marketplace, payment split, escrow, or transaction settlement.
- Public benchmark or league table before data mass, comparability, and governance exist.
- Deep ERP, ATS, procurement, CRM, or identity integrations without customer pull.
- Native mobile application, internationalization, or broad multi-sector templates.
- Fully automated audit, certification, or seal renewal.
- All six v1 modules as separate product surfaces. Academy and Recognition remain supporting/manual capabilities until gates are met.

## Capability and delivery bottlenecks

These are risks to validate, not claims about current team capacity.

| Bottleneck | Failure mode | Pilot control |
|---|---|---|
| Institutional sale and sponsorship | Interest without accessible budget or decision authority | Name the sponsor and budget owner; require written paid/funded path |
| Opportunity quality | No real buyer demand makes matching performative | Require documented demand or procurement pathway before connection work |
| Participant completion | Evidence burden or weak incentive causes low diagnosis completion | Minimize fields, recruit against explicit criteria, pre-set completion threshold |
| Methodology consistency | Different operators produce incomparable results | Version questions/rules, document overrides, retain review trail |
| Curation and matching | Thin supply or poor fit reduces trust | Use a narrow category, explicit fit criteria, and human acceptance |
| Outcome attribution | Business results are delayed or confounded | Define leading indicators, baseline/endline, attribution limits, and review date |
| Support load | Exceptions consume delivery time and erase software leverage | Log every intervention, categorize repeats, and set a stop/reshape trigger |
| Data/legal operations | Consent, access, retention, or cross-party use is unclear | Minimize data, segment institution access, document controller/processor roles |
| White-label pressure | One partner-specific request creates a fork | Apply standard/configurable/prohibited policy and charge/decline exceptions |
| Recognition conflict | Commercial delivery is confused with independent validation | Keep Recognition deferred and methodologically separate from pilot success claims |

## Evidence-based module gates

Each gate is a decision checkpoint, not a promise to build. The pilot scorecard must record baseline, threshold, period, evidence owner, and response before results are known.

| Module or expansion | Do not add until evidence shows | Minimum evidence packet | Decision |
|---|---|---|---|
| Configurable diagnosis beyond one theme | A second comparable program needs reuse, not bespoke redesign | Repeated configuration requests, completion/abandonment data, operator effort, data quality issues | Template, simplify, or defer |
| Journey automation | Participants and operators use status/actions repeatedly and manual updates are a material burden | Usage by cohort, completed actions, repeated update patterns, logged minutes avoided | Automate the narrow repeated transition only |
| Academy as a product module | Participants need structured content to complete plans and content use predicts progress | Content attendance/completion, action completion, outcome association, curation effort | Link a small library or defer |
| Broader Solutions catalog | Multiple programs request the same categories and curation can be reused | Category demand, referral acceptance, solution quality feedback, repeat usage | Standardize catalog or remain curated |
| Matching automation | Rules are stable, demand is real, and human decisions are sufficiently repeatable | Qualified demand, completed matches, repeat demand, acceptance/outcome rates, exception rate | Assist ranking only; retain human approval |
| Marketplace transactions | Liquidity and transaction need exceed the operating burden | Pre-registered qualified-demand, completed-match, repeat-demand thresholds; payment/legal readiness | Build transaction layer or defer |
| Aggregate benchmark | Comparable data has enough coverage and governance approval | Data quality, representativeness, consent, comparability, buyer use of benchmark | Private benchmark first or defer public view |
| Recognition/Selo | Evidence method, independence, appeals, and conflict controls operate in practice | Published criteria, independent decision record, conflict register, audit sample, renewal process | Launch bounded recognition or suspend |
| Multi-tenant white-label scale | Standard core can support comparable partners without proportional custom work | Second and third comparable customers, configuration reuse, support burden, renewal evidence | Package and scale or reject custom deal |

Expansion is allowed only when the relevant row has evidence plus acceptable data/support burden, revenue contribution or a clearly documented strategic role, and reusable core functionality. Otherwise the default is to narrow, simplify, or defer.

## Scalability path: service-supported software to repeatable platform

### Phase 1: Evidence and concierge pilot (months 0-2 setup; pilot design before build)

Validate buyer pain, budget access, opportunity demand, participant incentive, data permissions, outcome definitions, and reference rights. Build only the minimum flow above. Instrument all manual work, including curation, evidence review, matching, and support.

### Phase 2: Paid pilot and operating baseline (months 2-5)

Deliver one cohort and one outcome report under a written agreement. Separate product defects, methodology gaps, customer-specific requests, and operator exceptions. Propose renewal or expansion only after the outcome review. If value is not measurable or effort cannot be estimated, stop expansion and revise the intervention.

### Phase 3: Repeatable package (months 5-9)

Convert repeated work into a standard program configuration, implementation playbook, role permissions, report template, curation rules, and sales collateral. Automate only high-frequency, low-risk transitions with stable rules. Require a renewal or second comparable buyer before claiming repeatability.

### Phase 4: Controlled ecosystem scale (months 9-18)

Add comparable institutions, standard partner configuration, private aggregate views, and carefully selected integrations only where they reduce burden. Expand into additional opportunity categories only after the initial category has repeat demand and outcome evidence. Expansion must be supported by retention, gross margin, cost-to-serve, customer outcomes, and partner-concentration evidence.

## White-label controls

White-labeling changes the partner experience, not the product's truth conditions. Every partner environment retains a visible "powered by HUB" relationship and versioned methodology.

### Standard for every partner

- Core data model, role/access boundaries, consent and privacy controls.
- Diagnosis/evidence versioning, audit log, explanation of results, and export/delete controls.
- Common journey states, outcome definitions, reporting provenance, and quality standards.
- HUB-owned security, incident, retention, and methodology-change procedures.
- Minimum integrity rules for any future recognition product.

### Configurable within approved boundaries

- Partner name, visual identity, terminology, language, cohort dates, and navigation labels.
- Opportunity-specific questions, evidence examples, action templates, content links, and report branding.
- Approved roles, partner workflow steps, local solution catalog, and aggregate dashboard filters.
- Additional criteria only when mapped to the core methodology and approved for comparability/data protection.

### Prohibited

- Removing powered-by-HUB disclosure or changing authorship/provenance of methodology.
- Partner-only scoring that cannot be explained, versioned, or audited.
- Selling or guaranteeing recognition through a commercial package.
- Cross-partner data exposure, unconsented participant reuse, or public benchmarking without governance.
- Custom forks that create a separate codebase, incompatible data model, or unsupported service promise.
- Requests that transfer high-impact decisions to opaque automation.

## Services-to-software transition risks

The first product may look successful because skilled operators compensate for weak product capability. That is useful learning but not software scale. Track the following separately:

- **Outcome risk:** a result may come from operator expertise, a strong buyer, or a favorable cohort rather than HUB software.
- **Margin risk:** implementation, evidence review, matching, and support may remain labor-intensive.
- **Customization risk:** each institution may require a bespoke methodology, report, or integration.
- **Retention risk:** a one-time cohort or event can be mistaken for recurring software value.
- **Data risk:** manual spreadsheets or side channels can undermine auditability, privacy, and portability.
- **Founder/key-person risk:** sales, curation, and interpretation may depend on one person's relationships or judgment.
- **Automation risk:** premature AI can encode inconsistent methodology, bias, or unreviewed high-impact decisions.

Controls: price/contract the implementation explicitly, log all delivery effort, maintain a product-versus-service ledger, version rules and content, document operator decisions, test a second comparable customer, and refuse to call a workflow scalable until repeat outcomes occur without proportional custom work.

## Compounding-advantage plan

The moat should compound from trusted workflow data and operating knowledge, not from an unproven feature count.

1. **Proprietary outcome dataset:** collect consented, purpose-limited links between opportunity requirements, readiness evidence, interventions, connections, follow-through, and outcomes. Keep identifiable, operational, and aggregate layers separate.
2. **Methodology learning loop:** version diagnostic questions, evidence standards, action patterns, and matching criteria. Use observed completion, acceptance, and outcomes to improve them while preserving explainability.
3. **Curated network quality:** build a verified, evaluated set of solutions, specialists, suppliers, and buyers around narrow opportunity categories. Quality and trust should matter more than raw listing count.
4. **Institutional distribution:** use successful pilots, outcome reports, and reference rights to win comparable institutions. Avoid dependence on a single partner; set a concentration limit before the pilot.
5. **Embedded operating workflow:** become the system of record for diagnosis, plans, evidence, introductions, and renewal decisions. Integrations are justified when they deepen this workflow, not as standalone platform breadth.
6. **Trust and integrity:** publish methodology boundaries, retain human review for high-impact decisions, and keep future recognition independent. Trust is a prerequisite for sensitive evidence and institutional renewal.
7. **Configuration efficiency:** turn repeated partner needs into bounded templates and reusable components. The advantage is faster, safer deployment without a fork, not unlimited customization.

Potential defensibility is conditional. It exists only if HUB earns permission to collect useful outcome data, produces better recommendations or delivery decisions over time, retains trusted institutional relationships, and reuses the core across customers. None of these advantages should be presented as already established.

## Pilot kill and pivot criteria

Write numeric thresholds into the pilot scorecard before launch for completion, qualified demand, completed connections, repeat demand, outcome movement, delivery effort, renewal intent, and partner concentration. Do not change them after a negative result.

- Praise without funding: revisit buyer, problem, or proof; do not build more software.
- Low diagnosis completion: simplify inputs and reassess participant incentive.
- No documented demand: stop matching expansion and return to opportunity qualification.
- Excessive manual effort: narrow the workflow, redesign operations, or reject scale.
- No measurable outcome: stop expansion and revise the intervention hypothesis.
- Weak renewal path: treat the offer as non-recurring until ongoing value is proven.
- Below marketplace liquidity threshold: defer marketplace investment.
- Repeated white-label exceptions: enforce controls or reject the deal.
- Unprotectable recognition independence: separate, redesign, or suspend Selo HUB.
- Concentration limit breach: diversify distribution before expanding that channel.

## Top product risk

**The top risk is mistaking a high-touch consulting outcome for scalable product value.** HUB can reduce this risk by making manual work explicit, measuring it from the first pilot, constraining the opportunity and cohort, and requiring a second comparable customer plus renewal evidence before platform expansion.

## References

- V1, sections 5.1-5.5: platform promise, six modules, roles, journey, and white-label architecture.
- V1, sections 6.1-6.5: recognition purpose, maturity, evidence, independence, and integrity.
- V1, sections 9.1-9.3: minimum operating capabilities, decision forums, and indicators.
- V1, sections 10.1-10.3: MVP scope, exclusions, and data/AI principles.
- V1, sections 13.1-13.3 and 14: sequencing, prioritization, and risk responses.
- Approved v2 plan, sections 5, 9, 12, and 13: evidence plan, pilot scope, module gates, roadmap, and kill criteria.
- HUB v2 beachhead research: Candidate A recommendation and institutional readiness pilot shape.
