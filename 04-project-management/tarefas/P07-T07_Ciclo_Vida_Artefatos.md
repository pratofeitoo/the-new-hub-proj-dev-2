---
title: P07-T07 — Ciclo de vida de artefatos + regras de promoção
task_id: P07-T07
phase: P07
status: pendente
priority: alta
area: launch-vision
layer: approval
owner:
  - PF Rezende
gap_ids:
  - LCH-007
dependencies:
  - P07-T01
target_file: 02-review/portao-lancamento/ciclo-vida-artefatos-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[00-project-control/registro-lacunas/lacunas/LCH-007]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]]"
  - "[[00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas]]"
evidence_required:
  - 02-review/portao-lancamento/ciclo-vida-artefatos-v1.md
  - 02-review/portao-lancamento/portao-mestre-v1.md
  - 00-project-control/decisoes/DEC-M07-*.md
  - 02-review/aprovado/
  - 03-approved/lancamento/
created: 2026-08-26
tags:
  - task
  - fase-P07
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P07-T07 — Ciclo de vida de artefatos + regras de promoção

## Objetivo

Definir quando e como `blocked/refining → aprovado/condicionalmente-aprovado → 03-approved/` com trilha de promoção — política ciclo de vida + regras promoção (G07.7 · LCH-007 **blocking: yes** + framework § Regras).

## Entregável

`02-review/portao-lancamento/ciclo-vida-artefatos-v1.md` — política publicada com §1 estados (`blocked`, `refining`, `aprovado`, `condicionalmente-aprovado`, `03-approved`) + §2 regras promoção + §3 retenção pós-MVP + §4 bloqueios `blocked/refining` não citáveis. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G07.7 — LCH-007 · **blocking: yes**)

- [ ] **Status válido + proveniência rastreável:** todo artefato de lançamento em `ciclo-vida-artefatos-v1.md` §1–§2 tem `status válido (blocked/refining → aprovado/condicionalmente-aprovado → 03-approved/) + proveniência (origem → evidência → decisão DEC-M*)`; `grep -c "blocked\|refining\|aprovado\|condicionalmente" 02-review/portao-lancamento/ciclo-vida-artefatos-v1.md` ≥ 4; nenhum artefato sem `status` ou sem `proveniência` — verificado por `grep -c "status:\|proveniência\|DEC-M" ciclo-vida-artefatos-v1.md`
- [ ] **03-approved só pós-aprovação (blocking: yes):** `03-approved/lancamento/` só recebe o que saiu de `02-review/aprovado/` com `DEC-M07` (`P07_Portao_Lancamento §7 G07.7 + HUB_Plano_Fases_v1.md § Registro LCH-007 blocking: yes`); `test -z "$(ls 03-approved/lancamento/ 2>/dev/null)" || (ls 02-review/aprovado/ && ls 00-project-control/decisoes/DEC-M07-*.md)` — **FAIL se 03-approved contém sem DEC-M07**; artefato `blocked/refining` não citável em materiais lançamento, compromissos cliente, alegações financeiras, runbook ou Selo (Blueprint Lancamento § LCH-007)
- [ ] **Regra promoção + reentrada + pós-MVP:** §2 promoção exige `evidência correção + nova revisão` (não só editar frontmatter) para sair de `blocked/refining` — `status não pode ser alterado apenas editando frontmatter`; `bloqueado` registra `evidência faltante + fronteira provisória + autoridade + critérios reentrada`; retenção histórica ampliada e automações ficam `pós-MVP` explicitamente excluídos do gate M07 (§3 `pós-MVP`); `P07 depende de M06+M04` — promoção só com `M06+M04` aprovados

## Evidence required

- `02-review/portao-lancamento/ciclo-vida-artefatos-v1.md` (§1 estados + §2 regras promoção `blocked/refining → aprovado/condicionalmente-aprovado → 03-approved/` + §3 retenção pós-MVP excluída + §4 bloqueios `blocked/refining` não citáveis + §5 reentrada)
- `02-review/portao-lancamento/portao-mestre-v1.md` (`G07.7` marcado `PASS` só com política publicada + `G07.1` sem crítico em blueprint)
- `00-project-control/decisoes/DEC-M07-*.md` (decisão promoção com `template-decisao.md` — trilha `quem/quando/evidência/decisão` por artefato)
- `02-review/aprovado/` (fonte `03-approved/`) + `03-approved/lancamento/` (destino — vazio até aprovação) — verificação `ls` + `git log --follow` (promoção via `git mv`)

## Verification

- [ ] `ls 02-review/portao-lancamento/ciclo-vida-artefatos-v1.md && grep -c "blocked\|refining\|aprovado\|condicionalmente\|03-approved" 02-review/portao-lancamento/ciclo-vida-artefatos-v1.md | awk '{print ($1>=5)?"PASS G07.7":"FAIL"}' && grep -c "proveniência\|proveniencia\|DEC-M" 02-review/portao-lancamento/ciclo-vida-artefatos-v1.md | awk '{print ($1>=2)?"PASS proveniência":"FAIL"}'`
- [ ] `grep -c "blocking: yes\|LCH-007" 02-review/portao-lancamento/ciclo-vida-artefatos-v1.md | awk '{print ($1>=1)?"PASS blocking: yes preservado":"FAIL"}' && test -z "$(ls 03-approved/lancamento/ 2>/dev/null)" && echo "PASS 03-approved vazio até DEC-M07" || (ls 02-review/aprovado/ && ls 00-project-control/decisoes/DEC-M07-*.md && echo "PENDENTE — 03-approved só com DEC-M07")`
- [ ] `grep -c "reentrada\|evidência faltante\|fronteira provisória\|não pode ser alterado apenas editando frontmatter" 02-review/portao-lancamento/ciclo-vida-artefatos-v1.md | awk '{print ($1>=2)?"PASS reentrada":"FAIL"}' && grep -c "pós-MVP\|pos-MVP\|retenção.*ampliada\|automação" 02-review/portao-lancamento/ciclo-vida-artefatos-v1.md | awk '{print ($1>=1)?"PASS pós-MVP excluído":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P07-T01_Portao_Mestre_Grafo|P07-T01]] — portão mestre (G07.1) reflete G07.7; `P07 depende de M06+M04` — ciclo vida só libera com `M06+M04` aprovados (marcos-fases-v1.md#M07)
- LCH-007 **blocking: yes** — `HUB_Plano_Fases_v1.md § Registro LCH-007 | P07 G07.7 | blocking: yes | Todo artefato tem status/proveniência válidos e segue regra promoção até 03-approved/` + `marcos-fases-v1.md#M07 | LCH-007 (blocking: yes no G07.7)` — sem esta política, `M07 Launch Approved` falha por definição
- Framework § Regras (Três Camadas + Blueprint Lancamento): `blocked/refining → aprovado/condicionalmente-aprovado → 03-approved/` + `99-archive/superado` obsoleto (P03 tasks) vs `02-review/aprovado → 03-approved` canônico

## Registros

- [[00-project-control/registro-lacunas/lacunas/LCH-007]] — **blocking: yes**
- [[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]] · [[04-project-management/planos-fase/P07_Portao_Lancamento#6. Critérios de saída (gate P07 — Launch Approved)]] · [[00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas]] · [[02-review/01-blueprint/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao#Quando bloqueado, o responsável registra]]
