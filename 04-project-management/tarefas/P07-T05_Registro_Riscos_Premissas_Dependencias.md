---
title: P07-T05 — Registro riscos/premissas/dependências operacionalizado
task_id: P07-T05
phase: P07
status: pendente
priority: alta
area: launch-vision
layer: approval
owner:
  - PF Rezende
gap_ids:
  - LCH-005
dependencies:
  - P07-T01
target_file: 00-project-control/riscos/registro-riscos-P07-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[00-project-control/registro-lacunas/lacunas/LCH-005]]"
  - "[[00-project-control/riscos]]"
  - "[[00-project-control/premissas]]"
  - "[[00-project-control/dependencias]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]]"
evidence_required:
  - 00-project-control/riscos/registro-riscos-P07-v1.md
  - 00-project-control/premissas/registro-premissas-P07-v1.md
  - 00-project-control/dependencias/registro-dependencias-P07-v1.md
  - 00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto.md
  - 02-review/portao-lancamento/portao-mestre-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P07
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P07-T05 — Registro riscos/premissas/dependências operacionalizado

## Objetivo

Popular `riscos/`, `premissas/`, `dependencias/` e `registro-lacunas/` com dono, data, limiar, escalonamento e decisão — garantir que todo risco crítico tem tratamento ou bloqueia lançamento (G07.5 · LCH-005).

## Entregável

`00-project-control/riscos/registro-riscos-P07-v1.md` + `00-project-control/premissas/registro-premissas-P07-v1.md` + `00-project-control/dependencias/registro-dependencias-P07-v1.md` — registros operacionalizados com `dono + data + limiar + escalonamento + decisão` por item crítico. Paths idênticos ao frontmatter `target_file` + `evidence_required`.

## Acceptance criteria (G07.5 — LCH-005)

- [ ] **Críticos com dono+data+limiar+tratamento:** todo `risco/premissa/dependência` crítico em `00-project-control/riscos|premissas|dependencias/registro-*-P07-v1.md` tem `dono nominal + data + limiar (threshold) + escalonamento + tratamento/decisão`; `grep -c "dono:\|owner:\|limiar\|threshold" 00-project-control/riscos/registro-riscos-P07-v1.md` ≥ nº críticos; `grep -c "tratamento\|mitigação\|plano\|decisão" 00-project-control/riscos/registro-riscos-P07-v1.md` ≥ nº críticos
- [ ] **Zero crítico sem plano = bloqueia M07:** `grep -i "crítico" 00-project-control/riscos/registro-riscos-P07-v1.md | grep -v "tratamento\|plano\|mitigação" | wc -l` == 0; `P07 depende de M06+M04` — risco crítico em P04 (gov/LGPD) ou P06 (economia) sem tratamento mantém `marcos-fases-v1.md#M07 G07.5` em `bloqueado` e `portao-mestre-v1.md` com `bloqueado`
- [ ] **Rastreabilidade lacunas ↔ riscos:** `00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto.md` linkado a `registro-riscos-P07-v1.md` (todo `LCH-* gap` crítico tem entrada risco correspondente); prensa `G07.5 Riscos com dono+limiar+tratamento` marcado `PASS` em `marcos-fases-v1.md#M07` só com evidência acima

## Evidence required

- `00-project-control/riscos/registro-riscos-P07-v1.md` (§1 riscos críticos com `dono + data + limiar + escalonamento + tratamento` + §2 matriz probabilidade×impacto)
- `00-project-control/premissas/registro-premissas-P07-v1.md` (§1 premissas críticas com `dono + data + limiar + validação` + §2 link a `01-work/dados-tech-financas/modelos-financeiros/registro-premissas-v0.md`)
- `00-project-control/dependencias/registro-dependencias-P07-v1.md` (§1 dependências externas (P01→P06) com `dono + data + limiar + fallback` + §2 grafo `marcos-fases-v1.md#M07 M06+M04`)
- `00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto.md` (§14 Fechamento lacuna — `LCH-005` rastreado) + `02-review/portao-lancamento/portao-mestre-v1.md` (`G07.5` marcado)

## Verification

- [ ] `ls 00-project-control/riscos/registro-riscos-P07-v1.md && grep -c "dono:\|owner:" 00-project-control/riscos/registro-riscos-P07-v1.md | awk '{print ($1>=5)?"PASS dono":"FAIL"}' && grep -c "limiar\|threshold" 00-project-control/riscos/registro-riscos-P07-v1.md | awk '{print ($1>=3)?"PASS limiar":"FAIL"}'`
- [ ] `grep -i "crítico" 00-project-control/riscos/registro-riscos-P07-v1.md | grep -v "tratamento\|plano\|mitigação" | wc -l | awk '{print ($1==0)?"PASS sem crítico sem plano":"FAIL crítico sem tratamento"}' && grep -c "bloqueado\|condicional" 02-review/portao-lancamento/portao-mestre-v1.md`
- [ ] `ls 00-project-control/premissas/registro-premissas-P07-v1.md && ls 00-project-control/dependencias/registro-dependencias-P07-v1.md && grep -c "M06\|M04\|P06\|P04" 00-project-control/dependencias/registro-dependencias-P07-v1.md | awk '{print ($1>=2)?"PASS M06+M04":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P07-T01_Portao_Mestre_Grafo|P07-T01]] — portão mestre (G07.1) reflete G07.5; `P07 depende de M06+M04` — riscos P04/P06 críticos bloqueiam M07
- G07.5 (LCH-005): `Sem risco crítico sem plano` — `marcos-fases-v1.md#M07 G07.5` = `bloqueado` até tratamento evidenciado em `00-project-control/riscos/` + `decisoes/DEC-M07`
- [[00-project-control/riscos]] · [[00-project-control/premissas]] · [[00-project-control/dependencias]] — registros transversais operacionalizados

## Registros

- [[00-project-control/registro-lacunas/lacunas/LCH-005]]
- [[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]] · [[04-project-management/planos-fase/P07_Portao_Lancamento#6. Critérios de saída (gate P07 — Launch Approved)]]
