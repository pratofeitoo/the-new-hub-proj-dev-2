---
title: "HUB v2 — Market and competitive research"
date: 2026-08-13
status: research input; not a final market claim
source_documents:
  - "HUB_Escopo_Estrategico_Documento_Mae_v1.md"
  - "HUB_Escopo_Estrategico_Documento_Mae_v2_Investor_Readiness_Plan.md"
tags:
  - hub
  - investor-readiness
  - market-research
  - competition
---

# HUB v2 — Market and competitive research

> **Purpose.** Provide an evidence-disciplined market, alternative, and moat workstream for the investor-readiness plan. This note does not select the beachhead buyer, assert traction, or replace the v2 master document.

## 1. Scope and evidence discipline

The v1 document describes HUB as infrastructure for diagnosing organizations, creating evolution plans, connecting them to solutions/talents/suppliers, teaching, measuring, and recognizing evidence-backed progress. The approved v2 plan requires one beachhead buyer and use case, a bottom-up market model, an alternative map, and a defensibility thesis.

Claims in this artifact use three labels:

- **Source-backed fact:** directly supported by a linked primary source or by the supplied v1/approved plan.
- **Reasonable inference:** an interpretation of a fact or of HUB's described architecture; requires customer validation.
- **Unknown / validation required:** not established by the available evidence and must not be presented to investors as traction, TAM, or proof of willingness to pay.

External pages were checked on **2026-08-13**. Vendor descriptions are evidence of what vendors say they offer, not independent proof of outcomes, market share, or customer value.

## 2. Market category hypothesis

**Source-backed fact (HUB):** v1 combines six platform modules (Intelligence, Journey, Solutions, Connections, Academy, Recognition), a C.A.O.S. method, entity white-label environments, and an evidence-based Selo HUB. It names entities and companies as possible buyers, but does not select one.

**Reasonable inference:** HUB is not competing in one established software category. It sits at the intersection of:

1. organizational maturity and implementation workflow;
2. responsible-business / ESG evidence and reporting;
3. supplier and talent discovery;
4. association or ecosystem member services; and
5. certification / recognition.

The investor risk is category sprawl: each adjacent category has an incumbent with deeper data, distribution, or trust. The first commercial thesis should therefore sell one repeated workflow, not “the whole ecosystem.”

**Unknown / validation required:** whether the initial buyer experiences this intersection as one budgeted problem, or as several unrelated budgets. Interviews must identify the budget owner, trigger, existing workflow, measurable failure, and funded pilot path.

## 3. Bottom-up sizing framework

Do not use a top-down global “DEI,” ESG, HR-tech, or marketplace market number as HUB's TAM. Build the model from reachable accounts and a priced offer after the beachhead is selected.

### 3.1 Variables

| Variable | Definition | Evidence required | Current status |
|---|---|---|---|
| `B` | Reachable buyers in the first serviceable geography and channel (e.g., qualified associations, federations, or enterprise accounts) | Named-account list; inclusion criteria; channel access | Unknown |
| `O` | Eligible participating organizations per buyer | Buyer roster or defensible average from sampled buyers | Unknown |
| `p` | Annual buyer license / platform contract value | Paid proposal, price test, or comparable signed contract | Unknown |
| `i` | One-time implementation revenue per buyer | Delivery plan, hours, vendor costs, pilot quote | Unknown |
| `a` | Year-one activation/adoption rate among eligible organizations | Pilot funnel and cohort data | Unknown |
| `r` | Annual renewal rate | Renewal evidence; no assumption should be treated as fact | Unknown |
| `e` | Optional annual organization subscription or evaluation revenue | Packaging and price discovery | Unknown |
| `m` | Net marketplace or connection revenue per completed qualified outcome | Demand, conversion, take-rate, and cost-to-serve data | Unknown |
| `c` | Cost to serve (implementation, support, curation, evaluation) | Time sheets, invoices, and account-level cost model | Unknown |

### 3.2 Formulas

For a partner-led beachhead:

