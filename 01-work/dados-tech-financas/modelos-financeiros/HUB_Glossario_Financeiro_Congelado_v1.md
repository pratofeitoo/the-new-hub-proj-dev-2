---
title: Glossário Financeiro Congelado v1 — HUB
tipo: glossario_financeiro
versao: 1.0
fase: M0
status: em-elaboracao
data: 2026-09-02
fonte: Relatorio_CrossReview cap.6 + BP-003 cap.4 + taxonomia-estados-valor-P03-T07
tags: [financeiro, glossario, m0, valor]
---

# Glossário Financeiro Congelado v1

> **Reconciliação:** [[01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1|crosswalk da fonte aprovada]]. Este glossário permanece `em-elaboracao` até validação financeira.

## Termos canônicos (usar exatamente assim)

|Termo|Definição|Quando usar|
|---|---|---|
|**Valor Potencial**|Benefício estimado sem atribuição causal|`FLD-022 estimated_value`|
|**Valor Influenciado**|Benefício com intervenção e métrica ligada|`recommendation_id` + `match_id`|
|**Valor Validado**|Benefício validado por Controladoria/Financeiro|`FLD-023 realized_value` + aprovação|
|**Valor Realizado**|Lançamento contábil efetivo no ledger|`transaction_id`|

## Regras congeladas

1. **Dupla contagem proibida:** deduplicar por `beneficiário × alavanca × período × intervenção`.
2. **Ledger único:** `fact_financial_value` é fonte da verdade, com `state` e `competence_date`.
3. **Teto por população:** nenhum valor pode exceder o teto elegível da população; aplicar **haircut DAT-08** (índice de confiança do impacto).
4. **14_ROI zerado:** manter zero até baseline Monks; `06_Simulador_ROI` é ilustrativo, não aprovado (28,42% ROI e 9,34m payback não servem à decisão).
5. **Sem soma entre camadas:** `FIN-01 Benefício bruto` não soma com `FIN-08 Receita HUB` sem registro no ledger e regra de atribuição aprovada.

## KPIs táticos promovidos a M0

|KPI Planilha|Fórmula|Blueprint destino|Status|
|---|---|---|---|
|**KPI-PERF-01** Atingimento|`Σ progresso×peso / Σ peso`|PES-02 proxy|**Novo M0** — Qulture/Workday|
|**KPI-PERF-02** Qualidade da meta|`pontos / pontos possíveis`|DAT-01 proxy|**Novo M0** — Nota Qualidade|
|**KPI-ALO-01** Alocação faturável|`billable / available`|RH-09 proxy|**Novo M0** — antecipado de M2|
|**KPI-ALO-02** Receita disponível perdida|`horas ociosas × taxa`|FIN-06 proxy|**Novo M0** — antecipado de M2|

## Mapeamento de estados

Os oito status conceituais da especificação são mapeados ao enum operacional de quatro estados usado pelo ledger:

| Status conceitual | Estado operacional | Regra |
|---|---|---|
| `identificado`, `estimado` | `Potencial` | Hipótese ou cenário; não entra no ROI realizado. |
| `aprovado`, `em realização` | `Influenciado` | Intervenção associada, ainda sem reconhecimento financeiro final. |
| `validado` | `Validado` | Protocolo e revisão independente concluídos. |
| `realizado` | `Realizado` | Ledger, `contract_id`, `transaction_id` e aprovação Financeiro. |
| `expirado`, `rejeitado` | Terminal não promovível | Não pode ser promovido nem somado ao valor realizado. |

## Rastreabilidade

- Matriz: [[03-approved/nucleo-inteligencia/analises-processadas/Matriz_Convergencia_73_16_25_23_12_8|Matriz de Convergência]].
- Ledger e estados: [[01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1|Taxonomia de estados de valor]].
- Simulador: `06_Simulador_ROI_analise.md`; deduplicação: BP-003 cap.4 e `DAT-006`.
