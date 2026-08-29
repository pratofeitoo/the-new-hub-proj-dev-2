---
title: P03-T04 — Dicionário físico (≈41 campos) mapeado para entidades canônicas
task_id: P03-T04
phase: P03
status:
  - pendente
priority: alta
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
gap_ids:
  - DAT-010
dependencies:
  - P03-T01
  - P03-T03
target_file: "02-refinement/refinamento-modelo-dados/modelo-indicadores/"
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-010]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
---

# P03-T04 — Dicionário físico (≈41 campos) mapeado para entidades canônicas

## Objetivo
Mapear dicionário de 41 campos em 16 tabelas para entidades canônicas; resolver contradições `abas-origem/` vs `03-csv-corrigido/` em `04-registro-correcoes/`.

## Entregável
Tabela de mapeamento + registro de correções auditável.

## Dependências
- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]]
- [[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema|P03-T03]]

## Critério de refinamento (G03.B2)
Contradições registradas; linhagem dos artefatos inequívoca para revisão. Este critério orienta o refinamento e não constitui aprovação final nem prontidão de produção.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-010]]
