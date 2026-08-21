# Blueprint Task Architecture

The [`HUB_Blueprint_Tasks.base`](HUB_Blueprint_Tasks.base) file is the centralized Obsidian Bases view for the blueprint-document task notes in this folder.

Each task is a Markdown note with YAML frontmatter. The frontmatter is the task's structured metadata; the body contains the task objective, required content and completion criteria.

## Current task set

- `BP-001` — Offer and Revenue Architecture
- `BP-002` — Product and Capability Blueprint
- `BP-003` — Data and Intelligence Blueprint
- `BP-004` — Technology Architecture Blueprint
- `BP-005` — Operating Model Blueprint
- `BP-006` — Governance and Legal Blueprint
- `BP-007` — Brand and Market Blueprint
- `BP-008` — Launch and Evolution Blueprint

## Required task-note properties

- `task_id`
- `task_type`
- `status`
- `priority`
- `layer`
- `area`
- `sequence`
- `owner`
- `target_file`
- `dependencies`
- `gap_ids`
- `related_notes`

Blueprint tasks must define concepts and assumptions without presenting them as validated, approved or launch-ready. Relevant gap IDs must be updated as the task evolves.
