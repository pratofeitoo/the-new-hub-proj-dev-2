# HUB v2 Financial Model Requirements

**Status:** Decision-support requirements, not a forecast
**Scope:** Pricing, unit economics, revenue engine, and capital plan for the first 12–18 months
**Evidence rule:** Unknown values remain `TBD`, hypotheses, or required evidence. This document does not invent prices, margins, CAC, traction, or funding amounts.

## 1. Purpose and model boundary

The model must determine whether HUB v2 is initially **services-led, software-led, or a deliberate hybrid**, and show the transition path. It must support the v2 investor-readiness plan without treating the full v1 portfolio as an equally prioritized launch business.

Model separately:

- The selected beachhead buyer and initial use case (to be decided through discovery).
- The first paid or explicitly funded pilot.
- Repeatable post-pilot packages.
- Expansion options that are not required for the first 18 months.
- Group/commercial-company economics versus Institute/impact-project economics.

Do not combine unrelated revenue, costs, or cash flows merely to produce an attractive total. Every line needs a payer, contract mechanism, delivery owner, timing, direct cost, and evidence status.

## 2. Candidate revenue engines

The v2 plan requires one primary engine for the first 18 months. The following are candidates, not decisions:

| Candidate engine | Payer and contract | Value unit to test | Direct delivery burden | Evidence required before selection |
|---|---|---|---|---|
| Ecosystem licensing | Entity/partner; annual license or configured environment | Partner environment, cohort, or active ecosystem; exact unit TBD | Configuration, integration, partner success, support, governance | Named buyer, budget owner, repeatable configuration effort, renewal owner, concentration risk |
| Enterprise subscription | Company; recurring plan by organization, users, or modules | Organization, active users, modules, or usage; exact unit TBD | Product support, software operations, methodology and account success | Willingness to pay, activation, recurring use, renewal trigger, software cost/account |
| Implementation-led platform adoption | Entity/company; project fee plus possible recurring platform charge | Implementation project and deployed account/cohort | High early services and change management | Paid pilot, hours by role, delivery outcome, reusable components, non-proportional customization |
| Diagnostic and evolution program | Company/entity; assessment and journey fee, with optional renewal | Assessment, cohort, journey, or evidence review | Methodology, facilitation, curation, reporting | Paid diagnostic demand, completion, measurable outcome, conversion/renewal evidence |

Potentially expandable but not equal-priority initial engines:

- **Marketplace:** supplier fee, qualified-lead fee, commission, or transaction fee. Requires a defined liquidity threshold and transaction/legal design. It must not be forecast as material before qualified demand, completed matches, repeat demand, and take rate are observed.
- **Media and experiences:** brand/patron sponsorships, content, events, and activations. Treat as project/sponsorship revenue with separate event production economics, not recurring platform ARR.
- **Impact financing:** grants, incentive-law funding, public funds, or social investment operated by the Institute. Treat as restricted/project funding with eligibility, milestones, reporting, and cost-allocation constraints, not as ordinary commercial recurring revenue.
- **Selo HUB:** evaluation and renewal fees may be an expansion line only after independence, criteria, audit cost, and conflict controls are credible.

### Engine decision requirement

Score each candidate on evidence, not narrative: buyer access, pain intensity, budget authority, time-to-value, repeatability, gross margin potential, cost-to-serve, sales-cycle risk, data/legal complexity, concentration risk, and expansion fit. Select one primary engine; document the others as expansion options with explicit defer conditions.

## 3. Contradictions and resolution rules

The v1 document lists licensing, subscription, diagnosis/selo, marketplace, implementation, media, and impact as parallel sources, while its product ladder places subscription/journey before licensing and treats marketplace and projects as expansion. The v2 plan instead requires one primary engine. Resolve this tension as follows:

