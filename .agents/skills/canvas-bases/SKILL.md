---
name: canvas-bases
description: Expert workflow for Obsidian Canvas Bases, including designing and operating live canvas-bases views, configuring filters/groups/formulas, dependency and wikilink edges, assignment zones, linked JSON Canvas snapshots, stable-position updates, and optional TaskNotes integration. Use whenever a user mentions Canvas Bases, canvas-bases, a Canvas Bases board, a .base-to-.canvas workflow, board zones, spatial task views, or asks to configure, generate, update, embed, or troubleshoot one—even if they call it an Obsidian Canvas board or Bases canvas.
compatibility: Obsidian 1.10.1+, core Bases and Canvas plugins; TaskNotes only for TaskNotes-specific features.
---

# Canvas Bases Expert Workflow

Use Canvas Bases as the spatial layer over an Obsidian Bases result set. Keep the boundary explicit:

- **Bases owns membership and metadata:** filters, formulas, visible properties, sorting, and grouping in the `.base` file.
- **Canvas Bases owns spatial state:** card geometry, manual groups/text cards, zones, edge mode, and linked-canvas settings.
- **Markdown remains user data.** TaskNotes remains the source of truth for task semantics and mutations when it is installed.
- A live `canvas-bases` view is reactive; a `.canvas` file generated from it is a snapshot and must be updated deliberately.

## Before changing anything

1. Locate the target `.base`, its relevant view, and any linked `.canvas` path.
2. Read the `.base` before editing. Preserve its global and view-level filters, task-identification filter, excluded-folder conditions, formulas, and existing view order.
3. Confirm the environment: Obsidian 1.10.1+, core Bases, core Canvas for `.canvas` files, and TaskNotes only when badges/actions/relationships are required.
4. Decide whether the user needs a live view, a materialized snapshot, or both. Do not describe a snapshot as live.
5. Prefer duplicating generated defaults into a user-owned path before customization.

## Configure a live view

Add a new view rather than destroying an existing useful view. The canonical shape is:

```yaml
- type: canvas-bases
  name: Operations Canvas
  groupBy:
    property: status
    direction: ASC
  order:
    - file.name
    - status
    - priority
  sort:
    - column: priority
      direction: ASC
  canvasBasesLayout: grid
  canvasBasesEdgeMode: properties
  canvasBasesEdgeProperties: depends_on, related
  canvasBasesShowBodyEditor: false
  canvasBasesNodeWidth: 360
  canvasBasesNodeHeight: 200
  canvasBasesPreservePositions: true
  canvasBasesRemoveMissingNodes: true
```

Use `canvasBasesLayout: grid` for spatial planning and `columns` for workflow lanes. Use `groupBy` for meaningful states such as status, phase, priority, owner, or domain. The first view is the default view when the `.base` is embedded.

### Cards and properties

- Every result row becomes a file card.
- The `order` list controls the displayed card properties and their order.
- Initial card order follows the Base sort.
- Keep cards compact: show decision-making fields, not every available property.
- Enable `canvasBasesShowBodyEditor` only when inline note editing is intentional; it increases mutation surface.

### Edges

Choose edge sources based on actual data:

- `wikilinks`: links in note bodies.
- `properties`: configured link-valued properties.
- `all`: both.
- TaskNotes dependency/subtask relationships: only when TaskNotes capabilities are present and the relevant relationship mode is enabled.

Property edges need a comma-separated property list such as `depends_on, related`. Edges render only when both endpoint notes are in the current result set. A filtered-out dependency is not a broken edge; explain the visibility constraint before changing data.

## Assignment zones

Use zones when dropping a card should cause a deliberate state change. A grouped view can derive zones from Bases groups; custom zones can write a property or invoke a supported TaskNotes action.

```yaml
canvasBasesZones:
  - origin: custom
    id: review-needed
    label: Needs review
    action: set-property
    property: note.review
    value: Needs review
    updateMode: replace
    valueType: string
    color: "#f59e0b"
```

Before adding a zone, verify the stored value exactly. Human-friendly prefixes such as `@` and `#` are input syntax, not necessarily stored property values. For TaskNotes actions, call the TaskNotes runtime API rather than rewriting task frontmatter directly.

## Linked JSON Canvas snapshots

Use the command palette:

```text
Canvas Bases: Create canvas from current bases view
Canvas Bases: Update linked canvas
Canvas Bases: Open linked canvas
```

Creation should establish the path, layout, edge options, node size, and update behavior. Updates should preserve Canvas Bases-owned stable node/edge IDs and positions and preserve unrelated manual Canvas nodes/edges when supported by the plugin. Treat the generated file as a snapshot: after changing filters, result membership, or live board state, run **Update linked canvas**.

Do not hand-edit generated geometry unless the user explicitly wants a low-level JSON Canvas repair. If hand-editing is necessary, preserve required node/edge fields, unique IDs, z-order, and valid JSON.

## TaskNotes integration

TaskNotes is optional. Feature-detect before using it. Check `api.apiVersion` and `api.hasCapability(...)`; use canonical query DTOs and catalog values; include a `source` when mutating; avoid reacting to your own mutation events.

With capability support, Canvas Bases can show task badges, context actions, dependency/subtask edges, link-handle relationship creation, property zones, completion/archive actions, time tracking, Pomodoro actions, and recurrence actions. If TaskNotes is absent or disabled, keep the board useful as a normal Bases/Canvas view and state which task-specific functions are unavailable.

## Safe customization and troubleshooting

- Do not edit the only generated TaskNotes default. Duplicate it and point TaskNotes view commands to the copy.
- Preserve the task-identification filter (`file.hasTag("task")` or the configured property-based equivalent).
- If cards are missing, inspect filters, file paths, property names, and stored values before touching layout.
- If a Base will not open, validate YAML indentation and remove the most recent filter/formula/view option incrementally.
- If edges are missing, confirm both endpoints are visible and the configured property contains resolvable links.
- If a snapshot is stale, update the linked canvas; do not assume the live `.base` changed the `.canvas` automatically.
- Do not enable TaskNotes mode merely because files have task-like fields; confirm canonical TaskNotes values and runtime capability first.

## Response format

For an operational request, report:

1. Source `.base` and selected view.
2. Live vs snapshot behavior.
3. Filters/group/sort/property decisions.
4. Edge and zone behavior, including visibility limitations.
5. Files changed or commands the user must run.
6. Verification performed and any remaining assumptions.
