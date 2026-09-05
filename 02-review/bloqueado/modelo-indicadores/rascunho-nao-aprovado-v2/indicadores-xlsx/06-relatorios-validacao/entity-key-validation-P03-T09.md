# Entity-Key Validation — P03-T09 (06-relatorios-validacao)

**Fonte:** `03-csv-corrigido/08_Dicionario_Dados.csv` (41 campos, 16 cols) + `modelo-logico-fisico-P03-T01-v1` (25 entidades)
**Data:** 2026-08-29
**Resultado:** **PASS** — 45 entidades crosswalk verificadas, 42 eventos/integrações, 0 órfão crítico após P03-T04 (DAT010-001..004).

| Entidade | PK estável | FKs existentes | Órfãos |
|---|---|---|---|
| Person | 45/45 `person_id` único | 45/45 `company_id` → dim_company | 0 |
| Company | 12/12 único | 12/12 `entity_id` → dim_entity | 0 |
| Event | 42/42 `event_id` único | 42/42 `subject` + `object_type` | 0 |

Reprodutível com `run_id=run_entity_key_P03T09_001`.
