---
title: Decision — Lifecycle Borders Contract (2026-09-05)
description: Standing lifecycle border contract — where each status lives and how promotion works.
type: decision
status: current
source_paths:
  - 00-project-control/registro-mudancas/2026-09-05-lifecycle-fronteiras-manutencao.md
  - 00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md
verified_at: 2026-09-06
---

# Decision — Lifecycle Borders Contract (2026-09-05)

## Decision

Vault is single source of truth on iCloud, organized by lifecycle borders: folder = trust level; Drive mirrors only `03-approved/`.

## Context

Prior structure mixed drafts and consolidations (`01-blueprint`, `02-refinement`, `03-approval`) with 141 stale links and ~20 status variants. Required a permanent contract before P03 promotion.

## Borders

| Folder | Allowed status | Editable? | Shareable as final? |
|---|---|---|---|
| `01-work/` | `rascunho` \| `em-elaboracao` | Yes | Never |
| `02-review/` | `em-revisao` | Comments only | Never |
| `03-approved/` | `aprovado` | Never in place | Yes — only shareable |
| `99-archive/` | `superado` \| `rejeitado` \| `descontinuado` | No | No |

## Key Rules

- New file is born in `01-work` with `rascunho`.
- Promotion = `git mv` + stamp + record → `02-review` / `03-approved` after gate.
- Approved is never edited in place — new version via `01-work` → `02-review` → new approval.
- Drive is export: update `03-approved/` on iCloud and re-mirror (`cp` + `diff -rq`).

## Consequences

Single trust model; `git mv` preserves `log --follow`; branch `restructure/lifecycle-borders` merged @ `6b59711` with rollback tag `pre-lifecycle-2026-09-05`.

## Status

`aprovado` — standing contract.

## Sources

- [Fronteiras Lifecycle — o que foi feito e como manter](../../00-project-control/registro-mudancas/2026-09-05-lifecycle-fronteiras-manutencao.md)
- [Framework — Fronteiras Lifecycle](../../00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md)
