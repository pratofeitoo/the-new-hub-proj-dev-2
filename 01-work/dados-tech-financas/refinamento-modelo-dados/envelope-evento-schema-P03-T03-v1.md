---
title: Envelope Canônico + Schema Registry v1 — P03-T03 (M03.B / G03.B1)
task_id: P03-T03
phase: P03
status: rascunho
gap_id: DAT-003
created: 2026-08-29
source_task: "[[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema]]"
tags:
  - refinement
  - P03
  - DAT-003
---

# Envelope Canônico + Schema Registry v1 — P03-T03 (M03.B / G03.B1)

> **Status:** rascunho para validação Dados+Tech · **G03.B1** · Produtores/consumidores de teste devem passar em contrato+replay antes de promoção.
> **Depende de:** [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1]] — `canonical_id`, temporalidade.

## 1. Envelope canônico v1 (obrigatório em todo evento, incluindo SRC-12)

O envelope mínimo consolidado é: `event_id`, `event_type`, `schema_version`, `occurred_at`, `recorded_at`, `tenant_id`, `purpose`, `idempotency_key` e `lineage`. Os campos de domínio abaixo permanecem obrigatórios quando aplicáveis.

| Campo | Tipo | Regra |
|---|---|---|
| `event_id` | UUID v4 | único por ocorrência; nunca reutilizado |
| `event_type` | string | `domain.verb` ex: `identity.merged`, `journey.started`, `match.proposed` |
| `schema_version` | semver `major.minor` | `major` = breaking/semântica, `minor` = compatível/aditiva |
| `producer` | string | `hub.journey`, `crm`, `ats`, `lms` — deve publicar contrato |
| `tenant_id` / `ecosystem` | string | `tenant_id` canônico; `ecosystem` quando cross-tenant com finalidade declarada |
| `subject_canonical_id` | string | `person_id`, `company_id`, etc. + `object_type` obrigatório |
| `object_type` | enum | Person, Company, Opportunity, Match, Journey, Consent, etc. |
| `occurred_at` | ISO8601 UTC | tempo do mundo real; imutável |
| `recorded_at` | ISO8601 UTC | ingestão; gerado pelo pipeline |
| `valid_from` / `valid_to` | ISO8601 UTC / NULL | vigência do fato; `NULL` = ainda vigente |
| `payload` | JSON | dados do domínio, versionado junto ao `schema_version` |
| `source_ref` | object | `{source_system, source_object_type, source_id, source_hash}` |
| `consent_ref` | object | `{consent_id, purpose, version}` — propaga finalidade |
| `idempotency_key` | string | `producer + event_type + subject + occurred_at + hash(payload)` ou hash determinístico documentado |
| `correlation_id` / `causation_id` | UUID | rastreio causal; `correlation_id` por jornada, `causation_id` = `event_id` causador |
| `quality_status` | enum | `valid` / `quarantined` / `rejected` |
| `security_class` | enum | `public` / `internal` / `confidential` / `restricted` |

**Exemplo mínimo:**

```json
{
  "event_id": "evt_01H9K...",
  "event_type": "identity.merged",
  "schema_version": "1.0",
  "producer": "hub.identity",
  "tenant_id": "tenant_001",
  "subject_canonical_id": "hub_p_001",
  "object_type": "Person",
  "occurred_at": "2026-08-29T14:00:00Z",
  "recorded_at": "2026-08-29T14:00:02Z",
  "valid_from": "2026-08-29T14:00:00Z",
  "valid_to": null,
  "payload": {"merged_ids": ["HRIS_001","CRM_042"], "survivor_hub_id": "hub_p_001"},
  "source_ref": {"source_system": "hub.identity", "source_object_type": "Person", "source_id": "hub_p_001"},
  "consent_ref": {"consent_id": "cons_001", "purpose": "identity_resolution", "version": "1"},
  "idempotency_key": "hub.identity:identity.merged:hub_p_001:2026-08-29T14:00:00Z:hash123",
  "correlation_id": "corr_abc",
  "causation_id": "evt_prev",
  "quality_status": "valid",
  "security_class": "confidential"
}
```

