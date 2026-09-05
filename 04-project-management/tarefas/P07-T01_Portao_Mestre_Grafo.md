---
title: P07-T01 — Portão mestre + grafo de dependências (LCH-001)
task_id: P07-T01
phase: P07
status: pendente
priority: critica
area: launch-vision
layer: approval
owner:
  - PF Rezende
gap_ids:
  - LCH-001
  - STR-003
dependencies:
  - P06-T02
  - P04-T01
target_file: 02-review/portao-lancamento/portao-mestre-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[00-project-control/registro-lacunas/lacunas/LCH-001]]"
  - "[[04-project-management/marcos/marcos-fases-v1]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]]"
evidence_required:
  - 02-review/portao-lancamento/portao-mestre-v1.md
  - 04-project-management/marcos/marcos-fases-v1.md#M07
  - 00-project-control/decisoes/DEC-M07-*.md
created: 2026-08-26
tags:
  - task
  - fase-P07
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P07-T01 — Portão mestre + grafo de dependências (LCH-001)

## Objetivo

Construir portão mestre com checklist integrado (negócio, produto, dados, tech, jurídico, finanças, ops, comunicações) + grafo P01→P07 — consolida convergência **P04/M04 (governança e confiança)** e **P06/M06 (economia e GTM com evidência)** para liberação `M07 Launch Approved` (P07_Portao_Lancamento §6 G07.1/G07.8 + Plano_Fases §2.1).

## Entregável

`02-review/portao-lancamento/portao-mestre-v1.md` — grafo dependências P01→P07 (Mermaid §1) + checklist integrado 8 domínios (negócio, produto, dados, tech, jurídico, finanças, ops, comunicações) com status `aprovado / condicional / bloqueado` por item. Path idêntico ao frontmatter `target_file`; espelho em `04-project-management/marcos/marcos-fases-v1.md#M07`.

## Acceptance criteria (G07.1 + G07.8 — LCH-001 · STR-003)

- [ ] **G07.1 — Sem crítico em `blueprint`:** `portao-mestre-v1.md` cobre P01→P06 (8 domínios) — todo item tem `dono nominal + evidência linkada (02-review/ ou 01-work/) + status aprovado/condicional/bloqueado`; zero item `critico` com status `blueprint`; verificado por `grep -c "blueprint" 02-review/portao-lancamento/portao-mestre-v1.md` filtrado por `critico` == 0
- [ ] **Grafo P01→P07 sem contradição:** grafo Mermaid §1 do `target_file` + `04-project-management/marcos/marcos-fases-v1.md#M07` (Mermaid P00→P07) idênticos a `HUB_Plano_Fases_v1.md §2.1` — `P07 depende de M06+M04 (gov)` e `P04 -.-> M07` explícitos; `G07.8 Roadmap sem contradição` (STR-003) com evidência/responsável/decisão interdomínios antes de M07
- [ ] **Condicional com plano e launch só se aprovado:** todo `condicional` tem plano remediação datado (`owner + due date + evidência pendente`) em `00-project-control/decisoes/DEC-M07-*.md`; `P07 Launch Approved = P01..P06 aprovados + G07.1..G07.8 + sistema coerente` (P07 §6 Definição de lançamento pronto) — `launch` não libera com `M06` ou `M04` pendente

## Evidence required

- `02-review/portao-lancamento/portao-mestre-v1.md` (§1 grafo P01→P07 Mermaid + §2 checklist integrado 8 domínios com `aprovado/condicional/bloqueado`)
- `04-project-management/marcos/marcos-fases-v1.md#M07` (G07.1–G07.8 checkboxes + tabela `Depende de M06 + M04 (gov)` + Mermaid P00→P07)
- `00-project-control/decisoes/DEC-M07-*.md` (decisão Launch Approved com `00-project-control/decisoes/template-decisao.md` — pacote `02-review/pacotes/P07-Portao-Lancamento.md`)

## Verification

- [ ] `ls 02-review/portao-lancamento/portao-mestre-v1.md && grep -c "aprovado\|condicional\|bloqueado" 02-review/portao-lancamento/portao-mestre-v1.md && grep -c "P0[1-6]\|M0[1-6]" 02-review/portao-lancamento/portao-mestre-v1.md` — esperado grafo + checklist 8 domínios presentes
- [ ] `grep -i "blueprint" 02-review/portao-lancamento/portao-mestre-v1.md | grep -i "critico\|crítico" | wc -l` — esperado 0; `grep -c "a designar\|TBD\|a definir" 02-review/portao-lancamento/portao-mestre-v1.md` == 0
- [ ] `diff <(grep "P04.*M07\|Depende de.*M06" 02-review/portao-lancamento/portao-mestre-v1.md) <(grep "Depende de.*M06.*M04" 04-project-management/marcos/marcos-fases-v1.md)` — esperado sem divergência M06+M04; abrir `target_file` no Obsidian — Mermaid renderiza sem erro

## Dependências

- [[04-project-management/tarefas/P06-T02_Modelo_Financeiro_3_Cenarios|P06-T02]] — economia validada (M06) — `M06 Economia & GTM com Evidência Aprovados` (G06.1–G06.12) antes de M07
- [[04-project-management/tarefas/P04-T01_Arquitetura_Entidades|P04-T01]] — governança e confiança aprovadas (M04) — `M04 Gov Approved` como gating explícito; P07 requer **M06+M04** (marcos-fases-v1.md#M07 `Depende de M06 + M04 (gov)` + Plano_Fases §2.1 `P07 | P06 + P04 | Lançamento, somente se aprovado`)
- G07.8 (STR-003): `STR-003 precisa de evidência, responsável aceito e decisão interdomínios antes de M07; enquanto pendente, lançamento permanece bloqueado`

## Registros

- [[00-project-control/registro-lacunas/lacunas/LCH-001]] · [[00-project-control/registro-lacunas/lacunas/STR-003]]
- [[04-project-management/marcos/marcos-fases-v1#M07 — Portão de Lançamento (LAUNCH APPROVED)]] · [[04-project-management/planos-fase/P07_Portao_Lancamento#6. Critérios de saída (gate P07 — Launch Approved)]]
