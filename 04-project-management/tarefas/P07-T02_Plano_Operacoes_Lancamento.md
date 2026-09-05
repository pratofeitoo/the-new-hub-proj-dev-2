---
title: P07-T02 — Plano operações de lançamento + runbook release
task_id: P07-T02
phase: P07
status: pendente
priority: critica
area: launch-vision
layer: approval
owner:
  - PF Rezende // blocked: aguardando nomeação Operações até 2026-10-15
  - PF Rezende // blocked: aguardando nomeação Tech até 2026-10-15
blocked_reason: aguardando nomeação Operações + Tech — runbook release
blocked_until: 2026-10-15
gap_ids:
  - LCH-002
dependencies:
  - P05-T07
  - P02-T04
  - P07-T01
target_file: 02-review/portao-lancamento/runbook-release-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[00-project-control/registro-lacunas/lacunas/LCH-002]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]]"
evidence_required:
  - 02-review/portao-lancamento/runbook-release-v1.md
  - 02-review/portao-lancamento/rollback-exercicio-*.log
  - 04-project-management/atas-reuniao/2026-*-review-operacional-P07-T02.md
  - 02-review/portao-lancamento/portao-mestre-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P07
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P07-T02 — Plano operações de lançamento + runbook release

## Objetivo

Definir produto implantável, ambientes, monitoramento, suporte, resposta incidentes e rollback exercitados — plano operacional + runbook release aprovado em review operacional (G07.2 · LCH-002 + TEC-007/G05.7 + PRD-005).

## Entregável

`02-review/portao-lancamento/runbook-release-v1.md` + anexos — produto implantável (`staging` + `prod`), ambientes, monitoramento, suporte, resposta incidentes, rollback — aprovado em `04-project-management/atas-reuniao/*-review-operacional-P07-T02.md` com `DEC-M07` pendente. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G07.2 — LCH-002)

- [ ] **Produto implantável + ambientes + rollback exercitados:** `runbook-release-v1.md` §1–§4 cobre `produto implantável + ambientes (staging/prod) + monitoramento + suporte + resposta incidentes + rollback` — `rollback` com dry-run documentado (`02-review/portao-lancamento/rollback-exercicio-*.log` com `RTO/RPO` medidos e `status=PASS`) aprovado em review operacional com ata
- [ ] **Exercício passa com lançamento só se aprovado:** review operacional registra `PASS` para `deploy → monitoramento → incidente simulado → rollback`; `03-approved/lancamento/` permanece vazio até `DEC-M07` (G07.7 LCH-007 blocking); `runbook` linkado em `portao-mestre-v1.md` (G07.1) com status `aprovado/condicional`
- [ ] **Dependências verificadas sem crítico em blueprint:** `P05-T07` (processo release/rollback — TEC-007/G05.7 blocking) + `P02-T04` (SOPs C.A.O.S.) concluídos em `02-review/aprovado/` ou `em-revisao` com evidência; zero item crítico operacional em `blueprint` em `marcos-fases-v1.md#M07 G07.2`

## Evidence required

- `02-review/portao-lancamento/runbook-release-v1.md` (§1 produto implantável + §2 ambientes staging/prod + §3 monitoramento/suporte/on-call + §4 resposta incidentes + §5 rollback — com `SLOs` de P05-T06)
- `02-review/portao-lancamento/rollback-exercicio-*.log` (dry-run com `timestamp`, `RTO`, `RPO`, `status=PASS`, `rollback_version`)
- `04-project-management/atas-reuniao/2026-*-review-operacional-P07-T02.md` (ata review operacional com `participantes: Operações+Tech+Controle Projeto` + `DEC-M07` draft) + `02-review/portao-lancamento/portao-mestre-v1.md` (`G07.2` marcado)

## Verification

- [ ] `ls 02-review/portao-lancamento/runbook-release-v1.md && grep -c "staging\|produção\|prod\|monitoramento\|rollback\|incidente\|suporte" 02-review/portao-lancamento/runbook-release-v1.md | awk '{print ($1>=6)?"PASS G07.2":"FAIL"}'`
- [ ] `ls 02-review/portao-lancamento/rollback-exercicio-*.log && grep "status=PASS\|RTO.*RPO" 02-review/portao-lancamento/rollback-exercicio-*.log | head -3` — esperado PASS + métrica RTO/RPO
- [ ] `ls 04-project-management/atas-reuniao/*review-operacional*P07-T02*.md && grep -c "aprovado\|condicional\|bloqueado" 02-review/portao-lancamento/portao-mestre-v1.md` — review operacional ata existe + G07.2 refletido no portão mestre

## Dependências

- [[04-project-management/tarefas/P05-T07_Processo_Release_Rollback|P05-T07]] — processo release/rollback + ambientes (TEC-007/G05.7 **blocking: yes**) — sem este gate, G07.2 não passa
- [[04-project-management/tarefas/P02-T04_SOPs_CAOS|P02-T04]] — SOPs C.A.O.S. com dono + SLA (PRD-005) — suporte operacional
- [[04-project-management/tarefas/P07-T01_Portao_Mestre_Grafo|P07-T01]] — portão mestre (G07.1) reflete G07.2; `P07 depende de M06+M04` (marcos-fases-v1.md#M07) — launch só se `M07 Launch Approved`

## Registros

- [[00-project-control/registro-lacunas/lacunas/LCH-002]]
- [[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]] · [[04-project-management/planos-fase/P07_Portao_Lancamento#6. Critérios de saída (gate P07 — Launch Approved)]]
