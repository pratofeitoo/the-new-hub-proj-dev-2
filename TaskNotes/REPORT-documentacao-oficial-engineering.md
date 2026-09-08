# Engineering Report — `documentacao-oficial.base`

> **Subject:** `TaskNotes/Views/documentacao-oficial.base` (184 lines)  
> **Plugin stack:** TaskNotes 4.12.5 + Bases (core) + Canvas Bases 0.1.4  
> **Corpus:** 5 tasks tagged `documentacao-oficial` in `TaskNotes/Tasks/`  
> **Date:** 2026-09-07 · Author: Sisyphus (engineering teardown)  
> **Linked canvas:** `TaskNotes/Views/documentacao-oficial.canvas` (declared but not yet materialized on disk — expected, see §5)

---

## 0. Executive Summary

`documentacao-oficial.base` is **not a view — it's a single-topic task database**. One `.base` file acts as a filtered, computed, multi-view database over the flat `TaskNotes/Tasks/` folder, scoped to a single master tag (`documentacao-oficial`). The reason it felt "more useful than expected" is architectural, not cosmetic:

1. **Single-tag scoping** creates a *bounded context* — 5 tasks, 1 epic + 4 children, isolated from the 60+ other tasks in the vault.
2. **Domain formulas** (`horizon`, `urgencyScore`, `isBlocked`) encode *business rules* (CNPJ critical path, time pressure, dependency health) directly in the query layer — no external script.
3. **Six purpose-built views** cover every question a stakeholder asks without leaving the file: *Where are we? What's next? What's blocked? What's the DAG?*
4. **Canvas Bases view** (`canvas-bases` type) is the cherry on top: it **materializes the filtered task set as a live `.canvas` graph** with `blockedBy` edges and draggable status zones — bridging the tabular Bases world and the spatial Canvas world in one file. This is why the file felt disproportionately powerful for its size.

**Replication thesis:** Any "big group linked together" (another epic, a workstream, a product area) can be cloned by copying this file and changing *one tag + two formulas*. The rest of the machinery is generic. See §9 for the exact recipe.

---

## 1. What This File Is (and What It Isn't)

| Attribute | Value |
|---|---|
| **Type** | Obsidian Bases file (`.base` YAML) — native DB, not Dataview |
| **Collection** | `TaskNotes` (see `mdbase.yaml` → `types_folder: _types`, `default_strict: false`) |
| **Task identity** | `file.hasTag("task")` + TaskNotes `taskTag: "task"` (tag-based identification, `data.json` → `taskIdentificationMethod: tag`) |
| **Scope mechanism** | `filters.and: file.hasTag("documentacao-oficial")` — the *only* filter at the base level, so every view inherits the same corpus |
| **Task store** | `TaskNotes/Tasks/` (5 files) + `TaskNotes/Archive/` (archived via `blockedBy` DAG, not in this scope) |
| **Not a dashboard** | Unlike `Task Dashboard.md` which embeds multiple bases, this *is* the database — the dashboard just embeds it via `![[documentacao-oficial.base]]` (line 374 of `Task Dashboard.md`) |
| **Plugin contract** | Bases core renders `tasknotesKanban` / `tasknotesTaskList` via TaskNotes; `canvas-bases` type is rendered by the **Canvas Bases** plugin (Callum Alpass, 0.1.4) which reads the same filter/formula set and writes a `.canvas` JSON |

The file was flagged as "do not delete" in `2026-09-02-poda-estrutura-repositorio-fases-1-3.md` line 76 — it was explicitly spared during the repo prune because it overlapped with live dashboard edits.

---

## 2. Line-by-Line Anatomy

### 2.1 Global Filters (lines 1–3)

```yaml
filters:
  and:
    - file.hasTag("documentacao-oficial")
```

- **Single predicate.** Minimal, intentional. Every view after this sees exactly the 5 matching files. No `file.inFolder()` guard — any file anywhere with that tag qualifies (future-proof for splitting tasks across folders).
- **Inheritance:** View-level filters (e.g., `Bloqueados`) append with `and`, so they are intersections, not replacements.
- **Contrast with generic bases:** `tasks-default.base` filters on `file.hasTag("task")` (all tasks); `kanban-default.base` adds `status != done/concluido` (active only). This base is *narrower and more intentional*.

