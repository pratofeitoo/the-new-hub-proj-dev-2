---
title: P07-T04 — Matriz rastreabilidade requisito→evidência→entregável
task_id: P07-T04
phase: P07
status: pendente
priority: alta
area: launch-vision
layer: approval
owner:
  - PF Rezende
gap_ids:
  - LCH-004
dependencies:
  - P07-T01
target_file: 02-review/evidencias/matriz-rastreabilidade-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[00-project-control/registro-lacunas/lacunas/LCH-004]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]]"
evidence_required:
  - 02-review/evidencias/matriz-rastreabilidade-v1.md
  - 02-review/portao-lancamento/portao-mestre-v1.md
  - 04-project-management/marcos/marcos-fases-v1.md#M07
created: 2026-08-26
tags:
  - task
  - fase-P07
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P07-T04 — Matriz rastreabilidade requisito→evidência→entregável

## Objetivo

Mapear cada requisito crítico a evidência e entregável — garantir nenhum órfão crítico (G07.4 · LCH-004 + STR-003) com rastreabilidade `requisito → evidência → entregável` auditável.

## Entregável

`02-review/evidencias/matriz-rastreabilidade-v1.md` (ou `.xlsx`) — tabela com colunas `requisito | gap_id | evidência (path 02-review/01-work/) | entregável | status aprovado/condicional/bloqueado | dono` — cobre críticos P01→P06 + LCH-* + STR-003. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G07.4 — LCH-004)

- [ ] **Rastreabilidade sem órfão crítico:** matriz §1–§2 lista todo requisito crítico P01→P06 (LCH-001..007, STR-003, FIN-003, DAT-010, TEC-005/007, GOV-001, BRD-002/GTM-007 etc.) com `evidência` preenchida (`02-review/` ou `01-work/` path) — zero linha crítica com `evidência = vazio/TBD/sem evidência`; `grep -i "sem evidência\|TBD\|a definir\|a designar" 02-review/evidencias/matriz-rastreabilidade-v1.md | wc -l` == 0
- [ ] **Órfão = bloqueado com reentrada:** todo requisito sem evidência marcado `bloqueado` em `matriz` + `portao-mestre-v1.md` (G07.1) com `evidência faltante + fronteira provisória segura + autoridade decisão + critérios reentrada` (P07-Portao_Lancamento §8 + Blueprint Lancamento § LCH-007) — nenhum `blocked/refining` citável em materiais lançamento
- [ ] **Verificação cruzada M07 sem crítico órfão:** `marcos-fases-v1.md#M07 G07.4` marcado `PASS` só se `matriz` sem órfão crítico; `P07 depende de M06+M04` — matriz comprova que P06 (economia) + P04 (gov) evidências existem; `03-approved/` não recebe órfão (G07.7 blocking)

## Evidence required

- `02-review/evidencias/matriz-rastreabilidade-v1.md` (§1 matriz requisito→evidência→entregável com `gap_id` + path + §2 lista órfãos `bloqueado` com reentrada)
- `02-review/portao-lancamento/portao-mestre-v1.md` (G07.4 refletido — `aprovado/condicional/bloqueado` por requisito crítico)
- `04-project-management/marcos/marcos-fases-v1.md#M07` (`- [ ] **G07.4** Rastreabilidade sem órfão crítico` + `G07.8 Roadmap sem contradição`)

## Verification

- [ ] `ls 02-review/evidencias/matriz-rastreabilidade-v1.md && grep -c "gap_id\|LCH-\|STR-\|FIN-\|DAT-\|TEC-\|GOV-\|BRD-\|GTM-" 02-review/evidencias/matriz-rastreabilidade-v1.md | awk '{print ($1>=10)?"PASS cobertura crítica":"FAIL"}' && grep -i "sem evidência\|TBD\|a definir" 02-review/evidencias/matriz-rastreabilidade-v1.md | wc -l | awk '{print ($1==0)?"PASS sem órfão":"FAIL órfão"}'`
- [ ] `grep -c "bloqueado" 02-review/evidencias/matriz-rastreabilidade-v1.md && grep -c "reentrada\|evidência faltante\|fronteira provisória" 02-review/evidencias/matriz-rastreabilidade-v1.md | awk '{print ($1>=1)?"PASS reentrada definida":"PENDENTE"}'`
- [ ] `grep -c "G07.4" 04-project-management/marcos/marcos-fases-v1.md && ls 02-review/portao-lancamento/portao-mestre-v1.md && test -z "$(ls 03-approved/lancamento/ 2>/dev/null)" && echo "PASS 03-approved sem órfão" || echo "FAIL"`

## Dependências

- [[04-project-management/tarefas/P07-T01_Portao_Mestre_Grafo|P07-T01]] — portão mestre (G07.1) fornece checklist 8 domínios; matriz comprova cobertura
- G07.4 (LCH-004): `Nenhum crítico órfão` — matriz é a evidência; `P07 depende de M06+M04` — órfão em P04 (gov) ou P06 (economia) bloqueia M07
- G07.1 + G07.7: `portao-mestre` + `ciclo-vida` (P07-T07 LCH-007 blocking) — órfão `blocked/refining` não pode entrar em `03-approved/` nem ser citado em lançamento

## Registros

- [[00-project-control/registro-lacunas/lacunas/LCH-004]]
- [[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]] · [[04-project-management/planos-fase/P07_Portao_Lancamento#6. Critérios de saída (gate P07 — Launch Approved)]] · [[02-review/01-blueprint/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao#Regras de promoção]]
