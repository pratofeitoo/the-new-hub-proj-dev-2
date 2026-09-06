---
title: Open Knowledge Wiki — Implementation Plan
description: Controlled plan for creating a curated, agent-facing wiki inside this repository without changing existing project documents.
type: plan
status: draft
tags:
  - open-knowledge
  - wiki
  - project-architecture
  - agent-workflow
---

## 1. Purpose

Create a dedicated `wiki/` directory that acts as a curated project knowledge layer for Open Knowledge and connected agents.

The wiki will summarize and connect the repository's authoritative material without replacing the existing source documents. Existing project files remain the source of truth. The wiki becomes the agent-facing layer for orientation, concepts, architecture, decisions, evidence, and workflows.

## 2. Desired outcome

At the end of this plan, the repository will contain:

- A clearly bounded `wiki/` directory.
- A navigable project overview.
- Curated concept, architecture, decision, evidence, and workflow pages.
- Explicit source provenance for every substantive claim.
- A repeatable workflow for creating, reviewing, updating, and validating wiki pages.
- Guardrails preventing pilot work from modifying unrelated project material.
- A measurable basis for deciding whether Open Knowledge adds value to this project.

## 3. Non-goals

This implementation must not:

- Replace Obsidian as the general-purpose vault interface.
- Move or rename existing project documents.
- Rewrite the existing folder taxonomy.
- Copy the entire repository into the wiki.
- Treat the wiki as the canonical source of project decisions.
- Repair all existing broken links in the repository.
- Modify `.obsidian/`, `TaskNotes/`, `System/`, `.ok/`, agent configuration folders, or archive content.
- Introduce a second independent project-management system.

## 4. Current repository constraints

The repository already has Open Knowledge initialized at the project root and currently uses the root as its content scope. That means adding a `wiki/` directory does not, by itself, create a hard technical indexing boundary.

Therefore, the first implementation phase uses an operational boundary:

- Open Knowledge may read the wider repository for grounding and provenance.
- Wiki authoring and test writes are restricted to `wiki/`.
- No existing project document is edited during the pilot unless a separate approval is given.
- No move, rename, delete, bulk rewrite, or lifecycle promotion is performed as part of the pilot.

If a hard technical boundary becomes necessary later, create a separate Open Knowledge project/worktree rather than changing the root scope during this pilot.

## 5. Wiki directory structure

Create the following structure:

```text
wiki/
├── README.md
├── index.md
├── concepts/
│   ├── README.md
│   └── canonical-data-model.md
├── architecture/
│   ├── README.md
│   └── project-architecture.md
├── decisions/
│   ├── README.md
│   └── decision-record-template.md
├── workflows/
│   ├── README.md
│   └── source-to-approved-lifecycle.md
├── evidence/
│   ├── README.md
│   └── evidence-register.md
└── archive/
    └── README.md
```

The initial structure should remain small. Do not create one wiki page for every source document.

## 6. Responsibility of each folder

### `wiki/README.md`

Explain the wiki's purpose, authority model, writing rules, update rules, and scope boundary.

### `wiki/index.md`

Act as the navigation hub. Link to the current concepts, architecture pages, decisions, workflows, evidence register, and archive.

### `wiki/concepts/`

Contain stable explanations of important project concepts. A concept page should explain what the concept means, how it is used, what it depends on, and which source documents support it.

### `wiki/architecture/`

Contain high-level system and project architecture summaries. These pages must distinguish current reality, approved design, proposed design, and unresolved design.

### `wiki/decisions/`

Contain concise decision records derived from existing change records and approved decisions. A decision page must state the decision, context, alternatives, consequences, status, and provenance.

### `wiki/workflows/`

Contain repeatable operational flows, especially the transition from active work to review to approval.

### `wiki/evidence/`

Contain source-to-claim mappings. This is the provenance layer that prevents the wiki from becoming unsupported narrative.

### `wiki/archive/`

Contain superseded wiki pages only. Do not duplicate the repository's historical archive here.

