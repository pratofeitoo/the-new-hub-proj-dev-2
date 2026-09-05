---
title: P06-T04 — Separação comercial vs instituto restrito
task_id: P06-T04
phase: P06
status: pendente
priority: critica
area: business-model
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Finanças até 2026-10-15
  - PF Rezende // blocked: aguardando nomeação Jurídico até 2026-10-15
blocked_reason: "aguardando nomeação Finanças e Jurídico — FIN-005 separação restrito"
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - FIN-005
dependencies:
  - P04-T01
target_file: 01-work/dados-tech-financas/modelos-financeiros/separacao-comercial-restrito-P06-T04-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/FIN-005]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/dados-tech-financas/modelos-financeiros/separacao-comercial-restrito-P06-T04-v1.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/parecer-separacao-P06-T04-v1.md
  - 00-project-control/decisoes/DEC-P06-T04-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P06-T04 — Separação comercial vs instituto restrito

## Objetivo

Definir alocação por entidade, transfer pricing, controles fundos restritos e relatórios — segregar comercial vs instituto (G06.4 / FIN-005).

## Entregável

`01-work/dados-tech-financas/modelos-financeiros/separacao-comercial-restrito-P06-T04-v1.md` — minuta de política + parecer triplo (Jurídico+Finanças+Governança) em `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/`. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.4 — FIN-005)

- [ ] Separação comercial vs instituto restrito **aprovada** por Jurídico + Finanças + Governança — 3 assinaturas nominais em `DEC-P06-T04-v1.md` + parecer em `_controle/parecer-separacao-P06-T04-v1.md`; política §1–§4 do `target_file` cobre alocação entidade, transfer pricing, controles fundos restritos e relatórios segregados
- [ ] Controles auditáveis sem lacuna — regra transfer pricing documentada (método + base legal), trilha fundos restritos com ledger segregado, relatórios por entidade; `grep -c "transfer pricing\|fundo restrito\|ledger" target_file` ≥3
- [ ] Sem uso de fundo restrito como receita comercial (BRD-002/GTM-007 blocking: yes) — nenhuma projeção P06-T02/T03 conta restrito como receita; `STR-003` não autoriza reclassificação sem aprovação tripla

## Evidence required

- `01-work/dados-tech-financas/modelos-financeiros/separacao-comercial-restrito-P06-T04-v1.md` (§1 alocação entidade + §2 transfer pricing + §3 controles fundos restritos + §4 relatórios segregados)
- `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/parecer-separacao-P06-T04-v1.md` (parecer jurídico + finanças + governança — 3 assinaturas)
- `00-project-control/decisoes/DEC-P06-T04-v1.md` (decisão tripla aprovando separação — gate G06.4)

## Verification

- [ ] `ls 01-work/dados-tech-financas/modelos-financeiros/separacao-comercial-restrito-P06-T04-v1.md && grep -c "transfer pricing\|fundo restrito" 01-work/dados-tech-financas/modelos-financeiros/separacao-comercial-restrito-P06-T04-v1.md | awk '{print ($1>=2)?"PASS controles":"FAIL"}'`
- [ ] `ls 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/parecer-separacao-P06-T04-v1.md && grep -c "Jurídico\|Finanças\|Governança" 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/parecer-separacao-P06-T04-v1.md | awk '{print ($1>=3)?"PASS 3 aprovações":"FAIL"}'`
- [ ] `ls 00-project-control/decisoes/DEC-P06-T04-v1.md && echo "PASS decisão tripla" || echo "FAIL G06.4 bloqueado"`

## Dependências

- [[04-project-management/tarefas/P04-T01_Arquitetura_Entidades|P04-T01]] — arquitetura 4 unidades (parecer jurídico M04)
- Gate M06: **M03+M04+M05 aprovados** — separação requer M04 governança aprovada; sem M04, minuta permanece `Hipótese` não aprovada

## Registros

- [[00-project-control/registro-lacunas/lacunas/FIN-005]]
