---
title: P03-T08 — Matriz dados-finalidade + ciclo de vida (LGPD)
task_id: P03-T08
phase: P03
status: em-revisao
priority: alta
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
  - Jurídico (a designar)
gap_ids:
  - DAT-008
dependencies:
  - P03-T01
target_file: 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-008]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:26:24.642-03:00
---

# P03-T08 — Matriz dados-finalidade + ciclo de vida (LGPD)

## Objetivo
Construir matriz `campo → finalidade → base legal → retenção → propagação consentimento → exclusão` por fluxo de lançamento.

## Entregável
Matriz refinada, com revisão de cobertura LGPD registrada em `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/`; eventual aprovação fica para a Camada 3.

## Dependências
- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]]

## Critério (G03.C4 parcial)
Mapa LGPD revisado ponta a ponta, com lacunas e pendências registradas para decisão posterior.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-008]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1|matriz-dados-finalidade-P03-T08-v1.md]] — 5 fluxos (Onboarding, Diagnóstico, Matching, Medição, Comercial) × 41 campos (ex: `dim_person.consent_status` → `consent_status` por `purpose` com `valid_from/to`) com base legal, retenção (60/36/24 meses), propagação `revogação ≤5 min` para `fact_person_skill`/`fact_event`/derivados e exclusão DSAR por fluxo.
- **Propagação:** todo campo Alta/Crítica exige `consent_id+purpose+version`; `consent.revoked` → `quarantine` em métricas/modelos/caches/exports parceiros.
- **Pareceres:** Jurídico/LGPD e Gov Dados — ambos `Refinar com condições` — `DAT-008` aberto até teste propagação ponta a ponta.
- **Próximo:** teste `propagation test` e decisão `DEC-P03-T08.md` (G03.C4).

## Verificação G03.C4 parcial — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Mapa campo→finalidade→base legal→retenção→propagação→exclusão | ok | §2 tabela 10 campos exemplares (41 total) |
| 5 fluxos cobertos | ok | §1 fluxos |
| Parecer LGPD registrado | ok | §6 ambos `Refinar com condições` |

> **Status:** `em-revisao` — rascunho para validação LGPD/Gov Dados; `DAT-008` aberto.
