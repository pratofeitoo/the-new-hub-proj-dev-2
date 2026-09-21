---
title: P06-T06 — Dicionário KPIs financeiros (ARR/MRR/NRR)
task_id: P06-T06
phase: P06
status:
  - on-hold
priority: alta
area: business-model
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Finanças até 2026-10-15
blocked_reason: aguardando nomeação Finanças — FIN-007
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - FIN-007
dependencies:
  - P06-T01
target_file: 01-work/dados-tech-financas/modelos-financeiros/dicionario-KPIs-financeiros-P06-T06-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/FIN-007]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/dados-tech-financas/modelos-financeiros/dicionario-KPIs-financeiros-P06-T06-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md
  - 00-project-control/decisoes/DEC-P06-T06-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:22.001-03:00
---

# P06-T06 — Dicionário KPIs financeiros (ARR/MRR/NRR)

## Objetivo

Definir ARR/MRR/NRR com denominadores, coortes, timing e ledger fonte verdade (G06.6 / FIN-007).

## Entregável

`01-work/dados-tech-financas/modelos-financeiros/dicionario-KPIs-financeiros-P06-T06-v1.md` — dicionário validado por Finanças com definições operacionais. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.6 — FIN-007)

- [ ] KPIs ARR/MRR/NRR com definições, denominadores, coortes, timing e ledger fonte verdade — §1 ARR (fórmula + anualização), §2 MRR (média vs snapshot), §3 NRR (numerador/denominador + churn), §4 coortes + timing reconhecimento, §5 ledger; cada KPI com owner Finanças; `grep -c "ARR\|MRR\|NRR" target_file` ≥3 + `grep -c "denominador\|coorte\|ledger" target_file` ≥3
- [ ] Certificação Finanças — `DEC-P06-T06-v1.md` assinado por Finanças liberando uso KPIs em `P06-T02/T03/T07`; sem definição alternativa pós-§4 (resolve P03-T05 alternativas MRR/ARR/NRR)
- [ ] Sem definição além da evidência (BRD-002/GTM-007 blocking: yes) — KPI não reportado como realizado sem ledger; `STR-003` não autoriza publicar KPI sem certificação

## Evidence required

- `01-work/dados-tech-financas/modelos-financeiros/dicionario-KPIs-financeiros-P06-T06-v1.md` (§1 ARR + §2 MRR + §3 NRR + §4 coortes/timing + §5 ledger fonte verdade)
- `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` §4 (resolução definições alternativas — referência cruzada)
- `00-project-control/decisoes/DEC-P06-T06-v1.md` (certificação Finanças — gate G06.6)

## Verification

- [ ] `ls 01-work/dados-tech-financas/modelos-financeiros/dicionario-KPIs-financeiros-P06-T06-v1.md && grep -c "ARR\|MRR\|NRR" 01-work/dados-tech-financas/modelos-financeiros/dicionario-KPIs-financeiros-P06-T06-v1.md | awk '{print ($1>=3)?"PASS ARR/MRR/NRR":"FAIL"}'`
- [ ] `grep -c "denominador\|coorte\|ledger\|timing" 01-work/dados-tech-financas/modelos-financeiros/dicionario-KPIs-financeiros-P06-T06-v1.md | awk '{print ($1>=3)?"PASS definições completas":"FAIL"}' && ls 00-project-control/decisoes/DEC-P06-T06-v1.md`
- [ ] `grep -c "a definir\|TBD\|a designar" 01-work/dados-tech-financas/modelos-financeiros/dicionario-KPIs-financeiros-P06-T06-v1.md | grep -q "^0$" && echo "PASS sem placeholder" || echo "FAIL"`

## Dependências

- [[04-project-management/tarefas/P06-T01_Registro_Premissas|P06-T01]] — premissas com confiança (base para KPIs)
- [[04-project-management/tarefas/P03-T05_Catalogo_Metricas_Grafo|P03-T05]] — catálogo 73 métricas + resolução alternativas (MRR/ARR)
- Gate M06: **M03+M04+M05 aprovados**

## Registros

- [[00-project-control/registro-lacunas/lacunas/FIN-007]]
