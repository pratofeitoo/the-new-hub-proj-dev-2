---
title: P05-T03 — Mapa identidade entre sistemas (chaves canônicas)
task_id: P05-T03
phase: P05
status:
  - on-hold
priority: alta
area: technology
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Tech até 2026-10-15
  - PF Rezende // blocked: aguardando nomeação Dados até 2026-10-15
blocked_reason: aguardando nomeação Tech e Dados
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - TEC-006
dependencies:
  - P03-T02
  - P05-T02
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/mapa-identidade-sistemas-P05-T03-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P05_Tecnologia_Contratual]]"
  - "[[00-project-control/registro-lacunas/lacunas/TEC-006]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M05 — Tecnologia Contratual Aprovada]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/mapa-identidade-sistemas-P05-T03-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv
  - 02-review/pacotes/P05-Tecnologia.md
created: 2026-08-26
tags:
  - task
  - fase-P05
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:07.966-03:00
---

# P05-T03 — Mapa identidade entre sistemas (chaves canônicas)

## Objetivo

Conectar chaves de integração (CRM/ATS/HRIS/ERP) ao modelo canônico `hub_id`/`identity_alias` (P03) e mapear identidade/propriedade entre sistemas externos e HUB — fecha TEC-006 (G05.3).

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/mapa-identidade-sistemas-P05-T03-v1.md` — §1 matriz chaves por sistema + §2 crosswalk `external_id→hub_id` + §3 regras survivorship/reversibilidade + §4 testes integração com dataset P03. Path idêntico a `target_file` e `evidence_required`.

## Acceptance criteria (G05.3 — TEC-006)

- [ ] Mapa identidade publicado em `target_file` §1–§2 com matriz `sistema_externo, external_id, hub_id, source_system, valid_from/to` para cada integração M0 — consome `P03-T01` §6 `identity_alias` e `P03-T02` regras matching; `grep -c "hub_id\|external_id\|source_system" target_file` ≥6
- [ ] Testes de integração demonstram resolução correta de entidades via chaves P03 em dataset sintético (`01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv` — 20 pessoas/12 empresas/15 pares rotulados) — FP≤2% / FN≤5% + reversibilidade `merge→split→re-merge` 100% documentada em §4
- [ ] Matriz system-of-record reconciliada: cada `external_id` tem SoR inequívoco (sem autoridade alternativa oculta) e trilha `identity.merged`/`identity.split` em §3 — `grep -c "system_of_record\|identity.merged\|identity.split" target_file` ≥3

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/mapa-identidade-sistemas-P05-T03-v1.md` (§1 matriz chaves + §2 crosswalk + §3 survivorship/reversibilidade + §4 testes integração)
- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv` (dataset P03-T02 — 20 pessoas/12 empresas/40 aliases/15 pares `pair_label` com `expected_hub_id`)
- `01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md` §3–§5 (regras matching 3-layer + survivorship — dependência P03)
- `02-review/pacotes/P05-Tecnologia.md` §G05.3 (resultado testes integração — PASS/FAIL por par rotulado)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/mapa-identidade-sistemas-P05-T03-v1.md && grep -c "hub_id\|external_id" 01-work/dados-tech-financas/refinamento-modelo-dados/mapa-identidade-sistemas-P05-T03-v1.md | awk '{print ($1>=6)?"PASS crosswalk":"FAIL"}' && grep -c "valid_from\|source_system" 01-work/dados-tech-financas/refinamento-modelo-dados/mapa-identidade-sistemas-P05-T03-v1.md`
- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv && wc -l < 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02.csv | awk '{print ($1>=21)?"PASS dataset":"FAIL"}' && grep -c "FP.*2%\|FN.*5%\|reversibilidade" 01-work/dados-tech-financas/refinamento-modelo-dados/mapa-identidade-sistemas-P05-T03-v1.md`
- [ ] `grep -c "identity.merged\|identity.split\|system_of_record" 01-work/dados-tech-financas/refinamento-modelo-dados/mapa-identidade-sistemas-P05-T03-v1.md | awk '{print ($1>=3)?"PASS SoR+eventos":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P03-T02_Servico_Identidade_Matching|P03-T02]] — serviço identidade 3-layer matching + dataset sintético (G03.A2)
- [[04-project-management/tarefas/P05-T02_Contratos_Integracao|P05-T02]] — contratos M0 + matriz SoR base (G05.2)
- G05.3 (M05 — TEC-006) — `blocking: no` neste lote; piloto usa match manual/curado, full exige FP/FN medido

## Registros

- [[00-project-control/registro-lacunas/lacunas/TEC-006]]
