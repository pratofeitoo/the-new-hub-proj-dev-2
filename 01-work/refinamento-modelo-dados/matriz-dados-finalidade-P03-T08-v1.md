---
title: Matriz Dados-Finalidade + Ciclo Vida v1 — P03-T08 (G03.C4 parcial)
task_id: P03-T08
phase: P03
status: rascunho
gap_id: DAT-008
created: 2026-08-29
source_task: "[[04-project-management/tarefas/P03-T08_Matriz_Dados_Finalidade]]"
tags:
  - refinement
  - P03
  - DAT-008
---

# Matriz Dados-Finalidade + Ciclo Vida v1 — P03-T08 (G03.C4 parcial)

> **Status:** rascunho para revisão LGPD/Governança · **G03.C4 parcial** · Mapa ponta a ponta para decisão Camada 3; não aprovado.
> **Depende de:** [[02-refinement/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1]] — 25 entidades; [[02-refinement/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1|dicionario-fisico-mapping-P03-T04-v1]] — 41 campos.

## 1. Fluxos de lançamento cobertos

| Fluxo | Finalidade primária | Base legal | Dados pessoais envolvidos |
|---|---|---|---|
| Onboarding + Consentimento | Gestão consentimento e finalidade | Consentimento | `person_id`, `consent_id`, `purpose` |
| Diagnóstico + Jornada | Execução serviço | Execução contrato | `person_id`, `company_id`, `skill_id`, `assessment_id` |
| Matching + Introdução | Execução serviço / legítimo interesse | Execução contrato | `person_id`, `match_id`, `opportunity_id` |
| Medição + Dashboard | Métrica anonimizada | Legítimo interesse + consentimento quando sensível | `metric_id`, `cohort_id`, `participation_id` (pseudônimo) |
| Comercial (Contrato/Transação) | Execução contrato | Execução contrato | `contract_id`, `transaction_id`, `company_id` |

## 2. Matriz — campo → finalidade → base legal → retenção → propagação → exclusão

| Tabela.Campo | Finalidade | Base legal | Retenção | Propagação consentimento | Exclusão / DSAR | Evidência |
|---|---|---|---|---|---|---|
| dim_person.person_id | Identificação pseudônima | Execução contrato / consentimento | 60 meses vault; TTL analítico por finalidade | revogação bloqueia novos usos <=5 min; propaga para `fact_person_skill`, `fact_event`, derivados | vault + alias preservado pseudônimo; DSAR exporta `person_id` + aliases |
| dim_person.company_id | Vínculo vigente | Execução serviço | 60 meses ou contrato + obrigação legal | purpose-scoped; não propaga sem finalidade | `rel_person_company.valid_to` encerra vínculo |
| dim_person.consent_status | Controle finalidade | Consentimento / obrigação legal | permanente enquanto necessário | **propaga para todo derivado:** `fact_person_skill`, `fact_event`, métricas, modelos, caches, exports parceiros | revogação `valid_to = revoked_at`; fila bloqueada <=5 min; `CMP log + propagation test` |
| dim_person.profile_segment | Personalização | Legítimo interesse | 24 meses analytics | não sensível; sem propagação crítica | anonimizado após TTL |
| dim_company.company_id | Identificação organização | Execução contrato | 60 meses ou contrato + obrigação legal | não pessoal; controle acesso por tenant | `company_id` retido para ledger |
| fact_person_skill.* | Avaliação competência | Execução serviço | 36 meses após evento | consentimento aplicável; `evidence_id` propaga finalidade | token only; revogação bloqueia novos cálculos |
| fact_event.event_id | Auditoria | Execução contrato / obrigação legal | 36 meses; audit 60 meses | `consent_ref` propaga; `purpose` acompanha derivado | audit append-only; minimizado após exclusão |
| fact_match.match_id | Recomendação | Execução serviço | 36 meses após `expires_at` | opt-in `purpose=matching`; revogação invalida ranking | `match_id` mantido mas `confidence` anonimizado |
| fact_contract.contract_id | Prova contratual | Execução contrato | 60 meses + obrigação fiscal | não depende de consentimento isolado | contrato retido; dados pessoais minimizados |
| fact_transaction.transaction_id | Financeiro | Execução contrato / obrigação legal | 60 meses fiscal | idem | ledger imutável; DSAR não apaga transação fiscal |

> **41 campos completos** em `08_Dicionario_Dados.csv` seguem mesma regra; tabela acima exemplifica famílias. Ficheiro canónico de retenção em `04-registro-correcoes/governance-control-register.csv`.

## 3. Propagação consentimento — regra

1. Todo campo com `sensibilidade Alta/Crítica` exige `consent_id` + `purpose` + `version`.
2. Revogação (`consent_status=revoked`) cria evento `consent.revoked` → pipeline bloqueia novos `fact_*` com `purpose` revogado em ≤5 min; derivados já materializados entram em fila `quarantine`.
3. Métricas, modelos, caches, exports parceiros reavaliam `purpose` antes de uso; sem `purpose` válido = `quarantined`.

## 4. Retenção / Exclusão / Portabilidade

| Classe | Período mínimo/máximo | Gatilho | Job ciclo vida | Portabilidade |
|---|---|---|---|---|
| Vault identidade | 60 meses | contrato + obrigação legal | `lifecycle_job` com `valid_to` | exporta `person_id` + aliases + `consent` |
| Analítico | 24–36 meses | `purpose` TTL | anonimização após TTL | não exporta |
| Audit | 60 meses | obrigação legal | append-only, minimizado | tipo evento + autorização (sem dado sensível) |

Exclusão abrange `identity_alias`, `dim_*`, `fact_*`, features, caches, índices, backups, exports parceiros; quando agregado compartilhado não pode ser excluído, documenta anonimização + risco residual (LGPD).

## 5. Dados derivados — regras

- Agregação não remove obrigação; `derived_artifact` registra `source_event_ids` + `purpose`.
- Reidentificação avaliada; risco > limiar = `restricted`.

## 6. Parecer LGPD (insumo Camada 3)

| Função | Parecer | Condição |
|---|---|---|
| **Jurídico/LGPD** | Refinar com condições | Validar propagação ≤5 min em `fact_person_skill`, `fact_event`, métricas, modelos e exports parceiros; teste `propagation test` antes de G03.C4 |
| **Governança Dados** | Refinar com condições | Confirmar `purpose` por campo + `valid_from/to` histórico auditável; `DAT-008` aberto até teste ponta a ponta |

> Ambos `Refinar com condições` — `DAT-008` permanece aberto.

## 7. Pendências G03.C4

- [ ] Teste propagação `consent.revoked → fact_event quaratine` em `06-relatorios-validacao/`.
- [ ] Aprovação conjunta LGPD+Gov Dados deste mapa em `00-project-control/decisoes/DEC-P03-T08.md`.

## 8. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P03-T08_Matriz_Dados_Finalidade|P03-T08]]
- Gap: [[00-project-control/registro-lacunas/lacunas/DAT-008]]
- Dicionário: [[02-refinement/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1|P03-T04 v1]] — 41 campos
- Modelo: [[02-refinement/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|P03-T01 v1]] — `valid_from/to`
