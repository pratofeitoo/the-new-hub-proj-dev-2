---
title: Project Architecture — Current, Approved, Proposed
description: Current reality, approved architecture, proposed future, dependencies and gates.
type: architecture
status: current
source_paths:
  - 00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md
  - 02-review/02-reconciliacao-blueprint/HUB_Blueprint_Dados_e_Inteligencia.md
  - 02-review/02-reconciliacao-blueprint/HUB_Blueprint_Arquitetura_Tecnologica.md
verified_at: 2026-09-06
open_questions:
  - Proposed vs implemented distinction requires review of P03 refinement promotion gates.
---

# Project Architecture — Current, Approved, Proposed

## Current reality (repository)

- **Three-layer lifecycle:** `01-work` (active) → `02-review` (frozen gate) → `03-approved` (approved) per framework. Lifecycle and task gates defined in [Framework — Três Camadas](../../00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md).
- **Canonical model in refinement:** 25 entities in `01-work/dados-tech-financas/refinamento-modelo-dados/` at `status: rascunho` — not yet promoted.
- **Blueprint under reconciliation:** data/intelligence and tech blueprints in `02-review/02-reconciliacao-blueprint/` with crosswalk analyses.

## Approved architecture

Framework and frozen blueprints that have passed review gates. See `02-review/02-reconciliacao-blueprint/` and `03-approved/` (when populated). The reconciliation matrices track E01–E20 coverage.

## Proposed future architecture

P03 refinements (envelope/schema registry, identity matching, metric graph, lineage/DSAR) propose the SEBRAE pilot spine (12 entities) plus full platform extensions. Proposed = `rascunho`/`em-revisao`; do not represent as implemented.

## Dependencies and gates

- **M0 → P03:** gate promotion required before refinement work is considered stable.
- **Consent (N24):** LGPD blocker — sensitive data requires valid consent before read/use/derive.
- **Identity (`identity_alias`):** external→canonical mapping must be validated before cross-system joins.

## Sources

- [Framework — Três Camadas](../../00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md)
- [Blueprint — Dados e Inteligência](../../02-review/02-reconciliacao-blueprint/HUB_Blueprint_Dados_e_Inteligencia.md)
- [Blueprint — Arquitetura Tecnológica](../../02-review/02-reconciliacao-blueprint/HUB_Blueprint_Arquitetura_Tecnologica.md)