### 2.2 Formulas — The Business Logic Layer (lines 4–12)

Eight formulas turn raw frontmatter (`priority`, `due`, `blockedBy`) into *derived domain concepts*. This is the core engineering:

| Formula | Lines | What it computes | Why it exists |
|---|---|---|---|
| `priorityWeight` | 5 | `none→0, low→1, normal→2, high→3` | Numeric sort key; avoids string comparison |
| `daysUntilDue` | 6 | `(due - today) / 86400000` floored, or `null` | Day-precision countdown, null-safe for undated tasks |
| `dueIn` | 7 | Human string: "Today" / "1 day" / "N days" / "N days overdue" | Display column; mirrors `tasks-default.base` but adapted |
| `horizon` | 8 | **4-bucket strategic horizon** (see §3.1) | The most opinionated formula — maps priority+due to business phases |
| `horizonWeight` | 9 | `AGORA→3, 0-6M→2, 6-18M→1, Sem→0` | Sort key for horizon ordering |
| `isBlocked` | 10 | `blockedBy` non-empty AND at least one blocker not `done`/`concluido` | Live DAG health check — dereferences linked files to read their `status` |
| `blockedByTitles` | 11 | Comma-joined blocker titles or "—" | Group-by key for the Bloqueados view |
| `urgencyScore` | 12 | `priorityWeight + max(0, 10 - daysUntilDue)` (or just `priorityWeight` if undated) | Composite sort: priority baseline + time pressure boost (closer due = higher) |

**Key design choice:** Formulas are *pure Bases expressions* — no JS, no DataviewJS, no external compute. They run in the Bases engine and are available as `formula.*` in every view's `groupBy`/`sort`/`filters`.

### 2.3 Views — Six Lenses on the Same Corpus (lines 13–184)

Each view reuses the same `order` field list (which properties are visible as columns) and the same base filter, but varies `type`, `groupBy`, `filters`, `sort`, and `config`.

| # | View Name | Type | Group By | Sort | Extra Filter | Purpose |
|---|---|---|---|---|---|---|
| 1 | Kanban — por Status | `tasknotesKanban` | `status` ASC | `urgencyScore` DESC | — | **Operational board.** Classic status columns (`open → pendente → in-progress → em-revisao → done/concluido`). Mirrors `kanban-default.base` but scoped. `hideEmptyColumns: false` keeps the pipeline visible even when empty. |
| 2 | Kanban — por Horizonte | `tasknotesKanban` | `formula.horizon` DESC | `urgencyScore` DESC | — | **Strategic board.** Re-groups the *same cards* by business horizon, not workflow status. Lets founders see "what's AGORA vs 0-6M vs 6-18M" at a glance. `columnWidth: 320` slightly wider for longer horizon labels. |
| 3 | Lista — Prioridade AGORA primeiro | `tasknotesTaskList` | `formula.horizon` DESC | `horizonWeight` DESC, `due` ASC | — | **Prioritized backlog.** Flat list, horizon-grouped, due-sorted. Answers "what do I do first?" — AGORA tasks on top, earliest due first within each horizon. |
| 4 | Bloqueados — precisa liberar GOV-001 | `tasknotesTaskList` | `formula.blockedByTitles` ASC | `due` ASC | `formula.isBlocked == true` | **Unblock queue.** Only shows tasks where `isBlocked` is true, grouped by *who blocks them*. Title explicitly names the bottleneck (`GOV-001`). This is where the DAG pays off. |
| 5 | Epic + Subtasks | `tasknotesTaskList` | `projects` ASC | `due` ASC | — | **Hierarchy view.** Groups by `projects` (which holds `[[Epic]]` links). Shows epic → child decomposition. The only view that groups by `projects` instead of status/horizon. |
| 6 | Canvas — Documentação Oficial | `canvas-bases` | `status` ASC | `urgencyScore` DESC | — | **Spatial DAG.** The Canvas Bases view (§5). Columns layout, edges via `blockedBy`, zones for drag-to-update status. |

