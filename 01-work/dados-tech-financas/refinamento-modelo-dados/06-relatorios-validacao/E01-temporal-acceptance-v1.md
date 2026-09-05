---
title: "E01 — Aceite temporal Pessoa–Empresa v1"
task_id: E01-acceptance
phase: F1
status: spec-ready
date: 2026-09-05
tags: [validation, F1, E01, temporal]
---

# E01 — Aceite temporal Pessoa–Empresa v1

> **Execution status:** `SPEC READY / NOT EXECUTED`. Não há runtime ou banco disponível; nenhum caso abaixo é declarado executado. A2 é PASS documental porque a fixture é completa e reproduzível. A3 permanece `pending physical validation`.

## Fixture determinística

Use timestamps UTC e intervalo semiaberto `[valid_from, valid_to)`, com `NULL` em `valid_to` para vigente.

| ID | tenant_id | person_id | company_id | manager_id | relationship_type | valid_from | valid_to |
|---|---|---|---|---|---|---|---|
| rel-001 | ten-acme | p-001 | c-001 | p-900 | employment | 2026-01-01T00:00:00Z | 2026-06-01T00:00:00Z |
| rel-002 | ten-acme | p-001 | c-002 | null | employment | 2026-06-01T00:00:00Z | null |
| rel-003 | ten-acme | p-002 | c-001 | p-900 | contractor | 2026-02-01T00:00:00Z | null |
| rel-004 | ten-other | p-001 | c-001 | p-901 | employment | 2026-01-01T00:00:00Z | null |

`p-900` pertence a `ten-acme` e tem vigência sobreposta; `p-901` pertence a `ten-other`.

## Aceites positivos e negativos

1. `rel-001`/`rel-002` são válidos: `valid_to` exclusivo evita sobreposição na fronteira.
2. `manager_id=p-900` é aceito no mesmo tenant e intervalo; `manager_id=null` é aceito.
3. Inserir `rel-005` (`ten-acme`, `p-001`, `employment`, início `2026-05-15`) deve rejeitar/quarentenar por sobreposição com `rel-001`.
4. Inserir vínculo em `ten-acme` com `manager_id=p-901` deve rejeitar/quarentenar por cross-tenant.

## Eventos e assertions

`relationship.started` abre uma linha; `relationship.ended` encerra-a com `valid_to`, sem update in place. Ambos exigem `event_id`, `event_type`, `schema_version`, `tenant_id`, `subject_canonical_id=relationship_id`, `occurred_at`, `recorded_at`, `provenance_ref` e `idempotency_key`. Repetir a chave não cria outra linha; replay preserva tempos e payload originais.

O aceite físico deve comprovar FKs, igualdade de tenant, `valid_from < valid_to`, ausência de employment incompatível sobreposto, manager dentro do tenant/vigência, contagem append-only e deduplicação/replay. Registrar comando, versão do banco, timestamp, output e revisor.

**Resultado atual:** SPEC READY (A1 alinhamento contratual PASS; A2 especificação PASS; A3 validação física pendente). F2 permanece bloqueado até evidência física revisada.
