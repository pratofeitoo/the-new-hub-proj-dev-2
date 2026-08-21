# Project Map

## Operating model

The repository is managed as one complete business and product system through three layers:

1. **Blueprint** — concepts, assumptions and broad architecture.
2. **Refinement** — research, tests, prototypes, improvements and replacements.
3. **Approval** — evidence-based review, approval, conditional approval or blocking.

Cross-cutting project management, resources, deliverables and archive areas remain outside the three layers.

## Current contents

| Area | Current role |
|---|---|
| `00-project-control/` | Framework, scope, decisions, assumptions, risks, dependencies and indexes. |
| `01-blueprint/` | First strategic draft and source indicator/data architecture. |
| `02-refinement/` | V2 strategy, research and data-model synthesis. |
| `03-approval/` | Unapproved indicator-model material and future approval gates. |
| `04-project-management/` | Central home for plans, tasks, milestones, schedules, logs and status. |
| `05-resources/` | Pitch decks, UI sketches, source materials and reusable assets. |
| `06-deliverables/` | Final outputs once approved for external use. |
| `99-archive/` | Historical and superseded material. |

Primary blueprint foundation: [`HUB_Project_Blueprint_Foundation.md`](01-blueprint/strategy/HUB_Project_Blueprint_Foundation.md).

Cross-cutting gap register: [`HUB_Project_Gap_Register.md`](00-project-control/gap-register/HUB_Project_Gap_Register.md).

Gap Base: [`HUB_Project_Gaps.base`](00-project-control/gap-register/HUB_Project_Gaps.base).

Blueprint task register: [`HUB_Blueprint_Tasks.base`](04-project-management/tasks/HUB_Blueprint_Tasks.base).

## Rules

- Keep plans, tasks and logs centralized in `04-project-management/`.
- Keep source material in `05-resources/`; do not treat it as approved evidence.
- Mark maturity explicitly: `blueprint`, `refining`, `conditionally-approved`, `approved`, `blocked` or `superseded`.
- Connect related artifacts across layers rather than duplicating content.
- Move an artifact backward when approval reveals a gap or contradiction.
