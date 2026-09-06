---
title: Reconciliation — Approved Source Crosswalk (P03)
description: Single working crosswalk between 01-work refinements and 03-approved source of truth.
type: concept
status: current
source_paths:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1.md
  - 03-approved/nucleo-inteligencia/especificacao-conceitual-inteligencia-plataforma/README.md
verified_at: 2026-09-06
open_questions:
  - Retention windows (60/36 months) remain proposed, not approved — pending LGPD/Finanças.
  - Matching thresholds (FP≤2%/FN≤5%) remain proposed, not verified against approved source.
---

# Reconciliation — Approved Source Crosswalk (P03)

> Crosswalk only — `03-approved/` is immutable source of truth. Conflicts resolve toward approved.

## Canonical resolutions

| Theme | Approved rule | Working decision |
|---|---|---|
| Vocabulary | `Receita disponível perdida` is technical KPI | Keep old term only as historic alias |
| Value states | 8 conceptual statuses | 4 operational ledger states: `Potencial → Influenciado → Validado → Realizado` with explicit mapping; no jumps |
| Indicators | 73 blueprint inventory → 16 technical KPIs | Name distinctly; crosswalk only via approved matrix |
| Entities | 25→23 nodes + N26 operational | Keep 25 canonical; N26 is operational, not canonical |
| Person–Company | `rel_person_company` is authoritative | `dim_person.company_id` is legacy projection, no canonical FK |
| Fields | 47 canonical FLDs | Other counts are audited physical scope, not canonical |
| Propagation E20 | Governance requires evidence | SPEC/CMP are design docs until logs executed + LGPD approval |

## Rules

- `Realizado` requires `contract_id`, `transaction_id`, ledger, reconciliation, Finance approval.
- SPEC/fixture/template is not execution evidence.
- Illustrative numbers (`R$ 1,22M`, `28,42%`) remain hypotheses, not realized ROI.

## Sources

- [Reconciliação — Fonte Aprovada P03](../../01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1.md)
