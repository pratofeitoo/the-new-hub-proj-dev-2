---
title: P03-T01 Gate Folder Pilot — Implementation Plan
description: Executable plan for creating and testing a minimal Open Knowledge gate folder around P03-T01.
type: implementation-plan
status: draft
tags:
  - open-knowledge
  - gate
  - p03-t01
  - pilot
---
## P03-T01 Gate Folder Pilot — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `subagent-driven-development` or `executing-plans` to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Create and validate one minimal Open Knowledge gate folder that bounds the P03-T01 Modelo Lógico/Físico task without modifying existing source documents.

**Architecture:** The gate folder is a deep, special-purpose control plane. Its folder properties define the contract; three inherited templates define artifact shapes; four visible subfolders separate working material, evidence, deliverables, and review. Existing P03 source documents remain read-only inputs. The pilot tests one complete run, not a generalized framework.

**Tech Stack:** Open Knowledge folder properties, Open Knowledge templates, Markdown, Git, existing repository source documents, Open Knowledge MCP tools.

**Assumptions:**

- Assumes the existing Open Knowledge project remains rooted at the repository root — this plan does not change `content.dir`.
- Assumes P03-T01 is a bounded review/validation task around the existing model document — this plan does not implement a new data model.
- Assumes source paths listed below exist — if any source is missing, the gate must enter `blocked` rather than substituting an unapproved source.
- Assumes no source document outside `04-project-management/gates/P03-T01/` may be edited during the pilot — this plan does not cover source correction or lifecycle promotion.

---

## File structure

Create only these pilot artifacts:

```text
04-project-management/gates/P03-T01/
├── .ok/
│   ├── frontmatter.yml
│   └── templates/
│       ├── gate-run.md
│       ├── evidence-register.md
│       └── review-record.md
├── README.md
├── working/
├── evidence/
├── deliverables/
└── review/
```

Responsibilities:

- `.ok/frontmatter.yml`: the gate contract and machine-readable folder metadata.
- `.ok/templates/gate-run.md`: one run's scope, status, sources, changes, blockers, and next action.
- `.ok/templates/evidence-register.md`: source-grounded claims and validation findings.
- `.ok/templates/review-record.md`: exit-criteria evaluation and disposition.
- `README.md`: human-readable gate brief and operating instructions.
- `working/`: temporary bounded artifacts; no canonical output.
- `evidence/`: evidence register instances and supporting verification notes.
- `deliverables/`: the proposed P03-T01 review package.
- `review/`: the review record and final gate disposition.

Do not modify the following existing files:

- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md`
- `01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md`
- `01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md`
- `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md`
- `02-review/02-reconciliacao-blueprint/HUB_Blueprint_Dados_e_Inteligencia.md`

---

### Task 1: Create the gate folder and contract

**Files:**

- Create: `04-project-management/gates/P03-T01/`
- Create: `04-project-management/gates/P03-T01/.ok/frontmatter.yml`
- Create: `04-project-management/gates/P03-T01/README.md`

**Security flag:** none

**Does NOT cover:** This task does not create source copies, edit existing documents, or establish a generic gate framework.

- [ ] **Step 1: Create the gate folder and empty operational subfolders**

Use Open Knowledge folder creation for the gate and its four subfolders. Do not create any files outside the gate folder.

Expected result: the folder overview displays `working`, `evidence`, `deliverables`, and `review` as clickable subfolders.

- [ ] **Step 2: Add gate properties**

Set the gate folder properties to:

```yaml
type: gate
gate_id: P03-T01
task: Modelo Lógico/Físico
status: ready
purpose: Validate and package the P03-T01 logical/physical data model against declared project sources.
entry_criteria:
  - P03-T01 source document is available.
  - Declared dependent source documents are available.
  - The run is authorized to create artifacts only inside this gate folder.
exit_criteria:
  - Run record is complete.
  - Evidence register maps material claims to sources.
  - Output package states supported findings and unresolved gaps.
  - Review record evaluates every criterion.
  - No source document outside this gate was modified.
allowed_paths:
  - 04-project-management/gates/P03-T01/
  - 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md
  - 02-review/02-reconciliacao-blueprint/HUB_Blueprint_Dados_e_Inteligencia.md
