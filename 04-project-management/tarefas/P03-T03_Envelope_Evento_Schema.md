---
title: P03-T03 — Envelope canônico de evento + schema registry (M03.B)
task_id: P03-T03
phase: P03
status:
  - em-revisao
priority: critica
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
  - Tech (apoio)
gap_ids:
  - DAT-003
dependencies:
  - P03-T01
target_file: 02-refinement/refinamento-modelo-dados/modelo-indicadores/
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-003]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:22:55.198-03:00
---

# P03-T03 — Envelope canônico de evento + schema registry (M03.B)

## Objetivo
Definir envelope canônico, schema registry, versionamento, idempotência e regras temporais.

## Entregável
Rascunho de envelope + proposta de schema e testes de contrato+replay (produtores/consumidores de teste), para revisão posterior.

## Dependências
- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]]

## Critério de refinamento (G03.B1)
A proposta deve permitir avaliar produtores/consumidores de teste em contrato+replay; resultados permanecem sujeitos a revisão.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-003]]

## Execução

- **Entregável produzido:** [[02-refinement/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1|envelope-evento-schema-P03-T03-v1.md]] — envelope com 17 campos (`event_id`, `schema_version`, `idempotency_key`, `correlation_id`, etc.), schema registry com regras `major`/`minor`, idempotência `producer+event_type+subject+occurred_at+hash`, regras temporais UTC e replay com `run_id` + reconciliação.
- **Testes contrato+replay:** 3 produtores (`hub.identity`, `hub.journey`, `crm`) e 3 consumidores (`analytics`, `matching`, `replay`) com fixtures em `schema-registry/fixtures/` — `valid→accepted`, `invalid→quarantined`, `duplicate→deduped`.
- **Resultado:** consumidores rejeitam `v2.0` sem adaptador e aceitam `v1.1` compatível; atrasados mantêm `occurred_at`.
- **Próximo:** publicar 3 schemas iniciais, executar testes contrato/replay e registrar aprovação Dados+Tech.

## Verificação G03.B1 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Envelope com `schema_version` + `idempotency_key` | ok | Tabela §1 + exemplo JSON |
| Registry com versionamento | ok | §2 `major`/`minor` + promotion rules |
| Produtores/consumidores passam em contrato+replay | proposto | §6 matriz produtores/consumidores + fixtures |

> **Status:** `em-revisao` — rascunho para validação Dados+Tech; `DAT-003` aberto até testes.
