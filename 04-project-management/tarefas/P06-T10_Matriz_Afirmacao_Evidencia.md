---
title: P06-T10 — Matriz afirmação-evidência + governança de claims (BRD)
task_id: P06-T10
phase: P06
status: pendente
priority: alta
area: brand-market
layer: refining
owner:
  - Tamara // provisional GTM — bloqueado até nomeação definitiva 2026-10-15
  - PF Rezende // provisional Jurídico — bloqueado até nomeação definitiva 2026-10-15
blocked_reason: "aguardando nomeação GTM e Jurídico — BRD-002/GTM-007 claims"
blocked_until: 2026-10-15
accountable: Tamara
gap_ids:
  - BRD-002
  - GTM-007
dependencies:
  - P06-T01
target_file: 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/matriz-afirmacao-evidencia-P06-T10-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/BRD-002]]"
  - "[[00-project-control/registro-lacunas/lacunas/GTM-007]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/matriz-afirmacao-evidencia-P06-T10-v1.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/glossario-controlado-P06-T10-v1.md
  - 05-resources/apresentacoes/pitch-decks/RECONCILIADO_P06-T10/
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P06-T10 — Matriz afirmação-evidência + governança de claims (BRD)

## Objetivo

Mapear cada afirmação externa a evidência + status aprovação; reconciliar decks com blueprint e registro de afirmações (G06.10 / BRD-002, GTM-007 — blocking: yes).

## Entregável

`01-work/pesquisa-e-confianca/documentos-oficiais/_controle/matriz-afirmacao-evidencia-P06-T10-v1.md` + `glossario-controlado-P06-T10-v1.md` + decks reconciliados em `05-resources/apresentacoes/pitch-decks/RECONCILIADO_P06-T10/`. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.10 — BRD-002/GTM-007 — blocking: yes)

- [ ] Decks/materiais GTM passam em review evidência + jurídico — matriz §1 com toda afirmação externa (pitch, one-pager, site) mapeada a `evidência + nível (Comprovado/Observado/Hipótese/Ilustrativo) + status aprovação (GTM+Jurídico)`; `glossario-controlado` §2 com termos proibidos vs permitidos; `grep -c "Ilustrativo — não validado\|bloqueado" target_file` ≥ n_claims ilustrativos
- [ ] Nenhuma afirmação excede estado de evidência (BRD-002 blocking: yes) — 100% claims com `nível evidência ≥ nível afirmação`; ROI/payload/tração ilustrativos rotulados e bloqueados para uso externo até `Comprovado`; `grep -c "excede.*evidência" target_file` == 0 + `grep -c "GTM-007\|BRD-002" target_file` ≥2
- [ ] Condição STR-003 + reconciliação — `STR-003` evidenciado antes de liberar claim comercial; decks reconciliados 1:1 com matriz (nenhum slide órfão); verificado por `diff` matriz vs decks; sem `BRD-004` no escopo (backlog pós-MVP per `P06_Economia_GTM_Evidencia.md#7`)

## Evidence required

- `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/matriz-afirmacao-evidencia-P06-T10-v1.md` (§1 matriz afirmação→evidência/nível/status + §2 reconciliação P06-T01 + §3 bloqueios BRD-002/GTM-007)
- `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/glossario-controlado-P06-T10-v1.md` (termos controlados — permitido vs proibido + substitutos ilustrativos)
- `05-resources/apresentacoes/pitch-decks/RECONCILIADO_P06-T10/` (decks reconciliados — cada afirmação com footnote nível evidência + carimbo Jurídico/GTM)

## Verification

- [ ] `ls 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/matriz-afirmacao-evidencia-P06-T10-v1.md && grep -c "BRD-002\|GTM-007" 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/matriz-afirmacao-evidencia-P06-T10-v1.md | awk '{print ($1>=2)?"PASS blocking":"FAIL"}'`
- [ ] `grep -c "Ilustrativo\|Hipótese\|Comprovado" 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/matriz-afirmacao-evidencia-P06-T10-v1.md | awk '{print ($1>=3)?"PASS níveis":"FAIL"}' && ls 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/glossario-controlado-P06-T10-v1.md`
- [ ] `ls 05-resources/apresentacoes/pitch-decks/RECONCILIADO_P06-T10/ && grep -R "Ilustrativo — não validado" 05-resources/apresentacoes/pitch-decks/RECONCILIADO_P06-T10/ | wc -l | awk '{print ($1>=1)?"PASS decks rotulados":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P06-T01_Registro_Premissas|P06-T01]] — registro premissas com confiança/proveniência (base para matriz)
- Gate M06: **M03+M04+M05 aprovados** — matriz requer dados+governança+tech validados; `STR-003` permanece blocking para qualquer claim comercial

## Registros

- [[00-project-control/registro-lacunas/lacunas/BRD-002]] · [[00-project-control/registro-lacunas/lacunas/GTM-007]]

> **Nota de escopo:** `BRD-002` e `GTM-007` são os gaps canônicos desta tarefa. `BRD-004` (governança de idioma, localização e terminologia) permanece backlog pós-MVP e não faz parte do critério G06.10.
> **Blocking:** `BRD-002/GTM-007 blocking: yes` — nenhuma afirmação visual/verbal pode exceder seu estado de evidência; deck externo sem review evidência+jurídico permanece bloqueado.
