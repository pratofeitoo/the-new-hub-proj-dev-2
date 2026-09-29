# Airtable Project Management Cleanup Guide

**Base reviewed:** Project Management (`app18Kb5LQUkv8wy2`)

**Review date:** 2026-09-25

**Workstream status:** COMPLETE — user-confirmed 2026-09-26. The user reports that the remaining fixes in the Airtable base and tables have been completed. Those final user-applied changes were not independently re-audited during closure.

**Review scope:** Read-only review of the live Airtable schema, representative records, views, and automations. No Airtable data was changed or deleted during the review.

## Objective

Clean the Project Management base after external data imports while preserving the operational workflows that are still useful. The primary goals are to:

- Remove or archive import artifacts and unused columns.
- Convert free-text and serialized data into typed Airtable fields.
- Consolidate duplicate relationship fields.
- Normalize statuses and roles.
- Repair or remove failing AI-generated fields.
- Prevent duplicate Calendar → Meetings records.
- Verify the final schema and automation behavior before considering the cleanup complete.

## Initial findings at a glance

At the initial review, the base contained six tables, 41 fields, and 36 records across the reviewed tables. The strongest contamination patterns were:

- Hidden-character `row_id` import fields in Projects and Tasks.
- Duplicate text-versus-linked representations of tasks and projects.
- JSON blobs stored in multiline text fields.
- Dates and attachments stored as untyped text.
- Empty or unused fields retained from templates/imports.
- AI fields returning errors, stale states, or empty dependencies.
- Inconsistent status and role vocabularies.
- Two deployed sets of calendar automations apparently targeting the same calendar.

### Live inventory after migrations — 2026-09-26

The base now contains seven tables, 58 fields, and 67 records. This includes the `Subtasks` table created during cleanup and the populated `Getting started` template table.

## Safety rules

1. Take an Airtable snapshot/export before changing fields or automations.
2. Do not delete a field until its use in automations, interfaces, views, and external imports has been checked.
3. Preserve imported values in an archive/export before removing metadata fields.
4. Treat linked-record fields as the source of truth once migration is complete.
5. Do not call the cleanup complete until the verification checklist at the end passes.

## Phase 0 — Protect the current state

- [ ] Export or snapshot the Project Management base.
- [ ] Record the current table IDs and field IDs.
- [ ] Record the current automation IDs, names, deployment status, and trigger fields.
- [ ] Save a copy of the current records from Projects, Tasks, People, DOCS, and Meetings.
- [ ] Confirm which external import or sync process created the UUID-like `row_id` values.

## Phase 1 — Resolve the duplicate calendar automation risk

### Finding

There are two deployed sets of Google Calendar → Meetings automations:

- `HUB platform` create/update/cancel workflows.
- `Hub calendar` create/update/cancel workflows.

Both were confirmed to use `paulo@divercidade.net`. If both respond to the same calendar events, they can create duplicate Meetings records.

### Steps

- [x] Confirm both automation sets point to `paulo@divercidade.net` and the same create/update/cancel event scope.
- [x] Select `Hub calendar` as the canonical set; retain it deployed.
- [x] Disable the duplicate `HUB platform` create automation first.
- [x] Disable the duplicate `HUB platform` update and cancellation automations.
- [x] Confirm the canonical `Hub calendar` workflows remain deployed and valid.
- [x] Check Meetings for duplicate `Calendar Event ID` values; all six current records have distinct IDs.
- [x] No existing duplicates required resolution; recheck before future imports.

### Acceptance criteria

- Exactly one active create workflow handles each selected calendar.
- Exactly one active update workflow handles each selected calendar.
- Exactly one active cancellation workflow handles each selected calendar.
- Every Meetings record has at most one matching `Calendar Event ID`.

## Phase 2 — Consolidate relationship fields

### Projects: `Tasks` versus `Tasks 2`

**Finding:** `Tasks` is a multiline text field populated in 7/8 Projects records. `Tasks 2` is a linked-record field populated in 6/8 records.

