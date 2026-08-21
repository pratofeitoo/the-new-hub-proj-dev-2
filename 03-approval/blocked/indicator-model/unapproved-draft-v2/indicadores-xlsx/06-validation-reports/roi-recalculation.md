# ROI recalculation and evidence rules

All current numeric values are illustrative placeholders from corrected sheet 06; no unsupported value is presented as observed fact.

## Canonical separation
- Theoretical capacity: `pessoas × custo_anual × ganho_prod`; it is not realized output until an outcome measure confirms it.
- Realized output: measured post-period output minus comparable baseline, with cohort timing and attribution.
- Avoided cost: baseline cost minus realized cost minus change cost; do not call it revenue.
- Contribution margin: incremental realized revenue × contribution-margin rate; never substitute gross revenue.
- Pipeline values: raw (CRM amount), probability-weighted (amount × probability), and realized (closed/revenue-recognized) are separate measures. Pipeline is not added to closed revenue.

## Baseline, cohort, control, timing, attribution, and deduplication
1. Define eligible population and index date before exposure; retain a comparable unexposed/control cohort where feasible.
2. Compare the same outcome window and cohort definition; use pre/post plus matched control or difference-in-differences for quasi-experimental claims.
3. Apply attribution only after evidence is accepted; attribution is a haircut, not an observed fact.
4. Deduplicate by `entity_id + outcome_type + period + primary_lever`; one realized outcome has one primary financial owner.
5. Do not sum overlapping productivity/time-to-productivity, saving/margin, risk expected loss/realized loss, or ARR/MRR effects.
6. Unsupported assumptions remain illustrative and are excluded from recognized business-case value until evidence is attached.

## Reproducible scenario arithmetic

- productivity: 360,000.00 R$ annual gross contribution before scenario multiplier
- vacancy: 160,000.00 R$ annual gross contribution before scenario multiplier
- retention: 360,000.00 R$ annual gross contribution before scenario multiplier
- purchases: 125,000.00 R$ annual gross contribution before scenario multiplier
- risk: 40,000.00 R$ annual gross contribution before scenario multiplier
- margin: 175,000.00 R$ annual gross contribution before scenario multiplier
- Base gross benefit: `1,220,000.00` R$
- Investment total: `950,000.00` R$
- Base net benefit = gross benefit − investment; Base ROI = net benefit / investment; Base payback = investment / (gross benefit / 12).

| Scenario | Multiplier | Gross benefit (R$) | Investment (R$) | Net benefit (R$) | ROI | Payback (months) |
|---|---:|---:|---:|---:|---:|---:|
| Conservative | 0.7 | 854,000.00 | 950,000.00 | -96,000.00 | -0.1011 | 13.3489 |
| Base | 1.0 | 1,220,000.00 | 950,000.00 | 270,000.00 | 0.2842 | 9.3443 |
| Ambitious | 1.3 | 1,586,000.00 | 950,000.00 | 636,000.00 | 0.6695 | 7.1879 |

## Deterministic check
Using corrected sheet 06 inputs, benefits are 360,000 + 160,000 + 360,000 + 125,000 + 40,000 + 175,000 = 1,220,000 R$; investment is 950,000 R$. Expected base ROI is 0.2842105263 and payback is 9.3442622951 months. Any workbook rebuild must reproduce these values or register a correction first.
