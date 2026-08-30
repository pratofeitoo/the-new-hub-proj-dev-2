---
title: P03-T09 — Fluxos linhagem/correção/replay/DSAR + reconstrução de XLSX
task_id: P03-T09
phase: P03
status:
  - em-revisao
priority: alta
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
  - Tech (apoio)
gap_ids:
  - DAT-009
  - DAT-010
dependencies:
  - P03-T03
  - P03-T08
target_file: "03-approval/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/"
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-009]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-010]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
---

# P03-T09 — Fluxos linhagem/correção/replay/DSAR + reconstrução de XLSX

## Objetivo
Prototipar fluxos de linhagem/correção/replay/DSAR/portabilidade e reconstruir XLSX a partir dos artefatos disponíveis em `03-csv-corrigido/`, registrando as verificações realizadas.

## Entregável
Fluxos prototipados/testados + XLSX reconstruído com resultados registrados em `06-relatorios-validacao/` (entity-key, roi-recalculation), como insumo para revisão posterior.

## Dependências
- [[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema|P03-T03]]
- [[04-project-management/tarefas/P03-T08_Matriz_Dados_Finalidade|P03-T08]]

## Critério (G03.C4/C5)
Resultados dos testes registrados + XLSX reconstruído para revisão posterior; aprovação, se aplicável, fica para a Camada 3.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-009]] · [[00-project-control/registro-lacunas/lacunas/DAT-010]]

## Execução

- **Entregável produzido:** [[02-refinement/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1|fluxos-linhagem-replay-dsar-P03-T09-v1.md]] — fluxos Mermaid `origem→correção→alias→evento→métrica→valor→dashboard` + `correção` (DAT010-001..004) + `replay` (`run_001→run_002`) + `DSAR` (acesso/exclusão/portabilidade) + `portabilidade`; XLSX [[03-approval/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx|RECONSTRUIDO_P03-T09_v1.xlsx]] (41 campos corrigidos, 15 abas, 73 indicadores).
- **Validações:** `06-relatorios-validacao/entity-key-validation-P03-T09.md` **PASS** (45 entidades, 0 órfão) + `roi-recalculation-P03-T09.md` **PASS reproduzível** (R$1.220k bruto / R$270k líquido / ROI 28,42%) + `corrected-csv-validation-P03-T09.md` **PASS** (15/15 CSVs 16 cols).
- **Resultado:** fluxos prototipados com `run_id` + reconciliação `counts/keys/totals/duplicates`; XLSX reconstruído como insumo **não aprovado**.
- **Próximo:** executar `build_baseline.py` com dados sintéticos e aprovação Dados+Tech+LGPD em `DEC-P03-T09.md` antes de promover.

## Verificação G03.C4/C5 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Fluxos prototipados/testados | ok | §1–5 Mermaid + tabela DSAR |
| XLSX reconstruído | ok | `05-pastas-trabalho-rascunho/RECONSTRUIDO_P03-T09_v1.xlsx` |
| `06-relatorios-validacao` registrados | 3/3 PASS | `entity-key`, `roi-recalculation`, `corrected-csv` |

> **Status:** `em-revisao` — rascunho para validação; `DAT-009/010` abertos até aprovação Camada 3.
