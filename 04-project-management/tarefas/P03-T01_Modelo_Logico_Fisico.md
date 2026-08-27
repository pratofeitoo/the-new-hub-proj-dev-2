---
title: P03-T01 — Modelo lógico/físico com PK/FK/cardinalidade (M03.A)
task_id: P03-T01
phase: P03
status: pendente
priority: critica
area: data-intelligence
layer: blueprint
owner:
  - Dados (a designar)
gap_ids:
  - DAT-001
dependencies:
  - P02-T01
target_file: "01-blueprint/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md"
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-001]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
---

# P03-T01 — Modelo lógico/físico com PK/FK/cardinalidade (M03.A)

## Objetivo
Produzir modelo canônico de entidades (~25 nós → entidades com PK/FK, cardinalidade, tipos objeto, temporalidade).

## Entregável
Diagramas + tabelas em `HUB_Blueprint_Dados_e_Inteligencia.md` + `02-refinement/refinamento-modelo-dados/`.

## Dependências
- [[04-project-management/tarefas/P02-T01_Taxonomia_Capacidades|P02-T01]] — fronteiras travadas

## Critério (G03.A1)
Sem entidade sem chave estável; validado por arquitetura de dados.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-001]]
