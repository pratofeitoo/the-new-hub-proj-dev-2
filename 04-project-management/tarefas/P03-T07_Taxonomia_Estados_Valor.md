---
title: P03-T07 — Taxonomia estados de valor (potencial→realizado)
task_id: P03-T07
phase: P03
status:
  - em-revisao
priority: alta
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
  - Finanças (a designar)
gap_ids:
  - DAT-006
dependencies:
  - P03-T05
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-006]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:26:19.225-03:00
---

# P03-T07 — Taxonomia estados de valor (potencial→realizado)

## Objetivo
Definir estados `potencial → influenciado → validado → realizado` + políticas cálculo/atribuição/deduplicação/contrafactual.

## Entregável
Taxonomia refinada, com pareceres de Finanças e Governança de Dados registrados como insumo para decisão posterior na Camada 3.

## Dependências
- [[04-project-management/tarefas/P03-T05_Catalogo_Metricas_Grafo|P03-T05]]

## Critério (G03.C3)
Pareceres de Finanças e Governança de Dados registrados para subsidiar a aprovação na Camada 3.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-006]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1|taxonomia-estados-valor-P03-T07-v1.md]] — 4 estados com caminho evidências, políticas cálculo/atribuição/deduplicação/contrafactual + exemplo `PES-02→RH-06→R$18.500 influenciado` com regra promoção para `validado` (holdout) e `realizado` (`contract_id`+ledger).
- **Pareceres:** Finanças e Gov Dados ambos `Refinar com condições` — `influenciado` operacional vs `realizado` ledger; `DAT-006` aberto até Camada 3.
- **Resultado:** nenhum valor `influenciado` entra em demonstrativo sem `contract_id`; duplicação bloqueada por `financial_claims` indexado.
- **Próximo:** protocolo holdout `run_rh06_holdout_001` e decisão `DEC-P03-T07.md`.

## Verificação G03.C3 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| 4 estados com evidência mínima | ok | §1 tabela estados |
| Políticas dedup/atribuição/contrafactual | ok | §2.1–2.4 |
| Pareceres Finanças/Gov Dados | ok | §4 ambos `Refinar com condições` |

> **Status:** `em-revisao` — insumo Camada 3; `DAT-006` aberto.
