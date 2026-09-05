---
status: em-revisao
title: "Matriz de Status E01–E20 — cobertura, evidência, pendência e responsável"
date: 2026-09-05
tags:
  - gestao-projeto
  - blueprint
  - dados-canonicos
  - reconciliacao
related_notes:
  - "[[02-review/02-reconciliacao-blueprint/mapeamento-identidade-relacoes-sequenciamento-v1]]"
  - "[[03-approved/nucleo-inteligencia/analises-processadas/Matriz_Convergencia_73_16_25_23_12_8]]"
  - "[[04-project-management/registros-trabalho/logs-progresso/2026-09-05-classificacao-20-relacoes-blueprint]]"
  - "[[04-project-management/registros-trabalho/logs-progresso/2026-09-05-matriz-status-E01-E20-gate-V2]]"
---

# Matriz de Status E01–E20

Nota dedicada da matriz. O veredito formal do Gate V2 está em [[04-project-management/registros-trabalho/logs-progresso/2026-09-05-matriz-status-E01-E20-gate-V2|Veredito Gate V2]].
Fonte aprovada: `03-approved` (`FLD-001`–`FLD-047`, `N01`–`N26`, `REL-01`–`REL-12`). Esta nota reconcilia camadas; não altera fatos aprovados.

Legenda de status:

- **parcial** — `REL-*`/campo aprovado cobre parte; resíduo é `UNVERIFIED`, tratado por qualificação documental (A1–A3).
- **hipótese** — premissa conceitual aceita e documentada; não é contrato, não entra no MVP sem evidência futura.
- **futura** — exige contrato técnico novo (entidade, relação, evento, permissão); vinculada a fase explícita.
- **coberta** — contrato técnico completo e aprovado. Nenhuma E atinge este nível hoje.

## Matriz E01–E20