forbidden_actions:
  - Edit source documents.
  - Move or rename project documents.
  - Promote or approve the model outside this gate.
  - Repair unrelated repository links.
  - Create artifacts outside this gate folder.
required_artifacts:
  - run-record
  - evidence-register
  - p03-t01-output
  - review-record
```

- [ ] **Step 3: Write the human-readable gate brief**

`README.md` must contain these headings:

```markdown
# Gate P03-T01 — Modelo Lógico/Físico

## Purpose

## Start here

## Allowed sources

## Entry criteria

## Exit criteria

## Forbidden actions

## Required artifacts

## Stop conditions

## Closing the gate
```

The `Start here` section must instruct an agent to read the folder properties, inspect templates, verify entry criteria, create a run record, and stop at `ready_for_review`.

Verification:

```text
Open the folder overview and confirm that its properties, subfolders, and README are visible.
```

Expected result: a new agent can understand the gate without reading the entire repository.

---

### Task 2: Create the three folder templates

**Files:**

- Create: `04-project-management/gates/P03-T01/.ok/templates/gate-run.md`
- Create: `04-project-management/gates/P03-T01/.ok/templates/evidence-register.md`
- Create: `04-project-management/gates/P03-T01/.ok/templates/review-record.md`

**Security flag:** none

**Does NOT cover:** Templates must not authorize source edits, file moves, or automatic approval.

- [ ] **Step 1: Create `gate-run` template**

Use these starting properties:

```yaml
type: gate-run
status: planned
gate_id: P03-T01
```

Use this body:

```markdown
# P03-T01 Gate Run — {{date}}

## Objective

## Operator or agent

## Scope

## Sources read

## Entry criteria

- [ ]

## Status

planned

## Artifacts created

- 

## Files deliberately not changed

- 

## Blockers

- None

## Next action
```

- [ ] **Step 2: Create `evidence-register` template**

Use these starting properties:

```yaml
type: evidence-register
status: draft
gate_id: P03-T01
```

Use this body:

```markdown
# P03-T01 Evidence Register

| Claim or finding | Source path | Evidence location | State | Notes |
|---|---|---|---|---|
|  |  |  | supported / contradicted / unresolved / not-applicable |  |

## Coverage gaps

- None recorded.

## Source conflicts

- None recorded.
```

- [ ] **Step 3: Create `review-record` template**

Use these starting properties:

```yaml
type: review-record
status: draft
gate_id: P03-T01
```

Use this body:

```markdown
# P03-T01 Review Record

## Reviewer or reviewing agent

## Review date

## Exit criteria

- [ ] Run record exists and is complete.
- [ ] Evidence register maps material claims to sources.
- [ ] Output package states supported findings and unresolved gaps.
- [ ] No source document outside the gate was modified.

## Findings

## Unresolved issues

- None recorded.

## Disposition

pending

## Next action
```

Verification:

```text
Open the gate folder and confirm that all three templates appear in Templates available and are offered to agents creating documents below the gate.
```

Expected result: every required artifact can be created from a known shape without inventing a format.

---

### Task 3: Start one bounded P03-T01 run

**Files:**

- Create from template: `04-project-management/gates/P03-T01/working/P03-T01-run-001.md`
- Create from template: `04-project-management/gates/P03-T01/evidence/P03-T01-evidence-001.md`

**Security flag:** none

**Does NOT cover:** The run may not edit, move, rename, or overwrite any source document.

- [ ] **Step 1: Read the gate before acting**

Read:

- the gate folder properties;
- `README.md`;
- the available templates;
- each declared source path.

Record missing or conflicting inputs before analysis.

- [ ] **Step 2: Create the run record from `gate-run`**

Set status to `in_progress`, record the exact source paths read, and state that all source files remain unchanged.

- [ ] **Step 3: Create the evidence register from `evidence-register`**

Map each material validation claim to a source path. Mark unsupported or conflicting claims as `unresolved` or `contradicted`; do not convert them into supported claims by interpretation alone.

Verification:

```text
The run record and evidence register exist under the gate folder, and no file outside the gate has changed.
```

---

### Task 4: Produce the bounded P03-T01 output

**Files:**

- Create: `04-project-management/gates/P03-T01/deliverables/P03-T01-validation-package.md`
- Modify: `04-project-management/gates/P03-T01/working/P03-T01-run-001.md`

**Security flag:** none

**Does NOT cover:** This task does not claim that the model is approved or production-ready.

- [ ] **Step 1: Write the validation package**

The output must contain:

```markdown
# P03-T01 — Modelo Lógico/Físico Validation Package

