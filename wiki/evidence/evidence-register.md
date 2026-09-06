---
title: Evidence Register
description: Source-to-claim mappings for wiki provenance.
type: evidence
status: current
source_paths:
  - docs/plans/2026-09-06-open-knowledge-wiki-implementation-plan.md
verified_at: 2026-09-06
---

# Evidence Register

Provenance layer — every wiki claim maps to a local source path.

| Wiki page | Claim | Source path | Status |
|---|---|---|---|
| [Canonical Data Model](../concepts/canonical-data-model.md) | 25 entities, temporal rules, pilot spine | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` | `rascunho` |
| [Project Architecture](../architecture/project-architecture.md) | Lifecycle 01→02→03, blueprint reconciliation | `00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md` | framework |
| [Source-to-Approved Lifecycle](../workflows/source-to-approved-lifecycle.md) | Stage definitions and gates | `00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md` | framework |
| [Evidence Register](./evidence-register.md) | Register itself | `docs/plans/2026-09-06-open-knowledge-wiki-implementation-plan.md` | plan |
| [Pilot Evidence Detail](./pilot-evidence-detail.md) | E20/E01 pending vs hypothesis | `01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1.md` | rascunho |

## Open provenance gaps

- P03 refinements are `rascunho` — claims about pilot readiness remain provisional until gate promotion.
- Physical constraints (FK/temporal) not yet implemented — flagged as `open_questions`.

## Source

- [Implementation Plan](../../docs/plans/2026-09-06-open-knowledge-wiki-implementation-plan.md)
