---
title: P06-T08 — Log evidências GTM + análise alternativas (buyer-ranked)
task_id: P06-T08
phase: P06
status:
  - on-hold
priority: alta
area: gtm
layer: refining
owner:
  - Tamara // blocked: aguardando nomeação GTM até 2026-10-15
blocked_reason: aguardando nomeação GTM — GTM-002/004
blocked_until: 2026-10-15
accountable: Tamara
gap_ids:
  - GTM-002
  - GTM-004
dependencies:
  - P01-T05
target_file: 01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/GTM-002]]"
  - "[[00-project-control/registro-lacunas/lacunas/GTM-004]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md
  - 01-work/pesquisa-e-confianca/pesquisa/matriz-alternativas-buyer-ranked-P06-T08-v1.md
  - 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:23.566-03:00
---

# P06-T08 — Log evidências GTM + análise alternativas (buyer-ranked)

## Objetivo

Consolidar log por rota com evidência e conduzir análise comparativa vs alternativas ranqueada pelo comprador (G06.8/G06.9 / GTM-002, GTM-004).

## Entregável

`01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md` + `matriz-alternativas-buyer-ranked-P06-T08-v1.md` — log por rota + matriz comparativa sobrevivendo a review. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.8/G06.9 — GTM-002/GTM-004)

- [ ] Nenhuma rota GTM contada como tração sem log evidência (G06.8 / GTM-002) — cada rota §1 do `target_file` com `evidência (acordo escrito/entrevista/dado) + data + status (Hipótese/Observado/Comprovado)`; parceiro sem acordo escrito = `Hipótese`; `grep -c "Hipótese\|Observado\|Comprovado" target_file` ≥ n_rotas
- [ ] Posicionamento vs alternativas sobrevive a review comparativa buyer-ranked (G06.9 / GTM-004) — matriz `buyer-ranked` §2 com critérios ranqueados pelo comprador (preço, integração, suporte, compliance), HUB vs ≥2 alternativas nomeadas; review assinado em `matriz-alternativas-buyer-ranked-P06-T08-v1.md` §3
- [ ] Sem rota além da evidência (BRD-002/GTM-007 blocking: yes) + STR-003 — rotas `Hipótese` não entram em pipeline P06-T02/T07; `STR-003` blocking até evidência+responsável+decisão para contar rota como canal ativo

## Evidence required

- `01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md` (§1 log por rota com evidência/data/status + §2 fallback por rota + §3 reconciliação com P06-T07)
- `01-work/pesquisa-e-confianca/pesquisa/matriz-alternativas-buyer-ranked-P06-T08-v1.md` (§1 critérios buyer-ranked + §2 HUB vs alternativas + §3 resultado review comparativo)
- `01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md` (premissa demanda por rota — crosswalk)

## Verification

- [ ] `ls 01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md && grep -c "Hipótese\|Observado\|Comprovado" 01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md | awk '{print ($1>=3)?"PASS log por rota":"FAIL"}'`
- [ ] `ls 01-work/pesquisa-e-confianca/pesquisa/matriz-alternativas-buyer-ranked-P06-T08-v1.md && grep -c "buyer-ranked\|alternativa\|critério" 01-work/pesquisa-e-confianca/pesquisa/matriz-alternativas-buyer-ranked-P06-T08-v1.md | awk '{print ($1>=2)?"PASS matriz comparativa":"FAIL"}'`
- [ ] `grep -c "sem acordo.*Hipótese\|não.*tração" 01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md | awk '{print ($1>=1)?"PASS parceiro=hipótese sem acordo":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P01-T05_Log_Evidencias_GTM|P01-T05]] — log evidências inicial P01 (seed)
- [[04-project-management/tarefas/P06-T07_Modelo_Mercado_BottomUp|P06-T07]] — universo bottom-up (referência implícita para demanda)
- Gate M06: **M03+M04+M05 aprovados**

## Registros

- [[00-project-control/registro-lacunas/lacunas/GTM-002]] · [[00-project-control/registro-lacunas/lacunas/GTM-004]]
