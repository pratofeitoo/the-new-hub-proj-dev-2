---
title: P03-T01 Gate Folder Pilot
description: Product specification for a minimal Open Knowledge gate folder controlling one real P03-T01 task run.
type: product-spec
status: draft
tags:
  - open-knowledge
  - gate
  - p03-t01
  - project-management
---
## P03-T01 Gate Folder Pilot

## Summary

Create a minimal, Open Knowledge-native gate folder for the real P03-T01 — Modelo Lógico/Físico task. The gate gives an agent one bounded place to understand the task, use approved document shapes, record evidence, stop at explicit criteria, and hand off a reviewable result without editing unrelated project material.

## Problem

The current project uses gates as lifecycle checkpoints, but an agent task run can still begin with too much context, invent its own artifact structure, or continue past the point where human review is needed. The pilot should make the gate visible and usable through one folder overview, a small set of templates, and explicit entry and exit rules.

## Goals

- Make the P03-T01 task contract visible before work begins.
- Reduce unnecessary repository-wide exploration during the task run.
- Provide ready-made shapes for the run record, evidence register, and review record.
- Keep all pilot artifacts inside one gate folder.
- Preserve existing source documents as read-only inputs.
- Make blocked, review-ready, approved, and rejected states explicit.
- Leave a trace of what the agent read, produced, and did not change.

## Non-goals

- Redesign the project's lifecycle taxonomy.
- Move or rename the existing P03-T01 source document.
- Modify approved blueprint documents.
- Build a generalized gate framework for every task.
- Automatically enforce permissions outside Open Knowledge or Git.
- Copy all P03 source material into the gate folder.
- Resolve unrelated broken links or repository-wide documentation issues.

## Behavior

1. The gate is represented by one folder at `04-project-management/gates/P03-T01/`. Opening the folder presents its purpose, properties, available templates, subfolders, and activity history in one place.

2. The gate folder identifies itself with properties that a human or agent can read before acting:
   - `type: gate`
   - `gate_id: P03-T01`
   - `task: Modelo Lógico/Físico`
   - `status: ready | in_progress | blocked | ready_for_review | approved | rejected`
   - `purpose`
   - `entry_criteria`
   - `exit_criteria`
   - `allowed_paths`
   - `forbidden_actions`
   - `required_artifacts`

3. Before starting work, the agent must read the gate folder overview and its gate brief. The agent must be able to state the task objective, allowed source paths, forbidden actions, entry criteria, exit criteria, and required artifacts before creating a run record.

4. The gate contains only these operational subfolders:
   - `working/` for temporary reasoning artifacts and intermediate notes.
   - `evidence/` for source-to-claim mappings and verification material.
   - `deliverables/` for the proposed task result or review package.
   - `review/` for the review record and approval decision.

5. Existing repository documents remain inputs. The agent reads them from their original paths and does not copy or edit them as part of the pilot.

6. The initial allowed source paths are:
   - `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md`
   - `01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md`
   - `01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md`
   - `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md`
   - `03-approved/reconciliacao-blueprint/HUB_Blueprint_Dados_e_Inteligencia.md`

7. The gate exposes three document templates:
   - `gate-run` for the run record.
   - `evidence-register` for claims, sources, verification state, and gaps.
   - `review-record` for exit-criteria review and disposition.

8. A run record must identify the objective, start date, operator or agent, declared scope, source paths read, current status, files created, files deliberately not changed, blockers, and next action.

9. The run record follows these states:
   - `planned` before work begins.
   - `in_progress` while bounded analysis is underway.
   - `blocked` when an entry condition, source, or decision is missing.
   - `ready_for_review` when all required artifacts exist and the agent must stop.
   - `approved` only after a review record explicitly accepts the result.
   - `rejected` when the review identifies material defects or scope violations.

10. The agent must stop at `blocked` rather than inventing missing inputs, silently broadening scope, or editing unrelated documents.

11. The agent must stop at `ready_for_review` rather than promoting, moving, renaming, or overwriting the P03-T01 source document.

12. The evidence register must map each material claim or validation finding to one or more source paths and identify whether the claim is supported, contradicted, unresolved, or not applicable.

13. The output artifact must state whether the P03-T01 model is consistent with the declared sources, what gaps remain, and what requires human or governance review. It must not describe proposed work as implemented fact.

14. The review record must evaluate every exit criterion, identify the reviewer or reviewing agent, record the disposition, list unresolved issues, and state whether the gate may be closed.

15. A gate may be considered `approved` only when:

- the run record exists;
- the evidence register exists;
- the output artifact exists;
- every exit criterion has a recorded result;
- unresolved issues are explicitly listed;
- no source document outside the gate was modified.

 1. A failed criterion, missing source, conflicting source, or out-of-scope change moves the gate to `blocked` or `rejected`; it does not get hidden in a free-form note.

 2. All gate artifacts remain inside `04-project-management/gates/P03-T01/`. The gate may link to source documents, but it must not create duplicate copies of those sources.

 3. The folder activity and document history provide the audit trail for gate changes. A reviewer must be able to determine which artifacts were created or edited during the run.

 4. The pilot supports one active run at a time. A second run must either wait for the first run to reach a terminal state or be explicitly identified as a separate run with a separate run record.

 5. Cancellation is safe: an incomplete run may remain in `blocked` or `rejected` state with its partial artifacts preserved, but it must not be represented as approved.

 6. The pilot is successful only if an agent can use the gate folder to complete the bounded review with less repository-wide exploration and with clearer evidence than an unstructured task run.