**Target:** Use the linked-record field as the canonical relationship.

### Steps

- [ ] Export the current values from Projects → `Tasks`.
- [ ] Compare each text task reference with the linked records in Projects → `Tasks 2`.
- [ ] Create or match missing Tasks records where appropriate.
- [ ] Add the corresponding linked records to `Tasks 2`.
- [ ] Rename `Tasks 2` to `Tasks` after migration, or otherwise clearly mark it as canonical.
- [ ] Rename the old text field to `Tasks - legacy import` temporarily.
- [ ] Check automations, views, and interfaces for references to the old text field.
- [ ] Delete the legacy field only after verification.

### Projects: `Related Projects` and `From field: Related Projects`

**Finding:** These are self-referential linked-record fields. One is likely the user-facing link and the other is Airtable’s inverse relationship field.

**Target:** Preserve the relationship while avoiding duplicate user-facing columns.

### Steps

- [ ] Confirm which side users should edit.
- [ ] Keep the intended user-facing relationship field.
- [ ] Hide the inverse field from normal views.
- [ ] Do not delete either field until the self-link configuration and inverse-link ID are understood.
- [ ] If the relationship is not needed, export the one populated relationship and then remove the pair through a controlled change.

### People: `Tasks` and `Projects`

**Finding:** People → `Tasks` is empty in 3/3 records. People → `Projects` is free text and populated in only 2/3 records.

**Target:** Use linked records rather than comma-separated names.

### Steps

- [ ] Match the two populated People → `Projects` values to actual Projects records.
- [ ] Add a linked-record field from People to Projects if this relationship is required.
- [ ] Add a linked-record field from People to Tasks if task ownership is required.
- [ ] Migrate valid references.
- [ ] Rename the old text fields to `Tasks - legacy import` and `Projects - legacy import`.
- [ ] Delete the legacy fields after dependency checks.

## Phase 3 — Remove import metadata artifacts

### Projects: hidden-character `row_id`

**Finding:** The field name contains an invisible leading character and the field is populated in 8/8 records with UUID-like values.

### Tasks: hidden-character `row_id`

**Finding:** The same artifact exists in Tasks and is populated in 13/13 records.

### Steps

- [ ] Confirm whether the external import process still uses these UUIDs.
- [ ] Export the values for audit or migration history.
- [ ] Search automations, integrations, scripts, and external documentation for `row_id` references.
- [ ] If no dependency exists, delete both fields.
- [ ] If a stable external identifier is still required, rename them to a clear name such as `External Record ID` and add a description documenting the source.

## Phase 4 — Convert malformed imported values

### Tasks: `Subtask`

**Finding:** The field is multiline text containing serialized JSON such as `{"options":[...],"selected_option_ids":[]}`.

### Recommended target

Use either:

- A linked `Subtasks` table when subtasks need owners, status, dates, or independent tracking; or
- A multiple-select/checklist structure when subtasks are simple options with no independent lifecycle.

### Steps

- [ ] Export and parse the existing JSON values.
- [ ] Decide between a linked Subtasks table and a multiple-select field.
- [ ] Migrate valid option names and relationships.
- [ ] Rename the old field to `Subtask - legacy import`.
- [ ] Delete the legacy field after verifying the migrated values.

### Tasks: `Files & media`

**Finding:** The field is multiline text and contains a serialized attachment object/URL in at least one record.

### Steps

- [ ] Export the existing serialized values.
- [ ] Identify which values refer to valid files.
- [ ] Create or use a real `multipleAttachments` field.
- [ ] Reattach valid files where possible.
- [ ] Store intentional external URLs in a dedicated URL field.
- [ ] Rename the old field to `Files & media - legacy import`.
- [ ] Delete it only after file and link verification.

### Tasks: `Due date`

**Finding:** The field is multiline text and empty in all 13 records.

### Steps