```text
Serviceable annual contract opportunity = B × p
Year-one implementation opportunity = B × i
Year-one participating-organization opportunity = B × O × a × e
Three-year reachable revenue (conservative/base/upside) =
  Σ(year y: new buyers_y × (p + i_y + O × a_y × e_y))
  + Σ(year y: prior buyers_y × p × r_y)
  + separately modeled, evidence-backed connection revenue
```

For an enterprise beachhead, replace `B × O` with the number of business units/sites/suppliers covered by each account. Do not mix partner license revenue and participant revenue without stating who pays and what is included.

### 3.3 Scenario construction (no invented amounts)

Create three scenarios only after the named-account and pricing evidence exist:

| Scenario | Account reach | Price | Adoption | Renewal | Cost-to-serve | Purpose |
|---|---|---|---|---|---|---|
| Conservative | Only accounts with confirmed access and a defined trigger | Lowest tested package | Lower bound from pilot funnel | Renewal not assumed until observed | High/manual delivery case | Downside planning |
| Base | Qualified reachable accounts by channel capacity | Median tested package | Pilot-derived cohort rate | Explicit early renewal assumption | Measured delivery baseline | Operating plan |
| Upside | Additional comparable accounts only | Higher package with proven expansion | Repeatable activation | Renewal and expansion supported by evidence | Standardized delivery | Expansion case |

**Unknown / validation required:** `B`, `O`, `p`, `i`, `a`, `r`, `e`, `m`, and `c`. Until populated from evidence, report the model as a sizing framework, not TAM/SAM/SOM.

## 4. Direct competitors and adjacent alternatives

The following map is organized around the job a prospective customer may hire HUB to do. It is not a claim that all listed vendors are direct competitors for the eventual beachhead.

### 4.1 Certification, seals, and reporting

| Alternative | Source-backed capability | Likely strength | Likely gap versus HUB (inference) |
|---|---|---|---|
| B Corp Certification / B Lab | B Lab says certification assesses and verifies social, environmental, and governance impact against B Lab Standards; it describes independent third-party audit/verification and a community of certified businesses. [1] | Recognized framework, external verification, stakeholder signal, network | A certification process is not necessarily a buyer-specific implementation marketplace or longitudinal workflow. HUB must not claim stronger credibility without an independent governance design and validated outcomes. |
| GRI Standards | GRI says its modular standards let organizations understand and report impacts on economy, environment, and people, with universal, sector, and topic standards. [2] | Reporting structure, broad applicability, comparability | Reporting guidance does not itself supply a diagnosis-to-intervention-to-connection workflow. HUB must prove that its workflow creates operational value rather than another reporting burden. |
| EcoVadis | EcoVadis's fetched landing page was too short to substantiate product details beyond a 2026 sustainable procurement barometer announcement. [3] | **Unknown from fetched source; research required** | Do not make comparative claims until a product page, buyer interview, or independent source is collected. |

### 4.2 ESG, HR, procurement, and learning software

| Alternative class | Typical job | Strength | Likely gap versus HUB (inference) |
|---|---|---|---|
| ESG / reporting platforms | Collect evidence, report metrics, manage disclosures | Data and reporting workflows; may integrate with enterprise systems | Often optimized for reporting/compliance rather than curated interventions, supplier/talent connections, or association-level distribution. Verify per named competitor. |
| HR / people analytics suites | Manage workforce, learning, engagement, and HR data | Existing system of record, enterprise procurement approval, integrations | May not cover supplier access, external ecosystem orchestration, or independent recognition. HUB cannot assume integration or data access. |
| Procurement / supplier-diversity intelligence | Find, classify, vet, track, and report suppliers | Deep supplier data, spend analytics, procurement workflow | May not provide a cross-functional organizational maturity journey, Academy, or evidence-backed recognition. The overlap is material if HUB's first use case is supplier access. |
| Learning / academy platforms | Deliver courses and track completion | Mature content delivery and learning administration | Completion is not implementation or business outcome. HUB needs proof that recommendations lead to measurable change. |

**Supplier.io is a concrete procurement-adjacent competitor.** Its site positions its product as a supplier diversity and intelligence platform covering supplier data, sourcing, impact measurement, supplier discovery/vetting, spend analytics, and carbon analytics. It claims a database of 20 million suppliers, 450+ sources, 820 million supplier insights, and $12+ trillion historical spend data; these are vendor claims, not independently verified facts. [4]