| ID | Relação conceitual | Status | Classe / Prio | Evidência (aprovado) | Pendência | Responsável | Fase / Aceite |
|---|---|---|---|---|---|---|---|
| **E01** | Pessoa possui vínculo com Empresa | **parcial** | Rápido / P0 | `REL-03` parcial; `person_id` FLD-001, `client_id` FLD-019, `relationship_id` reservado, `manager_id` FLD-003 | Qualificar vínculo laboral vs. alocação; reservar `relationship_id` + temporalidade (`valid_from/to` FLD-040/041) | Arquitetura de Dados | F1 fundação — aceite documental A1–A3 no gate |
| **E02** | Empresa é associada a Entidade | **futura** | Incremental / P0 | `client_id` FLD-019 (N02 parcial); `entity_id` sem par físico (N03 futuro M1) | Decidir Empresa≠Cliente≠Entidade; definir cardinalidade, chaves, `tenant_id`; propor REL/campos novos | Arquitetura de Dados + Produto MVP | F1 fundação — contrato aprovado antes de qualquer uso operacional |
| **E03** | Pessoa demonstra Competência | **parcial** | Rápido / P1 | `REL-07` parcial; `skill_id` (N07 futuro M1), `evidence_id` (N08 futuro M1) | Declarar `REL-07` parcial; marcar `skill_id`/`evidence_id` como M1; não anunciar cobertura técnica | Produto MVP | F2 operacional — aceite documental; contrato em M1 |
| **E04** | Oportunidade requer Competência | **hipótese** | Rápido / P1 | `REL-07` parcial; `opportunity_id` (N06 futuro M1) depende de N06/N07 | Manter como hipótese M1; registrar dependência N06/N07; definir aceite futuro | Produto MVP | F2 operacional — hipótese aceita, sem compromisso MVP |
| **E05** | Pessoa recebe Recomendação | **parcial** | Rápido / P1 | `REL-09` parcial; `recommendation_id` FLD-046 (N12 parcial), `decision_id` FLD-021–023 (N26) | Qualificar `REL-09` parcial; amarrar `recommendation_id`/`decision_id`; não tratar alerta como recomendação completa | Produto MVP | F2 operacional — aceite documental |
| **E06** | Recomendação propõe Jornada | **futura** | Incremental / P2 | Sem `REL-*`; `journey_id` (N11 futuro M1) | Definir estados de jornada; ligar recomendação→jornada por evento; definir replay/auditoria | Produto MVP | F3 expansão — só após N11 existir |
| **E07** | Pessoa participa de Programa/projeto | **parcial** | Rápido / P1 | `REL-03` parcial; `program_id` FLD-039 (N15 parcial) | Manter parcial/hipótese; registrar `program_id`; excluir aceite de cobertura plena | Arquitetura de Dados | F1 fundação → F2 operacional |
| **E08** | Programa/projeto altera Outcome individual | **futura** | Difícil / P2 | Nenhum `REL-*` autoriza causalidade; `outcome_id` proxy FLD-008/009/012 (N19 parcial M1) | Baseline, cohort, janela de medição, holdout/confundidores, atribuição + deduplicação + ledger | Produto MVP + Controladoria | F4 piloto causal — 10–20 dias desenho + 4–8 semanas piloto; fora do MVP |
| **E09** | Outcome individual contribui para Indicador de negócio | **parcial** | Rápido / P1 | `REL-02` parcial; `business_metric_id`/`financial_kpi_id` FLD-013 (N18 coberto MVP) | Declarar proxy; apontar métrica; exigir estado de evidência (`potencial→influenciado→validado→realizado`) | Controladoria | F2 operacional — proxy documentado, sem promoção financeira |
| **E10** | Fornecedor/solução responde a Oportunidade | **futura** | Incremental / P1 | `REL-08` parcial; `supplier_id` FLD-020 (N04 coberto); `opportunity_id` futuro M1 | Definir oportunidade/oferta; criar score/TCO; ligar ao `match_id` FLD-047; validar com Compras/Financeiro | Produto MVP + Compras | F2 operacional — contrato + validação Compras/Financeiro |
| **E11** | Match gera Contrato | **futura** | Incremental / P1 | `match_id` FLD-047 (N13 futuro M1 reservado); `contract_id` FLD-038 (N16 parcial) | Definir estados match→contrato; registrar decisão (`decision_id`); auditar consentimento/rejeição | Arquitetura de Dados + Produto MVP | F2 operacional — eventos reproduzíveis |
| **E12** | Contrato gera Transação | **futura** | Incremental / P1 | `REL-02` parcial; `contract_id` FLD-038 + `transaction_id` (N17 parcial, FLD-016→018/023) | Definir período/moeda; ligar `contract_id`+`transaction_id` ao ledger; impedir dupla contagem | Controladoria | F2 operacional — ledger único, sem métrica financeira sem atribuição+deduplicação |
| **E13** | Conteúdo/campanha influencia Oportunidade | **futura** | Incremental / P2 | Sem `REL-*`; `content_id` (N23 futuro M1/M2) | Reservar `content_id`+`opportunity_id`; definir janela/influência; integrar CRM (INT-05/SRC-07); validar sem duplicação | Produto MVP + CRM | F3 expansão — sem compromisso MVP |
| **E14** | Diagnóstico identifica Risco/controle | **hipótese** | Rápido / P1 | `REL-06` parcial; `assessment_id` FLD-008→013 (N09 coberto); `risk_id` futuro M2 (N22) | Declarar hipótese parcial; manter `risk_id` futuro M2; não converter correlação em controle | Produto MVP | F2 operacional — hipótese aceita |
| **E15** | Risco/controle afeta Indicador de negócio | **hipótese** | Rápido / P1 | `REL-06` associativo; `business_metric_id` FLD-013 | Registrar dependência `risk_id`+métrica; exigir evidência; deixar causalidade para depois | Controladoria | F2 operacional — hipótese aceita |
| **E16** | Empresa é comparada em Benchmark | **futura** | Incremental / P2 | Sem `REL-*`; `benchmark_id` futuro M2 (N21) | Definir cohort, métrica/período, comparabilidade, anonimização anti-reidentificação | Arquitetura de Dados + LGPD/DPO | F3 expansão — aprovação prévia antes de publicar |
| **E17** | Interação atualiza Recomendação | **futura** | Incremental / P1 | `REL-09` parcial; envelope `event_id`/`event_type`/`schema_version`/`occurred_at` FLD-042–045 (N10 parcial) | Envelope versionado obrigatório; ligar evento→recomendação; versionar estado; testar replay/idempotência | Arquitetura de Dados | F2 operacional — eventos reproduzíveis + idempotência |
| **E18** | Versão de modelo produz Match | **futura** | Incremental / P2 | Sem `REL-*`; `model_version_id` futuro M1/M3 (N25); `match_id` sem linhagem | Definir versão/artefato; registrar score/justificativa; ligar a `match_id`; validar fairness/drift | Arquitetura de Dados | F3 expansão — só quando matching existir (M1/M3) |
| **E19** | Cohort contém Pessoa | **futura** | Incremental / P2 | `REL-07` valida por cohort; `cohort_id` futuro M1 (N20) | Definir `cohort_id`/critério de inclusão; registrar período/consentimento; testar fairness | Arquitetura de Dados + LGPD/DPO | F3 expansão (M1) — sem cohort sem consentimento |
| **E20** | Consentimento autoriza finalidade para Pessoa | **futura** | Incremental / P0 | `consent_id`/`purpose`/`legal_basis` FLD-024–026 + FLD-005→007/040/041 (N24 parcial crítico) | Contrato ternário titular/finalidade/base legal; bloqueio de sensíveis sem consentimento; revogação/propagação executável; auditoria; gate LGPD | LGPD/DPO + Arquitetura de Dados | F1 fundação (bloqueador) — 5–10 dias contrato + 3–6 semanas; aprovação gate LGPD antes de F2 |

Totais: **0 cobertas · 5 parciais (E01, E03, E05, E07, E09) · 3 hipóteses (E04, E14, E15) · 12 futuras**.
