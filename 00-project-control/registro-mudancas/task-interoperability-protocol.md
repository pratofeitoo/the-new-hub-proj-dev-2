# Unified Task Interoperability Protocol

## 1. Source ownership

### Blueprint layer
Folder: `04-project-management/tarefas/`
Owns: strategic deliverables, phase sequencing, governance and approval, gaps, architectural dependencies, target documents.

### Operational layer
Folder: `TaskNotes/Tasks/`
Owns: executable actions, scheduling, due dates, time estimates, daily progress, operational blockers.

Neither system may create or manage files in the other system's folder.

---

## 2. Blueprint task schema

Every Blueprint task must contain:

```yaml
task_id: "P03-T08"
task_type: "blueprint"
phase: "P03"
status: "em-revisao"
priority: "alta"
layer: "blueprint"
area: "dados"
sequence: 8
owner: "[[Pessoa ou Papel]]"
target_file: "caminho/do/entregavel.md"
dependencies:
  - "P03-T07"
gap_ids:
  - "GAP-003"
related_notes:
  - "[[Nota relacionada]]"
execution_required: true
```

### Required Blueprint fields

| Field | Rule |
|---|---|
| `task_id` | Unique. Format `BP-###` or `P##-T##`. |
| `task_type` | Always `blueprint`. |
| `phase` | `P01` through `P07`, or the project's defined phase set. |
| `status` | One scalar value only. |
| `priority` | One controlled value only. |
| `layer` | Controlled value such as `blueprint`, `refining`, `approval`, or `governance`. |
| `area` | Stable workstream name. |
| `sequence` | Integer used for ordering. |
| `owner` | Exactly one accountable owner. |
| `target_file` | Deliverable produced or changed by the task. |
| `dependencies` | List of Blueprint `task_id` values only. |
| `gap_ids` | List of valid gap IDs. |
| `related_notes` | Wikilinks to supporting notes. |
| `execution_required` | Boolean. Indicates whether operational TaskNotes children are expected. |

### Blueprint status values

Use one scalar value:

```text
pendente
em-execucao
em-revisao
bloqueado
aprovado
concluido
```

Existing array statuses such as `status: [concluido]` should be treated as invalid after normalization.

---

## 3. TaskNotes schema

TaskNotes should retain its native fields:

```yaml
ops_id: "OPS-001"
task_type: "operational"
status: "open"
priority: "high"
due: 2026-09-12
scheduled: 2026-09-10
contexts:
  - "@computer"
projects:
  - "[[HUB]]"
owner: "[[Pessoa]]"
blockedBy:
  - "[[OPS-002]]"
timeEstimate: 60
blueprint_task: "[[P03-T08_Modelo_Dados]]"
```

### Required TaskNotes fields

| Field | Rule |
|---|---|
| `ops_id` | Unique operational ID, e.g. `OPS-001`. |
| `task_type` | Always `operational`. |
| `status` | Scalar TaskNotes status. |
| `priority` | Scalar TaskNotes priority. |
| `blueprint_task` | Required when the task advances a Blueprint task. |
| `owner` | Person responsible for execution. |
| `projects` | Project or initiative link. |

### Optional TaskNotes fields

```yaml
due:
scheduled:
contexts:
blockedBy:
timeEstimate:
recurrence:
related_notes:
```

TaskNotes-native property names should not be renamed merely to match Blueprint properties. The plugin owns this schema.

---

## 4. Link rules

### Primary relationship

The canonical relationship is stored on the operational task:

```yaml
blueprint_task: "[[P03-T08_Modelo_Dados]]"
```

Rules:

1. Every operational task contributing to a Blueprint deliverable must have exactly one `blueprint_task`.
2. The link must resolve to a real note.
3. The linked note must contain a valid `task_id`.
4. A Blueprint task with `execution_required: true` must have at least one linked TaskNotes task.
5. Blueprint notes should use backlinks or Dataview to discover operational children; do not maintain a manually duplicated `execution_tasks` list.
6. Operational tasks that do not belong to a Blueprint task may omit `blueprint_task`, but must have another valid `projects` or `related_notes` link.

### Secondary relationships

For cross-cutting work:

```yaml
related_blueprints:
  - "[[P03-T08_Modelo_Dados]]"
  - "[[P05-T02_Contratos_Integracao]]"
```

Rules:

- Only one `blueprint_task` is allowed as the primary parent.
- Additional Blueprint relationships belong in `related_blueprints`.
- `blockedBy` must reference operational tasks only.
- Blueprint `dependencies` must reference Blueprint tasks only.
- Cross-layer relationships use `blueprint_task` or `related_blueprints`, never mixed dependency lists.

---

## 5. Status and priority semantics

The two systems must not synchronize their raw statuses.

### Blueprint status means

```text
pendente     = not started
em-execucao  = governance work underway
em-revisao   = deliverable awaiting review
bloqueado    = governance dependency prevents progress
aprovado     = approved by the relevant gate
concluido    = formally complete
```