- [ ] Confirm whether due dates exist in an external source.
- [ ] If they do, create a typed `date` field and migrate valid dates.
- [ ] If they do not, remove the empty text field after checking dependencies.
- [ ] Do not store future dates as free-form text.

### Projects and Tasks primary fields

**Finding:** Projects → `Projeto` and Tasks → `Name` are multiline text fields used as primary fields.

### Steps

- [ ] Remove unnecessary line breaks from project and task names.
- [ ] Normalize whitespace and naming conventions.
- [ ] Convert to single-line text where Airtable permits it.
- [ ] If direct conversion is unsafe, create normalized canonical name fields, migrate, and plan a controlled primary-field adjustment in the Airtable UI.

## Phase 5 — Clean unused fields and tables

### People

| Field | Current evidence | Action |
|---|---|---|
| `Photo` | Empty in 3/3 records; exposed read-only on Management → Team | Do not remove until the interface dependency is intentionally revised and the field is confirmed unnecessary |
| `Tasks` | Empty in 3/3 records | Replace with linked records or remove |
| `Bio` | Empty in 3/3 records; exposed editable on Management → Team | Retain or intentionally remove from the interface before considering field removal |
| `Slack DM URL` | Empty in 3/3 records | Remove unless Slack routing is an active workflow |
| `Projects (legacy text)` | Source text filled in 2/3 records; linked `Projects` relationships are migrated and verified | Retain for audit until dependencies are checked, then remove through a supported field-removal path |

### Getting started

**Finding:** The table contains seven populated instructional template records and is used by the `Getting started` interface's `App directory` page.

### Steps

- [ ] Check whether it is used by onboarding, interfaces, automations, or documentation.
- [ ] If unused, archive or delete the table.
- [ ] If retained, rename it to a clear purpose such as `Workspace onboarding`.

### DOCS

| Field | Current evidence | Action |
|---|---|---|
| `Notes` | Empty in 3/3 records | Remove or define as human review notes |
| `Attachment Summary` | AI errors, stale states, or empty dependencies | Repair configuration or replace with a manually reviewed summary field |

### Meetings

| Field | Current evidence | Action |
|---|---|---|
| `Attachments` | Empty in 6/6 records | Retain only if meeting artifacts will be attached |
| `Notes` | Contains whitespace-only values and raw Teams conference text | Trim empty values and normalize provider details |

## Phase 6 — Normalize controlled vocabularies

### Status fields

Current values vary between `Todo`, `to-do`, `In progress`, `In Progress`, `Complete`, and `Done`.

Live option audit (2026-09-26): Projects records now use only `Planning`, `In progress`, and `To do`, but the select still offers unused `In Progress` and `to-do` choices. Meetings records use only `To do`, while the unused `Todo` choice remains. Tasks choices are protected from option cleanup until their Slack automation behavior is checked; People `Role` choices require the taxonomy decision below. Removing the unused Projects/Meetings choices is still pending because the authenticated Airtable field editor currently prompts for a Team-plan upgrade.

### Steps

- [ ] Define a vocabulary separately for Projects, Tasks, DOCS, and Meetings.
- [ ] Use consistent capitalization and spelling.
- [ ] Migrate existing records before removing old options.
- [ ] Update automations and views that filter on status.

Suggested values:

- Projects: `Planning`, `In progress`, `Complete`, `Paused`
- Tasks: `To do`, `In progress`, `Complete`
- DOCS: `Todo`, `In progress`, `Done` or the same task vocabulary
- Meetings: `Scheduled`, `Held`, `Cancelled`

### People roles

User confirmed 2026-09-26 that `People → Role` represents job role. The three current People records use the normalized values `Project manager`, `Developer`, and `Product manager`. The select still contains unused discipline choices (`Engineering`, `Design`, `Product`, `Research`) and capitalization variants (`Project-manager`, `product-manager`, `developer`).

