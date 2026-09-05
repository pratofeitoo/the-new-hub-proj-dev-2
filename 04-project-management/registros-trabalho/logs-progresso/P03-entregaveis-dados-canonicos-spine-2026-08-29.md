---
title: P03 — Dados Canônicos (Spine) — Entregáveis
description: Lista consolidada dos entregáveis produzidos pelas tarefas da fase P03.
type: log
status: ativo
date: 2026-08-29
tags:
  - gestao-projeto
  - P03
  - dados-canonicos
  - entregaveis
---

# P03 — Dados Canônicos (Spine): Deliverables

> All artifacts below are drafts currently marked **`em-revisao`**.

| Task | File Title | Brief Description | File Path |
|---|---|---|---|
| **P03-T01** | Modelo Lógico/Físico v1 | 25 entidades canônicas, PK/FK, cardinalidades, relacionamentos temporais e `identity_alias`. | [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1]] |
| **P03-T02** | Especificação de Identidade | Matching, merging, survivorship, thresholds FP/FN e reversibilidade merge/split. | [[01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1]] |
| **P03-T02** | Dataset de Identidade Sintético | 20 pessoas, 40 aliases e 15 pares rotulados para testar matching. | [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/dataset-identidade-sintetico-P03-T02]] |
| **P03-T03** | Envelope de Evento e Schema | Envelope canônico com 17 campos, versionamento, idempotência e replay. | [[01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1]] |
| **P03-T03** | Fixture do Schema Registry | Fixture válida para `identity.merged` v1.0. | [[01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/fixtures/identity.merged.v1.0.valid]] |
| **P03-T04** | Dicionário Físico e Mapping | Mapeamento de aproximadamente 41 campos em 16 tabelas para entidades canônicas. | [[01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1]] |
| **P03-T04** | Registro de Correções | Quatro correções auditáveis: retenção, acesso, consentimento e evidência. | [[02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections]] |
| **P03-T05** | Catálogo de Métricas e Grafo | 73 indicadores, 12 alavancas, 10 dashboards e grafo de dependências. | [[01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1]] |
| **P03-T05** | Cópia na Síntese entre Abas | Cópia do catálogo para integração com a síntese entre abas. | [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/catalogo-metricas-grafo-P03-T05-v1]] |
| **P03-T06** | Templates de Linhagem e Evidências | Templates origem → métrica → ação → resultado → valor e caminho financeiro reproduzível. | [[01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1]] |
| **P03-T07** | Taxonomia de Estados de Valor | Estados `potencial → influenciado → validado → realizado`, deduplicação e holdout. | [[01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1]] |
| **P03-T08** | Matriz Dados-Finalidade | 5 fluxos × 41 campos com base legal, retenção, revogação e exclusão DSAR. | [[01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1]] |
| **P03-T09** | Fluxos Linhagem/Replay/DSAR | Fluxos de linhagem, correção, replay e DSAR. | [[01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1]] |
| **P03-T09** | XLSX de Inteligência de Dados Reconstruído | Workbook reconstruído com 41 campos, 15 abas e 73 indicadores. | [[02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx]] |
| **P03-T09** | Entity-Key Validation | Relatório de validação das chaves de entidade. | [[02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/entity-key-validation-P03-T09]] |
| **P03-T09** | ROI Recalculation | Relatório de recálculo e verificação de ROI. | [[02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/roi-recalculation-P03-T09]] |
| **P03-T09** | Corrected CSV Validation | Relatório de validação dos CSVs corrigidos. | [[02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/corrected-csv-validation-P03-T09]] |

## Summary

- **9 tasks**
- **18 listed deliverable files/artifacts**
- **P03-T04** is the explicit blocking gate for completing the P03 spine.

## Relações e reconciliação

- [[04-project-management/registros-trabalho/logs-progresso/2026-09-05-classificacao-20-relacoes-blueprint|Classificação das 20 relações Blueprint — plano de solução]]