### TaskNotes status means

```text
open         = executable work not started
in-progress  = being executed
blocked      = operational blocker exists
done         = action completed
```

A Blueprint task may remain `em-revisao` while all linked TaskNotes are `done`. This is expected.

### Reporting normalization

Use a calculated reporting field, not a stored replacement:

| Blueprint | TaskNotes | Unified display |
|---|---|---|
| `pendente` | `open` | Open |
| `em-execucao` | `in-progress` | In progress |
| `em-revisao` | — | Review |
| `bloqueado` | `blocked` | Blocked |
| `concluido` | `done` | Done |

Priority normalization:

| Blueprint | TaskNotes |
|---|---|
| `critica` | `high` |
| `alta` | `high` |
| `media` | `normal` |
| `baixa` | `low` |

The raw value remains visible in the source-specific dashboards.

---

## 6A. Cross-link validation

**LINK-001** — Unresolved primary parent: `blueprint_task` does not resolve to an existing file.
**LINK-002** — Parent without identity: parent file exists but has no valid `task_id`.
**LINK-003** — Multiple primary parents: `blueprint_task` is a list or contains more than one link.
**LINK-004** — Unresolved secondary link: entry in `related_blueprints` does not resolve.
**LINK-005** — Primary duplicated as secondary: `related_blueprints` contains the same note as `blueprint_task`.
**LINK-006** — Invalid Blueprint dependency: `dependencies` entry does not match an existing Blueprint `task_id`.
**LINK-007** — BlockedBy outside operational layer: `blockedBy` points outside `TaskNotes/Tasks`.
**LINK-008** — Unresolved related note: `related_notes` entry does not resolve.
**LINK-009** — Missing deliverable target: `target_file` is empty or points to a nonexistent path.
**LINK-010** — Invalid gap reference: `gap_ids` entry has wrong format or no corresponding gap record.

---

## 6B. Orphan validation

**ORPHAN-001** — Missing required execution: `execution_required: true` with zero linked operational tasks.
**ORPHAN-002** — Unexpected execution: `execution_required: false` but operational tasks link to it.
**ORPHAN-003** — Blueprint work without parent: operational task describes Blueprint deliverable work but omits `blueprint_task`.
**ORPHAN-004** — Fully unlinked operational task: no `blueprint_task`, no `projects`, no `related_notes`, no `related_blueprints`.
**ORPHAN-005** — Isolated Blueprint task: no dependencies, dependents, linked operational tasks, or gap links. Warning only.

---

## 6C. Circular-dependency validation

**CYCLE-001** — Blueprint self-dependency: task lists itself in dependencies.
**CYCLE-002** — Blueprint indirect cycle: circular dependency detected.
**CYCLE-003** — Operational self-block: task lists itself in blockedBy.
**CYCLE-004** — Operational indirect block cycle: circular operational block detected.
**CYCLE-005** — Cross-layer execution deadlock: OPS-A blocked by OPS-B, but their Blueprint parents create an unexecutable order.

### Cycle-check procedure

1. Blueprint graph: nodes are `task_id`, edges are `dependencies`.
2. Operational graph: nodes are `ops_id`, edges are `blockedBy`.
3. Traverse each graph separately; on revisit of an in-progress node, emit CYCLE-002 or CYCLE-004 with the complete path.
4. For CYCLE-005, join both graphs through `blueprint_task` only when OPS CYCLE-004 is absent but no execution order exists.

---

## 7. Bridge dashboard

The bridge view should show:

| Blueprint ID | Blueprint status | Linked ops | Ops status | Coverage |
|---|---|---:|---|---|
| `P03-T08` | `em-revisao` | 3 | all done | Ready for review |
| `P04-T02` | `pendente` | 0 | — | Missing execution |
| `P05-T02` | `em-execucao` | 2 | one blocked | Operational blocker |

Useful calculated states:

```text
Missing execution
Operational work active
Operational work blocked
All operational work done
Ready for Blueprint review
Broken parent link
```

This is the only place where cross-system interpretation should occur.

---

## 8. Operating procedure

When new work appears:

1. Decide whether it changes a governed deliverable.
2. If yes, create or identify the Blueprint task.
3. Break the work into concrete actions in TaskNotes.
4. Add `blueprint_task` to each operational action.
5. Track execution only in TaskNotes.
6. Track approval, gaps, and deliverable completion only in the Blueprint task.
7. Run validation before marking the Blueprint task `aprovado` or `concluido`.

### Decision rule

> If it defines, approves, sequences, or governs a deliverable, it belongs in Blueprint.  
> If it is a schedulable action that advances that deliverable, it belongs in TaskNotes.

The most important immediate cleanup is to normalize Blueprint statuses to scalar values and resolve the currently statusless Blueprint tasks before relying on unified reporting.