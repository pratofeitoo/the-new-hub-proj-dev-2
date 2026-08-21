# Corrected CSV validation — Phase 6

**Run:** `run-02-execution`  
**Scope:** `03-corrected-csv/` and correction registers; source layer was read-only.  
**Decision:** **REJECTED — rebuild gate remains closed pending evidence execution and approvals.**

## Deterministic inventory

- 15 source tabs and 15 corrected tabs were found.
- Corrected row counts (data rows after the title/header preamble): nodes 25, indicators 73, dictionary 41, events 27, integrations 15, governance 23, roadmap 5, RACI 20.
- The corrected layer is byte-identical to source for 00–07 and 13. Tabs 08, 09, 10, 11, 12 and 14 differ from source and are therefore treated as corrected artifacts, not verbatim copies.
- `corrections.csv` has 10 issue rows covering all six differing tabs plus consolidated blocker records. Each changed value has source CSV/row/column, evidence pointer, severity, and status.

## Checks

| Check | Result | Evidence / issue link |
|---|---:|---|
| Source/corrected tab inventory and counts | PASS (15/15 tabs present; 8/15 identical) | `03-corrected-csv/00-manifest/manifest.csv`; deviations require `CORR-REG-001` (missing row-level register) |
| Required headers | PASS for core and operational metadata | Event metadata complete 27/27; integration dependency/publication metadata complete 15/15; governance threshold/window/test fields complete 23/23. Contract evidence is registered; execution artifacts remain pending. |
| Duplicate/missing IDs | PASS | Nodes: 25 IDs, 0 blank, 0 duplicate. Indicators: 73 IDs, 0 blank, 0 duplicate. |
| Foreign keys / entity references | PASS with coverage exception | Entity crosswalk: 45/45 verified, 0 unresolved. Relational references are syntactically populated; event/integration operational metadata remains incomplete (`CORR-REG-002`). |
| Canonical names and key crosswalk | PASS | `entity-key-crosswalk.csv`: 45 rows, 45 `verified`, 45 `unchanged`, 0 missing canonical keys/status. `event-integration-crosswalk.csv`: 42 rows, 42 `verified`, 0 unresolved. |
| Event-property coverage | PASS with evidence exception | 27 event rows; schema/version, ingestion, idempotency and provenance complete 27/27. JSON schema and end-to-end execution evidence remain pending under `CORR-REG-002`. |
| Integration-key coverage | PASS with evidence exception | 15 integration rows have keys and dependency/publication contracts complete 15/15. Readiness/reconciliation execution evidence remains pending under `CORR-REG-002`. |
| Owner coverage | PASS | Indicators 73/73; integrations 15/15; governance 23/23; roadmap 5/5; RACI 20/20 have owner/primary-A values. |
| Sensitivity/legal-basis/retention coverage | PASS with evidence exception | Dictionary has 41/41 sensitivity, legal-basis, and retention values. Governance controls have explicit threshold/window/test contracts 23/23; deletion/access execution evidence and approvals remain pending under `CORR-REG-003`. |
| Formula input coverage | PASS | Indicators 73/73 have non-empty formula and source minimum; crosswalk 73/73 has definition/source/formula fields. |
| Duplicate financial benefits | PASS with governance caveat | No duplicate indicator IDs or duplicate crosswalk IDs (73/73). ROI register has 24 illustrative assumptions; no assumption is evidence-certified. `CORR-REG-004` must remain open until client evidence owner signs off. |
| Roadmap dependencies | PASS with approval exception | Roadmap has 5 rows with measurable dependency/exit evidence contracts. `roadmap-raci-register.csv` retains 12 proposed rows (6 critical, 6 high) pending evidence-backed approval under `CORR-REG-005`. |

## Gate rule

No failed check remains for required metadata, but evidence execution and approval status are not complete. `CORR-REG-001` metadata remediation is complete with pending validation; `CORR-REG-002` and `CORR-REG-003` require operational evidence; `CORR-REG-004` remains explicitly illustrative pending client sign-off; and `CORR-REG-005` remains proposed pending evidence-backed approval. Approval is consequently rejected. No workbook rebuild may start.

## Reproduction

Read each CSV with UTF-8 BOM support; identify the first row whose first cell is the table header; count following non-empty records; count duplicate/blank IDs; compare corrected/source SHA-256 using the paths in `00-manifest/manifest.csv`; and count blank required metadata cells. The resulting machine-readable record is `corrected-csv-validation.json`.