Live dependency check: `Role` is exposed in the Management → Team interface and three add-person forms. The field description now documents the confirmed job-role meaning. Remove the unused discipline and casing variants from the option list when Airtable field editing is available; the current field editor prompts for a Team-plan upgrade, which is not authorized by this cleanup.

### Steps

- [x] Decide whether the field represents role or discipline: user confirmed job role.
- [x] Standardize populated values as `Project manager`, `Product manager`, and `Developer`; all three current records already use these values.
- [ ] Remove unused discipline and legacy capitalization options from `Role` in Airtable's field editor.
- Discipline is outside the current cleanup scope; add a separate `Discipline` field only if the user later requests it.

## Phase 7 — Repair or remove AI fields

### DOCS: `Attachment Summary`

- [ ] Confirm which attachment types are supported by the AI field.
- [ ] Test with a supported attachment.
- [ ] Confirm that the field produces a current result rather than an error or stale state.
- [ ] If it remains unreliable, replace it with a manual summary field.

### Tasks: `Job Title (People)` and `Current Company (People)`

- [ ] Confirm whether People records contain the source data needed for enrichment.
- [ ] If these fields are not part of an active workflow, remove them.
- [ ] If retained, repair the relationship/source dependency and test on representative records.
- [ ] Do not use these fields for reporting until their values are valid and current.

## Final verification checklist

### Schema

- [ ] No unexplained hidden-character field names remain.
- [ ] No operational dates are stored as multiline text.
- [ ] No operational attachments are stored as JSON/text blobs.
- [ ] No duplicate text and linked-record representations remain without a documented reason.
- [ ] Unused fields are removed or explicitly documented as reserved.
- [ ] Primary names are normalized and suitable for sorting and filtering.

### Data

- [ ] All migrated task/project relationships resolve to real Airtable records.
- [ ] No malformed JSON remains in operational fields.
- [x] No duplicate Calendar Event IDs were found in the six current Meetings records (verified 2026-09-26).
- [ ] Whitespace-only values have been cleaned.
- [ ] Status and role values use the approved vocabularies.
- [ ] AI fields do not show stale, empty-dependency, or unsupported-input errors unless intentionally retained for later repair.

### Automations

- [ ] Exactly one canonical calendar create workflow is deployed per selected calendar.
- [ ] Exactly one canonical calendar update workflow is deployed per selected calendar.
- [ ] Exactly one canonical calendar cancellation workflow is deployed per selected calendar.
- [ ] Slack automations still reference the canonical Tasks table and Status field.
- [ ] All automation configurations are valid after field changes.
- [ ] A test record/event confirms expected behavior without duplicate creation.

### Documentation

- [ ] Record the final canonical field names and IDs.
- [ ] Record any retained legacy fields and their planned removal date.
- [ ] Record the selected calendar automation set.
- [ ] Record the final status and role vocabularies.
- [ ] Record any fields intentionally kept empty for a future workflow.

## Definition of done

The cleanup is complete when the base has one clear source of truth for each relationship, typed fields for dates and attachments, no unexplained import artifacts, normalized controlled vocabularies, reliable AI fields or explicit replacements, and one verified automation path for each calendar synchronization workflow.

## Execution log

### 2026-09-25 — Batch 2: reversible import-artifact labeling

- Cleared whitespace-only `Meetings → Notes` values from four records.
- Verified that active automations do not reference the two `row_id` fields or the legacy Projects task-text field.
- Renamed Projects and Tasks hidden-character `row_id` fields to `External Record ID (legacy import)`.
- Added descriptions documenting that these UUIDs are preserved import metadata, not canonical relationship keys.
- Renamed Projects → `Tasks` to `Tasks (legacy import)` and documented that Projects → `Tasks 2` is the linked-record migration target.
- No records were deleted and no legacy fields were removed.
- The duplicate `Hub calendar` automation set remains deployed because the available Airtable API cannot turn active automations off; this still requires disabling the duplicate set in the Airtable UI before deletion.

### 2026-09-25 — Batch 3: Projects task relationship migration

