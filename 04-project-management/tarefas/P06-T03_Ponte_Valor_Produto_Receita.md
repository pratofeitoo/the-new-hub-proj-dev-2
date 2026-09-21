---
title: P06-T03 — Ponte produto→valor→receita (árvore de valor)
task_id: P06-T03
phase: P06
status:
  - on-hold
priority: alta
area: business-model
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Finanças até 2026-10-15
  - PF Rezende // blocked: aguardando nomeação Produto até 2026-10-15
blocked_reason: aguardando nomeação Finanças e Produto — FIN-004
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - FIN-004
dependencies:
  - P03-T06
target_file: 01-work/dados-tech-financas/modelos-financeiros/ponte-valor-produto-receita-P06-T03-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/FIN-004]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/dados-tech-financas/modelos-financeiros/ponte-valor-produto-receita-P06-T03-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md
  - 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:16.700-03:00
---

# P06-T03 — Ponte produto→valor→receita (árvore de valor)

## Objetivo

Vincular atividade produto → valor cliente → receita HUB via 12 alavancas da árvore de valor + estados de valor P03 (G06.3 / FIN-004).

## Entregável

`01-work/dados-tech-financas/modelos-financeiros/ponte-valor-produto-receita-P06-T03-v1.md` — matriz valor para 1 oferta de lançamento com padrão evidência por caminho. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.3 — FIN-004)

- [ ] Ponte demonstrada para ≥1 oferta de lançamento — cada caminho `atividade produto → alavanca (1/12) → indicador (1/73) → receita HUB` com tipo valor (`potencial/influenciado/validado/realizado` per P03-T06/T07) e dono; tabela §1 do `target_file` com ≥3 caminhos mapeados; verificado por `grep -c "→\|alavanca"` ≥3
- [ ] Padrão de evidência aceito por caminho — cada caminho declara `Observado/Hipótese/Comprovado` + nível evidência + lacuna; nenhum caminho `Ilustrativo` contado como `Comprovado`; link explícito a `catalogo-metricas-grafo-P03-T05` e `registro-premissas-P06-T01`
- [ ] Sem afirmação além da evidência (BRD-002/GTM-007 blocking: yes) + STR-003 — valor ilustrativo permanece `Hipótese` até G06.10; `STR-003` blocking para converter valor em claim comercial/tração

## Evidence required

- `01-work/dados-tech-financas/modelos-financeiros/ponte-valor-produto-receita-P06-T03-v1.md` (§1 matriz ponte 1 oferta + §2 12 alavancas mapeadas + §3 padrão evidência por caminho + §4 reconciliação com P03-T06 estados valor)
- `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` (73 indicadores + 12 alavancas — referência cruzada)
- `01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md` (premissa de valor com confiança/proveniência)

## Verification

- [ ] `ls 01-work/dados-tech-financas/modelos-financeiros/ponte-valor-produto-receita-P06-T03-v1.md && grep -c "alavanca\|PES-\|FIN-\|PRO-" 01-work/dados-tech-financas/modelos-financeiros/ponte-valor-produto-receita-P06-T03-v1.md | awk '{print ($1>=3)?"PASS ponte ≥3 caminhos":"FAIL"}'`
- [ ] `grep -c "potencial\|influenciado\|validado\|realizado" 01-work/dados-tech-financas/modelos-financeiros/ponte-valor-produto-receita-P06-T03-v1.md | awk '{print ($1>=1)?"PASS estados valor":"FAIL"}' && grep -c "Comprovado\|Hipótese\|Observado" 01-work/dados-tech-financas/modelos-financeiros/ponte-valor-produto-receita-P06-T03-v1.md`
- [ ] `grep -c "BRD-002\|GTM-007\|Ilustrativo" 01-work/dados-tech-financas/modelos-financeiros/ponte-valor-produto-receita-P06-T03-v1.md | awk '{print ($1>=1)?"PASS rótulo evidência":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P03-T06_Templates_Linhagem_Evidencias|P03-T06]] — templates linhagem + estados valor (`potencial/influenciado/validado/realizado`)
- [[04-project-management/tarefas/P03-T05_Catalogo_Metricas_Grafo|P03-T05]] — catálogo 73 métricas + 12 alavancas (referência implícita)
- Gate M06: **M03+M04+M05 aprovados** — ponte requer dados canônicos + baseline técnico; `STR-003` blocking para claims comerciais

## Registros

- [[00-project-control/registro-lacunas/lacunas/FIN-004]]