**Competitive implication:** If HUB chooses supplier access as the beachhead, Supplier.io-like data depth and procurement integration are the benchmark. HUB should narrow its wedge to a differentiated workflow such as local/underserved supplier readiness plus diagnosis, capability-building, demand-led matching, and measured conversion, rather than compete on database scale.

### 4.3 Association and member platforms

| Alternative | Job | Strength | Likely gap versus HUB (inference) |
|---|---|---|---|
| Association management system (AMS) | Membership records, dues, events, communications, portals | Existing member identity and recurring relationship | Usually a system of engagement/administration, not a maturity diagnostic, curated intervention engine, or evidence-based recognition layer. Validate against the specific AMS selected by each buyer. |
| Association marketplace / directory | Expose member businesses and offers | Fast visibility and low friction | Directories can lack demand qualification, readiness, outcome tracking, and verified evidence. HUB must prove conversion rather than merely add listings. |
| Institutional partner program | Deliver training, events, or referrals to a base | Trusted distribution and convening power | Can be project-based and difficult to measure or renew. HUB's opportunity is a repeatable operating layer, not a generic partnership label. |

The v1 names Sebrae, Firjan, ABTD, Amcham, federations, and associations as applications or strategic possibilities. **Source status:** these are v1 hypotheses, not evidence of a signed partnership, accessible buyer, or channel agreement.

### 4.4 Marketplaces, directories, and talent platforms

| Alternative | Strength | Likely gap versus HUB (inference) |
|---|---|---|
| General B2B marketplace | Existing demand/supply traffic and transaction mechanics | Little context on organizational maturity, evidence, accessibility, or intervention fit. |
| Diverse supplier directory/certification network | Identity and visibility for a target supplier group | May optimize discovery or certification rather than buyer readiness, capability-building, and completed contracts. |
| General talent marketplace / job board | Liquidity and search | Does not necessarily connect inclusion/workforce diagnosis to retention, development, accessibility, or measured business outcomes. |
| Curated expert network | Access to specialists | Often expert-led and project-specific; may not generate longitudinal organization-level data. |

WEConnect International is an example of a network/certification alternative: its public site presents women-owned business participation, buyer membership, and a fully funded certification program announcement. [5] The page alone does not establish its full product scope, economics, or Brazil relevance; conduct a buyer-side comparison before positioning HUB against it.

### 4.5 Consulting and custom technology

| Alternative | Strength | Likely gap versus HUB (inference) |
|---|---|---|
| Specialist DEI/ESG/HR/procurement consultancy | Trusted expertise, bespoke diagnosis, change management | Non-recurring or labor-scaled delivery; insight and evidence may remain in slide decks. HUB must show repeatability and not pretend software removes required human work. |
| Big-four / strategy consultancy | Executive access, transformation capacity, procurement trust | High cost and long projects; HUB may win on focused workflow, time-to-value, and ecosystem distribution, but this is unproven. |
| Custom internal portal or data project | Tailored fit and control | High build/maintenance burden; buyer owns implementation risk. HUB must quantify setup, integration, and switching costs before claiming advantage. |

### 4.6 Internal alternatives and doing nothing

| Alternative | Customer cost | Why it persists | HUB proof needed |
|---|---|---|---|
| Spreadsheet + email + event/relationship management | Staff time, fragmented data, low visibility | Familiar, cheap cash outlay, no procurement cycle | Time saved, better completion, more qualified matches, and measurable outcomes. |
| Internal HR/procurement/ESG team | Existing salaries and systems | Control, privacy, institutional knowledge | Show incremental value without displacing systems of record; define integration and data boundaries. |
| One-off training, event, or report | Project fee and participant time | Easy to approve; visible deliverable | Evidence that a continuous journey improves an outcome beyond attendance or report delivery. |
| Do nothing / defer | Opportunity cost and risk of no improvement | Competing priorities, unclear ROI, fear of complexity | Quantified cost of current failure and a low-friction paid pilot. |

## 5. Competitive comparison for the eventual beachhead

