---
title: P05-T04 — Baseline técnico (custo/latência/volume/rate-limit)
task_id: P05-T04
phase: P05
status:
  - on-hold
priority: alta
area: technology
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Tech até 2026-10-15
blocked_reason: aguardando nomeação Tech — baseline TEC-005
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - TEC-005
dependencies:
  - P05-T02
target_file: 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P05_Tecnologia_Contratual]]"
  - "[[00-project-control/registro-lacunas/lacunas/TEC-005]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M05 — Tecnologia Contratual Aprovada]]"
evidence_required:
  - 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.md
  - 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.csv
  - 02-review/pacotes/P05-Tecnologia.md
created: 2026-08-26
tags:
  - task
  - fase-P05
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:09.151-03:00
---

# P05-T04 — Baseline técnico (custo/latência/volume/rate-limit)

## Objetivo

Estabelecer baseline por integração (M0–M2) para custo, latência, volume, rate-limit e disponibilidade — insumo obrigatório para modelo financeiro P06 — fecha TEC-005 (G05.4 — **blocking: yes**).

## Entregável

`01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.md` + `01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.csv` — tabela por integração (M0 CRM/plataforma/warehouse/consentimento + M1–M2 priorizadas) com premissas, fontes e validações explicitadas, para subsidiar o plano de negócio/lançamento e o modelo financeiro P06. Paths idênticos a `target_file` e `evidence_required`. Integração em P06 via `P06-T01_Registro_Premissas`.

## Acceptance criteria (G05.4 — TEC-005 — blocking: yes)

- [ ] Baseline publicado em `target_file` §1 + CSV com colunas `integracao,prioridade,custo_por_1k,latencia_p95_ms,volume_mensal,rate_limit_rps,disponibilidade_alvo,fonte,premissa` — 4 M0 mínimos + M1–M2 quando houver, zero "TBD" — `grep -c "custo\|latencia\|volume\|rate-limit" 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.md` ≥6 e `wc -l < baseline-tecnico-capacidade-P05-T04-v1.csv` ≥5
- [ ] Cada linha com fonte/premissa rastreável e validação (ex: `teste carga | doc parceiro | SOC2`) — `grep -c "fonte\|premissa\|validação" target_file` ≥4 e nenhuma linha com célula vazia em `custo_por_1k`/`latencia_p95_ms` para M0
- [ ] Baseline integrado ao modelo financeiro P06 — import em `01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-P06-T02-v1.xlsx` § premissas técnicas + link em `02-review/pacotes/P05-Tecnologia.md` §G05.4 com parecer Finanças+Tech "economia técnica sustenta plano" — sem integração, gate M05 não fecha (**blocking: yes** bloqueia P06)

> **Blocking:** TEC-005/G05.4 é `blocking: yes` — sem baseline custo/latência/volume/rate-limit publicado e integrado em P06, M05 não é aprovado e P06 não inicia.

## Evidence required

- `01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.md` (§1 tabela baseline + §2 premissas/fontes + §3 validações)
- `01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.csv` (CSV com header + ≥4 linhas M0 com custo/latência/volume/rate-limit/disponibilidade)
- `02-review/pacotes/P05-Tecnologia.md` §G05.4 (parecer Finanças+Tech — economia técnica sustenta plano)
- `01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-P06-T02-v1.xlsx` § premissas técnicas (prova integração em P06 — import baseline)

## Verification

- [ ] `ls 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.md && ls 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.csv && head -1 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.csv | grep -q "custo.*latencia.*volume.*rate_limit" && echo "PASS header" || echo "FAIL"; wc -l < 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.csv | awk '{print ($1>=5)?"PASS 4 M0":"FAIL"}'`
- [ ] `grep -c "TBD\|a definir\|a designar" 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.md | grep -q "^0$" && echo "PASS sem TBD" || echo "FAIL TBD presente"; grep -c "fonte\|premissa" 01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.md`
- [ ] `grep -c "G05.4\|TEC-005\|blocking" 02-review/pacotes/P05-Tecnologia.md && grep -c "baseline\|integra.*P06\|M06" 02-review/pacotes/P05-Tecnologia.md | awk '{print ($1>=1)?"PASS integrado P06":"FAIL"}' && ls 00-project-control/decisoes/DEC-M05-*.md 2>/dev/null | head -1 || echo "DEC-M05 pendente — gate bloqueado"`

## Dependências

- [[04-project-management/tarefas/P05-T02_Contratos_Integracao|P05-T02]] — contratos M0 + SoR (sem contrato, custo/volume não é estimável)
- G05.4 (M05 — TEC-005) — **blocking: yes** — bloqueia M05 e entrada P06; sem baseline, `P06-T01/T02` não fecham
- Consome P06-T01 (registro premissas) como downstream — baseline alimenta `FIN-001`/`FIN-003`

## Registros

- [[00-project-control/registro-lacunas/lacunas/TEC-005]]