## 2. Schema Registry

Local lógico: `01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/` (futuro físico: Apicurio/Confluent).

| Artefato | Conteúdo | Regra promoção/rollback |
|---|---|---|
| Taxonomia | termos, hierarquia, aliases, `object_type`, inclusão/exclusão, localidade, `valid_from/to` | nova versão preserva mapeamentos; backfill explícito e reversível |
| Schema evento | JSON Schema + `event_type` + `schema_version` + exemplos + compatibilidade | `minor` compatível/aditiva sem quebra; `major` para breaking/semântica com adaptador e aprovação consumidores |
| Contrato produtor | metadados: `producer`, `event_types`, `throughput`, `idempotency_key` strategy | consumidor deve `reject`/`quarantine`/`adapt` versão desconhecida, nunca assumir |

**Versionamento:**

- **Compatível:** adiciona campo opcional — `minor++`, consumidores antigos ignoram.
- **Aditiva:** adiciona campo obrigatório com default migração — `minor++` com janela.
- **Breaking:** remove/renomeia/muda tipo/semântica — `major++`, migração + adaptador + aprovação.
- **Semântica:** muda significado sem mudar schema — `major++` (ex: `match.score` de 0–1 para 0–100).

## 3. Idempotência

- Chave = `producer + event_type + subject_canonical_id + occurred_at + hash(payload)` (documentado por produtor).
- Duplicata não cria atividade duplicada; consumidor deve deduplicar por `idempotency_key` antes de mutação.
- Retentativa com mesma chave = reenvio idempotente.

## 4. Regras temporais (alinhadas a P03-T01 v1)

- `valid_from` inclusive, `valid_to` exclusivo; `NULL` = vigente.
- `occurred_at` imutável; `recorded_at` registra chegada; eventos atrasados mantêm `occurred_at` original.
- Timezone sempre UTC armazenado; `valid_from/to` com `Z`.
- Correções criam nova versão com `valid_from` novo; replay usa `occurred_at` + `schema_version` originais.

## 5. Replay e reconciliação

- **Snapshot:** conjunto imutável `event_id` + `schema_version` + `code_version` + `config_version`.
- **Reprocessamento:** gera novo `run_id` e resultados derivados; produção isolada até reconciliação comparar `counts, keys, totals, duplicates, late events, expected deltas`.
- **Correção:** registra `justificativa, solicitante, aprovador, objetos, old→new, valid_time, downstream`.

## 6. Testes contrato+replay (G03.B1)

### Produtores de teste

| Produtor | event_types |
|---|---|
| `hub.identity` | `identity.merged`, `identity.split` |
| `hub.journey` | `journey.started`, `journey.stage_changed` |
| `crm` | `opportunity.created`, `company.updated` |

### Consumidores de teste

| Consumidor | Verifica |
|---|---|
| `analytics` | rejeita schema `2.0` sem adaptador; aceita `1.1` compatível |
| `matching` | deduplica por `idempotency_key`; mantém `occurred_at` em atraso |
| `replay` | reprocessa snapshot `run_001` → novo `run_002` com mesmos deltas |

**Fixtures:** `01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/fixtures/` — JSON válidos/inválidos por `schema_version`; teste `contract: valid → accepted`, `invalid → quarantined`, `duplicate key → deduped`.

## 7. Pendências G03.B1

- [ ] Publicar 3 schemas iniciais (`identity.merged` v1.0, `journey.started` v1.0, `match.proposed` v1.0) no registry.
- [ ] Executar testes contrato (produtor→consumidor) e replay (snapshot → reprocessamento) com relatório `06-relatorios-validacao/`.
- [ ] Aprovar versionamento com Dados+Tech; registrar decisão em `00-project-control/decisoes/`.

## 8. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema|P03-T03]]
- Gap: [[00-project-control/registro-lacunas/lacunas/DAT-003]]
- Modelo base: [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|P03-T01 v1]] — temporalidade e `canonical_id`
- Blueprint: [[02-review/01-blueprint/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia#3. Versionamento de eventos, indicadores, taxonomias, fórmulas, modelos e evidências|BP-003 §3]]
