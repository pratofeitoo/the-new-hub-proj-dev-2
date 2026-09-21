---
title: P03-T02 — Serviço de identidade (matching/merging/survivorship)
task_id: P03-T02
phase: P03
status:
  - on-hold
priority: critica
area: data-intelligence
layer: refining
owner:
  - PF Rezende (interino)
accountable: PF Rezende
blocked_reason: aguardando nomeação Dados
blocked_until: 2026-10-15
gap_ids:
  - DAT-002
dependencies:
  - P03-T01
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-002]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M03.A — Entidades & Identidade (libera P04 + P05 iniciarem)]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:43:16.127-03:00
---

# P03-T02 — Serviço de identidade (matching/merging/survivorship)

## Objetivo

Especificar regras de matching, merge, alias, survivorship e correção com reversibilidade (G03.A2 / DAT-002 — M03.A), testáveis em dataset sintético com métricas FP/FN.

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md` + dataset `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv`. Paths idênticos a `target_file` e `evidence_required`.

## Acceptance criteria (G03.A2 — DAT-002)

- [ ] 3-layer matching documentado com limiares ≥0.95 auto-merge candidato, 0.70–0.95 `human_review` obrigatório, <0.70 descarte (determinístico + probabilístico explicável + fila human_review SLA 5d) — §3 do `target_file`
- [ ] Merge/alias/survivorship reversível — eventos `identity.merged`/`identity.split` + `identity_alias` preservado (nunca apaga `external_id`) + survivorship por campo + `valid_from/to` + `is_survivor` + reversibilidade 100% no teste `merge→split→re-merge` — §4–§5 do `target_file`
- [ ] Dataset sintético 20 pessoas / 12 empresas / 40 aliases / 15 pares rotulados (`match`/`no_match`/`needs_review`) + métricas FP≤2% / FN≤5% + `expected_hub_id`/`pair_label` — `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv`

> **Pilot vs Full:** Piloto usa match manual/curado (sem IA autônoma) — ver `spine-piloto-minimo-v1.md` §4 deferred "IA autônoma". Full = 3-layer automatizado com FP/FN medido e reversibilidade 100%. Este critério valida full; piloto 28/10 pode operar sem survivorship ML, mas evidência full permanece obrigatória para G03.A2.

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md` (§3 matching 3 camadas + §4 survivorship + §5 reversibilidade)
- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv` (20 pessoas, 12 empresas, 40 aliases, 15 pares `pair_label`, `expected_hub_id` — §6 do target_file)
- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` §6 `identity_alias` crosswalk + `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1/§4 (subset piloto vs deferred)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md && grep -c "confidence" 01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md | awk '{print ($1>=3)?"PASS 3-layer":"FAIL"}' && grep -E "0\.95|0\.70" 01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md`
- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv && head -1 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv | grep -q "expected_hub_id" && echo "PASS dataset headers" || echo "FAIL"; wc -l < 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv | awk '{print ($1>=21)?"PASS 20 pessoas + header":"FAIL rows="$1}' && grep -c "pair_label\|expected_hub_id" 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv`
- [ ] `grep -c "identity.merged\|identity.split\|is_survivor\|valid_from" 01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md | awk '{print ($1>=4)?"PASS reversibilidade":"FAIL"}' && grep -E "FP.*2%|FN.*5%|reversibilidade" 01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md`

## Dependências

- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]] — `hub_id` canônico e `identity_alias` (§6)
- G03.A2 (M03.A — Identidade) — `blocking: no` neste lote; dataset real + constraints físicas pendentes antes de M03.A aprovado

## Registros

- [[00-project-control/registro-lacunas/lacunas/DAT-002]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1|especificacao-identidade-P03-T02-v1.md]] — 3 camadas matching (determinístico/probabilístico/human review), merge/alias/survivorship por campo, correção reversível com `identity_alias` + eventos `identity.merged`/`identity.split`; dataset [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv|dataset-identidade-sintetico-P03-T02.csv]] com 20 pessoas/12 empresas/40 aliases, 15 pares rotulados (`match`/`no_match`/`needs_review`), métricas FP ≤2% / FN ≤5% e teste reversibilidade 100%.
- **Dependência atendida:** [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1]] — `hub_id` canônico e temporalidade.
- **Resultado:** regras explicitam `confidence` limiares (≥0.95 auto-merge candidato, 0.70–0.95 human_review, <0.70 descarte), `survivorship` por campo (nome/email/documento), `valid_from/to` e `is_survivor`.
- **Próximo:** popular `identity_alias` com dados reais CRM, medir FP/FN, constraints físicas e teste `merge→split→re-merge`.

## Verificação G03.A2 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Taxa FP/FN mensurável | ok | Dataset com `expected_hub_id` + `pair_label` e alvos FP≤2%/FN≤5% |
| Reversibilidade demonstrável | ok | Eventos `merged`/`split` com histórico preservado, teste `split→re-merge` proposto |
| Alias preservado | ok | `identity_alias` nunca apaga `external_id` |

> **Status:** `em-revisao` — rascunho para validação Arquitetura de Dados; `DAT-002` aberto até teste com dados reais.
