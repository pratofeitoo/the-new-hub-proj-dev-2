---
title: Fluxos Linhagem/Correção/Replay/DSAR + XLSX Reconstruído v1 — P03-T09 (G03.C4/C5)
task_id: P03-T09
phase: P03
status: rascunho
gap_ids:
  - DAT-009
  - DAT-010
created: 2026-08-29
source_task: "[[04-project-management/tarefas/P03-T09_Fluxos_Linhagem_Replay_DSAR]]"
tags:
  - refinement
  - P03
  - DAT-009
---

# Fluxos Linhagem/Correção/Replay/DSAR + XLSX Reconstruído v1 — P03-T09 (G03.C4/C5)

> **Status:** rascunho para validação Dados+Tech · **G03.C4/C5** · Prototipado/testado; XLSX reconstruído como insumo para revisão Camada 3; não aprovado.
> **Depende de:** [[01-work/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|P03-T01 v1]] — `canonical_id`; [[01-work/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1|P03-T03 v1]] — envelope + replay; [[01-work/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1|P03-T08 v1]] — retenção/DSAR.

## 1. Fluxo — Linhagem ponta a ponta

```mermaid
flowchart LR
    SRC[(Fonte CSV<br/>abas-origem 12 cols)] --> CORR[03-csv-corrigido<br/>16 cols + DAT010-001..004]
    CORR --> ALIAS[identity_alias<br/>hub_id]
    ALIAS --> EVENT[fact_event<br/>envelope v1.0]
    EVENT --> METRIC[BusinessMetric<br/>73 indicadores]
    METRIC --> ACTION[Action/Journey]
    ACTION --> OUTCOME[Outcome<br/>time-to-productivity]
    OUTCOME --> VALUE[FinancialValue<br/>influenciado]
    VALUE --> DASH[Dashboard]
    CORR -. correction.csv .-> AUDIT[04-registro-correcoes]
    EVENT -. replay .-> REPLAY[Snapshot run_id]
```

Cada aresta registra `transformation, version, actor, time, quality, authorization, run_id` (ver [[01-work/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1|P03-T06 v1]]).

## 2. Fluxo — Correção (DAT-010)

1. **Detecta:** contradição `abas-origem` (12 cols) vs `03-csv-corrigido` (16 cols) — faltam Retenção/Controle/Consentimento/Evidência.
2. **Registra:** `corrections.csv` com `issue_id=DAT010-001..004`, `source_csv`, `source_row 6-46`, `category=governanca/schema`, `evidence=dicionario-fisico-mapping-P03-T04-v1.md`.
3. **Corrige:** `03-csv-corrigido/08_Dicionario_Dados.csv` adiciona 4 colunas com `60 meses vault`, `RBAC`, `revogação <=5 min`, `ROPA`.
4. **Audit:** `04-registro-correcoes/` preserva original + correção + `approved_at`; nenhuma camada sobrescreve outra silenciosamente.

## 3. Fluxo — Replay / Reconciliação (G03.C4)

- **Snapshot:** `event_id` + `schema_version` + `code_version` + `config_version` imutáveis.
- **Reprocessamento:** novo `run_id` (ex: `run_001 → run_002`) isolado de produção até reconciliação comparar `counts, keys, totals, duplicates, late events, expected deltas`.
- **Teste P03-T09:** `fixtures/identity.merged.v1.0.valid.json` reprocessado com `schema v1.0` → `run_002` deltas idênticos ao `run_001`.

## 4. Fluxo — DSAR / Portabilidade / Exclusão (G03.C4)

| Solicitação | Job | Escopo | Evidência |
|---|---|---|---|
| Acesso | `dsar.access` | `person_id` + aliases + `consent` + `participations` | exporta `person_id`, `external_ids`, `consents`, `participations` com `provenance` |
| Exclusão | `dsar.delete` | `identity_alias`, `dim_person`, `fact_*`, features, caches, índices, backups, exports parceiros | `lifecycle_job` com `valid_to`; agregados compartilhados anonimizados + risco residual |
| Portabilidade | `dsar.portability` | `consent` com finalidade | schema + `provenance` + `valid_from/to` |

Regra: `consent.revoked` → `event consent.revoked` → `quarantine` derivados em ≤5 min (testado em [[01-work/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1|P03-T08 v1]] §3).

## 5. Fluxo — Portabilidade

Exporta `person_id` + `aliases` + `consents` + `outcomes` em JSON com `schema_version`, `occurred_at` e `provenance`; não expõe dado de outro titular.

## 6. XLSX Reconstruído

**Fonte:** `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/03-csv-corrigido/` (15 CSVs, 16 cols em `08_Dicionario_Dados`) + `04-registro-correcoes/corrections.csv` (DAT010-001..004).

**Processo (script `build_baseline.py` adaptado):**

```bash
python3 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/rebuild.py \
  --source 03-csv-corrigido \
  --corrections 04-registro-correcoes/corrections.csv \
  --out 05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx
```

**Saída:** `05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx` (41 campos corrigidos, 15 abas, 73 indicadores) — **rascunho não aprovado**, insumo para `06-relatorios-validacao/`.

**Validações registradas em `06-relatorios-validacao/`:**

| Relatório | Resultado | Evidência |
|---|---|---|
| `entity-key-validation-P03-T09.md` | **PASS** — 45 entidades, 42 eventos verificados, 0 órfão crítico (após P03-T04) | `dim_person.person_id` único, FKs existentes |
| `roi-recalculation-P03-T09.md` | **PASS reproduzível** — benefício bruto R$1.220.000 / líquido R$270.000 / ROI 28,42% / payback bruto 9,34m (H8:H20) | recálculo com `03-csv-corrigido` + `run_id` |
| `corrected-csv-validation-P03-T09.md` | **PASS** — 15/15 CSVs com 16 cols em `08_Dicionario` | `08_Dicionario_Dados` 46 linhas (41 dados) |

## 7. Pendências G03.C4/C5

- [ ] Executar `build_baseline.py` real com dados sintéticos e gerar `06-relatorios-validacao/corrected-csv-validation.json` atualizado.
- [ ] Aprovação Dados+Tech+LGPD deste arquivo + `DEC-P03-T09.md` antes de promover para `02-review/aprovado/`.

## 8. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P03-T09_Fluxos_Linhagem_Replay_DSAR|P03-T09]]
- Gaps: [[00-project-control/registro-lacunas/lacunas/DAT-009]], [[00-project-control/registro-lacunas/lacunas/DAT-010]]
- Base: [[01-work/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|P03-T01 v1]] + [[01-work/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1|P03-T03 v1]] + [[01-work/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1|P03-T08 v1]]
- Blueprint: [[01-work/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia#5. Resolução de identidade, linhagem, consentimento, retenção, exclusão, replay e conceitos de correção|BP-003 §5]]
