---
title: P06-T01 — Registro de premissas com proveniência (FIN-001)
task_id: P06-T01
phase: P06
status: pendente
priority: critica
area: business-model
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Finanças até 2026-10-12
blocked_reason: "aguardando nomeação Finanças — FIN-001"
blocked_until: 2026-10-12
accountable: PF Rezende
gap_ids:
  - FIN-001
dependencies:
  - P03-T05
  - P05-T04
target_file: 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/FIN-001]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M06 — Economia & GTM com Evidência Aprovados]]"
evidence_required:
  - 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md
  - 05-resources/planilhas/HUB_Mapa_Financeiro_Patrocinadores_Investidores_RECONCILIADO_P06-T01.xlsx
  - 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md#proveniencia
created: 2026-08-26
tags:
  - task
  - fase-P06
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P06-T01 — Registro de premissas com proveniência (FIN-001)

## Objetivo

Transformar premissas ilustrativas (ROI 28,42% etc.) em registro com fonte, data, confiança, dono e próxima evidência. Sem TBD em premissa crítica (G06.1 / FIN-001).

## Entregável

`01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md` + `05-resources/planilhas/HUB_Mapa_Financeiro_Patrocinadores_Investidores_RECONCILIADO_P06-T01.xlsx` reconciliado com registro — tabelas §1–§3 com proveniência completa. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G06.1 — FIN-001)

- [ ] Registro sem `TBD` em premissa crítica — toda premissa crítica com `fonte + data + confiança (Alta/Média/Baixa) + dono + próxima evidência`; zero célula vazia marcada `TBD/a definir/ilustrativo sem rótulo` — tabela §1 do `target_file`; verificado por `grep -c "TBD"` == 0 + `grep -c "Fonte\|Confiança\|Próxima evidência"` ≥ n_premissas
- [ ] Proveniência auditável por premissa — cada linha referencia `P03-T05` (métrica) ou `P05-T04` (baseline custo/latência) ou fonte externa datada; ROI 28,42% e similares rotulados `Ilustrativo — não validado` até G06.2/G06.10; planilha `05-resources/planilhas/HUB_Mapa_Financeiro..._RECONCILIADO` com crosswalk 1:1 ao registro
- [ ] Nenhuma afirmação excede estado de evidência (BRD-002/GTM-007 — blocking: yes) + condição STR-003 — premissas sem evidência permanecem `Hipótese` e não contam como tração/receita; `STR-003` evidenciado antes de qualquer projeção comercial ser apresentada externamente

## Evidence required

- `01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md` (§1 tabela premissas com fonte/data/confiança/dono/próxima evidência + §2 proveniência P03/P05 + §3 reconciliação planilha)
- `05-resources/planilhas/HUB_Mapa_Financeiro_Patrocinadores_Investidores_RECONCILIADO_P06-T01.xlsx` (abas reconciliadas com registro — fórmulas linkadas, sem valor órfão)
- `01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md#proveniencia` (anexo de fontes — data e dono por premissa)

## Verification

- [ ] `ls 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md && grep -c "TBD\|a definir\|a designar" 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md | grep -q "^0$" && echo "PASS sem TBD crítico" || echo "FAIL"`
- [ ] `grep -c "Fonte\|Confiança\|Próxima evidência" 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md && ls 05-resources/planilhas/HUB_Mapa_Financeiro_Patrocinadores_Investidores_RECONCILIADO_P06-T01.xlsx && echo "PASS proveniência + reconciliação"`
- [ ] `grep -c "Ilustrativo\|Hipótese" 01-work/dados-tech-financas/modelos-financeiros/registro-premissas-P06-T01-v1.md | awk '{print ($1>=1)?"PASS rótulo ilustrativo presente (BRD-002 blocking)":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P03-T05_Catalogo_Metricas_Grafo|P03-T05]] — métricas canônicas (73 indicadores, 12 alavancas)
- [[04-project-management/tarefas/P05-T04_Baseline_Tecnico_Capacidade|P05-T04]] — baseline custo/latência integrado em P06
- Gate M06 depende de **M03+M04+M05 aprovados** — `P06 sem M03+M04+M05 = hipótese` (ver `04-project-management/marcos/marcos-fases-v1.md#M06` + `04-project-management/planos-fase/P06_Economia_GTM_Evidencia.md#4 Entradas`); `STR-003` permanece blocking para claims até evidência+responsável+decisão interdomínios

## Registros

- [[00-project-control/registro-lacunas/lacunas/FIN-001]]

> **Nota:** `BRD-002`/`GTM-007` (blocking: yes) — nenhuma premissa ilustrativa apresentada como validada; rótulo `Ilustrativo — não validado` obrigatório até `G06.10` (matriz afirmação-evidência + review jurídico).
