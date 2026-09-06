---
title: Evidence Detail — Pilot P03 Validation Evidence
description: What counts as pilot evidence vs design fixture for P03 gate.
type: evidence
status: current
source_paths:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/06-relatorios-validacao/propagation-pilot-evidence-2026-09-05.md
verified_at: 2026-09-06
---

# Evidence Detail — Pilot P03 Validation Evidence

> Gate P03 remains blocked until pilot evidence and validations are executed.

## What is evidence

- Executed logs (propagation, CMP) with approvals (LGPD/Gov Data).
- Ledger entries with `contract_id` + `transaction_id` + reconciliation.
- Physical validation (temporal tenancy, FKs, replay).

## What is NOT evidence

- `SPEC READY` docs, fixtures, templates, or illustrative numbers (`R$ 1,22M`, `28,42%`).
- `E01 temporal` acceptance marked `SPEC READY / NOT EXECUTED`.
- E20 propagation claims without executed logs.

## Status per reconciliation

| Item | Status |
|---|---|
| E20 propagation | Pending — SPEC/CMP are design docs |
| E01 temporal | Pending — A3/F2 gates not executed |
| Retention windows | Proposed, not approved |
| Financial hypotheses | Low-confidence hypotheses |

## Source

- [Reconciliação](../../01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1.md)