1. **Subscription versus licensing:** These are different payer and deployment motions. Do not use “subscription/license” as one blended line. Model enterprise subscription per company/account separately from ecosystem license per partner environment/cohort. A partner-paid license may subsidize participant access; record the subsidy and payer explicitly.
2. **Implementation versus software:** Implementation can be the initial cash engine while software recurring revenue is proved. Separate one-time implementation revenue and implementation cost from recurring platform revenue and account cost. Do not label implementation bookings as ARR.
3. **Diagnostic/evolution versus subscription:** A paid diagnostic can be an entry product or the primary program. Test whether value ends with the report/journey or requires continuing platform access. Renewal evidence determines whether this is recurring or project revenue.
4. **Marketplace versus core platform:** Marketplace commissions depend on demand, supply quality, matching, conversion, and repeat activity. Do not assume liquidity or transaction revenue from having a catalog. Defer marketplace expansion when the pre-registered liquidity threshold is missed.
5. **Media versus platform:** Sponsorship and event revenue can be valuable but is campaign/project revenue with lumpy timing. Keep it outside recurring software metrics and model event delivery risk separately.
6. **Impact versus commercial revenue:** Institute projects can be funded or subsidized for public-purpose outcomes. Separate restricted funds, eligible costs, reporting overhead, and beneficiary outcomes from commercial customer revenue. Never use impact funding to imply commercial willingness to pay.
7. **Selo versus demand generation:** Recognition may support acquisition or expansion but cannot be treated as a revenue assumption until independent governance, evaluation cost, renewal demand, and conflict-of-interest controls are evidenced.

## 4. Pricing and packaging requirements

Build a commercial table for each candidate package. No price should be filled without observed evidence or a clearly labeled test hypothesis.

| Package | Required fields |
|---|---|
| Discovery/diagnostic | Target buyer; scope; deliverable; baseline; delivery hours by role; data/legal requirements; hypothesis price range; conversion path |
| Pilot | Named buyer/sponsor; participant cohort; start/end; product scope; implementation responsibilities; success threshold; paid or explicitly subsidized terms; renewal/expansion decision |
| Annual subscription | Payer; included organizations/users/modules/usage; onboarding; support; outcome; hypothesis price range; overage rules; renewal and expansion terms |
| Annual ecosystem license | Partner environment and customization limits; cohort/organization allowance; implementation; support/SLA; data rights; renewal; concentration exposure |
| Implementation | Fixed, milestone, or time-and-materials basis; assumptions; acceptance criteria; change-order rules; delivery cost; margin target hypothesis |
| Optional modules | Module outcome; incremental delivery/software cost; eligibility; attach trigger; price hypothesis; cannibalization risk |
| Selo evaluation/renewal | Independent evaluator; criteria; evidence burden; audit cost; fee hypothesis; renewal frequency; appeal/conflict process |

Pricing tests must record quoted price, buyer reaction, reason for acceptance/rejection, budget source, procurement constraints, discount, and next action. Define discount authority and minimum acceptable contribution margin before selling.

## 5. Minimum model inputs

Every input needs a source, date, confidence class (`proven`, `observed`, `hypothesis`, `decision`, or `option`), owner, and next evidence action.

### Commercial inputs

- Reachable buyers and organizations per buyer.
- Buyer type, payer, budget owner, procurement route, and partner concentration.
- Package, contract term, billing schedule, payment terms, discount, refunds, taxes, and bad debt assumption.
- Sales funnel counts and conversion rates by stage.
- Sales-cycle duration and time from signature to cash collection.
- Pilot-to-renewal and renewal-to-expansion rates.
- Cohort size, active users/organizations, module attach, usage, and activation definition.

### Delivery and cost inputs

- Implementation hours by role and loaded hourly cost.
- Methodology, facilitation, curation, audit, support, and customer-success hours.
- Software/cloud/API/licensing costs per account, user, organization, or usage unit.
- Payment processing, marketplace operations, event production, and partner-integration costs.
- Shared overhead allocation policy, including legal, finance, security, data, and governance.
- Support volume, response commitments, rework, and customization/change-order frequency.
- Hiring start dates, compensation/load, contractors, and capacity constraints.

### Capital and cash inputs

