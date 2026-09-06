---
title: Wiki — Purpose, Authority and Rules
description: Purpose, authority model, writing rules, update rules, and scope boundary for the wiki/ knowledge layer.
type:
  - workflow
status:
  - current
source_paths:
  - docs/plans/2026-09-06-open-knowledge-wiki-implementation-plan.md
verified_at: 2026-09-06
---

# Wiki — Purpose, Authority and Rules

## Purpose

`wiki/` is a curated, agent-facing knowledge layer for this repository. It summarizes and connects authoritative material without replacing source documents.

- Sources under `00-project-control/`, `01-work/`, `02-review/`, `03-approved/`, and `04-project-management/` remain authoritative.
- The wiki provides orientation, concepts, architecture, decisions, workflows, and evidence mappings.

## Authority model

1. Source documents are the source of truth.
2. The wiki summarizes and connects; it does not silently override sources.
3. If sources disagree, the disagreement is preserved explicitly.
4. Unresolved claims are labeled as `open_questions` or omitted.
5. Every substantive claim cites a local `source_paths` entry.

## Scope boundary (pilot)

- **Write boundary:** agents write only under `wiki/` during the pilot.
- **Read boundary:** agents may read the wider repository for grounding and provenance.
- **No source edits:** no existing project document outside `wiki/` is edited, moved, renamed, or deleted as part of the pilot.
- **No lifecycle promotion:** material is not moved between `01-work` → `02-review` → `03-approved` via wiki actions.
- **No bulk rewrites or auto link repair** across the repository.

## Frontmatter contract

Every substantive wiki page must include:

```yaml
title: Page title
type: concept | architecture | decision | workflow | evidence
status: current | provisional | superseded | blocked
source_paths:
  - path/to/source-document.md
verified_at: YYYY-MM-DD
```

Optional: `source_commit`, `supersedes`, `owners`, `open_questions`.

## Writing rules

- One concept per page; keep pages shorter than their sources.
- Link noun phrases that name another doc with `[text](./path.md)`.
- Every factual claim traces to a `source_paths` entry.
- Use `verified_at` and update it when sources change materially.
- Prefer local source paths over external URLs for project claims.

## Update rules

- Review provenance after each write (frontmatter, source existence, links, unsupported claims).
- Inspect `git diff` for scope violations.
- Record unresolved issues in `open_questions` or the pilot log.
- Superseded pages move to `wiki/archive/` with `status: superseded` and `supersedes` chain.

## Navigation

Start at [Wiki Index](./index.md). Structure: [concepts/](./concepts/README.md) · [architecture/](./architecture/README.md) · [decisions/](./decisions/README.md) · [workflows/](./workflows/README.md) · [evidence/](./evidence/README.md) · [archive/](./archive/README.md).

## Source

- [Open Knowledge Wiki — Implementation Plan](../docs/plans/2026-09-06-open-knowledge-wiki-implementation-plan.md)
