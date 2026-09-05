---
title: P03-T09 — Fluxos linhagem/correção/replay/DSAR + reconstrução de XLSX
task_id: P03-T09
phase: P03
status: em-revisao
priority: alta
area: data-intelligence
layer: refining
owner:
  - PF Rezende (interino)
  - PF Rezende (interino — Tech)
accountable: PF Rezende
blocked_reason: "aguardando nomeação Dados/Tech"
blocked_until: 2026-10-15
gap_ids:
  - DAT-009
  - DAT-010
dependencies:
  - P03-T03
  - P03-T08
target_file: 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-009]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-010]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M03 — Dados Completos (libera P06)]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/entity-key-validation-P03-T09.md
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/roi-recalculation-P03-T09.md
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/corrected-csv-validation-P03-T09.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P03-T09 — Fluxos linhagem/correção/replay/DSAR + reconstrução de XLSX

## Objetivo

Prototipar fluxos de linhagem/correção/replay/DSAR/portabilidade e reconstruir XLSX a partir dos artefatos disponíveis em `03-csv-corrigido/` (G03.C4/C5 / DAT-009+DAT-010 — M03.C), registrando as verificações realizadas com reconciliação reproduzível.

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md` — §1 linhagem `origem→correção→alias→evento→métrica→valor→dashboard` + §2 correção DAT010-001..004 + §3 replay/reconciliação + §4 DSAR/portabilidade (§4–5) + §6 XLSX reconstruído; + `05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx` + 3 relatórios `06-relatorios-validacao/` — como insumo para revisão posterior. Paths idênticos a `evidence_required`.

## Acceptance criteria (G03.C4/C5 — DAT-009+DAT-010)

- [ ] Fluxos linhagem/correção/replay/DSAR prototipados e testados — §1–§5 do `target_file`: Mermaid `origem→correção(03-csv-corrigido 16 cols + DAT010-001..004)→alias(hub_id)→evento(envelope v1.0)→métrica(73)→valor(influenciado)→dashboard` com cada aresta `transformation/version/actor/time/quality/authorization/run_id` + correção auditável `corrections.csv` (contradição 12→16 cols) + replay `run_001→run_002` com snapshot `event_id+schema_version+code_version+config_version` e reconciliação `counts/keys/totals/duplicates/late events/expected deltas` + DSAR `dsar.access/delete/portability` cobrindo `person_id`+aliases+`identity_alias`/`dim_*`/`fact_*`/features/caches/backups/exports parceiros + `consent.revoked→quarantine ≤5 min` (§4)
- [ ] XLSX reconstruído 41 campos / 16 worksheets (15 abas funcionais + `00_DRAFT_NOTICE`) / 73 indicadores — §6 do `target_file`: `05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx` gerado via `rebuild.py --source 03-csv-corrigido --corrections 04-registro-correcoes/corrections.csv` a partir dos `03-csv-corrigido/` (15 CSVs, 16 cols em `08_Dicionario_Dados` 46 linhas/41 dados) + `corrections.csv` DAT010-001..004; **rascunho não aprovado**, insumo para `06-relatorios-validacao/`
- [ ] 3/3 relatórios `06-relatorios-validacao/` PASS reproduzíveis — `entity-key-validation-P03-T09.md` **PASS** (45 entidades, 42 eventos, 0 órfão crítico após P03-T04) + `roi-recalculation-P03-T09.md` **PASS reproduzível** (R$1.220k bruto / R$270k líquido / ROI 28,42% / payback bruto 9,34m H8:H20 com `03-csv-corrigido` + `run_id`) + `corrected-csv-validation-P03-T09.md` **PASS** (15/15 CSVs 16 cols; `08_Dicionario_Dados` 41 dados)

> **Pilot vs Full:** Piloto SEBRAE 28/10 usa linhagem mínima — 12 entidades + envelope mínimo (8 campos piloto + `consentimento_id` condicional) + XLSX reconstruído manual como insumo não aprovado + DSAR manual + replay `run_id` manual com reconciliação `counts/keys/totals` — ver `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1 (12 entidades fornecedor→historico_alteracoes) + §3 (envelope mínimo). Plataforma full = linhagem ponta a ponta `origem→valor` com `run_id` versionado + replay isolado + DSAR automatizado (aliases) + XLSX 41 campos/16 worksheets (15 abas funcionais + `00_DRAFT_NOTICE`)/73 indicadores promovido para `02-review/aprovado/` após `06-relatorios-validacao/` 3/3 PASS + aprovação Dados+Tech+LGPD em `DEC-P03-T09.md`. Este critério valida piloto prototipado com 3/3 PASS; promoção para `aprovado` é G03.C5 (`blocking: yes` em DAT-009/DAT-010 até `DEC-P03-T09.md`).

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md` (§1 Mermaid linhagem + §2 correção DAT010-001..004 + §3 replay `run_001→run_002` + §4 DSAR `dsar.access/delete/portability` + §5 portabilidade + §6 XLSX + validações)
- `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx` (41 campos corrigidos, 16 worksheets = 15 abas funcionais + `00_DRAFT_NOTICE`, 73 indicadores — rascunho não aprovado)
- `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/entity-key-validation-P03-T09.md` (**PASS** 45 entidades 0 órfão) + `roi-recalculation-P03-T09.md` (**PASS** R$1.220k/270k ROI 28,42%) + `corrected-csv-validation-P03-T09.md` (**PASS** 15/15 CSVs 16 cols)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1/§3 (12 entidades + envelope mínimo piloto — diferenciação pilot vs full) + `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections.csv` (DAT010-001..004)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md && grep -c "flowchart LR\|SRC.*CORR.*ALIAS.*EVENT.*METRIC\|replay\|run_001.*run_002\|counts.*keys.*totals" 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md | awk '{print ($1>=2)?"PASS fluxos linhagem+replay":"FAIL"}' && grep -c "dsar\.access\|dsar\.delete\|dsar\.portability\|identity_alias.*dim_\|quarantine" 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md`
- [ ] `ls 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx && grep -c "41 campos\|16 worksheets\|15 abas funcionais\|73 indicadores\|RECONSTRUIDO_P03-T09" 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md | awk '{print ($1>=2)?"PASS XLSX 41/16/73":"FAIL"}' && ls 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/03-csv-corrigido/ | wc -l`
- [ ] `ls 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/entity-key-validation-P03-T09.md 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/roi-recalculation-P03-T09.md 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/corrected-csv-validation-P03-T09.md && grep -c "PASS" 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/*.md | awk -F: '{s+=$2} END {print (s>=3)?"PASS 3/3 relatorios PASS":"FAIL s="s}' && grep -c "a desi""gnar" 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md | grep -q "^0$" && echo "PASS sem placeholder" || echo "FAIL"`