- Opening cash and restricted versus unrestricted funds (if applicable).
- Monthly fixed operating costs and variable delivery costs.
- Accounts receivable timing, payable timing, deposits, milestone billing, and working-capital needs.
- Product/technology, legal/data/IP, seal governance, sales/pilot, and operating-reserve budgets.
- Funding source, instrument, restrictions, availability date, and tranche conditions; amounts remain TBD until evidence and decision are approved.

## 6. Required formulas

Use formulas at account/cohort level before aggregating. Define all denominators and time windows in the model.

### Revenue and contribution

- `Gross billings = contracted price × quantity × term adjustments`
- `Recognized revenue = billings allocated to delivered obligations by period`
- `Net revenue = recognized revenue − discounts − refunds − credits − pass-through amounts − applicable taxes`
- `Direct cost = implementation labor + delivery labor + support/curation + software/hosting/API + payment/transaction costs + other attributable costs`
- `Contribution profit = net revenue − direct cost`
- `Gross margin = contribution profit / net revenue`
- `Contribution margin per account = net revenue per account − direct cost per account`

### Recurring economics

- `ARR = recurring annualized subscription/license revenue only`
- `MRR = recurring revenue expected in the month; exclude one-time implementation, events, grants, and pass-through funds`
- `Net revenue retention = (opening recurring revenue − contraction − churn + expansion) / opening recurring revenue`
- `Logo retention = renewed customers / customers eligible to renew`
- `Activation rate = activated accounts or organizations / contracted accounts or organizations`
- `Expansion rate = accounts with paid expansion / renewed accounts` (define cohort window)

### Acquisition and payback

- `CAC = attributable sales and marketing spend / new paying customers` (use a stated attribution window)
- `Fully loaded CAC = attributable sales and marketing spend + attributable pre-sales/onboarding acquisition effort / new paying customers`
- `CAC payback months = CAC / monthly contribution profit per retained customer`
- `Sales efficiency = new net recurring revenue / sales and marketing spend` (only after recurring revenue is real and cohort window is specified)

### Service capacity and scalability

- `Cost to serve one additional organization = incremental delivery + support + curation + software/usage cost`
- `Implementation utilization = billable implementation hours / available implementation hours`
- `Customization ratio = custom delivery hours / total delivery hours`
- `Revenue per delivery FTE = attributable revenue / delivery FTE`
- `Operating leverage = growth rate of net revenue − growth rate of operating expense`

For marketplace scenarios:

- `GMV = completed transaction value`
- `Take rate = marketplace revenue / GMV`
- `Marketplace contribution = marketplace revenue − payment costs − curation − matching/support − dispute/refund costs`
- `Liquidity = qualified demand, completed matches, and repeat demand measured in a defined review period`; thresholds are TBD and must be written before the pilot.

For impact/media scenarios, report restricted funding, eligible program cost, unrestricted contribution, and outcome metrics separately; never fold them into SaaS ARR or commercial CAC.

## 7. Scenarios and sensitivities

Create conservative, base, and upside cases. The cases must vary assumptions, not merely apply arbitrary percentage adjustments.

Vary at minimum:

- Buyer count/reachability and cohort size.
- Sales-cycle length, stage conversion, payment delay, and concentration.
- Pilot conversion, activation, renewal, churn, expansion, and discounting.
- Implementation hours, customization ratio, support load, and cost inflation.
- Software/usage cost per account and delivery capacity.
- Marketplace liquidity and take rate, only after baseline evidence exists.
- Media/project timing and impact-funding availability, separately from recurring revenue.
- Funding availability, delayed funding case, and minimum-viable operating plan.

Show cash runway, break-even timing (if any), cumulative contribution, hiring capacity, and milestone delivery in each case. Sensitivity tables should identify which unknowns most change runway or gross margin.

## 8. Capital plan requirements

The capital plan must specify capital required for 12–18 months without asserting an amount before the operating model exists.

Required views:

