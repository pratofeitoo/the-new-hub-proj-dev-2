---
title: P07-T03 — Workflow de aprovação + templates pacote revisão
task_id: P07-T03
phase: P07
status:
  - on-hold
priority: critica
area: launch-vision
layer: approval
owner:
  - PF Rezende
gap_ids:
  - LCH-003
dependencies:
  - P07-T01
target_file: 02-review/criterios-aprovacao/workflow-aprovacao-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[00-project-control/registro-lacunas/lacunas/LCH-003]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]]"
evidence_required:
  - 02-review/criterios-aprovacao/workflow-aprovacao-v1.md
  - 02-review/pacotes/P07-Portao-Lancamento.md
  - 00-project-control/decisoes/DEC-M07-*.md
  - 02-review/portao-lancamento/portao-mestre-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P07
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:31.403-03:00
---

# P07-T03 — Workflow de aprovação + templates pacote revisão

## Objetivo

Formalizar autoridade de aprovação, pacote evidências, cadência review, bloqueadores, reentrada e trilha auditoria auditável — workflow + templates auditáveis por terceiro (G07.3 · LCH-003).

## Entregável

`02-review/criterios-aprovacao/workflow-aprovacao-v1.md` + templates `02-review/pacotes/P07-Portao-Lancamento.md` — autoridade por papel (não pessoa), pacote evidências, cadência, bloqueadores, reentrada, trilha auditoria. Paths idênticos ao frontmatter `target_file` + `evidence_required`.

## Acceptance criteria (G07.3 — LCH-003)

- [ ] **Workflow auditável por terceiro:** `workflow-aprovacao-v1.md` §1–§5 define `autoridade nomeada por papel (PF Rezende/controle + Jurídico+Tech+Dados+Finanças co-aprovadores) + pacote evidências (portao-mestre, runbook, matriz, riscos, checklist, ciclo-vida) + cadência review + bloqueadores + reentrada` — pacote `02-review/pacotes/P07-Portao-Lancamento.md` com checklist `G07.1..G07.8` preenchido
- [ ] **Trilha auditoria completa:** todo gate registra `quem aprovou (papel), quando, evidência linkada, decisão` em `00-project-control/decisoes/DEC-M07-*.md` (template `00-project-control/decisoes/template-decisao.md`) — `grep -c "decisão\|aprovad" DEC-M07` ≥ 3; reentrada exige `evidência correção + nova revisão` (não só editar frontmatter)
- [ ] **Bloqueadores e promoção sem atalho:** `03-approved/` bloqueado até `02-review/aprovado/` (G07.7 LCH-007 **blocking: yes**); `condicional` → `DEC-M07` plano remediação; gate não vira formalidade — `aprovação por papel, não por pessoa` + `P07 depende de M06+M04` verificado em `portao-mestre-v1.md`

## Evidence required

- `02-review/criterios-aprovacao/workflow-aprovacao-v1.md` (§1 autoridade por papel + §2 pacote evidências + §3 cadência review + §4 bloqueadores + §5 reentrada + §6 trilha auditoria)
- `02-review/pacotes/P07-Portao-Lancamento.md` (pacote revisão P07 com `G07.1..G07.8` evidências linkadas + checklist integrado)
- `00-project-control/decisoes/DEC-M07-*.md` (decisão Launch Approved — registro votação gate com `atas-reuniao/` correspondente)
- `02-review/portao-lancamento/portao-mestre-v1.md` (`G07.3` marcado `aprovado/condicional/bloqueado`)

## Verification

- [ ] `ls 02-review/criterios-aprovacao/workflow-aprovacao-v1.md && grep -c "autoridade\|papel\|bloqueador\|reentrada\|trilha\|auditoria" 02-review/criterios-aprovacao/workflow-aprovacao-v1.md | awk '{print ($1>=5)?"PASS G07.3":"FAIL"}' && ls 02-review/pacotes/P07-Portao-Lancamento.md`
- [ ] `ls 00-project-control/decisoes/DEC-M07-*.md 2>&1 | head -1 && grep -c "aprovado\|decisão\|DEC-M" 00-project-control/decisoes/DEC-M07-*.md 2>/dev/null | awk '{print ($1>=1)?"PASS trilha":"PENDENTE DEC-M07"}'`
- [ ] `test -z "$(ls 03-approved/lancamento/ 2>/dev/null)" && echo "PASS 03-approved bloqueado até aprovação" || echo "FAIL 03-approved liberado antes de DEC-M07"; grep -c "blocking: yes\|LCH-007" 02-review/criterios-aprovacao/workflow-aprovacao-v1.md`

## Dependências

- [[04-project-management/tarefas/P07-T01_Portao_Mestre_Grafo|P07-T01]] — portão mestre (G07.1) consolida pacotes; `P07 depende de M06+M04` — workflow só aprova se `M06+M04` aprovados
- G07.3 (LCH-003): `aprovação auditável independente` — autoridade por papel + `DEC-M07` com evidência; `reentrada` exige correção evidenciada (P07_Portao_Lancamento §8 Gate vira formalidade)
- G07.7 (LCH-007 **blocking: yes**): `03-approved/` só pós `02-review/aprovado/` — workflow respeita regra promoção (P07-T07)

## Registros

- [[00-project-control/registro-lacunas/lacunas/LCH-003]]
- [[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]] · [[04-project-management/planos-fase/P07_Portao_Lancamento#6. Critérios de saída (gate P07 — Launch Approved)]]
