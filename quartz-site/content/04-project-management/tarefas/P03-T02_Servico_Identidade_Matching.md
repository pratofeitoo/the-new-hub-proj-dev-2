---
title: P03-T02 — Serviço de identidade (matching/merging/survivorship)
task_id: P03-T02
phase: P03
status:
  - em-revisao
priority: critica
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
gap_ids:
  - DAT-002
dependencies:
  - P03-T01
target_file: "02-refinement/refinamento-modelo-dados/modelo-indicadores/"
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-002]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
---

# P03-T02 — Serviço de identidade (matching/merging/survivorship)

## Objetivo
Especificar regras de matching, merge, alias, survivorship e correção com reversibilidade, a serem testadas em dataset sintético.

## Entregável
Rascunho de especificação + dataset de teste com métricas FP/FN em `02-refinement/refinamento-modelo-dados/modelo-indicadores/`, para revisão posterior.

## Dependências
- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]]

## Critério de refinamento (G03.A2)
A proposta deve indicar como medir a taxa FP/FN e avaliar a reversibilidade; resultados permanecem sujeitos a revisão.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-002]]

## Execução

- **Entregável produzido:** [[02-refinement/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1|especificacao-identidade-P03-T02-v1.md]] — 3 camadas matching (determinístico/probabilístico/human review), merge/alias/survivorship por campo, correção reversível com `identity_alias` + eventos `identity.merged`/`identity.split`; dataset [[02-refinement/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv|dataset-identidade-sintetico-P03-T02.csv]] com 20 pessoas/12 empresas/40 aliases, 15 pares rotulados (`match`/`no_match`/`needs_review`), métricas FP ≤2% / FN ≤5% e teste reversibilidade 100%.
- **Dependência atendida:** [[02-refinement/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1]] — `hub_id` canônico e temporalidade.
- **Resultado:** regras explicitam `confidence` limiares (≥0.95 auto-merge candidato, 0.70–0.95 human_review, <0.70 descarte), `survivorship` por campo (nome/email/documento), `valid_from/to` e `is_survivor`.
- **Próximo:** popular `identity_alias` com dados reais CRM, medir FP/FN, constraints físicas e teste `merge→split→re-merge`.

## Verificação G03.A2 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Taxa FP/FN mensurável | ok | Dataset com `expected_hub_id` + `pair_label` e alvos FP≤2%/FN≤5% |
| Reversibilidade demonstrável | ok | Eventos `merged`/`split` com histórico preservado, teste `split→re-merge` proposto |
| Alias preservado | ok | `identity_alias` nunca apaga `external_id` |

> **Status:** `em-revisao` — rascunho para validação Arquitetura de Dados; `DAT-002` aberto até teste com dados reais.