- Compared all eight Projects records against all thirteen Tasks records using exact task names.
- Confirmed that every task named in the legacy Projects text field exists as a Tasks record.
- Added the missing linked task relationships:
  - Adm: `Definir proposta de sociedade` and `Selecionar pack de documentação de projeto padrão`.
  - Financeiro: `Definir proposta de sociedade`, `Validar custos não-hora da planilha`, and `Revisar alinhamento e consistência dos arquivos financeiro`.
- Re-read all Projects records and confirmed that every task named in `Tasks (legacy import)` is now represented in the linked `Tasks 2` field. Existing additional linked tasks were preserved.
- No tasks or projects were deleted. The legacy text field remains for now; field deletion must be done in Airtable after review because the available Airtable connector has no delete-field operation.

### 2026-09-25 — Batch 4: structured subtasks and typed task fields

- Parsed every populated Tasks → `Subtask` JSON value: all 27 checklist items were valid and mapped to existing Tasks records.
- Created a `Subtasks` table with fields for the subtask name, parent task, completion checkbox, and imported option ID.
- Migrated all 27 items and verified 27/27 have a parent task link. The two items marked complete in the source JSON remain checked.
- Renamed the inverse relationship on Tasks to `Subtasks` and the original text field to `Subtask (legacy JSON)`. The source JSON remains intact pending final cleanup.
- Renamed Tasks → `Due date` text column to `Due date (legacy text)`; it was empty in all 13 task records. Added a typed date field, `Due date (date)`, which is currently empty.
- Renamed Tasks → `Files & media` to `Files & media (legacy import)`. Added `Imported file URL` and copied the one source URL out of its JSON value. Verified the legacy source and URL field agree. The file remains hosted at its original AppFlowy URL; no file was downloaded or re-uploaded.
- The API rejected the new field name `Due date` as a duplicate even after the source text field was renamed, so the typed field is explicitly named `Due date (date)`.
- No source JSON, original file metadata, tasks, or projects were deleted.

### 2026-09-25 — Batch 5: normalize populated status and role values

- Projects: normalized stored values `In Progress` → `In progress` and `to-do` → `To do`; retained `Planning` as its distinct project stage.
- DOCS: verified the two populated status values already use `In progress`; one record has no status.
- Meetings: normalized six stored `Todo` values to `To do`, preserving the separate `Calendar Status` field.
- People: normalized stored roles to `Project manager`, `Developer`, and `Product manager`.
- Re-read these tables after the changes and confirmed the stored values.
- Tasks status records were left unchanged because two deployed Slack automations watch the Tasks Status field and would send messages on updates.
- The Airtable connector added the normalized values as choices but did not remove old unused choices. Choice cleanup needs a UI capability; currently unused values include older capitalization/format variants.

### 2026-09-25 — Batch 6: People → Projects relationship

- Created a linked-record `Projects` field on People pointing to the Projects table.
- Migrated PF's four project names and Tams's three project names to links. Marcos had no project value and remains unlinked.
- Re-read all three People records and confirmed every source project name matches a linked Projects record.
- Renamed the comma-separated source field to `Projects (legacy text)` and the linked field to canonical `Projects`.
- Renamed the empty People → `Tasks` text column to `Tasks (unused text)`; it is empty in all three records. Task assignments currently use the collaborator field on Tasks, so there was no safe name-based mapping to People records.
- No records or source values were deleted.

### 2026-09-25 — Batch 7: replace unreliable AI fields with reviewed fields

- Confirmed DOCS → `Attachment Summary` errors on both attached Markdown files with `unsupportedAttachmentType`; the record without an attachment reports `emptyDependency`.
- Renamed the AI field to `Attachment Summary (AI legacy)` and added `Attachment Summary (reviewed)` as a human-reviewed multiline text field.
- Confirmed Tasks → `Job Title (People)` and `Current Company (People)` depend only on collaborator identities and return stale empty or `emptyDependency` states.
- Renamed them to `Job Title (AI legacy)` and `Current Company (AI legacy)`; added `Job Title (verified)` and `Current Company (verified)` as manual single-line fields with source-of-truth descriptions.
- Re-read the schema and confirmed all replacement fields exist with the intended types. The verified fields remain blank until authoritative values are supplied.
- No attachment content was summarized and no task assignee details were inferred; there is no reliable source for those values in the current base.