Score named alternatives only after interviews and product verification. Use a 1–5 score with a URL or interview citation in each cell; blank means unknown, not zero.

| Capability / buying criterion | HUB hypothesis | Consultancy | Certification / seal | AMS / member platform | ESG / HR / procurement software | Marketplace / directory | Internal tools |
|---|---|---|---|---|---|---|---|
| Diagnose current state | Configurable, evidence-based | High bespoke | Framework-specific | Usually low/unknown | Varies by domain | Usually low | Depends on staff |
| Convert diagnosis to prioritized plan | Core Journey hypothesis | High but labor-intensive | Usually outside scope | Usually outside scope | Varies | Low | Manual |
| Curated intervention and human support | Core Solutions/curation hypothesis | High | Limited | Varies | Varies | Variable | Internal knowledge |
| Demand-led supplier/talent connection | Core Connections hypothesis | Project-specific | Usually not core | Directory-like | Domain-specific | Core for marketplace | Manual |
| Longitudinal evidence of implementation | Intended moat; unproven | Often fragmented | Evidence for renewal/certification | Membership activity | Domain-specific | Transaction data | Fragmented |
| Independent recognition | Intended Selo HUB; governance unproven | No or client-specific | Core strength | Usually no | Usually no | Usually no | No |
| Multi-organization / white-label distribution | Intended partner model | Possible, custom | Network-dependent | Core strength | Enterprise account model | Network-dependent | Limited |
| Switching friction | Intended workflow/data history; unproven | Relationship | Recognition history | Member records | System integration | Network/liquidity | Low technical, high change |

**Decision rule:** HUB should not claim superiority across the whole table. Pick the 3–4 criteria that the beachhead buyer ranks highest, then test whether HUB wins on those criteria at an acceptable cost-to-serve.

## 6. Moat implications

### 6.1 Most credible primary moat hypothesis

**Reasonable inference:** The strongest initial moat is a combination of **institutional distribution + verified implementation evidence**, not a generic marketplace, generic AI, or the seal alone.

Mechanism:

1. A trusted entity or channel supplies a concentrated cohort of organizations.
2. HUB applies a consistent diagnosis and evidence schema.
3. Recommendations and human-assisted connections produce observable actions.
4. Outcomes, supplier/talent performance, and intervention completion are recorded over time.
5. Aggregated, permissioned learning improves prioritization and buyer reporting.
6. The workflow and historical evidence make replacement less attractive than a static directory or one-off consultancy.

This is a **hypothesis**, not an existing moat. It only compounds if the same workflow is repeated across comparable customers, data rights are explicit, and outcome quality is trusted.

### 6.2 Secondary moat candidates

- **Proprietary diagnostic methodology:** defensible if it predicts action/outcomes better than generic assessments; test inter-rater reliability, completion, and outcome correlation.
- **Verified implementation evidence:** defensible if evidence is independently reviewed, time-stamped, and useful for decisions; avoid unverifiable self-report.
- **Curated supplier/talent performance data:** valuable only with consent, enough volume, and non-discriminatory governance; do not imply ownership before legal review.
- **Embedded evolution workflow:** increases switching cost when plans, owners, evidence, and renewal records are actively used; measure weekly/monthly active use and renewal drivers.
- **Independent recognition:** trust asset only if evaluator appointment, payment, conflicts, appeals, and suspension are separated from commercial implementation. The plan explicitly requires this safeguard.

### 6.3 Weak or non-moats

- A broad feature list across six modules.
- A white-label skin without repeatable core product.
- A directory with no demand or transaction evidence.
- A badge or seal whose criteria and independence are unclear.
- AI recommendations without proprietary data, explainability, or measured lift.
- A single partner relationship that cannot be replicated.

## 7. Evidence still required before investor circulation

### Market and buyer

- Named beachhead buyer and initial use case selected using the approved plan's scoring criteria.
- Reachable-account list with geography, segment, buyer role, and channel access.
- Number of eligible organizations per buyer, supported by actual rosters or samples.
- At least 15–20 structured interviews across buyers and participating organizations, with current workflow, cost, pain, alternatives, budget owner, and renewal condition recorded. The exact sample is a research recommendation, not a completed fact.
- Evidence of urgency: deadline, compliance requirement, procurement target, strategic initiative, or funded program.

