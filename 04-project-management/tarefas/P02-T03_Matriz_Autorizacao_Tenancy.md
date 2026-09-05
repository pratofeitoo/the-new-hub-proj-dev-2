---
title: P02-T03 — Matriz autorização & tenancy (ator×permissão)
task_id: P02-T03
phase: P02
status:
  - concluido
priority: critica
area: product
layer: refining
owner:
  - Produto (a designar)
  - Jurídico (a designar)
gap_ids:
  - PRD-003
dependencies:
  - P02-T01
target_file: 01-work/refinamento-produto/
related_notes:
  - "[[04-project-management/planos-fase/P02_Produto_Operacao]]"
  - "[[00-project-control/registro-lacunas/lacunas/PRD-003]]"
created: 2026-08-26
tags:
  - task
  - fase-P02
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:45:39.439-03:00
---

# P02-T03 — Matriz autorização & tenancy (ator×permissão)

## Objetivo
Construir matriz `ator × papel × tenant × permissão × visibilidade` incluindo white-label.

## Entregável
Arquivo `matriz-autorizacao-tenancy.md` em `01-work/refinamento-produto/` para revisão conjunta por Segurança e Governança.

## Dependências
- [[04-project-management/tarefas/P02-T01_Taxonomia_Capacidades|P02-T01]]

## Critério (G02.3)
Cada ator com tenant, visibilidade e comportamento de dado esperado.

## Registros
- [[00-project-control/registro-lacunas/lacunas/PRD-003]]

## Execução

- **Entregável produzido:** [[01-work/refinamento-produto/matriz-autorizacao-tenancy|matriz-autorizacao-tenancy.md]] com 11 papéis × tenant/permissão/visibilidade + white-label.
- **Resultado:** matriz revisável para Segurança+Governança; cada ator com tenant/visibilidade/comportamento esperado.
- **Próximo:** validação Segurança (pen test, isolamento) e LGPD antes de G02.3.
