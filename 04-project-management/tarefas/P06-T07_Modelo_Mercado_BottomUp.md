---
title: P06-T07 — Modelo de mercado bottom-up (contas nomeadas)
task_id: P06-T07
phase: P06
status:
  - on-hold
priority: alta
area: gtm
layer: refining
owner:
  - Tamara // blocked: aguardando nomeação GTM até 2026-10-15
blocked_reason: aguardando nomeação GTM — GTM-005
blocked_until: 2026-10-15
accountable: Tamara
gap_ids:
  - GTM-005
dependencies:
  - P01-T04
target_file: 01-work/pesquisa-e-confianca/pesquisa/modelo-mercado-bottomup-P06-T07-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/GTM-005]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/pesquisa-e-confianca/pesquisa/modelo-mercado-bottomup-P06-T07-v1.md
  - 05-resources/conjuntos-dados/modelo-mercado-bottomup-P06-T07.xlsx
  - 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:36.953-03:00
---

# P06-T07 — Modelo de mercado bottom-up (contas nomeadas)

## Objetivo

Construir universo de contas nomeadas, alcançabilidade, ACV, premissas ativação/renovação — sem TAM top-down (G06.7 / GTM-005).

## Entregável

`01-work/pesquisa-e-confianca/pesquisa/modelo-mercado-bottomup-P06-T07-v1.md` + `05-resources/conjuntos-dados/modelo-mercado-bottomup-P06-T07.xlsx` — modelo transparente com testes sensibilidade. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.7 — GTM-005)

- [ ] Modelo mercado bottom-up transparente com contas nomeadas — universo nomeado (CNPJ/razão), alcançabilidade (%), ACV por segmento, taxa ativação/renovação; §1 universo + §2 ACV + §3 ativação/renovação; zero TAM top-down sem Decomposição; `grep -c "CNPJ\|conta nomeada\|ACV" target_file` ≥3
- [ ] Testes de sensibilidade por cenário — §4 sensibilidade (variação ACV ±20%, ativação ±15%, renovação ±10%) com impacto receita nos 3 cenários P06-T02; reconciliado com `P06-T01` premissas e `P06-T06` KPIs
- [ ] Sem mercado além da evidência (BRD-002/GTM-007 blocking: yes) + STR-003 — contas sem evidência permanecem `Hipótese`; nenhum TAM apresentado como validado; `STR-003` blocking para contar mercado endereçável como pipeline

## Evidence required

- `01-work/pesquisa-e-confianca/pesquisa/modelo-mercado-bottomup-P06-T07-v1.md` (§1 universo contas nomeadas + §2 ACV/segmento + §3 ativação/renovação + §4 sensibilidade + §5 reconciliação P06-T01/T02)
- `05-resources/conjuntos-dados/modelo-mercado-bottomup-P06-T07.xlsx` (planilha contas nomeadas — com CNPJ, ACV, alcançabilidade)
- `01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md` (premissa ACV/ativação com proveniência)

## Verification

- [ ] `ls 01-work/pesquisa-e-confianca/pesquisa/modelo-mercado-bottomup-P06-T07-v1.md && grep -c "conta nomeada\|CNPJ\|ACV" 01-work/pesquisa-e-confianca/pesquisa/modelo-mercado-bottomup-P06-T07-v1.md | awk '{print ($1>=3)?"PASS bottom-up":"FAIL"}'`
- [ ] `grep -c "sensibilidade\|cenário.*conservador\|alcance\|ativação" 01-work/pesquisa-e-confianca/pesquisa/modelo-mercado-bottomup-P06-T07-v1.md | awk '{print ($1>=2)?"PASS sensibilidade":"FAIL"}' && ls 05-resources/conjuntos-dados/modelo-mercado-bottomup-P06-T07.xlsx`
- [ ] `grep -c "TAM top-down" 01-work/pesquisa-e-confianca/pesquisa/modelo-mercado-bottomup-P06-T07-v1.md | awk '{print ($1>=1)?"CHECK top-down justificado":"PASS sem top-down inflado"}'`

## Dependências

- [[04-project-management/tarefas/P01-T04_Segmentos_Orcamentos_Compradores|P01-T04]] — segmentos + orçamentos compradores aprovados
- Gate M06: **M03+M04+M05 aprovados** — mercado bottom-up requer dados canônicos + governança; `STR-003` blocking para projeções comerciais

## Registros

- [[00-project-control/registro-lacunas/lacunas/GTM-005]]
