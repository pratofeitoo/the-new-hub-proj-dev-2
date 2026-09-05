---
title: P01-T06 — Limites de concentração de parceiros (thresholds)
task_id: P01-T06
phase: P01
status:
  - concluido
priority: alta
area: gtm
layer: governance
owner:
  - Governança (a designar)
gap_ids:
  - GTM-006
dependencies:
  - P01-T02
target_file: 01-work/pesquisa-e-confianca/pesquisa/segundo-rascunho-projeto/
related_notes:
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[00-project-control/registro-lacunas/lacunas/GTM-006]]"
created: 2026-08-26
tags:
  - task
  - fase-P01
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:45:22.873-03:00
---

# P01-T06 — Limites de concentração de parceiros (thresholds)

## Objetivo
Propor e documentar thresholds numéricos para concentração de receita/roadmap/capacidade/dados/reputação e política de escalonamento, como hipótese de governança para o refinamento.

## Entregável
Tabela de limites propostos em `01-work/pesquisa-e-confianca/pesquisa/`, linkada ao portfólio de parceiros e encaminhada para revisão posterior de Governança.

## Dependências
- [[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade|P01-T02]]

## Critério de aceite
Hipóteses registradas com métricas, denominadores e escalonamento explícitos, com encaminhamento para revisão de Governança; este registro não constitui aprovação final.

## Registros relacionados
- [[00-project-control/registro-lacunas/lacunas/GTM-006]]

## Execução

- **Entregável produzido:** [[01-work/pesquisa-e-confianca/pesquisa/HUB_v2_limites_concentracao_parceiros_propostos|matriz de limites de concentração de parceiros — hipóteses propostas]].
- **Cobertura:** thresholds warning/critical para receita, roadmap, capacidade, dados e reputação, com métrica/denominador, escalonamento, fallback, cadência, owner e fonte de evidência.
- **Governança:** todos os valores estão explicitamente marcados como propostos/hipóteses controladas; revisão e eventual aprovação permanecem pendentes e não são promovidas nesta etapa.
- **Encaminhamento:** [[04-project-management/tarefas/P06-T09_Estrategia_Canais_Concentracao|P06-T09]] usa esta matriz como insumo; a conexão com P07 permanece sujeita à verificação composta do roadmap, sem aprovação automática.
- **Validação:** `git diff --check` e validação estrutural focada executados após a edição.