## 7. Authority and provenance model

Every substantive wiki page must include frontmatter with at least:

```yaml
---
title: Page title
type: concept | architecture | decision | workflow | evidence
status: current | provisional | superseded | blocked
source_paths:
  - path/to/source-document.md
verified_at: YYYY-MM-DD
---
```

Recommended additional fields:

```yaml
source_commit: <git commit or short hash>
supersedes: wiki/path/to/older-page.md
owners:
  - responsible-area
open_questions:
  - unresolved question
```

Rules:

1. Source documents remain authoritative.
2. The wiki summarizes and connects; it does not silently override sources.
3. If sources disagree, preserve the disagreement explicitly.
4. If a claim cannot be grounded, label it as an open question or omit it.
5. When a source changes materially, update `verified_at` and the relevant wiki page.
6. Do not use external URLs as the sole evidence for a project claim. Preserve the relevant local source path.

## 8. Initial source areas

Use only these source areas for the first build:

1. `00-project-control/framework/`
2. `00-project-control/registro-mudancas/`
3. `01-work/dados-tech-financas/refinamento-modelo-dados/`
4. `02-review/02-reconciliacao-blueprint/`
5. `03-approved/nucleo-inteligencia/especificacao-conceitual-inteligencia-plataforma/`
6. `04-project-management/tarefas/`

Do not ingest or summarize the following during the first build:

- `99-archive/`
- `05-resources/inbox/`
- `System/`
- `TaskNotes/`
- `.obsidian/`
- `.ok/`
- `.agents/`
- `.codex/`
- `.opencode/`
- `.pi/`
- unrelated `docs/` content

Historical material may be consulted only when needed to explain the origin of a current decision.

## 9. First pages to create

Create pages in this order:

### Phase 1 — navigation and rules

1. `wiki/README.md`
2. `wiki/index.md`
3. `wiki/concepts/README.md`
4. `wiki/architecture/README.md`
5. `wiki/decisions/README.md`
6. `wiki/workflows/README.md`
7. `wiki/evidence/README.md`
8. `wiki/archive/README.md`

### Phase 2 — representative knowledge

1. `wiki/concepts/canonical-data-model.md`
2. `wiki/architecture/project-architecture.md`
3. `wiki/workflows/source-to-approved-lifecycle.md`
4. `wiki/evidence/evidence-register.md`
5. One decision record based on a low-risk entry from `00-project-control/registro-mudancas/`

Do not create more than one representative page per category until the pilot review is complete.

## 10. Open Knowledge workflows to test

### Workflow A — project orientation

Prompt the agent:

> Read `wiki/index.md` and the linked wiki pages. Explain the project's major domains, current lifecycle, and unresolved areas. Use source paths for every substantive claim. Do not edit files.

Expected result:

- The agent can orient itself from the wiki.
- Claims point to local source documents.
- The answer distinguishes current, approved, provisional, and blocked material.

### Workflow B — source-grounded concept extraction

Choose the canonical data model as the first concept.

Steps:

1. Read the relevant source documents.
2. Extract only stable concepts.
3. Write `wiki/concepts/canonical-data-model.md`.
4. Record all source paths and verification date.
5. Run a link and provenance review.

Expected result:

- The wiki page is shorter and easier to understand than the source set.
- No unsupported claims are introduced.
- The page clearly states what remains unresolved.

### Workflow C — architecture synthesis

Create `wiki/architecture/project-architecture.md` from the approved and review-stage sources.

The page must separate:

- current repository reality
- approved architecture
- proposed future architecture
- dependencies and gates
- unresolved decisions

Do not represent proposed architecture as implemented functionality.

### Workflow D — decision capture

Select one low-risk change record and create a concise decision page.

Required sections:

- Decision
- Context
- Alternatives considered
- Consequences
- Status
- Source paths
- Open questions

Do not modify the original change record.

### Workflow E — lifecycle explanation

