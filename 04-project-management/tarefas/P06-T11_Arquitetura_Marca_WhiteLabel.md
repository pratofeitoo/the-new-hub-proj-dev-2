---
title: P06-T11 — Arquitetura de marca + regras white-label
task_id: P06-T11
phase: P06
status:
  - on-hold
priority: alta
area: brand-market
layer: blueprint
owner:
  - PF Rezende // blocked: aguardando nomeação Marca/Mercado até 2026-10-15
  - PF Rezende // blocked: aguardando nomeação Jurídico até 2026-10-15
blocked_reason: aguardando nomeação Marca/Mercado e Jurídico — BRD-001/003
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - BRD-001
  - BRD-003
dependencies:
  - P01-T01
target_file: 02-review/01-blueprint/marca-mercado/arquitetura-marca-whitelabel-P06-T11-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/BRD-001]]"
  - "[[00-project-control/registro-lacunas/lacunas/BRD-003]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 02-review/01-blueprint/marca-mercado/arquitetura-marca-whitelabel-P06-T11-v1.md
  - 01-work/documentos-oficiais/_controle/parecer-marca-whitelabel-P06-T11-v1.md
  - 00-project-control/decisoes/DEC-P06-T11-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:26.868-03:00
---

# P06-T11 — Arquitetura de marca + regras white-label

## Objetivo

Definir hierarquia marca-produto-grupo + limites white-label (atribuição, visibilidade, integridade metodológica) (G06.11 / BRD-001, BRD-003).

## Entregável

`02-review/01-blueprint/marca-mercado/arquitetura-marca-whitelabel-P06-T11-v1.md` + parecer em `01-work/documentos-oficiais/_controle/` — proposta para governança marca + Produto/Jurídico. Path idêntico ao frontmatter `target_file` (corrigido de `99-archive/superado/` para `02-review/01-blueprint/` pós-M06).

## Acceptance criteria (G06.11 — BRD-001/003)

- [ ] Arquitetura marca aprovada por Governança de marca (BRD-001) — §1 hierarquia marca-produto-grupo (HUB/Instituto/Produto) com regra uso por canal + §2 visibilidade/atribuição; `DEC-P06-T11-v1.md` assinado por Marca+Governança; `grep -c "hierarquia\|atribuição\|visibilidade" target_file` ≥3
- [ ] Regras white-label aprovadas por Produto+Marca+Jurídico (BRD-003) — §3 limites deployment (quando white-label permitido/proibido, integridade metodológica, dados não misturados); `parecer-marca-whitelabel-P06-T11-v1.md` com 3 assinaturas; sem `99-archive/superado` sem nota
- [ ] Sem marca além da evidência (BRD-002/GTM-007 blocking: yes) + STR-003 — nenhuma promessa white-label excede capacidade P05; `STR-003` blocking para claim categoria/marca sem decisão interdomínios

## Evidence required

- `02-review/01-blueprint/marca-mercado/arquitetura-marca-whitelabel-P06-T11-v1.md` (§1 hierarquia + §2 visibilidade/atribuição + §3 regras white-label + §4 integridade metodológica)
- `01-work/documentos-oficiais/_controle/parecer-marca-whitelabel-P06-T11-v1.md` (parecer Produto+Marca+Jurídico — 3 assinaturas)
- `00-project-control/decisoes/DEC-P06-T11-v1.md` (decisão governança marca — gate G06.11)

## Verification

- [ ] `ls 02-review/01-blueprint/marca-mercado/arquitetura-marca-whitelabel-P06-T11-v1.md && grep -c "hierarquia\|white-label\|atribuição" 02-review/01-blueprint/marca-mercado/arquitetura-marca-whitelabel-P06-T11-v1.md | awk '{print ($1>=3)?"PASS arquitetura":"FAIL"}'`
- [ ] `ls 01-work/documentos-oficiais/_controle/parecer-marca-whitelabel-P06-T11-v1.md && grep -c "Produto\|Marca\|Jurídico" 01-work/documentos-oficiais/_controle/parecer-marca-whitelabel-P06-T11-v1.md | awk '{print ($1>=3)?"PASS 3 aprovações":"FAIL"}'`
- [ ] `ls 00-project-control/decisoes/DEC-P06-T11-v1.md && echo "PASS decisão marca" || echo "FAIL G06.11 bloqueado"`

## Dependências

- [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades|P01-T01]] — matriz 4 unidades (base entidade para marca)
- Gate M06: **M03+M04+M05 aprovados**

## Registros

- [[00-project-control/registro-lacunas/lacunas/BRD-001]] · [[00-project-control/registro-lacunas/lacunas/BRD-003]]
