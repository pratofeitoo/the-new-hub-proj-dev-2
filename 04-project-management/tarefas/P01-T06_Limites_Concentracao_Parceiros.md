---
title: P01-T06 — Limites de concentração de parceiros (thresholds)
task_id: P01-T06
phase: P01
status: em-revisao
priority: alta
area: gtm
layer: governance
owner:
  - Governança (a designar)
gap_ids:
  - GTM-006
dependencies:
  - P01-T02
target_file: "02-refinement/pesquisa/segundo-rascunho-projeto/"
related_notes:
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[00-project-control/registro-lacunas/lacunas/GTM-006]]"
created: 2026-08-26
tags:
  - task
  - fase-P01
---

# P01-T06 — Limites de concentração de parceiros (thresholds)

## Objetivo
Definir thresholds numéricos para concentração receita/roadmap/capacidade/dados/reputação e política de escalonamento.

## Entregável
Tabela de limites em `02-refinement/pesquisa/` linkada ao portfólio de parceiros.

## Dependências
- [[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade|P01-T02]]

## Critério de aceite
Aprovado por Governança.

## Registros relacionados
- [[00-project-control/registro-lacunas/lacunas/GTM-006]]

## Execução

- **Entregável produzido:** [[02-refinement/pesquisa/HUB_v2_limites_concentracao_parceiros_propostos|matriz de limites de concentração de parceiros — hipóteses propostas]].
- **Cobertura:** thresholds warning/critical para receita, roadmap, capacidade, dados e reputação, com métrica/denominador, escalonamento, fallback, cadência, owner e fonte de evidência.
- **Governança:** todos os valores estão explicitamente marcados como propostos/hipóteses controladas; aprovação permanece pendente e é o critério de aceite.
- **Validação:** `git diff --check` e validação estrutural focada executados após a edição.
