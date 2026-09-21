---
title: P06-T09 — Estratégia de canais + limites de concentração
task_id: P06-T09
phase: P06
status:
  - on-hold
priority: alta
area: gtm
layer: refining
owner:
  - Tamara // blocked: aguardando nomeação GTM até 2026-10-15
  - PF Rezende // blocked: aguardando nomeação Governança até 2026-10-15
blocked_reason: aguardando nomeação GTM e Governança — GTM-003/006
blocked_until: 2026-10-15
accountable: Tamara
gap_ids:
  - GTM-003
  - GTM-006
dependencies:
  - P01-T06
target_file: 01-work/pesquisa-e-confianca/pesquisa/estrategia-canais-concentracao-P06-T09-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/GTM-003]]"
  - "[[00-project-control/registro-lacunas/lacunas/GTM-006]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/pesquisa-e-confianca/pesquisa/estrategia-canais-concentracao-P06-T09-v1.md
  - 00-project-control/decisoes/DEC-P06-T09-v1.md
  - 01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:24.669-03:00
---

# P06-T09 — Estratégia de canais + limites de concentração

## Objetivo

Propor sequenciamento de canais (direto, institucional, parceiros) com fallback e thresholds de concentração para revisão por governança (G06.8 / GTM-003, GTM-006).

## Entregável

`01-work/pesquisa-e-confianca/pesquisa/estrategia-canais-concentracao-P06-T09-v1.md` + `DEC-P06-T09-v1.md` — estratégia diversificada com limites aprovados. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.8 — GTM-003/GTM-006)

- [ ] GTM diversificado e mensurável com fallback — §1 sequenciamento canais (direto→institucional→parceiros) com critérios entrada/saída por canal + §2 fallback por canal (se parceiro falha, rota reserva com evidência); nenhum canal único >60% receita sem mitigação; `grep -c "fallback\|sequenciamento" target_file` ≥2
- [ ] Limites concentração aprovados por Governança (G06.8 / GTM-006) — §3 thresholds exposição (max % receita por parceiro/canal, gatilho review); `DEC-P06-T09-v1.md` assinado por Governança+GTM; `grep -c "limite.*%\|threshold\|exposição" target_file` ≥2
- [ ] Sem concentração além da evidência (BRD-002/GTM-007 blocking: yes) + STR-003 — canal `Hipótese` não conta para diversificação; `STR-003` blocking para comprometer concentração sem decisão interdomínios

## Evidence required

- `01-work/pesquisa-e-confianca/pesquisa/estrategia-canais-concentracao-P06-T09-v1.md` (§1 sequenciamento canais + §2 fallback + §3 limites concentração + §4 métricas diversificação)
- `00-project-control/decisoes/DEC-P06-T09-v1.md` (aprovação Governança — gate G06.8)
- `01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md` (§1 log evidência — base para fallback)

## Verification

- [ ] `ls 01-work/pesquisa-e-confianca/pesquisa/estrategia-canais-concentracao-P06-T09-v1.md && grep -c "canal\|fallback\|diversificação" 01-work/pesquisa-e-confianca/pesquisa/estrategia-canais-concentracao-P06-T09-v1.md | awk '{print ($1>=3)?"PASS estratégia":"FAIL"}'`
- [ ] `grep -c "limite.*%\|threshold\|exposição.*%" 01-work/pesquisa-e-confianca/pesquisa/estrategia-canais-concentracao-P06-T09-v1.md | awk '{print ($1>=2)?"PASS limites":"FAIL"}' && ls 00-project-control/decisoes/DEC-P06-T09-v1.md`
- [ ] `grep -c "Governança.*aprov\|GTM.*aprov" 00-project-control/decisoes/DEC-P06-T09-v1.md | awk '{print ($1>=1)?"PASS aprovação":"FAIL G06.8 bloqueado"}'`

## Dependências

- [[04-project-management/tarefas/P01-T06_Limites_Concentracao_Parceiros|P01-T06]] — limites concentração parceiros (seed P01)
- [[04-project-management/tarefas/P06-T08_Log_Evidencias_GTM_Alternativas|P06-T08]] — log evidências + alternativas (base para fallback)
- Gate M06: **M03+M04+M05 aprovados**

## Registros

- [[00-project-control/registro-lacunas/lacunas/GTM-003]] · [[00-project-control/registro-lacunas/lacunas/GTM-006]]