- Monthly cash flow and runway by scenario.
- Hiring sequence tied to capacity and milestones, not headcount aspiration.
- Product/technology budget and release milestones.
- Legal, data, IP, security, and seal-governance budget.
- Sales, customer discovery, pilot delivery, and case-study budget.
- Operating reserve policy and minimum cash floor.
- Restricted versus unrestricted capital and permitted uses.
- Funding tranches and the evidence/milestones each tranche unlocks.
- Delayed/no-external-funding plan: reduce scope, defer hiring, preserve pilot delivery, and identify formally funded alternatives.

Capital requests must reconcile to a milestone plan: beachhead/use-case decision; paid pilot; measurable outcome; repeatable package; renewal or comparable second buyer; unit-economic evidence; controlled expansion. Do not request expansion capital before retention, gross margin, cost-to-serve, and customer outcomes support the selected scaling path.

## 9. Decision gates

### Gate A — Select primary engine

Proceed only when discovery identifies a painful problem, accessible decision-maker, credible payer/budget, and a defined value proof. Choose one engine; retain other lines as options.

### Gate B — Authorize pilot

Require written problem statement, named sponsor, cohort, commercial/funding terms, baseline, scope, responsibilities, data permissions, success thresholds, and renewal/expansion decision.

### Gate C — Price and package

Require observed price reactions or signed terms, delivery-cost estimate, discount authority, payment terms, and a contribution-margin hypothesis. A “free pilot” must be explicitly subsidized and its subsidy tracked.

### Gate D — Repeatability

Require outcome report, delivery-time estimate, standard package, reusable components, and evidence that custom work does not grow proportionally to revenue.

### Gate E — Scale and fund

Require first renewal or second comparable buyer plus retention, gross-margin, cost-to-serve, and outcome evidence. Marketplace expansion additionally requires pre-registered liquidity thresholds. Partner concentration must remain below a pre-registered limit.

### Kill or pause responses

- Buyers praise the concept but will not fund a pilot: revisit buyer, problem, or proof before more technology.
- Low diagnosis completion: simplify the journey and reassess incentives.
- Excessive manual implementation: narrow scope or redesign operations.
- No measurable pilot outcome: stop expansion and revise the intervention.
- Weak renewal: do not assume recurring value.
- Marketplace below threshold: defer marketplace expansion and focus on one demand-led workflow.
- Repeated customization: enforce configuration limits or reject the deal.
- Selo independence not credible: separate, redesign, or suspend the recognition product.

## 10. Investor evidence requirements

The final model/data room must include:

- Assumption register with evidence class, source, date, owner, and validation plan.
- Pricing and packaging sheet with quoted/tested terms and buyer reactions.
- Pilot contract or written funding agreement, baseline, outcome report, and renewal/expansion proposal.
- Account-level delivery-cost build: hours, roles, software, curation, support, and rework.
- Cohort retention, activation, expansion, and cost-to-serve report.
- Funnel model with stage definitions, sales-cycle evidence, CAC methodology, and payment timing.
- Revenue-quality bridge separating recurring commercial revenue, one-time services, marketplace, media/projects, and restricted impact funds.
- Three-year model with conservative/base/upside cases and sensitivity analysis.
- Capital plan, monthly cash flow, runway, tranche milestones, and delayed-funding plan.
- Marketplace liquidity scorecard and partner concentration calculation, even if expansion is deferred.
- Legal/data/IP map and Selo HUB independence evidence where applicable.

## 11. Open decisions and explicit unknowns

The following must remain unresolved until evidence is obtained:

- Beachhead buyer and initial use case.
- Primary engine and payer/value unit.
- Price ranges, discount policy, contract term, and payment terms.
- Activation, renewal, expansion, and marketplace liquidity thresholds.
- Direct-cost rates, software costs, CAC, sales cycle, margins, and payback.
- Hiring sequence, capital amount, instrument, and funding tranches.
- Whether marketplace, media, impact, and Selo lines are expansion, separate projects, or excluded from the initial operating plan.

The model is investor-ready only when these unknowns are either evidenced, explicitly selected as decisions, or assigned a dated validation gate.
