# Current vault profile

Use this reference only when working in the HUB vault that contains these paths:

- `TaskNotes/Views/tasks-default.base`
- `TaskNotes/Views/kanban-default.base`
- `TaskNotes/Views/relationships.base`
- `04-project-management/tarefas/HUB_Tarefas_Projeto.base`
- `04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base`
- `00-project-control/registro-lacunas/HUB_Lacunas_Projeto.base`
- `Canvas Bases/Views/Getting Started.base`
- `00-project-control/escopo/fases-projeto/Fases_Projeto.canvas`

Current conventions:

- Project task notes use `#task`, with phases `P01`–`P07`, Portuguese statuses such as `pendente`, `em-revisao`, `em-execucao`, `bloqueado`, and `concluido`, and properties such as `dependencies` and `gap_ids`.
- Gap notes use `hub/gap`, English values such as `open`, `critical`, `high`, and `medium`, and `related_tasks`.
- `Getting Started.base` is the local Canvas Bases example. Reuse its namespaced `canvasBases*` keys and zone structure.
- `Fases_Projeto.canvas` is a manually authored strategic map. Do not replace it with an operational snapshot unless explicitly requested.
- Existing generated snapshots include `HUB_Tarefas_Projeto.canvas`, `HUB_Execucao_P01-P07.canvas`, and `HUB_Gaps.canvas`; verify before recreating or overwriting them.

When proposing edits, preserve the vault's existing filters and formulas. Keep TaskNotes integration off for project views unless canonical TaskNotes capabilities and values have been confirmed.
