# P03-T09 — Evidência mínima de replay do piloto

> **Tipo:** sintética/dry-run local, determinística. Não é execução de produção, validação full, aprovação legal ou promoção.

## Resultado

- **Veredicto:** `PASS_PILOT_PROCEDURE_ONLY` — `run_001 → run_002` reconciliou counts, keys, totals, duplicatas e eventos tardios.
- **Correções:** 14 linhas em `corrections.csv`, incluindo 4 `DAT010-001..004`; status não aprovado.
- **Workbook:** `16` worksheets visíveis = 15 funcionais + `00_DRAFT_NOTICE`; binário não alterado (SHA-256 `ee4aa74ee8f231fca76bc7c5857d32da913f1447f9a2b4235505c86b311bf2a2`).

## Reconciliação

| Campo | run_001 | run_002 | Resultado |
|---|---:|---:|---|
| eventos/counts | 12 | 12 | PASS |
| chaves (`event_id` + entidade) | 24 / `b568fa172871…` | 24 / `b568fa172871…` | PASS |
| total BRL | 12500 | 12500 | PASS |
| duplicatas / tardios | 0 / 0 | 0 / 0 | PASS |

## Inputs e comandos

- `corrections.csv` e `source-fingerprints.csv` são hasheados no JSON ao lado.
- Fixtures sintéticas são criadas em memória; nenhum CSV, XLSX ou fonte é escrito.
- Comando exato: `python3 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/pilot-replay-reconciliation-P03-T09.py && git diff --check`

## Bloqueios residuais

- P03-T09 permanece `em-revisao`; `DAT-009` e `DAT-010` continuam `blocking: yes`.
- Não há `DEC-P03-T09` e não há promoção para `02-review/aprovado/` ou `03-approved/`.
- A evidência demonstra apenas o procedimento mínimo do piloto; 41 campos/15 abas/73 indicadores full permanecem deferred.