### Commercial and economics

- Paid or formally funded pilot proposal with scope, price, executive sponsor, participant cohort, baseline, and success thresholds.
- Price testing for diagnosis, pilot, annual license/subscription, implementation, modules, and recognition.
- Delivery time by activity, vendor/tool costs, support burden, curation effort, and evaluator cost.
- Sales-cycle duration, conversion by stage, acquisition source, and concentration risk.
- Activation, diagnosis completion, action completion, qualified matches, outcome lift, renewal, and expansion data.

### Competition and alternatives

- Five named alternatives from interviews, not only desk research.
- Current spend or staff effort for each alternative.
- Buyer-rated scorecard on the criteria above.
- Switching friction, procurement/security review, integration requirements, and data portability.
- Product verification for EcoVadis, named AMS vendors, local certification bodies, and Brazilian supplier/talent networks before making direct claims.

### Moat and governance

- Demonstration that HUB recommendations or connections improve a chosen outcome.
- Permissioned data model and rights to aggregated/derived data.
- Methodology versioning and evidence quality controls.
- Independent Selo HUB charter operating in practice, including conflicts, appeals, evaluator payment, and withdrawal.
- Proof that the workflow can be delivered repeatedly without custom labor increasing in proportion to revenue.

## 8. Recommended research sequence and decision gates

1. **Before build:** choose beachhead and collect interview evidence; stop if no buyer confirms pain, budget access, and a funded pilot path.
2. **Before pilot:** produce bottom-up model with conservative/base/upside assumptions and a written price; stop if economics depend on unverified marketplace liquidity.
3. **During pilot:** instrument diagnosis completion, intervention uptake, human-assisted matches, delivery hours, and outcome baseline/endline.
4. **After pilot:** compare against the buyer's actual alternative, not an abstract competitor list; proceed only with measurable value and estimable delivery effort.
5. **Before expansion:** require one renewal or second comparable customer, a repeatable package, and a concentration limit for any institutional channel.
6. **Before seal commercialization:** activate independence controls; suspend the recognition line if commercial incentives compromise credible evaluation.

## 9. Source register

1. B Lab, “About B Corp Certification,” https://www.bcorporation.net/en-us/certification/ (accessed 2026-08-13). States that B Corp Certification assesses and verifies social, environmental, and governance impact against B Lab Standards and describes third-party audit/verification.
2. Global Reporting Initiative, “GRI Standards,” https://www.globalreporting.org/standards/ (accessed 2026-08-13). Describes modular universal, sector, and topic standards for understanding and reporting impacts.
3. EcoVadis, “Solutions,” https://ecovadis.com/solutions/ (accessed 2026-08-13). Fetched page was insufficiently detailed for product comparison; only a sustainable procurement barometer announcement was extractable.
4. Supplier.io, “Supplier Intelligence Software,” https://supplier.io/ (accessed 2026-08-13). Vendor-described supplier data, sourcing, impact measurement, and supplier-diversity capabilities; vendor-reported database and spend figures are not independently verified here.
5. WEConnect International, https://weconnectinternational.org/ (accessed 2026-08-13). Public page presents women-owned business participation, buyer membership, and certification-program announcements; full scope and economics require further research.
6. SHRM, “HR & Workplace Topics & Tools,” https://www.shrm.org/topics-tools (accessed 2026-08-13). Illustrates the breadth of incumbent HR information, research, compliance, and tools; not used as a quantified market claim.

## 10. Critical conclusion

HUB's opportunity is credible as a **workflow thesis** but not yet as a quantified market or defensible category claim. The most promising differentiation is to make a concentrated institutional channel convert fragmented diagnosis, capability-building, and connection activity into measured organizational outcomes. The immediate investor risk is trying to monetize six modules, several buyer types, a marketplace, and a seal before proving one paid repeatable workflow. The next artifact should therefore insert one buyer/use case, observed interview evidence, pilot economics, and a named-account bottom-up model; until then, all market sizes, partner relationships, traction, and moat claims remain unknown or hypotheses.
