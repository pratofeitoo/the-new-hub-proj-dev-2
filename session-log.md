## 2026-09-02 16:00 [saved]
Goal: Create and deliver a reusable Canvas Bases expert workflow for the HUB vault.
Decisions:
- Keep Bases responsible for result membership; Canvas Bases owns spatial state, preserving query semantics.
- Provide both live `canvas-bases` views and JSON Canvas snapshots because they serve different workflows.
- Install the skill project-scoped and globally to support vault-specific and cross-project use.
- Keep TaskNotes mode off until canonical statuses and runtime capabilities are confirmed.
Rejected: Do not overwrite the manually authored strategic `Fases_Projeto.canvas`; do not stage unrelated vault changes.
Open: Verify live behavior inside Obsidian; global skill remains outside GitHub.
