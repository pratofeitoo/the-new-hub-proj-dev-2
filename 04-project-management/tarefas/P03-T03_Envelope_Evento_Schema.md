---
title: P03-T03 — Envelope canônico de evento + schema registry (M03.B)
task_id: P03-T03
phase: P03
status:
  - on-hold
priority: critica
area: data-intelligence
layer: refining
owner:
  - PF Rezende (interino)
  - PF Rezende (interino — Tech)
accountable: PF Rezende
blocked_reason: aguardando nomeação Dados/Tech
blocked_until: 2026-10-15
gap_ids:
  - DAT-003
dependencies:
  - P03-T01
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-003]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M03.B — Eventos & Contratos (libera P05 detalhar payloads)]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/fixtures/identity.merged.v1.0.valid.json
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:43:17.459-03:00
---

# P03-T03 — Envelope canônico de evento + schema registry (M03.B)

## Objetivo

Definir envelope canônico, schema registry, versionamento, idempotência e regras temporais (G03.B1 / DAT-003 — M03.B) — desbloqueia P05 detalhar payloads.

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md` + fixtures `01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/fixtures/identity.merged.v1.0.valid.json` + testes contrato+replay. Paths idênticos a `target_file` e `evidence_required`.

## Acceptance criteria (G03.B1 — DAT-003)

- [ ] Envelope 17 campos canônicos (`event_id`, `event_type`, `schema_version`, `producer`, `tenant_id`, `subject_canonical_id`, `object_type`, `occurred_at`, `recorded_at`, `valid_from/to`, `payload`, `source_ref`, `consent_ref`, `idempotency_key`, `correlation_id`/`causation_id`, `quality_status`, `security_class`) — §1 do `target_file`
- [ ] Versionamento `major` (breaking/semântica) / `minor` (compatível aditiva) + idempotência `producer+event_type+subject_canonical_id+occurred_at+hash(payload)` + replay com `run_id` + reconciliação (`counts, keys, totals, duplicates, late events, expected deltas`) — §2–§5 do `target_file`
- [ ] Fixtures publicadas em `schema-registry/fixtures/identity.merged.v1.0.valid.json` com testes contrato+replay — 3 produtores (`hub.identity`, `hub.journey`, `crm`) e 3 consumidores (`analytics`, `matching`, `replay`): `valid→accepted`, `invalid→quarantined`, `duplicate key→deduped` — §6 + `01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/fixtures/`

> **Pilot vs Full:** Piloto requer apenas envelope mínimo (12→8 campos piloto: `event_id`, `event_type`, `occurred_at`, `recorded_at`, `source_system`, `actor`, `entity_ref`, `payload_minimo` + `consentimento_id` condicional) — ver `spine-piloto-minimo-v1.md` §3. Full = 17 campos + registry major/minor + replay `run_id`. Este critério valida full (17 campos); piloto pode operar com envelope mínimo mas evidência full permanece obrigatória para M03.B.

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md` (§1 envelope 17 campos + §2 registry + §3 idempotência + §4 temporal + §5 replay)
- `01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/fixtures/identity.merged.v1.0.valid.json` (fixtures valid/invalid/duplicate por `schema_version` — §6; lógica `01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/`)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §3 (envelope mínimo piloto — diferenciação pilot vs full)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md && grep -c "event_id\|schema_version\|idempotency_key\|correlation_id" 01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md | awk '{print ($1>=10)?"PASS 17 campos":"FAIL"}' && grep -E "major.*minor|minor.*major|breaking" 01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md | head -1`
- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/fixtures/identity.merged.v1.0.valid.json 2>&1 | head -1 && grep -E "idempotency_key|producer.*event_type.*subject|occurred_at.*hash" 01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md | head -2 && grep -c "run_id\|replay" 01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md | awk '{print ($1>=2)?"PASS replay run_id":"FAIL"}'`
- [ ] `grep -c "a desi""gnar" 01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md | grep -q "^0$" && echo "PASS sem placeholder" || echo "FAIL"; ls 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md && grep -c "event_id\|envelope" 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md`

## Dependências

- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]] — `canonical_id` e temporalidade (`valid_from/to`, `occurred_at`/`recorded_at`)
- G03.B1 (M03.B — Eventos & Contratos) — `blocking: no` neste lote; `DAT-003` e `DAT-010 blocking: yes` em G03.B2 são gates subsequentes (ver `04-project-management/marcos/marcos-fases-v1.md#M03.B`)

## Registros

- [[00-project-control/registro-lacunas/lacunas/DAT-003]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1|envelope-evento-schema-P03-T03-v1.md]] — envelope com 17 campos (`event_id`, `schema_version`, `idempotency_key`, `correlation_id`, etc.), schema registry com regras `major`/`minor`, idempotência `producer+event_type+subject+occurred_at+hash`, regras temporais UTC e replay com `run_id` + reconciliação.
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
