---
title: P06-T02 — Modelo financeiro 3 cenários (timing/ramp/payback)
task_id: P06-T02
phase: P06
status:
  - on-hold
priority: critica
area: business-model
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Finanças até 2026-10-15
blocked_reason: aguardando nomeação Finanças — FIN-003
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - FIN-003
dependencies:
  - P06-T01
target_file: 01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/FIN-003]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.md
  - 05-resources/planilhas/HUB_Modelo_Financeiro_3Cenarios_P06-T02.xlsx
  - 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:14.960-03:00
---

# P06-T02 — Modelo financeiro 3 cenários (timing/ramp/payback)

## Objetivo

Reconstruir modelo financeiro conservador/base/otimista com timing, ramp, payback benefício líquido, atribuição sem dupla contagem (G06.2 / FIN-003).

## Entregável

`01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.md` + `05-resources/planilhas/HUB_Modelo_Financeiro_3Cenarios_P06-T02.xlsx` — 3 cenários reconciliados com metodologia §1–§4. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.2 — FIN-003)

- [ ] 3 cenários (conservador/base/otimista) com metodologia timing/ramp/payback/atribuição explicitada e aprovada — §1 timing (meses até receita), §2 ramp (% adoção/mês), §3 payback benefício líquido (efeito − custo, não bruto), §4 regra atribuição; reconciliado com `P06-T01` sem premissa órfã; verificado por `grep -c "Conservador\|Base\|Otimista"` ≥3
- [ ] Sem dupla contagem — cada real de receita mapeado a único caminho `atividade produto → valor → receita` (P06-T03) + ledger deduplicado; teste `SUM(receita por caminho) == receita total` em cada cenário; `grep -c "dupla contagem\|deduplicado\|atribuição única"` ≥1
- [ ] Nenhuma projeção excede evidência (BRD-002/GTM-007 blocking: yes) + STR-003 — cenários rotulados por confiança herdada de `P06-T01`; payback ilustrativo não apresentado como validado; `STR-003` blocking até decisão interdomínios para contar projeção como tração

## Evidence required

- `01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.md` (§1 timing + §2 ramp + §3 payback líquido + §4 atribuição + §5 reconciliação P06-T01)
- `05-resources/planilhas/HUB_Modelo_Financeiro_3Cenarios_P06-T02.xlsx` (3 abas cenários + aba reconciliação — fórmulas auditáveis, sem hardcode órfão)
- `01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md` (fonte de premissas — crosswalk de confiança)

## Verification

- [ ] `ls 01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.md && grep -c "Conservador\|Base\|Otimista" 01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.md | awk '{print ($1>=3)?"PASS 3 cenários":"FAIL"}'`
- [ ] `grep -c "payback.*líquido\|benefício líquido\|atribuição" 01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.md | awk '{print ($1>=2)?"PASS metodologia":"FAIL"}' && grep -c "deduplicado\|dupla contagem" 01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.md`
- [ ] `ls 05-resources/planilhas/HUB_Modelo_Financeiro_3Cenarios_P06-T02.xlsx && echo "PASS planilha reconciliada" || echo "FAIL"`

## Dependências

- [[04-project-management/tarefas/P06-T01_Registro_Premissas|P06-T01]] — registro premissas com proveniência (G06.1)
- Gate M06: **M03+M04+M05 aprovados** — sem M03 (dados canônicos), M04 (governança) e M05 (baseline técnico) o modelo permanece hipótese (ver `marcos-fases-v1.md#M06`)

## Registros

- [[00-project-control/registro-lacunas/lacunas/FIN-003]]