### 2026-09-25 — Batch 8: project lead links and unused-column labeling

- Confirmed all eight Projects → `Lead` values exactly match a People record (`PF`, `Tams`, or `Marcos`).
- Created Projects → `Project Lead`, linked each of the eight projects to the matching People record, and re-read all rows to confirm each linked name matches its original select value.
- Renamed the source select to `Lead (legacy select)` and retained its values for audit.
- Marked empty columns with explicit names and descriptions: Projects → `Working Team (unused)`; People → `Photo (unused)`, `Bio (unused)`, `Slack DM URL (unused)`; DOCS → `Notes (unused)`; Meetings → `Attachments (unused)`.
- Confirmed Getting started is a populated Airtable template table (7 records with instructional descriptions and screenshots), so it is not an empty import artifact and was left intact.
- Project and Task primary name values are already single-line and contain no line breaks. The Airtable connector cannot change field types; the browser route showed an Airtable security challenge, so type conversion remains open for a normal authenticated UI session.
- No fields or records were deleted.

### 2026-09-25 — Batch 9: canonical Projects → Tasks field name

- Renamed the populated linked-record field `Projects → Tasks 2` to `Projects → Tasks`, making it the clearly named canonical relationship alongside the retained `Tasks (legacy import)` text field.
- Verified the field remains a linked-record field and re-read all eight Projects records; every linked task relationship remained intact.
- The legacy text values remain preserved for audit. Field deletion is still deferred until dependency checks and a supported UI-based removal are available.

### 2026-09-25 — Batch 10: clarify People project-lead inverse link

- Inspected detailed link configuration and confirmed `People → Projects 2` is the inverse of `Projects → Project Lead`, not a duplicate of People → Projects membership.
- Renamed the inverse field to `Projects led` and documented its distinction from general project membership.
- Re-read the People schema and all three People records; existing membership and lead links were unchanged.
- No records or relationships were modified or deleted.

### 2026-09-25 — Batch 11: clarify Projects self-link inverse field

- Confirmed `Projects → Related Projects` and the autogenerated `From field: Related Projects` are reciprocal sides of one self-referential linked-record pair.
- Renamed the inverse side to `Related Projects (inverse)` and documented both fields' paired semantics.
- Re-read all eight Projects records; the existing reciprocal link between MVPs and Gestão de Projeto was preserved.
- No project links or records were changed or deleted.

### 2026-09-26 — Batch 12: correct migrated task-field guidance

- Updated `Projects → Tasks (legacy import)` description to reflect the current state: all populated legacy task references have been migrated to canonical `Projects → Tasks` and verified.
- Confirmed 8 Projects records; 7 contain preserved legacy text and 7 contain linked tasks. The empty project remains empty.
- Kept source text intact for audit. Field deletion remains deferred pending dependency checks and a supported field-removal path.

### 2026-09-26 — Batch 13: clarify Tasks → Projects inverse link

- Verified `Tasks → Related Projects` is the inverse of canonical `Projects → Tasks` by checking both field configurations and their inverse field IDs.
- Renamed the Tasks-side inverse field to `Projects` and added a description explaining that it lists projects containing each task.
- Re-read the field schema and all 13 Tasks records; the linked-record field remains present and every task still has its linked-project membership.
- No records or relationships were modified or deleted.

### 2026-09-26 — Batch 14: correct People interface dependency labels