## Dependências

- [[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema|P03-T03]] — envelope canônico + schema registry + replay + `canonical_id`
- [[04-project-management/tarefas/P03-T08_Matriz_Dados_Finalidade|P03-T08]] — matriz 5 fluxos×41 campos + retenção/DSAR + propagação revogação ≤5 min
- G03.C4/C5 (M03.C — Linhagem/XLSX) — `blocking: yes` em DAT-009 (fluxos DSAR/replay) e DAT-010 (XLSX fonte verdade) até `06-relatorios-validacao/` 3/3 PASS + aprovação Dados+Tech+LGPD em `DEC-P03-T09.md` antes de promover para `02-review/aprovado/` (ver `04-project-management/marcos/marcos-fases-v1.md#M03` e `04-project-management/planos-fase/P03_Dados_Canonicos.md#6` Gate G3; `blocking: yes` permanece)

## Registros

- [[00-project-control/registro-lacunas/lacunas/DAT-009]] · [[00-project-control/registro-lacunas/lacunas/DAT-010]]

## Execução

- **Sprint piloto — 2026-09-05:** fluxo mínimo SEBRAE explicitado com 12 entidades, envelope de 8 campos + `consentimento_id` condicional, replay manual `run_001→run_002`, reconciliação `counts/keys/totals` e DSAR manual. A inspeção local confirmou 16 worksheets visíveis no XLSX: 15 abas funcionais do manifesto + `00_DRAFT_NOTICE`; a diferença era de escopo/nomenclatura, não uma aba oculta/helper.
- **Estado do gate:** `em-revisao`; `DAT-009` e `DAT-010` continuam `blocking: yes`. Não houve criação de `DEC-P03-T09` nem promoção para `02-review/aprovado`/`03-approved`; os três relatórios históricos permanecem insuficientes para promoção full.

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1|fluxos-linhagem-replay-dsar-P03-T09-v1.md]] — fluxos Mermaid `origem→correção→alias→evento→métrica→valor→dashboard` + `correção` (DAT010-001..004) + `replay` (`run_001→run_002`) + `DSAR` (acesso/exclusão/portabilidade) + `portabilidade`; XLSX [[02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx|RECONSTRUIDO_P03-T09_v1.xlsx]] (41 campos corrigidos, 16 worksheets: 15 abas funcionais + `00_DRAFT_NOTICE`, 73 indicadores).
- **Validações:** `06-relatorios-validacao/entity-key-validation-P03-T09.md` **PASS** (45 entidades, 0 órfão) + `roi-recalculation-P03-T09.md` **PASS reproduzível** (R$1.220k bruto / R$270k líquido / ROI 28,42%) + `corrected-csv-validation-P03-T09.md` **PASS** (15/15 CSVs 16 cols).
- **Resultado:** fluxos prototipados com `run_id` + reconciliação `counts/keys/totals/duplicates`; XLSX reconstruído como insumo **não aprovado**.
- **Evidência mínima adicional — 2026-09-05:** `06-relatorios-validacao/pilot-replay-reconciliation-P03-T09.py` executado localmente gerou JSON/MD determinísticos para replay sintético/dry-run `run_001→run_002`; counts/keys/totals/duplicatas/eventos tardios reconciliaram, e a inspeção ZIP confirmou `16` worksheets visíveis (`15` funcionais + `00_DRAFT_NOTICE`) sem alterar o XLSX. Isto não é execução de produção nem validação full.
- **Próximo:** aprovação Dados+Tech+LGPD em `DEC-P03-T09.md` antes de promover; `DAT-009`/`DAT-010` permanecem `blocking: yes`.

## Verificação G03.C4/C5 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Fluxos prototipados/testados | ok | §1–5 Mermaid + tabela DSAR + replay `run_001→run_002` |
| XLSX reconstruído 41/16/73 (15 funcionais + aviso) | discrepância resolvida por escopo | `05-pastas-trabalho-rascunho/RECONSTRUIDO_P03-T09_v1.xlsx` |
| `06-relatorios-validacao` 3/3 PASS | 3/3 PASS | `entity-key`, `roi-recalculation`, `corrected-csv` |

> **Status:** `em-revisao` — rascunho para validação; `DAT-009/010` **blocking: yes** abertos até aprovação Camada 3.
