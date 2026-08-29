---
title: P07-T01 — Portão mestre + grafo de dependências (LCH-001)
task_id: P07-T01
phase: P07
status: pendente
priority: critica
area: launch-vision
layer: approval
owner:
  - PF Rezende
gap_ids:
  - LCH-001
  - STR-003
dependencies:
  - P06-T02
  - P04-T01
target_file: "03-approval/portao-lancamento/portao-mestre-v1.md"
related_notes:
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[00-project-control/registro-lacunas/lacunas/LCH-001]]"
  - "[[04-project-management/marcos/marcos-fases-v1]]"
created: 2026-08-26
tags:
  - task
  - fase-P07
---

# P07-T01 — Portão mestre + grafo de dependências (LCH-001)

## Objetivo
Construir portão mestre com checklist integrado (negócio, produto, dados, tech, jurídico, finanças, ops, comunicações) + grafo P01→P07.

## Entregável
`portao-mestre-v1.md` em `03-approval/portao-lancamento/` com status `aprovado/condicional/bloqueado` por item; sem crítico em `blueprint` (G07.1).

## Dependências
- [[04-project-management/tarefas/P06-T02_Modelo_Financeiro_3_Cenarios|P06-T02]] — economia validada (M06)
- [[04-project-management/tarefas/P04-T01_Arquitetura_Entidades|P04-T01]] — governança e confiança aprovadas (M04)

P07 requer a cadeia P01→P06 aprovada, com P04 como governança de gating explícita. O portão mestre consolida a convergência entre **P04/M04 (governança e confiança)** e **P06/M06 (economia e GTM com evidência)**; a governança não deve ser tratada apenas como dependência transitiva de P06.

## Critério (G07.1)
Todo item com dono+evidência.

## Registros
- [[00-project-control/registro-lacunas/lacunas/LCH-001]] · [[00-project-control/registro-lacunas/lacunas/STR-003]]
