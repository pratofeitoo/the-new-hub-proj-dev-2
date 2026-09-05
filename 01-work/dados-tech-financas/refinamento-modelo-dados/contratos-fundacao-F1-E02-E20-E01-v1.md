---
title: "Contratos Fundação F1 — E02, E20, E01 v1"
task_id: F1-fundacao
phase: F1
status: rascunho
date: 2026-09-05
tags:
  - refinement
  - F1
  - fundacao
  - dados-canonicos
related_notes:
  - "[[02-review/02-reconciliacao-blueprint/matriz-status-E01-E20-v1]]"
  - "[[04-project-management/registros-trabalho/logs-progresso/2026-09-05-matriz-status-E01-E20-gate-V2]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1]]"
---

# Contratos Fundação F1 — E02, E20, E01 v1

> **Status:** rascunho para revisão Arquitetura de Dados + LGPD/DPO. Não altera `03-approved`. Libera F2 somente após aprovação dos três.
> **Base:** P03-T01 (25 entidades, `rel_person_company`, `rel_company_entity`, `fact_consent`, N24 bloqueador), P03-T04 (FKs em `rel_company_entity`, `dim_consent` 4 campos, revogação ≤5 min), P03-T08 (propagação + quarentena + CMP log).
> **Reconciliação:** [[01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1|crosswalk da fonte aprovada]].

## E02 — Empresa ≠ Cliente ≠ Entidade

**Decisão:** `Company` (`company_id`) ≠ `Entity` (`entity_id`). `Cliente` não é entidade própria — é **papel** de uma `Company` num `Contract` (`fact_contract.company_id` + `contract_id`).

| Item | Contrato |
|---|---|
| Chaves | `dim_company.company_id` PK; `dim_entity.entity_id` PK; vínculo em `rel_company_entity` (`company_id` FK, `entity_id` FK) |
| Cardinalidade | `Company–Entity` N:N contratual; `Company–Contract` 1:N (papel cliente); `Entity–Institution` via `entity_id` FK |
| Temporalidade | `rel_company_entity.valid_from/to`; toda linha carrega `tenant_id`; sem vínculo vigente = sem papel cliente |
| Regras | `company_id` nunca reutilizado como `entity_id`; `dim_company.entity_id` só via `rel_company_entity`; `tenant_id` escopa leitura/escrita; troca de vínculo encerra com `valid_to`, nunca deleta |
| Auditoria | `created_at`, `updated_at`, `provenance_ref`; evento `company_entity.linked/unlinked` no `fact_event` |
| Aceite F1 | Amostra `dim_company × dim_entity × fact_contract` sem `company_id=entity_id`; cardinalidade e `tenant_id` validados; `03-approved` intacto |

## E20 — Consentimento ternário + revogação (bloqueador LGPD)

**Decisão:** relação ternária `person_id × purpose × consent_id`, versionada, com revogação executável e propagação ≤5 min.

| Item | Contrato |
|---|---|
| Chaves | `dim_consent.consent_id` PK; `person_id → dim_person.person_id` FK (`titular_id` é alias legado); `fact_consent(person_id, purpose, consent_id)` 1:N por finalidade |
| Campos mínimos | `consent_id`, `person_id`, `purpose` (enum), `legal_basis` (enum), `version`, `status` (`granted/revoked/expired`), `valid_from/to`, `revogado_em` |
| Bloqueio | Sem `consent` válido para a finalidade, bloqueados leitura/uso/derivação de sensíveis (`FLD-005/006/007`, `FLD-028`, `nome_social`, localização sensível) em `fact_person_skill`, `fact_event`, `fact_match` |
| Revogação | `consent_status=revoked` → evento `consent.revoked` → pipeline bloqueia novos `fact_*` com `purpose` revogado em ≤5 min; derivados materializados vão para fila `quarantine`; `CMP log + propagation test` |
| Retenção/DSAR | Prazos de vault, analítico e auditoria a validar por finalidade com LGPD/Finanças; DSAR exporta `person_id` + aliases + `consent`; exclusão cobre aliases, `dim_*`, `fact_*`, features, caches, exports |
| Aceite F1 (gate LGPD) | Teste ponta a ponta `consent.revoked → fact_event quarantine` ≤5 min em `06-relatorios-validacao/`; aprovação conjunta LGPD+Gov Dados; sem este gate, F2 não abre |

## E01 — Vínculo Pessoa–Empresa temporal

**Decisão:** vínculo laboral = `Relationship` (`relationship_id`) materializado em `rel_person_company`, N:N temporal, sem sobreposição incompatível.

| Item | Contrato |
|---|---|
| Chaves | `relationship_id` PK; `person_id → dim_person`, `company_id → dim_company`; `manager_id → dim_person.person_id` nullable FK; `relationship_type=employment` |
| Temporalidade | `valid_from/to` obrigatórios; `manager_id` (FLD-003) é atributo do vínculo, não da pessoa; `dim_person.company_id` lido sempre via vínculo vigente |
| Regras | Proíbe dois vínculos `employment` vigentes sobrepostos para o mesmo `person_id` (incompatível); admissão/desligamento = abre/encerra linha, nunca update in place; `tenant_id` + `valid_from/to` em toda leitura operacional; manager deve ser do mesmo tenant e ter vigência sobreposta |
| Auditoria | `provenance_ref`; eventos `relationship.started/ended` no envelope (`event_id`, `event_type`, `schema_version`, `occurred_at`, `tenant_id`, `idempotency_key`) |
| Aceite F1 (A1–A3) | A1 PASS (`REL-03` parcial); A2 PASS no nível documental via SPEC/fixture reprodutível em `06-relatorios-validacao/E01-temporal-acceptance-v1.md`; A3 `pending physical validation`, sem alegação de execução |

## Liberação F2

F2 (E03–E05, E10–E12, E17) só abre quando houver evidência executada: E02 sem colisão `company_id/entity_id` + `tenant_id` validado; E20 com teste de propagação ≤5 min aprovado por LGPD; E01 com A1–A3 registrados e A3 fisicamente validado. SPEC/fixture documental não substitui execução. Pendência restante vira M1/M2, nunca compromisso de MVP.