## Scope

## Source basis

## Supported findings

## Contradictions and gaps

## Dependency impact

## Claims not established by the evidence

## Recommendation

## Required human or governance review
```

The `Recommendation` section must use one of:

- proceed to review
- blocked pending evidence
- revise within gate
- reject current package

- [ ] **Step 2: Update the run status**

Set the run record to `ready_for_review` only when the output and evidence register are complete. Otherwise set it to `blocked` and state the precise missing condition.

Verification:

```text
The output clearly separates supported facts, unresolved gaps, and recommendations. It does not describe proposed or unverified work as implemented fact.
```

---

### Task 5: Review and close the gate

**Files:**

- Create from template: `04-project-management/gates/P03-T01/review/P03-T01-review-001.md`
- Modify: `04-project-management/gates/P03-T01/.ok/frontmatter.yml`
- Modify: `04-project-management/gates/P03-T01/working/P03-T01-run-001.md`

**Security flag:** none

**Does NOT cover:** Approval applies only to this gate package; it does not promote or alter the source model document.

- [ ] **Step 1: Review every exit criterion**

Complete the review record. Every criterion must be checked or explicitly marked failed with an explanation.

- [ ] **Step 2: Choose the disposition**

Use exactly one:

- `approved` — all criteria pass and no unresolved blocking issue remains.
- `blocked` — required evidence or input is missing.
- `rejected` — the package contains a material defect or scope violation.

- [ ] **Step 3: Update the gate status**

Set the folder status and run status to the review disposition. Do not set `approved` merely because the output file exists.

Verification:

```text
The folder overview shows the final status, the review record explains the disposition, and the activity feed identifies the pilot artifacts.
```

---

### Task 6: Verify scope and capture the pilot result

**Files:**

- Modify: `04-project-management/gates/P03-T01/review/P03-T01-review-001.md`

**Security flag:** none

**Does NOT cover:** This task does not generalize the gate or create additional task gates.

- [ ] **Step 1: Verify file scope**

Run:

```bash
git diff --name-only
```

Expected: only the new gate folder files are changed or added; no source document outside the gate appears.

- [ ] **Step 2: Verify Open Knowledge content**

Run a scoped audit against:

```text
04-project-management/gates/P03-T01
```

Expected: the gate artifacts have no new broken internal links or malformed frontmatter.

- [ ] **Step 3: Record pilot findings**

Add a final section to the review record:

```markdown
## Pilot assessment

### Context reduced

### Rework avoided

### Agent deviations prevented or detected

### Missing enforcement

### Recommendation for next gate
```

- [ ] **Step 4: Decide whether to replicate**

Replicate the pattern only if the pilot demonstrates that the folder contract, templates, and review stop reduced cognitive load or prevented scope drift. Otherwise revise or remove the gate before creating another one.

---

## Final verification checklist

- [ ] Gate folder exists at the exact path `04-project-management/gates/P03-T01/`.
- [ ] Folder properties identify the gate and its status.
- [ ] `README.md` explains start, stop, entry, exit, and forbidden actions.
- [ ] Exactly three templates are available.
- [ ] One run record exists.
- [ ] One evidence register exists.
- [ ] One output package exists.
- [ ] One review record exists.
- [ ] All source paths were read but not edited.
- [ ] No files outside the gate were modified.
- [ ] The final status is explicit.
- [ ] The pilot assessment records whether the pattern should be reused.

## Design assessment

This design is currently an **8/10** under the software-design-philosophy criteria. It is deep because one folder hides the procedural complexity of a bounded task run behind a small contract and three artifact templates. It avoids information leakage by keeping source documents authoritative and gate artifacts local. It avoids premature generalization by piloting exactly one task.

To reach 10/10, the pilot must demonstrate that the contract actually changes agent behavior without requiring repeated prompt explanation. If agents still roam the repository, ignore templates, or continue past `ready_for_review`, the next iteration should add stronger tool permissions or automated validation rather than adding more folder metadata.
