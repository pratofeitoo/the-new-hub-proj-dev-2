---
title: P03-T01 — Modelo lógico/físico com PK/FK/cardinalidade (M03.A)
task_id: P03-T01
phase: P03
status:
  - em-revisao
priority: critica
area: data-intelligence
layer: blueprint
owner:
  - Dados (a designar)
gap_ids:
  - DAT-001
dependencies:
  - P02-T01
target_file: 01-blueprint/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-001]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:22:55.102-03:00
---

# P03-T01 — Modelo lógico/físico com PK/FK/cardinalidade (M03.A)

## Objetivo
Produzir modelo canônico de entidades (~25 nós → entidades com PK/FK, cardinalidade, tipos objeto, temporalidade).

## Entregável
Proposta de diagramas + tabelas em `HUB_Blueprint_Dados_e_Inteligencia.md` + `02-refinement/refinamento-modelo-dados/`, para revisão posterior.

## Dependências
- [[04-project-management/tarefas/P02-T01_Taxonomia_Capacidades|P02-T01]] — fronteiras travadas

## Critério de refinamento (G03.A1)
A proposta não deve manter entidade sem chave estável; a validação por arquitetura de dados permanece pendente de revisão.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-001]]

## Execução

- **Entregável produzido:** [[02-refinement/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1.md]] — 25 entidades com `canonical_id` (PK estável), 12 relacionamentos com PK/FK/cardinalidade/temporalidade, tipos de objeto por família, regras temporais e diagrama ER Mermaid; crosswalk `identity_alias` com `hub_id`/`external_id`/`source_system`.
- **Blueprint atualizado:** [[01-blueprint/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia#1. Entidades canônicas, nós, relacionamentos, chaves, tipos de objeto e regras temporais|BP-003 §1]] vinculado ao rascunho (G03.A1).
- **Resultado:** nenhuma entidade sem chave estável; `relationship_id` e bridges N:N temporal formalizados; `valid_from/to` e `occurred_at`/`recorded_at` padronizados (UTC).
- **Próximo:** revisão Dados+Tech, popular `identity_alias` com dataset representativo, constraints físicas e testes de órfãos/unicidade antes de G03.A2.

## Verificação G03.A1 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Entidades com PK estável | 25/25 | Tabela §1 do rascunho — todo `canonical_id` imutável |
| FK + cardinalidade + temporalidade | 12/12 | Tabela §2 + diagrama ER |
| Tipos objeto por família | 6 famílias | §3 mapeado a BP-003 |
| Regras temporais explícitas | ok | §4 `valid_from/to` inclusivo/exclusivo + UTC |

> **Status:** `em-revisao` — rascunho para revisão Arquitetura de Dados; `DAT-001` permanece aberto até aprovação.
