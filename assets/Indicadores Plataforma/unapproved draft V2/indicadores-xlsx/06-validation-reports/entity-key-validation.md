# Phase 3 — entity, key, event and integration validation

## Scope and decision

- Inputs inspected: corrected copies of sheets `02_Nos_de_Dados`, `03_Conexoes`, `08_Dicionario_Dados`, `09_Eventos_Produto`, and `10_Integracoes`.
- Outputs: `04-correction-register/entity-key-crosswalk.csv` and `04-correction-register/event-integration-crosswalk.csv`.
- `corrections.csv` remains header-only. No corrected CSV was changed because no approved correction exists. Technical identifiers are therefore preserved.
- Crosswalk status `verified` means the source identifier/name and contract shape are represented. It does **not** assert that the external system mapping is provisioned.

## Deterministic checks

| Check | Result | Evidence / rule |
|---|---|---|
| Canonical entity names | PASS | 25 `N01`–`N25` rows; no duplicate `canonical_name`; every source node ID appears once. |
| Relationship identity | PASS | 20 `E01`–`E20` rows; each relationship has a stable bridge key, cardinality, and temporal requirement. |
| Foreign-key target coverage | PASS (declared) | Dictionary PKs (`person_id`, `company_id`, `entity_id`, `skill_id`, `assessment_id`, `event_id`, `opportunity_id`, `match_id`, `model_version_id`, `participation_id`, `contract_id`, `metric_id`, `cohort_id`) are represented by canonical mappings. `object_id` remains domain-polymorphic and requires runtime catalog validation. |
| Event identity/idempotency | PASS (contract) | 27 event rows; every row requires `event_id` and a dedupe rule. `occurred_at` is UTC; ingestion provenance is explicit. |
| Integration-key coverage | PASS (contract) | 15 integration rows; every source has an integration key, authentication, SLA, retry/error handling, quarantine or reconciliation path. |
| Register traceability | PASS | Every crosswalk row has `decision=unchanged`, `status=verified`, and an empty `correction_issue_id`; this is consistent with header-only `corrections.csv`. |
| Source immutability | PASS | Only files under `run-02-execution/30-models/indicadores-xlsx/` and append-only execution log are in scope; `run-01-source/` was read-only. |

## Unresolved values (explicit; do not invent mappings)

1. External IDs are contract placeholders, not confirmed production mappings: `HRIS.person_external_id`, CRM/ATS/SRM/LMS/BI/GRC/ERP provider IDs, and CMP identifiers require system-owner confirmation.
2. `dim_supplier`, `dim_program`, `dim_evidence`, `dim_recommendation`, `dim_benchmark`, `dim_risk`, `dim_content`, `dim_consent`, and bridge-table physical schemas are referenced by the entity model but are not present as rows in sheet 08. They remain unresolved implementation targets.
3. `fact_transaction` has no explicit `transaction_id` row in sheet 08, although it is the canonical node key in sheet 02 and integration sheet 10. Add the dictionary field only through a separately approved correction record.
4. `fact_business_metric` uses `metric_id` while the canonical node uses `business_metric_id`; this is preserved as source terminology. A future alias decision must be registered before any CSV edit.
5. `object_id` is polymorphic in sheet 08; runtime validation must resolve `object_type + object_id` against the domain catalog.
6. Auth, SLA and retry values are stated contracts from sheet 10; credentials, endpoint URLs, measured latency, and retry budgets are not supplied.

## Next gate

The lead may proceed to indicator/financial correction and cross-sheet validation. Before workbook rebuild, obtain owner-approved external key mappings and resolve the dictionary gaps above through new correction records; do not silently rename source fields.
