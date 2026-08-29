---
title: P03-T02 — Serviço de identidade (matching/merging/survivorship)
task_id: P03-T02
phase: P03
status:
  - pendente
priority: critica
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
gap_ids:
  - DAT-002
dependencies:
  - P03-T01
target_file: "02-refinement/refinamento-modelo-dados/modelo-indicadores/"
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-002]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
---

# P03-T02 — Serviço de identidade (matching/merging/survivorship)

## Objetivo
Especificar regras de matching, merge, alias, survivorship e correção com reversibilidade, testadas em dataset sintético.

## Entregável
Especificação + dataset de teste com métricas FP/FN em `02-refinement/refinamento-modelo-dados/modelo-indicadores/`.

## Dependências
- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]]

## Critério (G03.A2)
Taxa FP/FN medida e reversibilidade demonstrada.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-002]]
