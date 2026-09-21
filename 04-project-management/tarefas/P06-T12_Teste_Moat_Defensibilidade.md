---
title: P06-T12 — Teste de defensibilidade (moat institucional + evidência)
task_id: P06-T12
phase: P06
status:
  - on-hold
priority: alta
area: business-model
layer: refining
owner:
  - PF Rezende
  - Tamara // blocked: aguardando nomeação GTM até 2026-10-15
blocked_reason: aguardando nomeação GTM — STR-004/005/006
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - STR-004
  - STR-005
  - STR-006
dependencies:
  - P06-T08
target_file: 01-work/pesquisa-e-confianca/pesquisa/teste-moat-defensibilidade-P06-T12-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/STR-004]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/pesquisa-e-confianca/pesquisa/teste-moat-defensibilidade-P06-T12-v1.md
  - 01-work/pesquisa-e-confianca/pesquisa/portifolio-parceiros-P06-T12-v1.md
  - 01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:28.069-03:00
---

# P06-T12 — Teste de defensibilidade (moat institucional + evidência)

## Objetivo

Testar hipótese moat (distribuição institucional + evidência verificada) + mapear categorias alternativas, orçamentos e posicionamento (G06.12 / STR-004, STR-005, STR-006).

## Entregável

`01-work/pesquisa-e-confianca/pesquisa/teste-moat-defensibilidade-P06-T12-v1.md` + `portifolio-parceiros-P06-T12-v1.md` — moat rebaixado ou sustentado com fontes/ciclos aprendizado. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.12 — STR-004/005/006)

- [ ] Moat rebaixado para `Hipótese` ou sustentado com evidência — §1 teste moat com fontes, ciclos aprendizado e critério falsificação; decisão explícita `REBAIXADO (Hipótese)` ou `SUSTENTADO (Comprovado/Observado)` com ≥2 fontes citadas; `grep -c "REBAIXADO\|SUSTENTADO\|Hipótese" target_file` ≥1 + `grep -c "fonte\|ciclo.*aprendizado\|falsificação" target_file` ≥2
- [ ] Portfólio parceiros + posicionamento categoria mapeados (STR-005/006) — §2 parceiros refinados (papel por canal + dependência) + §3 categorias alternativas/orçamentos compradores com posicionamento vs P06-T08; reconciliado com `P06-T08` log evidências
- [ ] Sem moat além da evidência (BRD-002/GTM-007 blocking: yes) + STR-003 — claim defensibilidade não excede fontes; `STR-003` blocking — sem moat contado como tração/diferencial sem evidência+responsável+decisão interdomínios; rebaixamento documentado quando evidência insuficiente

## Evidence required

- `01-work/pesquisa-e-confianca/pesquisa/teste-moat-defensibilidade-P06-T12-v1.md` (§1 hipótese moat + §2 teste com fontes/ciclos + §3 decisão rebaixado/sustentado + §4 falsificação)
- `01-work/pesquisa-e-confianca/pesquisa/portifolio-parceiros-P06-T12-v1.md` (portfólio parceiros refinado STR-005 + categorias STR-006)
- `01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM-P06-T08-v1.md` (log evidências — base para sustentação moat)

## Verification

- [ ] `ls 01-work/pesquisa-e-confianca/pesquisa/teste-moat-defensibilidade-P06-T12-v1.md && grep -c "REBAIXADO\|SUSTENTADO" 01-work/pesquisa-e-confianca/pesquisa/teste-moat-defensibilidade-P06-T12-v1.md | awk '{print ($1>=1)?"PASS decisão moat":"FAIL"}'`
- [ ] `grep -c "fonte\|ciclo.*aprendizado\|falsificação" 01-work/pesquisa-e-confianca/pesquisa/teste-moat-defensibilidade-P06-T12-v1.md | awk '{print ($1>=2)?"PASS evidência moat":"FAIL"}' && ls 01-work/pesquisa-e-confianca/pesquisa/portifolio-parceiros-P06-T12-v1.md`
- [ ] `grep -c "BRD-002\|GTM-007\|STR-003\|Hipótese" 01-work/pesquisa-e-confianca/pesquisa/teste-moat-defensibilidade-P06-T12-v1.md | awk '{print ($1>=1)?"PASS blocking preservado":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P06-T08_Log_Evidencias_GTM_Alternativas|P06-T08]] — log evidências + matriz alternativas (base evidência moat)
- Gate M06: **M03+M04+M05 aprovados** — moat requer dados+governança+tech validados; `STR-003` blocking para claim defensibilidade como tração

## Registros

- [[00-project-control/registro-lacunas/lacunas/STR-004]] · [[00-project-control/registro-lacunas/lacunas/STR-005]] · [[00-project-control/registro-lacunas/lacunas/STR-006]]
