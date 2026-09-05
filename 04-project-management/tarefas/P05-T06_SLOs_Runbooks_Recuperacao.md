---
title: P05-T06 — SLOs + on-call + runbooks + testes de recuperação
task_id: P05-T06
phase: P05
status: pendente
priority: alta
area: technology
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Tech até 2026-10-15
blocked_reason: "aguardando nomeação Tech"
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - TEC-002
dependencies:
  - P05-T01
target_file: 01-work/testes-experimentos/slos-runbooks-recuperacao-P05-T06-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P05_Tecnologia_Contratual]]"
  - "[[00-project-control/registro-lacunas/lacunas/TEC-002]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M05 — Tecnologia Contratual Aprovada]]"
evidence_required:
  - 01-work/testes-experimentos/slos-runbooks-recuperacao-P05-T06-v1.md
  - 01-work/testes-experimentos/runbooks-P05-T06/
  - 02-review/pacotes/P05-Tecnologia.md
created: 2026-08-26
tags:
  - task
  - fase-P05
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P05-T06 — SLOs + on-call + runbooks + testes de recuperação

## Objetivo

Definir SLOs, ownership on-call, runbooks, retries/DLQ/replay/quarentena/rollback e exercitar recuperação — fecha TEC-002 (G05.6).

## Entregável

`01-work/testes-experimentos/slos-runbooks-recuperacao-P05-T06-v1.md` (§1 SLOs + §2 on-call ownership + §3 runbooks + §4 testes recuperação) + `01-work/testes-experimentos/runbooks-P05-T06/` (runbooks individuais por fluxo crítico). Paths idênticos a `target_file` e `evidence_required`.

## Acceptance criteria (G05.6 — TEC-002)

- [ ] SLOs quantificados em `target_file` §1 com disponibilidade (ex: 99.5% M0), latência p95 e erro <1% por serviço crítico (plataforma/warehouse/consentimento) + `grep -c "SLO\|disponibilidade\|p95\|erro.*%" target_file` ≥4
- [ ] On-call + runbooks em §2–§3: dono on-call nominal por serviço, escalonamento, 5 runbooks mínimos (dependência indisponível, payload malformado, credencial falhou, backlog fila, vazamento tenant) + retries/DLQ/replay/quarentena/rollback — `ls 01-work/testes-experimentos/runbooks-P05-T06/` ≥5 arquivos e `grep -c "runbook\|DLQ\|replay\|quarentena\|rollback" target_file` ≥4
- [ ] Testes de recuperação exercitados em §4 com limiares serviço+integridade atendidos — ao menos 2 drills (falha dependência + replay DLQ) com resultado PASS documentado em `02-review/pacotes/P05-Tecnologia.md` §G05.6 — sem drills, gate não fecha

## Evidence required

- `01-work/testes-experimentos/slos-runbooks-recuperacao-P05-T06-v1.md` (§1 SLOs quantificados + §2 on-call/escalonamento + §3 runbooks + §4 plano/drills recuperação incluindo replay/DLQ)
- `01-work/testes-experimentos/runbooks-P05-T06/` (≥5 runbooks: um por fluxo crítico — ex: `runbook-dependencia-indisponivel.md`, `runbook-dlq-replay.md`, `runbook-tenant-leak.md`)
- `02-review/pacotes/P05-Tecnologia.md` §G05.6 (resultado drills — PASS/FAIL por limiar serviço+integridade + evidência log)
- Logs de drill: `01-work/testes-experimentos/drills-P05-T06/*.log` (evidência execução — quando existirem)

## Verification

- [ ] `ls 01-work/testes-experimentos/slos-runbooks-recuperacao-P05-T06-v1.md && grep -c "SLO\|disponibilidade\|p95" 01-work/testes-experimentos/slos-runbooks-recuperacao-P05-T06-v1.md | awk '{print ($1>=3)?"PASS SLOs":"FAIL"}' && grep -c "on-call\|escalonamento\|dono" 01-work/testes-experimentos/slos-runbooks-recuperacao-P05-T06-v1.md`
- [ ] `ls 01-work/testes-experimentos/runbooks-P05-T06/ | wc -l | awk '{print ($1>=5)?"PASS 5 runbooks":"FAIL count="$1}' && grep -c "DLQ\|replay\|quarentena\|rollback" 01-work/testes-experimentos/slos-runbooks-recuperacao-P05-T06-v1.md | awk '{print ($1>=2)?"PASS DLQ/replay":"FAIL"}'`
- [ ] `grep -c "G05.6\|TEC-002" 02-review/pacotes/P05-Tecnologia.md && grep -E "drill|recuperação.*PASS|limiar" 02-review/pacotes/P05-Tecnologia.md | head -3`

## Dependências

- [[04-project-management/tarefas/P05-T01_Arquitetura_Solucao_Ambientes|P05-T01]] — arquitetura-alvo + NFRs (base para SLOs)
- G05.6 (M05 — TEC-002) — `blocking: no` neste lote; piloto usa SLOs provisórios, full exige drills com limiares aprovados

## Registros

- [[00-project-control/registro-lacunas/lacunas/TEC-002]]