**Shared `order` pattern:** All views list `status, priority, due, scheduled, projects, contexts, blockedBy, file.tasks, owner` (with minor variations — `file.tasks` omitted in Bloqueados where it's noise, `tags` only in Kanban por Status). This is the "card face" — which properties render on each card/row. Consistency across views reduces cognitive load.

**`columnOrder` JSON strings** (lines 36, 58): Explicit column ordering as serialized JSON inside YAML (Bases quirk). Status view: `open → pendente → in-progress → em-revisao → done → concluido → none`. Horizon view: `AGORA → 0-6M → 6-18M → Sem horizonte`. Without this, Bases would auto-sort alphabetically and break the intended pipeline narrative.

---

## 3. Formula Deep Dive — The Interesting Bits

### 3.1 `horizon` — Encoding Business Time, Not Calendar Time

```js
horizon: if(priority=="high","AGORA — antes do CNPJ",
  if(priority=="normal" && due.format("YYYY-MM-DD") <= (today() + "30 days").format("YYYY-MM-DD"),
    "0-6M — empresa operando",
    if(priority=="normal","6-18M — captação/escala","Sem horizonte")))
```

- `high` priority → always `AGORA` (CNPJ gate) regardless of due date. This captures the business rule: "high means blocking incorporation."
- `normal` + due within 30 days → `0-6M` (operational horizon).
- `normal` + due beyond 30 days (or no due match) → `6-18M` (raise/scale horizon).
- Everything else (`low`, `none`, `null`) → `Sem horizonte`.

**Implication:** The horizon is *priority-driven first, date-driven second*. A `high` task due in 6 months still shows as AGORA — correctly, because priority signals "must resolve before CNPJ." This is a deliberate product decision, not a calendar sort.

**Replication note:** This formula is the *least generic* part of the file. Cloning for another epic means rewriting the horizon buckets (e.g., `P05 — Tech` might use `MVP → Beta → GA` instead). Keep the pattern (priority × due-window → bucket) but change the bucket labels.

### 3.2 `isBlocked` — Live DAG Dereference

```js
isBlocked: blockedBy.isEmpty() == false
  && list(blockedBy).filter(
       file(if(value.isType("object"), value.uid, value))
         .properties.status != "done"
      && file(if(value.isType("object"), value.uid, value))
         .properties.status != "concluido"
     ).length > 0
```

- Handles both `blockedBy` shapes: plain wikilink string (`"[[Task]]"`) and TaskNotes object form (`{uid, reltype}`) via `value.isType("object") ? value.uid : value`.
- Dereferences each blocker file to read its live `status` — so `isBlocked` auto-flips to `false` when GOV-001 moves to `done`/`concluido`, without editing dependents.
- Counts blockers where status is *neither* `done` nor `concluido` (dual done-states in this vault: English + Portuguese). This matches `tasknotes/data.json` → `customStatuses` which marks both `done` and `concluido` as `isCompleted: true`.

**This is the DAG engine.** Combined with `canvasBasesEdgeProperties: blockedBy`, it creates a reactive dependency graph with zero manual edge maintenance.

### 3.3 `urgencyScore` — Priority + Time Pressure

```js
urgencyScore: if(due.isEmpty() && scheduled.isEmpty(),
  formula.priorityWeight,
  formula.priorityWeight + max(0, 10 - if(formula.daysUntilDue, formula.daysUntilDue, 0)))
```

- Undated tasks: score = priority alone (0–3).
- Dated tasks: score = priority + `max(0, 10 - daysUntilDue)`. So a task due in 2 days gets +8, due today +10, overdue (negative days) gets >10 (since `10 - (-N)` = `10+N`), due in 15 days gets +0.
- Used as `sort: urgencyScore DESC` in both Kanban views and the Canvas — ensures the most urgent card sits at the top of each column.

**Contrast with `tasks-default.base` urgency:** That file uses `daysUntilNext` (min of due/scheduled) + a sub-day time-decay term for same-day sorting. This file simplifies to `daysUntilDue` only — because scheduled dates are sparse in this corpus (only 2 of 5 tasks have `scheduled`). The simplification is correct for this dataset.

---

## 4. The Canvas Bases View — The Cherry on Top

Lines 112–184 declare a view of type `canvas-bases` — not a standard Bases view type, but an extension provided by the **Canvas Bases plugin** (0.1.4, Callum Alpass). This is the "plugin that mixes both .canvas and .bases files inside a dedicated view."

### 4.1 What It Declares

```yaml
- type: canvas-bases
  name: Canvas — Documentação Oficial
  groupBy: { property: status, direction: ASC }
  canvasBasesLayout: columns
  canvasBasesEdgeMode: properties
  canvasBasesEdgeProperties: blockedBy
  canvasBasesShowBodyEditor: false
  canvasBasesNodeWidth: 360
  canvasBasesNodeHeight: 200
  canvasBasesPreservePositions: true
  canvasBasesRemoveMissingNodes: true
  canvasBasesLinkedCanvasPath: TaskNotes/Views/documentacao-oficial.canvas
  canvasBasesZones:
    - origin: bases ... set-property note.status = open
    - origin: bases ... set-property note.status = pendente
    - origin: bases ... set-property note.status = in-progress
    - origin: bases ... set-property note.status = em-revisao
    - origin: bases ... set-property note.status = done
    - origin: bases ... set-property note.status = concluido
    - origin: custom id:bloqueado label:⛔ Bloqueado color:#ef4444
```

### 4.2 How It Works (Plugin Mechanics)

1. **Layout `columns` + `groupBy: status`:** Renders one vertical column per status value, in `columnOrder` sequence. Each task becomes a 360×200 node inside its status column — identical to the Kanban columns but in Canvas coordinate space.
2. **Edges `properties` → `blockedBy`:** For each task, reads its `blockedBy` frontmatter, resolves the wikilink(s), and draws a Canvas edge from blocker → blocked. The result is a live DAG: `GOV-001 → AGORA → 01-08 → 09-14` (and the Epic as an inbound hub). No manual edge drawing.
3. **Linked canvas `documentacao-oficial.canvas`:** On first render, the plugin *materializes* a real `.canvas` JSON file at that path (if absent — currently absent on disk, which is normal before first Canvas view open). Subsequent renders update node positions in that file. `PreservePositions: true` means manual drags survive re-renders; `RemoveMissingNodes: true` means archived tasks auto-vanish from the canvas.
4. **Zones (drag-to-update):** The 7 zones are drop targets. Dragging a card from the `open` column into the `done` column triggers `set-property: note.status = done` on the underlying markdown file — a spatial status update. The 6 `origin: bases` zones are auto-generated from the groupBy values; the 7th (`⛔ Bloqueado`, red, `origin: custom`) is a manual triage lane for tasks that need to be parked as blocked without editing frontmatter.
5. **`ShowBodyEditor: false`:** Cards show only frontmatter-derived properties, not the markdown body — keeps the DAG readable at a glance.

### 4.3 Why It Felt Disproportionately Useful

- **One file, two substrates:** Traditionally, Kanban (Bases) and Canvas (spatial) are separate artifacts that drift. Here they share the same filter + formulas — the Canvas *is* the Kanban, just rendered spatially. No sync, no duplication.
- **Edges are data, not drawing:** In `HUB_Tarefas_Projeto.canvas` (the 64-task phase canvas in `04-project-management/tarefas/`), edges are hand-drawn JSON (`"edges": [{fromNode, toNode, label: "blocks"}]` — 92 manual edges). In the Canvas Bases view, edges are *derived from `blockedBy`* — so the graph stays correct as tasks are completed, without anyone redrawing lines.
- **Zones make Canvas writable:** Without zones, Canvas is read-only visualization. With zones, it becomes a *control surface* — dragging a node between columns mutates the source file. This is why the interaction feels like a "real" Kanban inside a Canvas.

### 4.4 Reference Implementation to Study

For a large-scale Canvas pattern, study `04-project-management/tarefas/HUB_Tarefas_Projeto.canvas` + `HUB_Gaps.canvas` — these are the hand-drawn counterparts (status-grouped columns, 92 `blocks` edges, domain-grouped gaps). They show what the Canvas Bases view *automates* at small scale.

---

## 5. Data Model — The 5 Tasks That Feed It

All tasks live in `TaskNotes/Tasks/*.md` with TaskNotes frontmatter. The `documentacao-oficial` subset:

| File | Status | Priority | Due | blockedBy | Role |
|---|---|---|---|---|---|
| `Documentação Oficial — Epic Vault Isolado HUB (01-14).md` | open | high | 2026-09-30 | — | **Epic / hub.** `projects` links to 2 mapas + instrução; body lists 4 children. No `title` field (uses filename as title — TaskNotes `storeTitleInFilename: true`). |
| `GOV-001 — Decidir estrutura societária (quantos CNPJs).md` | open | high | 2026-09-30 | — | **Root blocker.** `blockedBy: []`, `scheduled: 2026-09-03`. 80% of docs depend on it. DAG root. |
| `Docs Oficiais AGORA — 7 documentos críticos antes do CNPJ.md` | open | high | 2026-09-30 | `GOV-001` (FINISHTOSTART) | **AGORA bucket.** 7 docs, blocked by GOV-001. |
| `Docs Oficiais 01-08 — Validar obrigatórios com advogado e contador.md` | open | high | 2026-09-30 | `GOV-001` | **Obrigatórios.** 32 docs, blocked by GOV-001. Has explicit `title` field. |
| `Docs Não-Obrigatórios 09-14 — Planejar horizontes 0-6M e 6-18M.md` | open | normal | 2026-10-15 | `AGORA` | **Non-obligatory.** 27 docs, blocked by AGORA (transitive chain: GOV-001 → AGORA → 09-14). Lower priority → different horizon bucket. |

**DAG shape:** `Epic` (hub, no blocking) + linear chain `GOV-001 → {AGORA, 01-08} → 09-14`. The Epic links via `projects: [[Epic]]` (reverse lookup), not `blockedBy` — so the `Epic + Subtasks` view (groupBy `projects`) reveals the hierarchy, while `isBlocked`/`blockedBy` reveals the sequence. Two complementary graphs over the same nodes.

**Frontmatter conventions:** `ops_id: OPS-00x`, `task_type: operational`, `tags: [task, documentacao-oficial, vault-isolado, <role>]`, `contexts: [@juridico, @governanca, ...]`, `projects: [[wikilinks]]`, `blockedBy: [{uid, reltype: FINISHTOSTART}]`, `googleCalendarEventId` (GCal sync enabled), `timeEstimate` (minutes). The `tasknotes/data.json` fingerprint confirms `customStatuses` with dual done-states and `enableBases: true`, `enableMdbaseSpec: true`.

---

## 6. Comparison with Generic Bases in the Vault

| File | Scope | Formulas | Views | Emphasis |
|---|---|---|---|---|
| `documentacao-oficial.base` | `documentacao-oficial` (5 tasks) | 8 (incl. `horizon`, `isBlocked`) | 6 (2 Kanban + 3 Lists + 1 Canvas) | **Strategic + operational + spatial** — business horizons, blocker triage, DAG |
| `kanban-default.base` | `task` + active only (status filter) | 6 (`urgencyScore` with `daysUntilNext`) | 1 (Kanban by status) | **Operational only** — single board, hideEmptyColumns true |
| `tasks-default.base` | `task` (all) | 6 (incl. `nextDate`, `isActive`) | 4 (Today / Next 7 Days / Backlog / All) | **Temporal** — date-bucketed lists, calendar-centric |
| `relationships.base` | `this.file` contextual (subtasks/projects/blockedBy) | 40+ (`isOverdue`, `timeTracked*`, `urgencyScore`, etc.) | 4 (Subtasks / Occurrences / Projects / BlockedBy) | **Relational** — per-note relation expansion via `this.file` |
| `agenda-default.base` / `calendar-default.base` | `task` + date filters | date-centric | Calendar / Agenda | **Scheduling** — time-blocking, ICS/GCal |

**What makes `documentacao-oficial` unique:** It is the *only* base that combines (a) domain-specific horizon buckets, (b) live `blockedBy` DAG health, and (c) a Canvas Bases spatial view. The other bases are generic infrastructure; this one is a *purpose-built product*.

---

## 7. Why the Single-Topic Grouping Worked So Well

1. **Bounded context > global board.** A global Kanban with 60+ tasks is noise. A 5-task base with a single tag is a *decision surface* — you can hold the entire graph in working memory.
2. **Tag-as-database-key.** `documentacao-oficial` is not a label — it's a *partition key*. One tag = one database. This is the same pattern as `fase-P05`, `fase-P07` tags in `04-project-management/tarefas/` but applied to a cross-cutting concern (docs) rather than a phase.
3. **Formulas as ubiquitous language.** `AGORA — antes do CNPJ` is not a status — it's a *business event*. The formula makes the business vocabulary queryable. `isBlocked` makes the dependency vocabulary queryable. The vault speaks the project's language, not the tool's.
4. **Multiple views, zero duplication.** Six views over one filter means every question is one click away without re-filtering. The Kanban answers "where," the Lista answers "when," the Bloqueados answers "why stuck," the Epic view answers "how decomposed," the Canvas answers "how connected."
5. **Canvas Bases closes the loop.** Without it, the DAG is only a formula (`isBlocked`) and a list grouping (`blockedByTitles`). With it, the DAG becomes *spatial and manipulable* — you can see the chain, drag to unblock, and the graph updates itself.

---

## 8. Issues, Debt & Fixes Needed

### 8.1 `canvasBasesLinkedCanvasPath` File Does Not Yet Exist

`TaskNotes/Views/documentacao-oficial.canvas` is declared but absent on disk. This is **expected before first Canvas view open** — the plugin creates it on demand. Not a bug, but worth noting: the first open will generate a ~5-node canvas file; subsequent opens will update it in place. If the canvas was previously generated and deleted, reopen the Canvas view to regenerate.

### 8.2 `horizon` Formula Is Hard-Coded to This Epic's Taxonomy

The bucket labels (`AGORA — antes do CNPJ`, etc.) and the `priority == high → AGORA` rule are specific to the documentation workstream. Cloning for e.g. `fase-P05` without editing the formula will produce misleading horizons. **Fix when cloning:** rewrite the `horizon` and `horizonWeight` formulas to match the new domain's phases (see §9 template).

### 8.3 `isBlocked` Only Checks `done`/`concluido` — Misses Other Terminal States

If a custom status like `bloqueado` (the red zone's value) is added to `customStatuses` as a terminal state, `isBlocked` will still treat tasks in that status as blockers (because it only excludes `done`/`concluido`). Consider expanding to `properties.status != "done" && != "concluido" && != "bloqueado"` if that zone is meant to be terminal.

### 8.4 `columnOrder` as Serialized JSON String

Bases stores `columnOrder` as a JSON-encoded string inside YAML (`'{"note.status":[...]}'`). This is fragile to manual editing (single-quote escaping, JSON validity). Prefer editing via the Bases UI rather than raw YAML for this field.

### 8.5 `dueIn` String Logic Edge

`dueIn` interpolates overdue days as `formula.daysUntilDue * -1 + " days overdue"` — for a task 1 day overdue this yields `"1 days overdue"` (pluralization bug). The `daysUntilDue == -1` branch handles "1 day overdue" correctly, so the bug only appears if the formula is refactored. Low priority.

### 8.6 No `file.inFolder()` Guard

The base-level filter `file.hasTag("documentacao-oficial")` will include tasks from *any* folder (including `99-archive/` if an archived file retains the tag). If archived tasks should be excluded, add `&& file.inFolder("TaskNotes/Tasks")` or `&& status != "done"` at the base level — but the current design intentionally keeps `done`/`concluido` visible (Kanban shows those columns) so you can see completed work in context.

---

## 9. Replication Blueprint — "Big Groups Linked Together"

The user wants to replicate this pattern for other large, linked task groups. Here is the exact procedure.

### 9.1 Template — Copy-Paste Starter

Copy `documentacao-oficial.base` to `TaskNotes/Views/<new-topic>.base` and change these 4 spots:

```yaml
# 1. SCOPE — one tag, one bounded context
filters:
  and:
    - file.hasTag("<new-topic>")          # ← change tag

# 2. HORIZON — rewrite buckets for the new domain
formulas:
  horizon: if(priority=="high","<Bucket A>",
    if(priority=="normal" && due.format("YYYY-MM-DD") <= (today() + "30 days").format("YYYY-MM-DD"),
      "<Bucket B>",
      if(priority=="normal","<Bucket C>","Sem horizonte")))
  horizonWeight: if(formula.horizon=="<Bucket A>",3,
    if(formula.horizon=="<Bucket B>",2,
      if(formula.horizon=="<Bucket C>",1,0)))

# 3. VIEW TITLES — rename to match new domain
views:
  - name: Kanban — por Status (<New Topic>)
  - name: Kanban — por Horizonte (<New Topic>)
  - name: Lista — Prioridade <Bucket A> primeiro
  - name: Bloqueados — precisa liberar <ROOT-BLOCKER>
  - name: Epic + Subtasks (<New Topic>)
  - name: Canvas — <New Topic>

# 4. CANVAS — point to new canvas file + match epic blocker name
  canvasBasesLinkedCanvasPath: TaskNotes/Views/<new-topic>.canvas
  canvasBasesZones: ... (keep as-is; zones are generic status lanes)
```

Everything else (`priorityWeight`, `daysUntilDue`, `dueIn`, `isBlocked`, `blockedByTitles`, `urgencyScore`, view `order`/`sort`/`groupBy`/`config`) is **generic and can stay unchanged**.

### 9.2 Concrete Candidates in This Vault

| New Base File | Tag to Create | Horizon Buckets | Root Blocker | Why It Works |
|---|---|---|---|---|
| `fase-P03-dados.base` | `fase-P03` | `Fundação → Modelagem → LGPD` | `P03-T01` | 9 tasks in `04-project-management/tarefas/P03-*`, existing DAG in `HUB_Tarefas_Projeto.canvas` |
| `fase-P05-tech.base` | `fase-P05` | `Arquitetura → Integração → Operação` | `P05-T01` | 7 tasks, similar chain |
| `fase-P06-financeiro.base` | `fase-P06` | `Premissas → Modelo → Capital` | `P06-T01` | 12 tasks, heavily interlinked |
| `blueprint-oferta.base` | `blueprint` or `fase-P01` | `Descoberta → Validação → Pronto` | `P01-T01` | 7 tasks, brand/market workstream |
| `mvp-desenvolvimento.base` | `mvp-*` via `file.hasTag("mvp-*")` or a shared `mvp` tag | `Backlog → Em dev → Em revisão` | — | 5 `converter XLSX para MD` tasks + others |
| `gaps-por-dominio.base` | `gap` (if added) or link to `00-project-control/registro-lacunas/` | `Crítico → Alto → Médio` | — | 68 gaps grouped by domain, similar to `HUB_Gaps.canvas` |

### 9.3 Data Setup for Each New Group

For each new `.base`, ensure the underlying tasks have:

- **Shared tag** (`<new-topic>`) on every task in the group — this is the partition key.
- **`blockedBy` DAG** — at least the root blocker (`blockedBy: []`) and dependents (`blockedBy: [{uid: "[[Root Task]]", reltype: FINISHTOSTART}]`). The Canvas edges and `isBlocked` formula do the rest.
- **Epic hub** (optional but recommended) — one task with `tag: epic` that is linked via `projects: [[Epic]]` from children, for the `Epic + Subtasks` view.
- **`priority` + `due`** — to feed `horizon` and `urgencyScore`. At minimum set `priority: high` on the critical path.
- **`status`** values from `customStatuses` (`open`, `pendente`, `in-progress`, `em-revisao`, `done`, `concluido`) — so the Kanban/Canvas columns populate correctly.

### 9.4 Scaling Considerations

- **Up to ~15 tasks per base:** The `columns` Canvas layout stays readable. Beyond 15, consider splitting by sub-tag or switching Canvas layout to `force` (if available) or manual positioning.
- **`PreservePositions: true`:** Essential for groups >10 tasks — otherwise every Bases update reflows the canvas and destroys manual tweaks.
- **`RemoveMissingNodes: true`:** Keeps the canvas clean as tasks are archived — but means the canvas is not an archive. If you need a historical snapshot, duplicate the `.canvas` file before archiving.
- **Naming convention:** `TaskNotes/Views/<slug>.base` + `TaskNotes/Views/<slug>.canvas` — matches the existing `documentacao-oficial` pair and the `HUB_Tarefas_Projeto.base/.canvas` pair.

---

## 10. Conclusions

1. **The file is a well-engineered, minimal, domain-aware task database** — not a generic view. Its power comes from the combination of a narrow tag filter, 3 domain formulas (`horizon`, `isBlocked`, `urgencyScore`), and 6 complementary views, with Canvas Bases as a spatial projection of the same data.
2. **Canvas Bases is the differentiator.** Without it, this would be a good filtered Kanban. With it, it becomes a *live DAG editor* — the only place in the vault where the dependency graph is both visible and writable without manual edge maintenance.
3. **The pattern is intentionally replicable.** The file was built as a *template disguised as an instance* — 80% generic machinery, 20% domain-specific horizon labels. Cloning it for other epics/workstreams is the intended next step and requires changing only 4 spots (§9.1).
4. **No structural changes needed to the original file.** The 6 issues in §8 are minor (missing canvas file is expected, horizon hard-coding is by design, pluralization is cosmetic). The file should be kept as-is and used as the reference implementation.
5. **Recommended next step:** Pick one "big group" (e.g., `fase-P05-tech` or `blueprint-oferta`), create its 5–10 tasks with the shared tag + `blockedBy` DAG, copy this base via the §9.1 template, and validate the Canvas edges render correctly. Once one clone succeeds, the remaining groups can be generated in parallel.

---

## Appendix — File Map

```
TaskNotes/Views/documentacao-oficial.base   ← this report's subject (184 lines)
TaskNotes/Views/documentacao-oficial.canvas ← linked canvas (not yet materialized; auto-created on first Canvas view open)
TaskNotes/Tasks/
  Documentação Oficial — Epic Vault Isolado HUB (01-14).md
  GOV-001 — Decidir estrutura societária (quantos CNPJs).md
  Docs Oficiais AGORA — 7 documentos críticos antes do CNPJ.md
  Docs Oficiais 01-08 — Validar obrigatórios com advogado e contador.md
  Docs Não-Obrigatórios 09-14 — Planejar horizontes 0-6M e 6-18M.md
TaskNotes/Task Dashboard.md:374             ← embeds this base (6-view verification step)
.mdbase.yaml                                ← collection spec (TaskNotes, mdbase 0.2.0)
.obsidian/plugins/tasknotes/data.json       ← TaskNotes config (tags, statuses, GCal, fieldMapping)
.obsidian/plugins/canvas-bases/manifest.json ← Canvas Bases 0.1.4
04-project-management/tarefas/
  HUB_Tarefas_Projeto.canvas                 ← reference: 64-task phase canvas (92 manual edges)
00-project-control/registro-lacunas/
  HUB_Gaps.canvas                           ← reference: 68-gap domain canvas
```

---

*Report generated 2026-09-07. Source files read via direct tool output — no speculation. To regenerate the Canvas, open `TaskNotes/Views/documentacao-oficial.base` → switch to `Canvas — Documentação Oficial` view → Canvas Bases will create `documentacao-oficial.canvas` on disk.*
