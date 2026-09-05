---
status: em-revisao
---

# Mapeamento de identidade, relações e sequenciamento v1

Fonte aprovada: `Planilha_Tecnica_Desenvolvimento_HUB.md`, abas 05, 07 e 08; `Matriz_Convergencia_73_16_25_23_12_8.md`, seção 2. Esta nota reconcilia camadas; não altera fatos aprovados.

## E01–E20 → REL-01–REL-12

`E01–E20` são registros conceituais dirigidos. `REL-*` são o contrato refinado da aba 07, com nível de evidência. Quando a semântica não é pareável sem inferência, a situação é **UNVERIFIED**.

| Conceitual | Contraparte aprovada | Correspondência / ressalva |
|---|---|---|
| E01 Pessoa possui vínculo com Empresa | REL-03 (parcial) | Associação pessoa/capacidade→alocação/receita; vínculo laboral específico: **UNVERIFIED**. |
| E02 Empresa é associada a Entidade | **UNVERIFIED** | Não há REL-* aprovado que explicite empresa→entidade. |
| E03 Pessoa demonstra Competência | REL-07 (parcial) | Skills→mobilidade/ramp-up; evidência direta pessoa→competência: **UNVERIFIED**. |
| E04 Oportunidade requer Competência | REL-07 (parcial) | Competência alimenta resultado de contratação; requisito de oportunidade: **UNVERIFIED**. |
| E05 Pessoa recebe Recomendação | REL-09 (parcial) | Uso de alertas HUB→tempo de reação→benefício; pessoa→recomendação: **UNVERIFIED**. |
| E06 Recomendação propõe Jornada | **UNVERIFIED** | Nenhum REL-* explicita recommendation→journey. |
| E07 Pessoa participa de Programa/projeto | REL-03 (parcial) | Programa/projeto e alocação aparecem como controles/capacidade; participação: **UNVERIFIED**. |
| E08 Programa/projeto altera Outcome individual | **UNVERIFIED** | Relação causal não é autorizada por nenhum REL-*; exige método. |
| E09 Outcome individual contribui para Indicador de negócio | REL-02 (parcial) | Atingimento→entrega→receita; contribuição outcome→indicador: **UNVERIFIED**. |
| E10 Fornecedor/solução responde a Oportunidade | REL-08 (parcial) | Preço fornecedor→custo/margem; resposta à oportunidade: **UNVERIFIED**. |
| E11 Match gera Contrato | **UNVERIFIED** | REL-* não declara match→contrato. |
| E12 Contrato gera Transação | REL-02 (parcial) | Entrega habilita reconhecimento de receita; contrato→transação: **UNVERIFIED**. |
| E13 Conteúdo/campanha influencia Oportunidade | **UNVERIFIED** | Nenhum REL-* aprovado para campanha→oportunidade. |
| E14 Diagnóstico identifica Risco/controle | REL-06 (parcial) | Engajamento→absenteísmo/permanência→custo; diagnóstico→risco: **UNVERIFIED**. |
| E15 Risco/controle afeta Indicador de negócio | REL-06 (parcial) | Relação de risco/custo é associativa; risco→indicador: **UNVERIFIED**. |
| E16 Empresa é comparada em Benchmark | **UNVERIFIED** | Nenhum REL-* aprovado para benchmark. |
| E17 Interação atualiza Recomendação | REL-09 (parcial) | Uso de alertas e reação; interação→recomendação: **UNVERIFIED**. |
| E18 Versão de modelo produz Match | **UNVERIFIED** | Modelo→match não aparece em REL-01–12. |
| E19 Cohort contém Pessoa | REL-07 (parcial) | REL-07 valida por coorte; pertencimento cohort→pessoa: **UNVERIFIED**. |
| E20 Consentimento autoriza finalidade para Pessoa | **UNVERIFIED** | REL-* não substitui o gate N24/FLD-024–026; relação ternária requer contrato próprio. |

## Identidade canônica → representação física / entidade

| Conceito | Representação aprovada | Evidência |
|---|---|---|
| Pessoa / canonical_id | `person_id`, FLD-001 | UUID, PK Pessoa; matriz N01. |
| Alias Workday | `workday_id`, FLD-002 | Alias com `source_system=Workday`, `source_id`; nunca PK/FK direta. |
| Empresa/cliente | `client_id`, FLD-019; N02 | A matriz ressalva que empresa ≠ cliente; par físico de Empresa: **UNVERIFIED**. |
| Consentimento | `consent_id`, `purpose`, `legal_basis`, FLD-024–026; N24 | Gate LGPD P0 F0. |
| Decisão | `decision_id`, `estimated_value`, `realized_value`, FLD-021–023; N26 | Novo canônico na matriz. |
| Evento / envelope | `event_id`, `event_type`, `schema_version`, `occurred_at`, FLD-042–045; N10 | Envelope SRC-12; P1 MVP1. |
| Meta | `goal_id`, `goal_progress`, `financial_kpi_id`, FLD-011–013 | N/A como entidade técnica da matriz; campos aprovados. |
| Fornecedor | `supplier_id`, FLD-020; N04 | Coberto MVP. |
| Programa/projeto | `program_id`, FLD-039; N15 | Parcial; canônico F0. |
| Contrato | `contract_id`, FLD-038; N16 | Parcial; FLD-016/017/019 também participam de fatos financeiros. |
| Indicador de negócio | `business_metric_id` / FLD-013 + aba 06; N18 | Coberto MVP; versão também exigida pelo contrato lógico. |
| Recomendação | `recommendation_id`, FLD-046; N12 | Parcial; reservar ID. |
| Match | `match_id`, FLD-047; N13 | Futuro M1; reservado. |
| `object_type` | Tipo abstrato do contrato lógico | **UNVERIFIED** como FLD direto; não promover a campo físico sem aprovação. |

## Matriz de sequenciamento — M0 arquitetural × MVP/piloto

| candidato arquitetural | integração MVP/piloto |
|---|---|
| CRM | INT-05 CRM (clientes/contratos); SRC-07 CRM — prioridade piloto. |
| Plataforma | INT-07 BI/DW (outputs HUB) e SRC-12 HUB — envelope obrigatório. |
| Consentimento | INT-08 SSO/IAM; FLD-024–026/N24 — gate LGPD P0 F0. |
| Entidade/identidade | INT-01 Workday/HCM + INT-05 CRM; FLD-001/002/019. |
| Backbone do warehouse | INT-03 ERP/Financeiro + INT-04 PSA/Timesheet + INT-06 Payroll; SRC-05 ERP/FP&A, SRC-06 PSA/Timesheet, SRC-08 Payroll — prioridades piloto. |