- Audited the live `Management → Team` interface and found that People → `Photo` is displayed read-only and People → `Bio` is exposed as editable, despite both being empty in all three People records.
- Renamed the fields from `Photo (unused)` and `Bio (unused)` to `Photo` and `Bio`, and documented the live interface dependency and empty-record state.
- Re-read the People records and confirmed the fields remain empty; no records or interface configuration were changed.
- Updated this guide's People field recommendations, corrected the `Getting started` table finding, and added a current base inventory (7 tables, 58 fields, 67 records).

### 2026-09-26 — Batch 15: verify Meetings event-ID uniqueness

- Re-read all six Meetings records and confirmed all six have non-empty, unique `Calendar Event ID` values (6/6 unique; zero duplicate IDs).
- Reconfirmed that both create/update/cancel calendar automation sets are still deployed against `paulo@divercidade.net`; the record-level uniqueness check does not remove the forward-looking duplicate-creation risk.
- Marked the current duplicate-ID checklist item complete. Disabling the duplicate automation set remains a separate Airtable UI action.

### 2026-09-26 — Batch 16: disable duplicate HUB platform calendar workflows

- At the user's direction, turned off `Sync new HUB platform events to Meetings`, `Update Meetings when HUB platform events change`, and `Mark Meetings when HUB platform events are cancelled` in the authenticated Airtable UI.
- Verified the UI showed each workflow OFF and saved, then confirmed via the live automation connector that all three are `undeployed` and configuration-valid.
- Confirmed the three `Hub calendar` create/update/cancel workflows remain deployed and valid; both Tasks → Slack workflows also remain deployed and valid.
- No calendar records, meeting data, or automation configurations were changed.

### 2026-09-26 — Batch 17: document People Role taxonomy dependency

- Inspected the Management → Team interface and all three People add-person forms; each exposes the `Role` field.
- Confirmed the available choices mix job roles with disciplines and include legacy capitalization variants, while the current People records use normalized role values.
- Added a field description documenting the active form/interface use and requiring a role-versus-discipline decision before removing or merging choices.
- Left the choices and records unchanged pending that taxonomy decision.

### 2026-09-26 — Batch 18: correct Subtasks imported spacing

- Audited all 27 migrated Subtasks names for leading, trailing, and repeated whitespace.
- Corrected the sole formatting defect: `Filtrar a lista de documentos  para seleção` → `Filtrar a lista de documentos para seleção`.
- Re-read the record and verified the parent task link and preserved source option ID `StQB` remain unchanged.
- No other Subtask wording, completion states, relationships, or source JSON were changed.

### 2026-09-26 — Batch 19: normalize obvious task-label formatting

- Capitalized three imported Tasks names that began inconsistently in lowercase; corrected `obsidian` to the product name `Obsidian`.
- Capitalized five Subtasks labels and restored the Portuguese accent in `consistência` where it was missing.
- Re-read all eight records. Tasks Status values, Subtasks completion states, source option IDs, and parent-task links remained unchanged; linked Projects/Subtasks displays reflect the updated names.
- Left the ambiguous concatenated text `gravaçãoprint` in another task name unchanged pending source confirmation.

### 2026-09-26 — Batch 20: confirm People Role means job role

- User confirmed `People → Role` represents a job role.
- Re-read all three People records; their values are already the normalized job roles `Project manager`, `Developer`, and `Product manager`, so no record values needed changing.
- Updated and re-read the `Role` field description to state its job-role semantics and exclude disciplines.
- The select still has four unused discipline choices and three legacy capitalization variants. The authenticated Airtable field editor prompts for a Team-plan upgrade; no plan change was made, and removing those choices remains pending.

### 2026-09-26 — Workstream closure: user-confirmed complete

- User confirmed that the remaining pending fixes on the Airtable base and tables have been completed and asked to record progress as complete and close this workstream.
- Status recorded as complete per the user's confirmation. No Airtable changes or independent verification were performed during this closure turn.
- Historical checklist items remain as the implementation plan and prior verification record; this closure entry supersedes them as indicators of open work for this workstream.
- Reopen only if the user requests further cleanup or a new review identifies additional issues.
