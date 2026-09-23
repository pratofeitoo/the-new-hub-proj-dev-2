---
title: Canonical Data Model — 25 Entities and Pilot Spine
description: Stable canonical data model (25 entities), temporal conventions, and SEBRAE pilot spine (12 entities).
type: concept
status: current
source_paths:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
  - 02-review/01-blueprint/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md
verified_at: 2026-09-06
open_questions:
  - Physical constraints (FK, unique, valid_from < valid_to, non-overlapping employment) pending implementation across all 25 entities.
  - Glossary aliases (Interação→Event, Conteúdo/campanha→Content/Campaign) pending approval.
---

# Canonical Data Model — 25 Entities and Pilot Spine

> Status: **current summary** of a `rascunho` source set. Sources remain authoritative. Provisional items are flagged explicitly.

## What it is

The canonical model defines **25 entities**, each with a stable `canonical_id` (logical PK), `tenant_id`, `object_type`, and temporal fields (`valid_from`/`valid_to`, plus `occurred_at`/`recorded_at` where relevant). Natural keys (email, fiscal IDs) are aliases in `identity_alias`, never direct join keys.

## The 25 entities

Grouped by family:

- **Identity & organization:** Person, Company, Entity (HUB), Institution, Supplier, Specialist, Relationship
- **Capability & evidence:** Skill, SkillEvidence, Assessment, Cohort
- **Opportunity & interaction:** Opportunity, Need, Match, Introduction, Participation
- **Delivery & offer:** Journey, Program, Solution
- **Commercial & results:** Contract, Transaction, BusinessMetric
- **Governance & intelligence:** Consent, Event, ModelVersion

Operational `N26 Decision` (`decision_id` FLD-021) links alerts/recommendations to human action and value ledger — outside the 25 but required for decision tracking.

## Key rules

- **Stable PK:** every entity has `canonical_id` per G03.A1.
- **Alias table:** `identity_alias` maps `external_id` + `source_system` → `hub_id` (`canonical_id`); joins never use external IDs directly.
- **Temporal convention:** `valid_from` inclusive, `valid_to` exclusive (`NULL` = current); `occurred_at` = world time (UTC), `recorded_at` = ingestion, `observed_at` = evidence collection.
- **LGPD blocker N24 Consent:** reading/using/deriving sensitive data (FLD-005/006/007/028) requires valid `consent_id` with `purpose`, `legal_basis`, `version`, `status`; revocation propagates to derivatives in ≤5 min with CMP audit log.

## Pilot spine (SEBRAE 28/10) — 12 entities

The pilot operates a 12-entity spine; the full 25-entity model remains mandatory for the platform.

| Charter name | Canonical entity | Notes |
|---|---|---|
| fornecedor | Supplier | `supplier_id` |
| comprador | Company | `company_id` |
| oportunidade | Opportunity | FK `company_id` |
| inscricao | Participation | FK `person_id`, `program_id` |
| diagnostico | Assessment | FK `person_id` |
| match | Match | FK `opportunity_id` |
| reuniao | Introduction | FK `match_id` |
| proposta / contrato | Contract | two states of same aggregate |
| receita_reportada | Transaction | FK `contract_id` |
| consentimento | Consent | FK `person_id` |
| historico_alteracoes | Event | `subject_canonical_id` |

## What remains provisional

- The source P03 refinements are `status: rascunho` in `01-work/.../refinamento-modelo-dados/` — not yet promoted to `02-review` or `03-approved`.
- Physical constraints and identity alias population are pending (see `open_questions`).

## Sources

- [Modelo Lógico/Físico v1 — P03-T01](../../01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md)
- [Spine Piloto Mínimo v1](../../01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md)
- [HUB Blueprint — Dados e Inteligência](03_HUB_Blueprint_Dados_e_Inteligencia.md)
