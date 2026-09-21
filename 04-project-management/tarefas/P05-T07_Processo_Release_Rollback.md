---
title: P05-T07 — Processo release/rollback + ambientes + suporte
task_id: P05-T07
phase: P05
status:
  - on-hold
priority: alta
area: technology
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Tech até 2026-10-15
blocked_reason: aguardando nomeação Tech — release TEC-007
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - TEC-007
dependencies:
  - P05-T01
  - P05-T06
target_file: 01-work/testes-experimentos/processo-release-rollback-P05-T07-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P05_Tecnologia_Contratual]]"
  - "[[00-project-control/registro-lacunas/lacunas/TEC-007]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M05 — Tecnologia Contratual Aprovada]]"
evidence_required:
  - 01-work/testes-experimentos/processo-release-rollback-P05-T07-v1.md
  - 02-review/01-blueprint/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao.md
  - 02-review/pacotes/P05-Tecnologia.md
created: 2026-08-26
tags:
  - task
  - fase-P05
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:17.984-03:00
---

# P05-T07 — Processo release/rollback + ambientes + suporte

## Objetivo

Definir ciclo vida entrega, controles ambiente, runbook lançamento, rollback e modelo de suporte — fecha TEC-007 (G05.7 — **blocking: yes**).

## Entregável

`01-work/testes-experimentos/processo-release-rollback-P05-T07-v1.md` (§1 ciclo vida entrega + §2 controles ambiente + §3 runbook lançamento + §4 rollback + §5 suporte/on-call) + atualização `02-review/01-blueprint/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao.md` § release. Paths idênticos a `target_file` e `evidence_required`. Cópia histórica superada: `99-archive/superado/01-blueprint-v1-submissao-superada/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao.md`. Gate bloqueia P07 até aprovação.

## Acceptance criteria (G05.7 — TEC-007 — blocking: yes)

- [ ] Processo release/rollback documentado em `target_file` §1–§4 com portas obrigatórias: testes unitário/integração/contrato + ensaio migração + checagens segurança/qualidade dados/observabilidade + evidência backup/restauração + dono mudança + plano rollback com RTO — `grep -c "release\|rollback\|migração\|backup\|RTO" target_file` ≥6 e `grep -c "dono.*mudança\|owner" target_file` ≥1
- [ ] Ambientes + suporte em §2/§5: controles ambiente (dev/homolog/prod com promoção `01-work→02-review→03-approved`), runbook lançamento passo-a-passo, modelo suporte (níveis L1/L2, SLA, escalonamento, on-call) — `grep -c "ambiente\|dev\|homolog\|prod\|suporte\|SLA\|escalonamento" target_file` ≥6 e runbook testado (ensaio)
- [ ] Aprovação + teste em `02-review/pacotes/P05-Tecnologia.md` §G05.7 com parecer Tech+Ops "release/rollback/suporte aprovados e testados" — ensaio rollback exercitado com PASS — sem aprovação, M05 não fecha e P07 não inicia (**blocking: yes** bloqueia lançamento)

> **Blocking:** TEC-007/G05.7 é `blocking: yes` — sem processo release/rollback + ambientes + suporte aprovados e testados, M05 não é aprovado e P07 (portão lançamento) permanece bloqueado. Automação/expansão ambientes e progressive delivery ficam pós-MVP.

## Evidence required

- `01-work/testes-experimentos/processo-release-rollback-P05-T07-v1.md` (§1 ciclo vida + §2 controles ambiente + §3 runbook lançamento + §4 rollback/RTO + §5 suporte/on-call/SLA)
- `02-review/01-blueprint/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao.md` § release (atualização blueprint com ciclo vida + controles ambiente)
- `02-review/pacotes/P05-Tecnologia.md` §G05.7 (parecer Tech+Ops — aprovação release/rollback/suporte + resultado ensaio rollback PASS)
- `00-project-control/decisoes/DEC-M05-2026-10-15.md` (decisão gate M05 — G05.7 aprovado — **blocking: yes**)
- Log ensaio: `01-work/testes-experimentos/drills-P05-T07/ensaio-rollback-P05-T07.log` (quando existir — prova rollback exercitado)

## Verification

- [ ] `ls 01-work/testes-experimentos/processo-release-rollback-P05-T07-v1.md && grep -c "release\|rollback" 01-work/testes-experimentos/processo-release-rollback-P05-T07-v1.md | awk '{print ($1>=4)?"PASS release/rollback":"FAIL"}' && grep -c "RTO\|backup\|migração" 01-work/testes-experimentos/processo-release-rollback-P05-T07-v1.md`
- [ ] `grep -c "ambiente\|promoção\|01-work.*02-review.*03-approved" 01-work/testes-experimentos/processo-release-rollback-P05-T07-v1.md && ls 02-review/01-blueprint/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao.md && grep -c "release\|rollback\|ambiente" 02-review/01-blueprint/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao.md`
- [ ] `grep -c "G05.7\|TEC-007\|blocking" 02-review/pacotes/P05-Tecnologia.md && grep -E "Tech.*Ops|Ops.*Tech|rollback.*PASS|ensaio" 02-review/pacotes/P05-Tecnologia.md | head -3 && ls 00-project-control/decisoes/DEC-M05-*.md 2>/dev/null | head -1 || echo "DEC-M05 pendente — gate bloqueado"`

## Dependências

- [[04-project-management/tarefas/P05-T01_Arquitetura_Solucao_Ambientes|P05-T01]] — arquitetura-alvo + estratégia ambientes (G05.1)
- [[04-project-management/tarefas/P05-T06_SLOs_Runbooks_Recuperacao|P05-T06]] — SLOs + on-call + runbooks (G05.6) — rollback consome RTO/RPO e runbooks
- G05.7 (M05 — TEC-007) — **blocking: yes** — bloqueia M05 e P07; sem aprovação, `LCH-002` (P07-T02) não inicia

## Registros

- [[00-project-control/registro-lacunas/lacunas/TEC-007]]
