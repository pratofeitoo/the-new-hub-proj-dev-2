---
title: P06-T05 — Modelo de capital (tranches/runway/downside)
task_id: P06-T05
phase: P06
status:
  - on-hold
priority: alta
area: business-model
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Finanças até 2026-10-15
blocked_reason: aguardando nomeação Finanças — FIN-006
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - FIN-006
dependencies:
  - P06-T02
target_file: 01-work/dados-tech-financas/modelos-financeiros/modelo-capital-tranches-P06-T05-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/FIN-006]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/dados-tech-financas/modelos-financeiros/modelo-capital-tranches-P06-T05-v1.md
  - 05-resources/planilhas/HUB_Modelo_Capital_Tranches_P06-T05.xlsx
  - 04-project-management/planos-mestres/HUB_Plano_Fases_v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:19.651-03:00
---

# P06-T05 — Modelo de capital (tranches/runway/downside)

## Objetivo

Modelar necessidade captação, uso recursos, tranches, runway, instrumento e plano downside casado com roadmap (G06.5 / FIN-006).

## Entregável

`01-work/dados-tech-financas/modelos-financeiros/modelo-capital-tranches-P06-T05-v1.md` + `05-resources/planilhas/HUB_Modelo_Capital_Tranches_P06-T05.xlsx` — plano tranches/runway/downside. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.5 — FIN-006)

- [ ] Plano capital com tranches, runway e downside casa com roadmap P01→P07 e capacidade entrega — §1 necessidade+uso recursos, §2 tranches com gatilhos, §3 runway (meses) por cenário P06-T02, §4 instrumento captação, §5 downside; crosswalk a `HUB_Plano_Fases_v1` e `P05-T04` baseline; `grep -c "tranche\|runway\|downside" target_file` ≥3
- [ ] Números reconciliados com P06-T01/T02 — necessidade capital deriva de premissas P06-T01 e cenários P06-T02; sem valor órfão; planilha com fórmulas linkadas e teste `runway = caixa / burn` por cenário
- [ ] Sem projeção além da evidência (BRD-002/GTM-007 blocking: yes) + STR-003 — downside explícito impede apresentar base como garantido; `STR-003` blocking para captação vinculada a tração não evidenciada

## Evidence required

- `01-work/dados-tech-financas/modelos-financeiros/modelo-capital-tranches-P06-T05-v1.md` (§1 necessidade/uso + §2 tranches/gatilhos + §3 runway por cenário + §4 instrumento + §5 downside)
- `05-resources/planilhas/HUB_Modelo_Capital_Tranches_P06-T05.xlsx` (abas por cenário + reconciliação P06-T02)
- `04-project-management/planos-mestres/HUB_Plano_Fases_v1.md` (crosswalk roadmap P01→P07 — tranche ↔ fase)

## Verification

- [ ] `ls 01-work/dados-tech-financas/modelos-financeiros/modelo-capital-tranches-P06-T05-v1.md && grep -c "tranche\|gatilho\|runway" 01-work/dados-tech-financas/modelos-financeiros/modelo-capital-tranches-P06-T05-v1.md | awk '{print ($1>=3)?"PASS tranches":"FAIL"}'`
- [ ] `grep -c "downside\|cenário conservador\|burn" 01-work/dados-tech-financas/modelos-financeiros/modelo-capital-tranches-P06-T05-v1.md | awk '{print ($1>=2)?"PASS downside":"FAIL"}' && ls 05-resources/planilhas/HUB_Modelo_Capital_Tranches_P06-T05.xlsx`
- [ ] `grep -c "P06-T02\|P06-T01\|HUB_Plano_Fases" 01-work/dados-tech-financas/modelos-financeiros/modelo-capital-tranches-P06-T05-v1.md | awk '{print ($1>=2)?"PASS reconciliação roadmap":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P06-T02_Modelo_Financeiro_3_Cenarios|P06-T02]] — 3 cenários reconciliados (G06.2)
- Gate M06: **M03+M04+M05 aprovados** — capital requer capacidade entrega validada (P05 baseline)

## Registros

- [[00-project-control/registro-lacunas/lacunas/FIN-006]]
