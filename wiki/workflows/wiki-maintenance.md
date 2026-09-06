---
title: Wiki Maintenance — Freshness Review
description: Regular freshness review for the wiki/ knowledge layer (CONTINUE outcome).
type: workflow
status: current
source_paths:
  - docs/plans/2026-09-06-open-knowledge-wiki-implementation-plan.md
  - wiki/README.md
verified_at: 2026-09-06
---

# Wiki Maintenance — Freshness Review

> Outcome: **CONTINUE** (§16) — `wiki/` is a maintained knowledge layer. This page defines the repeatable freshness review.

## Cadence

- **Trigger:** any material change in the 6 source areas (§8) or every 2 weeks, whichever comes first.
- **Owner:** assignee of the source change + wiki maintainer.

## Checklist (per wiki page)

1. Compare `source_paths` content vs wiki summary — update if meaning changed.
2. Bump `verified_at` to today when reviewed (even if no change).
3. Move stale claims to `open_questions` or correct with new source.
4. Run `audit` scoped to `wiki/` + `links(dead)` — fix broken forward links.
5. Verify no file outside `wiki/` was edited — inspect `git diff`.
6. Supersede via `wiki/archive/` with `supersedes` chain when replacing a page.

## Scope guardrails

- Writes stay under `wiki/` unless separately approved.
- Source documents remain authoritative; wiki never silently overrides.
- External URLs are not sole evidence — preserve local source path.

## Source

- [Implementation Plan](../../docs/plans/2026-09-06-open-knowledge-wiki-implementation-plan.md)
- [Wiki Rules](../README.md)
