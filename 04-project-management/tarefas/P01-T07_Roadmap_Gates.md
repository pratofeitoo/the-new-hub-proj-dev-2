---
title: P01-T07 — Roadmap P01→P07 com dependências e gates
task_id: P01-T07
phase: P01
status: concluido
priority: alta
area: launch-vision
layer: governance
owner:
  - PF Rezende
gap_ids:
  - STR-003
dependencies:
  - P01-T01
  - P01-T02
target_file: 04-project-management/planos-mestres/HUB_Plano_Fases_v1.md
related_notes:
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[00-project-control/registro-lacunas/lacunas/STR-003]]"
  - "[[04-project-management/cronogramas/cronograma-fases-v1.base]]"
  - "[[04-project-management/marcos/marcos-fases-v1]]"
created: 2026-08-26
tags:
  - task
  - fase-P01
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:45:26.971-03:00
---

# P01-T07 — Roadmap P01→P07 com dependências e gates

## Objetivo
Conectar roadmap de produto/negócio/dados/governança/lançamento com dependências e critérios de saída por fase.

## Entregável
Roadmap atualizado em `HUB_Plano_Fases_v1.md` + sincronização com `cronograma-fases-v1.base` e `marcos-fases-v1.md`.

## Dependências
- [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades|P01-T01]]
- [[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade|P01-T02]]

## Critério de aceite (G01.6)
Roadmap de trabalho consolidado para revisão, sem contradição conhecida entre domínios; a consolidação não constitui aprovação final de fase ou de lançamento.

## Registros relacionados
- [[00-project-control/registro-lacunas/lacunas/STR-003]]

## Execução

- **Entregável produzido:** blueprint de roadmap P01→P07 consolidado em [[04-project-management/planos-mestres/HUB_Plano_Fases_v1]], com dependências duras, sub-gates P03.A/P03.B, critérios de saída por domínio e regra explícita de não aprovação automática.
- **Reconciliação:** negócio/produto definem promessa; P03 define medição; P04 uso e confiança; P05 operação técnica; P06 financiamento/GTM baseado em evidência; P07 verifica a composição. P07 inclui `LCH-001..007` e `STR-003`.
- **Artefatos vinculados:** `cronograma-fases-v1.base` permanece a view derivada dos planos de fase; `marcos-fases-v1.md` permanece o registro operacional de evidências e decisões, com dependências P03.A/P03.B e condição explícita de `STR-003`. Nenhum status de gate foi promovido para `aprovado`.
- **Estado:** `em-revisao` — G01.6 preparado para revisão; `STR-003` permanece aberto até evidência, responsável aceito e aprovação interdomínios.

## Validação

- `git diff --check` — passou.
- Consistência focada — roadmap contém P01–P07, dependências P00/P01/P02/P03.A/P03.B/P03/P04/P05/P06/P07, critérios G01–G07 e referências `STR-003`/`LCH-001..007`; sem aprovação formal declarada.
