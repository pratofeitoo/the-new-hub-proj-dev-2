---
title: P01-T02 — Matriz oferta × comprador × capacidade (v1)
task_id: P01-T02
phase: P01
status: em-revisao
priority: critica
area: business-model
layer: blueprint
owner:
  - PF Rezende
  - Tamara
gap_ids:
  - STR-002
dependencies:
  - P01-T01
target_file: 01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md
related_notes:
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[00-project-control/registro-lacunas/lacunas/STR-002]]"
created: 2026-08-26
tags:
  - task
  - fase-P01
---

# P01-T02 — Matriz oferta × comprador × capacidade (v1)

## Objetivo
Construir matriz `oferta × comprador × frente de negócio × unidade responsável × motor de receita` para todas as ofertas candidatas.

## Entregável
Tabela validável em `HUB_Blueprint_Oferta_e_Arquitetura_Receita.md`. Cada oferta: nome, unidade dona (A), comprador primário, JTBD, troca de valor, motor receita, premissa aberta linkada a gap.

## Dependências
- [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades|P01-T01]]

## Critério de aceite (G01.1/G01.2)
Nenhuma oferta em 2 unidades sem regra de propriedade + acordo intragrupo anotado.

## Registros relacionados
- [[00-project-control/registro-lacunas/lacunas/STR-002]]

## Execução

- **Entregável produzido:** matriz oferta → comprador → unidade → capacidade → operação → receita → gap adicionada em [[01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita#2.1 Matriz oferta → comprador → unidade → capacidade → operação → receita → gap]].
- **Cobertura:** 17 ofertas candidatas nas frentes Mídia e Experiências, Impacto Financiável e Ecossistemas Empresariais.
- **Resultado:** cada linha possui unidade dona, capacidade principal, operação/troca de valor, motor de receita e gap vinculado.
- **Próximo gate:** validar compradores, JTBD, parceiros, riscos e classificação de receita em refinamento; manter hipóteses explícitas até os aceites de P01.
