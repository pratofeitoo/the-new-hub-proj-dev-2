---
title: P03-T03 — Envelope canônico de evento + schema registry (M03.B)
task_id: P03-T03
phase: P03
status:
  - pendente
priority: critica
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
  - Tech (apoio)
gap_ids:
  - DAT-003
dependencies:
  - P03-T01
target_file: "02-refinement/refinamento-modelo-dados/modelo-indicadores/"
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-003]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
---

# P03-T03 — Envelope canônico de evento + schema registry (M03.B)

## Objetivo
Definir envelope canônico, schema registry, versionamento, idempotência e regras temporais.

## Entregável
Envelope publicado + testes contrato+replay (produtores/consumidores de teste).

## Dependências
- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]]

## Critério (G03.B1)
Produtores/consumidores de teste passam em contrato+replay.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-003]]
