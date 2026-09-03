---
title: Especificação Identidade — Matching/Merging/Survivorship v1 — P03-T02 (G03.A2)
task_id: P03-T02
phase: P03
status: rascunho
gap_id: DAT-002
created: 2026-08-29
source_task: "[[04-project-management/tarefas/P03-T02_Servico_Identidade_Matching]]"
tags:
  - refinement
  - P03
  - DAT-002
---

# Especificação Identidade — Matching/Merging/Survivorship v1 — P03-T02 (G03.A2)

> **Status:** rascunho para validação Arquitetura de Dados · **G03.A2** · Não aprovado. Dataset sintético incluso para medir FP/FN e reversibilidade.
> **Depende de:** [[02-refinement/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1]] — `identity_alias` e 25 entidades com `canonical_id`.

## 1. Objetivo (DAT-002 / G03.A2)

Definir regras de **matching**, **merge**, **alias**, **survivorship** e **correção com reversibilidade**, testáveis em dataset sintético com métricas **FP** (falso positivo = merge indevido) e **FN** (falso negativo = match perdido).

## 1.1 canonical_id vs alias

- **canonical_id** (`person_id` UUID HUB) é a PK lógica, imutável, com `tenant_id`, `valid_from/to`, `record_status` e referência de proveniência.
- **workday_id** (FLD-002) é **alias**: `{source_system: "Workday", source_id: workday_id, canonical_id: person_id}`; nunca é PK nem FK direta.
- Todo acesso por `workday_id` resolve para `canonical_id` via `identity_alias` namespaced por `source_system` e `tenant_id`.
- Novos campos de contrato: `consent_id` (FLD-024), `tenant_id` (FLD-040), `valid_from/to` (FLD-041), `event_id` (FLD-042), `recommendation_id` (FLD-046) e `match_id` (FLD-047).

## 2. Modelo de dados — `identity_alias` (já definido em P03-T01 v1)

| Campo | Tipo | Regra |
|---|---|---|
| `hub_id` | `person_id` / `company_id` canônico | PK lógica, imutável, `canonical_id` |
| `external_id` | string | `person_external_id`, CRM `company_id`, etc. |
| `source_system` | enum | HRIS, CRM, ATS, LMS, SRM, ERP |
| `object_type` | enum | Person, Company, Opportunity, etc. |
| `match_method` | enum | deterministic / probabilistic / human_review |
| `confidence` | float 0–1 | score do candidato |
| `valid_from/to` | timestamp | vigência do vínculo; `NULL` = vigente |
| `is_current` | boolean | apenas 1 vigente por (`hub_id`, `source_system`, `external_id`) |
| `created_at` | timestamp | audit |

Regra: nunca join direto entre IDs externos; sempre resolver via `hub_id`.

## 3. Matching — 3 camadas

### 3.1 Determinístico (alta precisão, só quando lícito e confiável)

- **Pessoa:** `(documento fiscal HASH + país)` OU `(email normalizado + data_nascimento)` — exige consentimento/finalidade para uso de documento.
- **Empresa:** `(CNPJ normalizado)` OU `(domínio email + razão social normalizada)`.
- **Oportunidade:** `(source_system + opportunity_external_id)` dentro do tenant.

### 3.2 Probabilístico (explicável)

Features: `nome (trigrama)`, `email`, `telefone`, `data_nascimento`, `empresa`, `cargo`, `localidade`. Score ponderado; limiares:

| Faixa | confidence | Ação |
|---|---|---|
| ≥0.95 | auto-merge candidato | fila `human_review` ainda registra, mas pode auto-aprovar se `source_system` autoritativo |
| 0.70–0.95 | `human_review` obrigatório | curador decide |
| <0.70 | não candidato | descartado |

Toda decisão armazena `evidence`, `model_version_id`, `reviewer`, `timestamp`.

### 3.3 Human review

Fila única com SLA 5d; reviewer competente, sem conflito, com acesso a evidências de origem. Decisão = `merge` / `no_merge` / `quarantine`.

## 4. Merge, Alias e Survivorship

- **Merge:** cria `hub_id` sobrevivente + evento `merge` (`event_type=identity.merged`, `subject_canonical_id=hub_id`, `payload={merged_ids, aliases}`); aliases preservados; vigências anteriores mantidas com `valid_to = merged_at`.
- **Alias:** todo `external_id` permanece consultável em `identity_alias`; busca por origem sempre retorna `hub_id` atual.
- **Survivorship por campo** (específico, não genérico):

| Campo | Regra survivorship |
|---|---|
| `nome` | mais recente com `confidence ≥0.85`, senão mais frequente |
| `email` | vigente por `source_system` prioritário (HRIS > CRM) |
| `documento` | só se finalidade LGPD permite; caso contrário mascarado |
| `telefone` | último `observed_at` com consentimento |
| `empresa` | vigente por `rel_person_company.valid_to IS NULL` |

Nenhum fato conflitante da origem é apagado; campo sobrevivente é flag `is_survivor`.

## 5. Correção e reversibilidade

- **Split / desmerge:** evento `identity.split` reativa `hub_id` anterior; `valid_from/to` revertidos; derivados (skills, participações, métricas) reavaliados, não reescritos silenciosamente.
- **Correção de atributo:** nova versão com `valid_from = corrected_at`; histórico preservado.
- **Linha temporal:** `occurred_at` (mundo real) ≠ `recorded_at` (ingestão). Replay usa `occurred_at`.

## 6. Dataset sintético — P03-T02

Local: `02-refinement/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv` (20 pessoas, 12 empresas, 40 aliases, 15 pares candidatos rotulados).

| Col | Descrição |
|---|---|
| `person_external_id` | ID origem (HRIS_001, CRM_042…) |
| `source_system` | HRIS, CRM, ATS, LMS |
| `nome`, `email`, `documento_hash`, `data_nascimento` | atributos para matching |
| `company_id` | vínculo empresa |
| `expected_hub_id` | `hub_id` esperado (ground truth) |
| `pair_label` | `match` / `no_match` / `needs_review` (rótulo do par sintético) |

**Métricas:**

- **FP = merges indevidos / pares `no_match` candidatos** — alvo ≤2%
- **FN = matches perdidos / pares `match` reais** — alvo ≤5%
- **Reversibilidade = splits reexecutados sem perda de alias/histórico** — alvo 100% em teste `split → re-merge`

Script de validação (futuro): comparar `predicted_hub_id` vs `expected_hub_id`; gerar matriz confusão; testar `merge → split → re-merge`.

## 7. Pendências G03.A2

- [ ] Aprovar glossário: `Interação` vs `Evento` já resolvido em P03-T01 — confirmar com Dados.
- [ ] Popular `identity_alias` com dataset representativo (CRM real) e medir FP/FN.
- [ ] Implementar constraints físicas: unique (`source_system`, `external_id`), check `valid_from < valid_to`, sem sobreposição `rel_person_company` incompatível.
- [ ] Executar teste de reversibilidade (`merge` + `split`) e registrar trilha auditoria.

## 8. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P03-T02_Servico_Identidade_Matching|P03-T02]]
- Gap: [[00-project-control/registro-lacunas/lacunas/DAT-002]]
- Modelo base: [[02-refinement/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|P03-T01 v1]] — `identity_alias` e temporalidade
- Síntese: [[02-refinement/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/entity-key-crosswalk|entity-key-crosswalk]] §7.116-119
