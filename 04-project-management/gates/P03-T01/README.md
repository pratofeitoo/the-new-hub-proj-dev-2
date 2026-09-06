---
title: Gate P03-T01 — Modelo Lógico/Físico
description: Bounded checkpoint for validating and packaging the P03-T01 logical/physical data model.
type: gate-brief
status: draft
tags:
  - gate
  - p03-t01
  - modelo-logico-fisico
---
## Gate P03-T01 — Modelo Lógico/Físico

### Purpose

This gate bounds one P03-T01 validation run. Existing project documents are read-only inputs. All pilot artifacts must remain inside this gate folder.

### Start here

Before acting, the agent must:

1. Read this gate brief and the folder properties.
2. Inspect the available `gate-run`, `evidence-register`, and `review-record` templates.
3. Read the declared source documents.
4. Confirm the entry criteria.
5. Create a run record under `working/`.
6. Work only within this gate and the declared read-only source paths.
7. Stop at `ready_for_review` when the required artifacts are complete.

### Allowed sources

- [P03-T01 model](/01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md)
- [P03-T02 identity specification](/01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md)
- [P03-T03 event envelope](/01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md)
- [P03-T05 metrics catalog](/01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md)
- [Blueprint de Dados e Inteligência](/02-review/02-reconciliacao-blueprint/HUB_Blueprint_Dados_e_Inteligencia.md)

### Entry criteria

- The P03-T01 source document is available.
- Declared dependent source documents are available.
- The run is authorized to create artifacts only inside this gate folder.

### Exit criteria

- A run record exists and is complete.
- An evidence register maps material claims to sources.
- A deliverable states supported findings and unresolved gaps.
- A review record evaluates every criterion.
- No source document outside this gate was modified.

### Forbidden actions

- Do not edit source documents.
- Do not move or rename project documents.
- Do not promote or approve the model outside this gate.
- Do not repair unrelated repository links.
- Do not create artifacts outside this gate folder.

### Required artifacts

- Run record from `gate-run` under `working/`.
- Evidence register from `evidence-register` under `evidence/`.
- Validation package under `deliverables/`.
- Review record from `review-record` under `review/`.

### Stop conditions

Set the run to `blocked` when a source is missing, sources conflict without a resolution, or an entry criterion is not satisfied. Set the run to `ready_for_review` only when all required artifacts are complete. Do not represent a blocked or review-ready run as approved.

### Closing the gate

A reviewer records one disposition: `approved`, `blocked`, or `rejected`. Approval applies only to this gate package; it does not alter or promote the source model document.