Create `wiki/workflows/source-to-approved-lifecycle.md` explaining how material moves conceptually from active work to review to approval.

This is documentation only. Do not move files or change lifecycle fields during the pilot.

### Workflow F — evidence lookup

Ask:

- What supports the canonical data model?
- Which source documents are still provisional?
- Which claims lack direct evidence?
- Which approved documents depend on unresolved work?

Expected result:

- The agent uses `wiki/evidence/evidence-register.md` and source paths.
- Unsupported certainty is surfaced as an open question.

## 11. Safety rules for agent use

During the pilot, agents must:

- Write only under `wiki/`.
- Read source material outside `wiki/` only for grounding.
- Never edit source documents without explicit approval.
- Never move, rename, or delete source documents.
- Never rewrite an entire folder in one operation.
- Never repair links automatically across the wider repository.
- Never convert a provisional statement into a current or approved statement without evidence.
- Include a one-line summary for each wiki content write.
- Preserve existing Markdown and frontmatter conventions.
- Stop and report when sources conflict.

Before the first write session, create a Git checkpoint or confirm that the current working tree is clean enough for the pilot.

## 12. Review and validation procedure

After each page is written:

1. Read the page back through Open Knowledge.
2. Check frontmatter completeness.
3. Check that every source path exists.
4. Run scoped link validation.
5. Check for unsupported claims.
6. Confirm that no file outside `wiki/` changed.
7. Inspect the Git diff.
8. Record any unresolved issue in the page's `open_questions` field or the pilot log.

At the end of the pilot:

- Run the Open Knowledge audit.
- Run scoped search queries.
- Inspect the wiki graph and backlinks.
- Compare the wiki against the original source documents.
- Review the Git diff for scope violations.

## 13. Success criteria

The pilot is successful if all of the following are true:

1. A new agent can understand the project's high-level structure from `wiki/index.md`.
2. At least four of five test questions return source-grounded answers.
3. Each representative page has explicit provenance.
4. The wiki distinguishes current, approved, provisional, superseded, and blocked material.
5. No unsupported project claims are introduced.
6. No source document outside `wiki/` is modified.
7. Wiki pages are easier to use for orientation than searching the raw repository manually.
8. The update process is clear enough to repeat after source documents change.

## 14. Failure conditions

Stop the pilot and reassess if:

- The wiki duplicates large portions of the repository.
- Agents cannot reliably distinguish source truth from wiki summaries.
- Open Knowledge edits files outside `wiki/`.
- Link validation produces more noise than actionable information.
- Wiki maintenance takes longer than direct source navigation.
- The wiki becomes a second task-management system.

## 15. Evaluation questions

After the first five representative pages, answer:

1. Did the wiki reduce time spent finding authoritative material?
2. Did it improve agent answers compared with direct repository search?
3. Did provenance make review easier or add unnecessary overhead?
4. Is the operational write boundary sufficient, or is a separate Open Knowledge project/worktree required?
5. Should the wiki grow, remain a small index, or be abandoned?

## 16. Rollout decision

Choose exactly one outcome after evaluation:

### Continue

Keep `wiki/` as a maintained project knowledge layer and define a regular freshness review.

### Harden

Move the wiki into a technically isolated Open Knowledge project/worktree if operational boundaries were insufficient.

### Freeze

Keep the pages as a static project map with no ongoing synthesis commitment.

### Remove

Delete only the pilot wiki artifacts after reviewing the Git diff and confirming that no source documents were changed.

## 17. Implementation order

1. Confirm the pilot scope and the six source areas.
2. Confirm that no source-document writes are permitted.
3. Create the `wiki/` directory structure.
4. Create navigation and rules pages.
5. Create one representative page in each category.
6. Run the six workflows.
7. Validate provenance, links, and Git scope.
8. Record results and unresolved issues.
9. Decide whether to continue, harden, freeze, or remove.

This plan is intentionally conservative: the wiki earns the right to expand only after demonstrating that it improves project orientation and agent reliability without creating a second, drifting source of truth.
