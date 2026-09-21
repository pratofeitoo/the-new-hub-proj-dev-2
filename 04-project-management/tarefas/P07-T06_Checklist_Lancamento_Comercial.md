---
title: P07-T06 — Checklist lançamento comercial (onboarding/contratos/preço)
task_id: P07-T06
phase: P07
status:
  - on-hold
priority: alta
area: launch-vision
layer: approval
owner:
  - PF Rezende // blocked: aguardando nomeação Operações até 2026-10-15
  - PF Rezende // blocked: aguardando nomeação Finanças até 2026-10-15
blocked_reason: aguardando nomeação Operações + Finanças — checklist comercial
blocked_until: 2026-10-15
gap_ids:
  - LCH-006
dependencies:
  - P06-T02
  - P04-T02
  - P07-T01
target_file: 02-review/portao-lancamento/checklist-comercial-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[00-project-control/registro-lacunas/lacunas/LCH-006]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]]"
evidence_required:
  - 02-review/portao-lancamento/checklist-comercial-v1.md
  - 01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.xlsx
  - 01-work/documentos-oficiais/_controle/
  - 02-review/portao-lancamento/portao-mestre-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P07
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:34.370-03:00
---

# P07-T06 — Checklist lançamento comercial (onboarding/contratos/preço)

## Objetivo

Formalizar onboarding cliente, contratos, precificação com base P06, aviso privacidade P04, suporte e alegações limitadas a evidência — checklist por oferta/mercado aprovado (G07.6 · LCH-006 · BRD-002/GTM-007).

## Entregável

`02-review/portao-lancamento/checklist-comercial-v1.md` — checklist por `oferta/mercado` com seções `onboarding + contratos + precificação (base P06) + aviso privacidade (base P04) + suporte + alegações limitadas a evidência P06`. Path idêntico ao frontmatter `target_file`; `03-approved/lancamento/` só pós `DEC-M07`.

## Acceptance criteria (G07.6 — LCH-006)

- [ ] **Checklist por oferta com base P06+P04:** `checklist-comercial-v1.md` §1–§5 cobre `onboarding cliente + contratos + precificação com base `P06-T02` (modelo 3 cenários reconciliado, sem dupla contagem, `ledger ARR/MRR` G06.2/G06.6) + aviso privacidade com base `P04-T02` (base legal + finalidade-campo + retenção LGPD)` — todo preço tem `fonte P06 evidenciada`; `grep -c "P06-T02\|modelo-financeiro\|ARR\|MRR" 02-review/portao-lancamento/checklist-comercial-v1.md` ≥ 3; aviso privacidade linka `P04-T02` + `P04-T08` (DSAR)
- [ ] **Alegações limitadas a evidência P06:** `suporte + alegações comerciais` em §6 do `target_file` limitadas a `evidência P06` — `grep -c "evidência P06\|evidence P06\|BRD-002\|GTM-007" 02-review/portao-lancamento/checklist-comercial-v1.md` ≥ 5; decks/pitches em `01-work/documentos-oficiais/_controle/` `P06-T10` reconciliados — `nenhuma afirmação excede evidência` (P06-T10) — `gap LCH-006` sem violação claims
- [ ] **Lançamento só se aprovado sem TBD:** checklist marcado `aprovado` só com `M06+M04` aprovados (P07 depende de M06+M04) + `G07.6` em `marcos-fases-v1.md#M07` PASS; `grep -i "TBD\|a definir\|a designar" 02-review/portao-lancamento/checklist-comercial-v1.md | wc -l` == 0; `03-approved/lancamento/` vazio até `DEC-M07` (G07.7 LCH-007 blocking: yes)

## Evidence required

- `02-review/portao-lancamento/checklist-comercial-v1.md` (§1 onboarding + §2 contratos + §3 precificação base P06-T02 + §4 aviso privacidade base P04-T02/GOV-002 + §5 suporte + §6 alegações limitadas a evidência)
- `01-work/dados-tech-financas/modelos-financeiros/modelo-financeiro-3-cenarios-P06-T02-v1.xlsx` + `01-work/dados-tech-financas/modelos-financeiros/registro-premissas-v0.md` (base preço P06-T02 reconciliada § P06 G06.2)
- `01-work/documentos-oficiais/_controle/` (matriz `P06-T10` afirmação→evidência `BRD-002/GTM-007` + aviso privacidade `P04-T02` mapeado `finalidade-campo`)
- `02-review/portao-lancamento/portao-mestre-v1.md` (`G07.6` marcado `aprovado/condicional/bloqueado` por oferta/mercado) + `04-project-management/marcos/marcos-fases-v1.md#M07`

## Verification

- [ ] `ls 02-review/portao-lancamento/checklist-comercial-v1.md && grep -c "onboarding\|contrato\|preço\|preco\|privacidade\|suporte\|alegação" 02-review/portao-lancamento/checklist-comercial-v1.md | awk '{print ($1>=6)?"PASS G07.6":"FAIL"}' && grep -c "P06-T02\|P04-T02" 02-review/portao-lancamento/checklist-comercial-v1.md | awk '{print ($1>=2)?"PASS base P06+P04":"FAIL"}'`
- [ ] `grep -c "evidência P06\|evidence\|BRD-002\|GTM-007" 02-review/portao-lancamento/checklist-comercial-v1.md | awk '{print ($1>=5)?"PASS alegações limitadas":"FAIL"}' && ls 01-work/documentos-oficiais/_controle/ | head -3`
- [ ] `grep -i "TBD\|a definir\|a designar" 02-review/portao-lancamento/checklist-comercial-v1.md | wc -l | awk '{print ($1==0)?"PASS sem TBD":"FAIL"}' && test -z "$(ls 03-approved/lancamento/ 2>/dev/null)" && echo "PASS 03-approved bloqueado até DEC-M07" || echo "PENDENTE"`

## Dependências

- [[04-project-management/tarefas/P06-T02_Modelo_Financeiro_3_Cenarios|P06-T02]] — modelo financeiro 3 cenários reconciliado (M06 G06.2) — base precificação; sem M06 não há preço aprovável
- [[04-project-management/tarefas/P04-T02_Mapa_Governanca_Dados_Fluxo|P04-T02]] — mapa governança dados + base legal (M04 G04.2) — aviso privacidade LGPD
- [[04-project-management/tarefas/P07-T01_Portao_Mestre_Grafo|P07-T01]] — portão mestre (G07.1) consolida G07.6; `P07 depende de M06+M04` — checklist só PASS se `M06+M04` aprovados (marcos-fases-v1.md#M07)
- [[04-project-management/tarefas/P06-T10_Matriz_Afirmacao_Evidencia|P06-T10]] — matriz afirmação-evidência (`BRD-002/GTM-007` — nenhuma afirmação excede evidência) — requisito `alegações limitadas`

## Registros

- [[00-project-control/registro-lacunas/lacunas/LCH-006]]
- [[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]] · [[04-project-management/planos-fase/P07_Portao_Lancamento#6. Critérios de saída (gate P07 — Launch Approved)]] · [[00-project-control/registro-lacunas/lacunas/BRD-002]] · [[00-project-control/registro-lacunas/lacunas/GTM-007]]
